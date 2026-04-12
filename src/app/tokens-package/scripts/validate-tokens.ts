#!/usr/bin/env node

/**
 * Token Validation Script
 *
 * Validates UX4G design tokens for:
 * - Complete descriptions
 * - No orphaned token references
 * - Consistent naming conventions
 * - WCAG color contrast compliance
 * - Required $type annotations
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ValidationError {
  file: string;
  path: string;
  type: 'error' | 'warning';
  message: string;
}

interface TokenValue {
  value: string | number | any;
  description?: string;
  $type?: string;
  [key: string]: any;
}

type TokenObject = {
  [key: string]: TokenValue | TokenObject;
};

const errors: ValidationError[] = [];
const warnings: ValidationError[] = [];

/**
 * Calculate relative luminance for WCAG contrast ratio
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
function getLuminance(hex: string): number {
  // Remove # if present
  hex = hex.replace('#', '');

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Apply gamma correction
  const rLin = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLin = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLin = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if a color value is a valid hex color
 */
function isHexColor(value: any): value is string {
  return typeof value === 'string' && /^#[0-9A-Fa-f]{6}$/.test(value);
}

/**
 * Extract all token references from a value
 */
function extractTokenReferences(value: any): string[] {
  if (typeof value !== 'string') return [];

  const matches = value.match(/\{([^}]+)\}/g);
  if (!matches) return [];

  return matches.map(match => match.slice(1, -1));
}

/**
 * Validate a single token object
 */
function validateToken(
  obj: TokenObject,
  currentPath: string[] = [],
  fileName: string = '',
  allTokens: any = {}
): void {
  for (const [key, value] of Object.entries(obj)) {
    // Skip metadata keys
    if (key.startsWith('$')) continue;

    const newPath = [...currentPath, key];
    const pathString = newPath.join('.');

    if (value && typeof value === 'object') {
      if ('value' in value) {
        // This is a token with a value
        const token = value as TokenValue;

        // Check 1: All tokens should have descriptions
        if (!token.description) {
          warnings.push({
            file: fileName,
            path: pathString,
            type: 'warning',
            message: 'Missing description'
          });
        }

        // Check 2: Validate token references
        if (typeof token.value === 'string') {
          const references = extractTokenReferences(token.value);
          for (const ref of references) {
            // Check if reference exists in allTokens
            const refParts = ref.split('.');
            let current = allTokens;
            let found = true;

            for (const part of refParts) {
              if (current && typeof current === 'object' && part in current) {
                current = current[part];
              } else {
                found = false;
                break;
              }
            }

            if (!found) {
              errors.push({
                file: fileName,
                path: pathString,
                type: 'error',
                message: `Orphaned token reference: ${ref}`
              });
            }
          }
        }

        // Check 3: Color tokens should have WCAG annotations (if they're text/background pairs)
        if (isHexColor(token.value)) {
          // Check if this is a text color that should have contrast info
          if (pathString.includes('text') || pathString.includes('foreground')) {
            // This is informational - we'd need to know the background to validate
            // Just warn if there's no a11y note
            if (!token.a11y && !token.description?.includes('WCAG')) {
              warnings.push({
                file: fileName,
                path: pathString,
                type: 'warning',
                message: 'Color token missing WCAG compliance note'
              });
            }
          }
        }

        // Check 4: Naming convention - should be kebab-case or camelCase, not snake_case
        if (key.includes('_')) {
          warnings.push({
            file: fileName,
            path: pathString,
            type: 'warning',
            message: 'Token uses snake_case naming (prefer kebab-case or camelCase)'
          });
        }
      } else {
        // This is a nested object, recurse
        validateToken(value as TokenObject, newPath, fileName, allTokens);
      }
    }
  }
}

/**
 * Validate WCAG contrast for common color pairs
 */
function validateColorContrast(allTokens: any, fileName: string): void {
  // Extract colors from tokens
  const colors: Record<string, string> = {};

  function extractColors(obj: any, prefix: string = '') {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;

      const path = prefix ? `${prefix}.${key}` : key;

      if (value && typeof value === 'object') {
        if ('value' in value && isHexColor(value.value)) {
          colors[path] = value.value;
        } else {
          extractColors(value, path);
        }
      }
    }
  }

  extractColors(allTokens);

  // Check common pairs
  const pairs = [
    { fg: 'text.primary', bg: 'background.primary', minRatio: 4.5, level: 'AA' },
    { fg: 'text.secondary', bg: 'background.primary', minRatio: 4.5, level: 'AA' },
    { fg: 'text.inverse', bg: 'background.inverse', minRatio: 4.5, level: 'AA' },
  ];

  for (const pair of pairs) {
    const fgPath = Object.keys(colors).find(k => k.includes(pair.fg));
    const bgPath = Object.keys(colors).find(k => k.includes(pair.bg));

    if (fgPath && bgPath) {
      const fgColor = colors[fgPath];
      const bgColor = colors[bgPath];

      try {
        const ratio = getContrastRatio(fgColor, bgColor);

        if (ratio < pair.minRatio) {
          errors.push({
            file: fileName,
            path: `${fgPath} + ${bgPath}`,
            type: 'error',
            message: `Contrast ratio ${ratio.toFixed(2)}:1 fails WCAG ${pair.level} (min ${pair.minRatio}:1)`
          });
        }
      } catch (e) {
        // Invalid color format, skip
      }
    }
  }
}

/**
 * Main validation function
 */
function validateTokens(): void {
  const tokensDir = path.join(__dirname, '../tokens');

  // Load all token files
  const tokenFiles: string[] = [];
  const allTokensData: any = {};

  function findTokenFiles(dir: string): void {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        findTokenFiles(filePath);
      } else if (file.endsWith('.json') && file !== 'index.json') {
        tokenFiles.push(filePath);

        try {
          const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          // Merge into allTokensData for reference checking
          if (data.ux4g) {
            if (!allTokensData.ux4g) allTokensData.ux4g = {};
            Object.assign(allTokensData.ux4g, data.ux4g);
          }
        } catch (e) {
          errors.push({
            file: path.relative(tokensDir, filePath),
            path: '',
            type: 'error',
            message: `Failed to parse JSON: ${e instanceof Error ? e.message : String(e)}`
          });
        }
      }
    }
  }

  findTokenFiles(tokensDir);

  // Validate each file
  for (const filePath of tokenFiles) {
    const relativePath = path.relative(tokensDir, filePath);

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      // Check 1: Schema validation
      if (!data.$schema) {
        warnings.push({
          file: relativePath,
          path: '',
          type: 'warning',
          message: 'Missing $schema declaration'
        });
      } else if (!data.$schema.includes('designtokens.org')) {
        warnings.push({
          file: relativePath,
          path: '',
          type: 'warning',
          message: 'Schema should reference Design Tokens Community Group format'
        });
      }

      // Check 2: Validate token structure
      if (data.ux4g) {
        validateToken(data.ux4g, ['ux4g'], relativePath, allTokensData);
      }

      // Check 3: Validate WCAG contrast for theme files
      if (relativePath.includes('semantic') || relativePath.includes('theme')) {
        validateColorContrast(data, relativePath);
      }

    } catch (e) {
      // Already caught in findTokenFiles
    }
  }
}

/**
 * Print results
 */
function printResults(): void {
  console.log('\n🔍 UX4G Token Validation Report\n');
  console.log('═'.repeat(60));

  if (errors.length === 0 && warnings.length === 0) {
    console.log('\n✅ All tokens validated successfully!');
    console.log(`   Checked ${errors.length + warnings.length} tokens\n`);
    return;
  }

  if (errors.length > 0) {
    console.log(`\n❌ ERRORS (${errors.length}):\n`);

    for (const error of errors) {
      console.log(`   File: ${error.file}`);
      if (error.path) console.log(`   Path: ${error.path}`);
      console.log(`   ❌ ${error.message}\n`);
    }
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warnings.length}):\n`);

    for (const warning of warnings) {
      console.log(`   File: ${warning.file}`);
      if (warning.path) console.log(`   Path: ${warning.path}`);
      console.log(`   ⚠️  ${warning.message}\n`);
    }
  }

  console.log('═'.repeat(60));
  console.log(`\nSummary: ${errors.length} errors, ${warnings.length} warnings\n`);

  if (errors.length > 0) {
    process.exit(1);
  }
}

// Run validation
try {
  validateTokens();
  printResults();
} catch (error) {
  console.error('❌ Validation failed:', error instanceof Error ? error.message : String(error));
  process.exit(1);
}

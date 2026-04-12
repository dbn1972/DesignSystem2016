#!/usr/bin/env node
/**
 * Build Script for @ux4g/tokens
 * Generates all output formats from source tokens
 */

const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Import all token files
const colors = require('../tokens/base/colors.json');
const typography = require('../tokens/base/typography.json');
const spacing = require('../tokens/base/spacing.json');
const sizing = require('../tokens/base/sizing.json');
const radius = require('../tokens/base/radius.json');
const shadows = require('../tokens/base/shadows.json');
const opacity = require('../tokens/base/opacity.json');
const motion = require('../tokens/base/motion.json');
const zIndex = require('../tokens/base/z-index.json');
const semantic = require('../tokens/semantic.json');
const semanticThemes = require('../tokens/semantic-themes.json');

/**
 * Flatten nested token object into dot notation
 */
function flattenTokens(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$') || key === 'description' || key === 'a11y') continue;
    
    const path = prefix ? `${prefix}.${key}` : key;
    
    if (value && typeof value === 'object') {
      if (value.value !== undefined) {
        result[path] = value.value;
      } else {
        flattenTokens(value, path, result);
      }
    }
  }
  return result;
}

/**
 * Resolve token references like {ux4g.color.base.navy.500}
 */
function resolveReferences(value, tokens) {
  if (typeof value !== 'string') return value;
  if (!value.startsWith('{') || !value.endsWith('}')) return value;
  
  const ref = value.slice(1, -1);
  const parts = ref.split('.');
  let resolved = tokens;
  
  for (const part of parts) {
    resolved = resolved?.[part];
  }
  
  return typeof resolved === 'object' && resolved?.value 
    ? resolveReferences(resolved.value, tokens) 
    : resolved;
}

function isTokenLeaf(value) {
  return Boolean(value && typeof value === 'object' && value.value !== undefined);
}

function collectTokenEntries(obj, path = [], result = []) {
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$') || key === 'description' || key === 'a11y') continue;

    if (isTokenLeaf(value)) {
      result.push({ path: [...path, key], value: value.value });
    } else if (value && typeof value === 'object') {
      collectTokenEntries(value, [...path, key], result);
    }
  }

  return result;
}

function normalizeCssValue(value) {
  if (typeof value === 'number') return String(value);
  return value;
}

function toCssVarName(pathSegments) {
  return `--ux4g-${pathSegments.join('-')}`;
}

function appendCssEntries(lines, entries, tokenTree, transformPath = (path) => path) {
  for (const entry of entries) {
    const cssVar = toCssVarName(transformPath(entry.path));
    const resolvedValue = normalizeCssValue(resolveReferences(entry.value, tokenTree));
    lines.push(`  ${cssVar}: ${resolvedValue};`);
  }
}

function normalizeStateAliasPath(pathSegments) {
  if (pathSegments[pathSegments.length - 1] === 'DEFAULT') {
    return pathSegments.slice(0, -1);
  }
  return pathSegments;
}

/**
 * Generate CSS variables
 */
function generateCSS() {
  const tokenTree = {
    ux4g: {
      color: colors.ux4g.color,
      typography: typography.ux4g.typography,
      spacing: spacing.ux4g.spacing,
      sizing: sizing.ux4g.sizing,
      radius: radius.ux4g.radius,
      shadow: shadows.ux4g.shadow,
      opacity: opacity.ux4g.opacity,
      motion: motion.ux4g.motion,
      zIndex: zIndex.ux4g.zIndex,
      semantic: semantic.ux4g.semantic,
      theme: semanticThemes.ux4g.theme
    }
  };

  const cssLines = [`/**
 * UX4G Design Tokens - CSS Custom Properties
 * @ux4g/tokens v1.0.0
 * Auto-generated - Do not edit directly
 */
`,
  '/* Base tokens */',
  ':root {'];

  // Historical runtime aliases that the app and component packages already use.
  appendCssEntries(
    cssLines,
    collectTokenEntries(colors.ux4g.color.base),
    tokenTree,
    (path) => ['color', ...path]
  );
  appendCssEntries(cssLines, collectTokenEntries(spacing.ux4g.spacing), tokenTree, (path) => ['spacing', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(sizing.ux4g.sizing), tokenTree, (path) => ['sizing', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(radius.ux4g.radius), tokenTree, (path) => ['radius', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(shadows.ux4g.shadow), tokenTree, (path) => ['shadow', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(opacity.ux4g.opacity), tokenTree, (path) => ['opacity', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(motion.ux4g.motion), tokenTree, (path) => ['motion', ...path]);
  appendCssEntries(cssLines, collectTokenEntries(zIndex.ux4g.zIndex), tokenTree, (path) => ['z-index', ...path]);
  appendCssEntries(
    cssLines,
    collectTokenEntries(typography.ux4g.typography),
    tokenTree,
    (path) => ['typography', ...path]
  );

  // Extra compatibility aliases used by existing package CSS.
  appendCssEntries(
    cssLines,
    collectTokenEntries(colors.ux4g.color.base.semantic.error),
    tokenTree,
    (path) => ['color', ...normalizeStateAliasPath(['error', ...path])]
  );
  appendCssEntries(
    cssLines,
    collectTokenEntries(colors.ux4g.color.base.semantic.success),
    tokenTree,
    (path) => ['color', ...normalizeStateAliasPath(['success', ...path])]
  );
  appendCssEntries(
    cssLines,
    collectTokenEntries(colors.ux4g.color.base.semantic.warning),
    tokenTree,
    (path) => ['color', ...normalizeStateAliasPath(['warning', ...path])]
  );
  appendCssEntries(
    cssLines,
    collectTokenEntries(colors.ux4g.color.base.semantic.info),
    tokenTree,
    (path) => ['color', ...normalizeStateAliasPath(['info', ...path])]
  );

  cssLines.push('}');
  cssLines.push('');
  cssLines.push('/* Theme tokens (light/default) */');
  cssLines.push(':root {');

  appendCssEntries(
    cssLines,
    collectTokenEntries(semanticThemes.ux4g.theme.light.color),
    tokenTree,
    (path) => ['color', ...path]
  );

  cssLines.push('}');
  cssLines.push('');
  cssLines.push('/* Theme tokens (dark) */');
  cssLines.push('.dark {');

  appendCssEntries(
    cssLines,
    collectTokenEntries(semanticThemes.ux4g.theme.dark.color),
    tokenTree,
    (path) => ['color', ...path]
  );

  cssLines.push('}');
  cssLines.push('');

  fs.writeFileSync(path.join(distDir, 'tokens.css'), `${cssLines.join('\n')}\n`);
  console.log('✅ Generated tokens.css');
}

/**
 * Generate JavaScript modules
 */
function generateJS() {
  const tokens = {
    color: flattenTokens(colors.ux4g.color),
    typography: flattenTokens(typography.ux4g.typography),
    spacing: flattenTokens(spacing.ux4g.spacing),
    sizing: flattenTokens(sizing.ux4g.sizing),
    radius: flattenTokens(radius.ux4g.radius),
    shadow: flattenTokens(shadows.ux4g.shadow),
    opacity: flattenTokens(opacity.ux4g.opacity),
    motion: flattenTokens(motion.ux4g.motion),
    zIndex: flattenTokens(zIndex.ux4g.zIndex),
    semantic: flattenTokens(semantic.ux4g.semantic)
  };

  // Resolve all references
  const resolved = JSON.parse(JSON.stringify(tokens));
  const flatAll = { ux4g: { color: colors.ux4g.color, ...resolved } };
  
  for (const category in resolved) {
    for (const token in resolved[category]) {
      resolved[category][token] = resolveReferences(resolved[category][token], flatAll);
    }
  }

  // CommonJS
  const cjs = `/**
 * @ux4g/tokens - Design Tokens
 * @version 1.0.0
 */
module.exports = ${JSON.stringify(resolved, null, 2)};
`;
  fs.writeFileSync(path.join(distDir, 'index.js'), cjs);
  console.log('✅ Generated index.js (CommonJS)');

  // ES Module
  const esm = `/**
 * @ux4g/tokens - Design Tokens
 * @version 1.0.0
 */
const tokens = ${JSON.stringify(resolved, null, 2)};

export default tokens;
export const { color, typography, spacing, sizing, radius, shadow, opacity, motion, zIndex, semantic } = tokens;
`;
  fs.writeFileSync(path.join(distDir, 'index.mjs'), esm);
  console.log('✅ Generated index.mjs (ES Module)');

  // TypeScript declarations
  const dts = `/**
 * @ux4g/tokens - Design Tokens
 * @version 1.0.0
 */

export interface Tokens {
  color: Record<string, string>;
  typography: Record<string, string | number | string[]>;
  spacing: Record<string, string>;
  sizing: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
  opacity: Record<string, number>;
  motion: Record<string, string | number | number[]>;
  zIndex: Record<string, number>;
  semantic: {
    color: Record<string, string>;
    space: Record<string, string>;
    typography: Record<string, any>;
  };
}

declare const tokens: Tokens;
export default tokens;

export const color: Tokens['color'];
export const typography: Tokens['typography'];
export const spacing: Tokens['spacing'];
export const sizing: Tokens['sizing'];
export const radius: Tokens['radius'];
export const shadow: Tokens['shadow'];
export const opacity: Tokens['opacity'];
export const motion: Tokens['motion'];
export const zIndex: Tokens['zIndex'];
export const semantic: Tokens['semantic'];
`;
  fs.writeFileSync(path.join(distDir, 'index.d.ts'), dts);
  console.log('✅ Generated index.d.ts (TypeScript)');
}

// Run build
console.log('🔨 Building @ux4g/tokens...\n');
generateCSS();
generateJS();
console.log('\n✨ Build complete!');

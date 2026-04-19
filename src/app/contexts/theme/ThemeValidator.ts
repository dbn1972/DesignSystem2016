/**
 * ThemeValidator — WCAG 2.1 contrast validation for theme color tokens.
 *
 * Provides:
 * - parseHex: parse #RGB / #RRGGBB to [r, g, b]
 * - relativeLuminance: WCAG 2.1 relative luminance
 * - contrastRatio: WCAG 2.1 contrast ratio
 * - validateTheme: check text & interactive pairs against AA thresholds
 */

import type { ThemeColorTokens, ThemeDefinition } from './types';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface ContrastFailure {
  foregroundToken: string;
  backgroundToken: string;
  foregroundValue: string;
  backgroundValue: string;
  ratio: number;
  requiredRatio: number;
  level: 'AA' | 'AAA';
}

export interface ValidationResult {
  valid: boolean;
  failures: ContrastFailure[];
  warnings: ContrastFailure[]; // ratios between 4.5:1 and 5:1
}

// ---------------------------------------------------------------------------
// parseHex
// ---------------------------------------------------------------------------

/**
 * Parses a hex color string (#RGB or #RRGGBB) to [r, g, b] in 0-255 range.
 * @throws Error on invalid hex format
 */
export function parseHex(hex: string): [number, number, number] {
  if (typeof hex !== 'string' || hex[0] !== '#') {
    throw new Error(`Invalid hex color: "${hex}". Expected format #RGB or #RRGGBB.`);
  }

  const body = hex.slice(1);

  if (body.length === 3) {
    const r = parseInt(body[0] + body[0], 16);
    const g = parseInt(body[1] + body[1], 16);
    const b = parseInt(body[2] + body[2], 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error(`Invalid hex color: "${hex}". Contains non-hex characters.`);
    }
    return [r, g, b];
  }

  if (body.length === 6) {
    const r = parseInt(body.slice(0, 2), 16);
    const g = parseInt(body.slice(2, 4), 16);
    const b = parseInt(body.slice(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error(`Invalid hex color: "${hex}". Contains non-hex characters.`);
    }
    return [r, g, b];
  }

  throw new Error(`Invalid hex color: "${hex}". Expected 3 or 6 hex digits after #.`);
}

// ---------------------------------------------------------------------------
// relativeLuminance
// ---------------------------------------------------------------------------

/**
 * Linearize a single sRGB channel value (0-255) to linear RGB (0-1).
 */
function linearize(channel: number): number {
  const s = channel / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/**
 * Computes WCAG 2.1 relative luminance for a hex color string.
 * L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 */
export function relativeLuminance(hex: string): number {
  const [r, g, b] = parseHex(hex);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

// ---------------------------------------------------------------------------
// contrastRatio
// ---------------------------------------------------------------------------

/**
 * Computes the WCAG 2.1 contrast ratio between two colors.
 * Returns a value >= 1 (e.g., 4.5 for 4.5:1).
 */
export function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1);
  const l2 = relativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ---------------------------------------------------------------------------
// validateTheme
// ---------------------------------------------------------------------------

/** Text tokens that should be checked against background tokens */
const TEXT_TOKENS = ['primary', 'secondary', 'tertiary', 'disabled', 'link', 'link-hover'] as const;

/** Background tokens to check text against */
const BG_TOKENS = ['primary', 'secondary', 'tertiary'] as const;

/** Interactive tokens that should be checked against background tokens */
const INTERACTIVE_TOKENS = ['default', 'hover', 'active', 'disabled'] as const;

/**
 * Validates a theme's color token pairs against WCAG 2.1 contrast requirements.
 * Checks both light and dark variants.
 *
 * - Text-to-background pairs require 4.5:1 (AA normal text)
 * - Interactive-to-background pairs require 3:1 (AA UI components)
 */
export function validateTheme(theme: ThemeDefinition): ValidationResult {
  const failures: ContrastFailure[] = [];
  const warnings: ContrastFailure[] = [];

  for (const variant of ['light', 'dark'] as const) {
    const tokens: ThemeColorTokens = theme[variant];
    if (!tokens) continue;

    const textTokens = tokens.text;
    const bgTokens = tokens.background;
    const interactiveTokens = tokens.interactive;

    if (!bgTokens) continue;

    // Check text-to-background pairs (4.5:1 AA)
    if (textTokens) {
      for (const textKey of TEXT_TOKENS) {
        const fgValue = textTokens[textKey];
        if (!fgValue) continue;

        for (const bgKey of BG_TOKENS) {
          const bgValue = bgTokens[bgKey];
          if (!bgValue) continue;

          try {
            const ratio = contrastRatio(fgValue, bgValue);
            const fgTokenName = `${variant}.text.${textKey}`;
            const bgTokenName = `${variant}.background.${bgKey}`;

            if (ratio < 4.5) {
              failures.push({
                foregroundToken: fgTokenName,
                backgroundToken: bgTokenName,
                foregroundValue: fgValue,
                backgroundValue: bgValue,
                ratio: Math.round(ratio * 100) / 100,
                requiredRatio: 4.5,
                level: 'AA',
              });
            } else if (ratio < 5) {
              warnings.push({
                foregroundToken: fgTokenName,
                backgroundToken: bgTokenName,
                foregroundValue: fgValue,
                backgroundValue: bgValue,
                ratio: Math.round(ratio * 100) / 100,
                requiredRatio: 4.5,
                level: 'AA',
              });
            }
          } catch {
            // parseHex failure — record as a failure
            failures.push({
              foregroundToken: `${variant}.text.${textKey}`,
              backgroundToken: `${variant}.background.${bgKey}`,
              foregroundValue: fgValue,
              backgroundValue: bgValue,
              ratio: 0,
              requiredRatio: 4.5,
              level: 'AA',
            });
          }
        }
      }
    }

    // Check interactive-to-background pairs (3:1 AA)
    if (interactiveTokens) {
      for (const intKey of INTERACTIVE_TOKENS) {
        const fgValue = interactiveTokens[intKey];
        if (!fgValue) continue;

        for (const bgKey of BG_TOKENS) {
          const bgValue = bgTokens[bgKey];
          if (!bgValue) continue;

          try {
            const ratio = contrastRatio(fgValue, bgValue);
            const fgTokenName = `${variant}.interactive.${intKey}`;
            const bgTokenName = `${variant}.background.${bgKey}`;

            if (ratio < 3) {
              failures.push({
                foregroundToken: fgTokenName,
                backgroundToken: bgTokenName,
                foregroundValue: fgValue,
                backgroundValue: bgValue,
                ratio: Math.round(ratio * 100) / 100,
                requiredRatio: 3,
                level: 'AA',
              });
            }
          } catch {
            failures.push({
              foregroundToken: `${variant}.interactive.${intKey}`,
              backgroundToken: `${variant}.background.${bgKey}`,
              foregroundValue: fgValue,
              backgroundValue: bgValue,
              ratio: 0,
              requiredRatio: 3,
              level: 'AA',
            });
          }
        }
      }
    }
  }

  return {
    valid: failures.length === 0,
    failures,
    warnings,
  };
}

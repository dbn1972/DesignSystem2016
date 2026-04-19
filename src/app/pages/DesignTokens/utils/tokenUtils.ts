// ─── Interfaces ───────────────────────────────────────────────────────────────

export type TokenCategory =
  | 'colors'
  | 'spacing'
  | 'typography'
  | 'shadows'
  | 'radius'
  | 'motion'
  | 'opacity'
  | 'sizing'
  | 'z-index'
  | 'semantic';

export interface TokenEntry {
  /** Display name (e.g., "saffron-500", "spacing-4") */
  name: string;
  /** Resolved value (e.g., "#ff7700", "1rem") */
  value: string;
  /** CSS custom property name (e.g., "--ux4g-color-saffron-500") */
  cssVariable: string;
  /** Token category */
  category: TokenCategory;
  /** Optional sub-category (e.g., "saffron", "inset", "fontFamily") */
  group?: string;
  /** Description from JSON */
  description?: string;
  /** a11y annotation for color tokens */
  a11y?: string;
  /** Reference path for semantic tokens (e.g., "{ux4g.color.base.navy.500}") */
  reference?: string;
}

export interface CategoryConfig {
  id: TokenCategory;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

// ─── Static JSON imports ──────────────────────────────────────────────────────

import colorsJson from '@/app/tokens-package/tokens/base/colors.json';
import spacingJson from '@/app/tokens-package/tokens/base/spacing.json';
import typographyJson from '@/app/tokens-package/tokens/base/typography.json';
import shadowsJson from '@/app/tokens-package/tokens/base/shadows.json';
import radiusJson from '@/app/tokens-package/tokens/base/radius.json';
import motionJson from '@/app/tokens-package/tokens/base/motion.json';
import opacityJson from '@/app/tokens-package/tokens/base/opacity.json';
import sizingJson from '@/app/tokens-package/tokens/base/sizing.json';
import zIndexJson from '@/app/tokens-package/tokens/base/z-index.json';
import semanticJson from '@/app/tokens-package/tokens/semantic.json';

// ─── Keys to skip during JSON traversal ───────────────────────────────────────

const SKIP_KEYS = new Set(['$type', '$schema', 'description']);

// ─── Utility functions ────────────────────────────────────────────────────────

/**
 * Generates the CSS custom property name from a token path.
 * Strips the "base" segment and joins with hyphens.
 * e.g., ["ux4g", "color", "base", "saffron", "500"] → "--ux4g-color-saffron-500"
 */
export function toCssVariable(segments: string[]): string {
  const filtered = segments.filter((s) => s !== 'base');
  return `--${filtered.join('-')}`;
}

/**
 * Converts rem/px string values to pixel equivalents for display.
 * e.g., "0.25rem" → "4px", "1rem" → "16px", "1px" → "1px"
 * Returns null for values that aren't rem or px.
 */
export function toPixels(value: string): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();

  const remMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)rem$/);
  if (remMatch) {
    const px = parseFloat(remMatch[1]) * 16;
    return `${px}px`;
  }

  const pxMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (pxMatch) {
    return trimmed;
  }

  return null;
}

/**
 * Extracts a `{ux4g.*}` reference from a semantic token value.
 * e.g., "{ux4g.color.base.navy.500}" → "{ux4g.color.base.navy.500}"
 */
function extractReference(value: string): string | undefined {
  const match = value.match(/\{ux4g\.[^}]+\}/);
  return match ? match[0] : undefined;
}

/**
 * Recursively walks a token JSON object and produces a flat array
 * of TokenEntry objects.
 */
export function flattenTokens(
  obj: Record<string, unknown>,
  category: TokenCategory,
  pathSegments: string[] = [],
  group?: string
): TokenEntry[] {
  const entries: TokenEntry[] = [];

  for (const key of Object.keys(obj)) {
    if (SKIP_KEYS.has(key)) continue;

    const node = obj[key];
    if (node === null || typeof node !== 'object' || Array.isArray(node)) continue;

    const record = node as Record<string, unknown>;
    const currentPath = [...pathSegments, key];

    // Leaf node: has a `value` field
    if ('value' in record && record.value !== undefined) {
      const rawValue = record.value;
      // value can be a string or an array (e.g., easing cubicBezier arrays)
      const valueStr =
        typeof rawValue === 'string'
          ? rawValue
          : Array.isArray(rawValue)
            ? `cubic-bezier(${(rawValue as number[]).join(', ')})`
            : String(rawValue);

      const name = key;
      const reference = extractReference(valueStr);

      entries.push({
        name,
        value: valueStr,
        cssVariable: toCssVariable(currentPath),
        category,
        group,
        description: typeof record.description === 'string' ? record.description : undefined,
        a11y: typeof record.a11y === 'string' ? record.a11y : undefined,
        reference,
      });
    } else {
      // Branch node — recurse. Use current key as group if we don't have one yet,
      // or keep the existing group.
      const nextGroup = group ?? (pathSegments.length >= 2 ? key : undefined);
      entries.push(...flattenTokens(record, category, currentPath, nextGroup));
    }
  }

  return entries;
}

// ─── filterTokens ─────────────────────────────────────────────────────────────

/**
 * Case-insensitive filter on name, cssVariable, or value.
 */
export function filterTokens(tokens: TokenEntry[], query: string): TokenEntry[] {
  if (!query.trim()) return tokens;
  const lower = query.toLowerCase();
  return tokens.filter(
    (t) =>
      t.name.toLowerCase().includes(lower) ||
      t.cssVariable.toLowerCase().includes(lower) ||
      t.value.toLowerCase().includes(lower)
  );
}

// ─── TOKEN_DATA ───────────────────────────────────────────────────────────────

export const TOKEN_DATA: Record<TokenCategory, TokenEntry[]> = {
  colors: flattenTokens(colorsJson as Record<string, unknown>, 'colors'),
  spacing: flattenTokens(spacingJson as Record<string, unknown>, 'spacing'),
  typography: flattenTokens(typographyJson as Record<string, unknown>, 'typography'),
  shadows: flattenTokens(shadowsJson as Record<string, unknown>, 'shadows'),
  radius: flattenTokens(radiusJson as Record<string, unknown>, 'radius'),
  motion: flattenTokens(motionJson as Record<string, unknown>, 'motion'),
  opacity: flattenTokens(opacityJson as Record<string, unknown>, 'opacity'),
  sizing: flattenTokens(sizingJson as Record<string, unknown>, 'sizing'),
  'z-index': flattenTokens(zIndexJson as Record<string, unknown>, 'z-index'),
  semantic: flattenTokens(semanticJson as Record<string, unknown>, 'semantic'),
};

// ─── CATEGORY_CONFIGS ─────────────────────────────────────────────────────────

export const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    id: 'colors',
    title: 'Colors',
    description: 'Color palettes including saffron, green, navy, neutral, and semantic status colors.',
    icon: 'Palette',
  },
  {
    id: 'spacing',
    title: 'Spacing',
    description: 'Spacing scale for margins, padding, gaps, insets, stacks, and inline spacing.',
    icon: 'Ruler',
  },
  {
    id: 'typography',
    title: 'Typography',
    description:
      'Font families (including 12 Indian language scripts), font sizes, weights, line heights, and letter spacing.',
    icon: 'Type',
  },
  {
    id: 'shadows',
    title: 'Shadows',
    description: 'Box shadow tokens from subtle to 2XL elevation, plus focus ring shadows.',
    icon: 'Layers',
  },
  {
    id: 'radius',
    title: 'Radius',
    description: 'Border radius scale from sharp corners to full pill shapes.',
    icon: 'Circle',
  },
  {
    id: 'motion',
    title: 'Motion',
    description: 'Animation durations, easing curves, and delays for consistent motion design.',
    icon: 'Zap',
  },
  {
    id: 'opacity',
    title: 'Opacity',
    description: 'Opacity scale from fully transparent to fully opaque.',
    icon: 'Eye',
  },
  {
    id: 'sizing',
    title: 'Sizing',
    description: 'Width, height, container, icon, and touch target sizing tokens.',
    icon: 'Maximize2',
  },
  {
    id: 'z-index',
    title: 'Z-Index',
    description: 'Z-index layering scale from base content to tooltips.',
    icon: 'Layers',
  },
  {
    id: 'semantic',
    title: 'Semantic Tokens',
    description:
      'Purpose-driven tokens that reference base tokens — brand, text, background, border, interactive, and feedback.',
    icon: 'GitBranch',
  },
];

// ─── SCRIPT_SAMPLES ───────────────────────────────────────────────────────────

export const SCRIPT_SAMPLES: Record<string, string> = {
  sans: 'The quick brown fox jumps over the lazy dog',
  serif: 'The quick brown fox jumps over the lazy dog',
  mono: 'const x = 42;',
  devanagari: 'हिन्दी — भारत की राजभाषा',
  tamil: 'தமிழ் — இந்தியாவின் மொழி',
  bengali: 'বাংলা — ভারতের ভাষা',
  telugu: 'తెలుగు — భారతదేశ భాష',
  gujarati: 'ગુજરાતી — ભારતની ભાષા',
  kannada: 'ಕನ್ನಡ — ಭಾರತದ ಭಾಷೆ',
  malayalam: 'മലയാളം — ഭാരതത്തിന്റെ ഭാഷ',
  punjabi: 'ਪੰਜਾਬੀ — ਭਾਰਤ ਦੀ ਭਾਸ਼ਾ',
  odia: 'ଓଡ଼ିଆ — ଭାରତର ଭାଷା',
  urdu: 'اردو — بھارت کی زبان',
  kashmiri: 'कॉशुर — भारत की भाषा',
  sindhi: 'سنڌي — ڀارت جي ٻولي',
};

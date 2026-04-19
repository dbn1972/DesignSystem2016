/**
 * ThemeEngine — Core theme resolution, application, and serialization.
 *
 * Provides:
 * - createTheme: deep-merge overrides onto a base preset
 * - resolveTokens: flatten theme + scheme + contrast into CSS property map
 * - applyTokensToDOM: batch-apply tokens via requestAnimationFrame
 * - serializeTheme / deserializeTheme: JSON round-trip
 */

import type {
  ThemeColorTokens,
  ThemeDefinition,
  SerializedTheme,
  PresetName,
} from './types';
import { THEME_PRESETS } from './presets';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Deep-merge two ThemeColorTokens objects. `overrides` wins on conflict. */
function deepMergeTokens(
  base: ThemeColorTokens,
  overrides: ThemeColorTokens,
): ThemeColorTokens {
  const result: ThemeColorTokens = {};

  const categories = [
    'brand', 'text', 'background', 'surface', 'border', 'interactive', 'feedback',
  ] as const;

  for (const cat of categories) {
    const baseCategory = base[cat] as Record<string, string> | undefined;
    const overrideCategory = overrides[cat] as Record<string, string> | undefined;

    if (baseCategory || overrideCategory) {
      (result as Record<string, Record<string, string>>)[cat] = {
        ...(baseCategory ?? {}),
        ...(overrideCategory ?? {}),
      };
    }
  }

  return result;
}

/**
 * Flatten a nested ThemeColorTokens object into a flat CSS property map.
 * `{ brand: { primary: '#005196' } }` → `{ '--ux4g-color-brand-primary': '#005196' }`
 */
function flattenTokens(tokens: ThemeColorTokens): Record<string, string> {
  const flat: Record<string, string> = {};

  const categories = [
    'brand', 'text', 'background', 'surface', 'border', 'interactive', 'feedback',
  ] as const;

  for (const cat of categories) {
    const category = tokens[cat] as Record<string, string> | undefined;
    if (!category) continue;
    for (const [token, value] of Object.entries(category)) {
      flat[`--ux4g-color-${cat}-${token}`] = value;
    }
  }

  return flat;
}

// ---------------------------------------------------------------------------
// createTheme (Task 2.1)
// ---------------------------------------------------------------------------

/**
 * Creates a custom theme by deep-merging overrides onto a base preset.
 * @throws Error if baseTheme is not a recognized preset name
 */
export function createTheme(
  name: string,
  baseTheme: PresetName,
  overrides: { light?: ThemeColorTokens; dark?: ThemeColorTokens },
): ThemeDefinition {
  const base = THEME_PRESETS[baseTheme];
  if (!base) {
    const presetNames = Object.keys(THEME_PRESETS).join(', ');
    throw new Error(
      `Unknown base theme: "${baseTheme}". Available presets: ${presetNames}`,
    );
  }

  return {
    name,
    baseTheme,
    light: overrides.light ? deepMergeTokens(base.light, overrides.light) : { ...structuredClone(base.light) },
    dark: overrides.dark ? deepMergeTokens(base.dark, overrides.dark) : { ...structuredClone(base.dark) },
  };
}

// ---------------------------------------------------------------------------
// resolveTokens (Task 2.3)
// ---------------------------------------------------------------------------

/**
 * Resolves the final flat token map for a given theme + color scheme + contrast mode.
 *
 * Algorithm:
 * 1. Start with the default preset for the given colorScheme
 * 2. Deep-merge the theme's tokens for that scheme
 * 3. If contrastMode, deep-merge high-contrast overrides
 * 4. Flatten to CSS property names
 */
export function resolveTokens(
  theme: ThemeDefinition,
  colorScheme: 'light' | 'dark',
  contrastMode: boolean,
): Record<string, string> {
  const defaultBase = THEME_PRESETS['default'];
  let merged = deepMergeTokens(defaultBase[colorScheme], theme[colorScheme]);

  if (contrastMode) {
    const hcPreset = THEME_PRESETS['high-contrast'];
    merged = deepMergeTokens(merged, hcPreset[colorScheme]);
  }

  return flattenTokens(merged);
}

// ---------------------------------------------------------------------------
// applyTokensToDOM (Task 2.5)
// ---------------------------------------------------------------------------

/**
 * Applies a resolved token map to document.documentElement via
 * requestAnimationFrame batching. Also sets data-theme, color-scheme,
 * dark class, data-contrast, and dispatches ux4g-theme-change event.
 */
export function applyTokensToDOM(
  tokens: Record<string, string>,
  colorScheme: 'light' | 'dark',
  contrastMode: boolean,
): void {
  if (typeof window === 'undefined') return;

  requestAnimationFrame(() => {
    const root = document.documentElement;

    // Apply all CSS custom properties
    for (const [prop, value] of Object.entries(tokens)) {
      root.style.setProperty(prop, value);
    }

    // Set data-theme attribute
    root.setAttribute('data-theme', colorScheme);

    // Set color-scheme CSS property
    root.style.colorScheme = colorScheme;

    // Toggle dark class for Tailwind v4 compatibility
    root.classList.toggle('dark', colorScheme === 'dark');

    // Set data-contrast attribute
    if (contrastMode) {
      root.setAttribute('data-contrast', 'high');
    } else {
      root.removeAttribute('data-contrast');
    }

    // Dispatch custom event for non-React consumers
    root.dispatchEvent(
      new CustomEvent('ux4g-theme-change', {
        detail: { colorScheme, contrastMode },
        bubbles: true,
      }),
    );
  });
}

// ---------------------------------------------------------------------------
// serializeTheme / deserializeTheme (Task 2.7)
// ---------------------------------------------------------------------------

/**
 * Serializes a ThemeDefinition to a JSON string.
 */
export function serializeTheme(theme: ThemeDefinition): string {
  const serialized: SerializedTheme = {
    version: '1.0',
    name: theme.name,
    baseTheme: theme.baseTheme ?? 'default',
    tokens: {
      light: theme.light,
      dark: theme.dark,
    },
  };
  return JSON.stringify(serialized);
}

/**
 * Deserializes a JSON string to a ThemeDefinition.
 * @throws Error on malformed JSON, missing fields, or version mismatch
 */
export function deserializeTheme(json: string): ThemeDefinition {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    throw new Error(
      `Failed to parse theme JSON: ${e instanceof Error ? e.message : String(e)}`,
    );
  }

  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error("Invalid theme format: missing required field 'version'");
  }

  const obj = parsed as Record<string, unknown>;

  // Validate required fields
  for (const field of ['version', 'name', 'baseTheme', 'tokens']) {
    if (!(field in obj)) {
      throw new Error(`Invalid theme format: missing required field '${field}'`);
    }
  }

  // Validate version
  if (obj.version !== '1.0') {
    throw new Error(
      `Unsupported theme version: '${String(obj.version)}'. Expected '1.0'`,
    );
  }

  const tokens = obj.tokens as { light?: ThemeColorTokens; dark?: ThemeColorTokens };

  return {
    name: String(obj.name),
    baseTheme: String(obj.baseTheme),
    light: tokens.light ?? {},
    dark: tokens.dark ?? {},
  };
}

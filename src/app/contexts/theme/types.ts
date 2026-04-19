/**
 * Advanced Theming System — Shared Type Definitions
 *
 * Re-exports existing types from ThemeContext.tsx and defines new
 * interfaces for the extended theming infrastructure.
 */

// Re-export existing types from ThemeContext for backward compatibility
export type { ColorScheme, MotionPreference, DensityPreference } from '../ThemeContext';

/**
 * Semantic token categories that can be overridden in a theme.
 * Each category groups related color tokens by purpose.
 */
export interface ThemeColorTokens {
  brand?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  text?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    disabled?: string;
    inverse?: string;
    link?: string;
    'link-hover'?: string;
  };
  background?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    inverse?: string;
  };
  surface?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  border?: {
    default?: string;
    hover?: string;
    focus?: string;
  };
  interactive?: {
    default?: string;
    hover?: string;
    active?: string;
    disabled?: string;
  };
  feedback?: {
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
}

/** A complete theme definition with light and dark variants */
export interface ThemeDefinition {
  name: string;
  baseTheme?: string;
  light: ThemeColorTokens;
  dark: ThemeColorTokens;
}

/** Serialized theme format for JSON export/import */
export interface SerializedTheme {
  version: '1.0';
  name: string;
  baseTheme: string;
  tokens: {
    light: ThemeColorTokens;
    dark: ThemeColorTokens;
  };
}

/** Preset name union type */
export type PresetName =
  | 'default'
  | 'saffron-primary'
  | 'navy-primary'
  | 'green-primary'
  | 'high-contrast';

/**
 * Extended ThemeContextType interface.
 * Preserves ALL existing fields from ThemeContext.tsx and adds new
 * fields for the advanced theming system.
 */
export interface ThemeContextType {
  // === Existing fields (backward compatible) ===
  colorScheme: import('../ThemeContext').ColorScheme;
  isDarkMode: boolean;
  setColorScheme: (scheme: import('../ThemeContext').ColorScheme) => void;
  toggleDarkMode: () => void;
  motionPreference: import('../ThemeContext').MotionPreference;
  setMotionPreference: (preference: import('../ThemeContext').MotionPreference) => void;
  densityPreference: import('../ThemeContext').DensityPreference;
  setDensityPreference: (preference: import('../ThemeContext').DensityPreference) => void;
  resetToDefaults: () => void;

  // === New fields ===
  activeTheme: string;
  contrastMode: boolean;
  setTheme: (theme: string | ThemeDefinition) => void;
  setContrastMode: (enabled: boolean) => void;
  resolvedTokens: Record<string, string>;
  presets: PresetName[];
}

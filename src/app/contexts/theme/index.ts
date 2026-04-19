/**
 * Advanced Theming System — Public API
 *
 * Barrel export for the theme module. Consumers should import from
 * `./contexts/theme` rather than reaching into individual files.
 */

// Provider & hooks
export { ThemeProvider, useTheme, DarkModeProvider, useDarkMode } from './ThemeProvider';

// Engine
export { createTheme, serializeTheme, deserializeTheme } from './ThemeEngine';

// Validator
export { validateTheme } from './ThemeValidator';

// Types
export type {
  ColorScheme,
  MotionPreference,
  DensityPreference,
  ThemeColorTokens,
  ThemeDefinition,
  SerializedTheme,
  PresetName,
  ThemeContextType,
} from './types';

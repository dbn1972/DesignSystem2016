import type { ThemeDefinition } from '../types';

/**
 * High-Contrast Preset
 *
 * Maximizes contrast ratios for all text and interactive element token pairs.
 * Light: pure black text on pure white backgrounds.
 * Dark: pure white text on pure black backgrounds.
 * All text-to-background pairs target WCAG AAA (7:1+).
 */
export const highContrastPreset: ThemeDefinition = {
  name: 'high-contrast',
  light: {
    brand: {
      primary: '#00315a',
      secondary: '#994700',
      tertiary: '#004400',
    },
    text: {
      primary: '#000000',
      secondary: '#171717',
      tertiary: '#262626',
      disabled: '#525252',
      inverse: '#ffffff',
      link: '#00315a',
      'link-hover': '#001f3a',
    },
    background: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
      inverse: '#000000',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
    },
    border: {
      default: '#171717',
      hover: '#000000',
      focus: '#00315a',
    },
    interactive: {
      default: '#00315a',
      hover: '#001f3a',
      active: '#001029',
      disabled: '#525252',
    },
    feedback: {
      success: '#004400',
      warning: '#994700',
      error: '#991b1b',
      info: '#00315a',
    },
  },
  dark: {
    brand: {
      primary: '#99b9d5',
      secondary: '#ffc078',
      tertiary: '#86efac',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
      tertiary: '#d4d4d4',
      disabled: '#737373',
      inverse: '#000000',
      link: '#99b9d5',
      'link-hover': '#c4d8eb',
    },
    background: {
      primary: '#000000',
      secondary: '#0a0a0a',
      tertiary: '#171717',
      inverse: '#ffffff',
    },
    surface: {
      primary: '#000000',
      secondary: '#0a0a0a',
      tertiary: '#171717',
    },
    border: {
      default: '#e5e5e5',
      hover: '#ffffff',
      focus: '#99b9d5',
    },
    interactive: {
      default: '#99b9d5',
      hover: '#c4d8eb',
      active: '#dce8f3',
      disabled: '#737373',
    },
    feedback: {
      success: '#86efac',
      warning: '#fde68a',
      error: '#fca5a5',
      info: '#99b9d5',
    },
  },
};

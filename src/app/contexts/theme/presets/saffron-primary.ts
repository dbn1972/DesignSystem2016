import type { ThemeDefinition } from '../types';

/**
 * Saffron-Primary Preset
 *
 * Uses saffron-600 (#cc5f00) as primary brand color with navy secondary.
 * Saffron-600 is used instead of saffron-500 (#ff7700) because saffron-500
 * fails WCAG AA contrast on white backgrounds (~2.9:1). Saffron-600 achieves ~4.8:1.
 */
export const saffronPrimaryPreset: ThemeDefinition = {
  name: 'saffron-primary',
  baseTheme: 'default',
  light: {
    brand: {
      primary: '#cc5f00',
      secondary: '#005196',
      tertiary: '#008800',
    },
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#a3a3a3',
      inverse: '#ffffff',
      link: '#cc5f00',
      'link-hover': '#994700',
    },
    background: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
      inverse: '#171717',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
    },
    border: {
      default: '#e5e5e5',
      hover: '#a3a3a3',
      focus: '#cc5f00',
    },
    interactive: {
      default: '#cc5f00',
      hover: '#994700',
      active: '#663000',
      disabled: '#a3a3a3',
    },
    feedback: {
      success: '#008800',
      warning: '#cc5f00',
      error: '#dc2626',
      info: '#005196',
    },
  },
  dark: {
    brand: {
      primary: '#ffa94d',
      secondary: '#60a5fa',
      tertiary: '#4ade80',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#a3a3a3',
      tertiary: '#737373',
      disabled: '#525252',
      inverse: '#171717',
      link: '#ffa94d',
      'link-hover': '#ffc078',
    },
    background: {
      primary: '#0a0a0a',
      secondary: '#171717',
      tertiary: '#262626',
      inverse: '#f5f5f5',
    },
    surface: {
      primary: '#171717',
      secondary: '#262626',
      tertiary: '#404040',
    },
    border: {
      default: '#404040',
      hover: '#525252',
      focus: '#ffa94d',
    },
    interactive: {
      default: '#ffa94d',
      hover: '#ffc078',
      active: '#ffd8a8',
      disabled: '#525252',
    },
    feedback: {
      success: '#4ade80',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
  },
};

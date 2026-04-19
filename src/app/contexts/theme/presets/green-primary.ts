import type { ThemeDefinition } from '../types';

/**
 * Green-Primary Preset
 *
 * Uses Indian green (#008800) as primary brand color with navy secondary.
 */
export const greenPrimaryPreset: ThemeDefinition = {
  name: 'green-primary',
  baseTheme: 'default',
  light: {
    brand: {
      primary: '#008800',
      secondary: '#005196',
      tertiary: '#cc5f00',
    },
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#a3a3a3',
      inverse: '#ffffff',
      link: '#008800',
      'link-hover': '#006600',
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
      focus: '#008800',
    },
    interactive: {
      default: '#008800',
      hover: '#006600',
      active: '#004400',
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
      primary: '#4ade80',
      secondary: '#60a5fa',
      tertiary: '#ffa94d',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#a3a3a3',
      tertiary: '#737373',
      disabled: '#525252',
      inverse: '#171717',
      link: '#4ade80',
      'link-hover': '#86efac',
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
      focus: '#4ade80',
    },
    interactive: {
      default: '#4ade80',
      hover: '#86efac',
      active: '#bbf7d0',
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

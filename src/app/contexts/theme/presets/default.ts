import type { ThemeDefinition } from '../types';

/**
 * Default / Navy-Primary Preset
 *
 * Uses the Indian tricolor palette: navy primary, saffron secondary, green tertiary.
 * This is the base preset that all other presets can extend.
 */
export const defaultPreset: ThemeDefinition = {
  name: 'default',
  light: {
    brand: {
      primary: '#005196',
      secondary: '#ff7700',
      tertiary: '#008800',
    },
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#737373',
      disabled: '#a3a3a3',
      inverse: '#ffffff',
      link: '#005196',
      'link-hover': '#004178',
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
      focus: '#005196',
    },
    interactive: {
      default: '#005196',
      hover: '#004178',
      active: '#00315a',
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
      primary: '#60a5fa',
      secondary: '#ffa94d',
      tertiary: '#4ade80',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#a3a3a3',
      tertiary: '#737373',
      disabled: '#525252',
      inverse: '#171717',
      link: '#60a5fa',
      'link-hover': '#93c5fd',
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
      focus: '#60a5fa',
    },
    interactive: {
      default: '#60a5fa',
      hover: '#93c5fd',
      active: '#bfdbfe',
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

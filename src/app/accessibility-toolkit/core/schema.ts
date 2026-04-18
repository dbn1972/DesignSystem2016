/**
 * @ux4g/a11y-core — Settings Schema
 */

export interface A11yNumericState {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

export interface A11yToggleState {
  dyslexiaFont: boolean;
  leftAlign: boolean;
  highContrast: boolean;
  darkContrast: boolean;
  lightContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  desaturate: boolean;
  monochrome: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  largerCursor: boolean;
  readingGuide: boolean;
  readingMask: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  strongFocus: boolean;
  keyboardNav: boolean;
}

export interface A11yState extends A11yNumericState, A11yToggleState {}

export const DEFAULT_STATE: Readonly<A11yState> = {
  fontSize: 0, lineHeight: 0, letterSpacing: 0, wordSpacing: 0,
  dyslexiaFont: false, leftAlign: false,
  highContrast: false, darkContrast: false, lightContrast: false,
  invertColors: false, grayscale: false, desaturate: false, monochrome: false,
  highlightLinks: false, highlightHeadings: false,
  largerCursor: false, readingGuide: false, readingMask: false,
  pauseAnimations: false, hideImages: false, strongFocus: false, keyboardNav: false,
};

export const FONT_SIZE_MIN = -3;
export const FONT_SIZE_MAX = 5;
export const LINE_HEIGHT_MAX = 4;
export const LETTER_SPACING_MAX = 4;
export const WORD_SPACING_MAX = 4;

export const FONT_SIZE_DISPLAY: Readonly<Record<number, string>> = {
  [-3]: '75%', [-2]: '82%', [-1]: '90%', 0: '100%',
  1: '112%', 2: '125%', 3: '137%', 4: '150%', 5: '175%',
};

// ─── Actions ────────────────────────────────────────────────────────────────

export type A11yAction =
  | { type: 'INCREASE_FONT_SIZE' }
  | { type: 'DECREASE_FONT_SIZE' }
  | { type: 'RESET_FONT_SIZE' }
  | { type: 'INCREASE_LINE_HEIGHT' }
  | { type: 'DECREASE_LINE_HEIGHT' }
  | { type: 'RESET_LINE_HEIGHT' }
  | { type: 'INCREASE_LETTER_SPACING' }
  | { type: 'DECREASE_LETTER_SPACING' }
  | { type: 'RESET_LETTER_SPACING' }
  | { type: 'INCREASE_WORD_SPACING' }
  | { type: 'DECREASE_WORD_SPACING' }
  | { type: 'RESET_WORD_SPACING' }
  | { type: 'TOGGLE'; feature: keyof A11yToggleState }
  | { type: 'RESET_ALL' }
  | { type: 'HYDRATE'; state: A11yState };

export interface A11yActions {
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  increaseLineHeight: () => void;
  decreaseLineHeight: () => void;
  resetLineHeight: () => void;
  increaseLetterSpacing: () => void;
  decreaseLetterSpacing: () => void;
  resetLetterSpacing: () => void;
  increaseWordSpacing: () => void;
  decreaseWordSpacing: () => void;
  resetWordSpacing: () => void;
  toggle: (feature: keyof A11yToggleState) => void;
  resetAll: () => void;
}

export interface A11yStoreValue extends A11yState, A11yActions {
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  togglePanel: () => void;
}

// ─── Mutual Exclusivity Groups ──────────────────────────────────────────────

const CONTRAST_MODES: readonly (keyof A11yToggleState)[] = [
  'highContrast', 'darkContrast', 'lightContrast',
];

/** Filter-based features that conflict with each other. */
const FILTER_CONFLICTS: readonly (keyof A11yToggleState)[] = [
  'highContrast', 'darkContrast', 'lightContrast',
  'invertColors', 'grayscale', 'desaturate', 'monochrome',
];

// ─── Reducer ────────────────────────────────────────────────────────────────

export function a11yReducer(state: A11yState, action: A11yAction): A11yState {
  switch (action.type) {
    case 'INCREASE_FONT_SIZE':
      return { ...state, fontSize: Math.min(state.fontSize + 1, FONT_SIZE_MAX) };
    case 'DECREASE_FONT_SIZE':
      return { ...state, fontSize: Math.max(state.fontSize - 1, FONT_SIZE_MIN) };
    case 'RESET_FONT_SIZE':
      return { ...state, fontSize: 0 };

    case 'INCREASE_LINE_HEIGHT':
      return { ...state, lineHeight: Math.min(state.lineHeight + 1, LINE_HEIGHT_MAX) };
    case 'DECREASE_LINE_HEIGHT':
      return { ...state, lineHeight: Math.max(state.lineHeight - 1, 0) };
    case 'RESET_LINE_HEIGHT':
      return { ...state, lineHeight: 0 };

    case 'INCREASE_LETTER_SPACING':
      return { ...state, letterSpacing: Math.min(state.letterSpacing + 1, LETTER_SPACING_MAX) };
    case 'DECREASE_LETTER_SPACING':
      return { ...state, letterSpacing: Math.max(state.letterSpacing - 1, 0) };
    case 'RESET_LETTER_SPACING':
      return { ...state, letterSpacing: 0 };

    case 'INCREASE_WORD_SPACING':
      return { ...state, wordSpacing: Math.min(state.wordSpacing + 1, WORD_SPACING_MAX) };
    case 'DECREASE_WORD_SPACING':
      return { ...state, wordSpacing: Math.max(state.wordSpacing - 1, 0) };
    case 'RESET_WORD_SPACING':
      return { ...state, wordSpacing: 0 };

    case 'TOGGLE': {
      const { feature } = action;
      const next = !state[feature];
      const patch: Partial<A11yToggleState> = { [feature]: next };

      // Contrast modes are mutually exclusive
      if (next && CONTRAST_MODES.includes(feature)) {
        for (const mode of CONTRAST_MODES) {
          if (mode !== feature) patch[mode] = false;
        }
      }

      // Monochrome conflicts with grayscale/desaturate (they overlap)
      if (next && feature === 'monochrome') {
        patch.grayscale = false;
        patch.desaturate = false;
      }
      if (next && (feature === 'grayscale' || feature === 'desaturate')) {
        patch.monochrome = false;
      }

      return { ...state, ...patch };
    }

    case 'RESET_ALL':
      return { ...DEFAULT_STATE };
    case 'HYDRATE':
      return { ...action.state };
    default:
      return state;
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function countActiveSettings(state: A11yState): number {
  let count = 0;
  for (const k of Object.keys(DEFAULT_STATE)) {
    const def = (DEFAULT_STATE as Record<string, unknown>)[k];
    const cur = (state as unknown as Record<string, unknown>)[k];
    if (typeof def === 'number' && cur !== 0) count++;
    if (typeof def === 'boolean' && cur === true) count++;
  }
  return count;
}

import { FEATURE_REGISTRY } from './features';
import type { A11yFeatureGroup } from './features';

export function countActiveInGroup(state: A11yState, group: A11yFeatureGroup): number {
  const features = FEATURE_REGISTRY.filter((f) => f.group === group);
  let count = 0;
  for (const f of features) {
    const val = (state as unknown as Record<string, unknown>)[f.key];
    if (f.type === 'stepper' && typeof val === 'number' && val !== 0) count++;
    if (f.type === 'toggle' && val === true) count++;
  }
  return count;
}

export function isMacPlatform(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function getShortcutLabel(): { modifier: string; key: string; full: string } {
  const isMac = isMacPlatform();
  return { modifier: isMac ? '⌥' : 'Alt', key: 'A', full: isMac ? '⌥ A' : 'Alt + A' };
}

/**
 * Unit tests for the core state machine: reducer, countActiveSettings, prefersReducedMotion.
 */

import { describe, it, expect } from 'vitest';
import {
  a11yReducer, DEFAULT_STATE, countActiveSettings,
  FONT_SIZE_MIN, FONT_SIZE_MAX, LINE_HEIGHT_MAX, LETTER_SPACING_MAX,
} from '../schema';
import type { A11yState } from '../schema';

describe('a11yReducer', () => {
  it('returns default state for unknown action', () => {
    const result = a11yReducer(DEFAULT_STATE, { type: 'UNKNOWN' } as any);
    expect(result).toEqual(DEFAULT_STATE);
  });

  // ── Font size ──
  it('increases font size by 1 step', () => {
    const result = a11yReducer(DEFAULT_STATE, { type: 'INCREASE_FONT_SIZE' });
    expect(result.fontSize).toBe(1);
  });

  it('clamps font size at max', () => {
    const state = { ...DEFAULT_STATE, fontSize: FONT_SIZE_MAX };
    const result = a11yReducer(state, { type: 'INCREASE_FONT_SIZE' });
    expect(result.fontSize).toBe(FONT_SIZE_MAX);
  });

  it('decreases font size by 1 step', () => {
    const result = a11yReducer(DEFAULT_STATE, { type: 'DECREASE_FONT_SIZE' });
    expect(result.fontSize).toBe(-1);
  });

  it('clamps font size at min', () => {
    const state = { ...DEFAULT_STATE, fontSize: FONT_SIZE_MIN };
    const result = a11yReducer(state, { type: 'DECREASE_FONT_SIZE' });
    expect(result.fontSize).toBe(FONT_SIZE_MIN);
  });

  it('resets font size to 0', () => {
    const state = { ...DEFAULT_STATE, fontSize: 3 };
    const result = a11yReducer(state, { type: 'RESET_FONT_SIZE' });
    expect(result.fontSize).toBe(0);
  });

  // ── Line height ──
  it('increases line height and clamps at max', () => {
    let state = DEFAULT_STATE;
    for (let i = 0; i < LINE_HEIGHT_MAX; i++) {
      state = a11yReducer(state, { type: 'INCREASE_LINE_HEIGHT' });
    }
    expect(state.lineHeight).toBe(LINE_HEIGHT_MAX);
    // Clamps at max (no longer wraps — use decrease/reset instead)
    state = a11yReducer(state, { type: 'INCREASE_LINE_HEIGHT' });
    expect(state.lineHeight).toBe(LINE_HEIGHT_MAX);
  });

  it('resets line height to 0', () => {
    const state = { ...DEFAULT_STATE, lineHeight: 3 };
    expect(a11yReducer(state, { type: 'RESET_LINE_HEIGHT' }).lineHeight).toBe(0);
  });

  // ── Letter spacing ──
  it('increases letter spacing and clamps at max', () => {
    let state = DEFAULT_STATE;
    for (let i = 0; i < LETTER_SPACING_MAX; i++) {
      state = a11yReducer(state, { type: 'INCREASE_LETTER_SPACING' });
    }
    expect(state.letterSpacing).toBe(LETTER_SPACING_MAX);
    state = a11yReducer(state, { type: 'INCREASE_LETTER_SPACING' });
    expect(state.letterSpacing).toBe(LETTER_SPACING_MAX);
  });

  it('resets letter spacing to 0', () => {
    const state = { ...DEFAULT_STATE, letterSpacing: 2 };
    expect(a11yReducer(state, { type: 'RESET_LETTER_SPACING' }).letterSpacing).toBe(0);
  });

  // ── Toggle ──
  it('toggles a boolean feature on', () => {
    const result = a11yReducer(DEFAULT_STATE, { type: 'TOGGLE', feature: 'grayscale' });
    expect(result.grayscale).toBe(true);
  });

  it('toggles a boolean feature off', () => {
    const state = { ...DEFAULT_STATE, grayscale: true };
    const result = a11yReducer(state, { type: 'TOGGLE', feature: 'grayscale' });
    expect(result.grayscale).toBe(false);
  });

  // ── Contrast mutual exclusivity ──
  it('turns off other contrast modes when enabling one', () => {
    const state = { ...DEFAULT_STATE, highContrast: true };
    const result = a11yReducer(state, { type: 'TOGGLE', feature: 'darkContrast' });
    expect(result.darkContrast).toBe(true);
    expect(result.highContrast).toBe(false);
    expect(result.lightContrast).toBe(false);
  });

  it('allows turning off a contrast mode without enabling another', () => {
    const state = { ...DEFAULT_STATE, highContrast: true };
    const result = a11yReducer(state, { type: 'TOGGLE', feature: 'highContrast' });
    expect(result.highContrast).toBe(false);
    expect(result.darkContrast).toBe(false);
  });

  // ── Reset all ──
  it('resets all settings to defaults', () => {
    const dirty: A11yState = {
      ...DEFAULT_STATE,
      fontSize: 3, lineHeight: 2, letterSpacing: 1,
      grayscale: true, highContrast: true, readingGuide: true,
    };
    const result = a11yReducer(dirty, { type: 'RESET_ALL' });
    expect(result).toEqual(DEFAULT_STATE);
  });

  // ── Hydrate ──
  it('hydrates with provided state', () => {
    const persisted = { ...DEFAULT_STATE, fontSize: 2, grayscale: true };
    const result = a11yReducer(DEFAULT_STATE, { type: 'HYDRATE', state: persisted });
    expect(result.fontSize).toBe(2);
    expect(result.grayscale).toBe(true);
  });
});

describe('countActiveSettings', () => {
  it('returns 0 for default state', () => {
    expect(countActiveSettings(DEFAULT_STATE)).toBe(0);
  });

  it('counts numeric and boolean changes', () => {
    const state = { ...DEFAULT_STATE, fontSize: 2, grayscale: true, readingGuide: true };
    expect(countActiveSettings(state)).toBe(3);
  });

  it('counts negative font size as active', () => {
    const state = { ...DEFAULT_STATE, fontSize: -2 };
    expect(countActiveSettings(state)).toBe(1);
  });
});

  // ── Decrease line height / letter spacing ──
  it('decreases line height', () => {
    const state = { ...DEFAULT_STATE, lineHeight: 3 };
    expect(a11yReducer(state, { type: 'DECREASE_LINE_HEIGHT' }).lineHeight).toBe(2);
  });

  it('clamps line height decrease at 0', () => {
    expect(a11yReducer(DEFAULT_STATE, { type: 'DECREASE_LINE_HEIGHT' }).lineHeight).toBe(0);
  });

  it('decreases letter spacing', () => {
    const state = { ...DEFAULT_STATE, letterSpacing: 2 };
    expect(a11yReducer(state, { type: 'DECREASE_LETTER_SPACING' }).letterSpacing).toBe(1);
  });

  // ── Word spacing ──
  it('increases word spacing', () => {
    expect(a11yReducer(DEFAULT_STATE, { type: 'INCREASE_WORD_SPACING' }).wordSpacing).toBe(1);
  });

  it('decreases word spacing', () => {
    const state = { ...DEFAULT_STATE, wordSpacing: 3 };
    expect(a11yReducer(state, { type: 'DECREASE_WORD_SPACING' }).wordSpacing).toBe(2);
  });

  it('resets word spacing', () => {
    const state = { ...DEFAULT_STATE, wordSpacing: 4 };
    expect(a11yReducer(state, { type: 'RESET_WORD_SPACING' }).wordSpacing).toBe(0);
  });

  // ── Monochrome conflicts ──
  it('disables grayscale/desaturate when enabling monochrome', () => {
    const state = { ...DEFAULT_STATE, grayscale: true, desaturate: true };
    const result = a11yReducer(state, { type: 'TOGGLE', feature: 'monochrome' });
    expect(result.monochrome).toBe(true);
    expect(result.grayscale).toBe(false);
    expect(result.desaturate).toBe(false);
  });

  it('disables monochrome when enabling grayscale', () => {
    const state = { ...DEFAULT_STATE, monochrome: true };
    const result = a11yReducer(state, { type: 'TOGGLE', feature: 'grayscale' });
    expect(result.grayscale).toBe(true);
    expect(result.monochrome).toBe(false);
  });

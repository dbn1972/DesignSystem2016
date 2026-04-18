/**
 * Unit tests for persistence helpers.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, clearState } from '../persistence';
import { DEFAULT_STATE } from '../schema';

const KEY = 'test-a11y';

beforeEach(() => {
  localStorage.clear();
});

describe('persistence', () => {
  it('returns defaults when nothing is stored', () => {
    expect(loadState(KEY)).toEqual(DEFAULT_STATE);
  });

  it('saves and loads state', () => {
    const state = { ...DEFAULT_STATE, fontSize: 3, grayscale: true };
    saveState(state, KEY);
    expect(loadState(KEY)).toEqual(state);
  });

  it('merges with defaults on load (handles new keys)', () => {
    // Simulate old persisted data missing a key
    localStorage.setItem(KEY, JSON.stringify({ fontSize: 2 }));
    const loaded = loadState(KEY);
    expect(loaded.fontSize).toBe(2);
    expect(loaded.grayscale).toBe(false); // filled from defaults
    expect(loaded.keyboardNav).toBe(false);
  });

  it('returns defaults on corrupted JSON', () => {
    localStorage.setItem(KEY, 'not-json!!!');
    expect(loadState(KEY)).toEqual(DEFAULT_STATE);
  });

  it('clears stored state', () => {
    saveState({ ...DEFAULT_STATE, fontSize: 5 }, KEY);
    clearState(KEY);
    expect(loadState(KEY)).toEqual(DEFAULT_STATE);
  });
});

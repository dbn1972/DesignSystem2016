/**
 * ThemePersistenceManager — localStorage read/write with error resilience.
 *
 * All localStorage access is wrapped in try/catch. On failure, reads return
 * null and writes silently no-op.
 */

import type { ColorScheme, MotionPreference, DensityPreference } from './types';

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------

export const STORAGE_KEYS = {
  activeTheme: 'ux4g-theme-active',
  colorScheme: 'ux4g-theme-color-scheme',
  contrastMode: 'ux4g-theme-contrast-mode',
  motionPreference: 'ux4g-theme-motion',
  densityPreference: 'ux4g-theme-density',
} as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PersistedPreferences {
  activeTheme: string | null;
  colorScheme: ColorScheme | null;
  contrastMode: boolean | null;
  motionPreference: MotionPreference | null;
  densityPreference: DensityPreference | null;
}

// ---------------------------------------------------------------------------
// loadPreferences
// ---------------------------------------------------------------------------

/** Reads all persisted preferences. Returns null for any unavailable key. */
export function loadPreferences(): PersistedPreferences {
  const result: PersistedPreferences = {
    activeTheme: null,
    colorScheme: null,
    contrastMode: null,
    motionPreference: null,
    densityPreference: null,
  };

  try {
    const activeTheme = localStorage.getItem(STORAGE_KEYS.activeTheme);
    if (activeTheme) result.activeTheme = activeTheme;
  } catch {
    // localStorage unavailable
  }

  try {
    const colorScheme = localStorage.getItem(STORAGE_KEYS.colorScheme);
    if (colorScheme === 'light' || colorScheme === 'dark' || colorScheme === 'system') {
      result.colorScheme = colorScheme;
    }
  } catch {
    // localStorage unavailable
  }

  try {
    const contrastMode = localStorage.getItem(STORAGE_KEYS.contrastMode);
    if (contrastMode === 'true') result.contrastMode = true;
    else if (contrastMode === 'false') result.contrastMode = false;
  } catch {
    // localStorage unavailable
  }

  try {
    const motion = localStorage.getItem(STORAGE_KEYS.motionPreference);
    if (motion === 'full' || motion === 'reduced') {
      result.motionPreference = motion;
    }
  } catch {
    // localStorage unavailable
  }

  try {
    const density = localStorage.getItem(STORAGE_KEYS.densityPreference);
    if (density === 'comfortable' || density === 'compact' || density === 'spacious') {
      result.densityPreference = density;
    }
  } catch {
    // localStorage unavailable
  }

  return result;
}

// ---------------------------------------------------------------------------
// savePreference
// ---------------------------------------------------------------------------

/** Saves a single preference key. Silently no-ops if localStorage is unavailable. */
export function savePreference(key: keyof typeof STORAGE_KEYS, value: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS[key], value);
  } catch {
    // localStorage unavailable — silently no-op
  }
}

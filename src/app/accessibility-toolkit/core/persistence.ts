/**
 * @ux4g/a11y-core — Persistence Helpers
 *
 * localStorage read/write/clear with configurable namespace.
 * No framework imports.
 */

import type { A11yState } from './schema';
import { DEFAULT_STATE } from './schema';

const DEFAULT_KEY = 'ux4g-a11y';

export function loadState(storageKey: string = DEFAULT_KEY): A11yState {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: A11yState, storageKey: string = DEFAULT_KEY): void {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* silent */ }
}

export function clearState(storageKey: string = DEFAULT_KEY): void {
  try { localStorage.removeItem(storageKey); } catch { /* silent */ }
}

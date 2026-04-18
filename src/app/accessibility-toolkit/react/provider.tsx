/**
 * @ux4g/a11y-react — Provider
 *
 * React context + state wiring. Thin binding over core reducer.
 */

import {
  createContext, useState, useReducer, useEffect,
  useCallback, useRef, useMemo, type ReactNode,
} from 'react';
import {
  a11yReducer, prefersReducedMotion, DEFAULT_STATE,
  loadState, saveState, clearState,
  applyStyles, removeAllStyles, resolveConfig,
} from '../core';
import type { A11yStoreValue, A11yToggleState, A11yCoreConfig, ResolvedA11yConfig } from '../core';

// ─── State Context ──────────────────────────────────────────────────────────

export const A11yStateContext = createContext<A11yStoreValue | undefined>(undefined);
A11yStateContext.displayName = 'A11yStateContext';

// ─── Config Context ─────────────────────────────────────────────────────────

export const A11yConfigContext = createContext<ResolvedA11yConfig | undefined>(undefined);
A11yConfigContext.displayName = 'A11yConfigContext';

// ─── Provider ───────────────────────────────────────────────────────────────

export interface A11yToolkitConfig extends A11yCoreConfig {
  children?: ReactNode;
}

interface A11yProviderProps {
  config?: A11yToolkitConfig;
  children: ReactNode;
}

export function A11yProvider({ config, children }: A11yProviderProps) {
  const storageKey = config?.storageKey ?? 'ux4g-a11y';
  const respectReducedMotion = config?.respectReducedMotion ?? true;

  const resolved = useMemo(() => resolveConfig(config), [config]);
  const [state, dispatch] = useReducer(a11yReducer, DEFAULT_STATE);
  const [panelOpen, setPanelOpen] = useState(config?.defaultOpen ?? false);
  const hydrated = useRef(false);

  // Hydrate from localStorage
  useEffect(() => {
    const persisted = loadState(storageKey);
    if (respectReducedMotion && !hydrated.current) {
      if (prefersReducedMotion() && !persisted.pauseAnimations) {
        persisted.pauseAnimations = true;
      }
    }
    dispatch({ type: 'HYDRATE', state: persisted });
    hydrated.current = true;
  }, [storageKey, respectReducedMotion]);

  // Persist + apply styles + fire onSettingChange callback
  const prevStateRef = useRef(state);
  useEffect(() => {
    if (!hydrated.current) return;
    saveState(state, storageKey);
    applyStyles(state);

    // Fire analytics callback for changed keys
    if (config?.onSettingChange) {
      const prev = prevStateRef.current;
      for (const key of Object.keys(state) as (keyof typeof state)[]) {
        if (state[key] !== prev[key]) {
          config.onSettingChange(key, state[key], { ...state });
        }
      }
    }
    prevStateRef.current = state;
  }, [state, storageKey]);

  // Cleanup
  useEffect(() => () => removeAllStyles(), []);

  // Global keyboard shortcut: Alt+A (Win/Linux) / Option+A (Mac) to toggle panel
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Use e.code ('KeyA') instead of e.key — on macOS, Option+A produces 'å' not 'a'
      if (e.altKey && e.code === 'KeyA' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        e.preventDefault();
        setPanelOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Actions
  const increaseFontSize = useCallback(() => dispatch({ type: 'INCREASE_FONT_SIZE' }), []);
  const decreaseFontSize = useCallback(() => dispatch({ type: 'DECREASE_FONT_SIZE' }), []);
  const resetFontSize = useCallback(() => dispatch({ type: 'RESET_FONT_SIZE' }), []);
  const increaseLineHeight = useCallback(() => dispatch({ type: 'INCREASE_LINE_HEIGHT' }), []);
  const decreaseLineHeight = useCallback(() => dispatch({ type: 'DECREASE_LINE_HEIGHT' }), []);
  const resetLineHeight = useCallback(() => dispatch({ type: 'RESET_LINE_HEIGHT' }), []);
  const increaseLetterSpacing = useCallback(() => dispatch({ type: 'INCREASE_LETTER_SPACING' }), []);
  const decreaseLetterSpacing = useCallback(() => dispatch({ type: 'DECREASE_LETTER_SPACING' }), []);
  const resetLetterSpacing = useCallback(() => dispatch({ type: 'RESET_LETTER_SPACING' }), []);
  const increaseWordSpacing = useCallback(() => dispatch({ type: 'INCREASE_WORD_SPACING' }), []);
  const decreaseWordSpacing = useCallback(() => dispatch({ type: 'DECREASE_WORD_SPACING' }), []);
  const resetWordSpacing = useCallback(() => dispatch({ type: 'RESET_WORD_SPACING' }), []);
  const toggle = useCallback((f: keyof A11yToggleState) => dispatch({ type: 'TOGGLE', feature: f }), []);
  const resetAll = useCallback(() => { dispatch({ type: 'RESET_ALL' }); clearState(storageKey); }, [storageKey]);
  const openPanel = useCallback(() => setPanelOpen(true), []);
  const closePanel = useCallback(() => setPanelOpen(false), []);
  const togglePanel = useCallback(() => setPanelOpen((o) => !o), []);

  const store = useMemo<A11yStoreValue>(() => ({
    ...state, panelOpen, openPanel, closePanel, togglePanel,
    increaseFontSize, decreaseFontSize, resetFontSize,
    increaseLineHeight, decreaseLineHeight, resetLineHeight,
    increaseLetterSpacing, decreaseLetterSpacing, resetLetterSpacing,
    increaseWordSpacing, decreaseWordSpacing, resetWordSpacing,
    toggle, resetAll,
  }), [
    state, panelOpen, openPanel, closePanel, togglePanel,
    increaseFontSize, decreaseFontSize, resetFontSize,
    increaseLineHeight, decreaseLineHeight, resetLineHeight,
    increaseLetterSpacing, decreaseLetterSpacing, resetLetterSpacing,
    increaseWordSpacing, decreaseWordSpacing, resetWordSpacing,
    toggle, resetAll,
  ]);

  return (
    <A11yConfigContext.Provider value={resolved}>
      <A11yStateContext.Provider value={store}>
        {children}
      </A11yStateContext.Provider>
    </A11yConfigContext.Provider>
  );
}

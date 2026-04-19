/**
 * Extended ThemeProvider — Composes ThemeEngine, ThemePersistenceManager,
 * and ThemeValidator into a single React context provider.
 *
 * Backward-compatible with the existing ThemeContext.tsx API while adding
 * activeTheme, contrastMode, setTheme, setContrastMode, resolvedTokens,
 * and presets.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

import type {
  ColorScheme,
  MotionPreference,
  DensityPreference,
  ThemeDefinition,
  ThemeContextType,
  PresetName,
} from './types';

import { THEME_PRESETS } from './presets';
import { resolveTokens, applyTokensToDOM } from './ThemeEngine';
import { loadPreferences, savePreference, STORAGE_KEYS } from './ThemePersistenceManager';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const PRESET_NAMES: PresetName[] = Object.keys(THEME_PRESETS) as PresetName[];

function isValidColorScheme(value: string | null): value is ColorScheme {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getSystemColorScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveEffectiveScheme(scheme: ColorScheme): 'light' | 'dark' {
  if (scheme === 'system') return getSystemColorScheme();
  return scheme;
}

function resolveThemeDefinition(theme: string | ThemeDefinition): ThemeDefinition {
  if (typeof theme === 'object') return theme;
  const preset = THEME_PRESETS[theme as PresetName];
  if (preset) return preset;
  // Unknown name — warn and fall back to default
  console.warn(
    `Unknown theme: "${theme}". Falling back to default. Available presets: ${PRESET_NAMES.join(', ')}`,
  );
  return THEME_PRESETS['default'];
}

// ---------------------------------------------------------------------------
// ThemeProvider Props
// ---------------------------------------------------------------------------

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string | ThemeDefinition;
  defaultColorScheme?: ColorScheme;
}

// ---------------------------------------------------------------------------
// ThemeProvider Component
// ---------------------------------------------------------------------------

export function ThemeProvider({
  children,
  defaultTheme = 'default',
  defaultColorScheme = 'system',
}: ThemeProviderProps) {
  // --- Initialization (read persisted prefs, reconcile with DOM) ---
  const initializedRef = useRef(false);

  const [activeThemeDef, setActiveThemeDef] = useState<ThemeDefinition>(() => {
    if (typeof window === 'undefined') return resolveThemeDefinition(defaultTheme);
    const prefs = loadPreferences();
    if (prefs.activeTheme) {
      const def = THEME_PRESETS[prefs.activeTheme as PresetName];
      if (def) return def;
    }
    return resolveThemeDefinition(defaultTheme);
  });

  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    if (typeof window === 'undefined') return defaultColorScheme;
    const prefs = loadPreferences();
    return prefs.colorScheme ?? defaultColorScheme;
  });

  const [contrastMode, setContrastModeState] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const prefs = loadPreferences();
    return prefs.contrastMode ?? false;
  });

  const [motionPreference, setMotionPreferenceState] = useState<MotionPreference>(() => {
    if (typeof window === 'undefined') return 'full';
    const prefs = loadPreferences();
    return prefs.motionPreference ?? 'full';
  });

  const [densityPreference, setDensityPreferenceState] = useState<DensityPreference>(() => {
    if (typeof window === 'undefined') return 'comfortable';
    const prefs = loadPreferences();
    return prefs.densityPreference ?? 'comfortable';
  });

  // Derived state
  const effectiveScheme = resolveEffectiveScheme(colorScheme);
  const isDarkMode = effectiveScheme === 'dark';
  const tokens = resolveTokens(activeThemeDef, effectiveScheme, contrastMode);

  // --- Apply tokens to DOM on every relevant state change ---
  useEffect(() => {
    applyTokensToDOM(tokens, effectiveScheme, contrastMode);
    initializedRef.current = true;
  }, [tokens, effectiveScheme, contrastMode]);

  // --- Apply motion preference ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    if (motionPreference === 'reduced') {
      root.style.setProperty('--ux4g-motion-duration-fast', '0ms');
      root.style.setProperty('--ux4g-motion-duration-base', '0ms');
      root.style.setProperty('--ux4g-motion-duration-slow', '0ms');
      root.classList.add('reduce-motion');
    } else {
      root.style.removeProperty('--ux4g-motion-duration-fast');
      root.style.removeProperty('--ux4g-motion-duration-base');
      root.style.removeProperty('--ux4g-motion-duration-slow');
      root.classList.remove('reduce-motion');
    }
  }, [motionPreference]);

  // --- Apply density preference ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    root.classList.remove('density-comfortable', 'density-compact', 'density-spacious');
    root.classList.add(`density-${densityPreference}`);
  }, [densityPreference]);

  // --- Listen for system preference changes when scheme is 'system' ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (colorScheme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Re-resolve tokens — React state update triggers re-render
      // which recalculates effectiveScheme and tokens
      setColorSchemeState((prev) => {
        // Force a re-render by toggling to a new reference
        // (value stays 'system' but state update triggers effect)
        if (prev === 'system') return 'system';
        return prev;
      });
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [colorScheme]);

  // --- Cross-tab sync via storage events ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEYS.activeTheme && event.newValue) {
        const def = THEME_PRESETS[event.newValue as PresetName];
        if (def) setActiveThemeDef(def);
      }

      if (event.key === STORAGE_KEYS.colorScheme) {
        const val = event.newValue;
        if (isValidColorScheme(val)) {
          setColorSchemeState(val);
        }
      }

      if (event.key === STORAGE_KEYS.contrastMode) {
        setContrastModeState(event.newValue === 'true');
      }

      if (event.key === STORAGE_KEYS.motionPreference) {
        if (event.newValue === 'full' || event.newValue === 'reduced') {
          setMotionPreferenceState(event.newValue);
        }
      }

      if (event.key === STORAGE_KEYS.densityPreference) {
        if (
          event.newValue === 'comfortable' ||
          event.newValue === 'compact' ||
          event.newValue === 'spacious'
        ) {
          setDensityPreferenceState(event.newValue);
        }
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // --- Setters ---

  const setTheme = useCallback((theme: string | ThemeDefinition) => {
    const def = resolveThemeDefinition(theme);
    setActiveThemeDef(def);
    savePreference('activeTheme', def.name);
  }, []);

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    savePreference('colorScheme', scheme);
  }, []);

  const setContrastMode = useCallback((enabled: boolean) => {
    setContrastModeState(enabled);
    savePreference('contrastMode', String(enabled));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setColorScheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setColorScheme]);

  const setMotionPreference = useCallback((preference: MotionPreference) => {
    setMotionPreferenceState(preference);
    savePreference('motionPreference', preference);
  }, []);

  const setDensityPreference = useCallback((preference: DensityPreference) => {
    setDensityPreferenceState(preference);
    savePreference('densityPreference', preference);
  }, []);

  const resetToDefaults = useCallback(() => {
    setTheme('default');
    setColorScheme(defaultColorScheme);
    setContrastMode(false);
    setMotionPreference('full');
    setDensityPreference('comfortable');
  }, [defaultColorScheme, setTheme, setColorScheme, setContrastMode, setMotionPreference, setDensityPreference]);

  // --- Context value ---

  const value: ThemeContextType = {
    // Backward-compatible fields
    colorScheme,
    isDarkMode,
    setColorScheme,
    toggleDarkMode,
    motionPreference,
    setMotionPreference,
    densityPreference,
    setDensityPreference,
    resetToDefaults,

    // New fields
    activeTheme: activeThemeDef.name,
    contrastMode,
    setTheme,
    setContrastMode,
    resolvedTokens: tokens,
    presets: PRESET_NAMES,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

/**
 * Hook to access theme context.
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/** Legacy alias for backward compatibility */
export const DarkModeProvider = ThemeProvider;

/** Legacy alias for backward compatibility */
export const useDarkMode = useTheme;

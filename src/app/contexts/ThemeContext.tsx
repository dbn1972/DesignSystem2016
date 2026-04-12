import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

/**
 * Theme Preferences
 */
export type ColorScheme = 'light' | 'dark' | 'system';
export type MotionPreference = 'full' | 'reduced';
export type DensityPreference = 'comfortable' | 'compact' | 'spacious';

export interface ThemePreferences {
  colorScheme: ColorScheme;
  motionPreference: MotionPreference;
  densityPreference: DensityPreference;
}

export interface ThemeContextType {
  // Color scheme
  colorScheme: ColorScheme;
  isDarkMode: boolean;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleDarkMode: () => void;

  // Motion preferences
  motionPreference: MotionPreference;
  setMotionPreference: (preference: MotionPreference) => void;

  // Density preferences
  densityPreference: DensityPreference;
  setDensityPreference: (preference: DensityPreference) => void;

  // Utility
  resetToDefaults: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  colorScheme: 'ux4g-theme-color-scheme',
  motionPreference: 'ux4g-theme-motion',
  densityPreference: 'ux4g-theme-density',
} as const;

const DEFAULT_PREFERENCES: ThemePreferences = {
  colorScheme: 'system',
  motionPreference: 'full',
  densityPreference: 'comfortable',
};

/**
 * Get system color scheme preference
 */
function getSystemColorScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Get system motion preference
 */
function getSystemMotionPreference(): MotionPreference {
  if (typeof window === 'undefined') return 'full';
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full';
}

/**
 * Theme Provider Component
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize color scheme
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem(STORAGE_KEYS.colorScheme);
    return (stored as ColorScheme) || DEFAULT_PREFERENCES.colorScheme;
  });

  // Initialize motion preference
  const [motionPreference, setMotionPreferenceState] = useState<MotionPreference>(() => {
    if (typeof window === 'undefined') return 'full';
    const stored = localStorage.getItem(STORAGE_KEYS.motionPreference);
    return (stored as MotionPreference) || getSystemMotionPreference();
  });

  // Initialize density preference
  const [densityPreference, setDensityPreferenceState] = useState<DensityPreference>(() => {
    if (typeof window === 'undefined') return 'comfortable';
    const stored = localStorage.getItem(STORAGE_KEYS.densityPreference);
    return (stored as DensityPreference) || DEFAULT_PREFERENCES.densityPreference;
  });

  // Calculate effective dark mode based on color scheme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const scheme = localStorage.getItem(STORAGE_KEYS.colorScheme) as ColorScheme || 'system';
    return scheme === 'system' ? getSystemColorScheme() === 'dark' : scheme === 'dark';
  });

  // Apply dark mode class to document
  useEffect(() => {
    const effectiveDarkMode = colorScheme === 'system'
      ? getSystemColorScheme() === 'dark'
      : colorScheme === 'dark';

    setIsDarkMode(effectiveDarkMode);

    if (effectiveDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  // Apply motion preference
  useEffect(() => {
    if (motionPreference === 'reduced') {
      document.documentElement.style.setProperty('--ux4g-motion-duration-fast', '0ms');
      document.documentElement.style.setProperty('--ux4g-motion-duration-base', '0ms');
      document.documentElement.style.setProperty('--ux4g-motion-duration-slow', '0ms');
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.style.removeProperty('--ux4g-motion-duration-fast');
      document.documentElement.style.removeProperty('--ux4g-motion-duration-base');
      document.documentElement.style.removeProperty('--ux4g-motion-duration-slow');
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [motionPreference]);

  // Apply density preference
  useEffect(() => {
    document.documentElement.classList.remove('density-comfortable', 'density-compact', 'density-spacious');
    document.documentElement.classList.add(`density-${densityPreference}`);
  }, [densityPreference]);

  // Listen for system preference changes
  useEffect(() => {
    if (colorScheme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [colorScheme]);

  // Color scheme setter
  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    localStorage.setItem(STORAGE_KEYS.colorScheme, scheme);
  }, []);

  // Toggle dark mode (legacy support)
  const toggleDarkMode = useCallback(() => {
    setColorScheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setColorScheme]);

  // Motion preference setter
  const setMotionPreference = useCallback((preference: MotionPreference) => {
    setMotionPreferenceState(preference);
    localStorage.setItem(STORAGE_KEYS.motionPreference, preference);
  }, []);

  // Density preference setter
  const setDensityPreference = useCallback((preference: DensityPreference) => {
    setDensityPreferenceState(preference);
    localStorage.setItem(STORAGE_KEYS.densityPreference, preference);
  }, []);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setColorScheme(DEFAULT_PREFERENCES.colorScheme);
    setMotionPreference(DEFAULT_PREFERENCES.motionPreference);
    setDensityPreference(DEFAULT_PREFERENCES.densityPreference);
  }, [setColorScheme, setMotionPreference, setDensityPreference]);

  const value: ThemeContextType = {
    colorScheme,
    isDarkMode,
    setColorScheme,
    toggleDarkMode,
    motionPreference,
    setMotionPreference,
    densityPreference,
    setDensityPreference,
    resetToDefaults,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Legacy export for backward compatibility
 */
export const DarkModeProvider = ThemeProvider;
export const useDarkMode = useTheme;

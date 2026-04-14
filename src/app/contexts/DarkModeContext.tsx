/**
 * Legacy compatibility exports.
 *
 * Keep this module so existing imports continue to work while the app
 * uses ThemeContext as the single source of truth.
 */
export { ThemeProvider as DarkModeProvider, useTheme as useDarkMode } from "./ThemeContext";

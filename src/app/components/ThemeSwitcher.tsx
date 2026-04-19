import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/theme";

export default function ThemeSwitcher() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const nextModeLabel = isDarkMode ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Switch to ${nextModeLabel} mode`}
      title={`Switch to ${nextModeLabel} mode`}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

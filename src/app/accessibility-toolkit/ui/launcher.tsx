/**
 * @ux4g/a11y-react — Launcher Button
 *
 * Floating action button with active-count badge and a tooltip
 * showing the platform-aware keyboard shortcut (⌥ A on Mac, Alt+A elsewhere).
 */

import { useMemo } from 'react';
import { useA11y, useA11yConfig } from '../react/hooks';
import { countActiveSettings, getShortcutLabel } from '../core';
import { AccessibilityIcon } from './icons';

export function A11yLauncher() {
  const store = useA11y();
  const { labels, launcherPosition, tokens } = useA11yConfig();
  const activeCount = countActiveSettings(store);
  const shortcut = useMemo(() => getShortcutLabel(), []);

  const pos: Record<string, string> = {
    'bottom-right': 'ux4g-a11y-launcher--br',
    'bottom-left': 'ux4g-a11y-launcher--bl',
    'top-right': 'ux4g-a11y-launcher--tr',
    'top-left': 'ux4g-a11y-launcher--tl',
  };

  return (
    <div className={`ux4g-a11y-launcher-wrap ${pos[launcherPosition] ?? pos['bottom-right']}`} style={{ zIndex: tokens.zIndex }}>
      {/* Tooltip with platform-aware shortcut */}
      <span className="ux4g-a11y-launcher-tooltip" aria-hidden="true">
        {labels.launcherLabel}
        <kbd className="ux4g-a11y-kbd">{shortcut.full}</kbd>
      </span>

      <button
        type="button"
        onClick={store.togglePanel}
        aria-label={
          activeCount > 0
            ? `${labels.launcherLabel} (${activeCount} active)`
            : labels.launcherLabel
        }
        aria-expanded={store.panelOpen}
        aria-haspopup="dialog"
        className="ux4g-a11y-launcher"
      >
        <AccessibilityIcon width={24} height={24} />
        {activeCount > 0 && (
          <span className="ux4g-a11y-launcher-badge" aria-hidden="true">
            {activeCount}
          </span>
        )}
      </button>
    </div>
  );
}

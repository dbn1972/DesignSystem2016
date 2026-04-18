/**
 * @ux4g/a11y-react — Panel (settings drawer)
 *
 * Two-column layout on desktop, single-column on mobile.
 * Focus management, body scroll lock, close animation,
 * per-toggle announcements via live region.
 */

import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { useA11y, useA11yConfig } from '../react/hooks';
import { GROUP_ORDER, GROUP_LABEL_KEYS, countActiveSettings, countActiveInGroup, getShortcutLabel } from '../core';
import type { A11yFeatureGroup } from '../core';
import { CloseIcon, RotateCcwIcon, TypeIcon, ContrastIcon, EyeIcon, NavigationIcon, BookOpenIcon } from './icons';
import { TextSection, ContrastSection, VisualSection, NavigationSection, ReadingSection, type SectionProps } from './sections';

const GROUP_ICONS: Record<A11yFeatureGroup, React.ReactNode> = {
  text: <TypeIcon width={18} height={18} />,
  contrast: <ContrastIcon width={18} height={18} />,
  visual: <EyeIcon width={18} height={18} />,
  navigation: <NavigationIcon width={18} height={18} />,
  reading: <BookOpenIcon width={18} height={18} />,
};

const SECTION_MAP: Record<A11yFeatureGroup, React.FC<SectionProps>> = {
  text: TextSection,
  contrast: ContrastSection,
  visual: VisualSection,
  navigation: NavigationSection,
  reading: ReadingSection,
};

/** Two-column layout: left column gets text+contrast, right gets visual+nav+reading */
const LEFT_GROUPS: A11yFeatureGroup[] = ['text', 'contrast'];
const RIGHT_GROUPS: A11yFeatureGroup[] = ['visual', 'navigation', 'reading'];

const CLOSE_DURATION = 200;

export function A11yPanel() {
  const store = useA11y();
  const { labels, enabledFeatures, panelPlacement } = useA11yConfig();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const activeCount = countActiveSettings(store);
  const shortcut = useMemo(() => getShortcutLabel(), []);

  useEffect(() => {
    if (store.panelOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible && !closing) {
      setClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, CLOSE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [store.panelOpen]);

  useEffect(() => {
    if (visible && !closing) {
      triggerRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => closeRef.current?.focus());
      setAnnouncement(`${labels.panelTitle} opened. ${activeCount} settings active.`);
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    } else {
      // Always restore body scroll when panel is not fully open
      document.body.style.overflow = '';
      if (!visible && triggerRef.current) {
        triggerRef.current.focus();
        triggerRef.current = null;
      }
    }
  }, [visible, closing]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.stopPropagation(); store.closePanel(); }
    if (e.key === 'Tab' && panelRef.current) {
      const els = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, [store]);

  const isEnabled = (k: string) => enabledFeatures.includes(k as any);
  const isDrawer = panelPlacement !== 'modal';
  const isLeft = panelPlacement === 'drawer-left';

  if (!visible) return null;

  const closingClass = closing ? 'ux4g-a11y-panel--closing' : '';
  const backdropClosingClass = closing ? 'ux4g-a11y-backdrop--closing' : '';

  const renderGroup = (group: A11yFeatureGroup) => {
    const Section = SECTION_MAP[group];
    return (
      <section key={group} className="ux4g-a11y-group" aria-labelledby={`a11y-group-${group}`}>
        <h3 id={`a11y-group-${group}`} className="ux4g-a11y-group-heading">
          <span className="ux4g-a11y-group-icon" aria-hidden="true">{GROUP_ICONS[group]}</span>
          {labels[GROUP_LABEL_KEYS[group]]}
          {countActiveInGroup(store, group) > 0 && (
            <span className="ux4g-a11y-group-dot" aria-hidden="true" />
          )}
        </h3>
        <div className="ux4g-a11y-group-controls">
          <Section store={store} labels={labels} isEnabled={isEnabled} announce={setAnnouncement} />
        </div>
      </section>
    );
  };

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="ux4g-a11y-sr-only">
        {announcement}
      </div>

      <div
        className={`ux4g-a11y-backdrop ${backdropClosingClass}`}
        onClick={(e) => { e.stopPropagation(); store.closePanel(); }}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={labels.panelTitle}
        className={`ux4g-a11y-panel-root ux4g-a11y-panel ${
          isDrawer ? (isLeft ? 'ux4g-a11y-panel--left' : 'ux4g-a11y-panel--right') : 'ux4g-a11y-panel--modal'
        } ${closingClass}`}
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="ux4g-a11y-panel-header">
          <div className="ux4g-a11y-panel-title-row">
            <h2 className="ux4g-a11y-panel-title">{labels.panelTitle}</h2>
            {activeCount > 0 && (
              <span className="ux4g-a11y-active-badge" aria-label={`${activeCount} active settings`}>
                {activeCount}
              </span>
            )}
          </div>
          <div className="ux4g-a11y-panel-header-actions">
            <span className="ux4g-a11y-shortcut-hint" aria-hidden="true">
              <kbd className="ux4g-a11y-kbd">{shortcut.modifier}</kbd>
              <span>+</span>
              <kbd className="ux4g-a11y-kbd">{shortcut.key}</kbd>
            </span>
            <button
              type="button"
              onClick={() => { store.resetAll(); setAnnouncement('All settings reset to defaults.'); }}
              aria-label={labels.resetAll}
              className="ux4g-a11y-panel-btn ux4g-a11y-panel-btn--reset"
              title={labels.resetAll}
            >
              <RotateCcwIcon width={16} height={16} />
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={store.closePanel}
              aria-label={labels.closePanel}
              className="ux4g-a11y-panel-btn"
            >
              <CloseIcon width={18} height={18} />
            </button>
          </div>
        </div>

        {/* Two-column body */}
        <div className="ux4g-a11y-panel-body">
          <div className="ux4g-a11y-panel-grid">
            <div className="ux4g-a11y-panel-col">
              {LEFT_GROUPS.map(renderGroup)}
            </div>
            <div className="ux4g-a11y-panel-col">
              {RIGHT_GROUPS.map(renderGroup)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ux4g-a11y-panel-footer" aria-hidden="true">
          <span>Powered by</span>
          <span className="ux4g-a11y-panel-footer-logo">UX4G</span>
          <span>Accessibility Toolkit v1.0</span>
        </div>
      </div>
    </>
  );
}

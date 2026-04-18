/**
 * UX4G Accessibility Toolkit — Hosted Browser Runtime
 *
 * Framework-agnostic, self-contained accessibility widget.
 * Works via script tag on any website: WordPress, Drupal, HTML, etc.
 *
 * Usage:
 *   <script src="ux4g-a11y.min.js" defer></script>
 *
 * Or with config:
 *   <script>
 *     window.UX4G_A11Y_CONFIG = { launcherPosition: 'bottom-left', storageKey: 'my-a11y' };
 *   </script>
 *   <script src="ux4g-a11y.min.js" defer></script>
 */

import {
  a11yReducer, prefersReducedMotion, countActiveSettings, countActiveInGroup,
  DEFAULT_STATE, FONT_SIZE_DISPLAY, getShortcutLabel,
  loadState, saveState, clearState,
  applyStyles, removeAllStyles,
  resolveConfig, DEFAULT_LABELS, GROUP_ORDER, GROUP_LABEL_KEYS, FEATURE_REGISTRY,
} from '../core';
import type { A11yState, A11yToggleState, A11yCoreConfig, ResolvedA11yConfig, A11yFeatureGroup } from '../core';

// ─── Runtime State ──────────────────────────────────────────────────────────

let state: A11yState = { ...DEFAULT_STATE };
let config: ResolvedA11yConfig;
let panelOpen = false;
let panelVisible = false;
let closing = false;
let mouseY = 0;
let announcement = '';
let initialized = false;

// DOM refs
let rootEl: HTMLDivElement | null = null;

// ─── State Management ───────────────────────────────────────────────────────

function dispatch(action: Parameters<typeof a11yReducer>[1]) {
  state = a11yReducer(state, action);
  saveState(state, config.storageKey);
  applyStyles(state);
  render();
}

function toggle(feature: keyof A11yToggleState) {
  const label = (config.labels as Record<string, string>)[feature] ?? feature;
  const wasOn = state[feature];
  dispatch({ type: 'TOGGLE', feature });
  announce(`${label} ${wasOn ? 'disabled' : 'enabled'}`);
}

function announce(msg: string) {
  announcement = msg;
  render();
  // Clear after screen reader has time to read it
  setTimeout(() => { announcement = ''; render(); }, 3000);
}

// ─── Panel Control ──────────────────────────────────────────────────────────

let triggerEl: HTMLElement | null = null;
const CLOSE_MS = 200;

function openPanel() {
  triggerEl = document.activeElement as HTMLElement;
  panelOpen = true;
  panelVisible = true;
  closing = false;
  document.body.style.overflow = 'hidden';
  render();
  announce(`${config.labels.panelTitle} opened. ${countActiveSettings(state)} settings active.`);
  requestAnimationFrame(() => {
    rootEl?.querySelector<HTMLElement>('.ux4g-a11y-panel-btn:last-child')?.focus();
  });
}

function closePanel() {
  panelOpen = false;
  closing = true;
  render();
  setTimeout(() => {
    panelVisible = false;
    closing = false;
    document.body.style.overflow = '';
    render();
    triggerEl?.focus();
    triggerEl = null;
  }, CLOSE_MS);
}

function togglePanel() {
  if (panelOpen) closePanel();
  else openPanel();
}

// ─── Stepper Helpers ────────────────────────────────────────────────────────

function stepAction(type: string, label: string, verb: string) {
  dispatch({ type } as any);
  announce(`${label} ${verb}`);
}

// ─── Render ─────────────────────────────────────────────────────────────────

function render() {
  if (!rootEl) return;
  const activeCount = countActiveSettings(state);
  const shortcut = getShortcutLabel();
  const l = config.labels;
  const posClass: Record<string, string> = {
    'bottom-right': 'ux4g-a11y-launcher--br',
    'bottom-left': 'ux4g-a11y-launcher--bl',
    'top-right': 'ux4g-a11y-launcher--tr',
    'top-left': 'ux4g-a11y-launcher--tl',
  };

  const isDrawer = config.panelPlacement !== 'modal';
  const isLeft = config.panelPlacement === 'drawer-left';
  const panelPosClass = isDrawer ? (isLeft ? 'ux4g-a11y-panel--left' : 'ux4g-a11y-panel--right') : 'ux4g-a11y-panel--modal';
  const closingClass = closing ? 'ux4g-a11y-panel--closing' : '';
  const backdropClosing = closing ? 'ux4g-a11y-backdrop--closing' : '';

  // Build toggle HTML
  function toggleHTML(key: keyof A11yToggleState, label: string): string {
    if (!config.enabledFeatures.includes(key as any)) return '';
    const checked = state[key];
    return `<div class="ux4g-a11y-control">
      <div class="ux4g-a11y-control-text"><span class="ux4g-a11y-control-label">${label}</span></div>
      <button type="button" role="switch" aria-checked="${checked}" data-toggle="${key}"
        class="ux4g-a11y-toggle ${checked ? 'ux4g-a11y-toggle--on' : ''}">
        <span class="ux4g-a11y-toggle-thumb"></span>
      </button>
    </div>`;
  }

  // Build stepper HTML
  function stepperHTML(label: string, value: number, display: string, incAction: string, decAction: string, resetAction: string): string {
    return `<div class="ux4g-a11y-control">
      <span class="ux4g-a11y-control-label">${label}</span>
      <div class="ux4g-a11y-stepper" role="group" aria-label="${label}">
        <button type="button" data-action="${decAction}" aria-label="Decrease ${label.toLowerCase()}" class="ux4g-a11y-stepper-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/></svg>
        </button>
        <span class="ux4g-a11y-stepper-value" aria-live="polite">${display}</span>
        <button type="button" data-action="${incAction}" aria-label="Increase ${label.toLowerCase()}" class="ux4g-a11y-stepper-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
        </button>
        ${value !== 0 ? `<button type="button" data-action="${resetAction}" aria-label="Reset ${label.toLowerCase()}" class="ux4g-a11y-stepper-btn ux4g-a11y-stepper-btn--reset">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>` : ''}
      </div>
    </div>`;
  }

  // Build group HTML
  function groupHTML(group: A11yFeatureGroup, content: string): string {
    const groupLabel = l[GROUP_LABEL_KEYS[group]];
    const activeInGroup = countActiveInGroup(state, group);
    return `<section class="ux4g-a11y-group" aria-labelledby="a11y-group-${group}">
      <h3 id="a11y-group-${group}" class="ux4g-a11y-group-heading">
        <span class="ux4g-a11y-group-icon" aria-hidden="true">${groupIcon(group)}</span>
        ${groupLabel}
        ${activeInGroup > 0 ? '<span class="ux4g-a11y-group-dot" aria-hidden="true"></span>' : ''}
      </h3>
      <div class="ux4g-a11y-group-controls">${content}</div>
    </section>`;
  }

  function groupIcon(g: A11yFeatureGroup): string {
    const icons: Record<string, string> = { text: 'Aa', contrast: '◐', visual: '👁', navigation: '⌨', reading: '📖' };
    return icons[g] ?? '';
  }

  // Text group
  const textContent = [
    config.enabledFeatures.includes('fontSize') ? stepperHTML(l.fontSize, state.fontSize, FONT_SIZE_DISPLAY[state.fontSize] ?? '100%', 'INCREASE_FONT_SIZE', 'DECREASE_FONT_SIZE', 'RESET_FONT_SIZE') : '',
    config.enabledFeatures.includes('lineHeight') ? stepperHTML(l.lineHeight, state.lineHeight, state.lineHeight === 0 ? 'Default' : `Step ${state.lineHeight}`, 'INCREASE_LINE_HEIGHT', 'DECREASE_LINE_HEIGHT', 'RESET_LINE_HEIGHT') : '',
    config.enabledFeatures.includes('letterSpacing') ? stepperHTML(l.letterSpacing, state.letterSpacing, state.letterSpacing === 0 ? 'Default' : `Step ${state.letterSpacing}`, 'INCREASE_LETTER_SPACING', 'DECREASE_LETTER_SPACING', 'RESET_LETTER_SPACING') : '',
    config.enabledFeatures.includes('wordSpacing') ? stepperHTML(l.wordSpacing, state.wordSpacing, state.wordSpacing === 0 ? 'Default' : `Step ${state.wordSpacing}`, 'INCREASE_WORD_SPACING', 'DECREASE_WORD_SPACING', 'RESET_WORD_SPACING') : '',
    toggleHTML('dyslexiaFont', l.dyslexiaFont),
    toggleHTML('leftAlign', l.leftAlign),
  ].join('');

  const contrastContent = [
    toggleHTML('highContrast', l.highContrast), toggleHTML('darkContrast', l.darkContrast),
    toggleHTML('lightContrast', l.lightContrast), toggleHTML('invertColors', l.invertColors),
    toggleHTML('grayscale', l.grayscale), toggleHTML('desaturate', l.desaturate),
    toggleHTML('monochrome', l.monochrome),
  ].join('');

  const visualContent = [
    toggleHTML('highlightLinks', l.highlightLinks), toggleHTML('highlightHeadings', l.highlightHeadings),
    toggleHTML('largerCursor', l.largerCursor), toggleHTML('hideImages', l.hideImages),
  ].join('');

  const navContent = [toggleHTML('strongFocus', l.strongFocus), toggleHTML('keyboardNav', l.keyboardNav)].join('');
  const readContent = [toggleHTML('readingGuide', l.readingGuide), toggleHTML('readingMask', l.readingMask), toggleHTML('pauseAnimations', l.pauseAnimations)].join('');

  const leftGroups = groupHTML('text', textContent) + groupHTML('contrast', contrastContent);
  const rightGroups = groupHTML('visual', visualContent) + groupHTML('navigation', navContent) + groupHTML('reading', readContent);

  rootEl.innerHTML = `
    <div aria-live="polite" aria-atomic="true" class="ux4g-a11y-sr-only">${announcement}</div>
    <a href="${config.skipToContentSelector}" class="ux4g-a11y-skip-link">${l.skipToContent}</a>
    <div class="ux4g-a11y-launcher-wrap ${posClass[config.launcherPosition] ?? posClass['bottom-right']}" style="z-index:${config.tokens.zIndex}">
      <span class="ux4g-a11y-launcher-tooltip" aria-hidden="true">${l.launcherLabel} <kbd class="ux4g-a11y-kbd">${shortcut.full}</kbd></span>
      <button type="button" class="ux4g-a11y-launcher" aria-label="${activeCount > 0 ? `${l.launcherLabel} (${activeCount} active)` : l.launcherLabel}" aria-expanded="${panelOpen}" aria-haspopup="dialog" data-action="togglePanel">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="2.5"/><path d="M12 7v5m-4-3h8m-6 3l-2 6m4-6l2 6"/></svg>
        ${activeCount > 0 ? `<span class="ux4g-a11y-launcher-badge" aria-hidden="true">${activeCount}</span>` : ''}
      </button>
    </div>
    ${panelVisible ? `
      <div class="ux4g-a11y-backdrop ${backdropClosing}" data-action="closePanel" aria-hidden="true"></div>
      <div role="dialog" aria-modal="true" aria-label="${l.panelTitle}" class="ux4g-a11y-panel-root ux4g-a11y-panel ${panelPosClass} ${closingClass}" data-panel>
        <div class="ux4g-a11y-panel-header">
          <div class="ux4g-a11y-panel-title-row">
            <h2 class="ux4g-a11y-panel-title">${l.panelTitle}</h2>
            ${activeCount > 0 ? `<span class="ux4g-a11y-active-badge" aria-label="${activeCount} active settings">${activeCount}</span>` : ''}
          </div>
          <div class="ux4g-a11y-panel-header-actions">
            <span class="ux4g-a11y-shortcut-hint" aria-hidden="true"><kbd class="ux4g-a11y-kbd">${shortcut.modifier}</kbd><span>+</span><kbd class="ux4g-a11y-kbd">${shortcut.key}</kbd></span>
            <button type="button" data-action="resetAll" aria-label="${l.resetAll}" title="${l.resetAll}" class="ux4g-a11y-panel-btn ux4g-a11y-panel-btn--reset">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button type="button" data-action="closePanel" aria-label="${l.closePanel}" class="ux4g-a11y-panel-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
        <div class="ux4g-a11y-panel-body">
          <div class="ux4g-a11y-panel-grid">
            <div class="ux4g-a11y-panel-col">${leftGroups}</div>
            <div class="ux4g-a11y-panel-col">${rightGroups}</div>
          </div>
        </div>
        <div class="ux4g-a11y-panel-footer" aria-hidden="true">
          <span>Powered by</span><span class="ux4g-a11y-panel-footer-logo">UX4G</span><span>Accessibility Toolkit v1.0</span>
        </div>
      </div>
    ` : ''}
    ${state.readingGuide ? `<div class="ux4g-a11y-reading-guide" style="top:${mouseY - 2}px" aria-hidden="true"></div>` : ''}
    ${state.readingMask ? `<div class="ux4g-a11y-reading-mask" aria-hidden="true"><div class="ux4g-a11y-reading-mask-overlay" style="top:0;height:${Math.max(0, mouseY - 60)}px"></div><div class="ux4g-a11y-reading-mask-overlay" style="top:${mouseY + 60}px;bottom:0"></div></div>` : ''}
  `;
}

// ─── Event Delegation ───────────────────────────────────────────────────────

function handleClick(e: Event) {
  const target = (e.target as HTMLElement).closest<HTMLElement>('[data-action],[data-toggle]');
  if (!target) return;

  const action = target.dataset.action;
  const toggleKey = target.dataset.toggle;

  if (action === 'togglePanel') togglePanel();
  else if (action === 'closePanel') closePanel();
  else if (action === 'resetAll') { dispatch({ type: 'RESET_ALL' }); clearState(config.storageKey); announce('All settings reset to defaults.'); }
  else if (action) { stepAction(action, '', action.includes('INCREASE') ? 'increased' : action.includes('DECREASE') ? 'decreased' : 'reset'); }
  else if (toggleKey) toggle(toggleKey as keyof A11yToggleState);
}

function handleKeyDown(e: KeyboardEvent) {
  // Alt+A / Option+A global shortcut — use e.code for macOS compatibility
  if (e.altKey && e.code === 'KeyA' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    e.preventDefault();
    togglePanel();
  }

  // Escape to close panel
  if (e.key === 'Escape' && panelOpen) {
    e.stopPropagation();
    closePanel();
  }

  // Focus trap inside panel
  if (e.key === 'Tab' && panelOpen) {
    const panel = rootEl?.querySelector<HTMLElement>('[data-panel]');
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}

function handleMouseMove(e: MouseEvent | TouchEvent) {
  mouseY = 'touches' in e ? e.touches[0].clientY : e.clientY;
  if (state.readingGuide || state.readingMask) {
    const guide = rootEl?.querySelector<HTMLElement>('.ux4g-a11y-reading-guide');
    if (guide) guide.style.top = `${mouseY - 2}px`;
    const overlays = rootEl?.querySelectorAll<HTMLElement>('.ux4g-a11y-reading-mask-overlay');
    if (overlays?.length === 2) {
      overlays[0].style.height = `${Math.max(0, mouseY - 60)}px`;
      overlays[1].style.top = `${mouseY + 60}px`;
    }
  }
}

// ─── Initialization ─────────────────────────────────────────────────────────

function init(userConfig?: A11yCoreConfig) {
  if (initialized) return;
  initialized = true;

  config = resolveConfig(userConfig);

  // Hydrate persisted state
  const persisted = loadState(config.storageKey);
  if (userConfig?.respectReducedMotion !== false && prefersReducedMotion() && !persisted.pauseAnimations) {
    persisted.pauseAnimations = true;
  }
  state = persisted;
  applyStyles(state);

  // Create root container
  rootEl = document.createElement('div');
  rootEl.id = 'ux4g-a11y-root';
  rootEl.setAttribute('data-ux4g-a11y', '');
  document.body.appendChild(rootEl);

  // Inject CSS if not already present
  injectStyles();

  // Initial render
  render();

  // Event listeners
  rootEl.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  window.addEventListener('touchmove', handleMouseMove, { passive: true });
}

function injectStyles() {
  if (document.getElementById('ux4g-a11y-styles')) return;
  // Check if CSS is already loaded via link tags
  const sheets = Array.from(document.styleSheets);
  const alreadyLoaded = sheets.some(s => {
    try { return s.cssRules?.[0]?.cssText?.includes('ux4g-a11y'); } catch { return false; }
  });
  if (alreadyLoaded) return;

  // If CSS not loaded, inject it from the same origin as the script
  const scriptEl = document.querySelector('script[src*="ux4g-a11y"]');
  if (scriptEl) {
    const src = (scriptEl as HTMLScriptElement).src;
    const base = src.substring(0, src.lastIndexOf('/') + 1);
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = base + 'a11y-global.css';
    link1.id = 'ux4g-a11y-styles';
    document.head.appendChild(link1);
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = base + 'a11y-panel.css';
    document.head.appendChild(link2);
  }
}

function destroy() {
  if (!initialized) return;
  rootEl?.removeEventListener('click', handleClick);
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('touchmove', handleMouseMove);
  rootEl?.remove();
  removeAllStyles();
  document.body.style.overflow = '';
  initialized = false;
}

// ─── Public API ─────────────────────────────────────────────────────────────

const UX4GA11y = {
  init,
  destroy,
  open: openPanel,
  close: closePanel,
  toggle: togglePanel,
  reset: () => { dispatch({ type: 'RESET_ALL' }); clearState(config.storageKey); },
  getState: () => ({ ...state }),
  getConfig: () => ({ ...config }),
  isOpen: () => panelOpen,
  version: '1.0.0',
};

// Expose globally
(window as any).UX4GA11y = UX4GA11y;

// Auto-init on DOMContentLoaded if not already initialized
function autoInit() {
  if (initialized) return;
  const userConfig = (window as any).UX4G_A11Y_CONFIG as A11yCoreConfig | undefined;
  init(userConfig);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoInit);
} else {
  autoInit();
}

export default UX4GA11y;

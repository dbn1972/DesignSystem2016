/**
 * @ux4g/a11y-core — Engine
 *
 * DOM style application. Filter-based features are combined into
 * a single computed filter string on <body>.
 */

import type { A11yState } from './schema';

const PREFIX = 'ux4g-a11y';

const CLASS_MAP: Record<string, string> = {
  dyslexiaFont:      `${PREFIX}-dyslexia-font`,
  leftAlign:         `${PREFIX}-left-align`,
  highlightLinks:    `${PREFIX}-highlight-links`,
  highlightHeadings: `${PREFIX}-highlight-headings`,
  largerCursor:      `${PREFIX}-larger-cursor`,
  pauseAnimations:   `${PREFIX}-pause-animations`,
  hideImages:        `${PREFIX}-hide-images`,
  strongFocus:       `${PREFIX}-strong-focus`,
  keyboardNav:       `${PREFIX}-keyboard-nav`,
  // NOTE: readingGuide and readingMask are NOT here — they are
  // rendered as React components, not CSS-class-driven features.
};

const FILTER_MARKER_CLASSES: Record<string, string> = {
  highContrast:  `${PREFIX}-high-contrast`,
  darkContrast:  `${PREFIX}-dark-contrast`,
  lightContrast: `${PREFIX}-light-contrast`,
  invertColors:  `${PREFIX}-invert-colors`,
  grayscale:     `${PREFIX}-grayscale`,
  desaturate:    `${PREFIX}-desaturate`,
  monochrome:    `${PREFIX}-monochrome`,
};

const FONT_SIZE_SCALE: Record<number, number> = {
  [-3]: 75, [-2]: 82, [-1]: 90, 0: 100,
  1: 112, 2: 125, 3: 137, 4: 150, 5: 175,
};

const LINE_HEIGHT_SCALE: Record<number, number> = {
  0: 0, 1: 1.6, 2: 1.8, 3: 2.0, 4: 2.4,
};

const LETTER_SPACING_SCALE: Record<number, number> = {
  0: 0, 1: 0.05, 2: 0.1, 3: 0.15, 4: 0.2,
};

const WORD_SPACING_SCALE: Record<number, number> = {
  0: 0, 1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4,
};

function buildFilterString(state: A11yState): string {
  const parts: string[] = [];
  if (state.highContrast)  parts.push('contrast(1.5)');
  if (state.darkContrast)  parts.push('invert(1)', 'hue-rotate(180deg)');
  if (state.lightContrast) parts.push('brightness(1.2)', 'contrast(0.85)');
  if (state.invertColors)  parts.push('invert(1)');
  if (state.grayscale)     parts.push('grayscale(1)');
  if (state.desaturate)    parts.push('saturate(0.4)');
  if (state.monochrome)    parts.push('grayscale(1)', 'sepia(0.3)', 'saturate(1.5)', 'hue-rotate(190deg)');
  return parts.join(' ');
}

export function applyStyles(state: A11yState): void {
  const root = document.documentElement;
  const body = document.body;

  // Font size
  const pct = FONT_SIZE_SCALE[state.fontSize] ?? 100;
  if (pct !== 100) {
    root.style.setProperty('--ux4g-a11y-font-scale', `${pct}%`);
    root.style.fontSize = `${pct}%`;
  } else {
    root.style.removeProperty('--ux4g-a11y-font-scale');
    root.style.removeProperty('font-size');
  }

  // Line height
  const lh = LINE_HEIGHT_SCALE[state.lineHeight] ?? 0;
  if (lh > 0) root.style.setProperty('--ux4g-a11y-line-height', `${lh}`);
  else root.style.removeProperty('--ux4g-a11y-line-height');

  // Letter spacing
  const ls = LETTER_SPACING_SCALE[state.letterSpacing] ?? 0;
  if (ls > 0) root.style.setProperty('--ux4g-a11y-letter-spacing', `${ls}em`);
  else root.style.removeProperty('--ux4g-a11y-letter-spacing');

  // Word spacing
  const ws = WORD_SPACING_SCALE[state.wordSpacing] ?? 0;
  if (ws > 0) root.style.setProperty('--ux4g-a11y-word-spacing', `${ws}em`);
  else root.style.removeProperty('--ux4g-a11y-word-spacing');

  // Boolean toggles → CSS classes
  for (const [key, className] of Object.entries(CLASS_MAP)) {
    root.classList.toggle(className, !!(state as unknown as Record<string, unknown>)[key]);
  }

  // Filter → single computed inline style on <body>
  const filterStr = buildFilterString(state);
  if (filterStr) body.style.setProperty('filter', filterStr, 'important');
  else body.style.removeProperty('filter');

  // Marker classes for CSS panel-exclusion
  for (const [key, className] of Object.entries(FILTER_MARKER_CLASSES)) {
    root.classList.toggle(className, !!(state as unknown as Record<string, unknown>)[key]);
  }
}

export function removeAllStyles(): void {
  const root = document.documentElement;
  const body = document.body;
  root.style.removeProperty('--ux4g-a11y-font-scale');
  root.style.removeProperty('--ux4g-a11y-line-height');
  root.style.removeProperty('--ux4g-a11y-letter-spacing');
  root.style.removeProperty('--ux4g-a11y-word-spacing');
  root.style.removeProperty('font-size');
  body.style.removeProperty('filter');
  for (const c of Object.values(CLASS_MAP)) root.classList.remove(c);
  for (const c of Object.values(FILTER_MARKER_CLASSES)) root.classList.remove(c);
}

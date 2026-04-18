/**
 * @ux4g/a11y-core — Public API
 *
 * Framework-independent accessibility toolkit engine.
 * Organized as: features → schema → persistence → tokens → engine.
 */

// ── Features ────────────────────────────────────────────────────────────────
export { FEATURE_REGISTRY, GROUP_ORDER } from './features';
export type { A11yFeatureKey, A11yFeatureGroup, A11yFeatureDescriptor } from './features';

// ── Schema (state, actions, reducer) ────────────────────────────────────────
export {
  DEFAULT_STATE, FONT_SIZE_MIN, FONT_SIZE_MAX, FONT_SIZE_DISPLAY,
  LINE_HEIGHT_MAX, LETTER_SPACING_MAX, WORD_SPACING_MAX,
  a11yReducer, prefersReducedMotion, countActiveSettings, countActiveInGroup,
  isMacPlatform, getShortcutLabel,
} from './schema';
export type {
  A11yState, A11yNumericState, A11yToggleState,
  A11yAction, A11yActions, A11yStoreValue,
} from './schema';

// ── Persistence ─────────────────────────────────────────────────────────────
export { loadState, saveState, clearState } from './persistence';

// ── Tokens / Config ─────────────────────────────────────────────────────────
export {
  DEFAULT_LABELS, DEFAULT_TOKENS, HINDI_LABELS, GROUP_LABEL_KEYS,
  resolveConfig,
} from './tokens';
export type {
  A11yLabels, A11yTokenOverrides,
  LauncherPosition, PanelPlacement,
  A11yCoreConfig, ResolvedA11yConfig,
} from './tokens';

// ── Engine (DOM style application) ──────────────────────────────────────────
export { applyStyles, removeAllStyles } from './engine';

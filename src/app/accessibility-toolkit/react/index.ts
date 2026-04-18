/**
 * @ux4g/a11y-react — Public API
 *
 * Layer 2: React integration (provider, hooks, app integration).
 * Re-exports core for convenience.
 */

// ── React integration ───────────────────────────────────────────────────────
export { A11yProvider } from './provider';
export type { A11yToolkitConfig } from './provider';
export { useA11y, useA11yConfig } from './hooks';
export { A11yToolkit } from './toolkit';

// ── Re-export core ──────────────────────────────────────────────────────────
export * from '../core';

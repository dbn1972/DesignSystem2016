/**
 * @ux4g/a11y-angular — Public API
 *
 * Everything an Angular host app needs to import.
 *
 * @example
 * ```ts
 * // app.config.ts
 * import { provideA11yToolkit } from '@ux4g/a11y-angular';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideA11yToolkit({ storageKey: 'my-a11y' })],
 * };
 *
 * // app.component.ts
 * import { A11yToolkitComponent } from '@ux4g/a11y-angular';
 *
 * @Component({
 *   imports: [A11yToolkitComponent],
 *   template: `<ux4g-a11y-toolkit /> <router-outlet />`,
 * })
 * export class AppComponent {}
 * ```
 */

// ── Configuration ───────────────────────────────────────────────────────────
export { provideA11yToolkit, A11Y_CONFIG, A11Y_RESOLVED_CONFIG } from './a11y-config';

// ── Service ─────────────────────────────────────────────────────────────────
export { A11yService } from './a11y.service';

// ── Components ──────────────────────────────────────────────────────────────
export { A11yToolkitComponent } from './a11y-toolkit.component';
export { A11yLauncherComponent } from './a11y-launcher.component';
export { A11yPanelComponent } from './a11y-panel.component';
export { A11yToggleComponent } from './a11y-toggle.component';
export { A11yStepperComponent } from './a11y-stepper.component';

// ── Re-export core types for convenience ────────────────────────────────────
export type {
  A11yState, A11yToggleState, A11yStoreValue, A11yAction,
  A11yCoreConfig, ResolvedA11yConfig, A11yLabels, A11yTokenOverrides,
  A11yFeatureKey, A11yFeatureGroup, LauncherPosition, PanelPlacement,
} from '../../core';

export {
  DEFAULT_STATE, DEFAULT_LABELS, DEFAULT_TOKENS, HINDI_LABELS,
  FEATURE_REGISTRY, GROUP_ORDER, FONT_SIZE_DISPLAY,
  countActiveSettings, countActiveInGroup,
} from '../../core';

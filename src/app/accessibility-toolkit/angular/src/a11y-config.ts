/**
 * @ux4g/a11y-angular — Configuration
 *
 * InjectionToken for toolkit configuration.
 * Host apps provide this at the root level.
 *
 * @example
 * ```ts
 * // app.config.ts
 * import { provideA11yToolkit, A11Y_CONFIG } from '@ux4g/a11y-angular';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideA11yToolkit({
 *       launcherPosition: 'bottom-right',
 *       storageKey: 'my-app-a11y',
 *     }),
 *   ],
 * };
 * ```
 */

import { InjectionToken, Provider } from '@angular/core';
import type { A11yCoreConfig, ResolvedA11yConfig } from '../../core';
import { resolveConfig } from '../../core';

/** Injection token for raw user-provided config. */
export const A11Y_CONFIG = new InjectionToken<A11yCoreConfig>('A11Y_CONFIG');

/** Injection token for the resolved (merged with defaults) config. */
export const A11Y_RESOLVED_CONFIG = new InjectionToken<ResolvedA11yConfig>('A11Y_RESOLVED_CONFIG');

/**
 * Root provider factory. Call this in your app's providers array.
 *
 * @example
 * ```ts
 * provideA11yToolkit({ launcherPosition: 'bottom-left', storageKey: 'gov-a11y' })
 * ```
 */
export function provideA11yToolkit(config?: A11yCoreConfig): Provider[] {
  const resolved = resolveConfig(config);
  return [
    { provide: A11Y_CONFIG, useValue: config ?? {} },
    { provide: A11Y_RESOLVED_CONFIG, useValue: resolved },
  ];
}

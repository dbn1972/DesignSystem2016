/**
 * @ux4g/a11y-angular — A11yService
 *
 * Angular service wrapping the core state machine, persistence,
 * and style engine. Uses Angular signals for reactive state.
 *
 * All business logic lives in @ux4g/a11y-core.
 * This service is a thin Angular binding.
 *
 * @example
 * ```ts
 * @Component({ ... })
 * export class MyComponent {
 *   private a11y = inject(A11yService);
 *   fontSize = this.a11y.state().fontSize;
 * }
 * ```
 */

import { Injectable, Inject, OnDestroy, signal, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  a11yReducer,
  prefersReducedMotion,
  countActiveSettings,
  countActiveInGroup,
  DEFAULT_STATE,
  loadState,
  saveState,
  clearState,
  applyStyles,
  removeAllStyles,
} from '../../core';
import type { A11yState, A11yAction, A11yToggleState, A11yFeatureGroup } from '../../core';
import { A11Y_RESOLVED_CONFIG, A11Y_CONFIG } from './a11y-config';
import type { ResolvedA11yConfig, A11yCoreConfig } from '../../core';

@Injectable({ providedIn: 'root' })
export class A11yService implements OnDestroy {
  private isBrowser: boolean;
  private storageKey: string;
  private keydownHandler: ((e: KeyboardEvent) => void) | null = null;

  /** Resolved configuration (merged with defaults). */
  readonly config: ResolvedA11yConfig;

  /** Reactive state signal. */
  readonly state = signal<A11yState>({ ...DEFAULT_STATE });

  /** Whether the panel is open. */
  readonly panelOpen = signal(false);

  /** Number of active (non-default) settings. */
  readonly activeCount = computed(() => countActiveSettings(this.state()));

  constructor(
    @Inject(A11Y_RESOLVED_CONFIG) config: ResolvedA11yConfig,
    @Inject(A11Y_CONFIG) private rawConfig: A11yCoreConfig,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.config = config;
    this.isBrowser = isPlatformBrowser(platformId);
    this.storageKey = config.storageKey;

    if (this.isBrowser) {
      this.hydrate();
      this.registerKeyboardShortcut();
    }
  }

  // ── State Mutations ─────────────────────────────────────────────────────

  dispatch(action: A11yAction): void {
    const next = a11yReducer(this.state(), action);
    this.state.set(next);
    this.persist(next);
    if (this.isBrowser) applyStyles(next);
    this.fireCallback(action, next);
  }

  increaseFontSize(): void { this.dispatch({ type: 'INCREASE_FONT_SIZE' }); }
  decreaseFontSize(): void { this.dispatch({ type: 'DECREASE_FONT_SIZE' }); }
  resetFontSize(): void { this.dispatch({ type: 'RESET_FONT_SIZE' }); }
  increaseLineHeight(): void { this.dispatch({ type: 'INCREASE_LINE_HEIGHT' }); }
  resetLineHeight(): void { this.dispatch({ type: 'RESET_LINE_HEIGHT' }); }
  increaseLetterSpacing(): void { this.dispatch({ type: 'INCREASE_LETTER_SPACING' }); }
  resetLetterSpacing(): void { this.dispatch({ type: 'RESET_LETTER_SPACING' }); }

  toggle(feature: keyof A11yToggleState): void {
    this.dispatch({ type: 'TOGGLE', feature });
  }

  resetAll(): void {
    this.dispatch({ type: 'RESET_ALL' });
    if (this.isBrowser) clearState(this.storageKey);
  }

  // ── Panel ───────────────────────────────────────────────────────────────

  openPanel(): void { this.panelOpen.set(true); }
  closePanel(): void { this.panelOpen.set(false); }
  togglePanel(): void { this.panelOpen.update((o) => !o); }

  // ── Helpers ─────────────────────────────────────────────────────────────

  /** Count active features in a specific group. */
  activeInGroup(group: A11yFeatureGroup): number {
    return countActiveInGroup(this.state(), group);
  }

  // ── Private ─────────────────────────────────────────────────────────────

  private hydrate(): void {
    const persisted = loadState(this.storageKey);
    if (this.rawConfig.respectReducedMotion !== false) {
      if (prefersReducedMotion() && !persisted.pauseAnimations) {
        persisted.pauseAnimations = true;
      }
    }
    this.state.set(persisted);
    applyStyles(persisted);
  }

  private persist(state: A11yState): void {
    if (this.isBrowser) saveState(state, this.storageKey);
  }

  private fireCallback(action: A11yAction, state: A11yState): void {
    if (!this.rawConfig.onSettingChange) return;
    if (action.type === 'TOGGLE') {
      this.rawConfig.onSettingChange(action.feature, state[action.feature], { ...state });
    } else if (action.type !== 'HYDRATE') {
      // For stepper/reset actions, find the changed key
      const key = action.type.toLowerCase().includes('font') ? 'fontSize'
        : action.type.toLowerCase().includes('line') ? 'lineHeight'
        : action.type.toLowerCase().includes('letter') ? 'letterSpacing'
        : null;
      if (key) {
        this.rawConfig.onSettingChange(key, (state as Record<string, unknown>)[key], { ...state });
      }
    }
  }

  private registerKeyboardShortcut(): void {
    this.keydownHandler = (e: KeyboardEvent) => {
      if (e.altKey && e.code === 'KeyA' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        e.preventDefault();
        this.togglePanel();
      }
    };
    window.addEventListener('keydown', this.keydownHandler);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      removeAllStyles();
      if (this.keydownHandler) {
        window.removeEventListener('keydown', this.keydownHandler);
      }
    }
  }
}

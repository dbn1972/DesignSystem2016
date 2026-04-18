/**
 * @ux4g/a11y-angular — Launcher Component
 *
 * Floating action button. Shows active-count badge.
 * Standalone component — just drop it in your app shell template.
 *
 * @example
 * ```html
 * <ux4g-a11y-launcher />
 * ```
 */

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';
import { A11yService } from './a11y.service';

@Component({
  selector: 'ux4g-a11y-launcher',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      (click)="a11y.togglePanel()"
      [attr.aria-label]="ariaLabel"
      [attr.aria-expanded]="a11y.panelOpen()"
      aria-haspopup="dialog"
      [title]="a11y.config.labels.launcherLabel"
      [class]="'ux4g-a11y-launcher ' + posClass"
      [style.z-index]="a11y.config.tokens.zIndex"
    >
      <!-- Accessibility icon (inline SVG) -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="4.5" r="2.5"/>
        <path d="M12 7v5m-4-3h8m-6 3l-2 6m4-6l2 6"/>
      </svg>
      <span *ngIf="a11y.activeCount() > 0"
            class="ux4g-a11y-launcher-badge" aria-hidden="true">
        {{ a11y.activeCount() }}
      </span>
    </button>
  `,
})
export class A11yLauncherComponent {
  readonly a11y = inject(A11yService);

  get posClass(): string {
    const map: Record<string, string> = {
      'bottom-right': 'ux4g-a11y-launcher--br',
      'bottom-left': 'ux4g-a11y-launcher--bl',
      'top-right': 'ux4g-a11y-launcher--tr',
      'top-left': 'ux4g-a11y-launcher--tl',
    };
    return map[this.a11y.config.launcherPosition] ?? map['bottom-right'];
  }

  get ariaLabel(): string {
    const count = this.a11y.activeCount();
    const base = this.a11y.config.labels.launcherLabel;
    return count > 0 ? `${base} (${count} active)` : base;
  }
}

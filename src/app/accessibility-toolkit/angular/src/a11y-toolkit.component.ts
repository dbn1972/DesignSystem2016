/**
 * @ux4g/a11y-angular — Toolkit Component
 *
 * Drop-in composition root. Place once in your app shell.
 * Renders the launcher, panel, skip link, reading guide, and reading mask.
 *
 * @example
 * ```html
 * <!-- app.component.html -->
 * <ux4g-a11y-toolkit />
 * <router-outlet />
 * ```
 */

import { Component, inject, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { A11yService } from './a11y.service';
import { A11yLauncherComponent } from './a11y-launcher.component';
import { A11yPanelComponent } from './a11y-panel.component';

@Component({
  selector: 'ux4g-a11y-toolkit',
  standalone: true,
  imports: [NgIf, A11yLauncherComponent, A11yPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Skip-to-content link -->
    <a [href]="skipSelector" class="ux4g-a11y-skip-link">
      {{ a11y.config.labels.skipToContent }}
    </a>

    <ux4g-a11y-launcher />
    <ux4g-a11y-panel />

    <!-- Reading guide -->
    <div *ngIf="a11y.state().readingGuide"
         class="ux4g-a11y-reading-guide"
         [style.top.px]="mouseY - 2"
         aria-hidden="true">
    </div>

    <!-- Reading mask -->
    <ng-container *ngIf="a11y.state().readingMask">
      <div class="ux4g-a11y-reading-mask" aria-hidden="true">
        <div class="ux4g-a11y-reading-mask-overlay"
             [style.top.px]="0"
             [style.height.px]="maskTop">
        </div>
        <div class="ux4g-a11y-reading-mask-overlay"
             [style.top.px]="maskBottom"
             style="bottom: 0">
        </div>
      </div>
    </ng-container>
  `,
})
export class A11yToolkitComponent {
  readonly a11y = inject(A11yService);
  readonly skipSelector: string;

  mouseY = 0;
  private isBrowser: boolean;
  private moveHandler: ((e: MouseEvent | TouchEvent) => void) | null = null;

  get maskTop(): number { return Math.max(0, this.mouseY - 60); }
  get maskBottom(): number { return this.mouseY + 60; }

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.skipSelector = this.a11y.config.skipToContentSelector;

    if (this.isBrowser) {
      this.moveHandler = (e: MouseEvent | TouchEvent) => {
        this.mouseY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      };
      window.addEventListener('mousemove', this.moveHandler, { passive: true });
      window.addEventListener('touchmove', this.moveHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.moveHandler) {
      window.removeEventListener('mousemove', this.moveHandler);
      window.removeEventListener('touchmove', this.moveHandler);
    }
  }
}

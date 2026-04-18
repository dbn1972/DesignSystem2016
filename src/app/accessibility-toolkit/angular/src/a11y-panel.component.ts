/**
 * @ux4g/a11y-angular — Panel Component
 *
 * Settings drawer with focus trap, close animation,
 * body scroll lock, and per-toggle announcements.
 *
 * @example
 * ```html
 * <ux4g-a11y-panel />
 * ```
 */

import {
  Component, inject, signal, effect, ElementRef,
  ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy, PLATFORM_ID, Inject,
} from '@angular/core';
import { isPlatformBrowser, NgIf, NgFor } from '@angular/common';
import { A11yService } from './a11y.service';
import { A11yToggleComponent } from './a11y-toggle.component';
import { A11yStepperComponent } from './a11y-stepper.component';
import {
  GROUP_ORDER, GROUP_LABEL_KEYS, FONT_SIZE_DISPLAY, countActiveInGroup,
} from '../../core';
import type { A11yFeatureGroup } from '../../core';

const CLOSE_DURATION = 200;

@Component({
  selector: 'ux4g-a11y-panel',
  standalone: true,
  imports: [NgIf, NgFor, A11yToggleComponent, A11yStepperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Screen-reader announcement -->
    <div aria-live="polite" aria-atomic="true" class="ux4g-a11y-sr-only">
      {{ announcement() }}
    </div>

    <ng-container *ngIf="visible()">
      <!-- Backdrop -->
      <div
        class="ux4g-a11y-backdrop"
        [class.ux4g-a11y-backdrop--closing]="closing()"
        (click)="close($event)"
        aria-hidden="true"
      ></div>

      <!-- Panel -->
      <div
        #panelEl
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="a11y.config.labels.panelTitle"
        [class]="panelClass()"
        (keydown)="onKeyDown($event)"
      >
        <!-- Header -->
        <div class="ux4g-a11y-panel-header">
          <div class="ux4g-a11y-panel-title-row">
            <h2 class="ux4g-a11y-panel-title">{{ a11y.config.labels.panelTitle }}</h2>
            <span *ngIf="a11y.activeCount() > 0"
                  class="ux4g-a11y-active-badge"
                  [attr.aria-label]="a11y.activeCount() + ' active settings'">
              {{ a11y.activeCount() }}
            </span>
          </div>
          <div class="ux4g-a11y-panel-header-actions">
            <button type="button" (click)="resetAll()"
                    [attr.aria-label]="a11y.config.labels.resetAll"
                    [title]="a11y.config.labels.resetAll"
                    class="ux4g-a11y-panel-btn ux4g-a11y-panel-btn--reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
            </button>
            <button #closeBtn type="button" (click)="a11y.closePanel()"
                    [attr.aria-label]="a11y.config.labels.closePanel"
                    class="ux4g-a11y-panel-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="ux4g-a11y-panel-body">
          <section *ngFor="let group of groups"
                   class="ux4g-a11y-group"
                   [attr.aria-labelledby]="'a11y-group-' + group">
            <h3 [id]="'a11y-group-' + group" class="ux4g-a11y-group-heading">
              <span class="ux4g-a11y-group-icon" aria-hidden="true">{{ groupEmoji(group) }}</span>
              {{ groupLabel(group) }}
              <span *ngIf="a11y.activeInGroup(group) > 0"
                    class="ux4g-a11y-group-dot" aria-hidden="true"></span>
            </h3>
            <div class="ux4g-a11y-group-controls">
              <!-- Text group -->
              <ng-container *ngIf="group === 'text'">
                <ux4g-a11y-stepper *ngIf="isEnabled('fontSize')"
                  [label]="labels.fontSize" [value]="state().fontSize"
                  [displayValue]="fontSizeDisplay()" [showDecrease]="true" [showReset]="true"
                  [increaseLabel]="labels.fontSizeIncrease" [decreaseLabel]="labels.fontSizeDecrease"
                  [resetLabel]="labels.fontSizeReset"
                  (increased)="a11y.increaseFontSize(); announce(labels.fontSize + ' increased')"
                  (decreased)="a11y.decreaseFontSize(); announce(labels.fontSize + ' decreased')"
                  (resetted)="a11y.resetFontSize(); announce(labels.fontSize + ' reset')"
                />
                <ux4g-a11y-stepper *ngIf="isEnabled('lineHeight')"
                  [label]="labels.lineHeight" [value]="state().lineHeight"
                  [displayValue]="state().lineHeight === 0 ? 'Default' : 'Step ' + state().lineHeight"
                  [showReset]="true"
                  [increaseLabel]="'Increase ' + labels.lineHeight.toLowerCase()"
                  [resetLabel]="'Reset ' + labels.lineHeight.toLowerCase()"
                  (increased)="a11y.increaseLineHeight(); announce(labels.lineHeight + ' increased')"
                  (resetted)="a11y.resetLineHeight(); announce(labels.lineHeight + ' reset')"
                />
                <ux4g-a11y-stepper *ngIf="isEnabled('letterSpacing')"
                  [label]="labels.letterSpacing" [value]="state().letterSpacing"
                  [displayValue]="state().letterSpacing === 0 ? 'Default' : 'Step ' + state().letterSpacing"
                  [showReset]="true"
                  [increaseLabel]="'Increase ' + labels.letterSpacing.toLowerCase()"
                  [resetLabel]="'Reset ' + labels.letterSpacing.toLowerCase()"
                  (increased)="a11y.increaseLetterSpacing(); announce(labels.letterSpacing + ' increased')"
                  (resetted)="a11y.resetLetterSpacing(); announce(labels.letterSpacing + ' reset')"
                />
                <ux4g-a11y-toggle *ngIf="isEnabled('dyslexiaFont')"
                  [label]="labels.dyslexiaFont" [checked]="state().dyslexiaFont"
                  (changed)="toggleFeature('dyslexiaFont', labels.dyslexiaFont)"
                />
              </ng-container>

              <!-- Contrast group -->
              <ng-container *ngIf="group === 'contrast'">
                <ux4g-a11y-toggle *ngIf="isEnabled('highContrast')" [label]="labels.highContrast" [checked]="state().highContrast" (changed)="toggleFeature('highContrast', labels.highContrast)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('darkContrast')" [label]="labels.darkContrast" [checked]="state().darkContrast" (changed)="toggleFeature('darkContrast', labels.darkContrast)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('lightContrast')" [label]="labels.lightContrast" [checked]="state().lightContrast" (changed)="toggleFeature('lightContrast', labels.lightContrast)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('invertColors')" [label]="labels.invertColors" [checked]="state().invertColors" (changed)="toggleFeature('invertColors', labels.invertColors)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('grayscale')" [label]="labels.grayscale" [checked]="state().grayscale" (changed)="toggleFeature('grayscale', labels.grayscale)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('desaturate')" [label]="labels.desaturate" [checked]="state().desaturate" (changed)="toggleFeature('desaturate', labels.desaturate)" />
              </ng-container>

              <!-- Visual group -->
              <ng-container *ngIf="group === 'visual'">
                <ux4g-a11y-toggle *ngIf="isEnabled('highlightLinks')" [label]="labels.highlightLinks" [checked]="state().highlightLinks" (changed)="toggleFeature('highlightLinks', labels.highlightLinks)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('highlightHeadings')" [label]="labels.highlightHeadings" [checked]="state().highlightHeadings" (changed)="toggleFeature('highlightHeadings', labels.highlightHeadings)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('largerCursor')" [label]="labels.largerCursor" [checked]="state().largerCursor" (changed)="toggleFeature('largerCursor', labels.largerCursor)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('hideImages')" [label]="labels.hideImages" [checked]="state().hideImages" (changed)="toggleFeature('hideImages', labels.hideImages)" />
              </ng-container>

              <!-- Navigation group -->
              <ng-container *ngIf="group === 'navigation'">
                <ux4g-a11y-toggle *ngIf="isEnabled('strongFocus')" [label]="labels.strongFocus" [checked]="state().strongFocus" (changed)="toggleFeature('strongFocus', labels.strongFocus)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('keyboardNav')" [label]="labels.keyboardNav" [checked]="state().keyboardNav" (changed)="toggleFeature('keyboardNav', labels.keyboardNav)" />
              </ng-container>

              <!-- Reading group -->
              <ng-container *ngIf="group === 'reading'">
                <ux4g-a11y-toggle *ngIf="isEnabled('readingGuide')" [label]="labels.readingGuide" [checked]="state().readingGuide" (changed)="toggleFeature('readingGuide', labels.readingGuide)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('readingMask')" [label]="labels.readingMask" [checked]="state().readingMask" (changed)="toggleFeature('readingMask', labels.readingMask)" />
                <ux4g-a11y-toggle *ngIf="isEnabled('pauseAnimations')" [label]="labels.pauseAnimations" [checked]="state().pauseAnimations" (changed)="toggleFeature('pauseAnimations', labels.pauseAnimations)" />
              </ng-container>
            </div>
          </section>
        </div>
      </div>
    </ng-container>
  `,
})
export class A11yPanelComponent implements OnDestroy {
  readonly a11y = inject(A11yService);
  @ViewChild('panelEl') panelEl!: ElementRef<HTMLDivElement>;
  @ViewChild('closeBtn') closeBtn!: ElementRef<HTMLButtonElement>;

  readonly groups = GROUP_ORDER;
  readonly announcement = signal('');
  readonly visible = signal(false);
  readonly closing = signal(false);
  private closeTimer: ReturnType<typeof setTimeout> | null = null;
  private triggerEl: HTMLElement | null = null;
  private isBrowser: boolean;

  get labels() { return this.a11y.config.labels; }
  get state() { return this.a11y.state; }

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // React to panelOpen changes
    effect(() => {
      const open = this.a11y.panelOpen();
      if (open) {
        this.visible.set(true);
        this.closing.set(false);
        if (this.isBrowser) {
          this.triggerEl = document.activeElement as HTMLElement;
          requestAnimationFrame(() => this.closeBtn?.nativeElement?.focus());
          this.announcement.set(`${this.labels.panelTitle} opened. ${this.a11y.activeCount()} settings active.`);
          document.body.style.overflow = 'hidden';
        }
      } else if (this.visible()) {
        this.closing.set(true);
        this.closeTimer = setTimeout(() => {
          this.visible.set(false);
          this.closing.set(false);
          if (this.isBrowser) {
            document.body.style.overflow = '';
            this.triggerEl?.focus();
            this.triggerEl = null;
          }
        }, CLOSE_DURATION);
      }
    });
  }

  isEnabled(key: string): boolean {
    return this.a11y.config.enabledFeatures.includes(key as any);
  }

  fontSizeDisplay(): string {
    return FONT_SIZE_DISPLAY[this.state().fontSize] ?? '100%';
  }

  groupLabel(group: A11yFeatureGroup): string {
    return this.labels[GROUP_LABEL_KEYS[group]];
  }

  groupEmoji(group: A11yFeatureGroup): string {
    const map: Record<A11yFeatureGroup, string> = {
      text: 'Aa', contrast: '◐', visual: '👁', navigation: '⌨', reading: '📖',
    };
    return map[group] ?? '';
  }

  toggleFeature(feature: string, label: string): void {
    const current = (this.state() as Record<string, unknown>)[feature];
    this.a11y.toggle(feature as any);
    this.announce(`${label} ${current ? 'disabled' : 'enabled'}`);
  }

  announce(msg: string): void {
    this.announcement.set(msg);
  }

  resetAll(): void {
    this.a11y.resetAll();
    this.announce('All settings reset to defaults.');
  }

  close(event: MouseEvent): void {
    event.stopPropagation();
    this.a11y.closePanel();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.a11y.closePanel();
    }
    // Focus trap
    if (event.key === 'Tab' && this.panelEl?.nativeElement) {
      const els = this.panelEl.nativeElement.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  panelClass(): string {
    const placement = this.a11y.config.panelPlacement;
    const isDrawer = placement !== 'modal';
    const isLeft = placement === 'drawer-left';
    const base = 'ux4g-a11y-panel-root ux4g-a11y-panel';
    const pos = isDrawer ? (isLeft ? 'ux4g-a11y-panel--left' : 'ux4g-a11y-panel--right') : 'ux4g-a11y-panel--modal';
    const cls = this.closing() ? 'ux4g-a11y-panel--closing' : '';
    return `${base} ${pos} ${cls}`;
  }

  ngOnDestroy(): void {
    if (this.closeTimer) clearTimeout(this.closeTimer);
    if (this.isBrowser) document.body.style.overflow = '';
  }
}

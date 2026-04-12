import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Back to Top Component
 *
 * Scroll to top button with smooth animation and auto-show/hide based on scroll position.
 * Designed for government and enterprise applications with full accessibility support.
 *
 * @example
 * <ux4g-back-to-top
 *   [threshold]="400"
 *   position="right"
 *   [smooth]="true"
 *   [showLabel]="true">
 * </ux4g-back-to-top>
 *
 * @example Government Portal Use Case
 * <ux4g-back-to-top
 *   [threshold]="300"
 *   position="right"
 *   [smooth]="true"
 *   [showLabel]="true"
 *   label="Return to Top"
 *   icon="↑">
 * </ux4g-back-to-top>
 */
@Component({
  selector: 'ux4g-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isVisible) {
      <button
        class="ux4g-back-to-top"
        [class.ux4g-back-to-top--left]="position === 'left'"
        [class.ux4g-back-to-top--right]="position === 'right'"
        (click)="scrollToTop()"
        [attr.aria-label]="label"
        type="button">
        <span class="ux4g-back-to-top__icon" aria-hidden="true">{{ icon }}</span>
        @if (showLabel) {
          <span class="ux4g-back-to-top__label">{{ label }}</span>
        }
      </button>
    }
  `,
  styleUrls: ['./back-to-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BackToTopComponent {
  /** Scroll threshold in pixels before showing button */
  @Input() threshold: number = 300;

  /** Button position */
  @Input() position: 'right' | 'left' = 'right';

  /** Enable smooth scroll animation */
  @Input() smooth: boolean = true;

  /** Show text label with icon */
  @Input() showLabel: boolean = false;

  /** Button label text */
  @Input() label: string = 'Back to Top';

  /** Icon character or symbol */
  @Input() icon: string = '↑';

  /** Visibility state */
  isVisible: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  /**
   * Listen to window scroll events
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const shouldBeVisible = scrollPosition > this.threshold;

    if (this.isVisible !== shouldBeVisible) {
      this.isVisible = shouldBeVisible;
      this.cdr.markForCheck();
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(): void {
    if (this.smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   * Handle keyboard events
   */
  @HostListener('keydown.enter', ['$event'])
  @HostListener('keydown.space', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
    this.scrollToTop();
  }
}

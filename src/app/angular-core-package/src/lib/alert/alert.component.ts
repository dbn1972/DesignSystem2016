import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusVariant } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Alert Component
 *
 * Displays important messages with different status variants.
 * Supports dismissible alerts with close button.
 *
 * @example
 * <ux4g-alert variant="success">
 *   Operation completed successfully!
 * </ux4g-alert>
 *
 * @example
 * <ux4g-alert variant="error" [dismissible]="true" (dismissed)="onDismiss()">
 *   An error occurred. Please try again.
 * </ux4g-alert>
 */
@Component({
  selector: 'ux4g-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      role="alert"
      [attr.aria-live]="variant === 'error' ? 'assertive' : 'polite'"
      [attr.data-testid]="testId"
      [class]="alertClasses"
    >
      @if (showIcon) {
        <span class="ux4g-alert__icon" aria-hidden="true">
          <ng-content select="[slot='icon']"></ng-content>
          @if (!hasCustomIcon) {
            <span [innerHTML]="defaultIcon"></span>
          }
        </span>
      }

      <div class="ux4g-alert__content">
        @if (title) {
          <div class="ux4g-alert__title">{{ title }}</div>
        }
        <div class="ux4g-alert__message">
          <ng-content></ng-content>
        </div>
      </div>

      @if (dismissible) {
        <button
          type="button"
          class="ux4g-alert__close"
          aria-label="Dismiss alert"
          (click)="handleDismiss()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      }
    </div>
  `,
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {
  /**
   * Alert variant
   * @default 'info'
   */
  @Input() variant: StatusVariant = 'info';

  /**
   * Alert title
   */
  @Input() title?: string;

  /**
   * Whether to show an icon
   * @default true
   */
  @Input() showIcon: boolean = true;

  /**
   * Whether the alert is dismissible
   * @default false
   */
  @Input() dismissible: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Dismiss event emitter
   */
  @Output() dismissed = new EventEmitter<void>();

  /**
   * Whether a custom icon is provided via content projection
   */
  hasCustomIcon = false;

  /**
   * Computed alert classes
   */
  get alertClasses(): string {
    return classNames(
      'ux4g-alert',
      `ux4g-alert--${this.variant}`,
      this.dismissible && 'ux4g-alert--dismissible',
      this.className
    );
  }

  /**
   * Get default icon based on variant
   */
  get defaultIcon(): string {
    const icons = {
      info: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/></svg>',
      success: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm4.293 7.707l-5 5a.999.999 0 01-1.414 0l-2.5-2.5a.999.999 0 111.414-1.414L9 10.586l4.293-4.293a.999.999 0 111.414 1.414z"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0L0 18h20L10 0zm1 15H9v-2h2v2zm0-3H9V7h2v5z"/></svg>',
      error: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59z"/></svg>',
    };
    return icons[this.variant];
  }

  /**
   * Handle dismiss click
   */
  handleDismiss(): void {
    this.dismissed.emit();
  }
}

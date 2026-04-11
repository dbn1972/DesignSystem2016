import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize, ComponentVariant } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-button variant="primary" size="md">
 *   Click me
 * </ux4g-button>
 *
 * @example
 * <ux4g-button variant="secondary" [loading]="isLoading" (clicked)="handleClick()">
 *   Submit
 * </ux4g-button>
 */
@Component({
  selector: 'ux4g-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [attr.aria-label]="ariaLabel"
      [attr.aria-describedby]="ariaDescribedBy"
      [attr.aria-busy]="loading"
      [attr.data-testid]="testId"
      [class]="buttonClasses"
      (click)="handleClick($event)"
    >
      @if (loading) {
        <span class="ux4g-button__spinner" aria-hidden="true"></span>
      }

      @if (iconBefore && !loading) {
        <span class="ux4g-button__icon ux4g-button__icon--before" aria-hidden="true">
          <ng-content select="[slot='icon-before']"></ng-content>
        </span>
      }

      <span class="ux4g-button__label">
        <ng-content></ng-content>
      </span>

      @if (iconAfter && !loading) {
        <span class="ux4g-button__icon ux4g-button__icon--after" aria-hidden="true">
          <ng-content select="[slot='icon-after']"></ng-content>
        </span>
      }
    </button>
  `,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  /**
   * Button variant
   * @default 'primary'
   */
  @Input() variant: ComponentVariant = 'primary';

  /**
   * Button size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Button type attribute
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Whether the button is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  @Input() loading: boolean = false;

  /**
   * Whether the button has an icon before the label
   * @default false
   */
  @Input() iconBefore: boolean = false;

  /**
   * Whether the button has an icon after the label
   * @default false
   */
  @Input() iconAfter: boolean = false;

  /**
   * Whether the button should take full width
   * @default false
   */
  @Input() fullWidth: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * ARIA described by reference
   */
  @Input() ariaDescribedBy?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Click event emitter
   */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /**
   * Focus event emitter
   */
  @Output() focused = new EventEmitter<FocusEvent>();

  /**
   * Blur event emitter
   */
  @Output() blurred = new EventEmitter<FocusEvent>();

  /**
   * Computed button classes
   */
  get buttonClasses(): string {
    return classNames(
      'ux4g-button',
      `ux4g-button--${this.variant}`,
      `ux4g-button--${this.size}`,
      this.loading && 'ux4g-button--loading',
      this.fullWidth && 'ux4g-button--full-width',
      this.className
    );
  }

  /**
   * Handle button click
   */
  handleClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  /**
   * Handle button focus
   */
  @HostListener('focus', ['$event'])
  handleFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }

  /**
   * Handle button blur
   */
  @HostListener('blur', ['$event'])
  handleBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }
}

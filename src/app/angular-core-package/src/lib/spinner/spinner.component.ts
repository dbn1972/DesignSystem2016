import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

export type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

/**
 * UX4G Spinner Component
 *
 * A loading spinner component to indicate loading states.
 * Supports different variants, sizes, and optional label.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-spinner></ux4g-spinner>
 *
 * @example
 * <ux4g-spinner
 *   variant="primary"
 *   size="lg"
 *   label="Loading content..."
 * ></ux4g-spinner>
 */
@Component({
  selector: 'ux4g-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="wrapperClasses"
      [attr.data-testid]="testId"
    >
      <div
        role="status"
        aria-live="polite"
        [attr.aria-label]="ariaLabel || label || 'Loading'"
        [class]="spinnerClasses"
      >
        <svg
          [class]="svgClasses"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="ux4g-spinner__track"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="ux4g-spinner__path"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="ux4g-sr-only">{{ label || 'Loading' }}</span>
      </div>

      @if (label && showLabel) {
        <span [class]="labelClasses">{{ label }}</span>
      }
    </div>
  `,
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent {
  /**
   * Spinner variant
   * @default 'primary'
   */
  @Input() variant: SpinnerVariant = 'primary';

  /**
   * Spinner size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Loading label for screen readers and optional display
   */
  @Input() label?: string;

  /**
   * Whether to show the label visually
   * @default false
   */
  @Input() showLabel: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-spinner-wrapper',
      this.className
    );
  }

  /**
   * Computed spinner classes
   */
  get spinnerClasses(): string {
    return classNames(
      'ux4g-spinner',
      'ux4g-spinner--' + this.variant,
      'ux4g-spinner--' + this.size
    );
  }

  /**
   * Computed SVG classes
   */
  get svgClasses(): string {
    return classNames(
      'ux4g-spinner__svg'
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames(
      'ux4g-spinner__label'
    );
  }
}

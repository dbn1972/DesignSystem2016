import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusVariant, ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Progress Component
 *
 * A progress bar component for indicating progress of an operation.
 * Supports different variants, sizes, and indeterminate state.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-progress [value]="75"></ux4g-progress>
 *
 * @example
 * <ux4g-progress
 *   [value]="uploadProgress"
 *   [max]="100"
 *   variant="success"
 *   [showValue]="true"
 * ></ux4g-progress>
 */
@Component({
  selector: 'ux4g-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="wrapperClasses"
      [attr.data-testid]="testId"
    >
      @if (label) {
        <div class="ux4g-progress__label-container">
          <span class="ux4g-progress__label">{{ label }}</span>
          @if (showValue && !indeterminate) {
            <span class="ux4g-progress__value">{{ percentage }}%</span>
          }
        </div>
      }

      <div
        role="progressbar"
        [attr.aria-label]="ariaLabel || label"
        [attr.aria-valuenow]="indeterminate ? null : value"
        [attr.aria-valuemin]="min"
        [attr.aria-valuemax]="max"
        [attr.aria-valuetext]="indeterminate ? 'Loading' : percentage + '%'"
        [class]="trackClasses"
      >
        <div [class]="barClasses" [style.width]="indeterminate ? null : percentage + '%'">
          @if (!indeterminate && showValue && !label) {
            <span class="ux4g-progress__value-inline">{{ percentage }}%</span>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProgressComponent {
  /**
   * Current progress value
   * @default 0
   */
  @Input() value: number = 0;

  /**
   * Minimum value
   * @default 0
   */
  @Input() min: number = 0;

  /**
   * Maximum value
   * @default 100
   */
  @Input() max: number = 100;

  /**
   * Progress variant
   * @default 'info'
   */
  @Input() variant: StatusVariant = 'info';

  /**
   * Progress size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Progress label
   */
  @Input() label?: string;

  /**
   * Whether to show percentage value
   * @default false
   */
  @Input() showValue: boolean = false;

  /**
   * Whether progress is indeterminate (loading)
   * @default false
   */
  @Input() indeterminate: boolean = false;

  /**
   * Whether to show striped pattern
   * @default false
   */
  @Input() striped: boolean = false;

  /**
   * Whether to animate the striped pattern
   * @default false
   */
  @Input() animated: boolean = false;

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
   * Get percentage value
   */
  get percentage(): number {
    if (this.indeterminate) {
      return 0;
    }
    const range = this.max - this.min;
    const progress = ((this.value - this.min) / range) * 100;
    return Math.min(Math.max(progress, 0), 100);
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-progress-wrapper',
      this.className
    );
  }

  /**
   * Computed track classes
   */
  get trackClasses(): string {
    return classNames(
      'ux4g-progress',
      'ux4g-progress--' + this.size
    );
  }

  /**
   * Computed bar classes
   */
  get barClasses(): string {
    return classNames(
      'ux4g-progress__bar',
      'ux4g-progress__bar--' + this.variant,
      this.indeterminate && 'ux4g-progress__bar--indeterminate',
      this.striped && 'ux4g-progress__bar--striped',
      this.animated && 'ux4g-progress__bar--animated'
    );
  }
}

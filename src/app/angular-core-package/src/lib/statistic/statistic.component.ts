import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type StatisticTrend = 'up' | 'down' | 'neutral';

/**
 * UX4G Statistic Component
 *
 * Displays numerical metrics with optional label, prefix, suffix, and trend indicator.
 * Useful for dashboards, analytics, and KPI displays.
 *
 * @example
 * <ux4g-statistic
 *   label="Total Users"
 *   value="12,345"
 * ></ux4g-statistic>
 *
 * @example
 * <ux4g-statistic
 *   label="Revenue"
 *   value="54,320"
 *   prefix="$"
 *   trend="up"
 *   trendValue="+12%"
 * ></ux4g-statistic>
 */
@Component({
  selector: 'ux4g-statistic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="statisticClasses" [attr.data-testid]="testId">
      @if (label) {
        <div [class]="labelClasses">{{ label }}</div>
      }

      <div [class]="valueWrapperClasses">
        @if (prefix) {
          <span [class]="prefixClasses">{{ prefix }}</span>
        }

        <span [class]="valueClasses">{{ value }}</span>

        @if (suffix) {
          <span [class]="suffixClasses">{{ suffix }}</span>
        }
      </div>

      @if (trend && trendValue) {
        <div [class]="trendClasses">
          <span [class]="trendIconClasses" aria-hidden="true">
            {{ trendIcon }}
          </span>
          <span>{{ trendValue }}</span>
        </div>
      }
    </div>
  `,
  styleUrls: ['./statistic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StatisticComponent {
  /**
   * Statistic label
   */
  @Input() label?: string;

  /**
   * Statistic value
   */
  @Input() value!: string | number;

  /**
   * Prefix (e.g., "$", "€")
   */
  @Input() prefix?: string;

  /**
   * Suffix (e.g., "%", "K", "M")
   */
  @Input() suffix?: string;

  /**
   * Trend direction
   */
  @Input() trend?: StatisticTrend;

  /**
   * Trend value/text
   */
  @Input() trendValue?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Get trend icon
   */
  get trendIcon(): string {
    switch (this.trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      case 'neutral':
        return '→';
      default:
        return '';
    }
  }

  /**
   * Computed statistic classes
   */
  get statisticClasses(): string {
    return classNames('ux4g-statistic', this.className);
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames('ux4g-statistic__label');
  }

  /**
   * Computed value wrapper classes
   */
  get valueWrapperClasses(): string {
    return classNames('ux4g-statistic__value-wrapper');
  }

  /**
   * Computed prefix classes
   */
  get prefixClasses(): string {
    return classNames('ux4g-statistic__prefix');
  }

  /**
   * Computed value classes
   */
  get valueClasses(): string {
    return classNames('ux4g-statistic__value');
  }

  /**
   * Computed suffix classes
   */
  get suffixClasses(): string {
    return classNames('ux4g-statistic__suffix');
  }

  /**
   * Computed trend classes
   */
  get trendClasses(): string {
    return classNames(
      'ux4g-statistic__trend',
      this.trend && 'ux4g-statistic__trend--' + this.trend
    );
  }

  /**
   * Computed trend icon classes
   */
  get trendIconClasses(): string {
    return classNames('ux4g-statistic__trend-icon');
  }
}

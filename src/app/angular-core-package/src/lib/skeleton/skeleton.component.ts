import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

/**
 * UX4G Skeleton Component
 *
 * Loading placeholder with shimmer animation.
 * Displays while content is loading to improve perceived performance.
 *
 * @example
 * <ux4g-skeleton variant="text"></ux4g-skeleton>
 *
 * @example
 * <ux4g-skeleton
 *   variant="rectangular"
 *   width="100%"
 *   height="200px"
 * ></ux4g-skeleton>
 */
@Component({
  selector: 'ux4g-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="skeletonClasses"
      [style.width]="width"
      [style.height]="height"
      [attr.aria-label]="ariaLabel || 'Loading'"
      [attr.aria-busy]="true"
      [attr.data-testid]="testId"
    ></div>
  `,
  styleUrls: ['./skeleton.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SkeletonComponent {
  /**
   * Skeleton variant
   * @default 'text'
   */
  @Input() variant: SkeletonVariant = 'text';

  /**
   * Width (CSS value)
   */
  @Input() width?: string;

  /**
   * Height (CSS value)
   */
  @Input() height?: string;

  /**
   * Whether to animate
   * @default true
   */
  @Input() animated: boolean = true;

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
   * Computed skeleton classes
   */
  get skeletonClasses(): string {
    return classNames(
      'ux4g-skeleton',
      'ux4g-skeleton--' + this.variant,
      this.animated && 'ux4g-skeleton--animated',
      this.className
    );
  }
}

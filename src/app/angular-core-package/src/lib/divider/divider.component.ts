import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

/**
 * UX4G Divider Component
 *
 * Visual separator for dividing content sections.
 * Supports horizontal/vertical orientation, optional label, and different line styles.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-divider></ux4g-divider>
 *
 * @example
 * <ux4g-divider
 *   orientation="horizontal"
 *   label="Or continue with"
 *   labelPosition="center"
 * ></ux4g-divider>
 *
 * @example
 * <ux4g-divider
 *   orientation="vertical"
 *   variant="dashed"
 * ></ux4g-divider>
 */
@Component({
  selector: 'ux4g-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="dividerClasses"
      [attr.role]="decorative ? 'presentation' : 'separator'"
      [attr.aria-orientation]="!decorative ? orientation : null"
      [attr.aria-label]="!decorative && ariaLabel ? ariaLabel : null"
      [attr.data-testid]="testId"
    >
      @if (label && orientation === 'horizontal') {
        <div [class]="lineClasses"></div>
        <span [class]="labelClasses">{{ label }}</span>
        <div [class]="lineClasses"></div>
      } @else {
        <div [class]="lineClasses"></div>
      }
    </div>
  `,
  styleUrls: ['./divider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DividerComponent {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  @Input() orientation: DividerOrientation = 'horizontal';

  /**
   * Divider variant (line style)
   * @default 'solid'
   */
  @Input() variant: DividerVariant = 'solid';

  /**
   * Optional label text
   */
  @Input() label?: string;

  /**
   * Label position (for horizontal dividers)
   * @default 'center'
   */
  @Input() labelPosition: 'left' | 'center' | 'right' = 'center';

  /**
   * Spacing around divider
   * @default 'md'
   */
  @Input() spacing: 'none' | 'sm' | 'md' | 'lg' = 'md';

  /**
   * Whether divider is purely decorative
   * @default false
   */
  @Input() decorative: boolean = false;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed divider classes
   */
  get dividerClasses(): string {
    return classNames(
      'ux4g-divider',
      'ux4g-divider--' + this.orientation,
      'ux4g-divider--spacing-' + this.spacing,
      this.label && 'ux4g-divider--with-label',
      this.label && 'ux4g-divider--label-' + this.labelPosition,
      this.className
    );
  }

  /**
   * Computed line classes
   */
  get lineClasses(): string {
    return classNames(
      'ux4g-divider__line',
      'ux4g-divider__line--' + this.variant
    );
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames('ux4g-divider__label');
  }
}

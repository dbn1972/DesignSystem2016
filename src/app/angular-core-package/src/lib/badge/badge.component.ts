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
 * UX4G Badge Component
 *
 * A small status indicator or label component.
 * Supports different variants, sizes, and can be used standalone or with icons.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-badge variant="success">Active</ux4g-badge>
 *
 * @example
 * <ux4g-badge variant="warning" size="lg" [dot]="true">
 *   Pending Approval
 * </ux4g-badge>
 *
 * @example
 * <ux4g-badge variant="info" [pill]="true">New</ux4g-badge>
 */
@Component({
  selector: 'ux4g-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [attr.data-testid]="testId"
      [class]="badgeClasses"
    >
      @if (dot) {
        <span class="ux4g-badge__dot" aria-hidden="true"></span>
      }

      @if (iconBefore) {
        <span class="ux4g-badge__icon ux4g-badge__icon--before" aria-hidden="true">
          <ng-content select="[slot='icon-before']"></ng-content>
        </span>
      }

      <span class="ux4g-badge__label">
        <ng-content></ng-content>
      </span>

      @if (iconAfter) {
        <span class="ux4g-badge__icon ux4g-badge__icon--after" aria-hidden="true">
          <ng-content select="[slot='icon-after']"></ng-content>
        </span>
      }
    </span>
  `,
  styleUrls: ['./badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent {
  /**
   * Badge variant
   * @default 'info'
   */
  @Input() variant: StatusVariant = 'info';

  /**
   * Badge size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether to show as a pill shape (fully rounded)
   * @default false
   */
  @Input() pill: boolean = false;

  /**
   * Whether to show a dot indicator
   * @default false
   */
  @Input() dot: boolean = false;

  /**
   * Whether to show an icon before the label
   * @default false
   */
  @Input() iconBefore: boolean = false;

  /**
   * Whether to show an icon after the label
   * @default false
   */
  @Input() iconAfter: boolean = false;

  /**
   * Whether to use outline style
   * @default false
   */
  @Input() outline: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed badge classes
   */
  get badgeClasses(): string {
    return classNames(
      'ux4g-badge',
      'ux4g-badge--' + this.variant,
      'ux4g-badge--' + this.size,
      this.pill && 'ux4g-badge--pill',
      this.outline && 'ux4g-badge--outline',
      this.dot && 'ux4g-badge--with-dot',
      this.className
    );
  }
}

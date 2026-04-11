import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

export type StatusTagStatus =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'draft'
  | 'published'
  | 'archived'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled';

export type StatusTagVariant = 'default' | 'dot' | 'pill';

/**
 * UX4G Status Tag Component
 *
 * Displays status indicators with predefined status types and visual styles.
 * Optimized for showing workflow states, approval statuses, and process stages.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-status-tag status="active"></ux4g-status-tag>
 *
 * @example
 * <ux4g-status-tag
 *   status="approved"
 *   variant="dot"
 *   size="lg"
 * ></ux4g-status-tag>
 */
@Component({
  selector: 'ux4g-status-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [class]="statusTagClasses"
      [attr.role]="role"
      [attr.aria-label]="ariaLabel || statusLabel"
      [attr.data-testid]="testId"
    >
      @if (variant === 'dot') {
        <span [class]="dotClasses" aria-hidden="true"></span>
      }

      <span [class]="labelClasses">{{ label || statusLabel }}</span>
    </span>
  `,
  styleUrls: ['./status-tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StatusTagComponent {
  /**
   * Status type
   * @default 'active'
   */
  @Input() status: StatusTagStatus = 'active';

  /**
   * Visual variant
   * @default 'default'
   */
  @Input() variant: StatusTagVariant = 'default';

  /**
   * Status tag size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Custom label (overrides default status label)
   */
  @Input() label?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA role
   */
  @Input() role: string = 'status';

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Get default label for status
   */
  get statusLabel(): string {
    const labels: Record<StatusTagStatus, string> = {
      active: 'Active',
      inactive: 'Inactive',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected',
      draft: 'Draft',
      published: 'Published',
      archived: 'Archived',
      processing: 'Processing',
      completed: 'Completed',
      failed: 'Failed',
      cancelled: 'Cancelled',
    };
    return labels[this.status] || this.status;
  }

  /**
   * Computed status tag classes
   */
  get statusTagClasses(): string {
    return classNames(
      'ux4g-status-tag',
      'ux4g-status-tag--' + this.status,
      'ux4g-status-tag--' + this.variant,
      'ux4g-status-tag--' + this.size,
      this.className
    );
  }

  /**
   * Computed dot classes
   */
  get dotClasses(): string {
    return classNames('ux4g-status-tag__dot');
  }

  /**
   * Computed label classes
   */
  get labelClasses(): string {
    return classNames('ux4g-status-tag__label');
  }
}

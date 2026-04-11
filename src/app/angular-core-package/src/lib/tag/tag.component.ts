import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

/**
 * UX4G Tag Component
 *
 * Interactive labels with optional remove functionality.
 * Useful for displaying and managing collections of tags, filters, or selections.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-tag>Design</ux4g-tag>
 *
 * @example
 * <ux4g-tag
 *   variant="primary"
 *   [removable]="true"
 *   (remove)="handleRemove()"
 * >
 *   Frontend
 * </ux4g-tag>
 */
@Component({
  selector: 'ux4g-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [class]="tagClasses"
      [attr.data-testid]="testId"
      role="listitem"
    >
      @if (icon) {
        <span [class]="iconClasses" aria-hidden="true">{{ icon }}</span>
      }

      <span [class]="contentClasses">
        <ng-content></ng-content>
      </span>

      @if (removable) {
        <button
          type="button"
          [class]="removeButtonClasses"
          [attr.aria-label]="removeAriaLabel"
          [disabled]="disabled"
          (click)="handleRemove($event)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </span>
  `,
  styleUrls: ['./tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TagComponent {
  /**
   * Tag variant
   * @default 'default'
   */
  @Input() variant: TagVariant = 'default';

  /**
   * Tag size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Whether tag can be removed
   * @default false
   */
  @Input() removable: boolean = false;

  /**
   * Whether tag is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Icon to display before content
   */
  @Input() icon?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for remove button
   */
  @Input() removeAriaLabel: string = 'Remove tag';

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when tag is removed
   */
  @Output() remove = new EventEmitter<MouseEvent>();

  /**
   * Computed tag classes
   */
  get tagClasses(): string {
    return classNames(
      'ux4g-tag',
      'ux4g-tag--' + this.variant,
      'ux4g-tag--' + this.size,
      this.disabled && 'ux4g-tag--disabled',
      this.removable && 'ux4g-tag--removable',
      this.className
    );
  }

  /**
   * Computed icon classes
   */
  get iconClasses(): string {
    return classNames('ux4g-tag__icon');
  }

  /**
   * Computed content classes
   */
  get contentClasses(): string {
    return classNames('ux4g-tag__content');
  }

  /**
   * Computed remove button classes
   */
  get removeButtonClasses(): string {
    return classNames('ux4g-tag__remove');
  }

  /**
   * Handle remove click
   */
  handleRemove(event: MouseEvent): void {
    if (this.disabled) return;

    event.stopPropagation();
    this.remove.emit(event);
  }
}

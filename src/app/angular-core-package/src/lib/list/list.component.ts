import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * List item interface
 */
export interface ListItem {
  content: string;
  icon?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  badge?: string;
  description?: string;
}

/**
 * Generic list component with multiple variants for displaying structured content.
 * Supports bulleted, numbered, plain, and custom variants with icons, badges, and descriptions.
 *
 * @example
 * // Indian Government Identity Documents List
 * <ux4g-list
 *   [items]="[
 *     { content: 'Aadhaar Card', icon: '📄', description: 'Unique identification for residents of India' },
 *     { content: 'PAN Card', icon: '💳', description: 'Permanent Account Number for tax purposes' },
 *     { content: 'Voter ID', icon: '🗳️', description: 'Electoral identity card for voting' },
 *     { content: 'Driving License', icon: '🚗', description: 'License to drive motor vehicles' }
 *   ]"
 *   variant="custom"
 *   spacing="relaxed"
 * ></ux4g-list>
 *
 * @example
 * // Government Service Application Steps
 * <ux4g-list
 *   [items]="[
 *     { content: 'Register on the portal', active: true },
 *     { content: 'Fill application form' },
 *     { content: 'Upload required documents' },
 *     { content: 'Pay application fee' },
 *     { content: 'Submit application' }
 *   ]"
 *   variant="numbered"
 *   [ordered]="true"
 * ></ux4g-list>
 *
 * @example
 * // Ministry Departments with Badge Counts
 * <ux4g-list
 *   [items]="[
 *     { content: 'Pending Applications', badge: '12', href: '/pending' },
 *     { content: 'Approved Applications', badge: '45', href: '/approved' },
 *     { content: 'Rejected Applications', badge: '3', href: '/rejected' }
 *   ]"
 *   variant="plain"
 * ></ux4g-list>
 */
@Component({
  selector: 'ux4g-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {
  /**
   * Array of list items to display
   */
  @Input() items: ListItem[] = [];

  /**
   * Visual variant of the list
   */
  @Input() variant: 'bulleted' | 'numbered' | 'plain' | 'custom' = 'bulleted';

  /**
   * Size of list items
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Spacing between list items
   */
  @Input() spacing: 'compact' | 'normal' | 'relaxed' = 'normal';

  /**
   * Whether the list is ordered (numbered)
   */
  @Input() ordered: boolean = false;

  /**
   * Global icon for all items (can be overridden per item)
   */
  @Input() icon?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Emits when an interactive list item is clicked
   */
  @Output() itemClick = new EventEmitter<ListItem>();

  /**
   * Get computed CSS classes for the list element
   */
  get listClasses(): string {
    const classes = [
      'ux4g-list',
      `ux4g-list--${this.variant}`,
      `ux4g-list--${this.size}`,
      `ux4g-list--spacing-${this.spacing}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Get computed CSS classes for individual list items
   */
  getItemClasses(item: ListItem): string {
    const classes = ['ux4g-list__item'];

    if (item.active) {
      classes.push('ux4g-list__item--active');
    }

    if (item.disabled) {
      classes.push('ux4g-list__item--disabled');
    }

    if (item.href) {
      classes.push('ux4g-list__item--interactive');
    }

    return classes.join(' ');
  }

  /**
   * Handle item click for interactive lists
   */
  onItemClick(item: ListItem, event: Event): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    this.itemClick.emit(item);
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(item: ListItem, event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onItemClick(item, event);
    }
  }
}

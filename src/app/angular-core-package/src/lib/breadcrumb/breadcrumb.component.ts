import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

/**
 * UX4G Breadcrumb Component
 *
 * A breadcrumb navigation component for displaying hierarchical navigation.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-breadcrumb [items]="breadcrumbItems"></ux4g-breadcrumb>
 *
 * @example
 * <ux4g-breadcrumb
 *   [items]="items"
 *   [separator]="'/'"
 *   [showHomeIcon]="true"
 * ></ux4g-breadcrumb>
 */
@Component({
  selector: 'ux4g-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      aria-label="Breadcrumb"
      [attr.data-testid]="testId"
      [class]="wrapperClasses"
    >
      <ol [class]="listClasses">
        @for (item of items; track $index; let i = $index; let isLast = $last) {
          <li [class]="getItemClasses(isLast)">
            @if (i === 0 && showHomeIcon) {
              <span class="ux4g-breadcrumb__home-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1.5l-7 6.5v7h5v-5h4v5h5v-7l-7-6.5zm0 1.7l5 4.6v5.2h-3v-5h-4v5h-3v-5.2l5-4.6z"/>
                </svg>
              </span>
            }

            @if (!isLast && item.href) {
              <a
                [href]="item.href"
                [class]="getLinkClasses()"
              >
                {{ item.label }}
              </a>
            } @else {
              <span
                [class]="getCurrentClasses()"
                [attr.aria-current]="isLast ? 'page' : null"
              >
                {{ item.label }}
              </span>
            }

            @if (!isLast) {
              <span class="ux4g-breadcrumb__separator" aria-hidden="true">
                {{ separator }}
              </span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styleUrls: ['./breadcrumb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent {
  /**
   * Breadcrumb items
   */
  @Input() items: BreadcrumbItem[] = [];

  /**
   * Separator character
   * @default '/'
   */
  @Input() separator: string = '/';

  /**
   * Whether to show home icon for first item
   * @default false
   */
  @Input() showHomeIcon: boolean = false;

  /**
   * Maximum number of items to show
   * Items in the middle will be collapsed
   */
  @Input() maxItems?: number;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames('ux4g-breadcrumb', this.className);
  }

  /**
   * Computed list classes
   */
  get listClasses(): string {
    return classNames('ux4g-breadcrumb__list');
  }

  /**
   * Get item classes
   */
  getItemClasses(isLast: boolean): string {
    return classNames(
      'ux4g-breadcrumb__item',
      isLast && 'ux4g-breadcrumb__item--current'
    );
  }

  /**
   * Get link classes
   */
  getLinkClasses(): string {
    return classNames('ux4g-breadcrumb__link');
  }

  /**
   * Get current item classes
   */
  getCurrentClasses(): string {
    return classNames('ux4g-breadcrumb__current');
  }
}

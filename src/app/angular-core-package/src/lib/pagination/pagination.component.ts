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

/**
 * UX4G Pagination Component
 *
 * A pagination component for navigating through pages of content.
 * Supports different sizes, jump to first/last, and customizable page range.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-pagination
 *   [currentPage]="1"
 *   [totalPages]="10"
 *   (pageChange)="handlePageChange($event)"
 * ></ux4g-pagination>
 *
 * @example
 * <ux4g-pagination
 *   [currentPage]="page"
 *   [totalPages]="totalPages"
 *   [showFirstLast]="true"
 *   [size]="'lg'"
 * ></ux4g-pagination>
 */
@Component({
  selector: 'ux4g-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      role="navigation"
      aria-label="Pagination"
      [attr.data-testid]="testId"
      [class]="wrapperClasses"
    >
      <ul [class]="listClasses">
        @if (showFirstLast) {
          <li>
            <button
              type="button"
              [disabled]="currentPage === 1"
              [class]="getButtonClasses(false)"
              (click)="handlePageClick(1)"
              aria-label="Go to first page"
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>
        }

        <li>
          <button
            type="button"
            [disabled]="currentPage === 1"
            [class]="getButtonClasses(false)"
            (click)="handlePageClick(currentPage - 1)"
            aria-label="Go to previous page"
          >
            <span aria-hidden="true">‹</span>
          </button>
        </li>

        @for (page of visiblePages; track page) {
          @if (page === '...') {
            <li>
              <span [class]="getEllipsisClasses()">…</span>
            </li>
          } @else {
            <li>
              <button
                type="button"
                [class]="getButtonClasses(page === currentPage)"
                [attr.aria-label]="'Go to page ' + page"
                [attr.aria-current]="page === currentPage ? 'page' : null"
                (click)="handlePageClick(page as number)"
              >
                {{ page }}
              </button>
            </li>
          }
        }

        <li>
          <button
            type="button"
            [disabled]="currentPage === totalPages"
            [class]="getButtonClasses(false)"
            (click)="handlePageClick(currentPage + 1)"
            aria-label="Go to next page"
          >
            <span aria-hidden="true">›</span>
          </button>
        </li>

        @if (showFirstLast) {
          <li>
            <button
              type="button"
              [disabled]="currentPage === totalPages"
              [class]="getButtonClasses(false)"
              (click)="handlePageClick(totalPages)"
              aria-label="Go to last page"
            >
              <span aria-hidden="true">»</span>
            </button>
          </li>
        }
      </ul>

      @if (showPageInfo) {
        <div class="ux4g-pagination__info">
          Page {{ currentPage }} of {{ totalPages }}
        </div>
      }
    </nav>
  `,
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent {
  /**
   * Current active page
   * @default 1
   */
  @Input() currentPage: number = 1;

  /**
   * Total number of pages
   * @default 1
   */
  @Input() totalPages: number = 1;

  /**
   * Pagination size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Maximum number of visible page buttons
   * @default 7
   */
  @Input() maxVisiblePages: number = 7;

  /**
   * Whether to show first/last buttons
   * @default false
   */
  @Input() showFirstLast: boolean = false;

  /**
   * Whether to show page info text
   * @default false
   */
  @Input() showPageInfo: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Page change event emitter
   */
  @Output() pageChange = new EventEmitter<number>();

  /**
   * Get visible pages array
   */
  get visiblePages(): (number | string)[] {
    const pages: (number | string)[] = [];

    if (this.totalPages <= this.maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate range
      const halfVisible = Math.floor(this.maxVisiblePages / 2);
      let startPage = Math.max(1, this.currentPage - halfVisible);
      let endPage = Math.min(this.totalPages, this.currentPage + halfVisible);

      // Adjust if we're near the start or end
      if (this.currentPage <= halfVisible) {
        endPage = this.maxVisiblePages;
      } else if (this.currentPage >= this.totalPages - halfVisible) {
        startPage = this.totalPages - this.maxVisiblePages + 1;
      }

      // Add first page and ellipsis if needed
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis and last page if needed
      if (endPage < this.totalPages) {
        if (endPage < this.totalPages - 1) {
          pages.push('...');
        }
        pages.push(this.totalPages);
      }
    }

    return pages;
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames('ux4g-pagination', this.className);
  }

  /**
   * Computed list classes
   */
  get listClasses(): string {
    return classNames(
      'ux4g-pagination__list',
      'ux4g-pagination__list--' + this.size
    );
  }

  /**
   * Get button classes
   */
  getButtonClasses(isActive: boolean): string {
    return classNames(
      'ux4g-pagination__button',
      'ux4g-pagination__button--' + this.size,
      isActive && 'ux4g-pagination__button--active'
    );
  }

  /**
   * Get ellipsis classes
   */
  getEllipsisClasses(): string {
    return classNames(
      'ux4g-pagination__ellipsis',
      'ux4g-pagination__ellipsis--' + this.size
    );
  }

  /**
   * Handle page click
   */
  handlePageClick(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.pageChange.emit(page);
  }
}

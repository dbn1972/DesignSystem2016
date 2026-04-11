import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableSortEvent {
  column: string;
  direction: 'asc' | 'desc';
}

/**
 * UX4G Table Component
 *
 * A data table component with sorting, striping, and hover effects.
 * Supports custom column configuration and row templates.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-table
 *   [columns]="columns"
 *   [data]="data"
 *   [striped]="true"
 *   [hoverable]="true"
 * ></ux4g-table>
 *
 * @example
 * <ux4g-table
 *   [columns]="columns"
 *   [data]="users"
 *   [sortable]="true"
 *   (sorted)="handleSort($event)"
 * ></ux4g-table>
 */
@Component({
  selector: 'ux4g-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <table [class]="tableClasses" [attr.data-testid]="testId">
        @if (caption) {
          <caption [class]="captionClasses">{{ caption }}</caption>
        }

        <thead [class]="theadClasses">
          <tr>
            @for (column of columns; track column.key) {
              <th
                [class]="getHeaderClasses(column)"
                [style.width]="column.width"
                [attr.scope]="'col'"
                [attr.aria-sort]="getAriaSort(column.key)"
              >
                @if (sortable && column.sortable !== false) {
                  <button
                    type="button"
                    class="ux4g-table__sort-button"
                    (click)="handleSort(column.key)"
                  >
                    {{ column.label }}
                    <span class="ux4g-table__sort-icon" aria-hidden="true">
                      @if (sortColumn === column.key) {
                        @if (sortDirection === 'asc') {
                          ↑
                        } @else {
                          ↓
                        }
                      } @else {
                        ↕
                      }
                    </span>
                  </button>
                } @else {
                  {{ column.label }}
                }
              </th>
            }
          </tr>
        </thead>

        <tbody [class]="tbodyClasses">
          @if (data && data.length > 0) {
            @for (row of data; track trackByFn($index, row); let i = $index) {
              <tr [class]="getRowClasses(i)" (click)="handleRowClick(row, i)">
                @for (column of columns; track column.key) {
                  <td [class]="getCellClasses(column)">
                    {{ getCellValue(row, column.key) }}
                  </td>
                }
              </tr>
            }
          } @else {
            <tr>
              <td [attr.colspan]="columns.length" class="ux4g-table__empty">
                {{ emptyMessage }}
              </td>
            </tr>
          }
        </tbody>

        @if (showFooter) {
          <tfoot [class]="tfootClasses">
            <ng-content select="[slot='footer']"></ng-content>
          </tfoot>
        }
      </table>
    </div>
  `,
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  /**
   * Table columns configuration
   */
  @Input() columns: TableColumn[] = [];

  /**
   * Table data rows
   */
  @Input() data: any[] = [];

  /**
   * Table caption for accessibility
   */
  @Input() caption?: string;

  /**
   * Whether to show caption visually
   * @default false
   */
  @Input() showCaption: boolean = false;

  /**
   * Whether the table is sortable
   * @default false
   */
  @Input() sortable: boolean = false;

  /**
   * Whether to show striped rows
   * @default false
   */
  @Input() striped: boolean = false;

  /**
   * Whether to show hover effect on rows
   * @default false
   */
  @Input() hoverable: boolean = false;

  /**
   * Whether the table is bordered
   * @default true
   */
  @Input() bordered: boolean = true;

  /**
   * Whether to make the table compact
   * @default false
   */
  @Input() compact: boolean = false;

  /**
   * Whether rows are clickable
   * @default false
   */
  @Input() clickableRows: boolean = false;

  /**
   * Whether to show footer
   * @default false
   */
  @Input() showFooter: boolean = false;

  /**
   * Message to show when table is empty
   * @default 'No data available'
   */
  @Input() emptyMessage: string = 'No data available';

  /**
   * Custom track by function for row rendering
   */
  @Input() trackByFn: (index: number, item: any) => any = (index) => index;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Sort event emitter
   */
  @Output() sorted = new EventEmitter<TableSortEvent>();

  /**
   * Row click event emitter
   */
  @Output() rowClicked = new EventEmitter<{ row: any; index: number }>();

  /**
   * Current sort column
   */
  sortColumn: string | null = null;

  /**
   * Current sort direction
   */
  sortDirection: 'asc' | 'desc' = 'asc';

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames('ux4g-table-wrapper', this.className);
  }

  /**
   * Computed table classes
   */
  get tableClasses(): string {
    return classNames(
      'ux4g-table',
      this.bordered && 'ux4g-table--bordered',
      this.striped && 'ux4g-table--striped',
      this.hoverable && 'ux4g-table--hoverable',
      this.compact && 'ux4g-table--compact',
      this.clickableRows && 'ux4g-table--clickable-rows'
    );
  }

  /**
   * Computed caption classes
   */
  get captionClasses(): string {
    return classNames(
      'ux4g-table__caption',
      !this.showCaption && 'sr-only'
    );
  }

  /**
   * Computed thead classes
   */
  get theadClasses(): string {
    return classNames('ux4g-table__thead');
  }

  /**
   * Computed tbody classes
   */
  get tbodyClasses(): string {
    return classNames('ux4g-table__tbody');
  }

  /**
   * Computed tfoot classes
   */
  get tfootClasses(): string {
    return classNames('ux4g-table__tfoot');
  }

  /**
   * Get header cell classes
   */
  getHeaderClasses(column: TableColumn): string {
    return classNames(
      'ux4g-table__th',
      column.align && 'ux4g-table__th--' + column.align,
      this.sortable && column.sortable !== false && 'ux4g-table__th--sortable',
      this.sortColumn === column.key && 'ux4g-table__th--sorted'
    );
  }

  /**
   * Get cell classes
   */
  getCellClasses(column: TableColumn): string {
    return classNames(
      'ux4g-table__td',
      column.align && 'ux4g-table__td--' + column.align
    );
  }

  /**
   * Get row classes
   */
  getRowClasses(index: number): string {
    return classNames(
      'ux4g-table__tr',
      this.clickableRows && 'ux4g-table__tr--clickable'
    );
  }

  /**
   * Get ARIA sort value
   */
  getAriaSort(columnKey: string): string | null {
    if (!this.sortable || this.sortColumn !== columnKey) {
      return null;
    }
    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  /**
   * Get cell value from row data
   */
  getCellValue(row: any, key: string): any {
    const keys = key.split('.');
    let value = row;
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? '';
  }

  /**
   * Handle sort click
   */
  handleSort(columnKey: string): void {
    if (!this.sortable) {
      return;
    }

    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnKey;
      this.sortDirection = 'asc';
    }

    this.sorted.emit({
      column: columnKey,
      direction: this.sortDirection,
    });
  }

  /**
   * Handle row click
   */
  handleRowClick(row: any, index: number): void {
    if (this.clickableRows) {
      this.rowClicked.emit({ row, index });
    }
  }
}

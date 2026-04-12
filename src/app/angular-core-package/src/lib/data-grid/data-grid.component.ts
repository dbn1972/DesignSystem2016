import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @component DataGrid
 * @description Advanced table with sorting, filtering, pagination, and row selection
 *
 * @example
 * // Citizen Applications Dashboard
 * <ux4g-data-grid
 *   [data]="applications"
 *   [columns]="[
 *     { key: 'applicationNumber', label: 'Application #', sortable: true },
 *     { key: 'applicantName', label: 'Applicant', sortable: true, filterable: true },
 *     { key: 'service', label: 'Service Type', filterable: true },
 *     { key: 'status', label: 'Status', sortable: true },
 *     { key: 'submissionDate', label: 'Submitted', sortable: true }
 *   ]"
 *   [sortable]="true"
 *   [filterable]="true"
 *   [paginated]="true"
 *   [pageSize]="20"
 * ></ux4g-data-grid>
 *
 * @example
 * // Tax Records Grid
 * <ux4g-data-grid
 *   [data]="taxRecords"
 *   [columns]="taxColumns"
 *   [selectable]="true"
 *   [multiSelect]="true"
 *   (selectedRowsChange)="handleSelection($event)"
 * ></ux4g-data-grid>
 */
export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => string;
}

@Component({
  selector: 'ux4g-data-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-data-grid" role="region" aria-label="Data grid">
      <div class="ux4g-data-grid__container">
        <table
          class="ux4g-data-grid__table"
          role="table"
          [attr.aria-busy]="loading"
          [attr.aria-rowcount]="filteredData.length"
        >
          <thead class="ux4g-data-grid__header">
            <tr role="row">
              @if (selectable) {
                <th class="ux4g-data-grid__cell ux4g-data-grid__cell--select" role="columnheader">
                  @if (multiSelect) {
                    <input
                      type="checkbox"
                      [checked]="selectedRows.size === paginatedData.length && paginatedData.length > 0"
                      (change)="selectAllRows()"
                      aria-label="Select all rows"
                    />
                  }
                </th>
              }
              @for (column of columns; track column.key) {
                <th
                  class="ux4g-data-grid__cell ux4g-data-grid__cell--header"
                  [class.ux4g-data-grid__cell--sortable]="column.sortable && sortable"
                  [style.width]="column.width"
                  [style.text-align]="column.align || 'left'"
                  role="columnheader"
                  [attr.aria-sort]="sortColumn === column.key ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'"
                >
                  <div class="ux4g-data-grid__header-content">
                    @if (column.sortable && sortable) {
                      <button
                        class="ux4g-data-grid__sort-button"
                        (click)="onSort(column)"
                        [attr.aria-label]="'Sort by ' + column.label"
                      >
                        {{ column.label }}
                        <span class="ux4g-data-grid__sort-icon" aria-hidden="true">
                          {{ getSortIcon(column) }}
                        </span>
                      </button>
                    } @else {
                      <span>{{ column.label }}</span>
                    }
                  </div>
                  @if (column.filterable && filterable) {
                    <div class="ux4g-data-grid__filter">
                      <input
                        type="text"
                        class="ux4g-data-grid__filter-input"
                        [placeholder]="'Filter ' + column.label"
                        (input)="onFilterChange(column.key, $any($event.target).value)"
                        [attr.aria-label]="'Filter ' + column.label"
                      />
                    </div>
                  }
                </th>
              }
            </tr>
          </thead>
          <tbody class="ux4g-data-grid__body">
            @if (loading) {
              <tr class="ux4g-data-grid__loading-row" role="row">
                <td
                  [attr.colspan]="columns.length + (selectable ? 1 : 0)"
                  class="ux4g-data-grid__cell"
                  role="cell"
                >
                  <div class="ux4g-data-grid__skeleton">
                    @for (i of [1,2,3,4,5]; track i) {
                      <div class="ux4g-data-grid__skeleton-line"></div>
                    }
                  </div>
                </td>
              </tr>
            }

            @if (!loading && paginatedData.length === 0) {
              <tr class="ux4g-data-grid__empty-row" role="row">
                <td
                  [attr.colspan]="columns.length + (selectable ? 1 : 0)"
                  class="ux4g-data-grid__cell ux4g-data-grid__cell--empty"
                  role="cell"
                >
                  <div class="ux4g-data-grid__empty-state">
                    <p>No data available</p>
                  </div>
                </td>
              </tr>
            }

            @for (row of paginatedData; track $index; let i = $index) {
              <tr
                class="ux4g-data-grid__row"
                [class.ux4g-data-grid__row--selected]="isRowSelected(i)"
                [class.ux4g-data-grid__row--selectable]="selectable"
                (click)="selectable ? onRowSelect(i) : null"
                role="row"
                [attr.aria-selected]="selectable ? isRowSelected(i) : null"
              >
                @if (selectable) {
                  <td
                    class="ux4g-data-grid__cell ux4g-data-grid__cell--select"
                    role="cell"
                    (click)="$event.stopPropagation()"
                  >
                    <input
                      [type]="multiSelect ? 'checkbox' : 'radio'"
                      [checked]="isRowSelected(i)"
                      (change)="onRowSelect(i)"
                      [attr.aria-label]="'Select row ' + (i + 1)"
                    />
                  </td>
                }
                @for (column of columns; track column.key) {
                  <td
                    class="ux4g-data-grid__cell"
                    [style.text-align]="column.align || 'left'"
                    role="cell"
                  >
                    {{ getCellValue(row, column) }}
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
      </div>

      @if (paginated && totalPages > 1) {
        <div
          class="ux4g-data-grid__pagination"
          role="navigation"
          aria-label="Pagination"
        >
          <button
            class="ux4g-data-grid__pagination-button"
            [disabled]="currentPage === 1"
            (click)="onPageChange(currentPage - 1)"
            aria-label="Previous page"
          >
            Previous
          </button>

          <div class="ux4g-data-grid__pagination-pages">
            @for (page of pageNumbers; track page) {
              <button
                class="ux4g-data-grid__pagination-button"
                [class.ux4g-data-grid__pagination-button--active]="page === currentPage"
                (click)="onPageChange(page)"
                [attr.aria-label]="'Page ' + page"
                [attr.aria-current]="page === currentPage ? 'page' : null"
              >
                {{ page }}
              </button>
            }
          </div>

          <button
            class="ux4g-data-grid__pagination-button"
            [disabled]="currentPage === totalPages"
            (click)="onPageChange(currentPage + 1)"
            aria-label="Next page"
          >
            Next
          </button>

          <span class="ux4g-data-grid__pagination-info">
            Showing {{ (currentPage - 1) * pageSize + 1 }} - {{ getEndRange() }} of {{ filteredData.length }}
          </span>
        </div>
      }
    </div>
  `,
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  @Input() data: any[] = [];
  @Input() columns: DataGridColumn[] = [];
  @Input() sortable: boolean = true;
  @Input() filterable: boolean = true;
  @Input() paginated: boolean = true;
  @Input() pageSize: number = 10;
  @Input() selectable: boolean = false;
  @Input() multiSelect: boolean = false;
  @Input() loading: boolean = false;

  @Output() selectedRowsChange = new EventEmitter<any[]>();
  @Output() sortChange = new EventEmitter<{ column: string; direction: 'asc' | 'desc' }>();

  currentPage: number = 1;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  filters: { [key: string]: string } = {};
  selectedRows: Set<number> = new Set();

  get filteredData(): any[] {
    if (!this.data) return [];

    let result = [...this.data];

    // Apply filters
    Object.keys(this.filters).forEach(key => {
      const filterValue = this.filters[key]?.toLowerCase();
      if (filterValue) {
        result = result.filter(row => {
          const value = String(row[key] || '').toLowerCase();
          return value.includes(filterValue);
        });
      }
    });

    // Apply sorting
    if (this.sortColumn) {
      result.sort((a, b) => {
        const aVal = a[this.sortColumn];
        const bVal = b[this.sortColumn];
        const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }

  get paginatedData(): any[] {
    if (!this.paginated) return this.filteredData;

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredData.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSort(column: DataGridColumn): void {
    if (!column.sortable || !this.sortable) return;

    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }

    this.sortChange.emit({ column: column.key, direction: this.sortDirection });
  }

  onFilterChange(columnKey: string, value: string): void {
    this.filters[columnKey] = value;
    this.currentPage = 1; // Reset to first page on filter
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onRowSelect(index: number): void {
    if (!this.selectable) return;

    if (this.multiSelect) {
      if (this.selectedRows.has(index)) {
        this.selectedRows.delete(index);
      } else {
        this.selectedRows.add(index);
      }
    } else {
      this.selectedRows.clear();
      this.selectedRows.add(index);
    }

    const selectedData = Array.from(this.selectedRows).map(i => this.filteredData[i]);
    this.selectedRowsChange.emit(selectedData);
  }

  isRowSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }

  getCellValue(row: any, column: DataGridColumn): string {
    const value = row[column.key];
    if (column.render) {
      return column.render(value, row);
    }
    return value ?? '';
  }

  getSortIcon(column: DataGridColumn): string {
    if (!column.sortable || this.sortColumn !== column.key) return '⇅';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  selectAllRows(): void {
    if (this.selectedRows.size === this.paginatedData.length && this.paginatedData.length > 0) {
      this.selectedRows.clear();
    } else {
      this.paginatedData.forEach((_, i) => this.selectedRows.add(i));
    }
    const selectedData = Array.from(this.selectedRows).map(i => this.filteredData[i]);
    this.selectedRowsChange.emit(selectedData);
  }

  getEndRange(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredData.length);
  }
}

/**
 * Table Component
 * Data table with sorting and filtering capabilities
 *
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { key: 'name', header: 'Name', accessor: 'name', sortable: true },
 *     { key: 'email', header: 'Email', accessor: 'email' }
 *   ]}
 *   data={users}
 *   striped
 *   hoverable
 * />
 * ```
 */

import { ReactNode, useState, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { TableProps, SortState, TableColumn } from './Table.types';

export function Table<T = any>({
  columns,
  data,
  rowKey,
  striped = false,
  hoverable = false,
  bordered = false,
  compact = false,
  caption,
  captionSide = 'top',
  sortState: controlledSortState,
  defaultSortState,
  onSortChange,
  onRowClick,
  emptyState,
  loading = false,
  loadingRows = 5,
  stickyHeader = false,
  maxHeight,
  className,
  ...props
}: TableProps<T>) {
  // Sort state management
  const [internalSortState, setInternalSortState] = useState<SortState>(
    defaultSortState || { columnKey: null, direction: null }
  );

  const sortState = controlledSortState ?? internalSortState;
  const isControlled = controlledSortState !== undefined;

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;

    const newSortState: SortState = {
      columnKey: column.key,
      direction:
        sortState.columnKey === column.key
          ? sortState.direction === 'asc'
            ? 'desc'
            : sortState.direction === 'desc'
            ? null
            : 'asc'
          : 'asc',
    };

    if (!isControlled) {
      setInternalSortState(newSortState);
    }
    onSortChange?.(newSortState);
  };

  // Sorted data
  const sortedData = useMemo(() => {
    if (!sortState.columnKey || !sortState.direction) {
      return data;
    }

    const column = columns.find((col) => col.key === sortState.columnKey);
    if (!column) return data;

    const sorted = [...data].sort((a, b) => {
      if (column.sortFn) {
        return column.sortFn(a, b);
      }

      const aValue = column.accessor
        ? typeof column.accessor === 'function'
          ? column.accessor(a)
          : a[column.accessor]
        : a[column.key as keyof T];

      const bValue = column.accessor
        ? typeof column.accessor === 'function'
          ? column.accessor(b)
          : b[column.accessor]
        : b[column.key as keyof T];

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }

      return aValue < bValue ? -1 : 1;
    });

    return sortState.direction === 'desc' ? sorted.reverse() : sorted;
  }, [data, sortState, columns]);

  // Get row key
  const getRowKey = (row: T, index: number): string | number => {
    if (typeof rowKey === 'function') {
      return rowKey(row, index);
    }
    if (rowKey) {
      return row[rowKey] as string | number;
    }
    return index;
  };

  // Get cell value
  const getCellValue = (column: TableColumn<T>, row: T, index: number) => {
    if (column.render) {
      const value = column.accessor
        ? typeof column.accessor === 'function'
          ? column.accessor(row)
          : row[column.accessor]
        : row[column.key as keyof T];
      return column.render(value, row, index);
    }

    if (column.accessor) {
      return typeof column.accessor === 'function'
        ? column.accessor(row)
        : row[column.accessor];
    }

    return row[column.key as keyof T] as ReactNode;
  };

  // Render loading skeleton
  const renderLoadingSkeleton = () => (
    <tbody>
      {Array.from({ length: loadingRows }).map((_, index) => (
        <tr key={`skeleton-${index}`}>
          {columns.map((column) => (
            <td key={column.key} className="ux4g-table-cell">
              <div className="ux4g-skeleton ux4g-skeleton-text" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  // Render empty state
  const renderEmptyState = () => (
    <tbody>
      <tr>
        <td colSpan={columns.length} className="ux4g-table-empty">
          {emptyState || 'No data available'}
        </td>
      </tr>
    </tbody>
  );

  const containerStyle = maxHeight ? { maxHeight, overflow: 'auto' } : undefined;

  const getAriaSort = (column: TableColumn<T>) => {
    if (!column.sortable) return undefined;
    if (sortState.columnKey !== column.key || !sortState.direction) {
      return 'none';
    }
    return sortState.direction === 'asc' ? 'ascending' : 'descending';
  };

  return (
    <div
      className={cn('ux4g-table-container', className)}
      style={containerStyle}
      aria-busy={loading || undefined}
      {...props}
    >
      <table
        className={cn(
          'ux4g-table',
          striped && 'ux4g-table-striped',
          hoverable && 'ux4g-table-hoverable',
          bordered && 'ux4g-table-bordered',
          compact && 'ux4g-table-compact',
          stickyHeader && 'ux4g-table-sticky-header'
        )}
      >
        {caption && (
          <caption
            className={cn(
              'ux4g-table-caption',
              `ux4g-table-caption-${captionSide}`
            )}
          >
            {caption}
          </caption>
        )}
        <thead className="ux4g-table-header">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  'ux4g-table-header-cell',
                  column.sortable && 'ux4g-table-header-sortable',
                  column.align && `ux4g-text-${column.align}`,
                  sortState.columnKey === column.key && 'ux4g-table-header-sorted'
                )}
                style={column.width ? { width: column.width } : undefined}
                aria-sort={getAriaSort(column)}
                {...column.headerProps}
              >
                {column.sortable ? (
                  <button
                    type="button"
                    className="ux4g-table-header-button"
                    onClick={() => handleSort(column)}
                  >
                    <span className="ux4g-table-header-content">
                      {column.header}
                      <span className="ux4g-table-sort-icon" aria-hidden="true">
                        {sortState.columnKey === column.key
                          ? sortState.direction === 'asc'
                            ? '↑'
                            : sortState.direction === 'desc'
                            ? '↓'
                            : '↕'
                          : '↕'}
                      </span>
                    </span>
                    <span className="sr-only">
                      {sortState.columnKey === column.key && sortState.direction
                        ? `Sorted ${sortState.direction === 'asc' ? 'ascending' : 'descending'}`
                        : 'Not sorted'}
                    </span>
                  </button>
                ) : (
                  <div className="ux4g-table-header-content">{column.header}</div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        {loading ? (
          renderLoadingSkeleton()
        ) : sortedData.length === 0 ? (
          renderEmptyState()
        ) : (
          <tbody className="ux4g-table-body">
            {sortedData.map((row, index) => (
              <tr
                key={getRowKey(row, index)}
                className={cn(
                  'ux4g-table-row',
                  onRowClick && 'ux4g-table-row-clickable'
                )}
                onClick={() => onRowClick?.(row, index)}
                onKeyDown={(event) => {
                  if (!onRowClick) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onRowClick(row, index);
                  }
                }}
                tabIndex={onRowClick ? 0 : undefined}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      'ux4g-table-cell',
                      column.align && `ux4g-text-${column.align}`
                    )}
                    {...column.cellProps}
                  >
                    {getCellValue(column, row, index)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

Table.displayName = 'Table';

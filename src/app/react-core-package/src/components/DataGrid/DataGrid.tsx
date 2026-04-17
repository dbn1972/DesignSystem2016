/**
 * DataGrid Component
 * Sortable, accessible data table for government service data.
 *
 * @example
 * ```tsx
 * <DataGrid
 *   columns={[{ key: 'name', header: 'Name', sortable: true }]}
 *   data={[{ id: '1', name: 'John' }]}
 *   rowKey="id"
 * />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DataGridProps, DataGridColumn, SortDirection } from './DataGrid.types';

export const DataGrid = forwardRef<HTMLTableElement, DataGridProps>(
  (
    {
      columns,
      data,
      rowKey,
      onSort,
      sortKey,
      sortDirection,
      loading = false,
      emptyMessage = 'No data available',
      striped = false,
      hoverable = true,
      caption,
      className,
      ...props
    },
    ref
  ) => {
    const handleSort = (col: DataGridColumn) => {
      if (!col.sortable || !onSort) return;
      const newDir: SortDirection =
        sortKey === col.key
          ? sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc'
          : 'asc';
      onSort(col.key, newDir);
    };

    const getSortLabel = (col: DataGridColumn) => {
      if (sortKey !== col.key || !sortDirection) return '';
      return sortDirection === 'asc' ? ' ▲' : ' ▼';
    };

    return (
      <div className={cn('ux4g-datagrid overflow-auto', className)} role="region" aria-label={caption || 'Data table'} tabIndex={0} {...props}>
        <table ref={ref} className="ux4g-datagrid-table w-full border-collapse text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="border-b-2 border-border bg-muted/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  style={{ width: col.width, textAlign: col.align || 'left' }}
                  className={cn(
                    'ux4g-datagrid-th px-4 py-3 font-semibold text-foreground',
                    col.sortable && 'cursor-pointer select-none hover:bg-muted'
                  )}
                  onClick={() => handleSort(col)}
                  aria-sort={
                    sortKey === col.key && sortDirection
                      ? sortDirection === 'asc' ? 'ascending' : 'descending'
                      : undefined
                  }
                >
                  {col.header}{getSortLabel(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center text-muted-foreground">
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center text-muted-foreground">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr
                  key={String((row as Record<string, unknown>)[rowKey])}
                  className={cn(
                    'border-b border-border',
                    striped && idx % 2 === 1 && 'bg-muted/30',
                    hoverable && 'hover:bg-muted/50 transition-colors'
                  )}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{ textAlign: col.align || 'left' }}
                      className="ux4g-datagrid-td px-4 py-3 text-foreground"
                    >
                      {col.render
                        ? col.render((row as Record<string, unknown>)[col.key], row, idx)
                        : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
);

DataGrid.displayName = 'DataGrid';

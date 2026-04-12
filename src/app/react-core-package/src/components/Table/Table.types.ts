/**
 * Table Component Types
 * Data table with sorting and filtering capabilities
 */

import { ReactNode, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface TableColumn<T = any> {
  /**
   * Unique key for the column
   */
  key: string;

  /**
   * Column header label
   */
  header: ReactNode;

  /**
   * Render function for cell content
   */
  render?: (value: any, row: T, index: number) => ReactNode;

  /**
   * Accessor function or key path for data
   */
  accessor?: keyof T | ((row: T) => any);

  /**
   * Enable sorting for this column
   * @default false
   */
  sortable?: boolean;

  /**
   * Custom sort function
   */
  sortFn?: (a: T, b: T) => number;

  /**
   * Column width (CSS value)
   */
  width?: string | number;

  /**
   * Column alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Additional props for header cell
   */
  headerProps?: ThHTMLAttributes<HTMLTableCellElement>;

  /**
   * Additional props for body cells
   */
  cellProps?: TdHTMLAttributes<HTMLTableCellElement>;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortState {
  /**
   * Column key being sorted
   */
  columnKey: string | null;

  /**
   * Sort direction
   */
  direction: SortDirection;
}

export interface TableProps<T = any> extends BaseComponentProps {
  /**
   * Table columns configuration
   */
  columns: TableColumn<T>[];

  /**
   * Table data rows
   */
  data: T[];

  /**
   * Unique key extractor for rows
   */
  rowKey?: keyof T | ((row: T, index: number) => string | number);

  /**
   * Enable row striping
   * @default false
   */
  striped?: boolean;

  /**
   * Enable hover effect on rows
   * @default false
   */
  hoverable?: boolean;

  /**
   * Make table borders more prominent
   * @default false
   */
  bordered?: boolean;

  /**
   * Compact row spacing
   * @default false
   */
  compact?: boolean;

  /**
   * Caption for the table (accessibility)
   */
  caption?: ReactNode;

  /**
   * Hide caption visually but keep for screen readers
   * @default false
   */
  captionSide?: 'top' | 'bottom';

  /**
   * Controlled sort state
   */
  sortState?: SortState;

  /**
   * Default sort state for uncontrolled mode
   */
  defaultSortState?: SortState;

  /**
   * Sort change handler
   */
  onSortChange?: (sortState: SortState) => void;

  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void;

  /**
   * Empty state content
   */
  emptyState?: ReactNode;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton rows to show when loading
   * @default 5
   */
  loadingRows?: number;

  /**
   * Sticky header
   * @default false
   */
  stickyHeader?: boolean;

  /**
   * Maximum height for scrollable table
   */
  maxHeight?: string | number;
}

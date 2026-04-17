import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface DataGridColumn<T = Record<string, unknown>> {
  /** Unique key matching data field */
  key: string;
  /** Column header label */
  header: string;
  /** Whether column is sortable */
  sortable?: boolean;
  /** Custom cell renderer */
  render?: (value: unknown, row: T, index: number) => ReactNode;
  /** Column width (CSS value) */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export type SortDirection = 'asc' | 'desc' | null;

export interface DataGridProps<T = Record<string, unknown>> extends BaseComponentProps {
  /** Column definitions */
  columns: DataGridColumn<T>[];
  /** Row data */
  data: T[];
  /** Unique key field in data */
  rowKey: string;
  /** Called when sort changes */
  onSort?: (key: string, direction: SortDirection) => void;
  /** Current sort column */
  sortKey?: string;
  /** Current sort direction */
  sortDirection?: SortDirection;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Whether rows are striped */
  striped?: boolean;
  /** Whether rows are hoverable */
  hoverable?: boolean;
  /** Caption for accessibility */
  caption?: string;
}

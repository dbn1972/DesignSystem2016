/**
 * Pagination Component Types
 * Page navigation controls
 */

import { BaseComponentProps, ControlledValueProps } from '../../types/common';

export type PaginationVariant = 'default' | 'compact';

export interface PaginationProps
  extends BaseComponentProps,
    Omit<ControlledValueProps<number>, 'onChange'> {
  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Number of page buttons to show
   * @default 7
   */
  siblingCount?: number;

  /**
   * Show first/last buttons
   * @default true
   */
  showFirstLast?: boolean;

  /**
   * Show previous/next buttons
   * @default true
   */
  showPrevNext?: boolean;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: PaginationVariant;

  /**
   * Page change handler
   */
  onChange?: (page: number) => void;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Show page info text (e.g., "Page 1 of 10")
   * @default false
   */
  showPageInfo?: boolean;

  /**
   * Custom labels
   */
  labels?: {
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
    pageInfo?: (current: number, total: number) => string;
  };
}

/**
 * Progress Component Types
 * Linear progress bars
 */

import { BaseComponentProps, ComponentSize, StatusVariant } from '../../types/common';

export interface ProgressProps extends BaseComponentProps {
  /**
   * Progress value (0-100)
   */
  value: number;

  /**
   * Progress size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Progress variant
   * @default 'info'
   */
  variant?: StatusVariant;

  /**
   * Show label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Custom label formatter
   */
  labelFormatter?: (value: number) => string;

  /**
   * Indeterminate state (loading animation)
   * @default false
   */
  indeterminate?: boolean;
}

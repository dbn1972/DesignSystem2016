/**
 * Spinner Component Types
 * Loading spinners
 */

import { BaseComponentProps, ComponentSize, StatusVariant } from '../../types/common';

export interface SpinnerProps extends BaseComponentProps {
  /**
   * Spinner size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Spinner variant
   * @default 'info'
   */
  variant?: StatusVariant | 'primary';

  /**
   * Loading text
   */
  label?: string;

  /**
   * Center spinner in container
   * @default false
   */
  centered?: boolean;
}

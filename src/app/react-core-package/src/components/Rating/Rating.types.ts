/**
 * Rating Component Types
 * Star rating component
 */

import { BaseComponentProps, ControlledValueProps } from '../../types/common';

export interface RatingProps
  extends BaseComponentProps,
    Omit<ControlledValueProps<number>, 'onChange'> {
  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;

  /**
   * Allow half stars
   * @default false
   */
  allowHalf?: boolean;

  /**
   * Read-only mode
   * @default false
   */
  readOnly?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Rating size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Change handler
   */
  onChange?: (value: number) => void;

  /**
   * Hover handler
   */
  onHover?: (value: number | null) => void;

  /**
   * Custom icon
   */
  icon?: string;

  /**
   * Show label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Custom label formatter
   */
  labelFormatter?: (value: number) => string;
}

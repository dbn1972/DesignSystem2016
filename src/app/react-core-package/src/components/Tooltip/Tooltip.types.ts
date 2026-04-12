/**
 * Tooltip Component Types
 * Hover tooltips for additional information
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface TooltipProps extends BaseComponentProps {
  /**
   * Tooltip content
   */
  content: ReactNode;

  /**
   * Element to attach tooltip to
   */
  children: ReactNode;

  /**
   * Tooltip placement
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * Show delay in ms
   * @default 200
   */
  delay?: number;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Show arrow
   * @default true
   */
  showArrow?: boolean;
}

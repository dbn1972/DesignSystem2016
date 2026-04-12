/**
 * Popover Component Types
 * Contextual popovers
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export type PopoverPlacement =
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

export type PopoverTrigger = 'click' | 'hover' | 'focus';

export interface PopoverProps extends BaseComponentProps {
  /**
   * Popover content
   */
  content: ReactNode;

  /**
   * Element that triggers the popover
   */
  children: ReactNode;

  /**
   * Popover placement
   * @default 'bottom'
   */
  placement?: PopoverPlacement;

  /**
   * Trigger type
   * @default 'click'
   */
  trigger?: PopoverTrigger;

  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Default open state
   */
  defaultOpen?: boolean;

  /**
   * Open state change handler
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Show arrow
   * @default true
   */
  showArrow?: boolean;

  /**
   * Popover title
   */
  title?: ReactNode;
}

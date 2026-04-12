/**
 * Drawer Component Types
 * Slide-out side panels
 */

import { ReactNode, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps extends BaseComponentProps {
  /**
   * Whether drawer is open
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose: () => void;

  /**
   * Drawer title
   */
  title?: ReactNode;

  /**
   * Drawer content
   */
  children: ReactNode;

  /**
   * Drawer footer actions
   */
  footer?: ReactNode;

  /**
   * Drawer placement
   * @default 'right'
   */
  placement?: DrawerPlacement;

  /**
   * Drawer size (width for left/right, height for top/bottom)
   * @default '400px'
   */
  size?: string | number;

  /**
   * Close on backdrop click
   * @default true
   */
  closeOnBackdrop?: boolean;

  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Show close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Additional props for drawer content
   */
  contentProps?: HTMLAttributes<HTMLDivElement>;

  /**
   * Additional props for backdrop
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
}

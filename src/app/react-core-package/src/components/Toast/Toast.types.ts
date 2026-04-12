/**
 * Toast Component Types
 * Notification toasts
 */

import { ReactNode } from 'react';
import { BaseComponentProps, StatusVariant } from '../../types/common';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps extends BaseComponentProps {
  /**
   * Toast message
   */
  message: ReactNode;

  /**
   * Toast variant
   * @default 'info'
   */
  variant?: StatusVariant;

  /**
   * Toast title
   */
  title?: ReactNode;

  /**
   * Show close button
   * @default true
   */
  closable?: boolean;

  /**
   * Auto close duration in ms (0 to disable)
   * @default 5000
   */
  duration?: number;

  /**
   * Close handler
   */
  onClose?: () => void;

  /**
   * Toast icon
   */
  icon?: ReactNode;

  /**
   * Action button
   */
  action?: {
    label: ReactNode;
    onClick: () => void;
  };
}

export interface ToastContainerProps extends BaseComponentProps {
  /**
   * Container position
   * @default 'top-right'
   */
  position?: ToastPosition;

  /**
   * Maximum number of toasts to show
   * @default 5
   */
  maxToasts?: number;
}

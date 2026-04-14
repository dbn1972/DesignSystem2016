/**
 * Alert Component Types
 * Feedback component for important messages
 */

import { HTMLAttributes, ReactNode } from 'react';
import {
  StatusVariant,
  BaseComponentProps,
  ChildrenProp
} from '../../types/common';

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Alert status variant
   * @default 'info'
   */
  variant?: StatusVariant;

  /**
   * Alert title
   */
  title?: ReactNode;

  /**
   * Alert description/message
   */
  description?: ReactNode;

  /**
   * Custom icon (overrides default status icon)
   */
  icon?: ReactNode;

  /**
   * Whether to show icon
   * @default true
   */
  showIcon?: boolean;

  /**
   * Close button handler (shows close button if provided)
   */
  onClose?: () => void;

  /**
   * Close button accessible label
   * @default 'Close alert'
   */
  closeLabel?: string;
}

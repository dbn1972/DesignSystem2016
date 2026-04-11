/**
 * Alert Component Types
 * Feedback component for important messages
 */

import { HTMLAttributes } from 'react';
import {
  StatusVariant,
  BaseComponentProps,
  ChildrenProp
} from '../../types/common';

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
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
  title?: React.ReactNode;

  /**
   * Alert description/message
   */
  description?: React.ReactNode;

  /**
   * Custom icon (overrides default status icon)
   */
  icon?: React.ReactNode;

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

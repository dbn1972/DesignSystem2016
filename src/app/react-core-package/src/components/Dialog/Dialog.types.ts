/**
 * Dialog Component Types
 * Modal dialogs with backdrop
 */

import { ReactNode, HTMLAttributes } from 'react';
import { BaseComponentProps, ComponentSize } from '../../types/common';

export interface DialogProps extends BaseComponentProps {
  /**
   * Whether dialog is open
   */
  open: boolean;

  /**
   * Close handler
   */
  onClose: () => void;

  /**
   * Dialog title
   */
  title?: ReactNode;

  /**
   * Dialog content
   */
  children: ReactNode;

  /**
   * Dialog footer actions
   */
  footer?: ReactNode;

  /**
   * Dialog size
   * @default 'md'
   */
  size?: ComponentSize | 'xl' | 'full';

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
   * Additional props for dialog content
   */
  contentProps?: HTMLAttributes<HTMLDivElement>;

  /**
   * Additional props for backdrop
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * FileUpload Component Types
 * File upload with drag-and-drop
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface FileUploadProps extends BaseComponentProps {
  /**
   * Change handler
   */
  onChange?: (files: File[]) => void;

  /**
   * Accept file types
   * @example '.pdf,.jpg,.png'
   */
  accept?: string;

  /**
   * Allow multiple files
   * @default false
   */
  multiple?: boolean;

  /**
   * Maximum file size in bytes
   */
  maxSize?: number;

  /**
   * Maximum number of files
   */
  maxFiles?: number;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Custom upload area content
   */
  children?: ReactNode;

  /**
   * Show file list
   * @default true
   */
  showFileList?: boolean;

  /**
   * File validation function
   */
  validator?: (file: File) => string | null;
}

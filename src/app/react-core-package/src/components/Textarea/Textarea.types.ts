import { TextareaHTMLAttributes } from 'react';
import { FormFieldProps } from '../../types/common';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    FormFieldProps {
  /**
   * Textarea size variant
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether to show full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether to allow resizing
   * @default true
   */
  resize?: boolean;
}

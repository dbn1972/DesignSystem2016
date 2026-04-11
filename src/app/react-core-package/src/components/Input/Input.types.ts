/**
 * Input Component Types
 * Text input field for forms
 */

import { InputHTMLAttributes } from 'react';
import {
  ComponentSize,
  FormFieldProps,
  ControlledValueProps
} from '../../types/common';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
    FormFieldProps,
    ControlledValueProps<string> {
  /**
   * Input size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';

  /**
   * Icon to display before input text
   */
  iconBefore?: React.ReactNode;

  /**
   * Icon to display after input text
   */
  iconAfter?: React.ReactNode;

  /**
   * Render as full width input
   * @default false
   */
  fullWidth?: boolean;
}

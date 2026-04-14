/**
 * Input Component Types
 * Text input field for forms
 */

import { InputHTMLAttributes, ReactNode } from 'react';
import {
  ComponentSize,
  FormFieldProps,
  ControlledValueProps
} from '../../types/common';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'aria-invalid' | 'aria-required' | 'defaultValue'>,
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
  iconBefore?: ReactNode;

  /**
   * Icon to display after input text
   */
  iconAfter?: ReactNode;

  /**
   * Render as full width input
   * @default false
   */
  fullWidth?: boolean;
}

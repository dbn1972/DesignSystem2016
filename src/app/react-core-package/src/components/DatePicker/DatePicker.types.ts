/**
 * DatePicker Component Types
 * Date input using native HTML5 date input
 */

import { InputHTMLAttributes } from 'react';
import { FormFieldProps, ComponentSize } from '../../types/common';

export interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange' | 'aria-invalid' | 'aria-required'>,
    FormFieldProps {
  /**
   * Input size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Controlled value (ISO date string YYYY-MM-DD)
   */
  value?: string;

  /**
   * Minimum date (ISO format YYYY-MM-DD)
   */
  min?: string;

  /**
   * Maximum date (ISO format YYYY-MM-DD)
   */
  max?: string;

  /**
   * Change handler
   */
  onChange?: (value: string) => void;
}

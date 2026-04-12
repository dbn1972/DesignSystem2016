/**
 * DatePicker Component Types
 * Date input using native HTML5 date input
 */

import { InputHTMLAttributes } from 'react';
import { FormFieldProps, ComponentSize } from '../../types/common';

export interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    FormFieldProps {
  /**
   * Input size
   * @default 'md'
   */
  size?: ComponentSize;

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

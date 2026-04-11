import { SelectHTMLAttributes } from 'react';
import { FormFieldProps, ChildrenProp } from '../../types/common';

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    FormFieldProps,
    ChildrenProp {
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;

  /**
   * Select size variant
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether to show full width
   * @default false
   */
  fullWidth?: boolean;
}

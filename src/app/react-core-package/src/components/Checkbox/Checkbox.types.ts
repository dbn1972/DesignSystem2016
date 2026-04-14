import { InputHTMLAttributes, ChangeEvent } from 'react';
import { FormFieldProps, ChildrenProp } from '../../types/common';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'aria-invalid' | 'aria-required'>,
    FormFieldProps,
    ChildrenProp {
  /**
   * Checkbox label text
   */
  label?: string;

  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;

  /**
   * Default checked state for uncontrolled component
   */
  defaultChecked?: boolean;

  /**
   * Indeterminate state (for "select all" scenarios)
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Change handler
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

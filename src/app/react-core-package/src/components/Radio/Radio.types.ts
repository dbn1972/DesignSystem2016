import { InputHTMLAttributes } from 'react';
import { FormFieldProps, ChildrenProp } from '../../types/common';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    FormFieldProps,
    ChildrenProp {
  /**
   * Radio label text
   */
  label?: string;

  /**
   * Radio value
   */
  value: string;

  /**
   * Whether the radio is checked
   */
  checked?: boolean;

  /**
   * Default checked state for uncontrolled component
   */
  defaultChecked?: boolean;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

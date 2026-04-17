import { InputHTMLAttributes, ChangeEvent } from 'react';
import { FormFieldProps, ChildrenProp, ComponentSize } from '../../types/common';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'aria-invalid' | 'aria-required'>,
    FormFieldProps,
    ChildrenProp {
  /** Switch label text */
  label?: string;

  /** Whether the switch is on */
  checked?: boolean;

  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean;

  /** Size variant */
  size?: ComponentSize;

  /** Change handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

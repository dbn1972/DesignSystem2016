import { InputHTMLAttributes } from 'react';
import { FormFieldProps } from '../../types/common';

export interface AadhaarInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'aria-invalid' | 'aria-required' | 'onChange' | 'value'>,
    FormFieldProps {
  /** Label text */
  label?: string;

  /** Current value (12 digits, formatted as XXXX XXXX XXXX) */
  value?: string;

  /** Called with raw 12-digit string */
  onChange?: (value: string) => void;

  /** Hint text below input */
  hint?: string;

  /** Error message */
  errorText?: string;
}

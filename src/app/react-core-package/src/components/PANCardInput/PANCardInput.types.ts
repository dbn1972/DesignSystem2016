import { InputHTMLAttributes } from 'react';
import { FormFieldProps } from '../../types/common';

export interface PANCardInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'aria-invalid' | 'aria-required' | 'onChange' | 'value'>,
    FormFieldProps {
  label?: string;
  /** Current value (e.g. "ABCDE1234F") */
  value?: string;
  /** Called with uppercase PAN string */
  onChange?: (value: string) => void;
  hint?: string;
  errorText?: string;
}

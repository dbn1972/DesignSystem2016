import { InputHTMLAttributes } from 'react';
import { FormFieldProps, ComponentSize } from '../../types/common';

export interface SliderProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'aria-invalid' | 'aria-required' | 'onChange'
  >,
  FormFieldProps {
  /** Current value (controlled) */
  value?: number;

  /** Default value (uncontrolled) */
  defaultValue?: number;

  /** Minimum value */
  min?: number;

  /** Maximum value */
  max?: number;

  /** Step increment */
  step?: number;

  /** Size variant */
  size?: ComponentSize;

  /** Accessible label */
  label?: string;

  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

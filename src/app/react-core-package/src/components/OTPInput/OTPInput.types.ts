/**
 * OTPInput Component Types
 * OTP code input field
 */

import { BaseComponentProps, ControlledValueProps, FormFieldProps } from '../../types/common';

export interface OTPInputProps
  extends BaseComponentProps,
    Omit<ControlledValueProps<string>, 'onChange'>,
    Omit<FormFieldProps, 'error'> {
  /**
   * Number of OTP digits
   * @default 6
   */
  length?: number;

  /**
   * Change handler
   */
  onChange?: (value: string) => void;

  /**
   * Complete handler (called when all digits are entered)
   */
  onComplete?: (value: string) => void;

  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'number' | 'tel';

  /**
   * Auto focus first input
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Error state
   * @default false
   */
  error?: boolean;
}

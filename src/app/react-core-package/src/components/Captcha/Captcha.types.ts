import { BaseComponentProps } from '../../types/common';
export interface CaptchaProps extends BaseComponentProps {
  /** Called with the entered captcha value */
  onVerify: (value: string) => void;
  /** Length of captcha code */
  length?: number;
  /** Error message */
  errorText?: string;
  /** Label */
  label?: string;
}

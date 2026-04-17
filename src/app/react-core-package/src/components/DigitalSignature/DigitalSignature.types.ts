import { BaseComponentProps } from '../../types/common';

export interface DigitalSignatureProps extends BaseComponentProps {
  /** Called with the canvas data URL after signing */
  onSign?: (dataUrl: string) => void;

  /** Called when the signature is cleared */
  onClear?: () => void;

  /** Canvas width in pixels */
  width?: number;

  /** Canvas height in pixels */
  height?: number;

  /** Accessible label for the signature pad */
  label?: string;

  /** Whether the signature pad is disabled */
  disabled?: boolean;
}

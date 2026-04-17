import { BaseComponentProps } from '../../types/common';

export interface QRCodeProps extends BaseComponentProps {
  /** Data to encode */
  value: string;
  /** Size in pixels */
  size?: number;
  /** Foreground color */
  fgColor?: string;
  /** Background color */
  bgColor?: string;
  /** Accessible label */
  label?: string;
}

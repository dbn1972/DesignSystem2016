import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface SpacerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  /** Fixed size in pixels or CSS value */
  size?: number | string;
  /** Axis */
  axis?: 'horizontal' | 'vertical';
}

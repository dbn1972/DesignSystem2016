import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  /** Ratio as number (e.g. 16/9 = 1.777) or string "16/9" */
  ratio?: number | string;
}

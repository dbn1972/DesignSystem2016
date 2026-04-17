import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface CenterProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  /** Minimum height */
  minHeight?: string | number;
  /** Center inline (horizontal only) */
  inline?: boolean;
}

import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface StackProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  /** Direction */
  direction?: 'vertical' | 'horizontal';
  /** Gap in pixels or CSS value */
  gap?: number | string;
  /** Alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Wrap items */
  wrap?: boolean;
}

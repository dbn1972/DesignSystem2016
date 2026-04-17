import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface GridProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  columns?: number | string;
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  align?: 'start' | 'center' | 'end' | 'stretch';
}

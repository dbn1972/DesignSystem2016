import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface SectionProps extends HTMLAttributes<HTMLElement>, BaseComponentProps {
  children: ReactNode;
  title?: string;
  description?: string;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

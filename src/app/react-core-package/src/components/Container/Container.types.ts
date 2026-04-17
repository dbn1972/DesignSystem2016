import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: ReactNode;
  /** Max width */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Center content */
  centered?: boolean;
  /** Horizontal padding */
  padding?: boolean;
}

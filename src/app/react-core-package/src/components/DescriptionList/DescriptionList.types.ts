import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface DescriptionItem { term: string; description: ReactNode; }

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement>, BaseComponentProps {
  items: DescriptionItem[];
  /** Layout */
  layout?: 'vertical' | 'horizontal';
  /** Striped rows */
  striped?: boolean;
}

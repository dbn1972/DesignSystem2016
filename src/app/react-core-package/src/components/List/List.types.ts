import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface ListItem {
  key: string;
  primary: ReactNode;
  secondary?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export interface ListProps extends HTMLAttributes<HTMLUListElement>, BaseComponentProps {
  items: ListItem[];
  /** Dividers between items */
  dividers?: boolean;
  /** Ordered list */
  ordered?: boolean;
  /** Empty state message */
  emptyMessage?: string;
}

import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface DividerProps extends HTMLAttributes<HTMLHRElement>, BaseComponentProps {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Label text in the middle */
  label?: string;
  /** Spacing around divider */
  spacing?: 'sm' | 'md' | 'lg';
}

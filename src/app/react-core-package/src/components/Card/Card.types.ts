import { HTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Card variant
   * @default 'elevated'
   */
  variant?: 'elevated' | 'outlined' | 'filled';

  /**
   * Whether the card is clickable/interactive
   * @default false
   */
  clickable?: boolean;

  /**
   * Padding size
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

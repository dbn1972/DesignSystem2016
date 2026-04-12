import { HTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp, StatusVariant } from '../../types/common';

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Badge variant/color
   * @default 'info'
   */
  variant?: StatusVariant | 'neutral';

  /**
   * Badge size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether to show a dot indicator
   * @default false
   */
  dot?: boolean;
}

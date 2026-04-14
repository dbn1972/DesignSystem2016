/**
 * Button Component Types
 * Primary interactive element for actions
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  ComponentSize,
  InteractiveComponentProps,
  LoadingStateProps,
  ChildrenProp
} from '../../types/common';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    InteractiveComponentProps,
    LoadingStateProps,
    ChildrenProp {
  /**
   * Button visual variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';

  /**
   * Button size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Render as full width button
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Icon to display before text
   */
  iconBefore?: ReactNode;

  /**
   * Icon to display after text
   */
  iconAfter?: ReactNode;

  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

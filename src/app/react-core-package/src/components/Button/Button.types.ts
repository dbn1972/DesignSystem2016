/**
 * Button Component Types
 * Primary interactive element for actions
 */

import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import {
  ComponentSize,
  InteractiveComponentProps,
  LoadingStateProps,
  ChildrenProp
} from '../../types/common';

/**
 * Canonical button variants aligned with the UX4G component contract.
 * `destructive` replaces the legacy `danger` alias.
 * `ghost` is the transparent, low-emphasis variant.
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'destructive'
  | 'ghost'
  | 'success'
  | 'danger'; // legacy alias → maps to destructive

export interface ButtonOwnProps {
  /**
   * Button visual variant.
   * Canonical names: primary, secondary, tertiary, destructive, ghost, success.
   * `danger` is accepted as a legacy alias for `destructive`.
   * @default 'primary'
   */
  variant?: ButtonVariant;

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
   * Button type attribute (ignored when `as` renders a non-button element)
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Polymorphic element type.
   * Pass `"a"` to render as a link, or a React Router `Link` component.
   * @default 'button'
   */
  as?: ElementType;
}

/**
 * Full ButtonProps — combines own props with native HTML button attributes,
 * interactive state props, and loading state props.
 * When `as` is set to a non-button element (e.g. "a"), extra HTML attributes
 * like `href` are passed through via the rest spread.
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    InteractiveComponentProps,
    LoadingStateProps,
    ChildrenProp,
    ButtonOwnProps {
  /** Link href — used when as="a" */
  href?: string;
  /** Link target — used when as="a" */
  target?: string;
  /** Link rel — used when as="a" */
  rel?: string;
}

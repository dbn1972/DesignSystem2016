/**
 * Label Component
 * Form field label with required indicator support
 */

import React, { forwardRef, LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Whether to show required indicator (*)
   * @default false
   */
  required?: boolean;

  /**
   * Whether the label is disabled
   * @default false
   */
  disabled?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      className,
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          'ux4g-label',
          required && 'ux4g-label-required',
          disabled && 'ux4g-label-disabled',
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

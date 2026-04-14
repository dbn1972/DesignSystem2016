/**
 * Label Component
 * Form field label with required indicator support
 */

import { forwardRef, LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';
import { useFieldContext } from '../Field/Field.context';

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
      htmlFor,
      id,
      ...props
    },
    ref
  ) => {
    const field = useFieldContext();
    const resolvedRequired = required || field?.required || false;
    const resolvedDisabled = disabled || field?.disabled || false;

    return (
      <label
        ref={ref}
        id={id ?? field?.labelId}
        htmlFor={htmlFor ?? field?.inputId}
        className={cn(
          'ux4g-label',
          resolvedRequired && 'ux4g-label-required',
          resolvedDisabled && 'ux4g-label-disabled',
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

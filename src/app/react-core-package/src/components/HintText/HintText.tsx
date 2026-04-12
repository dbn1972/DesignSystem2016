/**
 * HintText Component
 * Helper text displayed below form fields
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';
import { useFieldContext } from '../Field/Field.context';

export interface HintTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}

export const HintText = forwardRef<HTMLSpanElement, HintTextProps>(
  ({ children, className, id, ...props }, ref) => {
    const field = useFieldContext();

    return (
      <span
        ref={ref}
        id={id ?? field?.hintId}
        className={cn('ux4g-helper-text', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

HintText.displayName = 'HintText';

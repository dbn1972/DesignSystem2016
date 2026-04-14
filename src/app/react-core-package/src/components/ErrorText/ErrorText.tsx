/**
 * ErrorText Component
 * Error message text displayed below form fields
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';
import { useFieldContext } from '../Field/Field.context';

export interface ErrorTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}

export const ErrorText = forwardRef<HTMLSpanElement, ErrorTextProps>(
  ({ children, className, id, ...props }, ref) => {
    const field = useFieldContext();

    return (
      <span
        ref={ref}
        id={id ?? field?.errorId}
        className={cn('ux4g-error-message', className)}
        role="alert"
        {...props}
      >
        {children}
      </span>
    );
  }
);

ErrorText.displayName = 'ErrorText';

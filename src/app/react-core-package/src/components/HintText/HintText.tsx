/**
 * HintText Component
 * Helper text displayed below form fields
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface HintTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}

export const HintText = forwardRef<HTMLSpanElement, HintTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('ux4g-helper-text', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

HintText.displayName = 'HintText';

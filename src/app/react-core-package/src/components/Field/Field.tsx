/**
 * Field Component
 * Container for form field composition (Label + Input + HintText/ErrorText)
 *
 * @example
 * ```tsx
 * <Field error={!!errors.email}>
 *   <Label htmlFor="email" required>Email</Label>
 *   <Input id="email" type="email" error={!!errors.email} />
 *   {errors.email && <ErrorText>{errors.email}</ErrorText>}
 *   {!errors.email && <HintText>We'll never share your email</HintText>}
 * </Field>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { FieldProps } from './Field.types';

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      className,
      error = false,
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-form-group',
          error && 'ux4g-form-group-error',
          disabled && 'ux4g-form-group-disabled',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Field.displayName = 'Field';

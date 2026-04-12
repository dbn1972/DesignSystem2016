/**
 * DatePicker Component
 * Date input using native HTML5 date input
 *
 * @example
 * ```tsx
 * <DatePicker
 *   value={date}
 *   onChange={(value) => setDate(value)}
 *   min="2024-01-01"
 *   max="2024-12-31"
 * />
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      size = 'md',
      disabled = false,
      error = false,
      readOnly = false,
      required = false,
      className,
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <input
        ref={ref}
        type="date"
        className={cn(
          'ux4g-input',
          'ux4g-datepicker',
          `ux4g-input-${size}`,
          error && 'ux4g-input-error',
          disabled && 'ux4g-input-disabled',
          readOnly && 'ux4g-input-readonly',
          className
        )}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        aria-invalid={error}
        aria-required={required}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';

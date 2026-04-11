/**
 * Select Component
 * Accessible dropdown select input with error state support
 *
 * @example
 * ```tsx
 * <Select id="state" placeholder="Select a state">
 *   <option value="maharashtra">Maharashtra</option>
 *   <option value="karnataka">Karnataka</option>
 * </Select>
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      children,
      className,
      placeholder,
      disabled = false,
      required = false,
      error = false,
      size = 'md',
      fullWidth = false,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        id={id}
        name={name}
        className={cn(
          'ux4g-select',
          `ux4g-select-${size}`,
          disabled && 'ux4g-select-disabled',
          error && 'ux4g-select-error',
          fullWidth && 'ux4g-select-fullwidth',
          className
        )}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || error}
        aria-required={required}
        {...props}
      >
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

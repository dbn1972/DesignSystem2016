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
import { useFieldContext } from '../Field/Field.context';

function mergeDescribedBy(...values: Array<string | undefined>): string | undefined {
  const merged = values
    .flatMap((value) => (value ? value.split(' ') : []))
    .filter(Boolean);

  return merged.length > 0 ? Array.from(new Set(merged)).join(' ') : undefined;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      children,
      className,
      placeholder,
      disabled,
      required,
      error,
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
    const field = useFieldContext();
    const resolvedId = id ?? field?.inputId;
    const resolvedDisabled = disabled ?? field?.disabled ?? false;
    const resolvedRequired = required ?? field?.required ?? false;
    const resolvedError = error ?? field?.invalid ?? false;
    const resolvedDescribedBy = mergeDescribedBy(ariaDescribedBy, field?.describedBy);

    return (
      <select
        ref={ref}
        id={resolvedId}
        name={name}
        className={cn(
          'ux4g-select',
          `ux4g-select-${size}`,
          resolvedDisabled && 'ux4g-select-disabled',
          resolvedError && 'ux4g-select-error',
          fullWidth && 'ux4g-select-fullwidth',
          className
        )}
        disabled={resolvedDisabled}
        required={resolvedRequired}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={resolvedDescribedBy}
        aria-invalid={ariaInvalid ?? resolvedError}
        aria-required={resolvedRequired}
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

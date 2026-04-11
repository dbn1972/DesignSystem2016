/**
 * Checkbox Component
 * Accessible checkbox input with label and error state support
 *
 * @example
 * ```tsx
 * <Checkbox
 *   id="terms"
 *   label="I accept the terms and conditions"
 *   required
 * />
 * ```
 */

import React, { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      children,
      className,
      disabled = false,
      required = false,
      error = false,
      checked,
      defaultChecked,
      indeterminate = false,
      onChange,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Handle indeterminate state (can't be set via HTML attribute)
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // Combine refs
    const setRefs = (element: HTMLInputElement | null) => {
      inputRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const labelText = label || children;

    return (
      <div
        className={cn(
          'ux4g-checkbox-wrapper',
          disabled && 'ux4g-checkbox-wrapper-disabled',
          error && 'ux4g-checkbox-wrapper-error',
          className
        )}
      >
        <input
          ref={setRefs}
          type="checkbox"
          id={id}
          name={name}
          className="ux4g-checkbox"
          disabled={disabled}
          required={required}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          aria-label={ariaLabel || (typeof labelText === 'string' ? labelText : undefined)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid || error}
          aria-required={required}
          {...props}
        />
        {labelText && (
          <label
            htmlFor={id}
            className={cn(
              'ux4g-checkbox-label',
              disabled && 'ux4g-checkbox-label-disabled',
              error && 'ux4g-checkbox-label-error'
            )}
          >
            {labelText}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

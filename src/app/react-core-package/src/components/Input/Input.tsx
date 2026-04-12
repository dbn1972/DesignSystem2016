/**
 * Input Component
 * Text input field for form data entry
 *
 * @example
 * ```tsx
 * <Input
 *   id="email"
 *   type="email"
 *   value={email}
 *   onChange={setEmail}
 *   required
 *   error={!!errors.email}
 * />
 * ```
 */

import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { InputProps } from './Input.types';
import { useFieldContext } from '../Field/Field.context';

function mergeDescribedBy(...values: Array<string | undefined>): string | undefined {
  const merged = values
    .flatMap((value) => (value ? value.split(' ') : []))
    .filter(Boolean);

  return merged.length > 0 ? Array.from(new Set(merged)).join(' ') : undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      className,
      size = 'md',
      type = 'text',
      disabled,
      readOnly = false,
      required,
      error,
      fullWidth = false,
      iconBefore,
      iconAfter,
      value,
      defaultValue,
      onChange,
      'aria-invalid': ariaInvalid,
      'aria-required': ariaRequired,
      ...props
    },
    ref
  ) => {
    const field = useFieldContext();
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const resolvedId = id ?? field?.inputId;
    const resolvedDisabled = disabled ?? field?.disabled ?? false;
    const resolvedRequired = required ?? field?.required ?? false;
    const resolvedError = error ?? field?.invalid ?? false;
    const resolvedDescribedBy = mergeDescribedBy(props['aria-describedby'], field?.describedBy);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(newValue);
    };

    const hasIcon = iconBefore || iconAfter;

    return (
      <div
        className={cn(
          'ux4g-input-wrapper',
          fullWidth && 'ux4g-w-full',
          hasIcon && 'ux4g-input-icon-wrapper'
        )}
      >
        {iconBefore && (
          <span className="ux4g-input-icon ux4g-input-icon-before" aria-hidden="true">
            {iconBefore}
          </span>
        )}
        <input
          ref={ref}
          id={resolvedId}
          type={type}
          className={cn(
            'ux4g-input',
            `ux4g-input-${size}`,
            resolvedError && 'ux4g-input-error',
            resolvedDisabled && 'ux4g-input-disabled',
            readOnly && 'ux4g-input-readonly',
            iconBefore && 'ux4g-input-has-icon-before',
            iconAfter && 'ux4g-input-has-icon-after',
            className
          )}
          value={currentValue}
          onChange={handleChange}
          disabled={resolvedDisabled}
          readOnly={readOnly}
          required={resolvedRequired}
          aria-describedby={resolvedDescribedBy}
          aria-invalid={ariaInvalid ?? resolvedError}
          aria-required={ariaRequired ?? resolvedRequired}
          {...props}
        />
        {iconAfter && (
          <span className="ux4g-input-icon ux4g-input-icon-after" aria-hidden="true">
            {iconAfter}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

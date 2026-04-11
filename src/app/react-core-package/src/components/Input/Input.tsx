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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      type = 'text',
      disabled = false,
      readOnly = false,
      required = false,
      error = false,
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
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

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
          type={type}
          className={cn(
            'ux4g-input',
            `ux4g-input-${size}`,
            error && 'ux4g-input-error',
            disabled && 'ux4g-input-disabled',
            readOnly && 'ux4g-input-readonly',
            iconBefore && 'ux4g-input-has-icon-before',
            iconAfter && 'ux4g-input-has-icon-after',
            className
          )}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={ariaInvalid ?? error}
          aria-required={ariaRequired ?? required}
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

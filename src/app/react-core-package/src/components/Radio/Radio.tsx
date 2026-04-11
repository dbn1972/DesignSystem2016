/**
 * Radio Component
 * Accessible radio button input with label and error state support
 *
 * @example
 * ```tsx
 * <Radio
 *   id="option1"
 *   name="choice"
 *   value="option1"
 *   label="Option 1"
 * />
 * ```
 */

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { RadioProps } from './Radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      value,
      label,
      children,
      className,
      disabled = false,
      required = false,
      error = false,
      checked,
      defaultChecked,
      onChange,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const labelText = label || children;

    return (
      <div
        className={cn(
          'ux4g-radio-wrapper',
          disabled && 'ux4g-radio-wrapper-disabled',
          error && 'ux4g-radio-wrapper-error',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          className="ux4g-radio"
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
              'ux4g-radio-label',
              disabled && 'ux4g-radio-label-disabled',
              error && 'ux4g-radio-label-error'
            )}
          >
            {labelText}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

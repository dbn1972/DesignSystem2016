/**
 * Dropdown Component
 * Enhanced select with label, hint, error, and size support.
 *
 * @example
 * ```tsx
 * <Dropdown
 *   id="state"
 *   label="State"
 *   options={[{ value: 'DL', label: 'Delhi' }, { value: 'MH', label: 'Maharashtra' }]}
 *   value={state}
 *   onChange={setState}
 * />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DropdownProps } from './Dropdown.types';

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-4 py-3.5 text-lg',
};

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      id,
      name,
      label,
      options,
      value,
      placeholder = 'Select an option',
      onChange,
      size = 'md',
      disabled = false,
      required = false,
      error = false,
      errorText,
      hint,
      className,
      ...props
    },
    ref
  ) => {
    const resolvedError = error || !!errorText;
    const hintId = id ? `${id}-hint` : undefined;
    const errorId = id ? `${id}-error` : undefined;
    const describedBy = [hint ? hintId : undefined, errorText ? errorId : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={cn('ux4g-dropdown', className)} {...props}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'ux4g-dropdown-label block text-sm font-medium text-foreground mb-1',
              disabled && 'text-muted-foreground'
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          required={required}
          aria-invalid={resolvedError}
          aria-required={required}
          aria-describedby={describedBy}
          className={cn(
            'ux4g-dropdown-select',
            'w-full border rounded-lg bg-background text-foreground appearance-none',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            resolvedError ? 'border-destructive' : 'border-border',
            disabled && 'opacity-50 cursor-not-allowed bg-muted',
            sizeClasses[size]
          )}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        {hint && !errorText && (
          <p id={hintId} className="ux4g-dropdown-hint text-sm text-muted-foreground mt-1">{hint}</p>
        )}
        {errorText && (
          <p id={errorId} role="alert" className="ux4g-dropdown-error text-sm text-destructive mt-1">{errorText}</p>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

/**
 * PANCardInput Component
 * Indian PAN card number input with format validation (AAAAA9999A).
 *
 * @example
 * ```tsx
 * <PANCardInput id="pan" label="PAN Number" value={pan} onChange={setPan} />
 * ```
 */

import { forwardRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { PANCardInputProps } from './PANCardInput.types';

/** Validate PAN format: 5 letters + 4 digits + 1 letter */
export function isValidPAN(value: string): boolean {
  return /^[A-Z]{5}\d{4}[A-Z]$/.test(value.toUpperCase().trim());
}

export const PANCardInput = forwardRef<HTMLInputElement, PANCardInputProps>(
  (
    {
      id,
      name,
      label = 'PAN Card Number',
      value = '',
      onChange,
      hint,
      errorText,
      error,
      disabled,
      required,
      className,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const resolvedError = error || !!errorText;
    const hintId = id ? `${id}-hint` : undefined;
    const errorId = id ? `${id}-error` : undefined;
    const describedBy = [ariaDescribedBy, hint ? hintId : undefined, errorText ? errorId : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
        onChange?.(raw);
      },
      [onChange]
    );

    return (
      <div className={cn('ux4g-pan-input', className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'ux4g-pan-input-label block text-sm font-medium text-foreground mb-1',
              disabled && 'text-muted-foreground'
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type="text"
          id={id}
          name={name}
          value={value.toUpperCase()}
          onChange={handleChange}
          placeholder="ABCDE1234F"
          maxLength={10}
          disabled={disabled}
          required={required}
          autoCapitalize="characters"
          aria-label={label || 'PAN Card Number'}
          aria-invalid={resolvedError}
          aria-required={required}
          aria-describedby={describedBy}
          className={cn(
            'ux4g-pan-input-field',
            'w-full px-4 py-3 border rounded-lg text-lg tracking-widest font-mono uppercase',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            resolvedError ? 'border-destructive focus-visible:ring-destructive' : 'border-border',
            disabled && 'opacity-50 cursor-not-allowed bg-muted'
          )}
          {...props}
        />
        {hint && !errorText && (
          <p id={hintId} className="ux4g-pan-input-hint text-sm text-muted-foreground mt-1">{hint}</p>
        )}
        {errorText && (
          <p id={errorId} role="alert" className="ux4g-pan-input-error text-sm text-destructive mt-1">{errorText}</p>
        )}
      </div>
    );
  }
);

PANCardInput.displayName = 'PANCardInput';

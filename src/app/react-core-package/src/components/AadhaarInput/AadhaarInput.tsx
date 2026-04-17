/**
 * AadhaarInput Component
 * Formatted 12-digit Aadhaar number input with validation.
 * Auto-formats as XXXX XXXX XXXX.
 *
 * @example
 * ```tsx
 * <AadhaarInput label="Aadhaar Number" value={aadhaar} onChange={setAadhaar} />
 * ```
 */

import { forwardRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { AadhaarInputProps } from './AadhaarInput.types';

/** Format raw digits to XXXX XXXX XXXX */
function formatAadhaar(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 12);
  const parts = [digits.slice(0, 4), digits.slice(4, 8), digits.slice(8, 12)].filter(Boolean);
  return parts.join(' ');
}

/** Validate Aadhaar: 12 digits, first digit not 0 or 1 */
export function isValidAadhaar(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length === 12 && /^[2-9]\d{11}$/.test(digits);
}

export const AadhaarInput = forwardRef<HTMLInputElement, AadhaarInputProps>(
  (
    {
      id,
      name,
      label = 'Aadhaar Number',
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
    const formatted = formatAadhaar(value);
    const resolvedError = error || !!errorText;
    const hintId = id ? `${id}-hint` : undefined;
    const errorId = id ? `${id}-error` : undefined;
    const describedBy = [ariaDescribedBy, hint ? hintId : undefined, errorText ? errorId : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, '').slice(0, 12);
        onChange?.(raw);
      },
      [onChange]
    );

    return (
      <div className={cn('ux4g-aadhaar-input', className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'ux4g-aadhaar-input-label block text-sm font-medium text-foreground mb-1',
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
          inputMode="numeric"
          id={id}
          name={name}
          value={formatted}
          onChange={handleChange}
          placeholder="XXXX XXXX XXXX"
          maxLength={14}
          disabled={disabled}
          required={required}
          aria-label={label || 'Aadhaar Number'}
          aria-invalid={resolvedError}
          aria-required={required}
          aria-describedby={describedBy}
          className={cn(
            'ux4g-aadhaar-input-field',
            'w-full px-4 py-3 border rounded-lg text-lg tracking-widest font-mono',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            resolvedError
              ? 'border-destructive focus-visible:ring-destructive'
              : 'border-border',
            disabled && 'opacity-50 cursor-not-allowed bg-muted'
          )}
          {...props}
        />
        {hint && !errorText && (
          <p id={hintId} className="ux4g-aadhaar-input-hint text-sm text-muted-foreground mt-1">
            {hint}
          </p>
        )}
        {errorText && (
          <p id={errorId} role="alert" className="ux4g-aadhaar-input-error text-sm text-destructive mt-1">
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

AadhaarInput.displayName = 'AadhaarInput';

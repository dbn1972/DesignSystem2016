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

import { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { CheckboxProps } from './Checkbox.types';
import { useFieldContext } from '../Field/Field.context';

function mergeDescribedBy(...values: Array<string | undefined>): string | undefined {
  const merged = values
    .flatMap((value) => (value ? value.split(' ') : []))
    .filter(Boolean);

  return merged.length > 0 ? Array.from(new Set(merged)).join(' ') : undefined;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      children,
      className,
      disabled = false,
      required,
      error,
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
    const field = useFieldContext();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const resolvedId = id ?? field?.inputId;
    const resolvedDisabled = disabled || field?.disabled || false;
    const resolvedRequired = required ?? field?.required ?? false;
    const resolvedError = error ?? field?.invalid ?? false;
    const resolvedDescribedBy = mergeDescribedBy(ariaDescribedBy, field?.describedBy);

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
          id={resolvedId}
          name={name}
          className="ux4g-checkbox"
          disabled={resolvedDisabled}
          required={resolvedRequired}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          aria-label={ariaLabel || (typeof labelText === 'string' ? labelText : undefined)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={resolvedDescribedBy}
          aria-invalid={ariaInvalid ?? resolvedError}
          aria-required={resolvedRequired}
          {...props}
        />
        {labelText && (
          <label
            htmlFor={resolvedId}
            className={cn(
              'ux4g-checkbox-label',
              resolvedDisabled && 'ux4g-checkbox-label-disabled',
              resolvedError && 'ux4g-checkbox-label-error'
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

/**
 * Textarea Component
 * Accessible multi-line text input with error state support
 *
 * @example
 * ```tsx
 * <Textarea
 *   id="description"
 *   placeholder="Enter description"
 *   rows={4}
 * />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { TextareaProps } from './Textarea.types';
import { useFieldContext } from '../Field/Field.context';

function mergeDescribedBy(...values: Array<string | undefined>): string | undefined {
  const merged = values
    .flatMap((value) => (value ? value.split(' ') : []))
    .filter(Boolean);

  return merged.length > 0 ? Array.from(new Set(merged)).join(' ') : undefined;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      name,
      className,
      placeholder,
      disabled,
      required,
      error,
      readOnly = false,
      size = 'md',
      fullWidth = false,
      resize = true,
      rows = 4,
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
      <textarea
        ref={ref}
        id={resolvedId}
        name={name}
        className={cn(
          'ux4g-textarea',
          `ux4g-textarea-${size}`,
          resolvedDisabled && 'ux4g-textarea-disabled',
          resolvedError && 'ux4g-textarea-error',
          readOnly && 'ux4g-textarea-readonly',
          fullWidth && 'ux4g-textarea-fullwidth',
          !resize && 'ux4g-textarea-noresize',
          className
        )}
        placeholder={placeholder}
        disabled={resolvedDisabled}
        required={resolvedRequired}
        readOnly={readOnly}
        rows={rows}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={resolvedDescribedBy}
        aria-invalid={ariaInvalid ?? resolvedError}
        aria-required={resolvedRequired}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

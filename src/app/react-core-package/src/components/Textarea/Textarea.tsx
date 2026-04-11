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

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      name,
      className,
      placeholder,
      disabled = false,
      required = false,
      error = false,
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
    return (
      <textarea
        ref={ref}
        id={id}
        name={name}
        className={cn(
          'ux4g-textarea',
          `ux4g-textarea-${size}`,
          disabled && 'ux4g-textarea-disabled',
          error && 'ux4g-textarea-error',
          readOnly && 'ux4g-textarea-readonly',
          fullWidth && 'ux4g-textarea-fullwidth',
          !resize && 'ux4g-textarea-noresize',
          className
        )}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        rows={rows}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || error}
        aria-required={required}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

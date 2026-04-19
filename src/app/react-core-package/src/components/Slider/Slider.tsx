/**
 * Slider Component
 * Accessible range input with label, size variants, and disabled state support.
 *
 * @example
 * ```tsx
 * <Slider label="Volume" min={0} max={100} defaultValue={50} />
 * <Slider label="Brightness" value={brightness} onChange={handleChange} />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SliderProps } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      id,
      name,
      label,
      className,
      disabled = false,
      required,
      error,
      value,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      size = 'md',
      onChange,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const resolvedError = error ?? false;

    return (
      <div
        className={cn(
          'ux4g-slider-wrapper',
          'flex flex-col gap-1',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'ux4g-slider-label',
              'text-sm font-medium text-foreground',
              disabled && 'text-muted-foreground',
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="range"
          role="slider"
          id={id}
          name={name}
          className={cn(
            'ux4g-slider',
            'w-full cursor-pointer',
            size === 'sm' && 'h-1',
            size === 'md' && 'h-2',
            size === 'lg' && 'h-3',
            disabled && 'cursor-not-allowed',
            resolvedError && 'accent-destructive',
          )}
          disabled={disabled}
          required={required}
          value={value}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          aria-label={ariaLabel || (label ? undefined : undefined)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid ?? resolvedError}
          aria-required={required}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value ?? defaultValue}
          {...props}
        />
      </div>
    );
  },
);

Slider.displayName = 'Slider';

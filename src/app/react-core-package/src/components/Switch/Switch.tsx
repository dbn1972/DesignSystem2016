/**
 * Switch Component
 * Accessible toggle switch with label, size variants, and error state support.
 *
 * @example
 * ```tsx
 * <Switch id="notifications" label="Enable notifications" />
 * <Switch checked={on} onChange={e => setOn(e.target.checked)} size="lg" />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SwitchProps } from './Switch.types';

const sizeMap = {
  sm: { track: 'h-5 w-9', thumb: 'h-4 w-4', translate: 'translate-x-4', offset: 'left-0.5 top-0.5' },
  md: { track: 'h-6 w-11', thumb: 'h-5 w-5', translate: 'translate-x-5', offset: 'left-0.5 top-0.5' },
  lg: { track: 'h-7 w-14', thumb: 'h-6 w-6', translate: 'translate-x-7', offset: 'left-0.5 top-0.5' },
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
      size = 'md',
      onChange,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const s = sizeMap[size];
    const labelText = label || children;
    const resolvedError = error ?? false;

    return (
      <label
        className={cn(
          'ux4g-switch-wrapper',
          'inline-flex items-center gap-3 cursor-pointer',
          disabled && 'ux4g-switch-wrapper-disabled opacity-50 cursor-not-allowed',
          resolvedError && 'ux4g-switch-wrapper-error',
          className
        )}
      >
        {/* Hidden native checkbox for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          name={name}
          className="sr-only peer"
          disabled={disabled}
          required={required}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          aria-label={ariaLabel || (typeof labelText === 'string' ? labelText : undefined)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid ?? resolvedError}
          aria-required={required}
          {...props}
        />

        {/* Visual track */}
        <span
          aria-hidden="true"
          className={cn(
            'ux4g-switch-track',
            'relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors',
            'bg-muted peer-checked:bg-primary',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2',
            resolvedError && 'bg-destructive/30 peer-checked:bg-destructive',
            s.track
          )}
        >
          {/* Thumb */}
          <span
            className={cn(
              'ux4g-switch-thumb',
              'pointer-events-none inline-block rounded-full bg-background shadow-sm transition-transform',
              'translate-x-0 peer-checked:' + s.translate,
              s.thumb
            )}
          />
        </span>

        {/* Label */}
        {labelText && (
          <span
            className={cn(
              'ux4g-switch-label',
              'text-sm font-medium text-foreground',
              disabled && 'ux4g-switch-label-disabled text-muted-foreground'
            )}
          >
            {labelText}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

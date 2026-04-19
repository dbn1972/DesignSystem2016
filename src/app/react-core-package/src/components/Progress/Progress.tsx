/**
 * Progress Component
 * Linear progress bars
 *
 * @example
 * ```tsx
 * <Progress value={75} variant="success" showLabel />
 * ```
 */

import { cn } from '../../utils/cn';
import { ProgressProps } from './Progress.types';

export function Progress({
  value,
  size = 'md',
  variant = 'info',
  showLabel = false,
  labelFormatter = (val) => `${val}%`,
  indeterminate = false,
  className,
  ...props
}: ProgressProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn('ux4g-progress-container', className)}
      {...props}
    >
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : normalizedValue}
        aria-label={indeterminate ? 'Loading' : `Progress: ${normalizedValue}%`}
        className={cn(
          'ux4g-progress',
          `ux4g-progress-${size}`,
          `ux4g-progress-${variant}`,
          indeterminate && 'ux4g-progress-indeterminate'
        )}
      >
        <div
          className="ux4g-progress-bar"
          style={indeterminate ? undefined : { width: `${normalizedValue}%` }}
        />
      </div>
      {showLabel && !indeterminate && (
        <div className="ux4g-progress-label">
          {labelFormatter(normalizedValue)}
        </div>
      )}
    </div>
  );
}

Progress.displayName = 'Progress';

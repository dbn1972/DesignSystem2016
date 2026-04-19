/**
 * Snackbar Component
 * Brief feedback messages at the bottom of the screen.
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SnackbarProps } from './Snackbar.types';

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ message, variant = 'info', action, onClose, className, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className={cn('ux4g-snackbar', `ux4g-snackbar-${variant}`, className)}
      {...props}
    >
      <span className="ux4g-snackbar-message">{message}</span>
      {action && (
        <button
          type="button"
          className="ux4g-snackbar-action"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          className="ux4g-snackbar-close"
          onClick={onClose}
          aria-label="Close snackbar"
        >
          ×
        </button>
      )}
    </div>
  )
);

Snackbar.displayName = 'Snackbar';

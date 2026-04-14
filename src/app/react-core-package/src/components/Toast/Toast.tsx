/**
 * Toast Component
 * Notification toasts
 *
 * @example
 * ```tsx
 * <Toast
 *   message="Application submitted successfully"
 *   variant="success"
 *   onClose={() => setShowToast(false)}
 * />
 * ```
 */

import { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { ToastProps } from './Toast.types';

export function Toast({
  message,
  variant = 'info',
  title,
  closable = true,
  duration = 5000,
  onClose,
  icon,
  action,
  className,
  ...props
}: ToastProps) {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const defaultIcons = {
    info: 'ℹ️',
    success: '✓',
    warning: '⚠️',
    error: '✕',
  };

  const displayIcon = icon ?? (defaultIcons as Record<string, string>)[variant];

  return (
    <div
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      className={cn('ux4g-toast', `ux4g-toast-${variant}`, className)}
      {...props}
    >
      {displayIcon && (
        <div className="ux4g-toast-icon" aria-hidden="true">
          {displayIcon}
        </div>
      )}
      <div className="ux4g-toast-content">
        {title && <div className="ux4g-toast-title">{title}</div>}
        <div className="ux4g-toast-message">{message}</div>
      </div>
      {action && (
        <button
          type="button"
          className="ux4g-toast-action"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      )}
      {closable && (
        <button
          type="button"
          className="ux4g-toast-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      )}
    </div>
  );
}

Toast.displayName = 'Toast';

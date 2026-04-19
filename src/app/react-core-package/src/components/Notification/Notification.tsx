/**
 * Notification Component
 * Persistent notification messages with optional dismiss action.
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { NotificationProps } from './Notification.types';

const defaultIcons: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      title,
      description,
      variant = 'info',
      icon,
      onDismiss,
      dismissLabel = 'Dismiss notification',
      className,
      ...props
    },
    ref
  ) => {
    const iconContent = icon ?? defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn('ux4g-notification', `ux4g-notification-${variant}`, className)}
        {...props}
      >
        {iconContent && (
          <div className="ux4g-notification-icon" aria-hidden="true">
            {iconContent}
          </div>
        )}
        <div className="ux4g-notification-content">
          <div className="ux4g-notification-title">{title}</div>
          {description && (
            <div className="ux4g-notification-description">{description}</div>
          )}
        </div>
        {onDismiss && (
          <button
            type="button"
            className="ux4g-notification-dismiss"
            onClick={onDismiss}
            aria-label={dismissLabel}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

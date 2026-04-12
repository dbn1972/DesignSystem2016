/**
 * Dialog Component
 * Modal dialogs with backdrop
 *
 * @example
 * ```tsx
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </Dialog>
 * ```
 */

import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { DialogProps } from './Dialog.types';

export function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  contentProps,
  backdropProps,
  className,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (open) {
      const previousActiveElement = document.activeElement as HTMLElement;
      dialogRef.current?.focus();

      return () => {
        previousActiveElement?.focus();
      };
    }
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="ux4g-dialog-backdrop"
      onClick={handleBackdropClick}
      {...backdropProps}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'dialog-title' : undefined}
        className={cn('ux4g-dialog', `ux4g-dialog-${size}`, className)}
        tabIndex={-1}
        {...contentProps}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="ux4g-dialog-header">
            {title && (
              <h2 id="dialog-title" className="ux4g-dialog-title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="ux4g-dialog-close"
                onClick={onClose}
                aria-label="Close dialog"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className="ux4g-dialog-body">{children}</div>

        {footer && <div className="ux4g-dialog-footer">{footer}</div>}
      </div>
    </div>
  );
}

Dialog.displayName = 'Dialog';

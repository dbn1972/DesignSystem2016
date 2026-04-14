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

import { useEffect, useId, useRef, MouseEvent } from 'react';
import { cn } from '../../utils/cn';
import { DialogProps } from './Dialog.types';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function Dialog({
  open,
  onClose,
  title,
  description,
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
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const bodyId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const focusInitialElement = () => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      const initialTarget = focusable[0] ?? dialog;
      initialTarget.focus();
    };

    focusInitialElement();

    const handleKeyDown = ( event: globalThis.KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((element) => !element.hasAttribute('disabled') && !element.getAttribute('aria-hidden'));

      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || active === dialog) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElementRef.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
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
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description || children ? descriptionId : undefined}
        className={cn('ux4g-dialog', `ux4g-dialog-${size}`, className)}
        tabIndex={-1}
        {...contentProps}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="ux4g-dialog-header">
            {title && (
              <h2 id={titleId} className="ux4g-dialog-title">
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

        {description ? (
          <div id={descriptionId} className="ux4g-dialog-description">
            {description}
          </div>
        ) : null}

        <div
          id={description ? bodyId : descriptionId}
          className="ux4g-dialog-body"
        >
          {children}
        </div>

        {footer && <div className="ux4g-dialog-footer">{footer}</div>}
      </div>
    </div>
  );
}

Dialog.displayName = 'Dialog';

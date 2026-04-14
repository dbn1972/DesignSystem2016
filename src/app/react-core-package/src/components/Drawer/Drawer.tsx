/**
 * Drawer Component
 * Slide-out side panels
 *
 * @example
 * ```tsx
 * <Drawer
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Filter Options"
 * >
 *   <FilterForm />
 * </Drawer>
 * ```
 */

import { useEffect, useRef, MouseEvent } from 'react';
import { cn } from '../../utils/cn';
import { DrawerProps } from './Drawer.types';

export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  placement = 'right',
  size = '400px',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  contentProps,
  backdropProps,
  className,
  ...props
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = ( event: globalThis.KeyboardEvent) => {
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
      drawerRef.current?.focus();

      return () => {
        previousActiveElement?.focus();
      };
    }
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  const sizeStyle =
    placement === 'left' || placement === 'right'
      ? { width: size }
      : { height: size };

  return (
    <div
      className="ux4g-drawer-backdrop"
      onClick={handleBackdropClick}
      {...backdropProps}
    >
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        className={cn('ux4g-drawer', `ux4g-drawer-${placement}`, className)}
        style={sizeStyle}
        tabIndex={-1}
        {...contentProps}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className="ux4g-drawer-header">
            {title && (
              <h2 id="drawer-title" className="ux4g-drawer-title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="ux4g-drawer-close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className="ux4g-drawer-body">{children}</div>

        {footer && <div className="ux4g-drawer-footer">{footer}</div>}
      </div>
    </div>
  );
}

Drawer.displayName = 'Drawer';

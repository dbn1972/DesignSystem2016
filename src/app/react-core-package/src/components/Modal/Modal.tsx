import { forwardRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { ModalProps } from './Modal.types';

const sizeMap = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl' };

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, open, onClose, title, description, size = 'md', closeOnOverlay = true, className, ...props }, ref) => {
    useEffect(() => {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div className="ux4g-modal-overlay fixed inset-0 z-50 flex items-center justify-center" role="presentation">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" onClick={closeOnOverlay ? onClose : undefined} />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          aria-describedby={description ? 'modal-desc' : undefined}
          className={cn('ux4g-modal relative z-10 w-full rounded-2xl bg-background border border-border shadow-xl p-6 mx-4', sizeMap[size], className)}
          {...props}
        >
          {title && (
            <div className="mb-4">
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              {description && <p id="modal-desc" className="text-sm text-muted-foreground mt-1">{description}</p>}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

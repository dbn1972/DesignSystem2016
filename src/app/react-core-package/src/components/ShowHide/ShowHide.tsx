import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { ShowHideProps } from './ShowHide.types';

export const ShowHide = forwardRef<HTMLDivElement, ShowHideProps>(
  ({ children, label, defaultOpen = false, open: controlledOpen, onToggle, className, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = controlledOpen ?? internalOpen;

    const toggle = () => {
      const next = !isOpen;
      setInternalOpen(next);
      onToggle?.(next);
    };

    return (
      <div ref={ref} className={cn('ux4g-show-hide', className)} {...props}>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          className="ux4g-show-hide-toggle flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span aria-hidden="true">{isOpen ? '▾' : '▸'}</span>
          {isOpen ? `Hide ${label}` : `Show ${label}`}
        </button>
        {isOpen && (
          <div className="ux4g-show-hide-content mt-3">
            {children}
          </div>
        )}
      </div>
    );
  }
);

ShowHide.displayName = 'ShowHide';

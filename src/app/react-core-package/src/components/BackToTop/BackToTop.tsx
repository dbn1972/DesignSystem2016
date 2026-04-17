import { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { BackToTopProps } from './BackToTop.types';

export const BackToTop = forwardRef<HTMLButtonElement, BackToTopProps>(
  ({ threshold = 300, label = 'Back to top', className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > threshold);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    if (!visible) return null;

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={label}
        className={cn(
          'ux4g-back-to-top fixed bottom-6 right-6 z-50',
          'h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg',
          'flex items-center justify-center',
          'hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'transition-opacity',
          className
        )}
        {...props}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    );
  }
);

BackToTop.displayName = 'BackToTop';

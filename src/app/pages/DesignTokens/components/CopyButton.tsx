import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

type CopyState = 'idle' | 'success' | 'error';

interface CopyButtonProps {
  /** Text to copy to clipboard */
  text: string;
  /** Accessible label (e.g., "Copy CSS variable --ux4g-color-saffron-500") */
  label: string;
  className?: string;
}

const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ text, label, className }, ref) => {
    const [copyState, setCopyState] = useState<CopyState>('idle');
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopyState('success');
      } catch {
        setCopyState('error');
      }

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCopyState('idle');
        timerRef.current = null;
      }, 2000);
    }, [text]);

    const Icon = copyState === 'success' ? Check : copyState === 'error' ? AlertCircle : Copy;

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        onClick={handleCopy}
        className={cn(
          'inline-flex items-center justify-center rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          copyState === 'success' && 'text-green-600',
          copyState === 'error' && 'text-red-600',
          className
        )}
      >
        <Icon className="h-4 w-4" />
      </button>
    );
  }
);

CopyButton.displayName = 'CopyButton';

export { CopyButton };
export type { CopyButtonProps, CopyState };

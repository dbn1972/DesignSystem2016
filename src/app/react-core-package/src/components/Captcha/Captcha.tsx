import { forwardRef, useState, useCallback, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { CaptchaProps } from './Captcha.types';

function generateCode(len: number): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export const Captcha = forwardRef<HTMLDivElement, CaptchaProps>(
  ({ onVerify, length = 6, errorText, label = 'Enter the code shown below', className, ...props }, ref) => {
    const [code, setCode] = useState(() => generateCode(length));
    const [input, setInput] = useState('');

    const refresh = useCallback(() => { setCode(generateCode(length)); setInput(''); }, [length]);

    const handleSubmit = () => { onVerify(input.toUpperCase() === code ? input : ''); };

    return (
      <div ref={ref} className={cn('ux4g-captcha space-y-3', className)} {...props}>
        <label className="block text-sm font-medium text-foreground">{label}</label>
        <div className="flex items-center gap-3">
          <div
            className="px-4 py-3 bg-muted border border-border rounded-lg font-mono text-xl tracking-[0.3em] select-none text-foreground"
            aria-hidden="true"
            style={{ letterSpacing: '0.3em', fontStyle: 'italic' }}
          >
            {code}
          </div>
          <button type="button" onClick={refresh} aria-label="Refresh captcha" className="text-sm text-primary hover:underline">↻ Refresh</button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter code"
            maxLength={length}
            aria-label="Captcha code"
            className="flex-1 px-4 py-2 border border-border rounded-lg font-mono uppercase tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm">Verify</button>
        </div>
        {errorText && <p role="alert" className="text-sm text-destructive">{errorText}</p>}
      </div>
    );
  }
);

Captcha.displayName = 'Captcha';

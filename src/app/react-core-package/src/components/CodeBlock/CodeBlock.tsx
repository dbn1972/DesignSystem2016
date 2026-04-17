import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { CodeBlockProps } from './CodeBlock.types';

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ code, language, filename, showLineNumbers = false, copyable = true, className, ...props }, ref) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
      <div className={cn('ux4g-code-block rounded-xl border border-border overflow-hidden', className)}>
        {(filename || copyable) && (
          <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">{filename || language || 'Code'}</span>
            {copyable && (
              <button type="button" onClick={handleCopy} className="text-xs text-muted-foreground hover:text-foreground" aria-label="Copy code">
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            )}
          </div>
        )}
        <pre
          ref={ref}
          tabIndex={0}
          role="region"
          aria-label={`${filename || language || 'Code'} snippet`}
          className="p-4 bg-slate-950 text-slate-100 text-sm overflow-auto max-h-96"
          {...props}
        >
          <code className="font-mono leading-6">
            {showLineNumbers
              ? lines.map((line, i) => (
                  <span key={i}>
                    <span className="inline-block w-8 text-right mr-4 text-slate-500 select-none">{i + 1}</span>
                    {line}
                    {'\n'}
                  </span>
                ))
              : code}
          </code>
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

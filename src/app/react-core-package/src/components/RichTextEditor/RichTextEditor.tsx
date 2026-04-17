/**
 * RichTextEditor Component
 * Basic rich text editor with toolbar using contentEditable.
 *
 * @example
 * ```tsx
 * <RichTextEditor value={html} onChange={setHtml} toolbar={['bold', 'italic', 'underline']} />
 * ```
 */

import { forwardRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { RichTextEditorProps, ToolbarAction } from './RichTextEditor.types';

const TOOLBAR_LABELS: Record<ToolbarAction, { label: string; command: string }> = {
  bold: { label: 'B', command: 'bold' },
  italic: { label: 'I', command: 'italic' },
  underline: { label: 'U', command: 'underline' },
  link: { label: '🔗', command: 'createLink' },
  list: { label: '☰', command: 'insertUnorderedList' },
};

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      value = '',
      onChange,
      placeholder = 'Start typing...',
      disabled = false,
      minHeight = 150,
      toolbar = ['bold', 'italic', 'underline'],
      className,
      ...props
    },
    ref
  ) => {
    const handleInput = useCallback(
      (e: React.FormEvent<HTMLDivElement>) => {
        onChange?.(e.currentTarget.innerHTML);
      },
      [onChange]
    );

    const handleCommand = useCallback((command: string) => {
      if (command === 'createLink') {
        const url = window.prompt('Enter URL:');
        if (url) document.execCommand(command, false, url);
      } else {
        document.execCommand(command, false);
      }
    }, []);

    return (
      <div ref={ref} className={cn('ux4g-rich-text-editor', className)} {...props}>
        <div className="ux4g-rich-text-editor-toolbar flex gap-1 p-1 border border-b-0 rounded-t-md bg-muted" role="toolbar" aria-label="Text formatting">
          {toolbar.map((action) => {
            const config = TOOLBAR_LABELS[action];
            return (
              <button
                key={action}
                type="button"
                onClick={() => handleCommand(config.command)}
                disabled={disabled}
                aria-label={action}
                className={cn(
                  'ux4g-rich-text-editor-btn px-2 py-1 text-sm rounded hover:bg-accent',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {config.label}
              </button>
            );
          })}
        </div>
        <div
          contentEditable={!disabled}
          role="textbox"
          aria-multiline="true"
          aria-label="Rich text editor"
          aria-placeholder={placeholder}
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: value }}
          className={cn(
            'ux4g-rich-text-editor-content',
            'w-full p-3 border rounded-b-md text-sm',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            disabled && 'opacity-50 cursor-not-allowed bg-muted'
          )}
          style={{ minHeight }}
        />
      </div>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';

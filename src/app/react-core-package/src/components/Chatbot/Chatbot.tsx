/**
 * Chatbot Component
 * Floating chat widget with a toggle bubble, message list, and input field.
 *
 * @example
 * ```tsx
 * <Chatbot
 *   title="Support"
 *   messages={[{ id: '1', text: 'Hello!', sender: 'bot' }]}
 *   onSend={(text) => console.log(text)}
 *   open={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 * />
 * ```
 */

import { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { ChatbotProps } from './Chatbot.types';

export const Chatbot = forwardRef<HTMLDivElement, ChatbotProps>(
  (
    {
      title = 'Help',
      messages = [],
      onSend,
      open = false,
      onToggle,
      placeholder = 'Type a message…',
      className,
      ...props
    },
    ref
  ) => {
    const [input, setInput] = useState('');

    const handleSend = useCallback(() => {
      const text = input.trim();
      if (!text) return;
      onSend?.(text);
      setInput('');
    }, [input, onSend]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSend();
        }
      },
      [handleSend]
    );

    return (
      <div ref={ref} className={cn('ux4g-chatbot', className)} {...props}>
        <button
          type="button"
          className="ux4g-chatbot-toggle rounded-full w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground shadow-lg"
          aria-label={open ? `Close ${title}` : `Open ${title}`}
          onClick={onToggle}
        >
          💬
        </button>

        {open && (
          <div
            className="ux4g-chatbot-panel border rounded-lg shadow-xl mt-2 w-80 flex flex-col bg-background"
            role="log"
            aria-label={title}
          >
            <div className="ux4g-chatbot-header font-semibold px-4 py-2 border-b">
              {title}
            </div>

            <div className="ux4g-chatbot-messages flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'ux4g-chatbot-message text-sm px-3 py-1 rounded-lg max-w-[80%]',
                    msg.sender === 'user'
                      ? 'ml-auto bg-primary text-primary-foreground'
                      : 'mr-auto bg-muted'
                  )}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="ux4g-chatbot-input flex border-t px-2 py-2 gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                aria-label="Message input"
                className="flex-1 px-2 py-1 border rounded text-sm"
              />
              <button
                type="button"
                onClick={handleSend}
                className="ux4g-chatbot-send px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Chatbot.displayName = 'Chatbot';

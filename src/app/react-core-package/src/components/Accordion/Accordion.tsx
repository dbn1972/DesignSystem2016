/**
 * Accordion Component
 * Collapsible content sections
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { key: '1', title: 'Section 1', content: <div>Content 1</div> },
 *     { key: '2', title: 'Section 2', content: <div>Content 2</div> }
 *   ]}
 * />
 * ```
 */

import { useState } from 'react';
import { cn } from '../../utils/cn';
import { AccordionProps } from './Accordion.types';

export function Accordion({
  items,
  allowMultiple = false,
  value: controlledValue,
  defaultValue = [],
  onChange,
  collapsible = true,
  className,
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

  const openItems = controlledValue ?? internalValue;
  const isControlled = controlledValue !== undefined;

  const toggleItem = (key: string) => {
    const isOpen = openItems.includes(key);

    let newValue: string[];

    if (allowMultiple) {
      newValue = isOpen
        ? openItems.filter((item) => item !== key)
        : [...openItems, key];
    } else {
      newValue = isOpen && collapsible ? [] : [key];
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={cn('ux4g-accordion', className)} {...props}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.key);
        const isDisabled = item.disabled;

        return (
          <div
            key={item.key}
            className={cn(
              'ux4g-accordion-item',
              isOpen && 'ux4g-accordion-item-open',
              isDisabled && 'ux4g-accordion-item-disabled'
            )}
          >
            <button
              type="button"
              className="ux4g-accordion-header"
              onClick={() => !isDisabled && toggleItem(item.key)}
              disabled={isDisabled}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.key}`}
              id={`accordion-header-${item.key}`}
            >
              {item.icon && (
                <span className="ux4g-accordion-icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className="ux4g-accordion-title">{item.title}</span>
              <span
                className="ux4g-accordion-chevron"
                aria-hidden="true"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`accordion-content-${item.key}`}
              role="region"
              aria-labelledby={`accordion-header-${item.key}`}
              className={cn(
                'ux4g-accordion-content',
                isOpen && 'ux4g-accordion-content-open'
              )}
              hidden={!isOpen}
            >
              <div className="ux4g-accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.displayName = 'Accordion';

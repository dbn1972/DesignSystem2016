/**
 * Popover Component
 * Contextual popovers
 *
 * @example
 * ```tsx
 * <Popover content={<div>Popover content</div>}>
 *   <button>Click me</button>
 * </Popover>
 * ```
 */

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { PopoverProps } from './Popover.types';

export function Popover({
  content,
  children,
  placement = 'bottom',
  trigger = 'click',
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  showArrow = true,
  title,
  className,
  ...props
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen ?? internalOpen;
  const isControlled = controlledOpen !== undefined;

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  useEffect(() => {
    if (trigger !== 'click') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, trigger]);

  const handleTriggerClick = () => {
    if (trigger === 'click') {
      setOpen(!isOpen);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') {
      setOpen(true);
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') {
      setOpen(false);
    }
  };

  const handleTriggerFocus = () => {
    if (trigger === 'focus') {
      setOpen(true);
    }
  };

  const handleTriggerBlur = () => {
    if (trigger === 'focus') {
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cn('ux4g-popover-wrapper', className)}
      {...props}
    >
      <div
        className="ux4g-popover-trigger"
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        onFocus={handleTriggerFocus}
        onBlur={handleTriggerBlur}
      >
        {children}
      </div>
      {isOpen && (
        <div
          role="dialog"
          className={cn(
            'ux4g-popover',
            `ux4g-popover-${placement}`,
            showArrow && 'ux4g-popover-arrow'
          )}
        >
          {title && <div className="ux4g-popover-title">{title}</div>}
          <div className="ux4g-popover-content">{content}</div>
        </div>
      )}
    </div>
  );
}

Popover.displayName = 'Popover';

/**
 * Tooltip Component
 * Hover tooltips for additional information
 *
 * @example
 * ```tsx
 * <Tooltip content="Aadhaar is a 12-digit unique ID">
 *   <span>Aadhaar Number</span>
 * </Tooltip>
 * ```
 */

import { useState, useRef } from 'react';
import { cn } from '../../utils/cn';
import { TooltipProps } from './Tooltip.types';

export function Tooltip({
  content,
  children,
  placement = 'top',
  delay = 200,
  disabled = false,
  showArrow = true,
  className,
  ...props
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (disabled) return;
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  };

  return (
    <div
      className={cn('ux4g-tooltip-wrapper', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      {...props}
    >
      {children}
      {visible && !disabled && (
        <div
          role="tooltip"
          className={cn(
            'ux4g-tooltip',
            `ux4g-tooltip-${placement}`,
            showArrow && 'ux4g-tooltip-arrow'
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}

Tooltip.displayName = 'Tooltip';

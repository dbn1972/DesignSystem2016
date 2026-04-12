/**
 * Rating Component
 * Star rating component
 *
 * @example
 * ```tsx
 * <Rating value={4} onChange={setValue} />
 * ```
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { RatingProps } from './Rating.types';

export function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  allowHalf = false,
  readOnly = false,
  disabled = false,
  size = 'md',
  onChange,
  onHover,
  icon = '★',
  showLabel = false,
  labelFormatter = (val) => `${val} / ${max}`,
  className,
  ...props
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const value = controlledValue ?? internalValue;
  const isControlled = controlledValue !== undefined;
  const isInteractive = !readOnly && !disabled;

  const handleClick = (newValue: number) => {
    if (!isInteractive) return;

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleMouseEnter = (starValue: number) => {
    if (!isInteractive) return;
    setHoverValue(starValue);
    onHover?.(starValue);
  };

  const handleMouseLeave = () => {
    if (!isInteractive) return;
    setHoverValue(null);
    onHover?.(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  const stars = Array.from({ length: max }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= displayValue;
    const isHalf =
      allowHalf && starValue - 0.5 === displayValue;

    return (
      <button
        key={index}
        type="button"
        className={cn(
          'ux4g-rating-star',
          isFilled && 'ux4g-rating-star-filled',
          isHalf && 'ux4g-rating-star-half',
          isInteractive && 'ux4g-rating-star-interactive'
        )}
        onClick={() => handleClick(starValue)}
        onMouseEnter={() => handleMouseEnter(starValue)}
        disabled={disabled}
        aria-label={`Rate ${starValue} out of ${max}`}
      >
        {icon}
      </button>
    );
  });

  return (
    <div
      className={cn(
        'ux4g-rating',
        `ux4g-rating-${size}`,
        readOnly && 'ux4g-rating-readonly',
        disabled && 'ux4g-rating-disabled',
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label="Rating"
      {...props}
    >
      <div className="ux4g-rating-stars">{stars}</div>
      {showLabel && (
        <div className="ux4g-rating-label">
          {labelFormatter(displayValue)}
        </div>
      )}
    </div>
  );
}

Rating.displayName = 'Rating';

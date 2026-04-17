import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { FeedbackRatingWidgetProps } from './FeedbackRatingWidget.types';

const sizeMap = { sm: 24, md: 32, lg: 48 };

export const FeedbackRatingWidget = forwardRef<HTMLDivElement, FeedbackRatingWidgetProps>(
  ({ value = 0, onChange, max = 5, label = 'Rate your experience', disabled = false, size = 'md', className, ...props }, ref) => {
    const [hover, setHover] = useState(0);
    const s = sizeMap[size];

    return (
      <div ref={ref} className={cn('ux4g-feedback-rating', className)} role="radiogroup" aria-label={label} {...props}>
        {label && <div className="text-sm font-medium text-foreground mb-2">{label}</div>}
        <div className="flex gap-1">
          {Array.from({ length: max }, (_, i) => {
            const star = i + 1;
            const filled = star <= (hover || value);
            return (
              <button
                key={star}
                type="button"
                role="radio"
                aria-checked={star === value}
                aria-label={`${star} star${star > 1 ? 's' : ''}`}
                disabled={disabled}
                onClick={() => onChange?.(star)}
                onMouseEnter={() => !disabled && setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={cn('transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded', disabled && 'cursor-not-allowed opacity-50')}
              >
                <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? '#facc15' : 'none'} stroke={filled ? '#facc15' : '#9ca3af'} strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            );
          })}
        </div>
        {value > 0 && <div className="text-xs text-muted-foreground mt-1">{value} of {max} stars</div>}
      </div>
    );
  }
);

FeedbackRatingWidget.displayName = 'FeedbackRatingWidget';

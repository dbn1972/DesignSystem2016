import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DescriptionListProps } from './DescriptionList.types';

export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ items, layout = 'horizontal', striped = false, className, ...props }, ref) => (
    <dl ref={ref} className={cn('ux4g-description-list', className)} {...props}>
      {items.map((item, idx) => (
        <div
          key={item.term}
          className={cn(
            'py-3 px-2',
            layout === 'horizontal' ? 'flex gap-4' : '',
            striped && idx % 2 === 0 && 'bg-muted/30 rounded',
            idx < items.length - 1 && 'border-b border-border'
          )}
        >
          <dt className={cn('text-sm font-medium text-muted-foreground', layout === 'horizontal' ? 'w-1/3 shrink-0' : 'mb-1')}>
            {item.term}
          </dt>
          <dd className="text-sm text-foreground">{item.description}</dd>
        </div>
      ))}
    </dl>
  )
);

DescriptionList.displayName = 'DescriptionList';

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ListProps } from './List.types';

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ items, dividers = true, ordered = false, emptyMessage = 'No items', className, ...props }, ref) => {
    const Tag = ordered ? 'ol' : 'ul';

    if (items.length === 0) {
      return <p className="text-sm text-muted-foreground py-4">{emptyMessage}</p>;
    }

    return (
      <Tag ref={ref as React.Ref<HTMLUListElement>} className={cn('ux4g-list', className)} role="list" {...props}>
        {items.map((item, idx) => (
          <li
            key={item.key}
            className={cn(
              'ux4g-list-item flex items-center gap-3 py-3 px-2',
              dividers && idx < items.length - 1 && 'border-b border-border'
            )}
          >
            {item.icon && <span className="ux4g-list-item-icon shrink-0 text-muted-foreground" aria-hidden="true">{item.icon}</span>}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{item.primary}</div>
              {item.secondary && <div className="text-xs text-muted-foreground mt-0.5">{item.secondary}</div>}
            </div>
            {item.action && <div className="shrink-0">{item.action}</div>}
          </li>
        ))}
      </Tag>
    );
  }
);

List.displayName = 'List';

import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { CategoryConfig } from '../utils/tokenUtils';
import { iconMap } from './iconMap';

interface TableOfContentsProps {
  categories: CategoryConfig[];
  className?: string;
}

const TableOfContents = forwardRef<HTMLElement, TableOfContentsProps>(
  ({ categories, className }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Token categories"
        className={cn(
          'ux4g-toc flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-x-visible',
          className
        )}
      >
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon];
          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(category.id)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ux4g-toc__link inline-flex shrink-0 items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {IconComponent && <IconComponent className="h-4 w-4" />}
              {category.title}
            </a>
          );
        })}
      </nav>
    );
  }
);

TableOfContents.displayName = 'TableOfContents';

export { TableOfContents };
export type { TableOfContentsProps };

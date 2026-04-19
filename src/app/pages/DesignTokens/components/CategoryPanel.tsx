import React, { forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';
import type { CategoryConfig } from '../utils/tokenUtils';
import { iconMap } from './iconMap';

interface CategoryPanelProps {
  config: CategoryConfig;
  visible: boolean;
  children: React.ReactNode;
  className?: string;
}

const CategoryPanel = forwardRef<HTMLElement, CategoryPanelProps>(
  ({ config, visible, children, className }, ref) => {
    const IconComponent = iconMap[config.icon];

    return (
      <section
        ref={ref}
        id={config.id}
        hidden={!visible}
        className={cn('ux4g-category-panel scroll-mt-24', className)}
      >
        <h2 className="ux4g-category-panel__title text-2xl font-bold flex items-center gap-2 mb-2">
          {IconComponent && <IconComponent className="h-6 w-6" />}
          {config.title}
        </h2>
        {config.description && (
          <p className="ux4g-category-panel__description text-muted-foreground mb-6">
            {config.description}
          </p>
        )}
        <div className="ux4g-category-panel__content">{children}</div>
      </section>
    );
  }
);

CategoryPanel.displayName = 'CategoryPanel';

export { CategoryPanel };
export type { CategoryPanelProps };

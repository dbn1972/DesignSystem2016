import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SectionProps } from './Section.types';

const paddingMap = { none: '', sm: 'py-6', md: 'py-12', lg: 'py-20' };

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, title, description, padding = 'md', className, ...props }, ref) => (
    <section ref={ref} className={cn('ux4g-section', paddingMap[padding], className)} {...props}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
          {description && <p className="text-muted-foreground mt-2">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
);

Section.displayName = 'Section';

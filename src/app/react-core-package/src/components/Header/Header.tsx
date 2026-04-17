import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { HeaderProps } from './Header.types';

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ title, logo, navItems = [], actions, sticky = false, className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn('ux4g-header bg-background border-b border-border', sticky && 'sticky top-0 z-40', className)}
      {...props}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          {logo && <span className="shrink-0" aria-hidden="true">{logo}</span>}
          <span className="text-lg font-bold text-foreground">{title}</span>
        </div>
        {navItems.length > 0 && (
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.active ? 'page' : undefined}
                    className={cn('px-3 py-2 text-sm font-medium rounded-lg transition-colors', item.active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </header>
  )
);

Header.displayName = 'Header';

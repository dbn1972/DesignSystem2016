import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { FooterProps } from './Footer.types';

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ sections = [], copyright, logo, socialLinks, className, ...props }, ref) => (
    <footer ref={ref} className={cn('ux4g-footer bg-muted/30 border-t border-border', className)} {...props}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h3 className="text-sm font-semibold text-foreground mb-3">{sec.title}</h3>
                <ul className="space-y-2">
                  {sec.links.map((link) => (
                    <li key={link.href}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-3">
            {logo}
            {copyright && <span className="text-sm text-muted-foreground">{copyright}</span>}
          </div>
          {socialLinks}
        </div>
      </div>
    </footer>
  )
);

Footer.displayName = 'Footer';

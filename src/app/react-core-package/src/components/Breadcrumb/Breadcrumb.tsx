/**
 * Breadcrumb Component
 * Navigation breadcrumbs showing hierarchical location
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Services', href: '/services' },
 *     { label: 'Aadhaar', current: true }
 *   ]}
 * />
 * ```
 */

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { BreadcrumbProps } from './Breadcrumb.types';

export function Breadcrumb({
  items,
  separator = '/',
  maxItems,
  collapseText = '...',
  navProps,
  className,
  ...props
}: BreadcrumbProps) {
  const [expanded, setExpanded] = useState(false);

  const shouldCollapse = maxItems && items.length > maxItems && !expanded;

  const displayItems = shouldCollapse
    ? [
        items[0],
        {
          label: collapseText,
          onClick: () => setExpanded(true),
        },
        ...items.slice(-(maxItems - 2)),
      ]
    : items;

  return (
    <nav
      className={cn('ux4g-breadcrumb', className)}
      aria-label="Breadcrumb"
      {...navProps}
      {...props}
    >
      <ol className="ux4g-breadcrumb-list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isCurrent = item.current || isLast;
          const isCollapsible = item.label === collapseText;

          return (
            <li
              key={index}
              className={cn(
                'ux4g-breadcrumb-item',
                isCurrent && 'ux4g-breadcrumb-item-current'
              )}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="ux4g-breadcrumb-link"
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="ux4g-breadcrumb-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </a>
              ) : item.onClick || isCollapsible ? (
                <button
                  type="button"
                  className="ux4g-breadcrumb-button"
                  onClick={item.onClick}
                  aria-current={isCurrent ? 'page' : undefined}
                  aria-label={isCollapsible ? 'Show all items' : undefined}
                >
                  {item.icon && (
                    <span className="ux4g-breadcrumb-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </button>
              ) : (
                <span
                  className="ux4g-breadcrumb-text"
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="ux4g-breadcrumb-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="ux4g-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

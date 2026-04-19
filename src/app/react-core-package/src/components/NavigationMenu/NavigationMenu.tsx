/**
 * NavigationMenu Component
 * Multi-level navigation menu with keyboard support.
 */

import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { NavigationMenuProps, NavigationMenuItem } from './NavigationMenu.types';

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ items, orientation = 'horizontal', className, ...props }, ref) => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent, item: NavigationMenuItem, index: number) => {
        const menuItems = menuRef.current?.querySelectorAll<HTMLElement>(
          ':scope > li > a, :scope > li > button'
        );
        if (!menuItems) return;

        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown': {
            e.preventDefault();
            const next = (index + 1) % menuItems.length;
            menuItems[next]?.focus();
            break;
          }
          case 'ArrowLeft':
          case 'ArrowUp': {
            e.preventDefault();
            const prev = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[prev]?.focus();
            break;
          }
          case 'Enter':
            if (item.children?.length) {
              e.preventDefault();
              setOpenSubmenu(openSubmenu === item.label ? null : item.label);
            }
            break;
          case 'Escape':
            e.preventDefault();
            setOpenSubmenu(null);
            break;
        }
      },
      [openSubmenu]
    );

    return (
      <nav
        ref={ref}
        className={cn('ux4g-navigation-menu', `ux4g-navigation-menu-${orientation}`, className)}
        aria-label="Navigation menu"
        {...props}
      >
        <ul ref={menuRef} className="ux4g-navigation-menu-list" role="menubar">
          {items.map((item, index) => (
            <li key={item.label} className="ux4g-navigation-menu-item" role="none">
              {item.href ? (
                <a
                  href={item.href}
                  role="menuitem"
                  aria-current={item.active ? 'page' : undefined}
                  aria-haspopup={item.children?.length ? 'true' : undefined}
                  aria-expanded={item.children?.length ? openSubmenu === item.label : undefined}
                  className={cn(
                    'ux4g-navigation-menu-link',
                    item.active && 'ux4g-navigation-menu-link-active'
                  )}
                  onKeyDown={(e) => handleKeyDown(e, item, index)}
                  onClick={item.onClick}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup={item.children?.length ? 'true' : undefined}
                  aria-expanded={item.children?.length ? openSubmenu === item.label : undefined}
                  className="ux4g-navigation-menu-button"
                  onKeyDown={(e) => handleKeyDown(e, item, index)}
                  onClick={() => {
                    if (item.children?.length) {
                      setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                    }
                    item.onClick?.();
                  }}
                >
                  {item.label}
                </button>
              )}
              {item.children?.length && openSubmenu === item.label && (
                <ul className="ux4g-navigation-menu-submenu" role="menu">
                  {item.children.map((child) => (
                    <li key={child.label} role="none">
                      {child.href ? (
                        <a href={child.href} role="menuitem" className="ux4g-navigation-menu-submenu-link">
                          {child.label}
                        </a>
                      ) : (
                        <button
                          type="button"
                          role="menuitem"
                          className="ux4g-navigation-menu-submenu-button"
                          onClick={child.onClick}
                        >
                          {child.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

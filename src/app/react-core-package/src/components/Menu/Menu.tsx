/**
 * Menu Component
 * Dropdown menu
 *
 * @example
 * ```tsx
 * <Menu
 *   trigger={<button>Actions</button>}
 *   items={[
 *     { key: 'edit', label: 'Edit', onClick: handleEdit },
 *     { key: 'delete', label: 'Delete', danger: true, onClick: handleDelete }
 *   ]}
 * />
 * ```
 */

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { MenuProps } from './Menu.types';

export function Menu({
  items,
  trigger,
  placement = 'bottom-start',
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className,
  ...props
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen ?? internalOpen;
  const isControlled = controlledOpen !== undefined;

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (!disabled) {
      setOpen(!isOpen);
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled) {
      item.onClick?.();
      setOpen(false);
    }
  };

  return (
    <div
      ref={menuRef}
      className={cn('ux4g-menu', className)}
      {...props}
    >
      <div
        className={cn(
          'ux4g-menu-trigger',
          disabled && 'ux4g-menu-trigger-disabled'
        )}
        onClick={handleTriggerClick}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          role="menu"
          className={cn('ux4g-menu-dropdown', `ux4g-menu-${placement}`)}
        >
          {items.map((item) => (
            <React.Fragment key={item.key}>
              <button
                type="button"
                role="menuitem"
                className={cn(
                  'ux4g-menu-item',
                  item.disabled && 'ux4g-menu-item-disabled',
                  item.danger && 'ux4g-menu-item-danger'
                )}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.icon && (
                  <span className="ux4g-menu-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className="ux4g-menu-item-label">{item.label}</span>
              </button>
              {item.divider && <div className="ux4g-menu-divider" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

Menu.displayName = 'Menu';

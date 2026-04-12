/**
 * Tabs Component
 * Tab navigation with keyboard support
 *
 * @example
 * ```tsx
 * <Tabs
 *   items={[
 *     { value: 'profile', label: 'Profile', content: <ProfileForm /> },
 *     { value: 'documents', label: 'Documents', content: <DocumentList /> }
 *   ]}
 *   defaultValue="profile"
 * />
 * ```
 */

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { TabsProps } from './Tabs.types';

export function Tabs({
  items,
  value: controlledValue,
  defaultValue,
  onChange,
  variant = 'default',
  orientation = 'horizontal',
  centered = false,
  fullWidth = false,
  tabListProps,
  tabPanelProps,
  lazy = false,
  keepMounted = false,
  className,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue || items[0]?.value || ''
  );
  const tabListRef = useRef<HTMLDivElement>(null);
  const [mountedTabs, setMountedTabs] = useState<Set<string>>(
    new Set(defaultValue ? [defaultValue] : items[0] ? [items[0].value] : [])
  );

  const activeValue = controlledValue ?? internalValue;
  const isControlled = controlledValue !== undefined;

  // Track which tabs have been mounted
  useEffect(() => {
    if (!mountedTabs.has(activeValue)) {
      setMountedTabs((prev) => new Set([...prev, activeValue]));
    }
  }, [activeValue, mountedTabs]);

  const handleTabClick = (value: string, disabled?: boolean) => {
    if (disabled) return;

    if (!isControlled) {
      setInternalValue(value);
    }
    onChange?.(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const enabledItems = items.filter((item) => !item.disabled);
    const currentIndex = enabledItems.findIndex((item) => item.value === activeValue);

    let nextIndex = currentIndex;

    if (orientation === 'horizontal') {
      if (event.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % enabledItems.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
      }
    } else {
      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % enabledItems.length;
      } else if (event.key === 'ArrowUp') {
        nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
      }
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = enabledItems.length - 1;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      const nextTab = enabledItems[nextIndex];
      handleTabClick(nextTab.value, nextTab.disabled);

      // Focus the next tab
      const tabButtons = tabListRef.current?.querySelectorAll('[role="tab"]');
      const nextButton = Array.from(tabButtons || []).find(
        (button) => button.getAttribute('data-value') === nextTab.value
      ) as HTMLElement;
      nextButton?.focus();
    }
  };

  const shouldRenderContent = (value: string) => {
    if (value === activeValue) return true;
    if (keepMounted && mountedTabs.has(value)) return true;
    if (!lazy && !keepMounted) return true;
    return false;
  };

  return (
    <div
      className={cn(
        'ux4g-tabs',
        `ux4g-tabs-${variant}`,
        `ux4g-tabs-${orientation}`,
        className
      )}
      {...props}
    >
      <div
        ref={tabListRef}
        className={cn(
          'ux4g-tabs-list',
          centered && 'ux4g-tabs-list-centered',
          fullWidth && 'ux4g-tabs-list-fullwidth'
        )}
        role="tablist"
        aria-orientation={orientation}
        {...tabListProps}
      >
        {items.map((item, index) => {
          const isActive = item.value === activeValue;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              data-value={item.value}
              className={cn(
                'ux4g-tab',
                isActive && 'ux4g-tab-active',
                isDisabled && 'ux4g-tab-disabled'
              )}
              aria-selected={isActive}
              aria-disabled={isDisabled}
              aria-controls={`panel-${item.value}`}
              id={`tab-${item.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(item.value, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={isDisabled}
            >
              {item.icon && (
                <span className="ux4g-tab-icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className="ux4g-tab-label">{item.label}</span>
              {item.badge && (
                <span className="ux4g-tab-badge" aria-hidden="true">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const isActive = item.value === activeValue;
        const shouldRender = shouldRenderContent(item.value);

        return (
          <div
            key={item.value}
            role="tabpanel"
            id={`panel-${item.value}`}
            aria-labelledby={`tab-${item.value}`}
            className={cn(
              'ux4g-tab-panel',
              isActive && 'ux4g-tab-panel-active',
              !isActive && 'ux4g-tab-panel-hidden'
            )}
            hidden={!isActive}
            tabIndex={0}
            {...tabPanelProps}
          >
            {shouldRender && item.content}
          </div>
        );
      })}
    </div>
  );
}

Tabs.displayName = 'Tabs';

/**
 * Tabs Component Types
 * Tab navigation with keyboard support
 */

import { ReactNode, HTMLAttributes } from 'react';
import { BaseComponentProps, ControlledValueProps } from '../../types/common';

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  value: string;

  /**
   * Tab label
   */
  label: ReactNode;

  /**
   * Tab content
   */
  content: ReactNode;

  /**
   * Disable this tab
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display before label
   */
  icon?: ReactNode;

  /**
   * Badge or count to display after label
   */
  badge?: ReactNode;
}

export type TabsVariant = 'default' | 'pills' | 'underline';

export type TabsOrientation = 'horizontal' | 'vertical';

export interface TabsProps
  extends BaseComponentProps,
    Omit<ControlledValueProps<string>, 'onChange'> {
  /**
   * Tab items
   */
  items: TabItem[];

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: TabsVariant;

  /**
   * Tab orientation
   * @default 'horizontal'
   */
  orientation?: TabsOrientation;

  /**
   * Center align tabs
   * @default false
   */
  centered?: boolean;

  /**
   * Full width tabs
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Change handler
   */
  onChange?: (value: string) => void;

  /**
   * Additional props for tab list container
   */
  tabListProps?: HTMLAttributes<HTMLDivElement>;

  /**
   * Additional props for tab panel container
   */
  tabPanelProps?: HTMLAttributes<HTMLDivElement>;

  /**
   * Lazy load tab content (only render active tab)
   * @default false
   */
  lazy?: boolean;

  /**
   * Keep mounted (don't unmount inactive tabs)
   * @default false
   */
  keepMounted?: boolean;
}

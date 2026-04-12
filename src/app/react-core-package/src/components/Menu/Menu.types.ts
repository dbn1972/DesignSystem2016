/**
 * Menu Component Types
 * Dropdown menu
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface MenuItem {
  /**
   * Menu item key
   */
  key: string;

  /**
   * Menu item label
   */
  label: ReactNode;

  /**
   * Menu item icon
   */
  icon?: ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Divider after this item
   * @default false
   */
  divider?: boolean;

  /**
   * Danger/destructive item
   * @default false
   */
  danger?: boolean;
}

export type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface MenuProps extends BaseComponentProps {
  /**
   * Menu items
   */
  items: MenuItem[];

  /**
   * Trigger element
   */
  trigger: ReactNode;

  /**
   * Menu placement
   * @default 'bottom-start'
   */
  placement?: MenuPlacement;

  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Default open state
   */
  defaultOpen?: boolean;

  /**
   * Open state change handler
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

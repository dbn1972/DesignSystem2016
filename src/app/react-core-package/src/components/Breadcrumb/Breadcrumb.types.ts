/**
 * Breadcrumb Component Types
 * Navigation breadcrumbs showing hierarchical location
 */

import { ReactNode, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface BreadcrumbItem {
  /**
   * Item label
   */
  label: ReactNode;

  /**
   * Item href (for links)
   */
  href?: string;

  /**
   * Icon to display before label
   */
  icon?: ReactNode;

  /**
   * Whether this is the current page
   * @default false
   */
  current?: boolean;

  /**
   * Click handler (alternative to href)
   */
  onClick?: () => void;
}

export interface BreadcrumbProps extends BaseComponentProps {
  /**
   * Breadcrumb items
   */
  items: BreadcrumbItem[];

  /**
   * Separator between items
   * @default '/'
   */
  separator?: ReactNode;

  /**
   * Maximum items to show before collapsing
   */
  maxItems?: number;

  /**
   * Text for collapsed items
   * @default '...'
   */
  collapseText?: string;

  /**
   * Additional props for nav element
   */
  navProps?: HTMLAttributes<HTMLElement>;
}

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface NavItem { label: string; href: string; active?: boolean; }

export interface HeaderProps extends BaseComponentProps {
  /** Site/service title */
  title: string;
  /** Logo element */
  logo?: ReactNode;
  /** Navigation items */
  navItems?: NavItem[];
  /** Right-side actions (e.g. language selector, login button) */
  actions?: ReactNode;
  /** Sticky header */
  sticky?: boolean;
}

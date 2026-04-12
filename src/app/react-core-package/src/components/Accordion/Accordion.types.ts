/**
 * Accordion Component Types
 * Collapsible content sections
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface AccordionItem {
  /**
   * Unique key for the item
   */
  key: string;

  /**
   * Item title/header
   */
  title: ReactNode;

  /**
   * Item content
   */
  content: ReactNode;

  /**
   * Disable this item
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display in header
   */
  icon?: ReactNode;
}

export interface AccordionProps extends BaseComponentProps {
  /**
   * Accordion items
   */
  items: AccordionItem[];

  /**
   * Allow multiple items to be open
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Controlled open items (keys)
   */
  value?: string[];

  /**
   * Default open items for uncontrolled mode
   */
  defaultValue?: string[];

  /**
   * Change handler
   */
  onChange?: (openItems: string[]) => void;

  /**
   * Allow all items to be collapsed
   * @default true
   */
  collapsible?: boolean;
}

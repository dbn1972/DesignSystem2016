/**
 * Timeline Component Types
 * Event timeline display
 */

import { ReactNode } from 'react';
import { BaseComponentProps, StatusVariant } from '../../types/common';

export interface TimelineItem {
  /**
   * Item key
   */
  key: string;

  /**
   * Item title
   */
  title: ReactNode;

  /**
   * Item description/content
   */
  content?: ReactNode;

  /**
   * Timestamp
   */
  timestamp?: ReactNode;

  /**
   * Item icon
   */
  icon?: ReactNode;

  /**
   * Item color variant
   */
  variant?: StatusVariant;
}

export type TimelineMode = 'left' | 'right' | 'alternate';

export interface TimelineProps extends BaseComponentProps {
  /**
   * Timeline items
   */
  items: TimelineItem[];

  /**
   * Timeline mode
   * @default 'left'
   */
  mode?: TimelineMode;

  /**
   * Reverse order
   * @default false
   */
  reverse?: boolean;
}

import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps, ComponentSize } from '../../types/common';

export interface EmptyStateProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  /** Title text */
  title: string;

  /** Description text */
  description?: string;

  /** Icon or illustration to display */
  icon?: ReactNode;

  /** Primary action button */
  action?: ReactNode;

  /** Secondary action */
  secondaryAction?: ReactNode;

  /** Size variant */
  size?: ComponentSize;
}

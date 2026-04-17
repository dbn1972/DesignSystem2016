import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps, ComponentSize, StatusVariant } from '../../types/common';

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps {
  /** Tag label text */
  label: string;

  /** Color variant */
  variant?: StatusVariant;

  /** Size */
  size?: ComponentSize;

  /** Icon before label */
  icon?: ReactNode;

  /** Whether the tag is removable */
  removable?: boolean;

  /** Called when remove button is clicked */
  onRemove?: () => void;

  /** Whether the tag is disabled */
  disabled?: boolean;
}

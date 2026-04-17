import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/common';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  /** Shape variant */
  variant?: SkeletonVariant;

  /** Width (CSS value, e.g. '100%', '200px') */
  width?: string | number;

  /** Height (CSS value, e.g. '20px', '1rem') */
  height?: string | number;

  /** Number of skeleton lines to render (for text variant) */
  lines?: number;

  /** Whether to animate the skeleton */
  animate?: boolean;
}

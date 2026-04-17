import { BaseComponentProps } from '../../types/common';

export interface BackToTopProps extends BaseComponentProps {
  /** Scroll threshold in pixels before button appears */
  threshold?: number;
  /** Accessible label */
  label?: string;
}

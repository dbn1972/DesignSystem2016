import { BaseComponentProps } from '../../types/common';
export interface FeedbackRatingWidgetProps extends BaseComponentProps {
  /** Current rating (1-5) */
  value?: number;
  onChange?: (rating: number) => void;
  /** Max stars */
  max?: number;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

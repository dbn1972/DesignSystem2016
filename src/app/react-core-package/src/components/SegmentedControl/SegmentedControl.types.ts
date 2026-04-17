import { BaseComponentProps, ComponentSize } from '../../types/common';

export interface SegmentOption { value: string; label: string; disabled?: boolean; }

export interface SegmentedControlProps extends BaseComponentProps {
  options: SegmentOption[];
  value?: string;
  onChange?: (value: string) => void;
  size?: ComponentSize;
  disabled?: boolean;
  'aria-label'?: string;
}

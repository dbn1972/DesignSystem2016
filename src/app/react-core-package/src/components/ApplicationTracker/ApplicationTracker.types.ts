import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export type StepStatus = 'completed' | 'current' | 'upcoming' | 'error';

export interface TrackerStep {
  /** Unique step key */
  key: string;
  /** Step label */
  label: string;
  /** Step description */
  description?: string;
  /** Step status */
  status: StepStatus;
  /** Timestamp */
  timestamp?: string;
  /** Optional icon */
  icon?: ReactNode;
}

export interface ApplicationTrackerProps extends BaseComponentProps {
  /** Application/reference ID */
  applicationId: string;
  /** Service name */
  serviceName?: string;
  /** Steps in the application journey */
  steps: TrackerStep[];
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical';
}

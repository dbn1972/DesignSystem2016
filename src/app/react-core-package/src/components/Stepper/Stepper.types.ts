/**
 * Stepper Component Types
 * Multi-step indicators
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface StepItem {
  /**
   * Step key
   */
  key: string;

  /**
   * Step label
   */
  label: ReactNode;

  /**
   * Step description
   */
  description?: ReactNode;

  /**
   * Step icon
   */
  icon?: ReactNode;

  /**
   * Step status
   */
  status?: 'waiting' | 'process' | 'finish' | 'error';
}

export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepperProps extends BaseComponentProps {
  /**
   * Stepper steps
   */
  steps: StepItem[];

  /**
   * Current step index
   */
  current: number;

  /**
   * Stepper orientation
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;

  /**
   * Allow clicking on steps
   * @default false
   */
  clickable?: boolean;

  /**
   * Step click handler
   */
  onStepClick?: (index: number) => void;
}

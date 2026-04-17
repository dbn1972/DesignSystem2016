import { HTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from '../../types/common';

export interface StatisticProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  label: string;
  value: string | number;
  /** Prefix (e.g. ₹, $) */
  prefix?: ReactNode;
  /** Suffix (e.g. %, units) */
  suffix?: ReactNode;
  /** Trend indicator */
  trend?: { value: number; label?: string };
  /** Icon */
  icon?: ReactNode;
}

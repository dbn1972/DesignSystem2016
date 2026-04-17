import { BaseComponentProps } from '../../types/common';

export type ChartType = 'bar' | 'line' | 'pie' | 'area';

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ChartLibraryProps extends BaseComponentProps {
  /** Chart type */
  type?: ChartType;

  /** Data points to render */
  data: ChartDataPoint[];

  /** Chart title */
  title?: string;

  /** Chart height in pixels */
  height?: number;

  /** Array of color strings for data points */
  colors?: string[];
}

/**
 * ChartLibrary Component
 * Simple SVG chart wrapper supporting bar and line chart types.
 *
 * @example
 * ```tsx
 * <ChartLibrary type="bar" data={[{ label: 'A', value: 10 }]} title="Sales" />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ChartLibraryProps } from './ChartLibrary.types';

const DEFAULT_COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'];

export const ChartLibrary = forwardRef<HTMLDivElement, ChartLibraryProps>(
  (
    {
      type = 'bar',
      data,
      title,
      height = 300,
      colors = DEFAULT_COLORS,
      className,
      ...props
    },
    ref
  ) => {
    const maxValue = Math.max(...data.map((d) => d.value), 1);
    const svgWidth = 400;
    const svgHeight = height - 40;
    const barWidth = data.length > 0 ? (svgWidth - 40) / data.length : 0;
    const padding = 20;

    const renderBars = () =>
      data.map((d, i) => {
        const barHeight = (d.value / maxValue) * (svgHeight - padding * 2);
        const x = padding + i * barWidth + barWidth * 0.1;
        const y = svgHeight - padding - barHeight;
        const w = barWidth * 0.8;
        return (
          <rect
            key={d.label}
            x={x}
            y={y}
            width={w}
            height={barHeight}
            fill={colors[i % colors.length]}
            aria-label={`${d.label}: ${d.value}`}
          />
        );
      });

    const renderLine = () => {
      const points = data.map((d, i) => {
        const x = padding + i * barWidth + barWidth / 2;
        const y = svgHeight - padding - (d.value / maxValue) * (svgHeight - padding * 2);
        return `${x},${y}`;
      });
      return (
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke={colors[0]}
          strokeWidth={2}
          aria-label="Line chart"
        />
      );
    };

    return (
      <div ref={ref} className={cn('ux4g-chart-library', className)} {...props}>
        {title && (
          <p className="ux4g-chart-library-title text-sm font-medium text-foreground mb-2">{title}</p>
        )}
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${svgWidth} ${svgHeight + padding}`}
          role="img"
          aria-label={title || 'Chart'}
          className="ux4g-chart-library-svg"
        >
          {(type === 'bar' || type === 'area') && renderBars()}
          {(type === 'line' || type === 'area') && renderLine()}
          {type === 'pie' && renderBars()}
        </svg>
      </div>
    );
  }
);

ChartLibrary.displayName = 'ChartLibrary';

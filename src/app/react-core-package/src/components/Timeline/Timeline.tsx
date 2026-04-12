/**
 * Timeline Component
 * Event timeline display
 *
 * @example
 * ```tsx
 * <Timeline
 *   items={[
 *     { key: '1', title: 'Application Submitted', timestamp: '2024-03-15' },
 *     { key: '2', title: 'Under Review', timestamp: '2024-03-16' }
 *   ]}
 * />
 * ```
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { TimelineProps } from './Timeline.types';

export function Timeline({
  items,
  mode = 'left',
  reverse = false,
  className,
  ...props
}: TimelineProps) {
  const displayItems = reverse ? [...items].reverse() : items;

  return (
    <div
      className={cn(
        'ux4g-timeline',
        `ux4g-timeline-${mode}`,
        reverse && 'ux4g-timeline-reverse',
        className
      )}
      {...props}
    >
      {displayItems.map((item, index) => (
        <div
          key={item.key}
          className={cn(
            'ux4g-timeline-item',
            item.variant && `ux4g-timeline-item-${item.variant}`
          )}
        >
          <div className="ux4g-timeline-marker">
            {item.icon ? (
              <div className="ux4g-timeline-icon">{item.icon}</div>
            ) : (
              <div className="ux4g-timeline-dot" />
            )}
            {index < displayItems.length - 1 && (
              <div className="ux4g-timeline-line" />
            )}
          </div>
          <div className="ux4g-timeline-content">
            <div className="ux4g-timeline-title">{item.title}</div>
            {item.timestamp && (
              <div className="ux4g-timeline-timestamp">{item.timestamp}</div>
            )}
            {item.content && (
              <div className="ux4g-timeline-description">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

Timeline.displayName = 'Timeline';

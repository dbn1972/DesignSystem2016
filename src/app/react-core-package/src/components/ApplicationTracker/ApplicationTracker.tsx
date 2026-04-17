/**
 * ApplicationTracker Component
 * Multi-step application status tracker for government services.
 *
 * @example
 * ```tsx
 * <ApplicationTracker
 *   applicationId="APP-2026-001"
 *   serviceName="Birth Certificate"
 *   steps={[
 *     { key: 'submitted', label: 'Submitted', status: 'completed', timestamp: '10 Apr 2026' },
 *     { key: 'review', label: 'Under Review', status: 'current' },
 *     { key: 'approved', label: 'Approved', status: 'upcoming' },
 *   ]}
 * />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ApplicationTrackerProps, StepStatus } from './ApplicationTracker.types';

const statusStyles: Record<StepStatus, { dot: string; line: string; text: string }> = {
  completed: { dot: 'bg-green-600 text-white', line: 'bg-green-600', text: 'text-foreground' },
  current: { dot: 'bg-primary text-white ring-4 ring-primary/20', line: 'bg-border', text: 'text-primary font-semibold' },
  upcoming: { dot: 'bg-muted text-muted-foreground', line: 'bg-border', text: 'text-muted-foreground' },
  error: { dot: 'bg-destructive text-white', line: 'bg-destructive/30', text: 'text-destructive' },
};

const statusIcons: Record<StepStatus, string> = {
  completed: '✓',
  current: '●',
  upcoming: '○',
  error: '!',
};

export const ApplicationTracker = forwardRef<HTMLDivElement, ApplicationTrackerProps>(
  (
    {
      applicationId,
      serviceName,
      steps,
      orientation = 'vertical',
      className,
      ...props
    },
    ref
  ) => {
    const isVertical = orientation === 'vertical';

    return (
      <div
        ref={ref}
        className={cn('ux4g-application-tracker', className)}
        role="group"
        aria-label={`Application tracker for ${applicationId}`}
        {...props}
      >
        {/* Header */}
        <div className="ux4g-application-tracker-header mb-6">
          <div className="text-sm text-muted-foreground">Application ID</div>
          <div className="text-lg font-bold text-foreground font-mono">{applicationId}</div>
          {serviceName && (
            <div className="text-sm text-muted-foreground mt-1">{serviceName}</div>
          )}
        </div>

        {/* Steps */}
        <ol
          className={cn(
            'ux4g-application-tracker-steps',
            isVertical ? 'flex flex-col gap-0' : 'flex items-start gap-0'
          )}
          aria-label="Application steps"
        >
          {steps.map((step, idx) => {
            const style = statusStyles[step.status];
            const isLast = idx === steps.length - 1;

            return (
              <li
                key={step.key}
                className={cn(
                  'ux4g-application-tracker-step relative',
                  isVertical ? 'flex gap-4 pb-8 last:pb-0' : 'flex flex-col items-center flex-1'
                )}
                aria-current={step.status === 'current' ? 'step' : undefined}
              >
                {/* Connector line */}
                {!isLast && isVertical && (
                  <div
                    className={cn('absolute left-[15px] top-8 w-0.5 h-full', style.line)}
                    aria-hidden="true"
                  />
                )}

                {/* Dot */}
                <div
                  className={cn(
                    'relative z-10 flex items-center justify-center rounded-full shrink-0',
                    'h-8 w-8 text-sm font-bold',
                    style.dot
                  )}
                  aria-hidden="true"
                >
                  {step.icon || statusIcons[step.status]}
                </div>

                {/* Content */}
                <div className={cn(isVertical ? 'flex-1 pt-1' : 'text-center mt-3')}>
                  <div className={cn('text-sm', style.text)}>{step.label}</div>
                  {step.description && (
                    <div className="text-xs text-muted-foreground mt-0.5">{step.description}</div>
                  )}
                  {step.timestamp && (
                    <div className="text-xs text-muted-foreground mt-0.5">{step.timestamp}</div>
                  )}
                </div>

                {/* Horizontal connector */}
                {!isLast && !isVertical && (
                  <div
                    className={cn('h-0.5 flex-1 mt-4 mx-2', style.line)}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
);

ApplicationTracker.displayName = 'ApplicationTracker';

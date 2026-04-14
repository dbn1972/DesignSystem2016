/**
 * Stepper Component
 * Multi-step indicators
 *
 * @example
 * ```tsx
 * <Stepper
 *   current={1}
 *   steps={[
 *     { key: '1', label: 'Personal Info' },
 *     { key: '2', label: 'Documents' },
 *     { key: '3', label: 'Review' }
 *   ]}
 * />
 * ```
 */

import { cn } from '../../utils/cn';
import { StepperProps } from './Stepper.types';

export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  clickable = false,
  onStepClick,
  className,
  ...props
}: StepperProps) {
  const getStepStatus = (index: number) => {
    const step = steps[index];
    if (step.status) return step.status;
    if (index < current) return 'finish';
    if (index === current) return 'process';
    return 'waiting';
  };

  return (
    <div
      className={cn(
        'ux4g-stepper',
        `ux4g-stepper-${orientation}`,
        className
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        const isClickable = clickable && index !== current;

        return (
          <div
            key={step.key}
            className={cn(
              'ux4g-step',
              `ux4g-step-${status}`,
              isClickable && 'ux4g-step-clickable'
            )}
          >
            <div
              className="ux4g-step-indicator"
              onClick={() => isClickable && onStepClick?.(index)}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              aria-current={index === current ? 'step' : undefined}
            >
              <div className="ux4g-step-icon">
                {step.icon || (
                  <span className="ux4g-step-number">
                    {status === 'finish' ? '✓' : index + 1}
                  </span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="ux4g-step-connector" aria-hidden="true" />
              )}
            </div>
            <div className="ux4g-step-content">
              <div className="ux4g-step-label">{step.label}</div>
              {step.description && (
                <div className="ux4g-step-description">{step.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

Stepper.displayName = 'Stepper';

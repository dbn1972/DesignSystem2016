/**
 * @ux4g/a11y-react — Stepper Control
 */

import { useId } from 'react';
import { MinusIcon, PlusIcon, RotateCcwIcon } from './icons';

interface A11yStepperProps {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease?: () => void;
  onReset?: () => void;
  increaseLabel: string;
  decreaseLabel?: string;
  resetLabel?: string;
  displayValue: string;
}

export function A11yStepper({ label, value, onIncrease, onDecrease, onReset, increaseLabel, decreaseLabel, resetLabel, displayValue }: A11yStepperProps) {
  const id = useId();
  return (
    <div className="ux4g-a11y-control">
      <label id={id} className="ux4g-a11y-control-label">{label}</label>
      <div className="ux4g-a11y-stepper" role="group" aria-labelledby={id}>
        {onDecrease && <button type="button" onClick={onDecrease} aria-label={decreaseLabel} className="ux4g-a11y-stepper-btn"><MinusIcon width={16} height={16} /></button>}
        <span className="ux4g-a11y-stepper-value" aria-live="polite">{displayValue}</span>
        <button type="button" onClick={onIncrease} aria-label={increaseLabel} className="ux4g-a11y-stepper-btn"><PlusIcon width={16} height={16} /></button>
        {onReset && value !== 0 && <button type="button" onClick={onReset} aria-label={resetLabel} className="ux4g-a11y-stepper-btn ux4g-a11y-stepper-btn--reset"><RotateCcwIcon width={14} height={14} /></button>}
      </div>
    </div>
  );
}

/**
 * @ux4g/a11y-react — Toggle Control
 */

import { useId } from 'react';

interface A11yToggleProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  description?: string;
}

export function A11yToggle({ label, checked, onChange, description }: A11yToggleProps) {
  const id = useId();
  const descId = description ? `${id}-desc` : undefined;

  return (
    <div className="ux4g-a11y-control">
      <div className="ux4g-a11y-control-text">
        <label htmlFor={id} className="ux4g-a11y-control-label">{label}</label>
        {description && <span id={descId} className="ux4g-a11y-control-desc">{description}</span>}
      </div>
      <button id={id} type="button" role="switch" aria-checked={checked} aria-describedby={descId} onClick={onChange} className={`ux4g-a11y-toggle ${checked ? 'ux4g-a11y-toggle--on' : ''}`}>
        <span className="ux4g-a11y-toggle-thumb" />
      </button>
    </div>
  );
}

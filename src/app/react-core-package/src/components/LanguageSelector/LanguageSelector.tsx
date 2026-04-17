import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { LanguageSelectorProps } from './LanguageSelector.types';

export const LanguageSelector = forwardRef<HTMLSelectElement, LanguageSelectorProps>(
  ({ languages, value, onChange, label = 'Select Language', disabled = false, className, ...props }, ref) => (
    <div className={cn('ux4g-language-selector inline-flex items-center gap-2', className)} {...props}>
      <label htmlFor="ux4g-lang-select" className="text-sm text-muted-foreground sr-only">{label}</label>
      <select
        ref={ref}
        id="ux4g-lang-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        aria-label={label}
        className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeLabel} ({lang.label})
          </option>
        ))}
      </select>
    </div>
  )
);

LanguageSelector.displayName = 'LanguageSelector';

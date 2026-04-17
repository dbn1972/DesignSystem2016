/**
 * FormBuilder Component
 * Generates forms from a JSON schema of field configurations.
 *
 * @example
 * ```tsx
 * <FormBuilder
 *   title="Apply for Certificate"
 *   fields={[
 *     { key: 'name', label: 'Full Name', type: 'text', required: true },
 *     { key: 'email', label: 'Email', type: 'email', required: true },
 *     { key: 'state', label: 'State', type: 'select', options: [...] },
 *   ]}
 *   onSubmit={(values) => console.log(values)}
 * />
 * ```
 */

import { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { FormBuilderProps, FormFieldConfig } from './FormBuilder.types';

export const FormBuilder = forwardRef<HTMLFormElement, FormBuilderProps>(
  (
    {
      fields,
      onSubmit,
      submitLabel = 'Submit',
      loading = false,
      title,
      description,
      className,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = useState<Record<string, string>>(() => {
      const init: Record<string, string> = {};
      fields.forEach((f) => { init[f.key] = f.defaultValue || ''; });
      return init;
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const setValue = useCallback((key: string, val: string) => {
      setValues((prev) => ({ ...prev, [key]: val }));
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }, []);

    const validate = useCallback((): boolean => {
      const newErrors: Record<string, string> = {};
      for (const field of fields) {
        const val = values[field.key]?.trim() || '';
        if (field.required && !val) {
          newErrors[field.key] = field.errorMessage || `${field.label} is required`;
        } else if (field.pattern && val && !new RegExp(field.pattern).test(val)) {
          newErrors[field.key] = field.errorMessage || `Invalid ${field.label}`;
        }
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }, [fields, values]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) onSubmit(values);
    };

    const renderField = (field: FormFieldConfig) => {
      const id = `fb-${field.key}`;
      const errorId = `${id}-error`;
      const hintId = `${id}-hint`;
      const hasError = !!errors[field.key];
      const describedBy = [field.hint ? hintId : undefined, hasError ? errorId : undefined].filter(Boolean).join(' ') || undefined;

      const inputClass = cn(
        'w-full px-4 py-3 border rounded-lg bg-background text-foreground',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        hasError ? 'border-destructive' : 'border-border'
      );

      let input;
      switch (field.type) {
        case 'textarea':
          input = (
            <textarea
              id={id}
              value={values[field.key]}
              onChange={(e) => setValue(field.key, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              aria-invalid={hasError}
              aria-describedby={describedBy}
              rows={4}
              className={inputClass}
            />
          );
          break;
        case 'select':
          input = (
            <select
              id={id}
              value={values[field.key]}
              onChange={(e) => setValue(field.key, e.target.value)}
              required={field.required}
              aria-invalid={hasError}
              aria-describedby={describedBy}
              className={inputClass}
            >
              <option value="">{field.placeholder || 'Select...'}</option>
              {field.options?.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          );
          break;
        case 'checkbox':
          input = (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                id={id}
                checked={values[field.key] === 'true'}
                onChange={(e) => setValue(field.key, String(e.target.checked))}
                aria-invalid={hasError}
                aria-describedby={describedBy}
                className="h-5 w-5 rounded border-border"
              />
              <span className="text-sm text-foreground">{field.label}</span>
            </label>
          );
          break;
        case 'radio':
          input = (
            <fieldset aria-describedby={describedBy}>
              <legend className="sr-only">{field.label}</legend>
              <div className="flex flex-col gap-2">
                {field.options?.map((o) => (
                  <label key={o.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={field.key}
                      value={o.value}
                      checked={values[field.key] === o.value}
                      onChange={(e) => setValue(field.key, e.target.value)}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-foreground">{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          );
          break;
        default:
          input = (
            <input
              type={field.type}
              id={id}
              value={values[field.key]}
              onChange={(e) => setValue(field.key, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              aria-invalid={hasError}
              aria-describedby={describedBy}
              className={inputClass}
            />
          );
      }

      return (
        <div key={field.key} className="ux4g-formbuilder-field">
          {field.type !== 'checkbox' && field.type !== 'radio' && (
            <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1">
              {field.label}
              {field.required && <span className="text-destructive ml-1" aria-hidden="true">*</span>}
            </label>
          )}
          {input}
          {field.hint && !hasError && (
            <p id={hintId} className="text-sm text-muted-foreground mt-1">{field.hint}</p>
          )}
          {hasError && (
            <p id={errorId} role="alert" className="text-sm text-destructive mt-1">{errors[field.key]}</p>
          )}
        </div>
      );
    };

    return (
      <form ref={ref} onSubmit={handleSubmit} noValidate className={cn('ux4g-formbuilder space-y-6', className)} {...props}>
        {title && <h2 className="text-xl font-bold text-foreground">{title}</h2>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {fields.map(renderField)}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60"
        >
          {loading ? 'Submitting...' : submitLabel}
        </button>
      </form>
    );
  }
);

FormBuilder.displayName = 'FormBuilder';

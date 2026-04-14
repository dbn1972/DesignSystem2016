/**
 * Field Component
 * Container for form field composition (Label + Input + HintText/ErrorText)
 *
 * @example
 * ```tsx
 * <Field error={!!errors.email}>
 *   <Label htmlFor="email" required>Email</Label>
 *   <Input id="email" type="email" error={!!errors.email} />
 *   {errors.email && <ErrorText>{errors.email}</ErrorText>}
 *   {!errors.email && <HintText>We'll never share your email</HintText>}
 * </Field>
 * ```
 */

import { Children, forwardRef, isValidElement, useId } from 'react';
import { cn } from '../../utils/cn';
import { FieldProps } from './Field.types';
import { FieldContext } from './Field.context';
import { Label } from '../Label';
import { HintText } from '../HintText';
import { ErrorText } from '../ErrorText';

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      id,
      className,
      error = false,
      errorText,
      hint,
      label,
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const inputId = id ?? `ux4g-field-${reactId}`;
    const labelId = `${inputId}-label`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const invalid = error || Boolean(errorText);
    const childArray = Children.toArray(children);
    const hasHintChild = childArray.some(
      (child) => isValidElement(child) && child.type === HintText
    );
    const hasErrorChild = childArray.some(
      (child) => isValidElement(child) && child.type === ErrorText
    );
    const describedBy = [
      hint || hasHintChild ? hintId : null,
      errorText || hasErrorChild ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <FieldContext.Provider
        value={{
          inputId,
          labelId,
          hintId,
          errorId,
          required,
          disabled,
          invalid,
          describedBy,
        }}
      >
        <div
          ref={ref}
          className={cn(
            'ux4g-form-group',
            invalid && 'ux4g-form-group-error',
            disabled && 'ux4g-form-group-disabled',
            className
          )}
          {...props}
        >
          {label ? (
            <Label id={labelId}>
              {label}
            </Label>
          ) : null}
          {children}
          {hint ? <HintText id={hintId}>{hint}</HintText> : null}
          {errorText ? <ErrorText id={errorId}>{errorText}</ErrorText> : null}
        </div>
      </FieldContext.Provider>
    );
  }
);

Field.displayName = 'Field';

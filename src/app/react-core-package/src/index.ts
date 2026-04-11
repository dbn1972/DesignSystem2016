/**
 * UX4G React Core Components
 * React component library for Indian Government Design System
 *
 * @packageDocumentation
 */

// Form Components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Checkbox } from './components/Checkbox';
export { Radio } from './components/Radio';
export { Select } from './components/Select';
export { Textarea } from './components/Textarea';
export { Field } from './components/Field';
export { Label } from './components/Label';
export { HintText } from './components/HintText';
export { ErrorText } from './components/ErrorText';

// Feedback Components
export { Alert } from './components/Alert';

// Type Exports
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { CheckboxProps } from './components/Checkbox';
export type { RadioProps } from './components/Radio';
export type { SelectProps } from './components/Select';
export type { TextareaProps } from './components/Textarea';
export type { FieldProps } from './components/Field';
export type { LabelProps } from './components/Label';
export type { HintTextProps } from './components/HintText';
export type { ErrorTextProps } from './components/ErrorText';
export type { AlertProps } from './components/Alert';

// Common Types
export type {
  ComponentSize,
  ComponentVariant,
  StatusVariant,
  BaseComponentProps,
  InteractiveComponentProps,
  FormFieldProps,
  LoadingStateProps,
  ControlledValueProps,
  DescribableProps
} from './types/common';

// Utilities
export { cn } from './utils/cn';

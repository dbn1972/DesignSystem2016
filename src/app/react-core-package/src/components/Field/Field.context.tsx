import React, { createContext, useContext } from 'react';

export interface FieldContextValue {
  inputId: string;
  labelId: string;
  hintId: string;
  errorId: string;
  required: boolean;
  disabled: boolean;
  invalid: boolean;
  describedBy?: string;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

export function useFieldContext(): FieldContextValue | null {
  return useContext(FieldContext);
}

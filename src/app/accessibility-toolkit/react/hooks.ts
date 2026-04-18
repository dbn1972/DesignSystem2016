/**
 * @ux4g/a11y-react — Hooks
 *
 * useA11y — access state + actions
 * useA11yConfig — access resolved configuration
 */

import { useContext } from 'react';
import { A11yStateContext, A11yConfigContext } from './provider';
import type { A11yStoreValue, ResolvedA11yConfig } from '../core';

export function useA11y(): A11yStoreValue {
  const ctx = useContext(A11yStateContext);
  if (!ctx) {
    throw new Error('useA11y must be used within <A11yToolkit>.');
  }
  return ctx;
}

export function useA11yConfig(): ResolvedA11yConfig {
  const ctx = useContext(A11yConfigContext);
  if (!ctx) {
    throw new Error('useA11yConfig must be used within <A11yToolkit>.');
  }
  return ctx;
}

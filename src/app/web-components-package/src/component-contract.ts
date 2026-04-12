/**
 * Canonical UX4G component contract for web components.
 *
 * The values here define the public vocabulary that should be shared with
 * React and Angular packages. Legacy aliases can be normalized for backward
 * compatibility, but new documentation and new components should use the
 * canonical names only.
 */

export const COMPONENT_SIZES = ['sm', 'md', 'lg'] as const;
export type ComponentSize = (typeof COMPONENT_SIZES)[number];
export type ComponentMaturity = 'stable' | 'beta' | 'experimental';

export const COMPONENT_VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost', 'destructive'] as const;
export type ComponentVariant = (typeof COMPONENT_VARIANTS)[number];

export const STATUS_VARIANTS = ['neutral', 'info', 'success', 'warning', 'error'] as const;
export type StatusVariant = (typeof STATUS_VARIANTS)[number];

export const COMPONENT_STATES = [
  'disabled',
  'loading',
  'readonly',
  'required',
  'invalid',
  'selected',
  'checked',
  'open',
  'active'
] as const;
export type ComponentState = (typeof COMPONENT_STATES)[number];

export const COMPONENT_SLOT_NAMES = [
  'default',
  'label',
  'description',
  'hint',
  'error',
  'icon-leading',
  'icon-trailing',
  'actions',
  'header',
  'footer',
  'empty'
] as const;
export type ComponentSlotName = (typeof COMPONENT_SLOT_NAMES)[number];

export const COMPONENT_EVENTS = {
  activate: 'ux4g-activate',
  change: 'ux4g-change',
  openChange: 'ux4g-open-change',
  selectionChange: 'ux4g-selection-change',
  dismiss: 'ux4g-dismiss',
  submit: 'ux4g-submit',
  valueCommit: 'ux4g-value-commit'
} as const;

export type ComponentEventName = keyof typeof COMPONENT_EVENTS;

const INTERACTIVE_VARIANT_ALIASES: Record<string, ComponentVariant> = {
  danger: 'destructive',
  outline: 'secondary'
};

const STATUS_VARIANT_ALIASES: Record<string, StatusVariant> = {
  danger: 'error',
  primary: 'neutral',
  secondary: 'neutral'
};

export function normalizeInteractiveVariant(value: string | null | undefined): ComponentVariant {
  if (!value) return 'primary';
  return INTERACTIVE_VARIANT_ALIASES[value] ?? (value as ComponentVariant);
}

export function normalizeStatusVariant(value: string | null | undefined): StatusVariant {
  if (!value) return 'info';
  return STATUS_VARIANT_ALIASES[value] ?? (value as StatusVariant);
}

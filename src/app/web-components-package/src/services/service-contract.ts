/**
 * UX4G Web Component Services — Shared Contract
 *
 * Defines the service-level vocabulary shared across React, Angular, and
 * Web Component implementations. This is the single source of truth for
 * service flow structure, step definitions, and validation rules.
 */

// ── Service Flow Steps ──
export const SERVICE_STEPS = [
  'sign-in',
  'sign-up',
  'verify-otp',
  'forgot-password',
  'auth-status',
  'eligibility',
  'start',
  'form-personal',
  'form-address',
  'form-additional',
  'form-review',
  'document-upload',
  'review-summary',
  'declaration',
  'payment-summary',
  'payment-receipt',
  'submission-success',
  'status-tracker',
  'user-profile',
] as const;

export type ServiceStep = (typeof SERVICE_STEPS)[number];

// ── Service Events ──
export const SERVICE_EVENTS = {
  stepComplete: 'ux4g-step-complete',
  stepBack: 'ux4g-step-back',
  formSave: 'ux4g-form-save',
  formSubmit: 'ux4g-form-submit',
  authSuccess: 'ux4g-auth-success',
  authError: 'ux4g-auth-error',
  paymentComplete: 'ux4g-payment-complete',
  navigate: 'ux4g-navigate',
} as const;

// ── Validation Rules (shared across all stacks) ──
export const VALIDATION = {
  mobile: /^[6-9]\d{9}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  aadhaar: /^\d{12}$/,
  pan: /^[A-Z]{5}\d{4}[A-Z]$/,
  pincode: /^\d{6}$/,
  otp: /^\d{6}$/,
  password: { minLength: 8 },
} as const;

// ── Service Header Config ──
export interface ServiceHeaderConfig {
  icon: string;
  iconColor: string;
  category: string;
  title: string;
  serviceName: string;
}

// ── Service Footer Config ──
export interface ServiceFooterConfig {
  leftText: string;
  rightText: string;
}

// ── Form Field Definition (framework-agnostic) ──
export interface FieldDef {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea' | 'number';
  required: boolean;
  placeholder?: string;
  pattern?: RegExp;
  options?: { label: string; value: string }[];
  hint?: string;
  maxLength?: number;
}

// ── Personal Form Fields ──
export const PERSONAL_FIELDS: FieldDef[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'As per Aadhaar card' },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
  { name: 'gender', label: 'Gender', type: 'select', required: true, options: [
    { label: 'Female', value: 'female' }, { label: 'Male', value: 'male' }, { label: 'Other', value: 'other' },
  ]},
  { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
  { name: 'motherName', label: "Mother's Name", type: 'text', required: true },
  { name: 'mobileNumber', label: 'Mobile Number', type: 'tel', required: true, pattern: VALIDATION.mobile, maxLength: 10 },
  { name: 'email', label: 'Email', type: 'email', required: false },
  { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: false, pattern: VALIDATION.aadhaar, maxLength: 12 },
];

// ── Address Form Fields ──
export const ADDRESS_FIELDS: FieldDef[] = [
  { name: 'addressLine1', label: 'Address Line 1', type: 'text', required: true },
  { name: 'addressLine2', label: 'Address Line 2', type: 'text', required: false },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'district', label: 'District', type: 'text', required: true },
  { name: 'state', label: 'State / UT', type: 'select', required: true, options: [] }, // populated at runtime
  { name: 'pincode', label: 'PIN Code', type: 'text', required: true, pattern: VALIDATION.pincode, maxLength: 6 },
];

// ── Additional Form Fields ──
export const ADDITIONAL_FIELDS: FieldDef[] = [
  { name: 'purpose', label: 'Purpose of Application', type: 'select', required: true, options: [
    { label: 'Birth Certificate', value: 'birth' },
    { label: 'Death Certificate', value: 'death' },
    { label: 'Income Certificate', value: 'income' },
    { label: 'Caste Certificate', value: 'caste' },
    { label: 'Domicile Certificate', value: 'domicile' },
  ]},
  { name: 'urgency', label: 'Processing Type', type: 'select', required: true, options: [
    { label: 'Normal (7–10 days)', value: 'normal' },
    { label: 'Tatkal / Urgent (2–3 days)', value: 'tatkal' },
  ]},
  { name: 'remarks', label: 'Additional Remarks', type: 'textarea', required: false },
];

// ── Validate a single field ──
export function validateField(field: FieldDef, value: string): string | null {
  if (field.required && !value.trim()) return `${field.label} is required`;
  if (field.pattern && value && !field.pattern.test(value)) return `Enter a valid ${field.label.toLowerCase()}`;
  return null;
}

// ── Validate all fields ──
export function validateForm(fields: FieldDef[], data: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const err = validateField(field, data[field.name] || '');
    if (err) errors[field.name] = err;
  }
  return errors;
}

// ============================================================================
// UX4G VALIDATION UTILITIES
// ============================================================================
// Reusable validation functions for government digital services
// Use with Content Design System error messages
//
// Last Updated: April 2026
// Version: 1.0.0
// ============================================================================

import { ERROR_MESSAGES } from "../content/content-library";

// ==================== VALIDATION RESULT TYPE ====================

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

// ==================== BASIC VALIDATIONS ====================

/**
 * Check if value is not empty
 */
export const required = (value: string, fieldName: string): ValidationResult => {
  const trimmed = value?.trim();
  if (!trimmed || trimmed.length === 0) {
    return {
      valid: false,
      error: ERROR_MESSAGES.required(fieldName)
    };
  }
  return { valid: true };
};

/**
 * Validate email format
 */
export const email = (value: string): ValidationResult => {
  if (!value) return { valid: true }; // Optional field

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(value)) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidEmail
    };
  }
  
  return { valid: true };
};

/**
 * Validate mobile number (10 digits)
 */
export const mobileNumber = (value: string): ValidationResult => {
  if (!value) return { valid: false, error: ERROR_MESSAGES.requiredField };

  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length !== 10) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidMobile
    };
  }
  
  return { valid: true };
};

/**
 * Validate Aadhaar number (12 digits)
 */
export const aadhaarNumber = (value: string): ValidationResult => {
  if (!value) return { valid: true }; // Optional field

  const cleaned = value.replace(/\s/g, '');
  
  if (!/^\d{12}$/.test(cleaned)) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidAadhaar
    };
  }
  
  return { valid: true };
};

/**
 * Validate PAN number (ABCDE1234F format)
 */
export const panNumber = (value: string): ValidationResult => {
  if (!value) return { valid: true }; // Optional field

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  
  if (!panRegex.test(value.toUpperCase())) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidPAN
    };
  }
  
  return { valid: true };
};

/**
 * Validate PIN code (6 digits)
 */
export const pincode = (value: string): ValidationResult => {
  if (!value) return { valid: false, error: ERROR_MESSAGES.requiredField };

  if (!/^\d{6}$/.test(value)) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidPincode
    };
  }
  
  return { valid: true };
};

// ==================== PASSWORD VALIDATIONS ====================

/**
 * Validate password strength
 */
export const password = (value: string): ValidationResult => {
  if (!value) {
    return {
      valid: false,
      error: ERROR_MESSAGES.requiredField
    };
  }

  if (value.length < 8) {
    return {
      valid: false,
      error: ERROR_MESSAGES.passwordTooShort
    };
  }

  // Check for uppercase, lowercase, number, and special character
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
    return {
      valid: false,
      error: ERROR_MESSAGES.passwordWeak
    };
  }

  return { valid: true };
};

/**
 * Validate password confirmation
 */
export const confirmPassword = (password: string, confirmPass: string): ValidationResult => {
  if (!confirmPass) {
    return {
      valid: false,
      error: ERROR_MESSAGES.requiredField
    };
  }

  if (password !== confirmPass) {
    return {
      valid: false,
      error: ERROR_MESSAGES.passwordMismatch
    };
  }

  return { valid: true };
};

// ==================== LENGTH VALIDATIONS ====================

/**
 * Validate minimum length
 */
export const minLength = (value: string, min: number, fieldName: string): ValidationResult => {
  if (value.length < min) {
    return {
      valid: false,
      error: ERROR_MESSAGES.tooShort(fieldName, min)
    };
  }
  return { valid: true };
};

/**
 * Validate maximum length
 */
export const maxLength = (value: string, max: number, fieldName: string): ValidationResult => {
  if (value.length > max) {
    return {
      valid: false,
      error: ERROR_MESSAGES.tooLong(fieldName, max)
    };
  }
  return { valid: true };
};

/**
 * Validate exact length
 */
export const exactLength = (value: string, length: number, fieldName: string): ValidationResult => {
  if (value.length !== length) {
    return {
      valid: false,
      error: ERROR_MESSAGES.exactLength(fieldName, length)
    };
  }
  return { valid: true };
};

// ==================== NUMBER VALIDATIONS ====================

/**
 * Validate minimum value
 */
export const minValue = (value: number, min: number, fieldName: string): ValidationResult => {
  if (value < min) {
    return {
      valid: false,
      error: ERROR_MESSAGES.tooSmall(fieldName, min)
    };
  }
  return { valid: true };
};

/**
 * Validate maximum value
 */
export const maxValue = (value: number, max: number, fieldName: string): ValidationResult => {
  if (value > max) {
    return {
      valid: false,
      error: ERROR_MESSAGES.tooLarge(fieldName, max)
    };
  }
  return { valid: true };
};

/**
 * Validate number in range
 */
export const range = (value: number, min: number, max: number, fieldName: string): ValidationResult => {
  if (value < min || value > max) {
    return {
      valid: false,
      error: ERROR_MESSAGES.outOfRange(fieldName, min, max)
    };
  }
  return { valid: true };
};

// ==================== DATE VALIDATIONS ====================

/**
 * Validate date format
 */
export const date = (value: string): ValidationResult => {
  if (!value) return { valid: false, error: ERROR_MESSAGES.requiredField };

  const dateObj = new Date(value);
  
  if (isNaN(dateObj.getTime())) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidDate
    };
  }
  
  return { valid: true };
};

/**
 * Validate age (minimum)
 */
export const minAge = (dateOfBirth: string, minimumAge: number): ValidationResult => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  if (age < minimumAge) {
    return {
      valid: false,
      error: ERROR_MESSAGES.ageTooYoung(minimumAge)
    };
  }
  
  return { valid: true };
};

/**
 * Validate age (maximum)
 */
export const maxAge = (dateOfBirth: string, maximumAge: number): ValidationResult => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  if (age > maximumAge) {
    return {
      valid: false,
      error: ERROR_MESSAGES.ageTooOld(maximumAge)
    };
  }
  
  return { valid: true };
};

// ==================== FILE VALIDATIONS ====================

/**
 * Validate file size
 */
export const fileSize = (file: File, maxSizeMB: number): ValidationResult => {
  const maxBytes = maxSizeMB * 1024 * 1024;
  
  if (file.size > maxBytes) {
    return {
      valid: false,
      error: ERROR_MESSAGES.fileTooLarge(`${maxSizeMB}MB`)
    };
  }
  
  return { valid: true };
};

/**
 * Validate file type
 */
export const fileType = (file: File, allowedTypes: string[]): ValidationResult => {
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  
  if (!fileExtension || !allowedTypes.includes(fileExtension)) {
    return {
      valid: false,
      error: ERROR_MESSAGES.invalidFileType(allowedTypes.join(', '))
    };
  }
  
  return { valid: true };
};

// ==================== COMPOSITE VALIDATIONS ====================

/**
 * Run multiple validations on a value
 */
export const validateField = (
  value: any,
  validators: Array<(value: any) => ValidationResult>
): ValidationResult => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.valid) {
      return result;
    }
  }
  return { valid: true };
};

/**
 * Validate entire form
 */
export const validateForm = (
  formData: Record<string, any>,
  validationRules: Record<string, Array<(value: any) => ValidationResult>>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  for (const [field, validators] of Object.entries(validationRules)) {
    const value = formData[field];
    const result = validateField(value, validators);
    
    if (!result.valid && result.error) {
      errors[field] = result.error;
    }
  }
  
  return errors;
};

// ==================== HELPERS ====================

/**
 * Format phone number for display
 */
export const formatMobileNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return value;
};

/**
 * Format Aadhaar number for display
 */
export const formatAadhaarNumber = (value: string): string => {
  const cleaned = value.replace(/\s/g, '');
  if (cleaned.length === 12) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  }
  return value;
};

/**
 * Clean mobile number (remove non-digits)
 */
export const cleanMobileNumber = (value: string): string => {
  return value.replace(/\D/g, '');
};

/**
 * Clean Aadhaar number (remove spaces)
 */
export const cleanAadhaarNumber = (value: string): string => {
  return value.replace(/\s/g, '');
};

// ==================== EXPORTS ====================

export const validators = {
  required,
  email,
  mobileNumber,
  aadhaarNumber,
  panNumber,
  pincode,
  password,
  confirmPassword,
  minLength,
  maxLength,
  exactLength,
  minValue,
  maxValue,
  range,
  date,
  minAge,
  maxAge,
  fileSize,
  fileType
};

export const helpers = {
  formatMobileNumber,
  formatAadhaarNumber,
  cleanMobileNumber,
  cleanAadhaarNumber
};

export default validators;

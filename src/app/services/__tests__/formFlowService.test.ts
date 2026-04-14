import { describe, it, expect } from 'vitest';
import {
  getCertificateTypeLabel,
  formatAadhaarForDisplay,
  validatePersonalInfo,
  validateAddressInfo,
  validateAdditionalInfo,
} from '../formFlowService';
import type { PersonalInfo, AddressInfo, AdditionalInfo } from '../certificateFlow';

// ── getCertificateTypeLabel ───────────────────────────────────────────────────

describe('getCertificateTypeLabel', () => {
  it.each([
    ['income', 'Income Certificate'],
    ['domicile', 'Domicile Certificate'],
    ['caste', 'Caste Certificate'],
    ['birth', 'Birth Certificate'],
  ] as const)('maps %s to "%s"', (type, label) => {
    expect(getCertificateTypeLabel(type)).toBe(label);
  });
});

// ── formatAadhaarForDisplay ───────────────────────────────────────────────────

describe('formatAadhaarForDisplay', () => {
  it('formats 12 digits into groups of 4', () => {
    expect(formatAadhaarForDisplay('123456789012')).toBe('1234 5678 9012');
  });

  it('strips non-digit characters before formatting', () => {
    expect(formatAadhaarForDisplay('1234-5678-9012')).toBe('1234 5678 9012');
  });

  it('truncates to 12 digits', () => {
    expect(formatAadhaarForDisplay('12345678901234')).toBe('1234 5678 9012');
  });

  it('handles partial input gracefully', () => {
    expect(formatAadhaarForDisplay('1234')).toBe('1234');
    expect(formatAadhaarForDisplay('')).toBe('');
  });
});

// ── validatePersonalInfo ──────────────────────────────────────────────────────

const validPersonal: PersonalInfo = {
  fullName: 'Priya Sharma',
  dateOfBirth: '1990-05-15',
  gender: 'female',
  fatherName: 'Ramesh Sharma',
  motherName: 'Sunita Sharma',
  maritalStatus: 'single',
  mobileNumber: '9876543210',
  email: '',
  aadhaarNumber: '',
};

describe('validatePersonalInfo', () => {
  it('returns no errors for valid data', () => {
    expect(validatePersonalInfo(validPersonal)).toEqual({});
  });

  it('reports error for missing fullName', () => {
    const errors = validatePersonalInfo({ ...validPersonal, fullName: '' });
    expect(errors.fullName).toBeTruthy();
  });

  it('reports error for missing dateOfBirth', () => {
    const errors = validatePersonalInfo({ ...validPersonal, dateOfBirth: '' });
    expect(errors.dateOfBirth).toBeTruthy();
  });

  it('reports error for missing gender', () => {
    const errors = validatePersonalInfo({ ...validPersonal, gender: '' });
    expect(errors.gender).toBeTruthy();
  });

  it('reports error for missing fatherName', () => {
    const errors = validatePersonalInfo({ ...validPersonal, fatherName: '' });
    expect(errors.fatherName).toBeTruthy();
  });

  it('reports error for missing mobileNumber', () => {
    const errors = validatePersonalInfo({ ...validPersonal, mobileNumber: '' });
    expect(errors.mobileNumber).toBeTruthy();
  });

  it('reports error for invalid mobile number format', () => {
    const errors = validatePersonalInfo({ ...validPersonal, mobileNumber: '12345' });
    expect(errors.mobileNumber).toBeTruthy();
  });

  it('reports error for invalid email when provided', () => {
    const errors = validatePersonalInfo({ ...validPersonal, email: 'not-an-email' });
    expect(errors.email).toBeTruthy();
  });

  it('does not report email error when email is empty', () => {
    const errors = validatePersonalInfo({ ...validPersonal, email: '' });
    expect(errors.email).toBeUndefined();
  });

  it('reports error for invalid Aadhaar when provided', () => {
    const errors = validatePersonalInfo({ ...validPersonal, aadhaarNumber: '123' });
    expect(errors.aadhaarNumber).toBeTruthy();
  });

  it('does not report Aadhaar error when aadhaarNumber is empty', () => {
    const errors = validatePersonalInfo({ ...validPersonal, aadhaarNumber: '' });
    expect(errors.aadhaarNumber).toBeUndefined();
  });
});

// ── validateAddressInfo ───────────────────────────────────────────────────────

const validAddress: AddressInfo = {
  addressLine1: '123 Main Street',
  addressLine2: '',
  landmark: '',
  city: 'Mumbai',
  district: 'Mumbai',
  state: 'Maharashtra',
  pincode: '400001',
  residenceType: 'owned',
  yearsAtAddress: '5',
};

describe('validateAddressInfo', () => {
  it('returns no errors for valid data', () => {
    expect(validateAddressInfo(validAddress)).toEqual({});
  });

  it('reports error for missing addressLine1', () => {
    expect(validateAddressInfo({ ...validAddress, addressLine1: '' }).addressLine1).toBeTruthy();
  });

  it('reports error for missing city', () => {
    expect(validateAddressInfo({ ...validAddress, city: '' }).city).toBeTruthy();
  });

  it('reports error for missing state', () => {
    expect(validateAddressInfo({ ...validAddress, state: '' }).state).toBeTruthy();
  });

  it('reports error for missing pincode', () => {
    expect(validateAddressInfo({ ...validAddress, pincode: '' }).pincode).toBeTruthy();
  });

  it('reports error for invalid pincode format', () => {
    expect(validateAddressInfo({ ...validAddress, pincode: '123' }).pincode).toBeTruthy();
  });

  it('reports error for missing residenceType', () => {
    expect(validateAddressInfo({ ...validAddress, residenceType: '' }).residenceType).toBeTruthy();
  });
});

// ── validateAdditionalInfo ────────────────────────────────────────────────────

const validAdditional: AdditionalInfo = {
  certificateType: 'domicile',
  purpose: 'Employment',
  annualIncome: '',
  occupation: 'Engineer',
  employerName: '',
  additionalInfo: '',
};

describe('validateAdditionalInfo', () => {
  it('returns no errors for valid non-income data', () => {
    expect(validateAdditionalInfo(validAdditional)).toEqual({});
  });

  it('reports error for missing purpose', () => {
    expect(validateAdditionalInfo({ ...validAdditional, purpose: '' }).purpose).toBeTruthy();
  });

  it('reports error for missing occupation', () => {
    expect(validateAdditionalInfo({ ...validAdditional, occupation: '' }).occupation).toBeTruthy();
  });

  it('requires annualIncome when certificateType is income', () => {
    const errors = validateAdditionalInfo({
      ...validAdditional,
      certificateType: 'income',
      annualIncome: '',
    });
    expect(errors.annualIncome).toBeTruthy();
  });

  it('does not require annualIncome for non-income certificate types', () => {
    const errors = validateAdditionalInfo({
      ...validAdditional,
      certificateType: 'caste',
      annualIncome: '',
    });
    expect(errors.annualIncome).toBeUndefined();
  });
});

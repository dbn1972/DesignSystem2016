/**
 * UX4G Angular Services — Shared Models
 */

// ── Auth ──
export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface OtpVerifyRequest {
  otp: string;
  referenceId: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: UserProfile;
  message: string;
  referenceId?: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  aadhaar?: string;
  avatar?: string;
  role: 'citizen' | 'officer';
}

// ── Eligibility ──
export interface EligibilityRequest {
  age: number;
  nationality: string;
  state: string;
  purpose: string;
}

export interface EligibilityResponse {
  eligible: boolean;
  reason: string;
  requirements: string[];
  fees: number;
}

// ── Form Flow ──
export interface PersonalDetails {
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  fatherName: string;
  motherName: string;
  aadhaarNumber: string;
}

export interface AddressDetails {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
}

export interface AdditionalDetails {
  purpose: string;
  urgency: 'normal' | 'tatkal';
  remarks?: string;
}

export interface ApplicationForm {
  personal: PersonalDetails;
  address: AddressDetails;
  additional: AdditionalDetails;
}

// ── Document Upload ──
export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'uploading' | 'uploaded' | 'verified' | 'rejected';
  progress: number;
  url?: string;
  error?: string;
}

export interface DocumentRequirement {
  id: string;
  label: string;
  description: string;
  required: boolean;
  acceptedFormats: string[];
  maxSizeMB: number;
}

// ── Payment ──
export interface PaymentSummary {
  applicationFee: number;
  processingFee: number;
  gst: number;
  total: number;
  currency: string;
}

export type PaymentMethod = 'upi' | 'netbanking' | 'card' | 'wallet';

export interface PaymentRequest {
  applicationId: string;
  method: PaymentMethod;
  amount: number;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  receiptUrl?: string;
  message: string;
  status: 'success' | 'failed' | 'pending' | 'processing';
}

// ── Status Tracking ──
export type ApplicationStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'document-verification'
  | 'approved'
  | 'rejected'
  | 'payment-pending'
  | 'issued';

export interface StatusUpdate {
  status: ApplicationStatus;
  timestamp: string;
  description: string;
  officer?: string;
}

export interface ApplicationTracker {
  applicationId: string;
  applicantName: string;
  serviceType: string;
  currentStatus: ApplicationStatus;
  submittedDate: string;
  lastUpdated: string;
  timeline: StatusUpdate[];
  estimatedCompletion?: string;
}

// ── API Response Wrapper ──
export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

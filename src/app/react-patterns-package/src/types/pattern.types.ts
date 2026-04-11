/**
 * Common types for UX4G React Patterns
 */

/**
 * Base pattern props
 */
export interface BasePatternProps {
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Test identifier for automated testing
   */
  testId?: string;
}

/**
 * Authentication result
 */
export interface AuthenticationResult {
  /**
   * Whether authentication was successful
   */
  success: boolean;

  /**
   * User identifier (if successful)
   */
  userId?: string;

  /**
   * Session token (if successful)
   */
  token?: string;

  /**
   * Error message (if failed)
   */
  error?: string;

  /**
   * Redirect URL after successful authentication
   */
  redirectUrl?: string;
}

/**
 * OTP verification result
 */
export interface OTPVerificationResult {
  /**
   * Whether OTP was verified successfully
   */
  verified: boolean;

  /**
   * Error message (if failed)
   */
  error?: string;

  /**
   * Session token (if verified)
   */
  token?: string;
}

/**
 * Document upload result
 */
export interface DocumentUploadResult {
  /**
   * Unique identifier for the uploaded document
   */
  documentId: string;

  /**
   * Original filename
   */
  filename: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * Upload timestamp
   */
  uploadedAt: Date;

  /**
   * Document URL (if applicable)
   */
  url?: string;
}

/**
 * Upload error
 */
export interface UploadError {
  /**
   * Original filename
   */
  filename: string;

  /**
   * Error reason
   */
  reason: string;

  /**
   * Error code
   */
  code?: string;
}

/**
 * Application status
 */
export type ApplicationStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'pending-payment'
  | 'approved'
  | 'rejected'
  | 'completed'
  | 'cancelled';

/**
 * Status tracking entry
 */
export interface StatusEntry {
  /**
   * Status type
   */
  status: ApplicationStatus;

  /**
   * Status label to display
   */
  label: string;

  /**
   * Status description
   */
  description?: string;

  /**
   * Timestamp
   */
  timestamp: Date;

  /**
   * Whether this is the current status
   */
  current?: boolean;

  /**
   * Additional metadata
   */
  metadata?: Record<string, any>;
}

/**
 * Payment details
 */
export interface PaymentDetails {
  /**
   * Payment amount
   */
  amount: number;

  /**
   * Currency code (default: INR)
   */
  currency?: string;

  /**
   * Payment method
   */
  method?: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cash';

  /**
   * Transaction ID
   */
  transactionId?: string;

  /**
   * Payment status
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed';

  /**
   * Payment timestamp
   */
  timestamp?: Date;
}

/**
 * Fee breakdown item
 */
export interface FeeItem {
  /**
   * Fee label
   */
  label: string;

  /**
   * Fee amount
   */
  amount: number;

  /**
   * Whether this is tax/gst
   */
  isTax?: boolean;

  /**
   * Description
   */
  description?: string;
}

/**
 * Submission confirmation data
 */
export interface SubmissionConfirmation {
  /**
   * Application/reference number
   */
  referenceNumber: string;

  /**
   * Submission timestamp
   */
  submittedAt: Date;

  /**
   * Expected processing time (in days)
   */
  processingTimeDays?: number;

  /**
   * Tracking URL
   */
  trackingUrl?: string;

  /**
   * Download receipt URL
   */
  receiptUrl?: string;

  /**
   * Additional instructions
   */
  instructions?: string[];
}

/**
 * Validation result
 */
export interface ValidationResult {
  /**
   * Whether validation passed
   */
  valid: boolean;

  /**
   * Validation errors by field
   */
  errors?: Record<string, string>;

  /**
   * General error message
   */
  message?: string;
}

/**
 * Save and resume data
 */
export interface SavedFormData {
  /**
   * Unique identifier for saved form
   */
  saveId: string;

  /**
   * Form data
   */
  data: Record<string, any>;

  /**
   * Save timestamp
   */
  savedAt: Date;

  /**
   * Expiry timestamp
   */
  expiresAt?: Date;

  /**
   * Resume URL/token
   */
  resumeToken?: string;
}

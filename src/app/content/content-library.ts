// ============================================================================
// UX4G CONTENT DESIGN SYSTEM - REUSABLE CONTENT LIBRARY
// ============================================================================
// Standardized labels, helper text, error messages, and validation messages
// for government digital services. Use these constants across all pages.
//
// Last Updated: April 2026
// Version: 2.0.0
// ============================================================================

// ==================== FIELD LABELS ====================

export const LABELS = {
  // Personal Information
  fullName: "Full Name",
  firstName: "First Name",
  middleName: "Middle Name",
  lastName: "Last Name",
  dateOfBirth: "Date of Birth",
  age: "Age",
  gender: "Gender",
  
  // Family Information
  fatherName: "Father's Name",
  motherName: "Mother's Name",
  spouseName: "Spouse's Name",
  guardianName: "Guardian's Name",
  
  // Contact Information
  mobileNumber: "Mobile Number",
  alternateMobile: "Alternate Mobile Number",
  email: "Email Address",
  alternateEmail: "Alternate Email Address",
  
  // Address Information
  addressLine1: "Address Line 1",
  addressLine2: "Address Line 2",
  landmark: "Landmark (Optional)",
  city: "City / Town",
  district: "District",
  state: "State / Union Territory",
  pincode: "PIN Code",
  country: "Country",
  
  // Government IDs
  aadhaarNumber: "Aadhaar Number",
  panNumber: "PAN Number",
  voterIdNumber: "Voter ID Number",
  passportNumber: "Passport Number",
  drivingLicenseNumber: "Driving License Number",
  
  // Account Information
  username: "Username",
  password: "Password",
  confirmPassword: "Confirm Password",
  currentPassword: "Current Password",
  newPassword: "New Password",
  
  // Other Common Fields
  maritalStatus: "Marital Status",
  occupation: "Occupation",
  income: "Annual Income",
  category: "Category",
  religion: "Religion (Optional)",
  nationality: "Nationality",
  
  // Document Upload
  documentType: "Document Type",
  uploadDocument: "Upload Document",
  
  // Application Fields
  applicationNumber: "Application Number",
  referenceNumber: "Reference Number",
  applicationDate: "Application Date",
  certificateType: "Certificate Type",
  purposeOfCertificate: "Purpose of Certificate",
  
  // Payment Fields
  paymentMethod: "Payment Method",
  amount: "Amount",
  transactionId: "Transaction ID",
  
  // Common Actions
  submit: "Submit",
  continue: "Continue",
  back: "Back",
  cancel: "Cancel",
  save: "Save",
  saveDraft: "Save Draft",
  edit: "Edit",
  delete: "Delete",
  download: "Download",
  print: "Print",
  verify: "Verify",
  
  // Status
  status: "Status",
  createdDate: "Created Date",
  lastUpdated: "Last Updated",
} as const;

// ==================== HELPER TEXT ====================

export const HELPER_TEXT = {
  // Personal Information
  fullName: "Enter your full name as shown on your identity document",
  dateOfBirth: "As shown on your birth certificate or identity document",
  gender: "Select your gender",
  
  // Family Information
  fatherName: "Enter your father's full name as per official records",
  motherName: "Enter your mother's full name as per official records",
  guardianName: "Enter guardian's name if applicant is a minor",
  
  // Contact Information
  mobileNumber: "10-digit mobile number (e.g., 9876543210)",
  email: "We'll send updates and confirmations to this email",
  alternateEmail: "Optional backup email for important notifications",
  
  // Address
  addressLine1: "House/Flat number, building name, street name",
  addressLine2: "Area, locality, or sector",
  landmark: "Nearby landmark for easy identification (optional)",
  pincode: "6-digit PIN code (e.g., 110001)",
  
  // Government IDs
  aadhaarNumber: "12-digit Aadhaar number (spaces optional)",
  panNumber: "10-character PAN in format ABCDE1234F",
  voterIdNumber: "Voter ID as shown on your Voter ID card",
  
  // Account
  password: "Minimum 8 characters with uppercase, lowercase, number, and special character",
  confirmPassword: "Re-enter your password to confirm",
  
  // Document Upload
  uploadDocument: "PDF or JPG, maximum 5MB per file",
  
  // Payment
  amount: "Total amount to be paid (including taxes and fees)",
  
  // Privacy
  dataUsage: "We use your information only for processing this application",
  secureData: "Your data is encrypted and stored securely",
} as const;

// ==================== ERROR MESSAGES ====================

export const ERROR_MESSAGES = {
  // Required Fields
  required: (fieldName: string) => `${fieldName} is required`,
  requiredField: "This field is required",
  
  // Format Validation
  invalidEmail: "Enter a valid email address (e.g., name@example.com)",
  invalidMobile: "Enter a valid 10-digit mobile number",
  invalidPincode: "Enter a valid 6-digit PIN code",
  invalidAadhaar: "Enter a valid 12-digit Aadhaar number",
  invalidPAN: "Enter a valid PAN in format ABCDE1234F",
  invalidDate: "Enter a valid date",
  invalidURL: "Enter a valid website URL",
  
  // Length Validation
  tooShort: (fieldName: string, minLength: number) => 
    `${fieldName} must be at least ${minLength} characters`,
  tooLong: (fieldName: string, maxLength: number) => 
    `${fieldName} must not exceed ${maxLength} characters`,
  exactLength: (fieldName: string, length: number) => 
    `${fieldName} must be exactly ${length} characters`,
  
  // Range Validation
  tooSmall: (fieldName: string, min: number) => 
    `${fieldName} must be at least ${min}`,
  tooLarge: (fieldName: string, max: number) => 
    `${fieldName} must not exceed ${max}`,
  outOfRange: (fieldName: string, min: number, max: number) => 
    `${fieldName} must be between ${min} and ${max}`,
  
  // Password Validation
  passwordTooShort: "Password must be at least 8 characters long",
  passwordWeak: "Password must include uppercase, lowercase, number, and special character",
  passwordMismatch: "Passwords do not match. Please re-enter.",
  
  // Age Validation
  ageTooYoung: (minAge: number) => `You must be at least ${minAge} years old`,
  ageTooOld: (maxAge: number) => `Age must not exceed ${maxAge} years`,
  
  // File Upload
  fileTooLarge: (maxSize: string) => `File size exceeds ${maxSize}. Please upload a smaller file.`,
  invalidFileType: (allowedTypes: string) => `Invalid file type. Allowed: ${allowedTypes}`,
  uploadFailed: "Upload failed. Please try again.",
  
  // Network & Server
  networkError: "No internet connection. Please check your network and try again.",
  serverError: "Server error occurred. Please try again later.",
  timeout: "Request timed out. Please try again.",
  
  // Authentication
  invalidCredentials: "The email or password you entered is incorrect",
  accountLocked: "Your account has been locked due to multiple failed attempts",
  sessionExpired: "Your session has expired. Please sign in again.",
  
  // Form Submission
  submissionFailed: "Submission failed. Please try again.",
  validationFailed: "Please fix the errors below and try again",
  
  // Duplicate/Exists
  alreadyExists: (fieldName: string) => `${fieldName} is already registered`,
  duplicateEntry: "This entry already exists",
  
  // Generic
  somethingWentWrong: "Something went wrong. Please try again.",
  tryAgainLater: "Unable to process your request. Please try again later.",
} as const;

// ==================== SUCCESS MESSAGES ====================

export const SUCCESS_MESSAGES = {
  // Account
  accountCreated: "Account created successfully! Please verify your email.",
  profileUpdated: "Your profile has been updated successfully",
  passwordChanged: "Password changed successfully. Please sign in with your new password.",
  emailVerified: "Email verified successfully",
  
  // Form Submission
  applicationSubmitted: "Application submitted successfully!",
  formSaved: "Your progress has been saved successfully",
  draftSaved: "Draft saved successfully. You can resume this application later.",
  
  // Document Upload
  documentUploaded: "Document uploaded successfully",
  documentsVerified: "All documents verified successfully",
  
  // Payment
  paymentSuccessful: "Payment successful! Your transaction ID is",
  refundInitiated: "Refund has been initiated. Amount will be credited within 5-7 business days.",
  
  // Actions
  changesSaved: "Changes saved successfully",
  itemDeleted: "Item deleted successfully",
  requestSubmitted: "Your request has been submitted successfully",
  
  // Notifications
  emailSent: "Email sent successfully. Please check your inbox.",
  smsSent: "SMS sent to your registered mobile number",
  otpSent: "OTP sent successfully to",
  
  // Status Changes
  approved: "Your application has been approved",
  verified: "Verification successful",
  completed: "Process completed successfully",
} as const;

// ==================== VALIDATION MESSAGES ====================

export const VALIDATION_MESSAGES = {
  // Real-time Validation (Success)
  validEmail: "Valid email address",
  validMobile: "Valid mobile number",
  validPAN: "Valid PAN format",
  validAadhaar: "Valid Aadhaar number",
  passwordStrong: "Strong password",
  
  // Checking/Verifying
  checking: "Checking...",
  verifying: "Verifying...",
  validating: "Validating...",
  
  // Available/Taken
  usernameAvailable: "Username is available",
  usernameTaken: "This username is already taken",
  emailAvailable: "Email is available",
  emailTaken: "This email is already registered",
} as const;

// ==================== CONSENT & LEGAL LANGUAGE ====================

export const CONSENT_LANGUAGE = {
  // Terms & Conditions
  termsAcceptance: "I have read and agree to the terms and conditions",
  termsAcceptanceFull: "I have read, understood, and agree to be bound by the terms and conditions of this service",
  
  // Privacy Policy
  privacyConsent: "I consent to the collection and processing of my personal data as described in the privacy policy",
  privacyConsentFull: "I acknowledge that I have read and understood the privacy policy. I consent to the collection, use, storage, and processing of my personal information for the purpose of this application.",
  
  // Data Sharing
  dataSharingConsent: "I authorize the sharing of my information with relevant government departments for verification and processing",
  dataSharingConsentFull: "I hereby authorize and consent to the sharing of my personal information, including Aadhaar details, with relevant government departments, agencies, and authorized third parties solely for the purpose of verification, processing, and issuance of the requested service or certificate.",
  
  // Declaration
  declarationTruthfulness: "I declare that all information provided is true and correct to the best of my knowledge",
  declarationTruthfulnessFull: "I hereby declare that all the information provided by me in this application is true, complete, and accurate to the best of my knowledge and belief. I understand that any false or misleading information may result in rejection of my application or cancellation of the certificate/service, and may lead to legal consequences.",
  
  // Aadhaar Consent
  aadhaarConsent: "I consent to authenticate my identity using Aadhaar",
  aadhaarConsentFull: "I hereby voluntarily consent to authenticate my identity through Aadhaar-based authentication. I understand that my Aadhaar details will be used only for verification purposes and will be handled as per the Aadhaar Act, 2016 and related regulations.",
  
  // Minor/Guardian Consent
  guardianConsent: "I, as the legal guardian, provide consent on behalf of the minor applicant",
  guardianConsentFull: "I, as the parent/legal guardian of the minor applicant, hereby provide my consent for this application. I take full responsibility for the accuracy of information provided and agree to the terms and conditions on behalf of the minor.",
  
  // Data Retention
  dataRetention: "I understand that my data will be retained as per government retention policies",
  dataRetentionFull: "I acknowledge that the information provided will be stored and retained by the government department as per applicable data retention policies and legal requirements. The data may be archived for future reference and audit purposes.",
  
  // Withdrawal
  consentWithdrawal: "I understand that I can withdraw my consent by contacting support, which may affect service delivery",
  
  // Marketing/Communication
  communicationConsent: "I agree to receive updates and notifications related to my application",
  marketingOptIn: "I would like to receive information about other government services (optional)",
} as const;

// ==================== INFORMATION MESSAGES ====================

export const INFO_MESSAGES = {
  // Processing
  processing: "Processing your request...",
  pleaseWait: "Please wait while we process your information",
  almostDone: "Almost done! Please don't close this window.",
  
  // Saving
  autoSaving: "Auto-saving your progress...",
  savingDraft: "Saving draft...",
  savedAt: (time: string) => `Last saved at ${time}`,
  
  // Loading
  loading: "Loading...",
  loadingData: "Loading your data...",
  refreshing: "Refreshing...",
  
  // Empty States
  noData: "No data available",
  noResults: "No results found",
  noApplications: "You don't have any applications yet",
  noDrafts: "You don't have any saved drafts",
  
  // Required Fields
  requiredFieldsNote: "Fields marked with * are mandatory",
  allFieldsRequired: "All fields are required unless marked optional",
  
  // Security
  secureConnection: "Your connection is secure and encrypted",
  dataProtected: "Your data is protected and will not be shared without your consent",
  
  // Session
  sessionExpiringSoon: (minutes: number) => `Your session will expire in ${minutes} minute${minutes === 1 ? '' : 's'}`,
  sessionActive: "Your session is active",
  
  // Offline
  offline: "You're offline. Changes will sync when you're back online.",
  backOnline: "You're back online. Syncing your changes...",
  
  // Maintenance
  scheduledMaintenance: "Scheduled maintenance: Service will be unavailable on",
  limitedService: "Limited service availability due to maintenance",
} as const;

// ==================== BUTTON TEXT ====================

export const BUTTON_TEXT = {
  // Primary Actions
  submit: "Submit",
  submitApplication: "Submit Application",
  continue: "Continue",
  next: "Next",
  finish: "Finish",
  confirm: "Confirm",
  
  // Secondary Actions
  cancel: "Cancel",
  back: "Back",
  previous: "Previous",
  close: "Close",
  
  // Save Actions
  save: "Save",
  saveChanges: "Save Changes",
  saveDraft: "Save Draft",
  saveAndExit: "Save & Exit",
  saveAndContinue: "Save & Continue",
  
  // Retry Actions
  tryAgain: "Try Again",
  retry: "Retry",
  retryUpload: "Retry Upload",
  refresh: "Refresh",
  
  // Sign In/Out
  signIn: "Sign In",
  signUp: "Sign Up",
  signOut: "Sign Out",
  
  // Edit/Delete
  edit: "Edit",
  delete: "Delete",
  remove: "Remove",
  
  // Download/Upload
  download: "Download",
  upload: "Upload",
  uploadDocument: "Upload Document",
  chooseFile: "Choose File",
  
  // View
  view: "View",
  viewDetails: "View Details",
  viewApplication: "View Application",
  
  // Help
  help: "Help",
  contactSupport: "Contact Support",
  needHelp: "Need Help?",
  
  // Additional
  apply: "Apply",
  verify: "Verify",
  resend: "Resend",
  resendOTP: "Resend OTP",
  getOTP: "Get OTP",
  changePassword: "Change Password",
  forgotPassword: "Forgot Password?",
  resetPassword: "Reset Password",
  
  // Actions with Objects (parameterized versions)
  addAnother: (item: string) => `Add Another ${item}`,
  removeItem: (item: string) => `Remove ${item}`,
  editItem: (item: string) => `Edit ${item}`,
  deleteItem: (item: string) => `Delete ${item}`,
} as const;

// ==================== PLACEHOLDER TEXT ====================

export const PLACEHOLDERS = {
  // Personal
  fullName: "Enter your full name",
  firstName: "Enter first name",
  dateOfBirth: "DD/MM/YYYY",
  
  // Contact
  mobileNumber: "9876543210",
  email: "name@example.com",
  
  // Address
  addressLine1: "House no., Building name, Street",
  pincode: "110001",
  city: "Enter city name",
  
  // IDs
  aadhaarNumber: "1234 5678 9012",
  panNumber: "ABCDE1234F",
  
  // Account
  username: "Choose a username",
  password: "Enter password",
  
  // Search
  search: "Search...",
  searchApplications: "Search applications...",
  
  // Select
  select: "-- Select --",
  selectOption: "-- Select an option --",
  selectState: "-- Select State --",
  selectDistrict: "-- Select District --",
  
  // Other
  enterAmount: "Enter amount",
  enterOTP: "Enter 6-digit OTP",
  typeHere: "Type here...",
} as const;

// ==================== ARIA LABELS (Accessibility) ====================

export const ARIA_LABELS = {
  required: "required field",
  optional: "optional field",
  error: "error",
  success: "success",
  warning: "warning",
  info: "information",
  loading: "loading",
  menu: "menu",
  closeDialog: "close dialog",
  previousPage: "previous page",
  nextPage: "next page",
  sortAscending: "sort ascending",
  sortDescending: "sort descending",
} as const;

// ==================== HELPER FUNCTIONS ====================

export function getRequiredLabel(label: string): string {
  return `${label} *`;
}

export function getOptionalLabel(label: string): string {
  return `${label} (Optional)`;
}

export function formatErrorMessage(fieldName: string, errorType: 'required' | 'invalid' | 'tooShort' | 'tooLong', options?: any): string {
  switch(errorType) {
    case 'required':
      return ERROR_MESSAGES.required(fieldName);
    case 'invalid':
      return `Enter a valid ${fieldName.toLowerCase()}`;
    case 'tooShort':
      return ERROR_MESSAGES.tooShort(fieldName, options?.minLength || 1);
    case 'tooLong':
      return ERROR_MESSAGES.tooLong(fieldName, options?.maxLength || 255);
    default:
      return ERROR_MESSAGES.requiredField;
  }
}

export function formatSuccessMessage(action: 'saved' | 'submitted' | 'updated' | 'deleted', itemName?: string): string {
  const item = itemName || 'Item';
  switch(action) {
    case 'saved':
      return `${item} saved successfully`;
    case 'submitted':
      return `${item} submitted successfully`;
    case 'updated':
      return `${item} updated successfully`;
    case 'deleted':
      return `${item} deleted successfully`;
  }
}

// ==================== EXPORTS ====================

export default {
  LABELS,
  HELPER_TEXT,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  VALIDATION_MESSAGES,
  CONSENT_LANGUAGE,
  INFO_MESSAGES,
  BUTTON_TEXT,
  PLACEHOLDERS,
  ARIA_LABELS,
  getRequiredLabel,
  getOptionalLabel,
  formatErrorMessage,
  formatSuccessMessage,
};
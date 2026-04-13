// ============================================================================
// UX4G ROUTING CONFIGURATION
// ============================================================================
// Centralized routing configuration for government digital services
// Use these constants instead of hardcoded paths
//
// Last Updated: April 2026
// Version: 1.0.0
// ============================================================================

// ==================== ROUTE PATHS ====================

export const ROUTES = {
  // Home & Documentation
  HOME: "/",
  COVER: "/cover",
  
  // Foundations
  FOUNDATIONS: "/foundations",
  FOUNDATIONS_DETAILED: "/foundations-detailed",
  DESIGN_TOKENS: "/design-tokens",
  STYLES_SYSTEM: "/styles-system",
  
  // Components
  COMPONENTS: "/components",
  CORE_COMPONENTS: "/core-components",
  COMPONENT_DOCS: "/component-docs",
  
  // Patterns
  PATTERNS: "/patterns",
  ADVANCED_PATTERNS: "/advanced-patterns",
  FORM_INTELLIGENCE: "/form-intelligence-system",
  STATE_RESILIENCE: "/state-resilience-system",
  CONTENT_DESIGN: "/content-design-system",
  CONTENT_SHOWCASE: "/content-system-showcase",
  
  // Accessibility
  ACCESSIBILITY: "/accessibility",
  ACCESSIBILITY_TOOLING: "/accessibility-tooling",
  
  // Resources
  RESOURCES: "/resources",
  INSTALLATION: "/installation",
  STARTER_KITS: "/starter-kits",
  SERVICE_CODE_DOWNLOADS: "/resources/service-code-downloads",
  
  // Governance
  GOVERNANCE: "/governance",
  ADOPTION: "/governance/adoption",
  CONFORMANCE: "/governance/conformance",
  
  // Service Pattern Libraries
  SERVICE_PATTERNS: "/service-pattern-libraries",
  IDENTITY_ACCESS_PATTERNS: "/identity-access-patterns",
  CONSENT_PATTERNS: "/consent-declaration-patterns",
  REFERENCE_SERVICE_SIGN_IN: "/reference-service/sign-in",
  REFERENCE_SERVICE_SIGN_UP: "/reference-service/sign-up",
  REFERENCE_SERVICE_FORGOT_PASSWORD: "/reference-service/forgot-password",
  REFERENCE_SERVICE_VERIFY_OTP: "/reference-service/verify-otp",
  REFERENCE_SERVICE_AUTH_STATUS: "/reference-service/auth-status",
  REFERENCE_SERVICE_ELIGIBILITY: "/reference-service/eligibility",
  REFERENCE_SERVICE_START: "/reference-service/start",
  REFERENCE_SERVICE_STATUS_TRACKER: "/reference-service/status-tracker",
  REFERENCE_SERVICE_DOCUMENT_UPLOAD: "/reference-service/document-upload",
  REFERENCE_SERVICE_REVIEW_SUMMARY: "/reference-service/review-summary",
  REFERENCE_SERVICE_DECLARATION: "/reference-service/declaration",
  REFERENCE_SERVICE_PAYMENT_SUMMARY: "/reference-service/payment-summary",
  REFERENCE_SERVICE_PAYMENT_RECEIPT: "/reference-service/payment-receipt",
  
  // Certificate Service Routes
  CERTIFICATE: {
    // Discovery
    SERVICE: "/reference-service/demo",
    ELIGIBILITY: "/reference-service/certificate/eligibility",
    HELP: "/reference-service/certificate/help",
    DOCUMENT_GUIDELINES: "/reference-service/certificate/document-guidelines",
    PRIVACY_POLICY: "/reference-service/certificate/privacy-policy",
    
    // Authentication
    SIGN_UP: "/reference-service/certificate/sign-up",
    SIGN_IN: "/reference-service/certificate/sign-in",
    SIGN_IN_UPDATED: "/reference-service/certificate/sign-in",
    VERIFY_OTP: "/reference-service/certificate/verify-otp",
    FORGOT_PASSWORD: "/reference-service/certificate/forgot-password",
    SESSION_TIMEOUT: "/reference-service/certificate/session-timeout",
    USER_PROFILE: "/reference-service/certificate/user-profile",
    
    // Application Flow
    START: "/reference-service/certificate/start",
    FORM_PERSONAL: "/reference-service/certificate/form/personal",
    FORM_PERSONAL_UPDATED: "/reference-service/certificate/form/personal",
    FORM_ADDRESS: "/reference-service/certificate/form/address",
    FORM_ADDITIONAL: "/reference-service/certificate/form/additional",
    FORM_REVIEW: "/reference-service/certificate/form/review",
    DOCUMENT_UPLOAD: "/reference-service/certificate/document-upload",
    REVIEW_SUMMARY: "/reference-service/certificate/review-summary",
    DECLARATION: "/reference-service/certificate/declaration",
    
    // Payment
    PAYMENT_SUMMARY: "/reference-service/certificate/payment-summary",
    PAYMENT_RECEIPT: "/reference-service/certificate/payment-receipt",
    
    // Post-Submission
    SUBMISSION_SUCCESS: "/reference-service/certificate/submission-success",
    STATUS_TRACKER: "/reference-service/certificate/status-tracker",
    NOTIFICATIONS: "/reference-service/certificate/notifications",
    
    // Issuance
    ISSUED: "/reference-service/certificate/issued",
    FEEDBACK: "/reference-service/certificate/feedback",
    
    // Recovery
    CORRECTION_REQUEST: "/reference-service/certificate/correction-request",
    REJECTED: "/reference-service/certificate/rejected",
    APPEAL: "/reference-service/certificate/appeal",
    
    // Officer
    OFFICER_DASHBOARD: "/reference-service/certificate/officer/dashboard",
    OFFICER_CASES: "/reference-service/certificate/officer/cases",
    OFFICER_REVIEW: "/reference-service/certificate/officer/review",
    
    // User Dashboard
    MY_APPLICATIONS: "/reference-service/certificate/my-applications",
    
    // Public
    VERIFICATION: "/reference-service/certificate/verification"
  }
} as const;

// ==================== ROUTE GROUPS ====================

export const ROUTE_GROUPS = {
  // Public routes (no authentication required)
  PUBLIC: [
    ROUTES.HOME,
    ROUTES.CERTIFICATE.SERVICE,
    ROUTES.REFERENCE_SERVICE_SIGN_IN,
    ROUTES.REFERENCE_SERVICE_SIGN_UP,
    ROUTES.REFERENCE_SERVICE_FORGOT_PASSWORD,
    ROUTES.REFERENCE_SERVICE_VERIFY_OTP,
    ROUTES.REFERENCE_SERVICE_AUTH_STATUS,
    ROUTES.REFERENCE_SERVICE_ELIGIBILITY,
    ROUTES.REFERENCE_SERVICE_START,
    ROUTES.REFERENCE_SERVICE_STATUS_TRACKER,
    ROUTES.REFERENCE_SERVICE_DOCUMENT_UPLOAD,
    ROUTES.REFERENCE_SERVICE_REVIEW_SUMMARY,
    ROUTES.REFERENCE_SERVICE_DECLARATION,
    ROUTES.REFERENCE_SERVICE_PAYMENT_SUMMARY,
    ROUTES.REFERENCE_SERVICE_PAYMENT_RECEIPT,
    ROUTES.CERTIFICATE.ELIGIBILITY,
    ROUTES.CERTIFICATE.HELP,
    ROUTES.CERTIFICATE.DOCUMENT_GUIDELINES,
    ROUTES.CERTIFICATE.PRIVACY_POLICY,
    ROUTES.CERTIFICATE.SIGN_UP,
    ROUTES.CERTIFICATE.SIGN_IN,
    ROUTES.CERTIFICATE.SIGN_IN_UPDATED,
    ROUTES.CERTIFICATE.VERIFY_OTP,
    ROUTES.CERTIFICATE.FORGOT_PASSWORD,
    ROUTES.CERTIFICATE.VERIFICATION
  ],
  
  // Protected routes (authentication required)
  PROTECTED: [
    ROUTES.CERTIFICATE.START,
    ROUTES.CERTIFICATE.FORM_PERSONAL,
    ROUTES.CERTIFICATE.FORM_PERSONAL_UPDATED,
    ROUTES.CERTIFICATE.FORM_ADDRESS,
    ROUTES.CERTIFICATE.FORM_ADDITIONAL,
    ROUTES.CERTIFICATE.DOCUMENT_UPLOAD,
    ROUTES.CERTIFICATE.REVIEW_SUMMARY,
    ROUTES.CERTIFICATE.DECLARATION,
    ROUTES.CERTIFICATE.PAYMENT_SUMMARY,
    ROUTES.CERTIFICATE.MY_APPLICATIONS,
    ROUTES.CERTIFICATE.STATUS_TRACKER,
    ROUTES.CERTIFICATE.USER_PROFILE,
    ROUTES.CERTIFICATE.NOTIFICATIONS
  ],
  
  // Officer routes (officer role required)
  OFFICER: [
    ROUTES.CERTIFICATE.OFFICER_DASHBOARD,
    ROUTES.CERTIFICATE.OFFICER_CASES,
    ROUTES.CERTIFICATE.OFFICER_REVIEW
  ]
};

// ==================== NAVIGATION HELPERS ====================

/**
 * Get application form steps in order
 */
export const getApplicationSteps = () => [
  {
    step: 1,
    label: "Personal Information",
    path: ROUTES.CERTIFICATE.FORM_PERSONAL,
    updatedPath: ROUTES.CERTIFICATE.FORM_PERSONAL_UPDATED
  },
  {
    step: 2,
    label: "Address Details",
    path: ROUTES.CERTIFICATE.FORM_ADDRESS
  },
  {
    step: 3,
    label: "Additional Information",
    path: ROUTES.CERTIFICATE.FORM_ADDITIONAL
  },
  {
    step: 4,
    label: "Document Upload",
    path: ROUTES.CERTIFICATE.DOCUMENT_UPLOAD
  },
  {
    step: 5,
    label: "Review & Submit",
    path: ROUTES.CERTIFICATE.REVIEW_SUMMARY
  }
];

/**
 * Get next step in application flow
 */
export const getNextStep = (currentPath: string): string | null => {
  const steps = getApplicationSteps();
  const currentIndex = steps.findIndex(s => s.path === currentPath || s.updatedPath === currentPath);
  
  if (currentIndex === -1 || currentIndex === steps.length - 1) {
    return null;
  }
  
  return steps[currentIndex + 1].path;
};

/**
 * Get previous step in application flow
 */
export const getPreviousStep = (currentPath: string): string | null => {
  const steps = getApplicationSteps();
  const currentIndex = steps.findIndex(s => s.path === currentPath || s.updatedPath === currentPath);
  
  if (currentIndex <= 0) {
    return null;
  }
  
  return steps[currentIndex - 1].path;
};

/**
 * Check if route requires authentication
 */
export const isProtectedRoute = (path: string): boolean => {
  return ROUTE_GROUPS.PROTECTED.includes(path as any);
};

/**
 * Check if route requires officer role
 */
export const isOfficerRoute = (path: string): boolean => {
  return ROUTE_GROUPS.OFFICER.includes(path as any);
};

/**
 * Get breadcrumb trail for a route
 */
export const getBreadcrumbs = (path: string): Array<{ label: string; path: string }> => {
  const breadcrumbs: Array<{ label: string; path: string }> = [];
  
  // Documentation routes
  if (path.startsWith('/foundations')) {
    breadcrumbs.push({ label: 'Foundations', path: ROUTES.FOUNDATIONS });
  } else if (path.startsWith('/components')) {
    breadcrumbs.push({ label: 'Components', path: ROUTES.COMPONENTS });
  } else if (path.startsWith('/patterns')) {
    breadcrumbs.push({ label: 'Patterns', path: ROUTES.PATTERNS });
  }
  
  // Certificate service routes
  if (path.startsWith('/reference-service/certificate') || path === '/reference-service/demo') {
    breadcrumbs.push({ label: 'Certificate Service', path: ROUTES.CERTIFICATE.SERVICE });
    
    if (path.includes('/form/')) {
      breadcrumbs.push({ label: 'Application Form', path: ROUTES.CERTIFICATE.START });
    }
  }
  
  return breadcrumbs;
};

// ==================== ROUTE METADATA ====================

export interface RouteMetadata {
  title: string;
  description?: string;
  requiresAuth?: boolean;
  requiresOfficer?: boolean;
  layout?: 'default' | 'minimal' | 'full-width';
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  [ROUTES.CERTIFICATE.SERVICE]: {
    title: "Government Certificate Application Service",
    description: "Apply for various government certificates online",
    requiresAuth: false,
    layout: 'default'
  },
  [ROUTES.CERTIFICATE.SIGN_IN]: {
    title: "Sign In - Certificate Service",
    description: "Sign in to your account",
    requiresAuth: false,
    layout: 'minimal'
  },
  [ROUTES.CERTIFICATE.SIGN_UP]: {
    title: "Create Account - Certificate Service",
    description: "Create a new account",
    requiresAuth: false,
    layout: 'minimal'
  },
  [ROUTES.CERTIFICATE.FORM_PERSONAL]: {
    title: "Personal Information - Application Form",
    description: "Step 1: Enter your personal details",
    requiresAuth: true,
    layout: 'default'
  },
  [ROUTES.CERTIFICATE.MY_APPLICATIONS]: {
    title: "My Applications",
    description: "View and manage your applications",
    requiresAuth: true,
    layout: 'default'
  },
  [ROUTES.CERTIFICATE.OFFICER_DASHBOARD]: {
    title: "Officer Dashboard",
    description: "Manage and review applications",
    requiresAuth: true,
    requiresOfficer: true,
    layout: 'full-width'
  }
};

/**
 * Get metadata for a route
 */
export const getRouteMetadata = (path: string): RouteMetadata => {
  return ROUTE_METADATA[path] || {
    title: "UX4G Design System",
    requiresAuth: false,
    layout: 'default'
  };
};

// ==================== EXPORTS ====================

export default ROUTES;

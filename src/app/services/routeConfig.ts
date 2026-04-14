// ============================================================================
// UX4G ROUTING CONFIGURATION
// ============================================================================
// Centralized routing configuration for government digital services
// Use these constants instead of hardcoded paths
//
// Last Updated: April 2026
// Version: 1.0.0
// ============================================================================

import { ROUTE_PATHS } from "../routes/pathSource";

// ==================== ROUTE PATHS ====================

export const ROUTES = {
  // Home & Documentation
  HOME: "/",
  COVER: "/cover",
  
  // Foundations
  FOUNDATIONS: ROUTE_PATHS.FOUNDATIONS.ROOT,
  FOUNDATIONS_DETAILED: ROUTE_PATHS.FOUNDATIONS.ROOT,
  DESIGN_TOKENS: ROUTE_PATHS.FOUNDATIONS.ROOT,
  STYLES_SYSTEM: ROUTE_PATHS.FOUNDATIONS.ROOT,
  
  // Components
  COMPONENTS: ROUTE_PATHS.COMPONENTS.ROOT,
  CORE_COMPONENTS: ROUTE_PATHS.COMPONENTS.ROOT,
  COMPONENT_DOCS: ROUTE_PATHS.COMPONENTS.ROOT,
  
  // Patterns
  PATTERNS: ROUTE_PATHS.PATTERNS.ROOT,
  ADVANCED_PATTERNS: ROUTE_PATHS.PATTERNS.ROOT,
  FORM_INTELLIGENCE: ROUTE_PATHS.SYSTEMS.FORM_INTELLIGENCE,
  STATE_RESILIENCE: ROUTE_PATHS.SYSTEMS.STATE_RESILIENCE,
  CONTENT_DESIGN: ROUTE_PATHS.FOUNDATIONS.CONTENT_SYSTEM,
  CONTENT_SHOWCASE: ROUTE_PATHS.FOUNDATIONS.CONTENT_SYSTEM,
  
  // Accessibility
  ACCESSIBILITY: ROUTE_PATHS.FOUNDATIONS.ACCESSIBILITY,
  ACCESSIBILITY_TOOLING: ROUTE_PATHS.FOUNDATIONS.ACCESSIBILITY,
  
  // Resources
  RESOURCES: "/resources",
  INSTALLATION: "/resources/getting-started",
  STARTER_KITS: "/resources/starter-kit",
  SERVICE_CODE_DOWNLOADS: "/resources/service-code-downloads",
  
  // Governance
  GOVERNANCE: ROUTE_PATHS.GOVERNANCE.ROOT,
  ADOPTION: ROUTE_PATHS.GOVERNANCE.ADOPTION,
  CONFORMANCE: ROUTE_PATHS.GOVERNANCE.CONFORMANCE,
  
  // Service Pattern Libraries
  SERVICE_PATTERNS: ROUTE_PATHS.SERVICES.OVERVIEW,
  IDENTITY_ACCESS_PATTERNS: ROUTE_PATHS.PATTERNS.IDENTITY_ROOT,
  CONSENT_PATTERNS: ROUTE_PATHS.PATTERNS.CONSENT_ROOT,
  REFERENCE_SERVICE_SIGN_IN: ROUTE_PATHS.SERVICES.SIGN_IN,
  REFERENCE_SERVICE_SIGN_UP: ROUTE_PATHS.SERVICES.SIGN_UP,
  REFERENCE_SERVICE_FORGOT_PASSWORD: ROUTE_PATHS.SERVICES.FORGOT_PASSWORD,
  REFERENCE_SERVICE_VERIFY_OTP: ROUTE_PATHS.SERVICES.VERIFY_OTP,
  REFERENCE_SERVICE_AUTH_STATUS: ROUTE_PATHS.SERVICES.AUTH_STATUS,
  REFERENCE_SERVICE_ELIGIBILITY: ROUTE_PATHS.SERVICES.ELIGIBILITY,
  REFERENCE_SERVICE_START: ROUTE_PATHS.SERVICES.START,
  REFERENCE_SERVICE_STATUS_TRACKER: ROUTE_PATHS.SERVICES.STATUS_TRACKER,
  REFERENCE_SERVICE_DOCUMENT_UPLOAD: ROUTE_PATHS.SERVICES.DOCUMENT_UPLOAD,
  REFERENCE_SERVICE_REVIEW_SUMMARY: ROUTE_PATHS.SERVICES.REVIEW_SUMMARY,
  REFERENCE_SERVICE_DECLARATION: ROUTE_PATHS.SERVICES.DECLARATION,
  REFERENCE_SERVICE_USER_PROFILE: ROUTE_PATHS.SERVICES.USER_PROFILE,
  REFERENCE_SERVICE_FORM_PERSONAL: ROUTE_PATHS.SERVICES.FORM_PERSONAL,
  REFERENCE_SERVICE_FORM_ADDRESS: ROUTE_PATHS.SERVICES.FORM_ADDRESS,
  REFERENCE_SERVICE_FORM_ADDITIONAL: ROUTE_PATHS.SERVICES.FORM_ADDITIONAL,
  REFERENCE_SERVICE_FORM_REVIEW: ROUTE_PATHS.SERVICES.FORM_REVIEW,
  REFERENCE_SERVICE_PAYMENT_SUMMARY: ROUTE_PATHS.SERVICES.PAYMENT_SUMMARY,
  REFERENCE_SERVICE_PAYMENT_RECEIPT: ROUTE_PATHS.SERVICES.PAYMENT_RECEIPT,
  
  // Certificate Service Routes
  CERTIFICATE: {
    // Discovery
    SERVICE: ROUTE_PATHS.SERVICES.DEMO,
    ELIGIBILITY: ROUTE_PATHS.CERTIFICATE.ELIGIBILITY,
    HELP: ROUTE_PATHS.CERTIFICATE.HELP,
    DOCUMENT_GUIDELINES: ROUTE_PATHS.CERTIFICATE.DOCUMENT_GUIDELINES,
    PRIVACY_POLICY: ROUTE_PATHS.CERTIFICATE.PRIVACY_POLICY,
    
    // Authentication
    SIGN_UP: ROUTE_PATHS.CERTIFICATE.SIGN_UP,
    SIGN_IN: ROUTE_PATHS.CERTIFICATE.SIGN_IN,
    SIGN_IN_UPDATED: ROUTE_PATHS.CERTIFICATE.SIGN_IN,
    VERIFY_OTP: ROUTE_PATHS.CERTIFICATE.VERIFY_OTP,
    FORGOT_PASSWORD: ROUTE_PATHS.CERTIFICATE.FORGOT_PASSWORD,
    SESSION_TIMEOUT: ROUTE_PATHS.CERTIFICATE.SESSION_TIMEOUT,
    USER_PROFILE: ROUTE_PATHS.CERTIFICATE.USER_PROFILE,
    
    // Application Flow
    START: ROUTE_PATHS.CERTIFICATE.START,
    FORM_PERSONAL: ROUTE_PATHS.CERTIFICATE.FORM_PERSONAL,
    FORM_PERSONAL_UPDATED: ROUTE_PATHS.CERTIFICATE.FORM_PERSONAL,
    FORM_ADDRESS: ROUTE_PATHS.CERTIFICATE.FORM_ADDRESS,
    FORM_ADDITIONAL: ROUTE_PATHS.CERTIFICATE.FORM_ADDITIONAL,
    FORM_REVIEW: ROUTE_PATHS.CERTIFICATE.FORM_REVIEW,
    DOCUMENT_UPLOAD: ROUTE_PATHS.CERTIFICATE.DOCUMENT_UPLOAD,
    REVIEW_SUMMARY: ROUTE_PATHS.CERTIFICATE.REVIEW_SUMMARY,
    DECLARATION: ROUTE_PATHS.CERTIFICATE.DECLARATION,
    
    // Payment
    PAYMENT_SUMMARY: ROUTE_PATHS.CERTIFICATE.PAYMENT_SUMMARY,
    PAYMENT_RECEIPT: ROUTE_PATHS.CERTIFICATE.PAYMENT_RECEIPT,
    
    // Post-Submission
    SUBMISSION_SUCCESS: ROUTE_PATHS.CERTIFICATE.SUBMISSION_SUCCESS,
    STATUS_TRACKER: ROUTE_PATHS.CERTIFICATE.STATUS_TRACKER,
    NOTIFICATIONS: ROUTE_PATHS.CERTIFICATE.NOTIFICATIONS,
    
    // Issuance
    ISSUED: ROUTE_PATHS.CERTIFICATE.ISSUED,
    FEEDBACK: ROUTE_PATHS.CERTIFICATE.FEEDBACK,
    
    // Recovery
    CORRECTION_REQUEST: ROUTE_PATHS.CERTIFICATE.CORRECTION_REQUEST,
    REJECTED: ROUTE_PATHS.CERTIFICATE.REJECTED,
    APPEAL: ROUTE_PATHS.CERTIFICATE.APPEAL,
    
    // Officer
    OFFICER_DASHBOARD: ROUTE_PATHS.CERTIFICATE.OFFICER_DASHBOARD,
    OFFICER_CASES: ROUTE_PATHS.CERTIFICATE.OFFICER_CASES,
    OFFICER_REVIEW: ROUTE_PATHS.CERTIFICATE.OFFICER_REVIEW,
    
    // User Dashboard
    MY_APPLICATIONS: ROUTE_PATHS.CERTIFICATE.MY_APPLICATIONS,
    
    // Public
    VERIFICATION: ROUTE_PATHS.CERTIFICATE.VERIFICATION
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
    ROUTES.REFERENCE_SERVICE_USER_PROFILE,
    ROUTES.REFERENCE_SERVICE_FORM_PERSONAL,
    ROUTES.REFERENCE_SERVICE_FORM_ADDRESS,
    ROUTES.REFERENCE_SERVICE_FORM_ADDITIONAL,
    ROUTES.REFERENCE_SERVICE_FORM_REVIEW,
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

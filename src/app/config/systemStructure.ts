// ============================================================================
// UX4G UNIFIED SYSTEM STRUCTURE
// ============================================================================
// Central configuration for platform navigation and organization
// Single source of truth for all system routes and hierarchy
//
// Last Updated: April 2026
// Version: 2.0.0 (Unified)
// ============================================================================

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  description?: string;
  children?: NavigationItem[];
}

// ==================== MAIN NAVIGATION STRUCTURE ====================

export const SYSTEM_NAVIGATION: NavigationItem[] = [
  // ========================================
  // 1. DESIGN SYSTEM
  // ========================================
  {
    id: 'design-system',
    label: 'Design System',
    path: '/design-system',
    description: 'Design foundations, components, and patterns',
    children: [
      {
        id: 'foundations',
        label: 'Foundations',
        path: '/foundations',
        description: 'Design principles, tokens, and typography'
      },
      {
        id: 'components',
        label: 'Components',
        path: '/components',
        description: 'Reusable UI components'
      },
      {
        id: 'patterns',
        label: 'Patterns',
        path: '/patterns',
        description: 'Common interaction patterns'
      },
      {
        id: 'content',
        label: 'Content System',
        path: '/content-system',
        description: 'Labels, messages, and language standards'
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        path: '/accessibility',
        description: 'WCAG compliance and inclusive design'
      }
    ]
  },

  // ========================================
  // 2. PATTERN LIBRARY
  // ========================================
  {
    id: 'pattern-library',
    label: 'Pattern Library',
    path: '/pattern-library',
    description: 'Live pattern demonstrations',
    children: [
      {
        id: 'service-patterns',
        label: 'Service Patterns',
        path: '/patterns/service',
        description: 'End-to-end service journeys'
      },
      {
        id: 'identity-patterns',
        label: 'Identity & Access',
        path: '/patterns/identity',
        description: 'Authentication and authorization'
      },
      {
        id: 'consent-patterns',
        label: 'Consent & Declaration',
        path: '/patterns/consent',
        description: 'Legal consent and declarations'
      },
      {
        id: 'payment-patterns',
        label: 'Payment',
        path: '/patterns/payment',
        description: 'Fee payment and transactions'
      },
      {
        id: 'form-patterns',
        label: 'Forms & Data Entry',
        path: '/patterns/forms',
        description: 'Form intelligence and validation'
      },
      {
        id: 'resilience-patterns',
        label: 'State & Resilience',
        path: '/patterns/resilience',
        description: 'Error handling and recovery'
      }
    ]
  },

  // ========================================
  // 3. REFERENCE SERVICE
  // ========================================
  {
    id: 'reference-service',
    label: 'Reference Service',
    path: '/reference-service',
    description: 'Complete certificate application implementation',
    children: [
      {
        id: 'service-overview',
        label: 'Service Overview',
        path: '/reference-service/overview',
        description: 'Service blueprint and architecture'
      },
      {
        id: 'service-demo',
        label: 'Live Demo',
        path: '/reference-service/demo',
        description: 'Interactive certificate application'
      }
    ]
  },

  // ========================================
  // 4. RESOURCES
  // ========================================
  {
    id: 'resources',
    label: 'Resources',
    path: '/resources',
    description: 'Getting started and developer tools',
    children: [
      {
        id: 'getting-started',
        label: 'Getting Started',
        path: '/resources/getting-started',
        description: 'Installation and setup guide'
      },
      {
        id: 'starter-kit',
        label: 'Starter Kit',
        path: '/resources/starter-kit',
        description: 'Production-ready code templates'
      },
      {
        id: 'component-specs',
        label: 'Component Specifications',
        path: '/resources/component-specs',
        description: 'React and Angular component APIs'
      },
      {
        id: 'migration-guides',
        label: 'Migration Guides',
        path: '/resources/migration-guides',
        description: 'Migrate from other UI libraries to UX4G'
      },
      {
        id: 'figma-tools',
        label: 'Figma Resources',
        path: '/resources/figma',
        description: 'Design files and tools'
      }
    ]
  },

  // ========================================
  // 5. GOVERNANCE
  // ========================================
  {
    id: 'governance',
    label: 'Governance',
    path: '/governance',
    description: 'Adoption tracking and compliance',
    children: [
      {
        id: 'adoption',
        label: 'Adoption Dashboard',
        path: '/governance/adoption',
        description: 'Department and service tracking'
      },
      {
        id: 'conformance',
        label: 'Conformance',
        path: '/governance/conformance',
        description: 'Compliance reports and metrics'
      },
      {
        id: 'analytics',
        label: 'Analytics',
        path: '/governance/analytics',
        description: 'Usage and performance data'
      }
    ]
  }
];

// ==================== PATH MAPPINGS ====================

export const PATH_MAPPINGS = {
  // Design System
  HOME: '/',
  FOUNDATIONS: '/foundations',
  COMPONENTS: '/components',
  PATTERNS: '/patterns',
  CONTENT_SYSTEM: '/content-system',
  ACCESSIBILITY: '/accessibility',

  // Pattern Library
  PATTERN_LIBRARY: '/pattern-library',
  PATTERNS_SERVICE: '/patterns/service',
  PATTERNS_IDENTITY: '/patterns/identity',
  PATTERNS_CONSENT: '/patterns/consent',
  PATTERNS_PAYMENT: '/patterns/payment',
  PATTERNS_FORMS: '/patterns/forms',
  PATTERNS_RESILIENCE: '/patterns/resilience',

  // Reference Service
  REFERENCE_SERVICE: '/reference-service',
  REFERENCE_OVERVIEW: '/reference-service/overview',
  REFERENCE_DEMO: '/reference-service/demo',

  // Resources
  RESOURCES: '/resources',
  GETTING_STARTED: '/resources/getting-started',
  STARTER_KIT: '/resources/starter-kit',
  COMPONENT_SPECS: '/resources/component-specs',
  MIGRATION_GUIDES: '/resources/migration-guides',
  FIGMA_TOOLS: '/resources/figma',

  // Governance
  GOVERNANCE: '/governance',
  ADOPTION: '/governance/adoption',
  CONFORMANCE: '/governance/conformance',
  ANALYTICS: '/governance/analytics'
} as const;

// ==================== LEGACY PATH REDIRECTS ====================

export const LEGACY_REDIRECTS: Record<string, string> = {
  // Old home pages
  '/old-home': '/',
  '/cover': '/',

  // Foundation consolidation
  '/foundations-detailed': '/foundations',
  '/design-tokens': '/foundations',
  '/styles-system': '/foundations',

  // Component consolidation
  '/core-components': '/components',
  '/component-docs': '/components',
  '/component-template': '/components',
  '/component-code-mapping': '/resources/component-specs',

  // Pattern consolidation
  '/advanced-patterns': '/patterns',
  '/patterns-navigation-demo': '/patterns',
  '/form-intelligence-system': '/patterns/forms',
  '/state-resilience-system': '/patterns/resilience',
  '/content-design-system': '/content-system',
  '/content-system-showcase': '/content-system',

  // Accessibility consolidation
  '/accessibility-tooling': '/accessibility',

  // Resource consolidation
  '/installation': '/resources/getting-started',
  '/starter-kits': '/resources/starter-kit',
  '/ux4g-starter-kit': '/resources/starter-kit',
  '/design-to-code': '/resources/figma',
  '/theming-tokens': '/foundations',
  '/figma-design-system': '/resources/figma',
  '/figma-ia': '/resources/figma',

  // Governance consolidation
  '/telemetry-docs': '/governance/analytics',
  '/service-analytics': '/governance/analytics',
  '/conformance-dashboard': '/governance/conformance',
  
  // Service blueprint consolidation
  '/service-blueprint': '/reference-service/overview',
  '/sector-blueprints': '/reference-service/overview',
  '/multilingual': '/reference-service/overview',
  '/reference-service-blueprint': '/reference-service/overview',

  // Pattern library consolidation
  '/service-pattern-libraries': '/pattern-library',
  '/identity-access-patterns': '/patterns/identity',
  '/consent-declaration-patterns': '/patterns/consent',
  '/operational-service-patterns': '/patterns/service',

  // Individual pattern redirects
  '/sign-in-pattern': '/patterns/identity',
  '/identity-signin': '/patterns/identity',
  '/sign-up-pattern': '/patterns/identity',
  '/identity-signup': '/patterns/identity',
  '/otp-verification-pattern': '/patterns/identity',
  '/mobile-otp-pattern': '/patterns/identity',
  '/identity-mobile-otp': '/patterns/identity',
  '/identity-email-otp': '/patterns/identity',
  '/forgot-password-pattern': '/patterns/identity',
  '/identity-forgot-password': '/patterns/identity',
  '/aadhaar-authentication-pattern': '/patterns/identity',
  '/identity-aadhaar': '/patterns/identity',
  '/account-recovery-pattern': '/patterns/identity',
  '/identity-account-recovery': '/patterns/identity',
  '/session-timeout-pattern': '/patterns/identity',
  '/identity-session-timeout': '/patterns/identity',
  '/auth-error-lockout-pattern': '/patterns/identity',
  '/identity-error-lockout': '/patterns/identity',

  // Consent pattern redirects
  '/consent-capture-pattern': '/patterns/consent',
  '/consent-capture-demo': '/patterns/consent',
  '/guardian-proxy-consent-demo': '/patterns/consent',
  '/consent-withdrawal-demo': '/patterns/consent',
  '/data-sharing-consent-demo': '/patterns/consent',
  '/privacy-notice-demo': '/patterns/consent',
  '/terms-acceptance-demo': '/patterns/consent',
  '/declaration-before-submission-demo': '/patterns/consent',

  // Payment pattern redirects
  '/fee-payment-demo': '/patterns/payment',
  '/payment-failure-retry-demo': '/patterns/payment',

  // Service pattern redirects
  '/application-submission-pattern': '/patterns/service',
  '/eligibility-screening-pattern': '/patterns/service',
  '/renewal-pattern': '/patterns/service',
  '/correction-resubmission-pattern': '/patterns/service',
  '/complaint-escalation-pattern': '/patterns/service',
  '/approval-issuance-pattern': '/patterns/service',
  '/assisted-offline-online-pattern': '/patterns/service',
  '/high-volume-status-tracking-pattern': '/patterns/service',
  '/appointment-booking-pattern': '/patterns/service',

  // Updated page redirects
  '/certificate-form-personal-updated': '/reference-service/demo',
  '/certificate-signin-updated': '/reference-service/demo',

  // Certificate service redirects
  '/certificate-service': '/reference-service/demo',
  '/certificate-eligibility': '/reference-service/demo',
  '/certificate-help': '/reference-service/demo',
  '/certificate-document-guidelines': '/reference-service/demo',
  '/certificate-privacy-policy': '/reference-service/demo',
  '/certificate-signup': '/reference-service/demo',
  '/certificate-verify-otp': '/reference-service/demo',
  '/certificate-signin': '/reference-service/demo',
  '/certificate-forgot-password': '/reference-service/demo',
  '/certificate-session-timeout': '/reference-service/demo',
  '/certificate-user-profile': '/reference-service/demo',
  '/certificate-start': '/reference-service/demo',
  '/certificate-form-personal': '/reference-service/demo',
  '/certificate-form-address': '/reference-service/demo',
  '/certificate-form-additional': '/reference-service/demo',
  '/certificate-form-review': '/reference-service/demo',
  '/certificate-document-upload': '/reference-service/demo',
  '/certificate-review-summary': '/reference-service/demo',
  '/certificate-declaration': '/reference-service/demo',
  '/certificate-payment-summary': '/reference-service/demo',
  '/certificate-payment-receipt': '/reference-service/demo',
  '/certificate-submission-success': '/reference-service/demo',
  '/certificate-status-tracker': '/reference-service/demo',
  '/certificate-notifications': '/reference-service/demo',
  '/certificate-issued': '/reference-service/demo',
  '/certificate-feedback': '/reference-service/demo',
  '/certificate-correction-request': '/reference-service/demo',
  '/certificate-rejected': '/reference-service/demo',
  '/certificate-appeal': '/reference-service/demo',
  '/certificate-officer-dashboard': '/reference-service/demo',
  '/certificate-officer-cases': '/reference-service/demo',
  '/certificate-officer-review': '/reference-service/demo',
  '/certificate-my-applications': '/reference-service/demo',
  '/certificate-verification': '/reference-service/demo'
};

// ==================== SECTION METADATA ====================

export const SECTION_METADATA = {
  'design-system': {
    title: 'Design System',
    icon: 'Layers',
    color: 'blue',
    description: 'Foundations, components, and patterns for building government services'
  },
  'pattern-library': {
    title: 'Pattern Library',
    icon: 'BookOpen',
    color: 'green',
    description: 'Live demonstrations of common service patterns'
  },
  'reference-service': {
    title: 'Reference Service',
    icon: 'FileText',
    color: 'purple',
    description: 'Complete end-to-end certificate application service'
  },
  'resources': {
    title: 'Resources',
    icon: 'Package',
    color: 'orange',
    description: 'Developer tools and getting started guides'
  },
  'governance': {
    title: 'Governance',
    icon: 'BarChart',
    color: 'red',
    description: 'Adoption tracking and compliance monitoring'
  }
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Get redirect path for legacy URL
 */
export function getLegacyRedirect(path: string): string | null {
  return LEGACY_REDIRECTS[path] || null;
}

/**
 * Get navigation item by path
 */
export function getNavigationItem(path: string): NavigationItem | null {
  for (const section of SYSTEM_NAVIGATION) {
    if (section.path === path) return section;
    if (section.children) {
      for (const child of section.children) {
        if (child.path === path) return child;
      }
    }
  }
  return null;
}

/**
 * Get breadcrumb trail for a path
 */
export function getBreadcrumbs(path: string): Array<{ label: string; path: string }> {
  const breadcrumbs: Array<{ label: string; path: string }> = [
    { label: 'Home', path: '/' }
  ];

  for (const section of SYSTEM_NAVIGATION) {
    if (path.startsWith(section.path) || path === section.path) {
      breadcrumbs.push({ label: section.label, path: section.path });
      
      if (section.children) {
        for (const child of section.children) {
          if (path === child.path) {
            breadcrumbs.push({ label: child.label, path: child.path });
            break;
          }
        }
      }
      break;
    }
  }

  return breadcrumbs;
}

/**
 * Get section for a path
 */
export function getSection(path: string): string | null {
  for (const section of SYSTEM_NAVIGATION) {
    if (path.startsWith(section.path) || path === section.path) {
      return section.id;
    }
  }
  return null;
}

// ==================== EXPORTS ====================

export default {
  navigation: SYSTEM_NAVIGATION,
  paths: PATH_MAPPINGS,
  redirects: LEGACY_REDIRECTS,
  metadata: SECTION_METADATA,
  getLegacyRedirect,
  getNavigationItem,
  getBreadcrumbs,
  getSection
};
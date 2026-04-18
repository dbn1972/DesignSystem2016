/**
 * Global site search index.
 * Lightweight metadata for every navigable page.
 */

export interface SearchEntry {
  title: string;
  path: string;
  description: string;
  category: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchEntry[] = [
  // ── Foundations ──
  { title: 'Foundations', path: '/foundations', description: 'Design tokens, typography, color, spacing, and core principles', category: 'Foundations', keywords: ['tokens', 'design', 'color', 'typography', 'spacing'] },
  { title: 'Accessibility', path: '/accessibility', description: 'WCAG 2.1 AA standards, keyboard interaction, screen reader, focus management', category: 'Foundations', keywords: ['a11y', 'wcag', 'keyboard', 'screen reader', 'focus', 'aria'] },
  { title: 'Content Design System', path: '/content-system', description: 'Labels, helper text, error messages, consent language, content guidelines', category: 'Foundations', keywords: ['content', 'labels', 'errors', 'messages', 'writing'] },

  // ── Components ──
  { title: 'Components Overview', path: '/components', description: 'Browse all 79 production-ready React components', category: 'Components', keywords: ['components', 'ui', 'library'] },
  { title: 'Icons', path: '/components/icons', description: '102 SVG icons with React components and dynamic registry', category: 'Components', keywords: ['icons', 'svg', 'lucide'] },
  { title: 'Framework Status', path: '/framework-status', description: 'React, Angular, and Web Components implementation status', category: 'Components', keywords: ['react', 'angular', 'web components', 'status'] },
  { title: 'Button', path: '/components/button', description: 'Primary, secondary, tertiary, ghost, and destructive button variants', category: 'Components', keywords: ['button', 'cta', 'action'] },
  { title: 'Input', path: '/components/input', description: 'Text input with validation, hints, and error states', category: 'Components', keywords: ['input', 'text', 'field', 'form'] },
  { title: 'Select', path: '/components/select', description: 'Dropdown select with search, multi-select, and groups', category: 'Components', keywords: ['select', 'dropdown', 'option'] },
  { title: 'Checkbox', path: '/components/checkbox', description: 'Checkbox with indeterminate state and group support', category: 'Components', keywords: ['checkbox', 'check', 'form'] },
  { title: 'Radio', path: '/components/radio', description: 'Radio button group with horizontal and vertical layouts', category: 'Components', keywords: ['radio', 'option', 'form'] },
  { title: 'Textarea', path: '/components/textarea', description: 'Multi-line text input with character count', category: 'Components', keywords: ['textarea', 'multiline', 'form'] },
  { title: 'Card', path: '/components/card', description: 'Content container with header, body, and footer', category: 'Components', keywords: ['card', 'container', 'surface'] },
  { title: 'Badge', path: '/components/badge', description: 'Status badges and labels', category: 'Components', keywords: ['badge', 'tag', 'label', 'status'] },
  { title: 'Alert', path: '/components/alert', description: 'Feedback alerts for info, success, warning, and error', category: 'Components', keywords: ['alert', 'notification', 'feedback'] },
  { title: 'Dialog', path: '/components/dialog', description: 'Modal dialog with focus trap and backdrop', category: 'Components', keywords: ['dialog', 'modal', 'popup'] },
  { title: 'Drawer', path: '/components/drawer', description: 'Slide-out panel from any edge', category: 'Components', keywords: ['drawer', 'panel', 'sidebar'] },
  { title: 'Tabs', path: '/components/tabs', description: 'Tabbed navigation with keyboard support', category: 'Components', keywords: ['tabs', 'navigation', 'panel'] },
  { title: 'Accordion', path: '/components/accordion', description: 'Collapsible content sections', category: 'Components', keywords: ['accordion', 'collapse', 'expand'] },
  { title: 'Table', path: '/components/table', description: 'Data table with sorting, pagination, and selection', category: 'Components', keywords: ['table', 'data', 'grid', 'sort'] },
  { title: 'Tooltip', path: '/components/tooltip', description: 'Contextual tooltip on hover or focus', category: 'Components', keywords: ['tooltip', 'hint', 'popover'] },
  { title: 'Popover', path: '/components/popover', description: 'Rich content popover with positioning', category: 'Components', keywords: ['popover', 'dropdown', 'overlay'] },
  { title: 'Toast', path: '/components/toast', description: 'Temporary notification messages', category: 'Components', keywords: ['toast', 'notification', 'snackbar'] },
  { title: 'Progress', path: '/components/progress', description: 'Progress bar and circular progress', category: 'Components', keywords: ['progress', 'loading', 'bar'] },
  { title: 'Spinner', path: '/components/spinner', description: 'Loading spinner indicator', category: 'Components', keywords: ['spinner', 'loading', 'indicator'] },
  { title: 'Avatar', path: '/components/avatar', description: 'User avatar with image, initials, and fallback', category: 'Components', keywords: ['avatar', 'user', 'profile', 'image'] },
  { title: 'Breadcrumb', path: '/components/breadcrumb', description: 'Navigation breadcrumb trail', category: 'Components', keywords: ['breadcrumb', 'navigation', 'trail'] },
  { title: 'Pagination', path: '/components/pagination', description: 'Page navigation with prev/next and page numbers', category: 'Components', keywords: ['pagination', 'pages', 'navigation'] },
  { title: 'Stepper', path: '/components/stepper', description: 'Multi-step process indicator', category: 'Components', keywords: ['stepper', 'wizard', 'steps', 'process'] },
  { title: 'Timeline', path: '/components/timeline', description: 'Vertical timeline for events and history', category: 'Components', keywords: ['timeline', 'history', 'events'] },
  { title: 'Rating', path: '/components/rating', description: 'Star rating input and display', category: 'Components', keywords: ['rating', 'stars', 'review'] },
  { title: 'OTP Input', path: '/components/otp-input', description: 'One-time password input with auto-advance', category: 'Components', keywords: ['otp', 'verification', 'code', 'pin'] },
  { title: 'Date Picker', path: '/components/date-picker', description: 'Calendar date picker with range support', category: 'Components', keywords: ['date', 'calendar', 'picker'] },
  { title: 'File Upload', path: '/components/file-upload', description: 'Drag-and-drop file upload with preview', category: 'Components', keywords: ['file', 'upload', 'drag', 'drop'] },
  { title: 'Autocomplete', path: '/components/autocomplete', description: 'Search input with suggestions', category: 'Components', keywords: ['autocomplete', 'search', 'suggest'] },
  { title: 'Search Bar', path: '/components/search-bar', description: 'Search input with filters and results', category: 'Components', keywords: ['search', 'find', 'filter'] },
  { title: 'Menu', path: '/components/menu', description: 'Dropdown menu with items, groups, and shortcuts', category: 'Components', keywords: ['menu', 'dropdown', 'context'] },
  { title: 'Switch', path: '/components/switch', description: 'Toggle switch for boolean settings', category: 'Components', keywords: ['switch', 'toggle', 'boolean'] },
  { title: 'Skeleton', path: '/components/skeleton', description: 'Loading placeholder skeleton', category: 'Components', keywords: ['skeleton', 'loading', 'placeholder'] },
  { title: 'Empty State', path: '/components/empty-state', description: 'Empty state with illustration and action', category: 'Components', keywords: ['empty', 'no data', 'placeholder'] },
  { title: 'Tag', path: '/components/tag', description: 'Removable tag/chip component', category: 'Components', keywords: ['tag', 'chip', 'label'] },
  { title: 'Data Grid', path: '/components/data-grid', description: 'Advanced data grid with virtual scrolling', category: 'Components', keywords: ['grid', 'data', 'table', 'virtual'] },
  { title: 'Form Builder', path: '/components/form-builder', description: 'Dynamic form builder with validation', category: 'Components', keywords: ['form', 'builder', 'dynamic'] },
  { title: 'Dropdown', path: '/components/dropdown', description: 'Dropdown menu trigger', category: 'Components', keywords: ['dropdown', 'menu'] },
  { title: 'Aadhaar Input', path: '/components/aadhaar-input', description: 'Aadhaar number input with formatting', category: 'Components', keywords: ['aadhaar', 'uid', 'identity'] },
  { title: 'PAN Card Input', path: '/components/pan-card-input', description: 'PAN card number input with validation', category: 'Components', keywords: ['pan', 'tax', 'identity'] },
  { title: 'Application Tracker', path: '/components/application-tracker', description: 'Application status tracking component', category: 'Components', keywords: ['tracker', 'status', 'application'] },

  // ── Patterns ──
  { title: 'Pattern Library', path: '/pattern-library', description: 'Browse all UX patterns for government services', category: 'Patterns', keywords: ['patterns', 'library', 'ux'] },
  { title: 'Patterns Overview', path: '/patterns', description: 'All pattern categories and navigation', category: 'Patterns', keywords: ['patterns', 'overview'] },
  { title: 'Identity & Access', path: '/patterns/identity', description: 'Sign in, sign up, OTP, password recovery patterns', category: 'Patterns', keywords: ['identity', 'auth', 'login', 'sign in'] },
  { title: 'Sign In Pattern', path: '/patterns/identity/sign-in', description: 'Authentication sign-in flow', category: 'Patterns', keywords: ['sign in', 'login', 'auth'] },
  { title: 'Sign Up Pattern', path: '/patterns/identity/sign-up', description: 'User registration flow', category: 'Patterns', keywords: ['sign up', 'register', 'account'] },
  { title: 'OTP Verification', path: '/patterns/identity/otp-verification', description: 'One-time password verification', category: 'Patterns', keywords: ['otp', 'verification', 'code'] },
  { title: 'Forgot Password', path: '/patterns/identity/forgot-password', description: 'Password recovery flow', category: 'Patterns', keywords: ['forgot', 'password', 'recovery'] },
  { title: 'Aadhaar Authentication', path: '/patterns/identity/aadhaar-auth', description: 'Aadhaar-based identity verification', category: 'Patterns', keywords: ['aadhaar', 'biometric', 'identity'] },
  { title: 'Session Timeout', path: '/patterns/identity/session-timeout', description: 'Session expiry and renewal', category: 'Patterns', keywords: ['session', 'timeout', 'expiry'] },
  { title: 'Consent & Declaration', path: '/patterns/consent', description: 'Consent capture, terms acceptance, privacy notice', category: 'Patterns', keywords: ['consent', 'declaration', 'terms', 'privacy'] },
  { title: 'Search & Discovery', path: '/patterns/search-discovery', description: 'Global search, results, no results, smart suggestions', category: 'Patterns', keywords: ['search', 'discovery', 'find'] },
  { title: 'Dashboard & Tasks', path: '/patterns/dashboard', description: 'Citizen dashboard, task lists, activity tracking', category: 'Patterns', keywords: ['dashboard', 'tasks', 'overview'] },
  { title: 'Status & Lifecycle', path: '/patterns/status-lifecycle', description: 'Application status tracking and timeline', category: 'Patterns', keywords: ['status', 'lifecycle', 'tracking'] },
  { title: 'Notifications', path: '/patterns/notifications', description: 'Notification center, actionable alerts', category: 'Patterns', keywords: ['notifications', 'alerts', 'messages'] },
  { title: 'Contact & Support', path: '/patterns/contact-support', description: 'Contact forms, service support, issue reporting', category: 'Patterns', keywords: ['contact', 'support', 'help'] },
  { title: 'Feedback & Rating', path: '/patterns/feedback', description: 'Service rating, post-completion feedback', category: 'Patterns', keywords: ['feedback', 'rating', 'review'] },
  { title: 'Localization', path: '/patterns/localization', description: 'Language switching, translation, multilingual', category: 'Patterns', keywords: ['localization', 'language', 'translation', 'i18n'] },
  { title: 'Data Input', path: '/patterns/data-input', description: 'Bulk data entry, autofill, address lookup', category: 'Patterns', keywords: ['data', 'input', 'form', 'entry'] },
  { title: 'Payment Patterns', path: '/patterns/payment', description: 'Fee payment, retry, receipt patterns', category: 'Patterns', keywords: ['payment', 'fee', 'transaction'] },

  // ── Archetypes ──
  { title: 'Service Archetypes', path: '/archetypes', description: 'Reusable service pattern libraries', category: 'Archetypes', keywords: ['archetypes', 'service', 'blueprints'] },
  { title: 'Application Submission', path: '/archetypes/application', description: 'End-to-end application submission archetype', category: 'Archetypes', keywords: ['application', 'submission', 'form'] },
  { title: 'Eligibility Screening', path: '/archetypes/eligibility', description: 'Eligibility check and screening flow', category: 'Archetypes', keywords: ['eligibility', 'screening', 'check'] },
  { title: 'Renewal', path: '/archetypes/renewal', description: 'Service renewal and re-application', category: 'Archetypes', keywords: ['renewal', 'reapply'] },
  { title: 'Correction & Resubmission', path: '/archetypes/correction', description: 'Error correction and resubmission flow', category: 'Archetypes', keywords: ['correction', 'resubmission', 'fix'] },
  { title: 'Complaint & Escalation', path: '/archetypes/complaint', description: 'Complaint filing and escalation', category: 'Archetypes', keywords: ['complaint', 'escalation', 'grievance'] },
  { title: 'Approval & Issuance', path: '/archetypes/approval', description: 'Officer approval and certificate issuance', category: 'Archetypes', keywords: ['approval', 'issuance', 'officer'] },
  { title: 'Assisted Services', path: '/archetypes/assisted', description: 'Offline-to-online assisted service delivery', category: 'Archetypes', keywords: ['assisted', 'offline', 'csc'] },
  { title: 'Status Tracking', path: '/archetypes/tracking', description: 'High-volume application status tracking', category: 'Archetypes', keywords: ['tracking', 'status', 'volume'] },
  { title: 'Appointment Booking', path: '/archetypes/appointment', description: 'Appointment scheduling and management', category: 'Archetypes', keywords: ['appointment', 'booking', 'schedule'] },

  // ── Systems ──
  { title: 'Systems Overview', path: '/systems', description: 'Advanced system capabilities', category: 'Systems', keywords: ['systems', 'advanced'] },
  { title: 'Multilingual Guidance', path: '/systems/multilingual', description: 'Multi-language support and translation', category: 'Systems', keywords: ['multilingual', 'language', 'translation'] },
  { title: 'Form Intelligence', path: '/systems/form-intelligence', description: 'Smart form validation and auto-fill', category: 'Systems', keywords: ['form', 'intelligence', 'validation', 'autofill'] },
  { title: 'State Resilience', path: '/systems/state-resilience', description: 'Offline support and state recovery', category: 'Systems', keywords: ['state', 'resilience', 'offline', 'recovery'] },

  // ── Services ──
  { title: 'Services Hub', path: '/services', description: 'Reference service implementations', category: 'Services', keywords: ['services', 'reference', 'demo'] },
  { title: 'Service Blueprint', path: '/reference-service/overview', description: 'End-to-end service architecture blueprint', category: 'Services', keywords: ['blueprint', 'architecture', 'overview'] },
  { title: 'Certificate Service Demo', path: '/reference-service/demo', description: 'Live demo of the certificate service', category: 'Services', keywords: ['demo', 'certificate', 'live'] },

  // ── Resources ──
  { title: 'Resources Hub', path: '/resources', description: 'Developer resources, tools, and downloads', category: 'Resources', keywords: ['resources', 'tools', 'downloads'] },
  { title: 'Getting Started', path: '/resources/getting-started', description: 'Installation guide and quick start', category: 'Resources', keywords: ['install', 'setup', 'getting started', 'npm'] },
  { title: 'Starter Kit', path: '/resources/starter-kit', description: 'React and Angular starter templates', category: 'Resources', keywords: ['starter', 'template', 'boilerplate'] },
  { title: 'Component Specs', path: '/resources/component-specs', description: 'Component code mapping and specifications', category: 'Resources', keywords: ['specs', 'code', 'mapping'] },
  { title: 'Figma Design Kit', path: '/resources/figma', description: 'Figma design tokens and component library', category: 'Resources', keywords: ['figma', 'design', 'tokens'] },
  { title: 'Government Logos', path: '/resources/logos', description: '156 official government logos with categories', category: 'Resources', keywords: ['logos', 'government', 'brand', 'identity'] },
  { title: 'Migration Guides', path: '/resources/migration-guides', description: 'Migration from other design systems', category: 'Resources', keywords: ['migration', 'upgrade', 'move'] },
  { title: 'API Reference', path: '/api-reference', description: 'Component API documentation', category: 'Resources', keywords: ['api', 'reference', 'docs'] },
  { title: 'Service Code Downloads', path: '/resources/service-code-downloads', description: 'Download React source for reusable services', category: 'Resources', keywords: ['download', 'code', 'source'] },
  { title: 'Angular Core Docs', path: '/resources/angular-core', description: 'Angular component library documentation', category: 'Resources', keywords: ['angular', 'docs'] },
  { title: 'Web Components Docs', path: '/resources/web-components', description: 'Web Components documentation', category: 'Resources', keywords: ['web components', 'custom elements'] },
  { title: 'Documentation', path: '/documentation', description: 'Complete design system documentation', category: 'Resources', keywords: ['docs', 'documentation', 'guide'] },

  // ── Governance ──
  { title: 'Governance', path: '/governance', description: 'Design system governance framework', category: 'Governance', keywords: ['governance', 'compliance', 'standards'] },
  { title: 'Adoption Tracking', path: '/governance/adoption', description: 'Track design system adoption across teams', category: 'Governance', keywords: ['adoption', 'tracking', 'teams'] },
  { title: 'Conformance Dashboard', path: '/governance/conformance', description: 'Conformance and compliance dashboard', category: 'Governance', keywords: ['conformance', 'compliance', 'audit'] },
  { title: 'Service Analytics', path: '/governance/analytics', description: 'Service usage analytics and telemetry', category: 'Governance', keywords: ['analytics', 'telemetry', 'usage'] },

  // ── Legal ──
  { title: 'Privacy Policy', path: '/privacy-policy', description: 'Data protection and privacy practices', category: 'Legal', keywords: ['privacy', 'data', 'gdpr', 'dpdp'] },
  { title: 'Terms of Use', path: '/terms-of-use', description: 'Terms and conditions for using UX4G', category: 'Legal', keywords: ['terms', 'conditions', 'use'] },
  { title: 'Security Policy', path: '/security-policy', description: 'Security practices and vulnerability reporting', category: 'Legal', keywords: ['security', 'vulnerability', 'report'] },
  { title: 'Code of Conduct', path: '/code-of-conduct', description: 'Community code of conduct', category: 'Legal', keywords: ['conduct', 'community', 'behavior'] },
  { title: 'Contributing', path: '/contributing', description: 'How to contribute to UX4G', category: 'Legal', keywords: ['contributing', 'open source', 'pull request'] },
  { title: 'Copyright & License', path: '/copyright', description: 'Copyright information and MIT license', category: 'Legal', keywords: ['copyright', 'license', 'mit'] },
  { title: 'Disclaimer', path: '/disclaimer', description: 'Legal disclaimer and limitations', category: 'Legal', keywords: ['disclaimer', 'legal', 'liability'] },
  { title: 'Contact', path: '/contact', description: 'Contact the UX4G team', category: 'Legal', keywords: ['contact', 'email', 'support'] },
  { title: 'Site Map', path: '/site-map', description: 'Complete site map of all pages', category: 'Legal', keywords: ['sitemap', 'navigation', 'pages'] },
];

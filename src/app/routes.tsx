import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const UnifiedHome = lazy(() => import("./pages/UnifiedHome"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ResourcesHub = lazy(() => import("./pages/ResourcesHub"));
const Documentation = lazy(() => import("./pages/Documentation"));
const InstallationGuide = lazy(() => import("./pages/InstallationGuide"));
const UX4GStarterKit = lazy(() => import("./pages/UX4GStarterKit"));
const ComponentCodeMapping = lazy(() => import("./pages/ComponentCodeMapping"));
const FigmaDesignSystem = lazy(() => import("./pages/FigmaDesignSystem"));
const MigrationGuides = lazy(() => import("./pages/MigrationGuides"));
const MigrationMaterialUI = lazy(() => import("./pages/MigrationMaterialUI"));
const ServiceCodeDownloads = lazy(() => import("./pages/ServiceCodeDownloads"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const AngularCoreDocs = lazy(() => import("./pages/AngularCoreDocs"));
const AngularPatternsDocs = lazy(() => import("./pages/AngularPatternsDocs"));
const WebComponentsDocs = lazy(() => import("./pages/WebComponentsDocs"));
const AngularDocsPage = lazy(() => import("./pages/AngularDocsPage"));
const AngularDocDetail = lazy(() => import("./pages/AngularDocDetail"));
const WebComponentsDocsPage = lazy(() => import("./pages/WebComponentsDocsPage"));
const WebComponentsDocDetail = lazy(() => import("./pages/WebComponentsDocDetail"));

import { componentsRoutes } from "./routes/domains/componentsRoutes";
import { foundationsRoutes } from "./routes/domains/foundationsRoutes";
import { governanceRoutes } from "./routes/domains/governanceRoutes";
import { patternsRoutes } from "./routes/domains/patternsRoutes";
import { servicesRoutes } from "./routes/domains/servicesRoutes";
import { systemsRoutes } from "./routes/domains/systemsRoutes";
import { ROUTE_PATHS, toChildPath } from "./routes/pathSource";
import Layout from "./components/Layout";

// ============================================================================
// ROUTER CONFIGURATION
// ============================================================================
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // ======================================================================
      // HOME
      // ======================================================================
      { index: true, Component: UnifiedHome },

      ...foundationsRoutes,
      ...componentsRoutes,
      ...patternsRoutes,
      ...servicesRoutes,
      ...systemsRoutes,

      // ======================================================================
      // 7. RESOURCES
      // ======================================================================
      { path: "resources", Component: ResourcesHub },
      { path: "documentation", Component: Documentation },
      { path: "resources/getting-started", Component: InstallationGuide },
      { path: "resources/starter-kit", Component: UX4GStarterKit },
      { path: "resources/component-specs", Component: ComponentCodeMapping },
      { path: "resources/service-code-downloads", Component: ServiceCodeDownloads },
      { path: "resources/figma", Component: FigmaDesignSystem },
      { path: "resources/migration-guides", Component: MigrationGuides },
      { path: "resources/migration-material-ui", Component: MigrationMaterialUI },
      { path: "api-reference", Component: ApiReference },
      { path: "resources/angular-core", Component: AngularCoreDocs },
      { path: "resources/angular-patterns", Component: AngularPatternsDocs },
      { path: "resources/web-components", Component: WebComponentsDocs },

      // Angular & Web Components Documentation Hubs
      { path: "docs/angular", Component: AngularDocsPage },
      { path: "docs/angular/:slug", Component: AngularDocDetail },
      { path: "docs/web-components", Component: WebComponentsDocsPage },
      { path: "docs/web-components/:slug", Component: WebComponentsDocDetail },

      { path: "design-system", element: <Navigate to="/" replace /> },
      { path: "reference-service", element: <Navigate to="/reference-service/overview" replace /> },

      ...governanceRoutes,

      // ======================================================================
      // LEGACY REDIRECTS (Consolidated)
      // ======================================================================

      // Old foundation pages
      { path: "foundations-detailed", element: <Navigate to="/foundations" replace /> },
      { path: "design-tokens", element: <Navigate to="/foundations" replace /> },
      { path: "styles-system", element: <Navigate to="/foundations" replace /> },
      { path: "theming-tokens", element: <Navigate to="/foundations" replace /> },
      { path: "accessibility-tooling", element: <Navigate to="/accessibility" replace /> },
      { path: "content-design-system", element: <Navigate to="/content-system" replace /> },
      { path: "content-system-showcase", element: <Navigate to="/content-system" replace /> },

      // Old component pages
      { path: "core-components", element: <Navigate to="/components" replace /> },
      { path: "component-docs", element: <Navigate to="/components" replace /> },
      { path: "component-template", element: <Navigate to="/components" replace /> },
      { path: "component-code-mapping", element: <Navigate to="/resources/component-specs" replace /> },

      // Old pattern pages
      { path: "advanced-patterns", element: <Navigate to="/patterns" replace /> },
      { path: "patterns-navigation-demo", element: <Navigate to="/patterns" replace /> },
      { path: "operational-service-patterns", element: <Navigate to="/patterns/service" replace /> },
      { path: "service-pattern-libraries", element: <Navigate to="/archetypes" replace /> },

      // Old identity pattern paths
      { path: "identity-access-patterns", element: <Navigate to="/patterns/identity" replace /> },
      { path: "sign-in-pattern", element: <Navigate to="/patterns/identity/sign-in" replace /> },
      { path: "identity-signin", element: <Navigate to="/patterns/identity/sign-in" replace /> },
      { path: "sign-up-pattern", element: <Navigate to="/patterns/identity/sign-up" replace /> },
      { path: "identity-signup", element: <Navigate to="/patterns/identity/sign-up" replace /> },
      { path: "otp-verification-pattern", element: <Navigate to="/patterns/identity/otp-verification" replace /> },
      { path: "mobile-otp-pattern", element: <Navigate to="/patterns/identity/mobile-otp" replace /> },
      { path: "identity-mobile-otp", element: <Navigate to="/patterns/identity/mobile-otp" replace /> },
      { path: "identity-email-otp", element: <Navigate to="/patterns/identity" replace /> },
      { path: "forgot-password-pattern", element: <Navigate to="/patterns/identity/forgot-password" replace /> },
      { path: "identity-forgot-password", element: <Navigate to="/patterns/identity/forgot-password" replace /> },
      { path: "aadhaar-authentication-pattern", element: <Navigate to="/patterns/identity/aadhaar-auth" replace /> },
      { path: "identity-aadhaar", element: <Navigate to="/patterns/identity/aadhaar-auth" replace /> },
      { path: "account-recovery-pattern", element: <Navigate to="/patterns/identity/account-recovery" replace /> },
      { path: "identity-account-recovery", element: <Navigate to="/patterns/identity/account-recovery" replace /> },
      { path: "session-timeout-pattern", element: <Navigate to="/patterns/identity/session-timeout" replace /> },
      { path: "identity-session-timeout", element: <Navigate to="/patterns/identity/session-timeout" replace /> },
      { path: "auth-error-lockout-pattern", element: <Navigate to="/patterns/identity/auth-error" replace /> },
      { path: "identity-error-lockout", element: <Navigate to="/patterns/identity/auth-error" replace /> },

      // Old consent pattern paths
      { path: "consent-declaration-patterns", element: <Navigate to="/patterns/consent" replace /> },
      { path: "consent-capture-pattern", element: <Navigate to="/patterns/consent/consent-capture" replace /> },
      { path: "consent-capture-demo", element: <Navigate to="/patterns/consent/consent-demo" replace /> },
      { path: "guardian-proxy-consent-demo", element: <Navigate to="/patterns/consent/guardian-proxy" replace /> },
      { path: "consent-withdrawal-demo", element: <Navigate to="/patterns/consent/withdrawal" replace /> },
      { path: "data-sharing-consent-demo", element: <Navigate to="/patterns/consent/data-sharing" replace /> },
      { path: "privacy-notice-demo", element: <Navigate to="/patterns/consent/privacy-notice" replace /> },
      { path: "terms-acceptance-demo", element: <Navigate to="/patterns/consent/terms-acceptance" replace /> },
      { path: "declaration-before-submission-demo", element: <Navigate to="/patterns/consent/declaration" replace /> },

      // Old payment pattern paths
      { path: "fee-payment-demo", element: <Navigate to="/patterns/payment" replace /> },
      { path: "payment-failure-retry-demo", element: <Navigate to="/patterns/payment/failure-retry" replace /> },

      // Old archetype pattern paths
      { path: "application-submission-pattern", element: <Navigate to="/archetypes/application" replace /> },
      { path: "eligibility-screening-pattern", element: <Navigate to="/archetypes/eligibility" replace /> },
      { path: "renewal-pattern", element: <Navigate to="/archetypes/renewal" replace /> },
      { path: "correction-resubmission-pattern", element: <Navigate to="/archetypes/correction" replace /> },
      { path: "complaint-escalation-pattern", element: <Navigate to="/archetypes/complaint" replace /> },
      { path: "approval-issuance-pattern", element: <Navigate to="/archetypes/approval" replace /> },
      { path: "assisted-offline-online-pattern", element: <Navigate to="/archetypes/assisted" replace /> },
      { path: "high-volume-status-tracking-pattern", element: <Navigate to="/archetypes/tracking" replace /> },
      { path: "appointment-booking-pattern", element: <Navigate to="/archetypes/appointment" replace /> },

      // Old system paths
      { path: "form-intelligence-system", element: <Navigate to="/systems/form-intelligence" replace /> },
      { path: "state-resilience-system", element: <Navigate to="/systems/state-resilience" replace /> },
      { path: "multilingual", element: <Navigate to="/systems/multilingual" replace /> },

      // Old resource pages
      { path: "old-home", element: <Navigate to="/" replace /> },
      { path: "cover", element: <Navigate to="/" replace /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "installation", element: <Navigate to="/resources/getting-started" replace /> },
      { path: "starter-kits", element: <Navigate to="/resources/starter-kit" replace /> },
      { path: "ux4g-starter-kit", element: <Navigate to="/resources/starter-kit" replace /> },
      { path: "design-to-code", element: <Navigate to="/resources/figma" replace /> },
      { path: "figma-design-system", element: <Navigate to="/resources/figma" replace /> },
      { path: "figma-ia", element: <Navigate to="/resources/figma" replace /> },

      // Old governance pages
      { path: "telemetry-docs", element: <Navigate to="/governance/analytics" replace /> },
      { path: "service-analytics", element: <Navigate to="/governance/analytics" replace /> },
      { path: "conformance-dashboard", element: <Navigate to="/governance/conformance" replace /> },

      // Old service blueprint pages
      { path: "service-blueprint", element: <Navigate to="/reference-service/overview" replace /> },
      { path: "sector-blueprints", element: <Navigate to="/reference-service/overview" replace /> },
      { path: "reference-service-blueprint", element: <Navigate to="/reference-service/overview" replace /> },

      // Old certificate service pages (redirect to new paths)
      { path: "certificate-service", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "certificate-eligibility", element: <Navigate to="/reference-service/certificate/eligibility" replace /> },
      { path: "certificate-help", element: <Navigate to="/reference-service/certificate/help" replace /> },
      { path: "certificate-document-guidelines", element: <Navigate to="/reference-service/certificate/document-guidelines" replace /> },
      { path: "certificate-privacy-policy", element: <Navigate to="/reference-service/certificate/privacy-policy" replace /> },
      { path: "certificate-signup", element: <Navigate to="/reference-service/certificate/sign-up" replace /> },
      { path: "certificate-verify-otp", element: <Navigate to="/reference-service/certificate/verify-otp" replace /> },
      { path: "certificate-signin", element: <Navigate to="/reference-service/certificate/sign-in" replace /> },
      { path: "certificate-forgot-password", element: <Navigate to="/reference-service/certificate/forgot-password" replace /> },
      { path: "certificate-session-timeout", element: <Navigate to="/reference-service/certificate/session-timeout" replace /> },
      { path: "certificate-user-profile", element: <Navigate to="/reference-service/certificate/user-profile" replace /> },
      { path: "certificate-start", element: <Navigate to="/reference-service/certificate/start" replace /> },
      { path: "certificate-form-personal", element: <Navigate to="/reference-service/certificate/form/personal" replace /> },
      { path: "certificate-form-address", element: <Navigate to="/reference-service/certificate/form/address" replace /> },
      { path: "certificate-form-additional", element: <Navigate to="/reference-service/certificate/form/additional" replace /> },
      { path: "certificate-form-review", element: <Navigate to="/reference-service/certificate/form/review" replace /> },
      { path: "certificate-document-upload", element: <Navigate to="/reference-service/certificate/document-upload" replace /> },
      { path: "certificate-review-summary", element: <Navigate to="/reference-service/certificate/review-summary" replace /> },
      { path: "certificate-declaration", element: <Navigate to="/reference-service/certificate/declaration" replace /> },
      { path: "certificate-payment-summary", element: <Navigate to="/reference-service/certificate/payment-summary" replace /> },
      { path: "certificate-payment-receipt", element: <Navigate to="/reference-service/certificate/payment-receipt" replace /> },
      { path: "certificate-submission-success", element: <Navigate to="/reference-service/certificate/submission-success" replace /> },
      { path: "certificate-status-tracker", element: <Navigate to="/reference-service/certificate/status-tracker" replace /> },
      { path: "certificate-notifications", element: <Navigate to="/reference-service/certificate/notifications" replace /> },
      { path: "certificate-issued", element: <Navigate to="/reference-service/certificate/issued" replace /> },
      { path: "certificate-feedback", element: <Navigate to="/reference-service/certificate/feedback" replace /> },
      { path: "certificate-correction-request", element: <Navigate to="/reference-service/certificate/correction-request" replace /> },
      { path: "certificate-rejected", element: <Navigate to="/reference-service/certificate/rejected" replace /> },
      { path: "certificate-appeal", element: <Navigate to="/reference-service/certificate/appeal" replace /> },
      { path: "certificate-officer-dashboard", element: <Navigate to="/reference-service/certificate/officer/dashboard" replace /> },
      { path: "certificate-officer-cases", element: <Navigate to="/reference-service/certificate/officer/cases" replace /> },
      { path: "certificate-officer-review", element: <Navigate to="/reference-service/certificate/officer/review" replace /> },
      { path: "certificate-my-applications", element: <Navigate to="/reference-service/certificate/my-applications" replace /> },
      { path: "certificate-verification", element: <Navigate to="/reference-service/certificate/verification" replace /> },

      // Additional compatibility redirects for docs, examples, and legacy demo URLs
      { path: "installation-guide", element: <Navigate to="/resources/getting-started" replace /> },
      { path: "migration-guides", element: <Navigate to="/resources/migration-guides" replace /> },
      { path: "changelog", element: <Navigate to="/resources/migration-guides" replace /> },
      { path: "contribution-guidelines", element: <Navigate to="/contributing" replace /> },
      { path: "api-docs", element: <Navigate to="/api-reference" replace /> },
      { path: "angular-core", element: <Navigate to="/resources/angular-core" replace /> },
      { path: "angular-patterns", element: <Navigate to="/resources/angular-patterns" replace /> },
      { path: "web-components-docs", element: <Navigate to="/resources/web-components" replace /> },
      { path: "contact-support-overview", element: <Navigate to="/patterns/contact-support/overview" replace /> },
      { path: "faq", element: <Navigate to="/patterns/contact-support/overview" replace /> },
      { path: "faqs", element: <Navigate to="/patterns/contact-support/overview" replace /> },
      { path: "help", element: <Navigate to="/patterns/contact-support/overview" replace /> },
      { path: "support", element: <Navigate to="/patterns/contact-support/overview" replace /> },
      { path: "about", element: <Navigate to="/documentation" replace /> },
      { path: "team", element: <Navigate to="/documentation" replace /> },
      { path: "careers", element: <Navigate to="/documentation" replace /> },
      { path: "docs", element: <Navigate to="/documentation" replace /> },
      { path: "docs/*", element: <Navigate to="/documentation" replace /> },
      { path: "services/*", element: <Navigate to="/services" replace /> },
      { path: "service/*", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "dashboard", element: <Navigate to="/patterns/dashboard" replace /> },
      { path: "dashboard/*", element: <Navigate to="/patterns/dashboard" replace /> },
      { path: "profile", element: <Navigate to="/reference-service/user-profile" replace /> },
      { path: "settings", element: <Navigate to="/reference-service/user-profile" replace /> },
      { path: "privacy", element: <Navigate to="/privacy-policy" replace /> },
      { path: "terms", element: <Navigate to="/terms-of-use" replace /> },
      { path: "service-analytics", element: <Navigate to="/governance/analytics" replace /> },
      { path: "adoption", element: <Navigate to="/governance/adoption" replace /> },
      { path: "figma-design-system", element: <Navigate to="/resources/figma" replace /> },
      { path: "localization-patterns", element: <Navigate to="/patterns/localization" replace /> },
      { path: "component-aadhaar-input", element: <Navigate to="/components/aadhaar-input" replace /> },
      { path: "component-otp-input", element: <Navigate to="/components/otp-input" replace /> },
      { path: "component-form-builder", element: <Navigate to="/components/form-builder" replace /> },
      { path: "application-submission-pattern", element: <Navigate to="/archetypes/application" replace /> },
      { path: "aadhaar-authentication-pattern", element: <Navigate to="/patterns/identity/aadhaar-auth" replace /> },
      { path: "high-volume-status-tracking-pattern", element: <Navigate to="/archetypes/tracking" replace /> },
      { path: "payment-gateway-page", element: <Navigate to="/patterns/payment" replace /> },
      { path: "reference-service-blueprint", element: <Navigate to="/reference-service/overview" replace /> },
      { path: "certificate-form-personal-updated", element: <Navigate to="/reference-service/certificate/form/personal" replace /> },
      { path: "certificate-signin-updated", element: <Navigate to="/reference-service/certificate/sign-in" replace /> },
      { path: "components/forms", element: <Navigate to="/patterns/forms" replace /> },
      { path: "components/validation", element: <Navigate to="/patterns/forms" replace /> },
      { path: "components/feedback", element: <Navigate to="/patterns/feedback" replace /> },
      { path: "patterns/form-validation", element: <Navigate to="/patterns/forms" replace /> },
      { path: "patterns/progressive-disclosure", element: <Navigate to="/patterns/forms" replace /> },
      { path: "patterns/application-submission", element: <Navigate to="/archetypes/application" replace /> },
      { path: "patterns/file-upload", element: <Navigate to="/patterns/data-input/upload-extract" replace /> },
      { path: "patterns/dashboard/application-dashboard", element: <Navigate to="/patterns/dashboard/citizen-dashboard" replace /> },
      { path: "patterns/dashboard/notifications", element: <Navigate to="/patterns/notifications/center" replace /> },
      { path: "patterns/dashboard/saved-services", element: <Navigate to="/patterns/dashboard/citizen-dashboard" replace /> },
      { path: "patterns/dashboard/activity-history", element: <Navigate to="/patterns/status-lifecycle/timeline-view" replace /> },
      { path: "patterns/dashboard/profile-preferences", element: <Navigate to="/reference-service/user-profile" replace /> },
      { path: "declaration-submission-pattern", element: <Navigate to="/patterns/consent/declaration" replace /> },
      { path: "data-sharing-consent-pattern", element: <Navigate to="/patterns/consent/data-sharing" replace /> },
      { path: "consent-withdrawal-pattern", element: <Navigate to="/patterns/consent/withdrawal" replace /> },
      { path: "privacy-notice-pattern", element: <Navigate to="/patterns/consent/privacy-notice" replace /> },
      { path: "terms-acceptance-pattern", element: <Navigate to="/patterns/consent/terms-acceptance" replace /> },
      { path: "guardian-consent-pattern", element: <Navigate to="/patterns/consent/guardian-proxy" replace /> },
      { path: "service-1", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "service-2", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "service-3", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "component-dashboards", element: <Navigate to="/components" replace /> },
      { path: "dashboards/funnel", element: <Navigate to="/patterns/dashboard" replace /> },

      // 404 Not Found
      { path: "*", Component: NotFound }
    ]
  }
]);

# UX4G Platform - Information Architecture Reorganization Plan

## Executive Summary

**Current State:**
- 143 total page files
- 49 actively used pages
- 94 unused/duplicate pages (65% waste)
- Routes partially consolidated with legacy redirects

**Reorganization Goals:**
1. Clean, scalable 8-tier IA structure
2. Eliminate all duplicate pages
3. Integrate valuable unused content
4. Create hierarchical navigation
5. Add breadcrumb system
6. Remove 60+ duplicate files

---

## Proposed IA Structure

### 1. FOUNDATIONS
**Purpose:** Design system foundations - tokens, typography, color, spacing, accessibility

**Pages:**
- ✅ `/foundations` - Foundations (consolidates FoundationsDetailed, DesignTokens, StylesSystem, ThemingTokens)
- ✅ `/accessibility` - Accessibility (consolidates AccessibilityTooling)
- ✅ `/content-system` - Content Design System

**Actions:**
- DELETE: FoundationsDetailed.tsx, DesignTokens.tsx, StylesSystem.tsx, ThemingTokens.tsx
- DELETE: AccessibilityTooling.tsx
- DELETE: ContentSystemShowcase.tsx

---

### 2. COMPONENTS
**Purpose:** Core UI building blocks - buttons, inputs, forms, navigation

**Pages:**
- ✅ `/components` - Components (main overview, consolidates all component docs)

**Actions:**
- DELETE: CoreComponents.tsx
- DELETE: ComponentDocTemplate.tsx
- DELETE: ComponentDocumentation.tsx

---

### 3. PATTERNS
**Purpose:** Reusable pattern assemblies organized by category

**Structure:**
```
/pattern-library          - PatternLibraryHub (overview)
/patterns                 - Patterns (consolidated overview)

/patterns/identity        - Identity & Access Patterns
  ├── /sign-in           - SignInPattern (ADD)
  ├── /sign-up           - SignUpPattern (ADD)
  ├── /otp-verification  - OTPVerificationPattern (ADD)
  ├── /mobile-otp        - MobileOTPPattern (ADD)
  ├── /forgot-password   - ForgotPasswordPattern (ADD)
  ├── /account-recovery  - AccountRecoveryPattern (ADD)
  ├── /aadhaar-auth      - AadhaarAuthenticationPattern (ADD)
  ├── /session-timeout   - SessionTimeoutPattern (ADD)
  ├── /auth-error        - AuthErrorLockoutPattern (ADD)
  ├── /offline-kyc       - OfflineVideoKYCPattern
  ├── /online-kyc        - OnlineVideoKYCPattern
  └── /aadhaar-kyc       - AadhaarVideoKYCPattern

/patterns/consent        - Consent & Declaration Patterns
  ├── /consent-capture   - ConsentCapturePattern (ADD)
  ├── /guardian-proxy    - GuardianProxyConsentDemo (ADD)
  ├── /consent-withdrawal - ConsentWithdrawalDemo (ADD)
  ├── /data-sharing      - DataSharingConsentDemo (ADD)
  ├── /privacy-notice    - PrivacyNoticeDemo (ADD)
  ├── /terms-acceptance  - TermsAcceptanceDemo (ADD)
  └── /declaration       - DeclarationBeforeSubmissionDemo (ADD)

/patterns/payment        - Payment Patterns (NEW category)
  ├── /fee-payment       - FeePaymentDemo
  └── /payment-retry     - PaymentFailureRetryDemo (ADD)

/patterns/forms          - FormIntelligenceSystem
/patterns/resilience     - StateResilienceSystem

/patterns/search-discovery - SearchDiscoveryPatterns
  ├── /overview          - SearchDiscoveryOverview
  ├── /global-search     - GlobalSearchPattern
  ├── /search-results    - SearchResultsPattern
  └── /no-results        - NoResultsPattern

/patterns/dashboard      - DashboardPatterns
  ├── /overview          - DashboardOverview
  ├── /citizen-dashboard - CitizenDashboardPattern
  └── /task-list         - TaskListPattern

/patterns/status-lifecycle - StatusLifecyclePatterns
  ├── /overview          - StatusLifecycleOverview
  ├── /timeline-view     - TimelineViewPattern
  └── /step-progress     - StepProgressPattern

/patterns/notifications  - NotificationPatterns
  ├── /overview          - NotificationOverview
  ├── /center            - NotificationCenterPattern
  └── /actionable        - ActionableNotificationsPattern

/patterns/contact-support - ContactSupportPatterns
  ├── /overview          - ContactSupportOverview
  ├── /general-contact   - GeneralContactPattern
  └── /service-support   - ServiceSupportPattern

/patterns/service        - Operational Service Patterns (ADD category page)
```

**Actions:**
- ADD: Integrate individual pattern demo pages (17 pages)
- ADD: Create OperationalServicePatterns.tsx category page
- DELETE: AdvancedPatterns.tsx, PatternsNavigationDemo.tsx
- UPDATE: All pattern navigation to show hierarchical structure

---

### 4. SERVICE ARCHETYPES
**Purpose:** High-level service workflow patterns

**Structure:**
```
/archetypes/overview              - Service Archetypes Overview (NEW)
/archetypes/application           - ApplicationSubmissionPattern (ADD)
/archetypes/eligibility           - EligibilityScreeningPattern (ADD)
/archetypes/renewal               - RenewalPattern (ADD)
/archetypes/correction            - CorrectionResubmissionPattern (ADD)
/archetypes/complaint             - ComplaintEscalationPattern (ADD)
/archetypes/approval              - ApprovalIssuancePattern (ADD)
/archetypes/assisted              - AssistedOfflineOnlinePattern (ADD)
/archetypes/tracking              - HighVolumeStatusTrackingPattern (ADD)
/archetypes/appointment           - AppointmentBookingPattern (ADD)
```

**Actions:**
- CREATE: New top-level "Service Archetypes" section
- ADD: Integrate 9 archetype pattern pages
- UPDATE: Navigation to include Service Archetypes top-level category

---

### 5. REFERENCE SERVICES
**Purpose:** Complete end-to-end service implementations

**Structure:**
```
/reference-service/overview       - ReferenceServiceBlueprint
/reference-service/demo           - CertificateService (entry point)

/reference-service/certificate/   - Certificate Service Complete Flow
  ├── start                       - CertificateStart (ADD)
  ├── eligibility                 - CertificateEligibility (ADD)
  ├── help                        - CertificateHelp (ADD)
  ├── document-guidelines         - CertificateDocumentGuidelines (ADD)
  ├── privacy-policy              - CertificatePrivacyPolicy (ADD)
  
  # Authentication Flow
  ├── sign-in                     - CertificateSignIn (ADD)
  ├── sign-up                     - CertificateSignUp (ADD)
  ├── verify-otp                  - CertificateVerifyOTP (ADD)
  ├── forgot-password             - CertificateForgotPassword (ADD)
  ├── session-timeout             - CertificateSessionTimeout (ADD)
  
  # Application Flow
  ├── user-profile                - CertificateUserProfile (ADD)
  ├── form/personal               - CertificateFormPersonal (ADD)
  ├── form/address                - CertificateFormAddress (ADD)
  ├── form/additional             - CertificateFormAdditional (ADD)
  ├── form/review                 - CertificateFormReview (ADD)
  ├── document-upload             - CertificateDocumentUpload (ADD)
  ├── review-summary              - CertificateReviewSummary (ADD)
  ├── declaration                 - CertificateDeclaration (ADD)
  
  # Payment Flow
  ├── payment-summary             - CertificatePaymentSummary (ADD)
  ├── payment-receipt             - CertificatePaymentReceipt (ADD)
  
  # Post-Submission
  ├── submission-success          - CertificateSubmissionSuccess (ADD)
  ├── status-tracker              - CertificateStatusTracker (ADD)
  ├── notifications               - CertificateNotifications (ADD)
  ├── my-applications             - CertificateMyApplications (ADD)
  
  # Outcomes
  ├── issued                      - CertificateIssued (ADD)
  ├── feedback                    - CertificateFeedback (ADD)
  ├── verification                - CertificateVerification (ADD)
  ├── correction-request          - CertificateCorrectionRequest (ADD)
  ├── rejected                    - CertificateRejected (ADD)
  ├── appeal                      - CertificateAppeal (ADD)
  
  # Officer Views
  ├── officer/dashboard           - CertificateOfficerDashboard (ADD)
  ├── officer/cases               - CertificateOfficerCases (ADD)
  └── officer/review              - CertificateOfficerReview (ADD)
```

**Actions:**
- ADD: Integrate all 44 certificate service pages
- CREATE: Proper navigation structure for certificate service flow
- UPDATE: Reference service overview to link to all demo pages

---

### 6. SYSTEMS
**Purpose:** Cross-cutting system capabilities

**Structure:**
```
/systems/multilingual     - MultilingualGuidance (ADD)
/systems/form-intelligence - FormIntelligenceSystem (moved from patterns)
/systems/state-resilience  - StateResilienceSystem (moved from patterns)
```

**Actions:**
- ADD: MultilingualGuidance.tsx
- MOVE: Form Intelligence and State Resilience to Systems category

---

### 7. RESOURCES
**Purpose:** Developer tools, guides, and implementation resources

**Pages:**
- ✅ `/resources` - ResourcesHub (consolidates Resources, StarterKits)
- ✅ `/resources/getting-started` - InstallationGuide
- ✅ `/resources/starter-kit` - UX4GStarterKit
- ✅ `/resources/component-specs` - ComponentCodeMapping
- ✅ `/resources/figma` - FigmaDesignSystem

**Actions:**
- DELETE: Resources.tsx, StarterKits.tsx, DesignToCode.tsx, FigmaIA.tsx

---

### 8. GOVERNANCE
**Purpose:** Compliance, adoption tracking, and analytics

**Pages:**
- ✅ `/governance` - Governance
- ✅ `/governance/adoption` - Adoption
- ✅ `/governance/conformance` - ConformanceDashboard
- ✅ `/governance/analytics` - ServiceAnalytics

**Actions:**
- DELETE: TelemetryDocs.tsx (consolidated into ServiceAnalytics)

---

### 9. PLATFORM (Package Structure)
**Purpose:** NPM packages and code implementation

**Structure:**
```
/code/
  ├── @ux4g/tokens
  ├── @ux4g/styles
  ├── @ux4g/react-core
  ├── @ux4g/angular-core
  ├── @ux4g/react-patterns
  ├── @ux4g/angular-patterns
  ├── starter-repos/
  │   ├── react-starter/
  │   └── angular-starter/
```

**Actions:**
- KEEP: All package directories as-is
- ADD: Documentation pages linking to code packages

---

## Duplicate Pages to Delete (60+ files)

### Foundations Duplicates (4)
- FoundationsDetailed.tsx
- DesignTokens.tsx
- StylesSystem.tsx
- ThemingTokens.tsx

### Components Duplicates (3)
- CoreComponents.tsx
- ComponentDocTemplate.tsx
- ComponentDocumentation.tsx

### Pattern Duplicates (2)
- AdvancedPatterns.tsx
- PatternsNavigationDemo.tsx

### Resource Duplicates (5)
- Home.tsx (use UnifiedHome)
- Resources.tsx (use ResourcesHub)
- StarterKits.tsx (use UX4GStarterKit)
- DesignToCode.tsx (consolidated into FigmaDesignSystem)
- FigmaIA.tsx (consolidated into FigmaDesignSystem)

### Governance Duplicates (1)
- TelemetryDocs.tsx (consolidated into ServiceAnalytics)

### Old/Obsolete Pages (5)
- CoverPage.tsx
- DocumentationHome.tsx
- CertificateFormPersonalUpdated.tsx (use CertificateFormPersonal)
- CertificateSignInUpdated.tsx (use CertificateSignIn)
- ContentSystemShowcase.tsx

### Service Blueprint Duplicates (2)
- ServiceBlueprint.tsx (use ReferenceServiceBlueprint)
- SectorBlueprints.tsx (consolidated into ReferenceServiceBlueprint)

**Total to Delete: 22 files**
**Total to Integrate: 72 files**

---

## Navigation Structure

### Top Navigation (8 sections)
1. Foundations
2. Components
3. Patterns
4. Service Archetypes (NEW)
5. Systems (NEW)
6. Reference Services
7. Resources
8. Governance

### Breadcrumb Format
```
Home > Patterns > Identity & Access > Sign In Pattern
Home > Reference Services > Certificate Service > Application Form > Personal Details
Home > Service Archetypes > Application Submission
```

---

## Implementation Steps

### Phase 1: Delete Duplicates (22 files)
1. Delete foundation duplicates (4 files)
2. Delete component duplicates (3 files)
3. Delete pattern duplicates (2 files)
4. Delete resource duplicates (5 files)
5. Delete governance duplicates (1 file)
6. Delete old/obsolete pages (5 files)
7. Delete service blueprint duplicates (2 files)

### Phase 2: Integrate Pattern Pages (26 files)
1. Add individual Identity pattern pages (9 pages)
2. Add Consent/Declaration pattern pages (7 pages)
3. Add Payment pattern pages (1 page)
4. Create OperationalServicePatterns category page
5. Update pattern navigation structure

### Phase 3: Integrate Service Archetypes (9 files)
1. Create Service Archetypes overview page
2. Add all 9 archetype pattern pages
3. Update navigation to include Service Archetypes

### Phase 4: Integrate Certificate Service (44 files)
1. Add all certificate service flow pages
2. Create hierarchical route structure
3. Build certificate service navigation

### Phase 5: Create Systems Category (3 files)
1. Add MultilingualGuidance
2. Move Form Intelligence to Systems
3. Move State Resilience to Systems

### Phase 6: Update Navigation
1. Update NavigationHeader with new structure
2. Add Service Archetypes and Systems to top nav
3. Update all mega menus
4. Add breadcrumb component
5. Update all internal links

### Phase 7: Documentation
1. Create IA sitemap
2. Update all documentation references
3. Create migration guide

---

## Benefits

1. **Reduced Complexity**: 143 → ~81 pages (43% reduction)
2. **Clear Hierarchy**: 8-tier structure with logical grouping
3. **Better Discoverability**: All content properly categorized and linked
4. **No Duplication**: Single source of truth for each concept
5. **Scalable**: Easy to add new content to appropriate categories
6. **Developer-Friendly**: Clear separation between documentation and code

---

## Success Metrics

- ✅ All 143 pages accounted for (deleted or integrated)
- ✅ Zero duplicate content
- ✅ All pages accessible via navigation
- ✅ Breadcrumb navigation on every page
- ✅ Clean, hierarchical URL structure
- ✅ Complete sitemap documentation

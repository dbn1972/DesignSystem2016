# UX4G Design System Platform - Existing Pages Navigation Map

## Source of Truth: Existing Figma Project Pages

This document maps the **44 existing pages** in your UX4G project to a logical navigation structure based on the actual content and purpose of each page.

---

## Page Inventory (44 Pages)

### ✅ Home & Landing (3)
1. `DocumentationHome.tsx` - Main landing page ("/")
2. `Home.tsx` - Legacy home page ("/old-home")
3. `CoverPage.tsx` - Cover page ("/cover")

### ✅ Foundations (7)
4. `FoundationsDetailed.tsx` - Main foundations documentation
5. `Foundations.tsx` - Alternate foundations page
6. `DesignTokens.tsx` - Design token system
7. `StylesSystem.tsx` - Typography and styles
8. `ThemingTokens.tsx` - Theming framework
9. `Accessibility.tsx` - Accessibility guidelines
10. `AccessibilityTooling.tsx` - Accessibility testing tools

### ✅ Components (4)
11. `Components.tsx` - Components overview
12. `CoreComponents.tsx` - Core component library (47+)
13. `ComponentDocumentation.tsx` - Component docs
14. `ComponentDocTemplate.tsx` - Component template

### ✅ Patterns - General (3)
15. `Patterns.tsx` - General design patterns overview
16. `AdvancedPatterns.tsx` - Advanced pattern documentation
17. `PatternsNavigationDemo.tsx` - Navigation demo

### ✅ Patterns - Service Patterns (5)
18. `ServicePatternLibraries.tsx` - Service pattern overview
19. `ServiceBlueprint.tsx` - Service blueprints
20. `SectorBlueprints.tsx` - Sector-specific blueprints
21. `MultilingualGuidance.tsx` - Multilingual patterns
22. `IdentityAccessPatterns.tsx` - Identity/auth patterns (NEW)

### ✅ Service Archetypes (8)
23. `ApplicationSubmissionPattern.tsx` - Application pattern
24. `EligibilityScreeningPattern.tsx` - Eligibility pattern
25. `RenewalPattern.tsx` - Renewal pattern
26. `CorrectionResubmissionPattern.tsx` - Correction pattern
27. `ComplaintEscalationPattern.tsx` - Complaint pattern
28. `ApprovalIssuancePattern.tsx` - Approval pattern
29. `AssistedOfflineOnlinePattern.tsx` - Assisted pattern
30. `HighVolumeStatusTrackingPattern.tsx` - Tracking pattern

### ✅ Identity Flows (3)
31. `IdentitySignUp.tsx` - Sign up flow
32. `IdentitySignIn.tsx` - Sign in flow
33. `IdentityMobileOTP.tsx` - Mobile OTP verification

### ✅ Resources (6)
34. `Resources.tsx` - Resources hub
35. `StarterKits.tsx` - Starter kits
36. `DesignToCode.tsx` - Design-to-code workflow
37. `FigmaDesignSystem.tsx` - Figma documentation
38. `FigmaIA.tsx` - Information architecture
39. `InstallationGuide.tsx` - Installation guide

### ✅ Governance (5)
40. `Governance.tsx` - Governance framework
41. `Adoption.tsx` - Adoption tracking
42. `ConformanceDashboard.tsx` - Conformance reporting
43. `ServiceAnalytics.tsx` - Service analytics
44. `TelemetryDocs.tsx` - Telemetry documentation

### ✅ Utility (1)
45. `NotFound.tsx` - 404 page

---

## Proposed Navigation Structure (Based on Existing Pages)

### 🎨 FOUNDATIONS (Top Level)
**Landing Page:** `/foundations-detailed`

**Submenu:**
- Foundations Overview → `/foundations-detailed`
- Design Tokens → `/design-tokens`
- Typography System → `/styles-system`
- Theming & Tokens → `/theming-tokens`
- Accessibility → `/accessibility`
- Accessibility Tooling → `/accessibility-tooling`

**Note:** `Foundations.tsx` exists but appears to be legacy/alternate. Primary is `FoundationsDetailed.tsx`.

---

### 🧩 COMPONENTS (Top Level)
**Landing Page:** `/components`

**Submenu:**
- Components Overview → `/components`
- Core Components → `/core-components`
- Component Documentation → `/component-docs`

**Note:** `ComponentDocTemplate.tsx` is internal/utility, not for navigation.

---

### 📐 PATTERNS (Top Level)
**Landing Page:** `/patterns`

This is the most complex section with multiple levels:

#### Level 1: Patterns Overview
- General Patterns → `/patterns`

#### Level 2: Pattern Types
**Advanced Patterns:**
- Advanced Patterns → `/advanced-patterns`

**Service Pattern Libraries:**
- Service Pattern Libraries Overview → `/service-pattern-libraries`
- Service Blueprints → `/service-blueprint`
- Sector-Specific Blueprints → `/sector-blueprints`
- Multilingual Guidance → `/multilingual`

#### Level 3: Service Archetypes (9 patterns)
From `ServicePatternLibraries.tsx`, these are the 8 core archetypes + 1 new:

1. Application Submission → `/application-submission-pattern`
2. Eligibility & Screening → `/eligibility-screening-pattern`
3. Renewal → `/renewal-pattern`
4. Correction & Resubmission → `/correction-resubmission-pattern`
5. Complaint & Escalation → `/complaint-escalation-pattern`
6. Approval & Issuance → `/approval-issuance-pattern`
7. Assisted Offline-to-Online → `/assisted-offline-online-pattern`
8. High-Volume Status Tracking → `/high-volume-status-tracking-pattern`
9. **Identity & Access Patterns** → `/identity-access-patterns` (NEW)
   - Sign Up → `/identity-signup`
   - Sign In → `/identity-signin`
   - Mobile OTP → `/identity-mobile-otp`

**Note:** `PatternsNavigationDemo.tsx` is internal demo, not for main navigation.

---

### 📚 RESOURCES (Top Level)
**Landing Page:** `/resources`

**Submenu:**
- Resources Overview → `/resources`
- Starter Kits → `/starter-kits`
- Design to Code → `/design-to-code`
- Installation Guide → `/installation`
- Figma Design System → `/figma-design-system`
- Figma IA Guide → `/figma-ia`

**Note:** Accessibility Tooling could be linked here too (cross-reference from Foundations).

---

### 🏛️ GOVERNANCE (Top Level)
**Landing Page:** `/governance`

**Submenu:**
- Governance Overview → `/governance`
- Adoption Tracking → `/adoption`
- Conformance Dashboard → `/conformance-dashboard`
- Service Analytics → `/service-analytics`
- Telemetry Documentation → `/telemetry-docs`

---

## Active State Logic

### Parent-Child Relationships

**When viewing a child page, the parent section should remain active:**

```typescript
// Example: When on /design-tokens, "Foundations" top menu should be active
// Example: When on /application-submission-pattern, "Patterns" top menu should be active
// Example: When on /identity-signup, "Patterns" top menu should be active

const sectionMap = {
  foundations: [
    "/foundations",
    "/foundations-detailed",
    "/design-tokens",
    "/styles-system",
    "/theming-tokens",
    "/accessibility",
    "/accessibility-tooling"
  ],
  components: [
    "/components",
    "/core-components",
    "/component-docs"
  ],
  patterns: [
    "/patterns",
    "/advanced-patterns",
    "/service-pattern-libraries",
    "/service-blueprint",
    "/sector-blueprints",
    "/multilingual",
    "/patterns-navigation-demo",
    "/application-submission-pattern",
    "/eligibility-screening-pattern",
    "/renewal-pattern",
    "/correction-resubmission-pattern",
    "/complaint-escalation-pattern",
    "/approval-issuance-pattern",
    "/assisted-offline-online-pattern",
    "/high-volume-status-tracking-pattern",
    "/identity-access-patterns",
    "/identity-signup",
    "/identity-signin",
    "/identity-mobile-otp"
  ],
  resources: [
    "/resources",
    "/starter-kits",
    "/design-to-code",
    "/installation",
    "/figma-design-system",
    "/figma-ia"
  ],
  governance: [
    "/governance",
    "/adoption",
    "/conformance-dashboard",
    "/service-analytics",
    "/telemetry-docs"
  ]
};
```

---

## Navigation Hierarchy Visualization

```
UX4G Design System Platform
│
├── 🏠 Home (/)
│
├── 🎨 Foundations (/foundations-detailed)
│   ├── Foundations Overview
│   ├── Design Tokens
│   ├── Typography System
│   ├── Theming & Tokens
│   ├── Accessibility
│   └── Accessibility Tooling
│
├── 🧩 Components (/components)
│   ├── Components Overview
│   ├── Core Components
│   └── Component Documentation
│
├── 📐 Patterns (/patterns)
│   ├── General Patterns Overview
│   ├── Advanced Patterns
│   │
│   ├── Service Pattern Libraries
│   │   ├── Overview
│   │   ├── Service Blueprints
│   │   ├── Sector Blueprints
│   │   └── Multilingual Guidance
│   │
│   └── Service Archetypes
│       ├── 1. Application Submission
│       ├── 2. Eligibility & Screening
│       ├── 3. Renewal
│       ├── 4. Correction & Resubmission
│       ├── 5. Complaint & Escalation
│       ├── 6. Approval & Issuance
│       ├── 7. Assisted Offline-to-Online
│       ├── 8. High-Volume Status Tracking
│       └── 9. Identity & Access Patterns
│           ├── Overview
│           ├── Sign Up
│           ├── Sign In
│           └── Mobile OTP
│
├── 📚 Resources (/resources)
│   ├── Resources Overview
│   ├── Starter Kits
│   ├── Design to Code
│   ├── Installation Guide
│   ├── Figma Design System
│   └── Figma IA Guide
│
└── 🏛️ Governance (/governance)
    ├── Governance Overview
    ├── Adoption Tracking
    ├── Conformance Dashboard
    ├── Service Analytics
    └── Telemetry Documentation
```

---

## Evidence from Existing Pages

### From `DocumentationHome.tsx`:
The home page references these primary sections:
- Foundations → `/foundations-detailed`
- Components → `/core-components`
- Patterns → `/patterns`
- Governance → `/governance`
- Resources (implied)

**Stats displayed:**
- 47 Components
- 8 Service Patterns (now 9 with Identity)
- WCAG AA
- 47 Departments

### From `ServicePatternLibraries.tsx`:
Lists 8 service archetypes with navigation:
1. Application
2. Eligibility
3. Renewal
4. Correction
5. Complaint
6. Approval
7. Assisted
8. Tracking

**Heading:** "Full Service Pattern Libraries"
**Subtitle:** "Structured, repeatable service archetypes"

### From `FoundationsDetailed.tsx`:
Main foundations page covering:
- Design Principles
- Brand Character
- Typography
- Color
- Spacing
- Layout Grid
- Border Radius
- Elevation
- Iconography
- Interaction Principles
- Focus Styles
- Responsive Behavior

---

## Recommended Navigation Structure

Based on the existing pages, here's the recommended navigation:

### Desktop Navigation (Header)
```
[Logo] UX4G Design System Platform

[Foundations ▼] [Components ▼] [Patterns ▼] [Resources ▼] [Governance ▼]

Active state: 4px blue bottom border (#000080)
Hover: Gray background
```

### Mega Menu Example - Patterns
```
┌─────────────────────────────────────────────────────────┐
│ Overview              Service Patterns          Archetypes│
│ • Patterns Overview   • Service Libraries       1. Application│
│ • Advanced Patterns   • Service Blueprints      2. Eligibility│
│                       • Sector Blueprints       3. Renewal   │
│                       • Multilingual Guidance   4. Correction│
│                                                 5. Complaint │
│                                                 6. Approval  │
│                                                 7. Assisted  │
│                                                 8. Tracking  │
│                                                 9. Identity  │
└─────────────────────────────────────────────────────────┘
```

### Mobile Navigation (Hamburger)
```
☰ Menu

▼ Foundations (expanded)
  → Foundations Overview
  → Design Tokens
  → Typography System
  → Theming & Tokens
  → Accessibility
  → Accessibility Tooling

▶ Components (collapsed)

▼ Patterns (expanded)
  → Patterns Overview
  → Advanced Patterns
  
  Pattern Systems
  → Service Pattern Libraries
  → Service Blueprints
  → Sector Blueprints
  → Multilingual Guidance
  
  ▼ Service Archetypes (9)
    → 1. Application Submission
    → 2. Eligibility & Screening
    ... (all 9)

▶ Resources (collapsed)

▶ Governance (collapsed)
```

---

## Key Rules for Navigation Implementation

1. **Parent section stays active when child is open**
   - Viewing `/design-tokens` → "Foundations" is active
   - Viewing `/identity-signup` → "Patterns" is active

2. **Breadcrumbs show hierarchy**
   - Home > Patterns > Service Archetypes > Identity & Access Patterns > Sign Up

3. **Mega menus show on hover (desktop)**
   - All submenu items visible at once
   - No dropdowns within dropdowns

4. **Mobile uses collapsible sections**
   - Accordion-style expansion
   - Service Archetypes nested within Patterns

5. **Active states are visually clear**
   - 4px border for top-level
   - Blue background for submenu items
   - Left border accent for archetype items

6. **Government-grade styling**
   - Tricolor band (orange-white-green)
   - Navy blue (#000080) for active states
   - 2px borders (strong, clear)
   - No shadows or modern effects

---

## Implementation Checklist

- [x] Map all 44 existing pages
- [x] Define 5 top-level sections
- [x] Define submenu structure
- [x] Define active state logic
- [ ] Update NavigationHeader component
- [ ] Test all links work correctly
- [ ] Test active states on all pages
- [ ] Test parent stays active when child is open
- [ ] Test mobile navigation
- [ ] Test keyboard accessibility

---

**Total Pages:** 44 (excluding NotFound)  
**Top-Level Sections:** 5 (Foundations, Components, Patterns, Resources, Governance)  
**Service Archetypes:** 9 (8 original + 1 Identity)  
**Identity Flows:** 3 (Sign Up, Sign In, Mobile OTP)

This navigation structure respects the existing Figma project pages and organizes them logically without creating new structures unnecessarily.

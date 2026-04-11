# UX4G Design System Platform - Complete Navigation Map

## Overview
This document maps all 44 pages in the UX4G Design System Platform to their navigation locations, ensuring consistent IA and accessible government-grade navigation.

---

## Primary Navigation Sections

### 🎨 Foundations
**Top Menu:** "Foundations" → `/foundations-detailed`  
**Section Active States:** All routes starting with `/foundations`, `/design-tokens`, `/styles-system`, `/theming-tokens`, `/accessibility`

#### Mega Menu Structure:
- **Design Foundations**
  - Foundations Overview → `/foundations-detailed`
  - Design Tokens → `/design-tokens`
  - Typography System → `/styles-system`
  
- **Theming**
  - Theming and Tokens → `/theming-tokens`
  
- **Accessibility**
  - Accessibility Guidelines → `/accessibility`
  - Accessibility Tooling → `/accessibility-tooling`

#### All Foundations Pages (7):
1. `/foundations-detailed` - Main foundations documentation
2. `/foundations` - Legacy/alternate foundations page
3. `/design-tokens` - Design token system
4. `/styles-system` - Typography and text styles
5. `/theming-tokens` - Theme customization
6. `/accessibility` - WCAG 2.1 AA guidelines
7. `/accessibility-tooling` - Accessibility testing tools

---

### 🧩 Components
**Top Menu:** "Components" → `/components`  
**Section Active States:** All routes starting with `/components`, `/core-components`, `/component-docs`, `/component-template`

#### Mega Menu Structure:
- **Component Library**
  - Components Overview → `/components`
  - Core Components → `/core-components`
  - Component Documentation → `/component-docs`

#### All Components Pages (4):
1. `/components` - Component library overview
2. `/core-components` - 47+ production components
3. `/component-docs` - Detailed component documentation
4. `/component-template` - Internal component template (not in menu)

---

### 📐 Patterns
**Top Menu:** "Patterns" → `/patterns`  
**Section Active States:** All routes starting with `/patterns`, `/service-`, `/application-`, `/eligibility-`, `/renewal-`, `/correction-`, `/complaint-`, `/approval-`, `/assisted-`, `/high-volume-`, `/identity-`, `/advanced-`, `/sector-`, `/multilingual`

#### Mega Menu Structure:
- **Overview**
  - Patterns Overview → `/patterns`

- **Pattern Systems**
  - Advanced Patterns → `/advanced-patterns`
  - Service Pattern Libraries → `/service-pattern-libraries`
  - Reference Blueprints → `/service-blueprint`

- **Blueprint Guidance**
  - Sector-Specific Blueprints → `/sector-blueprints`
  - Multilingual Guidance → `/multilingual`

- **Service Archetypes (9 Patterns)**
  1. Application Submission → `/application-submission-pattern`
  2. Eligibility and Screening → `/eligibility-screening-pattern`
  3. Renewal → `/renewal-pattern`
  4. Correction and Resubmission → `/correction-resubmission-pattern`
  5. Complaint and Escalation → `/complaint-escalation-pattern`
  6. Approval and Issuance → `/approval-issuance-pattern`
  7. Assisted Offline-to-Online → `/assisted-offline-online-pattern`
  8. High-Volume Status Tracking → `/high-volume-status-tracking-pattern`
  9. **Identity and Access Patterns** → `/identity-access-patterns`
     - Sign Up → `/identity-signup`
     - Sign In → `/identity-signin`
     - Mobile OTP Verification → `/identity-mobile-otp`
     - Email OTP Verification → `/identity-email-otp` (planned)
     - Forgot Password/Reset → `/identity-forgot-password` (planned)
     - Account Recovery → `/identity-account-recovery` (planned)
     - Aadhaar Authentication → `/identity-aadhaar` (planned)
     - Session Timeout → `/identity-session-timeout` (planned)
     - Error & Lockout → `/identity-error-lockout` (planned)

#### All Patterns Pages (17):
1. `/patterns` - Patterns overview
2. `/patterns-navigation-demo` - Navigation demo (internal)
3. `/advanced-patterns` - Advanced pattern documentation
4. `/service-pattern-libraries` - Service pattern overview
5. `/service-blueprint` - Reference blueprints
6. `/sector-blueprints` - Sector-specific patterns
7. `/multilingual` - Multilingual guidance
8. `/application-submission-pattern` - Application pattern
9. `/eligibility-screening-pattern` - Eligibility pattern
10. `/renewal-pattern` - Renewal pattern
11. `/correction-resubmission-pattern` - Correction pattern
12. `/complaint-escalation-pattern` - Complaint pattern
13. `/approval-issuance-pattern` - Approval pattern
14. `/assisted-offline-online-pattern` - Assisted pattern
15. `/high-volume-status-tracking-pattern` - Status tracking pattern
16. `/identity-access-patterns` - Identity patterns overview
17. `/identity-signup` - Sign up flow
18. `/identity-signin` - Sign in flow
19. `/identity-mobile-otp` - Mobile OTP verification

---

### 📚 Resources
**Top Menu:** "Resources" → `/resources`  
**Section Active States:** All routes starting with `/resources`, `/starter-kits`, `/design-to-code`, `/figma`, `/installation`

#### Mega Menu Structure:
- **Developer Resources**
  - Starter Kits → `/starter-kits`
  - Design to Code → `/design-to-code`
  - Figma Design System → `/figma-design-system`

- **Documentation**
  - Resources Overview → `/resources`
  - Figma IA Guide → `/figma-ia`

- **Tools**
  - Accessibility Tooling → `/accessibility-tooling`

#### All Resources Pages (6):
1. `/resources` - Resources hub
2. `/starter-kits` - Downloadable starter kits
3. `/design-to-code` - Design-to-code workflow
4. `/figma-design-system` - Figma system documentation
5. `/figma-ia` - Figma information architecture
6. `/installation` - Installation guide (not in menu currently)

---

### 🏛️ Governance
**Top Menu:** "Governance" → `/governance`  
**Section Active States:** All routes starting with `/governance`, `/adoption`, `/conformance`, `/service-analytics`, `/telemetry`

#### Mega Menu Structure:
- **Governance Framework**
  - Governance Overview → `/governance`
  - Adoption Tracking → `/adoption`

- **Compliance & Reporting**
  - Conformance Dashboard → `/conformance-dashboard`
  - Service Analytics → `/service-analytics`
  - Telemetry Documentation → `/telemetry-docs`

#### All Governance Pages (5):
1. `/governance` - Governance framework
2. `/adoption` - Department adoption tracking (47 departments)
3. `/conformance-dashboard` - Conformance reporting (89% rate)
4. `/service-analytics` - Service analytics dashboard
5. `/telemetry-docs` - Telemetry documentation

---

## Special Pages (Not in Main Navigation)

### Home & Landing
- `/` - Main documentation home (DocumentationHome.tsx)
- `/old-home` - Legacy home page
- `/cover` - Cover page

### Utility
- `/*` - 404 Not Found page

---

## Navigation Features

### ✅ Active State Detection
- **Top-level sections:** 4px blue border bottom (`border-[#000080]`)
- **Mega menu items:** Blue background on hover
- **Archetype menu items:** Blue background + left border when active
- **Mobile menu:** Blue background for active section and item

### ✅ Accessibility
- **Keyboard navigation:** Tab through all interactive elements
- **Focus indicators:** 2px outline with 2px offset
- **ARIA labels:** Proper aria-current, aria-expanded states
- **Screen reader support:** Descriptive link text, no icon-only buttons
- **Mobile menu:** Expandable sections with chevron rotation indicator

### ✅ Government-Grade Styling
- **Tricolor band:** Orange-white-green gradient (1px height)
- **Navy blue primary:** #000080 for active states and CTAs
- **2px borders:** Strong, clear visual hierarchy
- **Gray backgrounds:** Gray-50 for mega menus, white for dropdowns
- **Official branding:** UX4G logo + "Government of India" subtitle

### ✅ Mobile Responsiveness
- **Breakpoint:** md (768px)
- **Mobile menu:** Full-screen overlay with hamburger toggle
- **Collapsible sections:** All 5 primary sections expand/collapse
- **Service Archetypes:** Nested collapsible group (9 patterns)
- **Scroll:** Max height 600px with overflow-y-auto

---

## Route-to-Menu Mapping (All 44 Pages)

| Route | Menu Location | Section |
|-------|--------------|---------|
| `/` | Home (Logo) | - |
| `/foundations-detailed` | Foundations → Design Foundations → Foundations Overview | Foundations |
| `/foundations` | (Legacy - not in menu) | Foundations |
| `/design-tokens` | Foundations → Design Foundations → Design Tokens | Foundations |
| `/styles-system` | Foundations → Design Foundations → Typography System | Foundations |
| `/theming-tokens` | Foundations → Theming → Theming and Tokens | Foundations |
| `/accessibility` | Foundations → Accessibility → Accessibility Guidelines | Foundations |
| `/accessibility-tooling` | Foundations → Accessibility → Accessibility Tooling | Foundations |
| `/components` | Components → Component Library → Components Overview | Components |
| `/core-components` | Components → Component Library → Core Components | Components |
| `/component-docs` | Components → Component Library → Component Documentation | Components |
| `/component-template` | (Internal - not in menu) | Components |
| `/patterns` | Patterns → Overview → Patterns Overview | Patterns |
| `/advanced-patterns` | Patterns → Pattern Systems → Advanced Patterns | Patterns |
| `/service-pattern-libraries` | Patterns → Pattern Systems → Service Pattern Libraries | Patterns |
| `/service-blueprint` | Patterns → Pattern Systems → Reference Blueprints | Patterns |
| `/sector-blueprints` | Patterns → Blueprint Guidance → Sector-Specific Blueprints | Patterns |
| `/multilingual` | Patterns → Blueprint Guidance → Multilingual Guidance | Patterns |
| `/application-submission-pattern` | Patterns → Service Archetypes → #1 | Patterns |
| `/eligibility-screening-pattern` | Patterns → Service Archetypes → #2 | Patterns |
| `/renewal-pattern` | Patterns → Service Archetypes → #3 | Patterns |
| `/correction-resubmission-pattern` | Patterns → Service Archetypes → #4 | Patterns |
| `/complaint-escalation-pattern` | Patterns → Service Archetypes → #5 | Patterns |
| `/approval-issuance-pattern` | Patterns → Service Archetypes → #6 | Patterns |
| `/assisted-offline-online-pattern` | Patterns → Service Archetypes → #7 | Patterns |
| `/high-volume-status-tracking-pattern` | Patterns → Service Archetypes → #8 | Patterns |
| `/identity-access-patterns` | Patterns → Service Archetypes → #9 | Patterns |
| `/identity-signup` | (Child of Identity Patterns) | Patterns |
| `/identity-signin` | (Child of Identity Patterns) | Patterns |
| `/identity-mobile-otp` | (Child of Identity Patterns) | Patterns |
| `/resources` | Resources → Documentation → Resources Overview | Resources |
| `/starter-kits` | Resources → Developer Resources → Starter Kits | Resources |
| `/design-to-code` | Resources → Developer Resources → Design to Code | Resources |
| `/figma-design-system` | Resources → Developer Resources → Figma Design System | Resources |
| `/figma-ia` | Resources → Documentation → Figma IA Guide | Resources |
| `/installation` | (Not in menu currently) | Resources |
| `/governance` | Governance → Governance Framework → Governance Overview | Governance |
| `/adoption` | Governance → Governance Framework → Adoption Tracking | Governance |
| `/conformance-dashboard` | Governance → Compliance & Reporting → Conformance Dashboard | Governance |
| `/service-analytics` | Governance → Compliance & Reporting → Service Analytics | Governance |
| `/telemetry-docs` | Governance → Compliance & Reporting → Telemetry Documentation | Governance |
| `/patterns-navigation-demo` | (Internal demo - not in menu) | Patterns |
| `/old-home` | (Legacy - not in menu) | - |
| `/cover` | (Special - not in menu) | - |

---

## Implementation Status

### ✅ Completed
- [x] All 44 pages have routes defined
- [x] Top navigation with 5 primary sections
- [x] Mega menus for all sections (Foundations, Components, Patterns, Resources, Governance)
- [x] Service Archetypes submenu with 9 patterns
- [x] Identity and Access Patterns with 3 interactive flows
- [x] Active state detection for all sections and pages
- [x] Mobile navigation with collapsible sections
- [x] Keyboard accessibility
- [x] Government-grade styling (tricolor, navy blue, 2px borders)
- [x] Consistent link structure across all menus

### 📋 Recommendations
1. Add breadcrumb navigation to all pattern pages
2. Add "Installation Guide" link to Resources mega menu
3. Consider deprecating `/old-home` and `/cover` if not needed
4. Add aria-current="page" to active links
5. Implement skip-to-content link for screen readers
6. Add keyboard shortcuts documentation (? key for help)

---

## Testing Checklist

### Desktop Navigation
- [ ] Hover on each top nav item shows correct mega menu
- [ ] Click on each mega menu link navigates to correct page
- [ ] Active section shows blue bottom border
- [ ] Active archetype shows blue background + left border
- [ ] All 9 service archetypes are linked
- [ ] Identity patterns show as active when on identity-* routes

### Mobile Navigation
- [ ] Hamburger icon toggles menu
- [ ] All 5 sections expand/collapse
- [ ] Service Archetypes collapse/expand within Patterns
- [ ] Clicking link closes mobile menu and navigates
- [ ] Active page shows blue background
- [ ] Scroll works for long sections

### Accessibility
- [ ] Tab key navigates through all interactive elements
- [ ] Enter key activates links
- [ ] Focus indicators visible (2px outline)
- [ ] Screen reader announces section names
- [ ] Mobile menu expanded state announced
- [ ] No keyboard traps

---

**Last Updated:** April 9, 2026  
**Total Pages:** 44  
**Total Routes:** 44 (including catch-all)  
**Navigation Items:** 31 unique menu links  
**Service Archetypes:** 9 patterns  
**Identity Flows:** 3 implemented (6 planned)

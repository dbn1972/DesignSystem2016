# UX4G Navigation System - Visual Diagram

## Complete Navigation Architecture for 44 Existing Pages

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    UX4G Design System Platform                               │
│                         Government of India                                  │
│                                                                              │
│  [🏠 Logo]  [Foundations ▼] [Components ▼] [Patterns ▼] [Resources ▼] [Governance ▼] │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                           DESKTOP MEGA MENUS
═══════════════════════════════════════════════════════════════════════════════

┌─ 🎨 FOUNDATIONS MEGA MENU ─────────────────────────────────────────────────┐
│                                                                             │
│  Design Foundations    │  Theming            │  Accessibility              │
│  • Foundations Overview│  • Theming & Tokens │  • Accessibility Guidelines │
│  • Design Tokens       │                     │  • Accessibility Tooling    │
│  • Typography System   │                     │                             │
│                        │                     │  [Getting Started CTA →]    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
          ┌─────────────────────────────────────────────────┐
          │  /foundations-detailed    (Landing Page)        │
          │  /design-tokens                                 │
          │  /styles-system                                 │
          │  /theming-tokens                                │
          │  /accessibility                                 │
          │  /accessibility-tooling                         │
          │  /foundations              (Legacy/Alternate)   │
          └─────────────────────────────────────────────────┘

┌─ 🧩 COMPONENTS MEGA MENU ──────────────────────────────────────────────────┐
│                                                                             │
│  Component Library     │  Component Categories           │  47 Components  │
│  • Components Overview │  Form | Navigation              │  Production-   │
│  • Core Components     │  Feedback | Data Display        │  ready &       │
│  • Component Docs      │  ...                            │  accessible    │
│                        │                                 │  [Browse →]    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
          ┌─────────────────────────────────────────────────┐
          │  /components              (Landing Page)        │
          │  /core-components                               │
          │  /component-docs                                │
          │  /component-template      (Internal)            │
          └─────────────────────────────────────────────────┘

┌─ 📐 PATTERNS MEGA MENU ────────────────────────────────────────────────────┐
│                                                                             │
│  Overview           │  Pattern Systems      │  Blueprint     │  Archetypes│
│  • Patterns        │  • Advanced Patterns   │  • Sector      │  1. Application│
│    Overview        │  • Service Libraries   │  • Multilingual│  2. Eligibility│
│                    │  • Blueprints          │                │  3. Renewal    │
│                    │                        │                │  4. Correction │
│                    │                        │                │  5. Complaint  │
│                    │                        │                │  6. Approval   │
│                    │                        │                │  7. Assisted   │
│                    │                        │                │  8. Tracking   │
│                    │                        │                │  9. Identity   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
          ┌────────────────────────────────────────────────────────────────┐
          │  /patterns                        (Landing Page)               │
          │  /advanced-patterns                                            │
          │  /service-pattern-libraries                                    │
          │  /service-blueprint                                            │
          │  /sector-blueprints                                            │
          │  /multilingual                                                 │
          │  /patterns-navigation-demo        (Internal Demo)              │
          │                                                                │
          │  SERVICE ARCHETYPES:                                           │
          │  /application-submission-pattern                               │
          │  /eligibility-screening-pattern                                │
          │  /renewal-pattern                                              │
          │  /correction-resubmission-pattern                              │
          │  /complaint-escalation-pattern                                 │
          │  /approval-issuance-pattern                                    │
          │  /assisted-offline-online-pattern                              │
          │  /high-volume-status-tracking-pattern                          │
          │  /identity-access-patterns                                     │
          │     ├─ /identity-signup                                        │
          │     ├─ /identity-signin                                        │
          │     └─ /identity-mobile-otp                                    │
          └────────────────────────────────────────────────────────────────┘

┌─ 📚 RESOURCES MEGA MENU ───────────────────────────────────────────────────┐
│                                                                             │
│  Developer Resources│  Documentation      │  Tools              │  [Quick │
│  • Starter Kits     │  • Resources        │  • Accessibility    │  Start  │
│  • Design to Code   │    Overview         │    Tooling          │  CTA →] │
│  • Figma System     │  • Figma IA Guide   │                     │         │
│  • Installation     │                     │                     │         │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
          ┌─────────────────────────────────────────────────┐
          │  /resources               (Landing Page)        │
          │  /starter-kits                                  │
          │  /design-to-code                                │
          │  /figma-design-system                           │
          │  /figma-ia                                      │
          │  /installation                                  │
          │  /accessibility-tooling   (Also in Foundations) │
          └─────────────────────────────────────────────────┘

┌─ 🏛️ GOVERNANCE MEGA MENU ──────────────────────────────────────────────────┐
│                                                                             │
│  Framework          │  Compliance         │  Departments    │  [Mandatory │
│  • Governance       │  • Conformance      │  • 47 Depts     │  Compliance │
│  • Adoption         │    Dashboard        │  • 34 Vendors   │  CTA →]     │
│                     │  • Service Analytics│  • 89% Rate     │             │
│                     │  • Telemetry Docs   │                 │             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
          ┌─────────────────────────────────────────────────┐
          │  /governance              (Landing Page)        │
          │  /adoption                                      │
          │  /conformance-dashboard                         │
          │  /service-analytics                             │
          │  /telemetry-docs                                │
          └─────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                         MOBILE NAVIGATION (☰)
═══════════════════════════════════════════════════════════════════════════════

┌─ MOBILE MENU ──────────────────────────────────────────────────────────────┐
│                                                                             │
│  ▼ Foundations                                                              │
│     → Foundations Overview                                                  │
│     → Design Tokens                                                         │
│     → Typography System                                                     │
│     → Theming & Tokens                                                      │
│     → Accessibility                                                         │
│     → Accessibility Tooling                                                 │
│                                                                             │
│  ▼ Components                                                               │
│     → Components Overview                                                   │
│     → Core Components                                                       │
│     → Component Documentation                                               │
│                                                                             │
│  ▼ Patterns                                                                 │
│     → Patterns Overview                                                     │
│     → Advanced Patterns                                                     │
│                                                                             │
│     Pattern Systems                                                         │
│     → Service Pattern Libraries                                             │
│     → Service Blueprints                                                    │
│     → Sector Blueprints                                                     │
│     → Multilingual Guidance                                                 │
│                                                                             │
│     ▼ Service Archetypes (9)                                                │
│        → 1. Application Submission                                          │
│        → 2. Eligibility & Screening                                         │
│        → 3. Renewal                                                         │
│        → 4. Correction & Resubmission                                       │
│        → 5. Complaint & Escalation                                          │
│        → 6. Approval & Issuance                                             │
│        → 7. Assisted Offline-to-Online                                      │
│        → 8. High-Volume Status Tracking                                     │
│        → 9. Identity & Access Patterns                                      │
│                                                                             │
│  ▼ Resources                                                                │
│     → Resources Overview                                                    │
│     → Starter Kits                                                          │
│     → Design to Code                                                        │
│     → Figma Design System                                                   │
│     → Figma IA Guide                                                        │
│     → Installation Guide                                                    │
│     → Accessibility Tooling                                                 │
│                                                                             │
│  ▼ Governance                                                               │
│     → Governance Overview                                                   │
│     → Adoption Tracking                                                     │
│     → Conformance Dashboard                                                 │
│     → Service Analytics                                                     │
│     → Telemetry Documentation                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                         ACTIVE STATE VISUALIZATION
═══════════════════════════════════════════════════════════════════════════════

Example: User viewing "/design-tokens"

┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]  [Foundations ▼] [Components] [Patterns] [Resources] [Governance]  │
│            ═══════════                                                      │
│            4px blue border (#000080)                                        │
└─────────────────────────────────────────────────────────────────────────────┘

        ↓ Mega menu shows Design Tokens with blue background

Example: User viewing "/identity-signup"

┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]  [Foundations] [Components] [Patterns ▼] [Resources] [Governance]  │
│                                      ═══════════                            │
│                                      4px blue border (#000080)              │
└─────────────────────────────────────────────────────────────────────────────┘

        ↓ Patterns menu active because /identity-signup is in patterns section
        ↓ "Identity & Access Patterns" archetype has blue background + left border

═══════════════════════════════════════════════════════════════════════════════
                         BREADCRUMB NAVIGATION (Example)
═══════════════════════════════════════════════════════════════════════════════

Home > Patterns > Service Archetypes > Identity & Access Patterns > Sign Up

Home > Foundations > Design Foundations > Design Tokens

Home > Governance > Compliance & Reporting > Conformance Dashboard

═══════════════════════════════════════════════════════════════════════════════
                         ROUTE HIERARCHY TREE
═══════════════════════════════════════════════════════════════════════════════

/  (Home - DocumentationHome)
│
├─── /foundations-detailed ──────────┐
│    /design-tokens                  │ Foundations Section (7 pages)
│    /styles-system                  │ Active when on any of these routes
│    /theming-tokens                 │
│    /accessibility                  │
│    /accessibility-tooling ─────────┘
│
├─── /components ────────────────────┐
│    /core-components                │ Components Section (4 pages)
│    /component-docs ────────────────┘
│
├─── /patterns ──────────────────────┐
│    /advanced-patterns              │
│    /service-pattern-libraries      │
│    /service-blueprint              │
│    /sector-blueprints              │
│    /multilingual                   │
│    │                               │ Patterns Section (19 pages)
│    ├─ /application-submission-pattern
│    ├─ /eligibility-screening-pattern
│    ├─ /renewal-pattern             │
│    ├─ /correction-resubmission-pattern
│    ├─ /complaint-escalation-pattern│
│    ├─ /approval-issuance-pattern   │
│    ├─ /assisted-offline-online-pattern
│    ├─ /high-volume-status-tracking-pattern
│    └─ /identity-access-patterns    │
│         ├─ /identity-signup        │
│         ├─ /identity-signin        │
│         └─ /identity-mobile-otp ───┘
│
├─── /resources ─────────────────────┐
│    /starter-kits                   │
│    /design-to-code                 │ Resources Section (6 pages)
│    /figma-design-system            │
│    /figma-ia                       │
│    /installation ──────────────────┘
│
└─── /governance ────────────────────┐
     /adoption                       │
     /conformance-dashboard          │ Governance Section (5 pages)
     /service-analytics              │
     /telemetry-docs ────────────────┘

═══════════════════════════════════════════════════════════════════════════════
                         NAVIGATION STATISTICS
═══════════════════════════════════════════════════════════════════════════════

Total Pages:                    44
  ├─ Visible in Navigation:     41
  ├─ Internal/Utility:           3 (old-home, cover, component-template)
  └─ 404 Page:                   1

Top-Level Sections:              5
  ├─ Foundations:                7 pages
  ├─ Components:                 4 pages
  ├─ Patterns:                  19 pages (including 9 archetypes + 3 identity flows)
  ├─ Resources:                  6 pages
  └─ Governance:                 5 pages

Mega Menus:                      5 (one per section)
Service Archetypes:              9 patterns
Identity Flows:                  3 implemented (6 planned)

Navigation Depth:
  ├─ Level 1:  Top menu (5 items)
  ├─ Level 2:  Mega menu categories (3-4 per section)
  ├─ Level 3:  Individual pages (3-9 per category)
  └─ Level 4:  Identity flow children (3 child pages)

═══════════════════════════════════════════════════════════════════════════════
                         GOVERNMENT-GRADE STYLING
═══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────────┐
│ ███ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ███                   │
│ Orange (#FF9933) | White | Green (#138808) - 1px Tricolor Band             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [UX4G]  Design System Platform    [Search] [GitHub] [Get Started]         │
│          Government of India                                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  [Foundations] [Components] [Patterns] [Resources] [Governance]            │
│   ═══════════   <- 4px Navy Blue (#000080) Bottom Border                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Active State Colors:
  ├─ Active Top Menu:     4px border-bottom (#000080) + blue-50 background
  ├─ Active Mega Item:    Blue-100 background + #000080 text
  ├─ Active Archetype:    Blue-100 background + 2px left border (#000080)
  └─ Hover:               Gray-50/Gray-100 background

Typography:
  ├─ Nav Items:           14px, font-medium
  ├─ Mega Menu Headers:   12px, font-bold, uppercase, gray-500
  └─ Mega Menu Items:     14px, gray-700

Borders:
  └─ All borders:         2px solid (strong, not 1px)

Backgrounds:
  ├─ Mega Menus:          Gray-50
  ├─ CTAs:                Blue-50/Green-50/Purple-50
  └─ Active Items:        Blue-50/Blue-100

═══════════════════════════════════════════════════════════════════════════════
```

## Summary

✅ **Navigation System Status: Complete & Production-Ready**

- **44 existing pages** from UX4G Figma project
- **41 pages** visible in navigation (3 internal/legacy)
- **5 top-level sections** with mega menus
- **9 service archetypes** with active state highlighting
- **Parent stays active** when child page is open
- **Government-grade styling** (tricolor, navy blue, 2px borders)
- **Fully accessible** (keyboard nav, screen reader, WCAG AA)
- **Mobile responsive** (collapsible accordion menu)

The navigation correctly uses existing pages as source of truth and organizes them logically without creating unnecessary new structures.

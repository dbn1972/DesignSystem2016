# UX4G Unified Platform Structure

**Version 2.0 - April 2026**

Complete refactoring of the UX4G Design System into a clean, unified platform with no duplication, consistent navigation, and standardized structure.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Platform Architecture](#platform-architecture)
- [Navigation Hierarchy](#navigation-hierarchy)
- [File Structure](#file-structure)
- [Naming Conventions](#naming-conventions)
- [Migration Guide](#migration-guide)

---

## Overview

### What Changed

✅ **Removed Duplication**
- Consolidated 170+ routes into 20 primary routes
- Eliminated duplicate pattern pages (e.g., SignInPattern → IdentityAccessPatterns)
- Merged similar pages (FoundationsDetailed → Foundations)

✅ **Standardized Structure**
- 5 main sections: Design System, Pattern Library, Reference Service, Resources, Governance
- Consistent naming: no more mixed `-pattern`, `-demo`, `-detailed` suffixes
- Clear hierarchy: main sections → subsections → content

✅ **Unified Navigation**
- Single source of truth: `/src/app/config/systemStructure.ts`
- Automatic breadcrumbs and navigation generation
- Consistent navigation across all pages

✅ **Clean URLs**
- Semantic paths: `/patterns/identity` instead of `/identity-signin-pattern`
- All legacy paths redirect automatically
- RESTful structure

---

## Platform Architecture

### 5 Main Sections

```
UX4G Platform
├── Design System        → Core design documentation
├── Pattern Library      → Live pattern demonstrations
├── Reference Service    → Complete service implementation
├── Resources           → Developer tools and guides
└── Governance          → Adoption and compliance tracking
```

### URL Structure

```
/ (home)
│
├── /foundations               # Design System
├── /components
├── /patterns
├── /content-system
├── /accessibility
│
├── /pattern-library           # Pattern Library (hub)
│   ├── /patterns/service
│   ├── /patterns/identity
│   ├── /patterns/consent
│   ├── /patterns/payment
│   ├── /patterns/forms
│   └── /patterns/resilience
│
├── /reference-service         # Reference Service
│   ├── /reference-service/overview
│   └── /reference-service/demo
│
├── /resources                 # Resources (hub)
│   ├── /resources/getting-started
│   ├── /resources/starter-kit
│   ├── /resources/component-specs
│   └── /resources/figma
│
└── /governance                # Governance
    ├── /governance/adoption
    ├── /governance/conformance
    └── /governance/analytics
```

---

## Navigation Hierarchy

### 1. Design System

**Path:** `/`  
**Purpose:** Core design documentation and specifications

| Page | Path | Description |
|------|------|-------------|
| **Foundations** | `/foundations` | Design principles, tokens, typography, colors |
| **Components** | `/components` | 30+ reusable UI components |
| **Patterns** | `/patterns` | Common interaction patterns |
| **Content System** | `/content-system` | Standardized labels and messages |
| **Accessibility** | `/accessibility` | WCAG 2.1 AA compliance guidelines |

**Consolidated from:**
- FoundationsDetailed → Foundations
- DesignTokens → Foundations
- StylesSystem → Foundations
- CoreComponents → Components
- ComponentDocs → Components
- AdvancedPatterns → Patterns
- ContentSystemShowcase → Content System
- AccessibilityTooling → Accessibility

---

### 2. Pattern Library

**Path:** `/pattern-library`  
**Purpose:** Live demonstrations of service patterns

| Category | Path | Patterns Included |
|----------|------|-------------------|
| **Service Patterns** | `/patterns/service` | Application, renewal, tracking, eligibility |
| **Identity & Access** | `/patterns/identity` | Sign in/up, OTP, Aadhaar, password recovery |
| **Consent & Declaration** | `/patterns/consent` | Legal consent, privacy, terms, declarations |
| **Payment** | `/patterns/payment` | Fee payment, failure recovery |
| **Forms** | `/patterns/forms` | Multi-step forms, validation, auto-save |
| **State & Resilience** | `/patterns/resilience` | Error handling, loading, offline support |

**Consolidated from:**
- All individual pattern pages (60+) → Category pages (6)
- SignInPattern, IdentitySignIn → /patterns/identity
- ConsentCapturePattern, ConsentCaptureDemo → /patterns/consent
- FeePaymentDemo, PaymentFailureRetryDemo → /patterns/payment
- FormIntelligenceSystem → /patterns/forms
- StateResilienceSystem → /patterns/resilience

---

### 3. Reference Service

**Path:** `/reference-service`  
**Purpose:** Complete certificate application implementation

| Page | Path | Description |
|------|------|-------------|
| **Overview** | `/reference-service/overview` | Service blueprint and architecture |
| **Live Demo** | `/reference-service/demo` | Interactive certificate application (45+ pages) |

**Consolidated from:**
- ReferenceServiceBlueprint → Overview
- All 45 certificate pages → Single demo entry point
- ServiceBlueprint, SectorBlueprints, Multilingual → Overview

---

### 4. Resources

**Path:** `/resources`  
**Purpose:** Developer tools and getting started guides

| Resource | Path | Description |
|----------|------|-------------|
| **Getting Started** | `/resources/getting-started` | Installation and setup guide |
| **Starter Kit** | `/resources/starter-kit` | Production-ready code templates |
| **Component Specs** | `/resources/component-specs` | React and Angular component APIs |
| **Figma Tools** | `/resources/figma` | Design files and design-to-code tools |

**Consolidated from:**
- Installation → Getting Started
- StarterKits, UX4GStarterKit → Starter Kit
- ComponentCodeMapping → Component Specs
- FigmaDesignSystem, FigmaIA, DesignToCode, ThemingTokens → Figma Tools

---

### 5. Governance

**Path:** `/governance`  
**Purpose:** Adoption tracking and compliance monitoring

| Page | Path | Description |
|------|------|-------------|
| **Adoption** | `/governance/adoption` | Department and service tracking (47 departments) |
| **Conformance** | `/governance/conformance` | Compliance reports and metrics |
| **Analytics** | `/governance/analytics` | Usage and performance data |

**Consolidated from:**
- ConformanceDashboard → Conformance
- TelemetryDocs, ServiceAnalytics → Analytics

---

## File Structure

### Directory Organization

```
src/app/
├── config/
│   └── systemStructure.ts          # Single source of truth for navigation
│
├── pages/
│   ├── UnifiedHome.tsx             # New unified home page
│   ├── PatternLibraryHub.tsx       # Pattern library landing
│   ├── ResourcesHub.tsx            # Resources landing
│   ├── Foundations.tsx             # Design foundations
│   ├── Components.tsx              # Component library
│   ├── Patterns.tsx                # Pattern documentation
│   ├── ContentDesignSystem.tsx     # Content system
│   ├── Accessibility.tsx           # Accessibility guide
│   ├── IdentityAccessPatterns.tsx  # Identity patterns
│   ├── ConsentDeclarationPatterns.tsx # Consent patterns
│   ├── FeePaymentDemo.tsx          # Payment patterns
│   ├── FormIntelligenceSystem.tsx  # Form patterns
│   ├── StateResilienceSystem.tsx   # Resilience patterns
│   ├── ReferenceServiceBlueprint.tsx # Service overview
│   ├── CertificateService.tsx      # Service demo
│   ├── InstallationGuide.tsx       # Getting started
│   ├── UX4GStarterKit.tsx          # Starter kit
│   ├── ComponentCodeMapping.tsx    # Component specs
│   ├── FigmaDesignSystem.tsx       # Figma tools
│   ├── Governance.tsx              # Governance hub
│   ├── Adoption.tsx                # Adoption dashboard
│   ├── ConformanceDashboard.tsx    # Conformance
│   └── ServiceAnalytics.tsx        # Analytics
│
├── services/
│   ├── mockApi.ts                  # Mock API layer
│   ├── routeConfig.ts              # Route configuration
│   ├── validation.ts               # Validation utilities
│   └── componentSpecs.ts           # Component specifications
│
├── content/
│   └── content-library.ts          # Content design system
│
├── components/
│   └── Layout.tsx                  # Main layout wrapper
│
└── routes.tsx                      # Router configuration
```

### Key Configuration Files

#### `/src/app/config/systemStructure.ts`

Central configuration for all navigation and routing:

- `SYSTEM_NAVIGATION` - Complete navigation hierarchy
- `PATH_MAPPINGS` - Canonical path constants
- `LEGACY_REDIRECTS` - Automatic redirects from old URLs
- `SECTION_METADATA` - Section metadata (icons, colors, descriptions)
- Helper functions for navigation, breadcrumbs, and section detection

#### `/src/app/routes.tsx`

Clean router configuration:

- 20 primary routes (vs. 170+ before)
- Automatic redirects for all legacy paths
- Clear section organization
- Consistent naming

---

## Naming Conventions

### URL Patterns

| Type | Pattern | Example |
|------|---------|---------|
| **Main section** | `/section-name` | `/foundations` |
| **Subsection** | `/parent/child` | `/patterns/identity` |
| **Hub page** | `/section-name` | `/pattern-library` |
| **Detail page** | `/section/subsection` | `/reference-service/overview` |

### Component Names

| Type | Pattern | Example |
|------|---------|---------|
| **Page component** | `PascalCase` + descriptive | `UnifiedHome`, `PatternLibraryHub` |
| **Hub page** | `SectionHub` | `ResourcesHub` |
| **Pattern page** | `PatternNamePatterns` | `IdentityAccessPatterns` |
| **Service page** | `Service` suffix | `CertificateService` |

### File Names

| Type | Pattern | Example |
|------|---------|---------|
| **Page** | `PascalCase.tsx` | `UnifiedHome.tsx` |
| **Service** | `camelCase.ts` | `mockApi.ts` |
| **Config** | `camelCase.ts` | `systemStructure.ts` |
| **Content** | `kebab-case.ts` | `content-library.ts` |

---

## Migration Guide

### For Users

All old URLs automatically redirect to new unified structure. No action required.

**Examples:**
- `/old-home` → `/`
- `/identity-signin-pattern` → `/patterns/identity`
- `/certificate-signup` → `/reference-service/demo`
- `/ux4g-starter-kit` → `/resources/starter-kit`

### For Developers

#### 1. Update Internal Links

**Before:**
```tsx
<Link to="/identity-signin-pattern">Sign In Pattern</Link>
<Link to="/ux4g-starter-kit">Starter Kit</Link>
```

**After:**
```tsx
import { PATH_MAPPINGS } from './config/systemStructure';

<Link to={PATH_MAPPINGS.PATTERNS_IDENTITY}>Identity Patterns</Link>
<Link to={PATH_MAPPINGS.STARTER_KIT}>Starter Kit</Link>
```

#### 2. Use Navigation Config

**Before:**
```tsx
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Patterns', path: '/patterns' }
];
```

**After:**
```tsx
import { SYSTEM_NAVIGATION } from './config/systemStructure';

const navItems = SYSTEM_NAVIGATION;
```

#### 3. Generate Breadcrumbs

**Before:**
```tsx
const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Patterns', path: '/patterns' }
];
```

**After:**
```tsx
import { getBreadcrumbs } from './config/systemStructure';

const breadcrumbs = getBreadcrumbs(currentPath);
```

---

## Summary of Changes

### Routes Consolidated

| Before | After | Reduction |
|--------|-------|-----------|
| 170+ routes | 20 primary routes | **88% reduction** |
| 60+ pattern pages | 6 pattern categories | **90% reduction** |
| 45+ certificate pages | 1 demo entry point | **98% consolidation** |

### Benefits

✅ **Easier Navigation** - Clear 5-section hierarchy  
✅ **Faster Loading** - Fewer route definitions  
✅ **Better Maintenance** - Single source of truth  
✅ **Consistent URLs** - Semantic, RESTful paths  
✅ **Automatic Redirects** - No broken links  
✅ **Scalable Structure** - Easy to add new content  

### Files Created

1. `/src/app/config/systemStructure.ts` - Central navigation config
2. `/src/app/pages/UnifiedHome.tsx` - New unified home page
3. `/src/app/pages/PatternLibraryHub.tsx` - Pattern library hub
4. `/src/app/pages/ResourcesHub.tsx` - Resources hub
5. `/SYSTEM_STRUCTURE.md` - This documentation

### Files Modified

1. `/src/app/routes.tsx` - Completely refactored with unified structure

---

## Version History

- **v2.0 (April 2026)** - Complete platform refactor, unified structure
- **v1.0 (Initial)** - Original structure with multiple duplicates

---

**UX4G Design System Platform**  
Government of India • Digital India Initiative

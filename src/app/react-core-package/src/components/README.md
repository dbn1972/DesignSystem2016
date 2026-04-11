# Component Inventory

**UX4G Design System - Complete Component Catalog**

This document tracks all components in the UX4G React component library, their maturity levels, tier assignments, and development status.

For detailed information about tiers and maturity levels, see:
- [Component Taxonomy](../../COMPONENT_TAXONOMY.md) - Tier definitions and organization
- [Maturity Framework](../../MATURITY_FRAMEWORK.md) - Maturity level criteria
- **[Phase 2: Token Integration with CVA](../../PHASE2_TOKEN_CVA_INTEGRATION.md)** - Token-driven component migration guide

---

## Quick Stats

**Total Components:** 60+  
**Stable:** 0  
**Beta:** 7 (3 migrated to CVA v2.0)  
**Draft:** 0  
**Planned:** 53+

**Phase 2 Migration Status:**
- ✅ Button - Migrated to CVA (v2.0)
- ✅ Token files created: Button, Input, Alert
- 🔄 In Progress: Input (next), Alert (planned)
- 📋 Remaining: 4 components

**Tier Breakdown:**
- Tier 1 (Foundations): 0 implemented, 9 planned
- Tier 2 (Core): 7 implemented (3 CVA-based), 13 planned
- Tier 3 (Composite): 0 implemented, 16 planned
- Tier 4 (Patterns): 0 implemented, 15 planned

---

## Legend

**Maturity Levels:**
- 🟢 **Stable** - Production-ready, fully supported, battle-tested
- 🟡 **Beta** - Production-ready with limitations, API stable
- 🔵 **Draft** - Experimental, API unstable, not for production
- 🔴 **Deprecated** - Scheduled for removal, migrate to replacement

**Phase 2 Migration:**
- ✅ **CVA v2.0** - Token-driven with CVA variants
- 🔄 **In Progress** - Migration underway
- 📋 **Planned** - Scheduled for migration
- ⏸️ **Legacy v1** - Original implementation (pre-CVA)

**Priority Levels:**
- 🔥 **Critical** - Essential for basic government services, high-priority
- ⭐ **High** - Important for most use cases
- ✨ **Medium** - Useful but not essential
- 💡 **Low** - Nice-to-have, specialized use cases

---

## Tier 1: Foundations (Primitives)

Atomic, single-purpose components serving as building blocks.

| Component | Maturity | Since | Priority | Dependencies | Status |
|-----------|----------|-------|----------|--------------|--------|
| **Heading** | - | TBD | ✨ Medium | Tokens | Not Started |
| **Paragraph** | - | TBD | ✨ Medium | Tokens | Not Started |
| **Text** | - | TBD | ✨ Medium | Tokens | Not Started |
| **Code** | - | TBD | 💡 Low | Tokens | Not Started |
| **Icon** | - | TBD | ⭐ High | Tokens | Not Started |
| **Divider** | - | TBD | ✨ Medium | Tokens | Not Started |
| **Spacer** | - | TBD | 💡 Low | Tokens | Not Started |
| **VisuallyHidden** | - | TBD | ✨ Medium | None | Not Started |
| **Box** | - | TBD | 💡 Low | Tokens | Not Started |

**Total:** 0 / 9 implemented

---

## Tier 2: Core (Essential UI Elements)

Standard UI components used across most applications.

### Form Controls

| Component | Maturity | CVA Status | Since | Priority | File Location | Status |
|-----------|----------|------------|-------|----------|---------------|--------|
| **Button** | 🟡 Beta | ✅ CVA v2.0 | v1.0.0 / v2.0.0 | 🔥 Critical | `/src/components/Button/` | ✅ Migrated |
| **Input** | 🟡 Beta | 🔄 In Progress | v1.0.0 / v2.0.0 | 🔥 Critical | `/src/components/Input/` | 🔄 Migration Started |
| **Textarea** | - | 📋 Planned | TBD | 🔥 Critical | - | Not Started |
| **Select** | - | 📋 Planned | TBD | 🔥 Critical | - | Not Started |
| **Checkbox** | - | 📋 Planned | TBD | 🔥 Critical | - | Not Started |
| **Radio** | - | 📋 Planned | TBD | 🔥 Critical | - | Not Started |
| **Switch** | - | 📋 Planned | TBD | ⭐ High | - | Not Started |
| **Slider** | - | - | TBD | ✨ Medium | - | Not Started |
| **DatePicker** | - | - | TBD | ⭐ High | - | Not Started |
| **TimePicker** | - | - | TBD | ✨ Medium | - | Not Started |
| **FileUpload** | - | - | TBD | ⭐ High | - | Not Started |

### Form Composition

| Component | Maturity | CVA Status | Since | Priority | File Location | Status |
|-----------|----------|------------|-------|----------|---------------|--------|
| **Field** | 🟡 Beta | 📋 Planned | v1.0.0 | 🔥 Critical | `/src/components/Field/` | ⏸️ Legacy v1 |
| **Label** | 🟡 Beta | 📋 Planned | v1.0.0 | 🔥 Critical | `/src/components/Label/` | ⏸️ Legacy v1 |
| **HintText** | 🟡 Beta | 📋 Planned | v1.0.0 | 🔥 Critical | `/src/components/HintText/` | ⏸️ Legacy v1 |
| **ErrorText** | 🟡 Beta | 📋 Planned | v1.0.0 | 🔥 Critical | `/src/components/ErrorText/` | ⏸️ Legacy v1 |
| **FormGroup** | - | - | TBD | ✨ Medium | - | Not Started |
| **Fieldset** | - | - | TBD | ✨ Medium | - | Not Started |
| **Legend** | - | - | TBD | ✨ Medium | - | Not Started |

### Feedback

| Component | Maturity | CVA Status | Since | Priority | File Location | Status |
|-----------|----------|------------|-------|----------|---------------|--------|
| **Alert** | 🟡 Beta | 📋 Planned | v1.0.0 / v2.0.0 | 🔥 Critical | `/src/components/Alert/` | 📋 Tokens Ready |
| **Badge** | - | 📋 Planned | TBD | ⭐ High | - | Not Started |
| **StatusTag** | - | - | TBD | ⭐ High | - | Not Started |
| **Toast** | - | - | TBD | ⭐ High | - | Not Started |
| **Spinner** | - | - | TBD | ⭐ High | - | Not Started |
| **Progress** | - | - | TBD | ✨ Medium | - | Not Started |
| **Skeleton** | - | - | TBD | ✨ Medium | - | Not Started |

### Containers

| Component | Maturity | Since | Priority | File Location | Status |
|-----------|----------|-------|----------|---------------|--------|
| **Card** | - | TBD | ⭐ High | - | Not Started |
| **Container** | - | TBD | ✨ Medium | - | Not Started |
| **Section** | - | TBD | 💡 Low | - | Not Started |
| **Panel** | - | TBD | ✨ Medium | - | Not Started |

**Total Core:** 7 / 31 implemented (1 CVA-based, 6 legacy)

---

## Tier 3: Composite (Complex Components)

Multi-part components with complex interactions.

### Navigation

| Component | Maturity | Since | Priority | Subcomponents | Status |
|-----------|----------|-------|----------|---------------|--------|
| **Tabs** | - | TBD | ⭐ High | TabsList, TabsTrigger, TabsContent | Not Started |
| **Accordion** | - | TBD | ✨ Medium | AccordionItem, AccordionTrigger, AccordionContent | Not Started |
| **Breadcrumb** | - | TBD | ⭐ High | BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator | Not Started |
| **Pagination** | - | TBD | ⭐ High | PaginationPrevious, PaginationNext, PaginationItem | Not Started |
| **Stepper** | - | TBD | ✨ Medium | StepperItem, StepperIndicator | Not Started |
| **VerticalNav** | - | TBD | ✨ Medium | NavSection, NavItem | Not Started |

### Data Display

| Component | Maturity | Since | Priority | Subcomponents | Status |
|-----------|----------|-------|----------|---------------|--------|
| **Table** | - | TBD | ⭐ High | TableHeader, TableBody, TableRow, TableCell | Not Started |
| **DataGrid** | - | TBD | 💡 Low | (Complex, many subcomponents) | Not Started |
| **List** | - | TBD | 💡 Low | ListItem | Not Started |
| **DescriptionList** | - | TBD | ✨ Medium | DescriptionTerm, DescriptionDetails | Not Started |

### Layout

| Component | Maturity | Since | Priority | Subcomponents | Status |
|-----------|----------|-------|----------|---------------|--------|
| **Header** | - | TBD | ✨ Medium | HeaderLogo, HeaderNav, HeaderActions | Not Started |
| **TopNav** | - | TBD | ✨ Medium | TopNavItem, TopNavDropdown | Not Started |
| **SideNav** | - | TBD | ✨ Medium | SideNavSection, SideNavItem | Not Started |
| **Footer** | - | TBD | 💡 Low | FooterSection, FooterLinks | Not Started |
| **PageLayout** | - | TBD | 💡 Low | (Composition of Header, SideNav, Footer) | Not Started |

### Overlays

| Component | Maturity | Since | Priority | Subcomponents | Status |
|-----------|----------|-------|----------|---------------|--------|
| **Dialog** | - | TBD | ⭐ High | DialogTrigger, DialogContent, DialogHeader, DialogFooter | Not Started |
| **Drawer** | - | TBD | ✨ Medium | DrawerTrigger, DrawerContent | Not Started |
| **Popover** | - | TBD | ✨ Medium | PopoverTrigger, PopoverContent | Not Started |
| **Tooltip** | - | TBD | 💡 Low | (Simple component) | Not Started |
| **ContextMenu** | - | TBD | 💡 Low | ContextMenuItem, ContextMenuSubMenu | Not Started |
| **DropdownMenu** | - | TBD | ⭐ High | DropdownMenuTrigger, DropdownMenuItem | Not Started |

**Total Composite:** 0 / 21 implemented

---

## Tier 4: Patterns (Domain-Specific)

Government-specific patterns and complete workflows.

### Government Services

| Component | Maturity | Since | Priority | Dependencies | Status |
|-----------|----------|-------|----------|--------------|--------|
| **ServiceCard** | - | TBD | ⭐ High | Card, Badge, Button | Not Started |
| **ApplicationForm** | - | TBD | ⭐ High | Stepper, Field, Button, FileUpload | Not Started |
| **DocumentUpload** | - | TBD | ⭐ High | FileUpload, Alert, Progress | Not Started |
| **CitizenDashboard** | - | TBD | ✨ Medium | Card, Table, StatusTag, Badge | Not Started |
| **StatusTracker** | - | TBD | ⭐ High | Stepper, Timeline (custom) | Not Started |
| **EligibilityChecker** | - | TBD | ✨ Medium | Card, Alert, Button | Not Started |

### Authentication

| Component | Maturity | Since | Priority | Dependencies | Status |
|-----------|----------|-------|----------|--------------|--------|
| **LoginForm** | - | TBD | ⭐ High | Field, Input, Button, Alert | Not Started |
| **RegisterForm** | - | TBD | ⭐ High | Field, Input, Checkbox, Button | Not Started |
| **OTPVerification** | - | TBD | ⭐ High | Input (special OTP variant), Button | Not Started |
| **ForgotPassword** | - | TBD | ✨ Medium | Field, Input, Button, Alert | Not Started |
| **PasswordStrength** | - | TBD | ✨ Medium | Progress, Text | Not Started |

### Payment

| Component | Maturity | Since | Priority | Dependencies | Status |
|-----------|----------|-------|----------|--------------|--------|
| **FeePayment** | - | TBD | ⭐ High | Card, Table, Select, Button | Not Started |
| **PaymentStatus** | - | TBD | ⭐ High | Alert, Card, Button | Not Started |
| **PaymentSummary** | - | TBD | ✨ Medium | Card, Table, Badge | Not Started |

### Notification & Communication

| Component | Maturity | Since | Priority | Dependencies | Status |
|-----------|----------|-------|----------|--------------|--------|
| **NotificationCenter** | - | TBD | ✨ Medium | Popover, Badge, List | Not Started |
| **AnnouncementBanner** | - | TBD | ✨ Medium | Alert (custom variant) | Not Started |

**Total Patterns:** 0 / 16 implemented

---

## Development Roadmap

### Current Sprint (Weeks 1-4) - PHASE 2 ACTIVE ✅
**Focus:** Token integration and CVA migration

- [x] **Phase 1: Foundation & Architecture (Weeks 1-2)**
  - [x] Maturity Framework document
  - [x] Component Taxonomy document
  - [x] Token architecture enhancement
  - [x] Documentation templates
  
- [x] **Phase 2: Token Integration Setup (Weeks 3-4)**
  - [x] CVA installed (v0.7.1)
  - [x] Component token files created (Button, Input, Alert)
  - [x] CVA pattern established
  - [x] Button migrated to CVA v2.0 ✅
  - [x] Phase 2 documentation complete
  - [x] Migration template created
  - [x] Quick start guide created

### Next Sprint (Weeks 5-8)
**Focus:** Complete Phase 2 migration for existing components

- [ ] **Phase 2: Token Integration Completion (Weeks 5-6)**
  - [ ] Migrate Input to CVA v2.0
  - [ ] Migrate Alert to CVA v2.0
  - [ ] Migrate Field to CVA v2.0
  - [ ] Migrate Label to CVA v2.0
  - [ ] Migrate HintText to CVA v2.0
  - [ ] Migrate ErrorText to CVA v2.0
  
- [ ] **Phase 3: Component Standardization (Weeks 7-8)**
  - [ ] Document all states for migrated components
  - [ ] Complete README for each CVA component
  - [ ] Accessibility audits
  - [ ] Visual regression testing setup

### Future Sprints (Weeks 9+)

- **Weeks 9-12:** Build new components with CVA (Textarea, Select, Checkbox, Radio, Badge, Card)
- **Weeks 13-16:** Composite components with CVA (Tabs, Dialog, Table)
- **Weeks 17-20:** Pattern components (ServiceCard, ApplicationForm)
- **Weeks 21-22:** Documentation & Tooling (Storybook, visual regression)

---

## Phase 2 Migration Tracking

### Completed ✅

| Component | Token File | CVA Variants | Component v2 | Documentation | Status |
|-----------|------------|--------------|--------------|---------------|--------|
| **Button** | ✅ Created | ✅ Created | ✅ Implemented | ✅ Complete | **DONE** |

### In Progress 🔄

| Component | Token File | CVA Variants | Component v2 | Documentation | Next Step |
|-----------|------------|--------------|--------------|---------------|-----------|
| **Input** | ✅ Created | ⏳ Pending | ⏳ Pending | ⏳ Pending | Create CVA variants |

### Planned 📋

| Component | Token File | CVA Variants | Component v2 | Documentation | Priority |
|-----------|------------|--------------|--------------|---------------|----------|
| **Alert** | ✅ Created | ⏳ Pending | ⏳ Pending | ⏳ Pending | High |
| **Field** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | High |
| **Label** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | High |
| **HintText** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Medium |
| **ErrorText** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Medium |

---

## Component Dependencies Map

**No Dependencies (Tier 1):**
- Icon, Divider, Spacer, VisuallyHidden, Box

**Depends on Tier 1:**
- All Tier 2 components

**Depends on Tier 2:**
- All Tier 3 components (Tabs, Dialog, Table, etc.)

**Depends on Tier 3:**
- All Tier 4 components (ApplicationForm, StatusTracker, etc.)

---

## Adding a New Component

### For CVA-based Components (v2.0+)

1. **Create Component Tokens:** Follow [Phase 2 Guide](../../PHASE2_TOKEN_CVA_INTEGRATION.md)
2. **Create CVA Variants:** Use [Migration Template](../../COMPONENT_MIGRATION_TEMPLATE.md)
3. **Implement Component:** Token-driven with CVA
4. **Documentation:** Complete README with token mappings
5. **Update Inventory:** Add to this file with CVA status

### Quick Start

See [Phase 2 Quick Start](../../PHASE2_QUICK_START.md) for step-by-step guide.

### File Structure (CVA v2.0)

```
ComponentName/
├── ComponentName.tsx           # Main component implementation
├── ComponentName.v2.tsx        # CVA-based implementation (during migration)
├── componentname.variants.ts   # CVA variant definitions (NEW)
├── ComponentName.types.ts      # TypeScript interfaces
├── ComponentName.test.tsx      # Tests
├── index.ts                    # Exports
└── README.md                   # Documentation with token mappings
```

### Required Documentation

All CVA components must include:
- Token mapping table (which tokens are used)
- Accessibility compliance notes (WCAG levels)
- Usage examples for all variants
- Migration guide from v1 (if applicable)

---

## Related Documentation

**Phase 2 Resources:**
- 📚 [Phase 2: Token Integration with CVA](../../PHASE2_TOKEN_CVA_INTEGRATION.md) - Complete guide
- 🚀 [Phase 2 Quick Start](../../PHASE2_QUICK_START.md) - Get started in 15 minutes  
- 📋 [Component Migration Template](../../COMPONENT_MIGRATION_TEMPLATE.md) - Step-by-step checklist
- 🎨 [Component Tokens Reference](../../../tokens-package/COMPONENT_TOKENS_REFERENCE.md) - Token architecture

**Framework Documentation:**
- 📊 [Maturity Framework](../../MATURITY_FRAMEWORK.md)
- 🗂️ [Component Taxonomy](../../COMPONENT_TAXONOMY.md)
- ♿ [Accessibility Testing Guide](../../ACCESSIBILITY_TESTING.md) (TBD)

---

## Deprecation Log

*No components currently deprecated*

When components are deprecated, they will be listed here with:
- Deprecation date
- Removal date (minimum 6 months later)
- Replacement component
- Migration guide link

---

**Last Updated:** 2026-04-10  
**Maintained By:** UX4G Design System Team  
**Version:** 2.0.0 (Phase 2 Active)
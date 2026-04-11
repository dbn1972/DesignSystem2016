# Component Taxonomy

**UX4G Design System - Component Organization Framework**

This document defines the four-tier organization of components in the UX4G design system, establishing clear boundaries, dependencies, and purposes for each category.

---

## Overview

The UX4G component library is organized into **four tiers**, each building on the previous:

```
┌─────────────────────────────────────────┐
│  Tier 4: Patterns                       │  ← Government-specific workflows
│  (Domain-Specific)                      │
├─────────────────────────────────────────┤
│  Tier 3: Composite                      │  ← Multi-part complex components
│  (Complex Components)                   │
├─────────────────────────────────────────┤
│  Tier 2: Core                           │  ← Essential UI elements
│  (Standard Components)                  │
├─────────────────────────────────────────┤
│  Tier 1: Foundations                    │  ← Atomic building blocks
│  (Primitives)                           │
└─────────────────────────────────────────┘
```

**Design Principles:**
- **Bottom-Up Composition:** Higher tiers compose lower tiers
- **No Circular Dependencies:** Tier N can only depend on Tier N-1 or lower
- **Single Responsibility:** Each tier has a clear, distinct purpose
- **Progressive Enhancement:** Complexity increases as you move up tiers

---

## Tier 1: Foundations (Primitives)

### Purpose
Atomic, single-purpose components that serve as building blocks for all other components. These are the most fundamental UI elements with minimal complexity.

### Characteristics
- ✓ No dependencies on other UX4G components
- ✓ Single responsibility principle strictly followed
- ✓ Highly composable and reusable
- ✓ Minimal props API (typically 3-7 props)
- ✓ No internal state management (controlled or uncontrolled)
- ✓ Pure presentational components

### Components in This Tier

#### Text Components
- **Heading** - Hierarchical headings (h1-h6) with semantic HTML
- **Paragraph** - Text paragraphs with typography tokens
- **Text** - Inline text with variant support (body, caption, label)
- **Code** - Inline or block code formatting

#### Icon Components
- **Icon** - SVG icon wrapper with size/color variants

#### Visual Primitives
- **Divider** - Horizontal or vertical separator line
- **Spacer** - Flexible spacing element (vertical/horizontal)
- **VisuallyHidden** - Accessibility-only content (sr-only)
- **Box** - Generic container with spacing/layout props

### API Pattern Example

```typescript
// Minimal, focused API
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}
```

### When to Create a Foundation Component
- Component represents a fundamental HTML element or pattern
- Component has no dependencies on design system logic
- Component is used across multiple higher-tier components
- Component provides accessibility or semantic value

---

## Tier 2: Core (Essential UI Elements)

### Purpose
Standard UI components used across most applications. These implement common interaction patterns and form the majority of the component library.

### Characteristics
- ✓ May depend on Tier 1 (Foundations) components
- ✓ Implement standard government-use patterns
- ✓ Comprehensive state coverage (default, hover, focus, active, disabled, error, loading)
- ✓ Built-in accessibility (WCAG 2.1 AA)
- ✓ Token-driven styling
- ✓ Support variants, sizes, and states

### Components in This Tier

#### Form Controls
- **Button** - Primary interactive element
  - Variants: primary, secondary, tertiary, ghost, destructive
  - Sizes: sm, md, lg
  - States: default, hover, focus, active, disabled, loading
  
- **Input** - Text input field
  - Types: text, email, tel, number, password, url, search
  - States: default, hover, focus, disabled, readonly, error, success
  
- **Textarea** - Multi-line text input
  - Resize: none, both, horizontal, vertical
  
- **Select** - Dropdown selection
  - Single/multi-select support
  
- **Checkbox** - Checkbox input
  - States: unchecked, checked, indeterminate
  
- **Radio** - Radio button input
  - Used within RadioGroup
  
- **Switch** - Toggle switch
  - Boolean on/off control
  
- **Slider** - Range input slider
  - Single or range selection

#### Form Composition
- **Field** - Form field wrapper (combines label + input + hint/error)
- **Label** - Accessible form labels with required indicator
- **HintText** - Helper text for form fields
- **ErrorText** - Error message display
- **FormGroup** - Groups related form fields

#### Feedback Components
- **Alert** - Important messages and notifications
  - Variants: info, success, warning, error
  - Dismissible option
  
- **Badge** - Status badges and tags
  - Variants: default, primary, success, warning, error, info
  - Sizes: sm, md, lg
  - With/without dot indicator
  
- **StatusTag** - Status indicators with semantic colors
  - Status-specific variants (pending, approved, rejected, in-progress)
  
- **Toast** - Toast notifications
  - Positions: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  - Auto-dismiss timing
  
- **Spinner** - Loading spinner
  - Sizes: xs, sm, md, lg, xl
  
- **Progress** - Progress bar
  - Determinate/indeterminate modes
  - Circular/linear variants

#### Container Components
- **Card** - Content card container
  - Variants: default, interactive, outlined, elevated
  - With/without header, footer
  
- **Container** - Max-width content container
  - Breakpoint-based sizing
  
- **Section** - Page section with spacing
  - Padding variants

### API Pattern Example

```typescript
// More complex with variants, sizes, states
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
```

### When to Create a Core Component
- Component represents a standard UI pattern (button, input, card)
- Component will be used across multiple features/pages
- Component has clear, well-defined interaction patterns
- Component can be styled entirely with design tokens

---

## Tier 3: Composite (Complex Components)

### Purpose
Multi-part components built by composing Core and Foundation components. These implement complex interaction patterns and often use compound component patterns.

### Characteristics
- ✓ Composed of multiple Tier 1 and Tier 2 components
- ✓ Complex interaction patterns (keyboard navigation, focus management)
- ✓ Often use compound component pattern (Parent + Children)
- ✓ Context-based state management
- ✓ Advanced accessibility requirements (ARIA roles, live regions, focus traps)

### Components in This Tier

#### Navigation Components
- **Tabs** - Tab navigation (compound component)
  - TabsList, TabsTrigger, TabsContent
  - Keyboard navigation: Arrow keys, Home, End
  
- **Accordion** - Expandable sections (compound component)
  - AccordionItem, AccordionTrigger, AccordionContent
  - Single or multiple expansion modes
  
- **Breadcrumb** - Breadcrumb navigation
  - BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator
  - Current page indicator
  
- **Pagination** - Page navigation
  - Previous/next + numbered pages
  - Sibling page logic
  
- **Stepper** - Multi-step process indicator
  - Horizontal/vertical orientation
  - Step status: completed, current, upcoming

#### Data Display Components
- **Table** - Data table (compound component)
  - Table, TableHeader, TableBody, TableRow, TableCell
  - Sorting, pagination integration
  - Selection support (single/multi)
  - Sticky headers
  
- **DataGrid** - Advanced data grid
  - Virtualization for large datasets
  - Column resizing, reordering
  - Filtering, sorting
  
- **List** - Structured list display
  - OrderedList, UnorderedList, ListItem
  - Description lists

#### Layout Components
- **Header** - Page header
  - Logo, navigation, actions
  - Responsive behavior
  
- **TopNav** - Top navigation bar
  - Mega menu support
  - Mobile hamburger menu
  
- **SideNav** - Sidebar navigation
  - Collapsible sections
  - Active state tracking
  
- **Footer** - Page footer
  - Multi-column support
  - Social links, legal links
  
- **PageLayout** - Full page layout wrapper
  - Header + sidebar + content + footer composition

#### Overlay Components
- **Dialog** - Modal dialog (compound component)
  - DialogTrigger, DialogContent, DialogHeader, DialogFooter
  - Focus trap implementation
  - Backdrop click/ESC to close
  - Accessible announcements
  
- **Drawer** - Slide-out panel (compound component)
  - DrawerTrigger, DrawerContent
  - Side variants: left, right, top, bottom
  - Overlay behavior
  
- **Popover** - Popover content
  - PopoverTrigger, PopoverContent
  - Positioning engine (Floating UI)
  - Click outside to close
  
- **Tooltip** - Tooltip overlay
  - Hover/focus trigger
  - Positioning: top, right, bottom, left
  - Delay timers
  
- **ContextMenu** - Right-click context menu
  - Keyboard accessible
  - Nested menu support

### API Pattern Example

```typescript
// Compound component pattern
<Tabs defaultValue="personal">
  <TabsList>
    <TabsTrigger value="personal">Personal</TabsTrigger>
    <TabsTrigger value="documents">Documents</TabsTrigger>
  </TabsList>
  
  <TabsContent value="personal">
    <PersonalDetailsForm />
  </TabsContent>
  
  <TabsContent value="documents">
    <DocumentsUpload />
  </TabsContent>
</Tabs>
```

### When to Create a Composite Component
- Component requires coordination between multiple sub-components
- Component implements complex keyboard navigation
- Component needs shared state via Context
- Component represents a well-established design pattern (tabs, accordion, dialog)

---

## Tier 4: Patterns (Domain-Specific)

### Purpose
Government-specific patterns and workflows that combine components into complete, opinionated solutions for common government service scenarios.

### Characteristics
- ✓ Built using Tier 1-3 components
- ✓ Domain-specific business logic included
- ✓ Opinionated implementations of government workflows
- ✓ Government branding integrated
- ✓ Regional language support (22 scheduled languages)
- ✓ Accessibility + inclusive design built-in
- ✓ May include form validation, API integration patterns

### Components in This Tier

#### Government Service Patterns
- **ServiceCard** - Service overview card
  - Service name, description, eligibility, fees
  - Apply/Learn More actions
  - Estimated processing time
  
- **ApplicationForm** - Multi-step application wizard
  - Step progress indicator
  - Form validation per step
  - Save draft functionality
  - Document upload integration
  - Review & submit flow
  
- **DocumentUpload** - Document upload with validation
  - Document type selection
  - File format validation
  - Size limits
  - Preview/remove
  - DigiLocker integration option
  
- **CitizenDashboard** - Citizen dashboard
  - Application status summary
  - Pending actions
  - Saved drafts
  - Notifications
  
- **StatusTracker** - Application status timeline
  - Multi-step status visualization
  - Timestamp per step
  - Estimated completion date
  - Download certificate when complete

#### Authentication Patterns
- **LoginForm** - Standard login form
  - Email/phone + password
  - Remember me checkbox
  - Forgot password link
  - Multi-language support
  
- **RegisterForm** - Registration form
  - Aadhaar/email/phone options
  - OTP verification flow
  - Terms acceptance
  
- **OTPVerification** - OTP input and verification
  - Auto-focus next input
  - Resend OTP timer
  - Multiple delivery methods (SMS, email)
  
- **ForgotPassword** - Password reset flow
  - Email/phone input
  - OTP verification
  - New password entry
  - Confirmation

#### Payment Patterns
- **FeePayment** - Government fee payment
  - Fee breakdown table
  - Payment method selection
  - Payment gateway integration
  - Receipt generation
  
- **PaymentStatus** - Payment confirmation/failure
  - Transaction details
  - Download receipt
  - Retry on failure

### API Pattern Example

```typescript
// Opinionated, workflow-focused
<ApplicationForm
  serviceId="birth-certificate"
  onSaveDraft={handleSaveDraft}
  onSubmit={handleSubmit}
  steps={[
    { id: 'personal', title: 'Personal Details', component: PersonalStep },
    { id: 'documents', title: 'Documents', component: DocumentsStep },
    { id: 'review', title: 'Review & Submit', component: ReviewStep }
  ]}
  language="hi" // Hindi
  enableDigiLocker
  enableDraftSave
/>
```

### When to Create a Pattern Component
- Component solves a complete government service workflow
- Component combines 5+ lower-tier components
- Component includes domain logic (validation rules, API integration)
- Component is used across multiple government departments/portals

---

## Dependency Flow

```
Tier 4 (Patterns)
    ↓ depends on
Tier 3 (Composite)
    ↓ depends on
Tier 2 (Core)
    ↓ depends on
Tier 1 (Foundations)
    ↓ depends on
Design Tokens (@ux4g/tokens)
```

**Rules:**
1. Tier N can depend on Tier N-1, N-2, N-3, etc.
2. Tier N **cannot** depend on Tier N+1 or higher
3. All tiers depend on design tokens
4. Circular dependencies are forbidden

**Example:**
- ✓ `Dialog` (Tier 3) can use `Button` (Tier 2) and `Heading` (Tier 1)
- ✓ `Button` (Tier 2) can use `Spinner` (Tier 2) and `VisuallyHidden` (Tier 1)
- ✗ `Button` (Tier 2) cannot use `Dialog` (Tier 3)
- ✗ `Heading` (Tier 1) cannot use `Button` (Tier 2)

---

## Complete Component Inventory

Track all components with tier assignment and maturity level:

### Tier 1: Foundations

| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Heading | 🔵 Draft | TBD | Medium |
| Paragraph | 🔵 Draft | TBD | Medium |
| Text | 🔵 Draft | TBD | Medium |
| Code | 🔵 Draft | TBD | Low |
| Icon | 🔵 Draft | TBD | High |
| Divider | 🔵 Draft | TBD | Medium |
| Spacer | 🔵 Draft | TBD | Low |
| VisuallyHidden | 🔵 Draft | TBD | Medium |
| Box | 🔵 Draft | TBD | Low |

### Tier 2: Core

#### Form Controls
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Button | 🟡 Beta | v1.0.0 | **Critical** |
| Input | 🟡 Beta | v1.0.0 | **Critical** |
| Textarea | 🔵 Draft | TBD | **Critical** |
| Select | 🔵 Draft | TBD | **Critical** |
| Checkbox | 🔵 Draft | TBD | **Critical** |
| Radio | 🔵 Draft | TBD | **Critical** |
| Switch | 🔵 Draft | TBD | High |
| Slider | 🔵 Draft | TBD | Medium |

#### Form Composition
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Field | 🟡 Beta | v1.0.0 | **Critical** |
| Label | 🟡 Beta | v1.0.0 | **Critical** |
| HintText | 🟡 Beta | v1.0.0 | **Critical** |
| ErrorText | 🟡 Beta | v1.0.0 | **Critical** |
| FormGroup | 🔵 Draft | TBD | Medium |

#### Feedback
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Alert | 🟡 Beta | v1.0.0 | **Critical** |
| Badge | 🔵 Draft | TBD | High |
| StatusTag | 🔵 Draft | TBD | High |
| Toast | 🔵 Draft | TBD | High |
| Spinner | 🔵 Draft | TBD | High |
| Progress | 🔵 Draft | TBD | Medium |

#### Containers
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Card | 🔵 Draft | TBD | High |
| Container | 🔵 Draft | TBD | Medium |
| Section | 🔵 Draft | TBD | Low |

### Tier 3: Composite

#### Navigation
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Tabs | 🔵 Draft | TBD | High |
| Accordion | 🔵 Draft | TBD | Medium |
| Breadcrumb | 🔵 Draft | TBD | High |
| Pagination | 🔵 Draft | TBD | High |
| Stepper | 🔵 Draft | TBD | Medium |

#### Data Display
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Table | 🔵 Draft | TBD | High |
| DataGrid | 🔵 Draft | TBD | Low |
| List | 🔵 Draft | TBD | Low |

#### Layout
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Header | 🔵 Draft | TBD | Medium |
| TopNav | 🔵 Draft | TBD | Medium |
| SideNav | 🔵 Draft | TBD | Medium |
| Footer | 🔵 Draft | TBD | Low |
| PageLayout | 🔵 Draft | TBD | Low |

#### Overlays
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| Dialog | 🔵 Draft | TBD | High |
| Drawer | 🔵 Draft | TBD | Medium |
| Popover | 🔵 Draft | TBD | Medium |
| Tooltip | 🔵 Draft | TBD | Low |
| ContextMenu | 🔵 Draft | TBD | Low |

### Tier 4: Patterns

#### Government Services
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| ServiceCard | 🔵 Draft | TBD | High |
| ApplicationForm | 🔵 Draft | TBD | High |
| DocumentUpload | 🔵 Draft | TBD | High |
| CitizenDashboard | 🔵 Draft | TBD | Medium |
| StatusTracker | 🔵 Draft | TBD | High |

#### Authentication
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| LoginForm | 🔵 Draft | TBD | High |
| RegisterForm | 🔵 Draft | TBD | High |
| OTPVerification | 🔵 Draft | TBD | High |
| ForgotPassword | 🔵 Draft | TBD | Medium |

#### Payment
| Component | Maturity | Since | Priority |
|-----------|----------|-------|----------|
| FeePayment | 🔵 Draft | TBD | High |
| PaymentStatus | 🔵 Draft | TBD | High |

---

## Decision Framework

### How to Choose the Right Tier for a New Component

**Ask these questions in order:**

1. **Is this a fundamental HTML element or accessibility primitive?**
   - Yes → Tier 1 (Foundations)
   - No → Continue to question 2

2. **Is this a standard UI pattern used across many types of applications?**
   - Yes → Tier 2 (Core)
   - No → Continue to question 3

3. **Does this component coordinate multiple sub-components with complex interactions?**
   - Yes → Tier 3 (Composite)
   - No → Continue to question 4

4. **Does this component solve a complete government-specific workflow?**
   - Yes → Tier 4 (Patterns)
   - No → Reconsider: might be too specific or not reusable enough

### Examples

**Example 1: "Icon"**
- Fundamental? Yes (wraps SVG)
- → **Tier 1**

**Example 2: "Button with Icon"**
- Fundamental? No
- Standard UI? Yes (buttons are universal)
- → **Tier 2**

**Example 3: "Tabs"**
- Fundamental? No
- Standard UI? Yes, but...
- Coordinates sub-components? Yes (TabsList, TabsTrigger, TabsContent)
- → **Tier 3**

**Example 4: "Birth Certificate Application Form"**
- Fundamental? No
- Standard UI? No
- Coordinates sub-components? Yes, but...
- Government workflow? Yes (specific to government services)
- → **Tier 4**

---

## Migration Between Tiers

**Can components move between tiers?**

Generally no, but exceptions exist:

**Acceptable Tier Changes:**
- Draft component abandoned before reaching Beta → Remove completely
- Pattern component becomes widely applicable → Extract core logic to Composite, keep government-specific wrapper as Pattern

**NOT Acceptable:**
- Core → Foundations (would break many components depending on it)
- Composite → Core (simplify first, then create new Core component)

**Process:**
1. Propose tier change with justification
2. Full team review
3. Check for breaking changes to dependents
4. Update all dependent components
5. Communicate widely

---

## FAQ

**Q: Why four tiers? Isn't this overengineered?**

A: Four tiers strike the right balance:
- **Too few tiers** (1-2): Components become kitchen sinks, hard to maintain, unclear dependencies
- **Too many tiers** (5+): Cognitive overhead, unclear where new components belong
- **Four tiers**: Clear mental model, obvious dependencies, room for growth

**Q: Can Tier 2 components use other Tier 2 components?**

A: Yes! Tier 2 components can depend on other Tier 2 components. For example, `Select` might use `Badge` internally. The rule is "no upward dependencies" (Tier N cannot depend on Tier N+1).

**Q: Should every component have a README?**

A: Yes for Tier 2-4. Optional for Tier 1 (simple primitives can be documented inline).

**Q: What if a component doesn't fit any tier?**

A: This is a red flag. Either:
1. The component is too specific (not reusable) → Don't build it
2. The component tries to do too much → Split it
3. The taxonomy is missing a category → Rare, discuss with team

**Q: Can I build a Tier 4 Pattern before all Tier 2 components exist?**

A: Yes, but document what's missing. Tier 4 components can use Tier 2 components that are in Beta. If a needed Tier 2 component doesn't exist yet, either:
1. Build the Tier 2 component first
2. Use a temporary implementation and create a tech debt ticket

---

## Related Documentation

- [Maturity Framework](./MATURITY_FRAMEWORK.md) - Component lifecycle and maturity levels
- [Component Documentation Template](./COMPONENT_DOCUMENTATION_TEMPLATE.md) - How to document components
- [Package Structure](./PACKAGE_STRUCTURE.md) - Folder organization

---

**Last Updated:** 2026-04-10  
**Version:** 1.0.0  
**Owner:** UX4G Design System Team

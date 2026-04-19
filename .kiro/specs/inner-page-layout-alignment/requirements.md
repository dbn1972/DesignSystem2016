# Requirements Document

## Introduction

The UX4G documentation site has 8 inner hub pages (`/foundations`, `/components`, `/patterns`, `/archetypes`, `/services`, `/resources`, `/governance`, and the implied `/systems`) that each manage their own container width, padding, hero spacing, grid ratios, and CTA button styles independently. The landing page (`UnifiedHome.tsx`) uses a consistent `mx-auto max-w-6xl px-6` (1152px max-width, 24px horizontal padding) container pattern, while inner pages diverge with `max-w-[1440px]`, `max-w-7xl` (1280px), or `max-w-[1400px]` — along with inconsistent responsive padding (`px-4`, `px-6`, `px-8`, `lg:px-12`), hero vertical spacing (`py-8` through `py-16`), grid column ratios, and CTA button border-radius values (`rounded-xl` vs `rounded-full`).

This feature standardises all 8 inner hub pages to match the landing page's visual rhythm by introducing a shared `PageContainer` component (or equivalent standardised class set) and aligning hero sections, content sections, grid ratios, and CTA button styles across every page. Work proceeds phase-by-phase (one page per phase) to keep changes reviewable and safe.

## Glossary

- **Landing_Page**: The `UnifiedHome.tsx` component rendered at `/`, serving as the layout source of truth for container width, padding, spacing, and visual rhythm.
- **Hub_Page**: One of the 8 inner index pages: Foundations, Components, Patterns, Archetypes (ServicePatternLibraries), Systems (SystemsHub), Services (ServicesHub), Resources (ResourcesHub), Governance.
- **PageContainer**: A shared React component or standardised set of Tailwind utility classes that enforces the reference container width, horizontal padding, and responsive behaviour across all Hub_Pages.
- **Hero_Section**: The top-most visual section of a Hub_Page, containing the eyebrow badge, page title, description, CTA buttons, and optional side panel/card.
- **Content_Section**: Any section below the Hero_Section on a Hub_Page that displays cards, grids, lists, or other page body content.
- **Reference_Container**: The Landing_Page's container pattern: `mx-auto max-w-6xl px-6` (1152px max-width, 24px horizontal padding on all breakpoints).
- **Reference_Grid**: The Landing_Page's two-column grid ratio pattern: `lg:grid-cols-[1.02fr_0.98fr]` (approximately equal columns).
- **Reference_Hero_Spacing**: The Landing_Page's hero vertical padding pattern: `py-16 sm:py-20 lg:py-24`.
- **Layout_Component**: The `Layout.tsx` wrapper that provides the shell (header, footer, breadcrumbs) but does not enforce a shared container.
- **CTA_Button**: A call-to-action link/button in the Hero_Section, styled as either primary (filled) or secondary (outlined).

## Requirements

### Requirement 1: Shared PageContainer Component

**User Story:** As a developer, I want a single shared PageContainer component that enforces the reference container width and padding, so that I do not need to duplicate container classes across every Hub_Page.

#### Acceptance Criteria

1. THE PageContainer SHALL render a wrapper element with the classes `mx-auto max-w-6xl px-6` matching the Reference_Container pattern.
2. THE PageContainer SHALL accept a `className` prop that merges additional classes without overriding the base container classes.
3. THE PageContainer SHALL accept an `as` prop to render as any valid HTML element (defaulting to `div`).
4. THE PageContainer SHALL accept and render child elements passed via the `children` prop.
5. WHEN the PageContainer is rendered at any viewport width, THE PageContainer SHALL constrain content to a maximum width of 1152px with 24px horizontal padding on each side.

### Requirement 2: Hero Section Alignment

**User Story:** As a user, I want every Hub_Page hero section to have the same vertical spacing, heading sizes, and visual rhythm as the Landing_Page, so that the site feels like one cohesive template family.

#### Acceptance Criteria

1. WHEN a Hub_Page Hero_Section is rendered, THE Hero_Section SHALL use vertical padding matching the Reference_Hero_Spacing pattern (`py-16 sm:py-20 lg:py-24`).
2. WHEN a Hub_Page Hero_Section contains a two-column grid, THE Hero_Section SHALL use a grid ratio within the range of `1.02fr/0.98fr` to `1.08fr/0.92fr`, consistent with the Reference_Grid.
3. THE Hero_Section heading (h1) on each Hub_Page SHALL use the size classes `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`.
4. THE Hero_Section description paragraph on each Hub_Page SHALL use the classes `text-lg sm:text-xl leading-relaxed`.
5. WHEN a Hub_Page Hero_Section contains an eyebrow badge, THE eyebrow badge SHALL use `text-xs font-semibold uppercase tracking-[0.22em]` or `tracking-[0.24em]` consistent with the Landing_Page eyebrow style.

### Requirement 3: CTA Button Style Consistency

**User Story:** As a user, I want all CTA buttons across Hub_Pages to use the same border-radius and sizing, so that interactive elements feel predictable and consistent.

#### Acceptance Criteria

1. THE primary CTA_Button on each Hub_Page SHALL use `rounded-xl` border-radius matching the Landing_Page Foundations and Patterns hero CTA style.
2. THE secondary CTA_Button on each Hub_Page SHALL use `rounded-xl border-2 border-border` matching the Landing_Page secondary CTA style.
3. THE CTA_Button sizing on each Hub_Page SHALL use `px-5 py-3 text-sm font-semibold` matching the Landing_Page CTA dimensions.
4. WHEN a Hub_Page currently uses `rounded-full` on CTA_Buttons, THE Hub_Page SHALL be updated to use `rounded-xl` instead.

### Requirement 4: Content Section Container Alignment

**User Story:** As a user, I want all content sections below the hero to use the same container width and padding as the Landing_Page, so that cards, grids, and text blocks align to the same visual edges.

#### Acceptance Criteria

1. WHEN a Content_Section is rendered on any Hub_Page, THE Content_Section SHALL use the Reference_Container pattern (`mx-auto max-w-6xl px-6`).
2. WHEN a Content_Section currently uses `max-w-[1440px]`, `max-w-[1400px]`, or `max-w-7xl`, THE Content_Section SHALL be updated to use `max-w-6xl` (1152px).
3. WHEN a Content_Section currently uses variable responsive padding (`px-4 sm:px-6 lg:px-8` or `px-6 sm:px-8 lg:px-12`), THE Content_Section SHALL be updated to use the uniform `px-6` padding.

### Requirement 5: Responsive Behaviour Preservation

**User Story:** As a user on a mobile or tablet device, I want the aligned layout to remain balanced and usable at all breakpoints, so that the experience is consistent across devices.

#### Acceptance Criteria

1. WHEN the viewport width is below 640px (mobile), THE PageContainer SHALL maintain 24px (px-6) horizontal padding and allow content to fill the remaining width.
2. WHEN the viewport width is between 640px and 1024px (tablet), THE PageContainer SHALL maintain 24px horizontal padding with content constrained to the available width up to 1152px.
3. WHEN the viewport width is 1152px or wider (desktop), THE PageContainer SHALL center content horizontally with equal left and right gutters.
4. WHEN a Hub_Page Hero_Section contains a two-column grid, THE grid SHALL collapse to a single column below the `lg` breakpoint (1024px).

### Requirement 6: Dark Mode and Accessibility Preservation

**User Story:** As a user with accessibility needs or dark mode preference, I want the layout alignment changes to preserve all existing dark mode styles, ARIA attributes, keyboard navigation, and semantic HTML, so that no accessibility regression occurs.

#### Acceptance Criteria

1. WHEN a Hub_Page is rendered in dark mode, THE Hub_Page SHALL retain all existing `dark:` variant classes on backgrounds, text, borders, and interactive elements.
2. THE layout alignment changes SHALL NOT remove or alter any existing `role`, `aria-*`, or `tabIndex` attributes on Hub_Page elements.
3. THE layout alignment changes SHALL NOT change the semantic HTML element types (e.g., `section`, `header`, `nav`, `main`) used on any Hub_Page.
4. THE layout alignment changes SHALL NOT remove or alter any existing skip-navigation links or focus management behaviour.

### Requirement 7: Phase-by-Phase Rollout

**User Story:** As a developer, I want the alignment work to proceed one Hub_Page at a time in a defined order, so that each change is reviewable, testable, and reversible independently.

#### Acceptance Criteria

1. THE alignment work SHALL proceed in the following phase order: Phase 1 — Foundations, Phase 2 — Components, Phase 3 — Patterns, Phase 4 — Archetypes (ServicePatternLibraries), Phase 5 — Systems (SystemsHub), Phase 6 — Services (ServicesHub), Phase 7 — Resources (ResourcesHub), Phase 8 — Governance.
2. WHEN a phase is completed for a Hub_Page, THE Hub_Page SHALL use the PageContainer component (or Reference_Container classes) for all container elements.
3. WHEN a phase is completed for a Hub_Page, THE Hub_Page SHALL pass visual comparison against the Landing_Page for container width, gutter alignment, and hero spacing at desktop (1440px), tablet (768px), and mobile (375px) viewports.

### Requirement 8: Content and IA Preservation

**User Story:** As a content owner, I want the layout alignment to change only container, spacing, and styling classes without altering any page content, information architecture, or route structure, so that no content is lost or rearranged.

#### Acceptance Criteria

1. THE layout alignment changes SHALL NOT add, remove, or reorder any text content, links, cards, or data on any Hub_Page.
2. THE layout alignment changes SHALL NOT modify any route paths, component imports, or lazy-loading configuration in the routing files.
3. THE layout alignment changes SHALL NOT alter any i18n translation keys or copy objects used by Hub_Pages.
4. WHEN a Hub_Page has a side panel or summary card in the Hero_Section, THE side panel or summary card SHALL remain in the same grid position relative to the heading column.

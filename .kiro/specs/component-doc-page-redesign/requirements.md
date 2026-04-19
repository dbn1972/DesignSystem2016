# Requirements Document

## Introduction

Redesign the component documentation page template for the UX4G Government of India Design System Platform. The current `ComponentDocumentation.tsx` (887 lines) produces a dense, wiki-like layout with weak visual hierarchy, over-bordered cards, and a narrow main content area. The redesign transforms it into a premium, editorial-quality documentation experience with a calm component hero, stronger typography hierarchy, reduced border fatigue, and distinct visual treatments for different section types (guidance, interactive, compliance, applied, technical). The new design must be reusable across all 78 component documentation pages, preserve all existing content and functionality, and support desktop (3-column), tablet (reduced rail), and mobile (single-column) layouts.

## Glossary

- **Component_Hero**: The top-of-page header section containing category label, large component title, summary paragraph, metadata chips (maturity, tier, category, version), and action buttons (View Source, Figma, Sandbox).
- **Component_Doc_Template**: The shared React component (`ComponentDocumentation.tsx`) that renders the documentation page for every UX4G component. Currently accepts props for name, description, category, maturity, tier, examples, accessibility, use cases, etc.
- **Section_Shell**: A reusable wrapper component that provides consistent spacing, optional tonal background, heading, and optional icon/badge for each documentation section, replacing the current bordered-card-per-section pattern.
- **Guidance_Section**: A section type for "When to Use" and "Do/Don't" content that uses tonal surfaces (e.g., green/red tints) instead of heavy borders.
- **Interactive_Section**: A section type for the Playground that uses a standout visual treatment (elevated surface, gradient header, spacious canvas).
- **Compliance_Section**: A section type for Accessibility content that uses a distinct compliance-themed treatment (shield icon, checklist styling).
- **Applied_Section**: A section type for Government Service Use Cases that uses rich scenario cards with contextual illustrations.
- **Technical_Section**: A section type for Installation, Changelog, and Research content that uses a clean, minimal treatment.
- **Component_Sidebar**: The left navigation rail (`ComponentSidebar.tsx`) showing all components grouped by category.
- **Component_TOC**: The right-side sticky table of contents (`ComponentPageTOC.tsx`) that auto-detects headings and provides scroll-spy.
- **Component_Playground**: The interactive playground component (`ComponentPlayground.tsx`) with schema-driven controls, live preview, code generation, viewport toggle, and theme toggle.
- **Do_Dont_Panel**: A side-by-side comparison panel showing correct usage (Do) and incorrect usage (Don't) with realistic examples and Preview/Code toggle.
- **Metadata_Chip**: A small pill-shaped badge displaying component metadata (maturity status, tier, category, version dates).
- **Border_Fatigue**: The visual overload caused by excessive use of bordered cards, making all sections look identical and reducing scannability.
- **Tonal_Surface**: A subtle background color shift (e.g., muted/5, primary/5) used instead of borders to create visual separation between sections.
- **Page_Container**: The shared container component (`PageContainer.tsx`) providing `mx-auto max-w-6xl px-6` constraints.

## Requirements

### Requirement 1: Premium Component Hero Section

**User Story:** As a developer browsing UX4G component documentation, I want a visually prominent and informative hero section at the top of each component page, so that I can immediately understand the component's purpose, status, and available actions.

#### Acceptance Criteria

1. WHEN a component documentation page loads, THE Component_Hero SHALL render a category label (uppercase, small text), a large component title (text-4xl font-extrabold), and a summary paragraph (text-lg, max-w-3xl).
2. WHEN a component documentation page loads, THE Component_Hero SHALL render a metadata row containing Metadata_Chips for maturity status, tier, category, and version information.
3. WHEN a component documentation page loads, THE Component_Hero SHALL render an action row with buttons for "View Source", "Open in Figma", and "Open Sandbox" where applicable.
4. THE Component_Hero SHALL use a subtle gradient background (from-card via-card to-primary/5) to distinguish it from the content area below without using a bottom border.
5. THE Component_Hero SHALL render all content within the same max-width constraint as the main content area to maintain alignment.
6. WHEN the viewport width is below 768px, THE Component_Hero SHALL stack the metadata row and action row vertically with appropriate spacing.

### Requirement 2: Redesigned Section Order and Hierarchy

**User Story:** As a developer, I want the documentation sections ordered by relevance and usage frequency, so that I can find guidance and interactive content before technical reference material.

#### Acceptance Criteria

1. THE Component_Doc_Template SHALL render sections in the following order: Component_Hero, When to Use (Guidance_Section), Do/Don't (Guidance_Section), Variants, Playground (Interactive_Section), Accessibility (Compliance_Section), Government Service Use Cases (Applied_Section), Research (Technical_Section), Installation (Technical_Section), Changelog (Technical_Section).
2. THE Component_Doc_Template SHALL remove the tab-based navigation (Overview, Props API, Examples, Code Downloads, Comparison, Tokens) and render all content as a single scrollable page with distinct sections.
3. THE Component_Doc_Template SHALL assign each section a unique `id` attribute so that the Component_TOC can link to it.
4. WHEN the Component_Doc_Template renders sections, THE Component_Doc_Template SHALL use vertical spacing of at least 48px (space-y-12) between major sections to create clear visual rhythm.

### Requirement 3: Reduced Border Fatigue

**User Story:** As a developer, I want the documentation page to feel calm and scannable rather than visually cluttered, so that I can focus on the content without visual fatigue.

#### Acceptance Criteria

1. THE Section_Shell SHALL use spacing, Tonal_Surfaces, and alignment to separate sections instead of wrapping every section in a bordered card.
2. THE Section_Shell SHALL apply bordered cards only to interactive or contained elements (Playground, code blocks, comparison tables) where a boundary is semantically meaningful.
3. THE Section_Shell SHALL support a `variant` prop with values "default", "tonal", "elevated", and "bordered" to allow different visual treatments per section type.
4. WHEN the Section_Shell variant is "tonal", THE Section_Shell SHALL render a subtle background color (e.g., bg-muted/30) with rounded corners and padding but no border.
5. WHEN the Section_Shell variant is "elevated", THE Section_Shell SHALL render with a shadow (shadow-sm), background color, and rounded corners.
6. WHEN the Section_Shell variant is "bordered", THE Section_Shell SHALL render with a single border (border-border), background color, and rounded corners.
7. WHEN the Section_Shell variant is "default", THE Section_Shell SHALL render with only spacing and no background, border, or shadow.

### Requirement 4: Wider Main Content Column

**User Story:** As a developer, I want the main documentation content to have more horizontal space, so that code examples, tables, and playground previews are not cramped.

#### Acceptance Criteria

1. THE Layout SHALL increase the maximum width of the 3-column container from max-w-[1600px] to a wider constraint or full-width with appropriate padding, giving the main content column more room.
2. WHILE the viewport width is at least 1280px (xl breakpoint), THE Layout SHALL render the Component_Sidebar at a width of 220px, the main content area as flex-1, and the Component_TOC at a width of 180px.
3. WHILE the viewport width is between 1024px and 1279px (lg breakpoint), THE Layout SHALL hide the Component_TOC and render the Component_Sidebar at 200px with the main content as flex-1.
4. WHILE the viewport width is below 1024px, THE Layout SHALL hide both the Component_Sidebar and Component_TOC and render the main content at full width.

### Requirement 5: Lighter and Less Dense Right TOC

**User Story:** As a developer, I want the right-side table of contents to be visually lighter and easier to scan, so that it serves as a subtle navigation aid without competing with the main content.

#### Acceptance Criteria

1. THE Component_TOC SHALL use increased vertical spacing between items (py-1.5 instead of py-1) and a font size of 12px with a line-height of 1.5.
2. THE Component_TOC SHALL display the active item with a left border highlight (border-primary, 2px) and primary text color, while inactive items use a lighter text color (text-muted-foreground/70).
3. THE Component_TOC SHALL use a heading of "On this page" styled as uppercase, 10px, bold, with tracking-wider and a bottom margin of at least 12px.
4. THE Component_TOC SHALL limit the displayed label text to a maximum of 40 characters, truncating with an ellipsis if longer.
5. WHEN the user scrolls the page, THE Component_TOC SHALL update the active item indicator using IntersectionObserver-based scroll-spy with a root margin of "-80px 0px -60% 0px".

### Requirement 6: Curated Left Sidebar Navigation

**User Story:** As a developer, I want the left sidebar to feel like a curated, well-organized navigation menu rather than a raw file tree, so that I can quickly find the component I need.

#### Acceptance Criteria

1. THE Component_Sidebar SHALL render category group headings with 11px uppercase text, bold weight, tracking-wider, and a bottom margin of 8px.
2. THE Component_Sidebar SHALL render component links with 13px text, 8px vertical padding, and a left padding of 12px, with a rounded-lg hover background (bg-muted/50).
3. WHEN a component link is active, THE Component_Sidebar SHALL highlight it with a primary-tinted background (bg-primary/10), primary text color, font-medium weight, and a 2px left border in primary color.
4. THE Component_Sidebar SHALL include a search/filter input at the top that filters the component list by name as the user types.
5. THE Component_Sidebar SHALL visually separate category groups with a spacing of at least 20px (mb-5) between groups.
6. THE Component_Sidebar SHALL display a component count badge next to each category heading showing the number of components in that category.

### Requirement 7: Distinct Visual Treatments for Section Types

**User Story:** As a developer, I want different types of documentation sections to have visually distinct treatments, so that I can quickly identify whether I'm looking at guidance, interactive content, compliance information, or technical reference.

#### Acceptance Criteria

1. WHEN rendering a Guidance_Section (When to Use, Do/Don't), THE Component_Doc_Template SHALL use a tonal surface with a subtle background tint and no border.
2. WHEN rendering the Do_Dont_Panel, THE Component_Doc_Template SHALL display Do examples with a green-tinted left border and background (green-50/green-900), and Don't examples with a red-tinted left border and background (red-50/red-900).
3. WHEN rendering the Do_Dont_Panel, THE Component_Doc_Template SHALL include a Preview/Code toggle allowing users to switch between a visual preview and the code for each example.
4. WHEN rendering an Interactive_Section (Playground), THE Component_Doc_Template SHALL use an elevated surface with a gradient header bar, spacious preview canvas, and a shadow to make it stand out as the primary interactive area.
5. WHEN rendering a Compliance_Section (Accessibility), THE Component_Doc_Template SHALL use a distinct treatment with a shield or compliance icon, checklist-style feature list, and a WCAG level badge.
6. WHEN rendering an Applied_Section (Government Service Use Cases), THE Component_Doc_Template SHALL render each use case as a rich scenario card with a numbered indicator, title, description, scenario context, and implementation hint.
7. WHEN rendering a Technical_Section (Installation, Changelog, Research), THE Component_Doc_Template SHALL use a clean, minimal treatment with no background tint and only subtle dividers between sub-items.

### Requirement 8: Preserve Existing Content, Dark Mode, Accessibility, and Responsiveness

**User Story:** As a developer, I want the redesign to preserve all existing functionality and content, so that no information is lost and the page remains accessible and responsive.

#### Acceptance Criteria

1. THE Component_Doc_Template SHALL continue to accept and render all existing props: name, description, category, maturity, tier, since, updated, props, examples, reactCode, angularCode, webComponentsCode, comparisons, accessibility, tokens, useCases, additionalContent, preview, governmentContext, and sandbox.
2. THE Component_Doc_Template SHALL render correctly in both light mode and dark mode, using semantic color tokens (text-foreground, bg-background, bg-card, text-muted-foreground, border-border) for all surfaces and text.
3. THE Component_Doc_Template SHALL maintain all existing keyboard navigation support, including focus management, skip links, and tab order.
4. THE Component_Doc_Template SHALL maintain all existing ARIA attributes and semantic HTML structure (section, nav, heading hierarchy, table, list elements).
5. IF a required prop (name, description, category, maturity, tier, since) is missing, THEN THE Component_Doc_Template SHALL render a fallback state with a descriptive message instead of crashing.
6. THE Component_Doc_Template SHALL render all content sections (Props API, Examples, Code Downloads, Comparison, Tokens) that were previously behind tabs as inline sections within the scrollable page.

### Requirement 9: Reusable Pattern Across All 78 Component Pages

**User Story:** As a developer maintaining the documentation site, I want the redesigned template to work as a drop-in replacement for all 78 component pages, so that I do not need to modify each page individually.

#### Acceptance Criteria

1. THE Component_Doc_Template SHALL maintain the same `ComponentDocumentationProps` interface so that all 78 existing component pages continue to compile and render without modification.
2. THE Component_Doc_Template SHALL render the `additionalContent` prop (which contains page-specific content like Playground, When to Use, Do/Don't, Related, Changelog, Research) in the correct position within the new section order.
3. WHEN a component page does not provide optional props (useCases, tokens, webComponentsCode, governmentContext, sandbox, preview), THE Component_Doc_Template SHALL gracefully omit those sections without leaving empty space or broken layout.
4. THE Component_Doc_Template SHALL export the same named export (`ComponentDocumentation`) and default export pattern so that existing import statements in all 78 pages remain valid.

### Requirement 10: Responsive Layout Support

**User Story:** As a developer using the documentation site on different devices, I want the page to adapt gracefully to desktop, tablet, and mobile viewports, so that I can read documentation comfortably on any screen.

#### Acceptance Criteria

1. WHILE the viewport width is at least 1280px (xl breakpoint), THE Layout SHALL render a 3-column layout with Component_Sidebar (left), main content (center), and Component_TOC (right).
2. WHILE the viewport width is between 768px and 1279px, THE Layout SHALL render a 2-column layout with a collapsible Component_Sidebar and the main content, hiding the Component_TOC.
3. WHILE the viewport width is below 768px, THE Layout SHALL render a single-column layout with the main content at full width, and the Component_Sidebar accessible via a hamburger menu or slide-out drawer.
4. WHEN the viewport width is below 768px, THE Component_Hero SHALL stack all elements vertically and reduce the title size to text-2xl.
5. WHEN the viewport width is below 768px, THE Do_Dont_Panel SHALL stack Do and Don't examples vertically instead of side-by-side.
6. WHEN the viewport width is below 1024px, THE Component_Playground SHALL stack the preview pane and controls pane vertically instead of side-by-side.

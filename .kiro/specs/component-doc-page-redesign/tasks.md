# Implementation Plan: Component Doc Page Redesign

## Overview

Transform the current tab-based `ComponentDocumentation.tsx` into a premium, single-scroll editorial documentation experience. Implementation proceeds bottom-up: foundational components first (SectionShell, MetadataChip, ComponentHero), then layout/sidebar/TOC improvements, then the main ComponentDocumentation rewrite, then enhanced section components, and finally integration wiring and verification.

All code is TypeScript/React with Tailwind CSS v4 styling. The existing `ComponentDocumentationProps` interface is preserved unchanged for backward compatibility with all 78 component pages.

## Tasks

- [x] 1. Create SectionShell foundation component
  - [x] 1.1 Create `src/app/components/SectionShell.tsx` with the `SectionShellProps` interface (`id`, `title`, `icon`, `badge`, `variant`, `children`, `className`)
    - Implement four variants: `default` (spacing only), `tonal` (bg-muted/30 rounded-2xl p-6 md:p-8), `elevated` (bg-card shadow-sm rounded-2xl p-6 md:p-8), `bordered` (border border-border bg-card rounded-2xl p-6 md:p-8)
    - All variants share `scroll-mt-24` for scroll-spy offset
    - Render heading as `<h2>` with `text-2xl font-bold` when `title` is provided
    - Render optional `icon` and `badge` beside the title
    - Wrap content in a `<section>` element with the provided `id`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 2.3_

  - [ ]* 1.2 Write property test for SectionShell variant class mapping
    - **Property 4: SectionShell variant class mapping**
    - **Validates: Requirements 3.3, 3.4, 3.5, 3.6, 3.7**

  - [ ]* 1.3 Write unit tests for SectionShell
    - Test each variant produces correct CSS classes
    - Test children rendering, title/icon/badge rendering
    - Test `scroll-mt-24` is present on all variants
    - Test section element has the provided `id`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 2. Create MetadataChip and ComponentHero components
  - [x] 2.1 Create `src/app/components/MetadataChip.tsx` with `MetadataChipProps` interface (`icon`, `label`, `colorClass`)
    - Render as `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm`
    - Support optional icon and custom color class
    - _Requirements: 1.2_

  - [x] 2.2 Create `src/app/components/ComponentHero.tsx` with `ComponentHeroProps` interface
    - Render category label (uppercase, small text), title (text-4xl font-extrabold), description (text-lg, max-w-3xl)
    - Render metadata row with MetadataChip components for maturity, tier, category, since, and optional updated
    - Render action row with "View Source", "Open in Figma", "Open Sandbox" buttons (sandbox conditional)
    - Use gradient background: `bg-gradient-to-br from-card via-card to-primary/5`
    - Handle invalid maturity/tier values with neutral fallback styling
    - Mobile (< 768px): stack metadata + actions vertically, title shrinks to text-2xl
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 10.4_

  - [ ]* 2.3 Write property test for Hero content completeness
    - **Property 1: Hero content completeness**
    - **Validates: Requirements 1.1, 1.2**

  - [ ]* 2.4 Write unit tests for MetadataChip and ComponentHero
    - Test MetadataChip renders label, icon, and custom color class
    - Test ComponentHero renders all maturity states correctly
    - Test ComponentHero renders without sandbox prop
    - Test ComponentHero mobile responsive classes
    - Test fallback styling for invalid maturity/tier values
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [x] 3. Checkpoint — Ensure foundation components build correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Update Layout.tsx for wider content area and responsive breakpoints
  - [x] 4.1 Modify `src/app/components/Layout.tsx`
    - Change `max-w-[1600px]` to `max-w-[1800px]`
    - At xl (≥1280px): sidebar 220px, main flex-1, TOC 180px
    - At lg (1024px–1279px): sidebar 200px, main flex-1, TOC hidden
    - Below 1024px: sidebar hidden (hamburger/drawer), main full-width
    - Preserve skip-to-main-content link and all existing WCAG support
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 10.1, 10.2, 10.3_

  - [ ]* 4.2 Write unit tests for Layout responsive behavior
    - Test 3-column at xl, 2-column at lg, 1-column below lg
    - _Requirements: 4.2, 4.3, 4.4, 10.1, 10.2, 10.3_

- [x] 5. Improve ComponentSidebar with search filter and count badges
  - [x] 5.1 Modify `src/app/components/ComponentSidebar.tsx`
    - Add search/filter input at top with Search icon from lucide-react
    - Filter component list by name (case-insensitive substring match) as user types
    - Add count badge next to each category heading showing number of components
    - Update category heading: `text-[11px] font-bold uppercase tracking-wider mb-2`
    - Update link items: `py-2 pl-3 text-[13px] rounded-lg`
    - Active link: add `border-l-2 border-primary` alongside existing `bg-primary/10`
    - Increase category spacing to `mb-5`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [ ]* 5.2 Write property test for sidebar search filtering
    - **Property 6: Sidebar search filtering**
    - **Validates: Requirements 6.4**

  - [ ]* 5.3 Write property test for sidebar category count accuracy
    - **Property 7: Sidebar category count accuracy**
    - **Validates: Requirements 6.6**

  - [ ]* 5.4 Write unit tests for ComponentSidebar
    - Test search input filters list correctly
    - Test active link highlighted with border-l-2
    - Test count badges display correct numbers
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 6. Improve ComponentPageTOC with lighter styling and label truncation
  - [x] 6.1 Modify `src/app/components/ComponentPageTOC.tsx`
    - Update heading: "On this page" — `text-[10px] font-bold uppercase tracking-[0.15em] mb-3`
    - Update items: `text-[12px] leading-relaxed py-1.5` (increased from py-1)
    - Active item: `border-l-2 border-primary text-primary font-medium`
    - Inactive items: `text-muted-foreground/70` (lighter)
    - Add label truncation: `max-w-[160px] truncate` (≈40 chars at 12px)
    - Update TOC width to 180px (from 160px)
    - Scroll-spy rootMargin remains: `'-80px 0px -60% 0px'`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 6.2 Write property test for TOC label truncation
    - **Property 5: TOC label truncation**
    - **Validates: Requirements 5.4**

  - [ ]* 6.3 Write unit tests for ComponentPageTOC
    - Test "On this page" heading present
    - Test active item styling
    - Test label truncation for long labels
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 7. Checkpoint — Ensure layout and navigation components pass all tests
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Create enhanced section components (AccessibilitySection, GovernmentUseCasesSection, DoDontPanel)
  - [x] 8.1 Create `src/app/components/AccessibilitySection.tsx` with `AccessibilitySectionProps`
    - Use SectionShell variant="tonal" with ShieldCheck icon from lucide-react
    - Render WCAG level badge as MetadataChip with green tint
    - Render features as checklist with Check icons
    - Render keyboard support as clean table
    - Render screen reader notes as info list
    - _Requirements: 7.5, 8.4_

  - [x] 8.2 Create `src/app/components/GovernmentUseCasesSection.tsx` with `GovernmentUseCasesSectionProps`
    - Use SectionShell variant="default"
    - Render each use case as a rich scenario card with numbered indicator (w-10 h-10 rounded-xl bg-primary/10), title, description, scenario, implementation hint
    - Hover: `hover:border-primary/30 hover:shadow-md transition-all`
    - Gracefully omit optional fields (scenario, implementation)
    - _Requirements: 7.6_

  - [x] 8.3 Create `src/app/components/DoDontPanel.tsx` with `DoDontPanelProps` interface
    - Do panel: `border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/20 rounded-xl p-5`
    - Don't panel: `border-l-4 border-red-500 bg-red-50/50 dark:bg-red-950/20 rounded-xl p-5`
    - Include Preview/Code toggle (tab pair) at top of each panel
    - Mobile (< 768px): stack vertically
    - _Requirements: 7.2, 7.3, 10.5_

  - [ ]* 8.4 Write property test for use case card field completeness
    - **Property 8: Use case card field completeness**
    - **Validates: Requirements 7.6**

  - [ ]* 8.5 Write unit tests for AccessibilitySection, GovernmentUseCasesSection, and DoDontPanel
    - Test AccessibilitySection: shield icon present, WCAG badge rendered, checklist items rendered
    - Test GovernmentUseCasesSection: numbered indicators sequential, optional fields omitted gracefully
    - Test DoDontPanel: Preview/Code toggle switches content, green/red styling applied correctly, mobile stacking
    - _Requirements: 7.2, 7.3, 7.5, 7.6_

- [x] 9. Rewrite ComponentDocumentation.tsx as single-scroll layout
  - [x] 9.1 Rewrite `src/app/components/ComponentDocumentation.tsx`
    - Remove tab-based navigation (`activeTab` state, tab bar, tab content switching)
    - Replace with vertically stacked single-scroll layout using `space-y-12` between major sections
    - Render ComponentHero at top (replaces current header + tab bar)
    - Render sections in design order: Hero → additionalContent → Examples → Props API → Code Downloads → Accessibility → Use Cases → Comparison → Tokens → Installation → Changelog/Research
    - Use SectionShell with appropriate variants for each section (bordered for Props/Code/Comparison/Tokens, tonal for Accessibility, default for Use Cases/Installation/Changelog)
    - Assign unique `id` to each section for TOC scroll-spy
    - Use AccessibilitySection component for accessibility content
    - Use GovernmentUseCasesSection component for use cases
    - Preserve the existing `ComponentDocumentationProps` interface exactly — same named export and default export pattern
    - Preserve all existing content rendering (Props API table, Examples, Code Downloads, Comparison table, Token Mappings)
    - Add missing required prop fallback: render descriptive message instead of crashing
    - Handle empty arrays: omit sections for empty examples/comparisons/useCases, show "No props documented yet" for empty props
    - Wrap additionalContent in error boundary
    - Preserve all dark mode semantic color tokens, ARIA attributes, keyboard navigation, semantic HTML
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 7.1, 7.4, 7.7, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2, 9.3, 9.4_

  - [ ]* 9.2 Write property test for section rendering order
    - **Property 2: Section rendering order**
    - **Validates: Requirements 2.1**

  - [ ]* 9.3 Write property test for section ID uniqueness
    - **Property 3: Section ID uniqueness**
    - **Validates: Requirements 2.3**

  - [ ]* 9.4 Write property test for semantic HTML structure preservation
    - **Property 9: Semantic HTML structure preservation**
    - **Validates: Requirements 8.1, 8.4**

  - [ ]* 9.5 Write property test for graceful optional prop omission
    - **Property 10: Graceful optional prop omission**
    - **Validates: Requirements 9.2, 9.3**

  - [ ]* 9.6 Write unit tests for ComponentDocumentation rewrite
    - Test all sections rendered inline (no tabs)
    - Test fallback for missing required props
    - Test backward compatibility with existing prop shapes
    - Test empty array handling
    - Test additionalContent error boundary
    - Test dark mode semantic color tokens used throughout
    - _Requirements: 2.1, 2.2, 8.1, 8.2, 8.5, 9.1, 9.2, 9.3, 9.4_

- [x] 10. Checkpoint — Ensure full rewrite compiles and all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. Build verification and visual regression tests
  - [x] 11.1 Run full build verification
    - Run `pnpm run verify` to confirm typecheck + build + a11y tests pass
    - Verify no TypeScript errors across all 78 component pages that import ComponentDocumentation
    - _Requirements: 8.1, 9.1, 9.4_

  - [ ]* 11.2 Write Playwright visual regression tests
    - Add visual regression tests in `tests/visual/` for a representative component page (e.g., Alert)
    - Capture screenshots at 1440px, 1024px, and 375px viewports
    - Capture both light and dark mode variants
    - _Requirements: 8.2, 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 12. Final checkpoint — Ensure all tests pass and build is clean
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after each major phase
- Property tests validate universal correctness properties from the design document using Vitest + fast-check
- Unit tests validate specific examples and edge cases using Vitest + Testing Library
- The existing `ComponentDocumentationProps` interface is never modified — all 78 pages remain compatible

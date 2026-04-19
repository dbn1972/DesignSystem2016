# Implementation Plan: Inner Page Layout Alignment

## Overview

Standardise the 8 inner hub pages to match the landing page's visual rhythm by creating a shared `PageContainer` component and migrating each page phase-by-phase. Each phase replaces container divs with `PageContainer`, aligns hero spacing, grid ratios, heading sizes, CTA styles, and content section containers to the reference pattern (`mx-auto max-w-6xl px-6`).

## Tasks

- [x] 1. Create PageContainer component and tests
  - [x] 1.1 Create `src/app/components/PageContainer.tsx`
    - Implement the polymorphic `PageContainer` component with `as`, `className`, and `children` props
    - Use `cn()` from `@/app/react-core-package/src/utils/cn` for class merging
    - Export `BASE_CLASSES` constant as `"mx-auto max-w-6xl px-6"`
    - Set `displayName` to `"PageContainer"`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [ ]* 1.2 Write unit tests for PageContainer
    - Create `src/app/components/__tests__/PageContainer.test.tsx`
    - Test: renders base classes `mx-auto max-w-6xl px-6` with no extra props
    - Test: merges additional `className` without overriding base classes
    - Test: `as` prop renders the correct HTML element (e.g., `section`)
    - Test: renders children correctly
    - Test: defaults to `div` when no `as` prop provided
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ]* 1.3 Write property test for PageContainer base class invariant
    - Install `fast-check` as a dev dependency (`pnpm add -D fast-check`)
    - Create property test in `src/app/components/__tests__/PageContainer.test.tsx` (or separate file)
    - **Property 1: PageContainer base class invariant**
    - For any arbitrary `className` string (including undefined, empty, random Tailwind classes), the rendered element SHALL always contain `mx-auto`, `max-w-6xl`, and `px-6`
    - Use `fc.option(fc.string())` to generate className values, minimum 100 iterations
    - **Validates: Requirements 1.1, 1.2**

- [x] 2. Phase 1 — Migrate Foundations page
  - [x] 2.1 Update `src/app/pages/Foundations.tsx` to use PageContainer
    - Import `PageContainer` from `@/app/components/PageContainer`
    - Replace hero container `mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8` div with `<PageContainer>`
    - Update hero vertical padding to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.08fr/0.92fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Verify h1 already uses `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` (adjust if needed)
    - Verify CTAs already use `rounded-xl` (Foundations is marked ✓ in audit)
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 4.1, 4.2, 4.3, 5.1, 5.4, 6.1, 6.2, 6.3, 7.1, 7.2, 8.1, 8.4_

  - [ ]* 2.2 Write migration verification tests for Foundations
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify hero has `py-16` spacing class
    - Verify h1 has `text-4xl` size class
    - Verify no CTA buttons use `rounded-full`
    - Verify `dark:` variant classes are preserved on key elements
    - _Requirements: 2.1, 2.3, 3.1, 4.1, 6.1_

- [x] 3. Checkpoint — Verify Foundations migration
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Phase 2 — Migrate Components hub page
  - [x] 4.1 Update `src/app/pages/Components.tsx` to use PageContainer
    - Replace hero container `max-w-7xl px-4 sm:px-6 lg:px-8` div with `<PageContainer>`
    - Update hero vertical padding from `py-8 lg:py-10` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.2fr/0.8fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Update CTA buttons from `rounded-full` to `rounded-xl`
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 3.1, 3.4, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 4.2 Write migration verification tests for Components
    - Verify hero container uses `max-w-6xl` (not `max-w-7xl`)
    - Verify hero has `py-16` spacing class
    - Verify CTA buttons use `rounded-xl` (not `rounded-full`)
    - Verify content sections use `max-w-6xl`
    - _Requirements: 2.1, 3.1, 3.4, 4.1, 4.2_

- [x] 5. Phase 3 — Migrate Patterns page
  - [x] 5.1 Update `src/app/pages/Patterns.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-4 sm:px-6 lg:px-8` div with `<PageContainer>`
    - Update hero vertical padding from `py-10 sm:py-12 lg:py-14` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.14fr/0.86fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Verify CTAs already use `rounded-xl` (Patterns is marked ✓ in audit)
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 5.2 Write migration verification tests for Patterns
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify hero has `py-16` spacing class
    - Verify content sections use `max-w-6xl`
    - _Requirements: 2.1, 4.1, 4.2_

- [x] 6. Checkpoint — Verify Phases 2–3
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Phase 4 — Migrate Archetypes page
  - [x] 7.1 Update `src/app/pages/ServicePatternLibraries.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-6 sm:px-8 lg:px-12` div with `<PageContainer>`
    - Update hero vertical padding from `py-10 sm:py-12 lg:py-14` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.2fr/0.8fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Update CTA buttons from `rounded-full` to `rounded-xl`
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 3.1, 3.4, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 7.2 Write migration verification tests for Archetypes
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify CTA buttons use `rounded-xl` (not `rounded-full`)
    - Verify content sections use `max-w-6xl` with `px-6`
    - _Requirements: 3.1, 3.4, 4.1, 4.3_

- [x] 8. Phase 5 — Migrate Systems page
  - [x] 8.1 Update `src/app/pages/SystemsHub.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-4 sm:px-6 lg:px-8` div with `<PageContainer>`
    - Update hero vertical padding from `py-10 sm:py-12 lg:py-14` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.2fr/0.8fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Verify CTAs already use `rounded-xl` (Systems is marked ✓ in audit)
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 8.2 Write migration verification tests for Systems
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify hero has `py-16` spacing class
    - Verify content sections use `max-w-6xl`
    - _Requirements: 2.1, 4.1, 4.2_

- [x] 9. Checkpoint — Verify Phases 4–5
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Phase 6 — Migrate Services page
  - [x] 10.1 Update `src/app/pages/ServicesHub.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-6 sm:px-8 lg:px-12` div with `<PageContainer>`
    - Update hero vertical padding from `py-10 sm:py-12 lg:py-14` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.15fr/0.85fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Update CTA buttons from `rounded-full` to `rounded-xl`
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 3.1, 3.4, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 10.2 Write migration verification tests for Services
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify CTA buttons use `rounded-xl` (not `rounded-full`)
    - Verify content sections use uniform `px-6` padding
    - _Requirements: 3.1, 3.4, 4.1, 4.3_

- [x] 11. Phase 7 — Migrate Resources page
  - [x] 11.1 Update `src/app/pages/ResourcesHub.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-6 sm:px-8 lg:px-12` div with `<PageContainer>`
    - Update hero vertical padding from `py-8 sm:py-10 lg:py-12` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.15fr/0.85fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Update CTA buttons from `rounded-full` to `rounded-xl`
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 3.1, 3.4, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 11.2 Write migration verification tests for Resources
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify hero has `py-16` spacing class (was `py-8`, largest delta)
    - Verify CTA buttons use `rounded-xl` (not `rounded-full`)
    - _Requirements: 2.1, 3.1, 3.4, 4.1_

- [x] 12. Checkpoint — Verify Phases 6–7
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Phase 8 — Migrate Governance page
  - [x] 13.1 Update `src/app/pages/Governance.tsx` to use PageContainer
    - Replace hero container `max-w-[1440px] px-6 sm:px-8 lg:px-12` div with `<PageContainer>`
    - Update hero vertical padding from `py-10 sm:py-12 lg:py-14` to `py-16 sm:py-20 lg:py-24`
    - Update hero grid ratio from `1.15fr/0.85fr` to `1.05fr/0.95fr` and gap to `gap-12`
    - Update h1 to `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` if not already
    - Update CTA buttons from `rounded-full` to `rounded-xl`
    - Replace all content section container divs with `<PageContainer>`
    - Preserve all `dark:` variant classes, `aria-*` attributes, and semantic HTML elements
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 3.1, 3.4, 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 7.1, 8.1, 8.4_

  - [ ]* 13.2 Write migration verification tests for Governance
    - Verify hero container uses `max-w-6xl` (not `max-w-[1440px]`)
    - Verify CTA buttons use `rounded-xl` (not `rounded-full`)
    - Verify content sections use `max-w-6xl` with uniform `px-6`
    - _Requirements: 3.1, 3.4, 4.1, 4.3_

- [x] 14. Final checkpoint — Cross-page QA review
  - Ensure all tests pass, ask the user if questions arise.
  - Verify no hub page uses `max-w-[1440px]`, `max-w-[1400px]`, or `max-w-7xl` in container elements
  - Verify all 8 hub pages import and use `PageContainer`
  - Verify `routes.tsx` has no modifications (Requirement 8.2)
  - Verify no i18n translation keys were added, removed, or renamed (Requirement 8.3)

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after every 2–3 page migrations
- Property test (task 1.3) validates the universal base-class invariant from the design's Correctness Properties section
- The design uses TypeScript/React — all code examples and implementations use TSX
- `fast-check` must be installed as a dev dependency before running property tests (task 1.3)
- The `cn()` utility at `src/app/react-core-package/src/utils/cn.ts` is used for class merging (project convention)

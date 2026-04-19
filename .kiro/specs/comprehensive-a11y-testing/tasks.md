# Implementation Plan: Comprehensive Accessibility Testing

## Overview

Build a reusable accessibility test helper module and roll out standardized WCAG 2.1 AA axe scans + keyboard navigation tests across all 54 tiered components. Implementation follows the 4-phase rollout: infrastructure → Tier 1 (interactive) → Tier 2 (nav/feedback) → Tier 3 (static/layout). The `test:a11y` script is updated to use glob + grep for automatic coverage expansion.

## Tasks

- [x] 1. Create a11y-helpers module and infrastructure
  - [x] 1.1 Create `src/test/a11y-helpers.ts` with `DEFAULT_AXE_CONFIG`, `COMPONENT_TIERS`, `checkA11y`, `assertA11y`, and `assertA11yStates` exports
    - `DEFAULT_AXE_CONFIG` targets `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` tags
    - `COMPONENT_TIERS` contains tier1 (28), tier2 (10), tier3 (16) component name arrays
    - `checkA11y(container, overrides?)` returns `AxeResults` with merged config
    - `assertA11y(ui, overrides?)` renders element, runs axe, asserts no violations
    - `assertA11yStates(states, overrides?)` iterates `{ name, ui }[]`, asserts each state, unmounts between states
    - Re-export `AxeResults` from `vitest-axe` and `RunOptions` from `axe-core`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 6.1, 6.2, 6.3_

  - [x] 1.2 Create unit tests for a11y-helpers at `src/test/a11y-helpers.test.ts`
    - Test `checkA11y` returns `AxeResults` with `violations` array for accessible element
    - Test `DEFAULT_AXE_CONFIG.runOnly.values` contains all 4 WCAG tags
    - Test `assertA11y` passes for `<button>Click</button>` and fails for `<img>` without `alt`
    - Test override config disables a specific rule (e.g., `image-alt`)
    - Test `assertA11yStates` passes for all-accessible states and fails when one state is inaccessible
    - Test `COMPONENT_TIERS` tier arrays are non-empty and contain expected key components
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.6_

  - [ ]* 1.3 Write property test: checkA11y returns valid AxeResults for any container
    - **Property 1: checkA11y returns valid AxeResults for any container**
    - Generate random valid HTML elements (empty div, div with text, nested elements) using fast-check
    - Verify `checkA11y(container)` returns object with `violations` array property for each
    - **Validates: Requirement 1.1**

  - [ ]* 1.4 Write property test: assertA11y passes for accessible elements and fails for inaccessible elements
    - **Property 2: assertA11y passes for any accessible element and fails for any inaccessible element**
    - Generate accessible elements (buttons with text, headings, labeled inputs) → verify no throw
    - Generate inaccessible elements (img without alt, input without label) → verify throw
    - **Validates: Requirement 1.3**

  - [ ]* 1.5 Write property test: Rule overrides are respected
    - **Property 3: Rule overrides are respected for any override configuration**
    - Generate axe rule IDs that would produce violations → create override disabling that rule
    - Verify `checkA11y` results exclude violations for the disabled rule
    - **Validates: Requirement 1.4**

  - [ ]* 1.6 Write property test: assertA11yStates scans every provided state
    - **Property 4: assertA11yStates scans every provided state**
    - Generate arrays of accessible `{ name, ui }` states → verify no throw
    - Inject one inaccessible state into the array → verify throw
    - **Validates: Requirement 1.6**

  - [x] 1.7 Update `test:a11y` script in `package.json` to use glob + grep pattern
    - Change from hardcoded 4-file list to: `vitest --run --grep 'Accessibility' src/app/react-core-package/src/components/*/*.test.tsx`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 2. Checkpoint — Verify infrastructure
  - Ensure all a11y-helpers unit tests and property tests pass, ask the user if questions arise.


- [x] 3. Tier 1 — Interactive widget accessibility tests (batch 1: form controls)
  - [x] 3.1 Add Accessibility describe block to `Button.test.tsx`
    - Default state axe scan, disabled state, loading state, variant scan via `assertA11yStates`
    - Keyboard navigation: Tab focus, Enter activation, Space activation
    - Import helpers from `@/test/a11y-helpers`
    - _Requirements: 2.1, 2.2, 2.4, 2.5, 2.6, 3.1, 3.2, 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 3.2 Add Accessibility describe block to `Checkbox.test.tsx`
    - Default state axe scan, disabled state, error state
    - Keyboard navigation: Tab focus, Space toggle
    - _Requirements: 2.1, 2.2, 2.3, 2.6, 3.1, 3.2, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.3 Add Accessibility describe block to `Radio.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Arrow key navigation between options
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 3.3, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.4 Add Accessibility describe block to `Switch.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Space toggle, Enter toggle
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.5 Add Accessibility describe block to `Input.test.tsx`
    - Default state axe scan, disabled state, error state
    - Keyboard navigation: Tab focus, typing input
    - _Requirements: 2.1, 2.2, 2.3, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.6 Add Accessibility describe block to `Textarea.test.tsx`
    - Default state axe scan, disabled state, error state
    - Keyboard navigation: Tab focus, typing input
    - _Requirements: 2.1, 2.2, 2.3, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.7 Add Accessibility describe block to `Select.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Enter/Space to open, Arrow key navigation, Escape to close
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.8 Add Accessibility describe block to `Slider.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Arrow key value adjustment
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.3, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.9 Add Accessibility describe block to `Rating.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Arrow key navigation
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.3, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.10 Add Accessibility describe block to `FileUpload.test.tsx`
    - Default state axe scan, disabled state, loading state
    - Keyboard navigation: Tab focus, Enter/Space activation
    - _Requirements: 2.1, 2.2, 2.4, 2.6, 3.1, 3.2, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.11 Add Accessibility describe block to `OTPInput.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, typing input
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.12 Add Accessibility describe block to `SearchBar.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, typing input
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.13 Add Accessibility describe block to `DatePicker.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, Enter/Space to open calendar, Arrow key date navigation, Escape to close
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 3.14 Add Accessibility describe block to `Autocomplete.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus, typing to filter, Arrow key navigation in suggestions, Enter to select, Escape to close
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.4, 4.5_

- [x] 4. Checkpoint — Verify Tier 1 batch 1
  - Ensure all form control accessibility tests pass, ask the user if questions arise.


- [x] 5. Tier 1 — Interactive widget accessibility tests (batch 2: overlays, navigation, composite)
  - [x] 5.1 Add Accessibility describe block to `Dialog.test.tsx`
    - Default state axe scan (open state)
    - Keyboard navigation: Tab focus trap, Escape to close
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.2 Add Accessibility describe block to `Modal.test.tsx`
    - Default state axe scan (open state)
    - Keyboard navigation: Tab focus trap, Escape to close
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.3 Add Accessibility describe block to `Drawer.test.tsx`
    - Default state axe scan (open state)
    - Keyboard navigation: Tab focus trap, Escape to close
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.4 Add Accessibility describe block to `Popover.test.tsx`
    - Default state axe scan (open state)
    - Keyboard navigation: Tab focus, Escape to close
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.5 Add Accessibility describe block to `Tooltip.test.tsx`
    - Default state axe scan (visible state)
    - Keyboard navigation: Tab focus to trigger, Escape to dismiss
    - _Requirements: 2.1, 2.6, 3.1, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.6 Add Accessibility describe block to `Dropdown.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus, Enter/Space to open, Arrow key navigation, Escape to close
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.7 Add Accessibility describe block to `Menu.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Arrow key navigation, Home/End, Enter to select
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.3, 3.5, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.8 Add Accessibility describe block to `Tabs.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus, Arrow key navigation between tabs, Home/End
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 3.3, 3.5, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.9 Add Accessibility describe block to `Accordion.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus, Enter/Space to expand/collapse, Arrow key navigation, Home/End
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.3, 3.5, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.10 Add Accessibility describe block to `TreeView.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Arrow key navigation (up/down/left/right), Home/End, Enter to expand/collapse
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.3, 3.5, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.11 Add Accessibility describe block to `Table.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus to interactive elements within table
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.12 Add Accessibility describe block to `Pagination.test.tsx`
    - Default state axe scan, disabled state
    - Keyboard navigation: Tab focus between page controls, Enter/Space activation
    - _Requirements: 2.1, 2.2, 2.6, 3.1, 3.2, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.13 Add Accessibility describe block to `Stepper.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus between steps
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 4.1, 4.2, 4.4, 4.5_

  - [x] 5.14 Add Accessibility describe block to `Toast.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus to dismiss action, Escape to dismiss
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 3.4, 4.1, 4.2, 4.4, 4.5_

- [x] 6. Checkpoint — Verify Tier 1 complete
  - Ensure all Tier 1 interactive widget accessibility tests pass, ask the user if questions arise.


- [-] 7. Tier 2 — Navigation and feedback component accessibility tests
  - [x] 7.1 Add Accessibility describe block to `Alert.test.tsx`
    - Default state axe scan, variant scan (info, success, warning, error)
    - Keyboard navigation: Tab focus to close button (when present), Enter/Space to dismiss
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 3.2, 4.1, 4.2, 4.4, 4.5_

  - [x] 7.2 Add Accessibility describe block to `Breadcrumb.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus between breadcrumb links
    - _Requirements: 2.1, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.3 Add Accessibility describe block to `Header.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus through header interactive elements
    - _Requirements: 2.1, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.4 Add Accessibility describe block to `Footer.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus through footer links
    - _Requirements: 2.1, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.5 Add Accessibility describe block to `NavigationMenu.test.tsx`
    - Default state axe scan
    - Keyboard navigation: Tab focus, Arrow key navigation, Enter to select, Escape to close submenus
    - _Requirements: 2.1, 2.6, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.4, 4.5_

  - [x] 7.6 Add Accessibility describe block to `Notification.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus to dismiss action
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.7 Add Accessibility describe block to `Progress.test.tsx`
    - Default state axe scan, loading state
    - _Requirements: 2.1, 2.4, 2.6, 4.1, 4.2, 4.5_

  - [x] 7.8 Add Accessibility describe block to `Snackbar.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus to action button
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.9 Add Accessibility describe block to `Tag.test.tsx`
    - Default state axe scan, variant scan
    - Keyboard navigation: Tab focus to dismiss button (when removable)
    - _Requirements: 2.1, 2.5, 2.6, 3.1, 4.1, 4.2, 4.5_

  - [x] 7.10 Add Accessibility describe block to `Timeline.test.tsx`
    - Default state axe scan, variant scan
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

- [x] 8. Checkpoint — Verify Tier 2 complete
  - Ensure all Tier 2 navigation/feedback accessibility tests pass, ask the user if questions arise.

- [x] 9. Tier 3 — Static and layout component accessibility tests
  - [x] 9.1 Add Accessibility describe block to `Avatar.test.tsx`
    - Default state axe scan, variant scan (with image, with initials, with fallback)
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.2 Add Accessibility describe block to `Badge.test.tsx`
    - Default state axe scan, variant scan
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.3 Add Accessibility describe block to `Card.test.tsx`
    - Default state axe scan, variant scan
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.4 Add Accessibility describe block to `Center.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.5 Add Accessibility describe block to `Container.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.6 Add Accessibility describe block to `Divider.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.7 Add Accessibility describe block to `EmptyState.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.8 Add Accessibility describe block to `Flex.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.9 Add Accessibility describe block to `Grid.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.10 Add Accessibility describe block to `List.test.tsx`
    - Default state axe scan, variant scan
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.11 Add Accessibility describe block to `Section.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.12 Add Accessibility describe block to `Skeleton.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.13 Add Accessibility describe block to `Spacer.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.14 Add Accessibility describe block to `Spinner.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.15 Add Accessibility describe block to `Stack.test.tsx`
    - Default state axe scan
    - _Requirements: 2.1, 2.6, 4.1, 4.2, 4.5_

  - [x] 9.16 Add Accessibility describe block to `Statistic.test.tsx`
    - Default state axe scan, variant scan
    - _Requirements: 2.1, 2.5, 2.6, 4.1, 4.2, 4.5_

- [x] 10. Final checkpoint — Verify full suite
  - Ensure all accessibility tests pass across all tiers via `pnpm run test:a11y`, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after each phase
- Property tests validate the 4 correctness properties from the design using fast-check
- All component test files use the standardized `describe('Accessibility', ...)` block pattern
- Keyboard navigation tests are included only for interactive components (Tier 1 and applicable Tier 2)
- The glob + grep `test:a11y` script automatically picks up new Accessibility blocks as they are added

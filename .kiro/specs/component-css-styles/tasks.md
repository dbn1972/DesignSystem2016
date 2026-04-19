# Implementation Plan: Component CSS Styles

## Overview

Create 59 missing CSS files in `src/app/styles-package/src/components/`, one per React component, bringing the total from 28 to 87. Each file follows the established template: base → sub-elements → variants → states → sizes → pseudo-classes → reduced-motion. All values use `var(--ux4g-*, fallback)` design tokens. Interactive elements get `:focus-visible` indicators, animated elements get `prefers-reduced-motion` overrides.

Implementation proceeds in 5 waves matching the design's dependency order. After each wave, `components/index.css` is updated with new `@import` statements. After all waves, a build verification confirms the full bundle compiles.

## Tasks

- [x] 1. Wave 1 — Layout Primitives (8 files)
  - [x] 1.1 Create `src/app/styles-package/src/components/container.css`
    - Define `.ux4g-container` with `width: 100%`, `max-width` via `--ux4g-sizing-container-7xl`, `margin-inline: auto`, responsive `padding-inline` via spacing tokens
    - Define size variants `.ux4g-container-sm`, `.ux4g-container-md`, `.ux4g-container-lg`, `.ux4g-container-xl` with different `max-width` values
    - Include file header comment referencing `Container.tsx` class contract
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.3, 3.5, 7.1, 7.2, 7.7, 12.1, 12.2, 12.3, 13.1, 20.1, 20.2, 20.4_

  - [x] 1.2 Create `src/app/styles-package/src/components/flex.css`
    - Define `.ux4g-flex` with `display: flex` and `gap` via spacing tokens
    - Define modifier classes: `.ux4g-flex-row`, `.ux4g-flex-col`, `.ux4g-flex-wrap`, `.ux4g-flex-nowrap`
    - Define alignment modifiers: `.ux4g-flex-center`, `.ux4g-flex-start`, `.ux4g-flex-end`, `.ux4g-flex-between`, `.ux4g-flex-around`
    - _Requirements: 1.1, 1.2, 7.1, 7.2, 7.7, 12.1, 12.2, 13.2, 20.1, 20.2, 20.4_

  - [x] 1.3 Create `src/app/styles-package/src/components/grid.css`
    - Define `.ux4g-grid` with `display: grid` and `gap` via spacing tokens
    - Define column modifiers: `.ux4g-grid-cols-1` through `.ux4g-grid-cols-12`
    - Define responsive column variants
    - _Requirements: 1.1, 1.2, 7.1, 7.2, 7.7, 12.1, 12.2, 13.3, 20.1, 20.2, 20.4_

  - [x] 1.4 Create `src/app/styles-package/src/components/stack.css`
    - Define `.ux4g-stack` with `display: flex`, `flex-direction: column`, `gap` via spacing tokens
    - Define `.ux4g-stack-horizontal` toggling to `flex-direction: row`
    - Define gap modifiers: `.ux4g-stack-gap-sm`, `.ux4g-stack-gap-md`, `.ux4g-stack-gap-lg`
    - _Requirements: 1.1, 1.2, 7.1, 7.2, 7.7, 12.1, 12.2, 13.4, 20.1, 20.2, 20.4_

  - [x] 1.5 Create `src/app/styles-package/src/components/center.css`
    - Define `.ux4g-center` with `display: flex`, `align-items: center`, `justify-content: center`
    - _Requirements: 1.1, 1.2, 7.1, 7.7, 12.1, 12.2, 13.5, 20.1, 20.2, 20.4_

  - [x] 1.6 Create `src/app/styles-package/src/components/spacer.css`
    - Define `.ux4g-spacer` with configurable `height` and `width` via spacing tokens
    - Define size modifiers: `.ux4g-spacer-sm`, `.ux4g-spacer-md`, `.ux4g-spacer-lg`, `.ux4g-spacer-xl`
    - _Requirements: 1.1, 1.2, 7.1, 7.2, 7.7, 12.1, 12.2, 13.6, 20.1, 20.2, 20.4_

  - [x] 1.7 Create `src/app/styles-package/src/components/section.css`
    - Define `.ux4g-section` with `padding-block` via spacing tokens and semantic background color
    - _Requirements: 1.1, 1.2, 3.1, 3.5, 7.1, 7.2, 7.7, 12.1, 12.2, 20.1, 20.2, 20.4_

  - [x] 1.8 Create `src/app/styles-package/src/components/aspect-ratio.css`
    - Define `.ux4g-aspect-ratio` with `position: relative`, `overflow: hidden`
    - Define ratio presets: `.ux4g-aspect-ratio-1-1`, `.ux4g-aspect-ratio-4-3`, `.ux4g-aspect-ratio-16-9`
    - _Requirements: 1.1, 1.2, 7.1, 7.7, 12.1, 12.2, 13.7, 20.1, 20.2, 20.4_

  - [x] 1.9 Update `components/index.css` with Wave 1 imports
    - Add `@import` statements for all 8 layout primitive CSS files in alphabetical order
    - _Requirements: 1.2_

- [x] 2. Checkpoint — Verify Wave 1 layout primitives
  - Ensure PostCSS build passes with `pnpm run build` in styles-package, ask the user if questions arise.

- [-] 3. Wave 2 — Form Primitives (11 files)
  - [x] 3.1 Create `src/app/styles-package/src/components/field.css`
    - Define `.ux4g-field` with `display: flex`, `flex-direction: column`, `gap` via spacing tokens, `margin-bottom`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.3, 7.1, 7.2, 7.7, 12.1, 12.2, 15.1, 20.1, 20.2, 20.4_

  - [x] 3.2 Create `src/app/styles-package/src/components/label.css`
    - Define `.ux4g-label` with `font-weight`, `font-size`, `color` via tokens
    - Define `.ux4g-label-required` with `--ux4g-color-error` indicator
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.3, 7.7, 12.1, 12.2, 15.2, 20.1, 20.2, 20.4_

  - [x] 3.3 Create `src/app/styles-package/src/components/hint-text.css`
    - Define `.ux4g-hint-text` with `--ux4g-font-size-sm`, `--ux4g-color-text-secondary`, `margin-top`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.3, 7.7, 12.1, 12.2, 15.3, 20.1, 20.2, 20.4_

  - [x] 3.4 Create `src/app/styles-package/src/components/error-text.css`
    - Define `.ux4g-error-text` with `--ux4g-font-size-sm`, `--ux4g-color-error`, error icon/indicator
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.3, 7.7, 10.4, 12.1, 12.2, 15.4, 20.1, 20.2, 20.4_

  - [x] 3.5 Create `src/app/styles-package/src/components/file-upload.css`
    - Define `.ux4g-file-upload` base, `.ux4g-file-upload-area` dashed-border drop zone, `.ux4g-file-upload-active` drag-active state
    - Define `.ux4g-file-upload-list`, `.ux4g-file-upload-item`, `.ux4g-file-upload-remove` for file list
    - Include `:focus-visible` on interactive elements, disabled state, error state
    - Include `@media (prefers-reduced-motion: reduce)` for drag transitions
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 5.1, 5.2, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 15.5, 20.1, 20.2, 20.4_

  - [x] 3.6 Create `src/app/styles-package/src/components/otp-input.css`
    - Define `.ux4g-otp-input` row of fixed-width single-character input boxes with center-aligned text
    - Define `.ux4g-otp-input-box` individual box styles with monospace font
    - Include `:focus-visible`, disabled, error states
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.2, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 15.6, 20.1, 20.2, 20.4_

  - [x] 3.7 Create `src/app/styles-package/src/components/autocomplete.css`
    - Define `.ux4g-autocomplete` input wrapper, `.ux4g-autocomplete-list` dropdown, `.ux4g-autocomplete-item` with hover/active highlight
    - Define `.ux4g-autocomplete-loading` state
    - Include `:focus-visible`, disabled, error states, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.2, 5.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 15.7, 20.1, 20.2, 20.4_

  - [x] 3.8 Create `src/app/styles-package/src/components/date-picker.css`
    - Define `.ux4g-date-picker` base, `.ux4g-date-picker-calendar` grid layout, `.ux4g-date-picker-day` cell styles
    - Define `.ux4g-date-picker-selected`, `.ux4g-date-picker-today`, `.ux4g-date-picker-range` states
    - Define `.ux4g-date-picker-header` navigation header
    - Include `:focus-visible` on day cells and nav buttons, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 15.8, 20.1, 20.2, 20.4_

  - [x] 3.9 Create `src/app/styles-package/src/components/slider.css`
    - Define `.ux4g-slider` base, `.ux4g-slider-track`, `.ux4g-slider-fill`, `.ux4g-slider-thumb`
    - Define size variants `.ux4g-slider-sm`, `.ux4g-slider-md`, `.ux4g-slider-lg`
    - Include `:focus-visible` on thumb, disabled state, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.4, 5.5, 6.1, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 15.9, 20.1, 20.2, 20.4_

  - [x] 3.10 Create `src/app/styles-package/src/components/search-bar.css`
    - Define `.ux4g-search-bar` input with integrated search icon, `.ux4g-search-bar-icon`, `.ux4g-search-bar-clear`
    - Include `:focus-visible`, disabled state, size variants
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.4, 5.5, 6.1, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 15.10, 20.1, 20.2, 20.4_

  - [x] 3.11 Create `src/app/styles-package/src/components/form-builder.css`
    - Define `.ux4g-form-builder` wrapper, `.ux4g-form-builder-section`, `.ux4g-form-builder-row`
    - Define layout for multi-step form structure
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 20.1, 20.2, 20.4_

  - [x] 3.12 Update `components/index.css` with Wave 2 imports
    - Add `@import` statements for all 11 form primitive CSS files in alphabetical order
    - _Requirements: 1.2_

- [x] 4. Checkpoint — Verify Wave 2 form primitives
  - Ensure PostCSS build passes, ask the user if questions arise.

- [-] 5. Wave 3 — Data Display (12 files)
  - [ ] 5.1 Create `src/app/styles-package/src/components/accordion.css`
    - Define `.ux4g-accordion` base, `.ux4g-accordion-item` with border-bottom, `.ux4g-accordion-header` with flex layout and chevron indicator
    - Define `.ux4g-accordion-content` with expand/collapse transition, `.ux4g-accordion-item-open` state
    - Define `.ux4g-accordion-disabled` state
    - Include `:focus-visible` on header, `:hover` and `:active` on header, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 4.3, 5.1, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 16.1, 20.1, 20.2, 20.4_

  - [ ] 5.2 Create `src/app/styles-package/src/components/data-grid.css`
    - Define `.ux4g-data-grid` table-like layout, `.ux4g-data-grid-header`, `.ux4g-data-grid-row`, `.ux4g-data-grid-cell`
    - Define `.ux4g-data-grid-sortable` column indicator, `.ux4g-data-grid-row-hover`, `.ux4g-data-grid-row-selected`
    - Define `.ux4g-data-grid-pagination` area
    - Include `:focus-visible` on sortable headers and rows, `:hover` on rows
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 16.2, 20.1, 20.2, 20.4_

  - [ ] 5.3 Create `src/app/styles-package/src/components/description-list.css`
    - Define `.ux4g-description-list` base, `.ux4g-description-list-term`, `.ux4g-description-list-detail`
    - Define `.ux4g-description-list-horizontal` optional horizontal layout
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 16.3, 20.1, 20.2, 20.4_

  - [ ] 5.4 Create `src/app/styles-package/src/components/list.css`
    - Define `.ux4g-list` base with consistent item spacing, `.ux4g-list-item`
    - Define `.ux4g-list-ordered`, `.ux4g-list-unordered` with bullet/number styling
    - Define nested list indentation
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 16.4, 20.1, 20.2, 20.4_

  - [ ] 5.5 Create `src/app/styles-package/src/components/statistic.css`
    - Define `.ux4g-statistic` base, `.ux4g-statistic-value`, `.ux4g-statistic-label`, `.ux4g-statistic-trend`
    - Define size variants `.ux4g-statistic-sm`, `.ux4g-statistic-md`, `.ux4g-statistic-lg`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 6.1, 7.1, 7.7, 12.1, 12.2, 12.4, 16.5, 20.1, 20.2, 20.4_

  - [ ] 5.6 Create `src/app/styles-package/src/components/timeline.css`
    - Define `.ux4g-timeline` vertical line, `.ux4g-timeline-item`, `.ux4g-timeline-node`, `.ux4g-timeline-content`
    - Define `.ux4g-timeline-alternate` for alternating layout
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 16.6, 20.1, 20.2, 20.4_

  - [ ] 5.7 Create `src/app/styles-package/src/components/tree-view.css`
    - Define `.ux4g-tree-view` base, `.ux4g-tree-view-node`, `.ux4g-tree-view-children` with nested indentation
    - Define `.ux4g-tree-view-node-selected`, `.ux4g-tree-view-node-expanded` states
    - Include `:focus-visible` on nodes, `:hover` and `:active`, expand/collapse transition, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 16.7, 20.1, 20.2, 20.4_

  - [ ] 5.8 Create `src/app/styles-package/src/components/code-block.css`
    - Define `.ux4g-code-block` monospace container with syntax-area background, `.ux4g-code-block-lines` line numbers, `.ux4g-code-block-copy` button positioning
    - Include `:focus-visible` on copy button
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 16.8, 20.1, 20.2, 20.4_

  - [ ] 5.9 Create `src/app/styles-package/src/components/rating.css`
    - Define `.ux4g-rating` base, `.ux4g-rating-item` star/icon with `.ux4g-rating-item-filled`, `.ux4g-rating-item-half`, `.ux4g-rating-item-empty` states
    - Define `.ux4g-rating-hover` preview state, size variants
    - Include `:focus-visible`, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 6.1, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 16.9, 20.1, 20.2, 20.4_

  - [ ] 5.10 Create `src/app/styles-package/src/components/skeleton.css`
    - Define `.ux4g-skeleton` base with pulse animation, `.ux4g-skeleton-text`, `.ux4g-skeleton-circle`, `.ux4g-skeleton-rect`, `.ux4g-skeleton-rounded`
    - Include `@media (prefers-reduced-motion: reduce)` to disable pulse animation
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 11.1, 11.2, 12.1, 12.2, 12.4, 16.10, 20.1, 20.2, 20.4_

  - [ ] 5.11 Create `src/app/styles-package/src/components/empty-state.css`
    - Define `.ux4g-empty-state` centered layout, `.ux4g-empty-state-illustration`, `.ux4g-empty-state-heading`, `.ux4g-empty-state-description`, `.ux4g-empty-state-action`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.7, 12.1, 12.2, 12.4, 16.11, 20.1, 20.2, 20.4_

  - [ ] 5.12 Create `src/app/styles-package/src/components/qr-code.css`
    - Define `.ux4g-qr-code` centered container with configurable size, `.ux4g-qr-code-label`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 16.12, 20.1, 20.2, 20.4_

  - [ ] 5.13 Update `components/index.css` with Wave 3 imports
    - Add `@import` statements for all 12 data display CSS files in alphabetical order
    - _Requirements: 1.2_

- [ ] 6. Checkpoint — Verify Wave 3 data display components
  - Ensure PostCSS build passes, ask the user if questions arise.

- [ ] 7. Wave 4 — Navigation + Overlays (14 files)
  - [ ] 7.1 Create `src/app/styles-package/src/components/header.css`
    - Define `.ux4g-header` sticky top bar, `.ux4g-header-tricolor` government tricolor stripe, `.ux4g-header-logo`, `.ux4g-header-nav`, `.ux4g-header-actions`
    - Define responsive collapse behavior for mobile
    - Include `:focus-visible` on nav links, `:hover` and `:active`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 4.3, 5.4, 5.5, 7.1, 7.7, 8.1, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 17.1, 20.1, 20.2, 20.4_

  - [ ] 7.2 Create `src/app/styles-package/src/components/footer.css`
    - Define `.ux4g-footer` multi-column layout, `.ux4g-footer-links`, `.ux4g-footer-branding`, `.ux4g-footer-bottom`
    - Include `:focus-visible` on links, `:hover`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 17.2, 20.1, 20.2, 20.4_

  - [ ] 7.3 Create `src/app/styles-package/src/components/navigation-menu.css`
    - Define `.ux4g-navigation-menu` horizontal/vertical menu, `.ux4g-navigation-menu-item`, `.ux4g-navigation-menu-submenu`
    - Define `.ux4g-navigation-menu-item-active` active link indicator
    - Include `:focus-visible`, `:hover`, `:active` on items, `prefers-reduced-motion` for submenu transitions
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 17.3, 20.1, 20.2, 20.4_

  - [ ] 7.4 Create `src/app/styles-package/src/components/back-to-top.css`
    - Define `.ux4g-back-to-top` fixed-position circular button in bottom-right, show/hide transition
    - Include `:focus-visible`, `:hover`, `:active`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 10.3, 11.1, 12.1, 12.2, 17.4, 20.1, 20.2, 20.4_

  - [ ] 7.5 Create `src/app/styles-package/src/components/stepper.css`
    - Define `.ux4g-stepper` base, `.ux4g-stepper-horizontal`, `.ux4g-stepper-vertical` orientations
    - Define `.ux4g-stepper-step`, `.ux4g-stepper-indicator` (number/check), `.ux4g-stepper-connector` lines
    - Define status styles: `.ux4g-stepper-step-process`, `.ux4g-stepper-step-finish`, `.ux4g-stepper-step-wait`, `.ux4g-stepper-step-error`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.1, 7.1, 7.7, 10.4, 12.1, 12.2, 12.4, 17.5, 20.1, 20.2, 20.4_

  - [ ] 7.6 Create `src/app/styles-package/src/components/language-selector.css`
    - Define `.ux4g-language-selector` dropdown trigger, `.ux4g-language-selector-current`, `.ux4g-language-selector-list`, `.ux4g-language-selector-option`
    - Include `:focus-visible`, `:hover` on options, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 17.6, 20.1, 20.2, 20.4_

  - [ ] 7.7 Create `src/app/styles-package/src/components/segmented-control.css`
    - Define `.ux4g-segmented-control` pill-shaped container, `.ux4g-segmented-control-segment` buttons, `.ux4g-segmented-control-active` indicator
    - Include `:focus-visible`, `:hover`, transition between segments, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 17.7, 20.1, 20.2, 20.4_

  - [ ] 7.8 Create `src/app/styles-package/src/components/show-hide.css`
    - Define `.ux4g-show-hide` base, `.ux4g-show-hide-trigger` with expand/collapse indicator, `.ux4g-show-hide-content` with transition
    - Include `:focus-visible` on trigger, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 17.8, 20.1, 20.2, 20.4_

  - [ ] 7.9 Create `src/app/styles-package/src/components/modal.css`
    - Define `.ux4g-modal-backdrop` fixed overlay with `z-index` via `--ux4g-z-modal`, `.ux4g-modal` centered content panel
    - Define `.ux4g-modal-header`, `.ux4g-modal-body`, `.ux4g-modal-footer`, `.ux4g-modal-close` sub-elements
    - Define size variants `.ux4g-modal-sm`, `.ux4g-modal-md`, `.ux4g-modal-lg`
    - Include `:focus-visible` on close button, fade/scale transition, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 5.4, 5.5, 6.1, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 14.1, 20.1, 20.2, 20.4_

  - [ ] 7.10 Create `src/app/styles-package/src/components/drawer.css`
    - Define `.ux4g-drawer-backdrop` fixed overlay, `.ux4g-drawer` side panel with `z-index` via `--ux4g-z-modal`
    - Define placement variants: `.ux4g-drawer-left`, `.ux4g-drawer-right`, `.ux4g-drawer-top`, `.ux4g-drawer-bottom`
    - Define `.ux4g-drawer-header`, `.ux4g-drawer-body`, `.ux4g-drawer-footer`, `.ux4g-drawer-close`
    - Include slide-in transition, `:focus-visible` on close, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 14.2, 20.1, 20.2, 20.4_

  - [ ] 7.11 Create `src/app/styles-package/src/components/popover.css`
    - Define `.ux4g-popover` absolutely-positioned floating panel with `z-index` via `--ux4g-z-popover`, `box-shadow`, `border-radius`
    - Define `.ux4g-popover-header`, `.ux4g-popover-body`, `.ux4g-popover-arrow`
    - Include fade transition, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.5, 7.1, 7.5, 7.7, 11.1, 12.1, 12.2, 12.4, 14.3, 20.1, 20.2, 20.4_

  - [ ] 7.12 Create `src/app/styles-package/src/components/dropdown.css`
    - Define `.ux4g-dropdown` absolutely-positioned menu with `z-index` via `--ux4g-z-dropdown`, `max-height` with overflow scrolling
    - Define `.ux4g-dropdown-item` with hover/focus styles, `.ux4g-dropdown-divider`, `.ux4g-dropdown-header`
    - Include `:focus-visible` on items, `:hover`, `:active`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 14.4, 20.1, 20.2, 20.4_

  - [ ] 7.13 Create `src/app/styles-package/src/components/notification.css`
    - Define `.ux4g-notification` fixed-position container with `z-index` via `--ux4g-z-popover`, stacking support
    - Define `.ux4g-notification-item`, feedback variants (info, success, warning, error) using semantic color tokens
    - Define `.ux4g-notification-close` button
    - Include entry/exit transitions, `:focus-visible` on close, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.4, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 10.4, 11.1, 12.1, 12.2, 12.4, 14.5, 20.1, 20.2, 20.4_

  - [ ] 7.14 Create `src/app/styles-package/src/components/snackbar.css`
    - Define `.ux4g-snackbar` fixed-position bottom-aligned container with `z-index` via `--ux4g-z-popover`
    - Define `.ux4g-snackbar-content`, `.ux4g-snackbar-action`, `.ux4g-snackbar-close`
    - Include auto-dismiss animation, entry/exit transitions, `:focus-visible`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 14.6, 20.1, 20.2, 20.4_

  - [ ] 7.15 Update `components/index.css` with Wave 4 imports
    - Add `@import` statements for all 14 navigation + overlay CSS files in alphabetical order
    - _Requirements: 1.2_

- [ ] 8. Checkpoint — Verify Wave 4 navigation + overlay components
  - Ensure PostCSS build passes, ask the user if questions arise.

- [ ] 9. Wave 5 — India-Specific + Feedback (14 files)
  - [ ] 9.1 Create `src/app/styles-package/src/components/aadhaar-input.css`
    - Define `.ux4g-aadhaar-input` formatted input with `letter-spacing` for XXXX XXXX XXXX pattern, monospace `font-family`
    - Define `.ux4g-aadhaar-input-label`, `.ux4g-aadhaar-input-hint`, `.ux4g-aadhaar-input-error` sub-elements
    - Include `:focus-visible`, disabled, error states
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.2, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 18.1, 20.1, 20.2, 20.4_

  - [ ] 9.2 Create `src/app/styles-package/src/components/pan-card-input.css`
    - Define `.ux4g-pan-card-input` with `text-transform: uppercase`, monospace `font-family`
    - Define label, hint, error sub-elements and validation state styles
    - Include `:focus-visible`, disabled, error states
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.2, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 18.2, 20.1, 20.2, 20.4_

  - [ ] 9.3 Create `src/app/styles-package/src/components/address-autocomplete-india.css`
    - Define `.ux4g-address-autocomplete-india` input with suggestion dropdown, `.ux4g-address-autocomplete-india-pincode`, `.ux4g-address-autocomplete-india-state`
    - Include `:focus-visible`, disabled, error states, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.1, 5.2, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 18.3, 20.1, 20.2, 20.4_

  - [ ] 9.4 Create `src/app/styles-package/src/components/captcha.css`
    - Define `.ux4g-captcha` base, `.ux4g-captcha-challenge` display area, `.ux4g-captcha-input`, `.ux4g-captcha-refresh`, `.ux4g-captcha-audio`
    - Include `:focus-visible` on input, refresh, and audio buttons, `:hover`, `:active`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 10.3, 12.1, 12.2, 12.4, 18.4, 20.1, 20.2, 20.4_

  - [ ] 9.5 Create `src/app/styles-package/src/components/digital-signature.css`
    - Define `.ux4g-digital-signature` base, `.ux4g-digital-signature-pad` bordered area, `.ux4g-digital-signature-clear`, `.ux4g-digital-signature-upload`
    - Include `:focus-visible` on buttons, `:hover`, `:active`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 18.5, 20.1, 20.2, 20.4_

  - [ ] 9.6 Create `src/app/styles-package/src/components/payment-gateway.css`
    - Define `.ux4g-payment-gateway` base, `.ux4g-payment-gateway-methods` selector, `.ux4g-payment-gateway-amount`, `.ux4g-payment-gateway-form`
    - Include `:focus-visible` on method options and form fields, `:hover`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 12.1, 12.2, 12.4, 18.6, 20.1, 20.2, 20.4_

  - [ ] 9.7 Create `src/app/styles-package/src/components/application-tracker.css`
    - Define `.ux4g-application-tracker` status timeline, `.ux4g-application-tracker-step`, `.ux4g-application-tracker-current`, `.ux4g-application-tracker-detail`
    - Define status styles using semantic color tokens
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 4.4, 7.1, 7.7, 10.4, 12.1, 12.2, 12.4, 18.7, 20.1, 20.2, 20.4_

  - [ ] 9.8 Create `src/app/styles-package/src/components/map-location-picker.css`
    - Define `.ux4g-map-location-picker` map container with fixed aspect ratio, `.ux4g-map-location-picker-pin`, `.ux4g-map-location-picker-address`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 18.8, 20.1, 20.2, 20.4_

  - [ ] 9.9 Create `src/app/styles-package/src/components/feedback-rating-widget.css`
    - Define `.ux4g-feedback-rating-widget` base, `.ux4g-feedback-rating-widget-scale` (stars/emoji), `.ux4g-feedback-rating-widget-comment`, `.ux4g-feedback-rating-widget-submit`
    - Include `:focus-visible`, `:hover` on scale items, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.1, 20.1, 20.2, 20.4_

  - [ ] 9.10 Create `src/app/styles-package/src/components/chatbot.css`
    - Define `.ux4g-chatbot` floating chat window, `.ux4g-chatbot-header` with minimize/close, `.ux4g-chatbot-messages`, `.ux4g-chatbot-bubble-user`, `.ux4g-chatbot-bubble-bot`, `.ux4g-chatbot-input`
    - Include `:focus-visible` on input and controls, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.2, 20.1, 20.2, 20.4_

  - [ ] 9.11 Create `src/app/styles-package/src/components/rich-text-editor.css`
    - Define `.ux4g-rich-text-editor` base, `.ux4g-rich-text-editor-toolbar` with button groups, `.ux4g-rich-text-editor-content` editable area
    - Define `.ux4g-rich-text-editor-toolbar-btn` with active/hover states
    - Include `:focus-visible` on toolbar buttons and content area, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.3, 20.1, 20.2, 20.4_

  - [ ] 9.12 Create `src/app/styles-package/src/components/document-viewer.css`
    - Define `.ux4g-document-viewer` display area, `.ux4g-document-viewer-toolbar` (zoom, page nav), `.ux4g-document-viewer-loading` state
    - Include `:focus-visible` on toolbar controls, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.3, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.4, 20.1, 20.2, 20.4_

  - [ ] 9.13 Create `src/app/styles-package/src/components/video-player.css`
    - Define `.ux4g-video-player` container with aspect ratio, `.ux4g-video-player-controls`, `.ux4g-video-player-play`, `.ux4g-video-player-progress`, `.ux4g-video-player-fullscreen`
    - Include `:focus-visible` on controls, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.5, 20.1, 20.2, 20.4_

  - [ ] 9.14 Create `src/app/styles-package/src/components/calendar-scheduler.css`
    - Define `.ux4g-calendar-scheduler` base, `.ux4g-calendar-scheduler-grid` month/week/day layout, `.ux4g-calendar-scheduler-event` blocks with color coding, `.ux4g-calendar-scheduler-header` navigation
    - Include `:focus-visible` on events and nav, `:hover`, `prefers-reduced-motion`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 5.4, 5.5, 7.1, 7.7, 9.1, 9.2, 9.3, 11.1, 12.1, 12.2, 12.4, 19.6, 20.1, 20.2, 20.4_

  - [ ] 9.15 Create `src/app/styles-package/src/components/chart-library.css`
    - Define `.ux4g-chart-library` responsive container, `.ux4g-chart-library-legend`, `.ux4g-chart-library-tooltip`
    - _Requirements: 1.1, 1.2, 3.1, 3.2, 7.1, 7.7, 12.1, 12.2, 12.4, 19.7, 20.1, 20.2, 20.4_

  - [ ] 9.16 Update `components/index.css` with Wave 5 imports
    - Add `@import` statements for all 14 India-specific + feedback CSS files in alphabetical order
    - _Requirements: 1.2_

- [ ] 10. Checkpoint — Verify Wave 5 India-specific + feedback components
  - Ensure PostCSS build passes, ask the user if questions arise.

- [ ] 11. Property-based tests for correctness properties
  - [ ]* 11.1 Write property test for class contract alignment (Property 1)
    - **Property 1: Class contract alignment**
    - For each component, extract `ux4g-*` class names from TSX and verify every referenced class is defined in the corresponding CSS file
    - Use `fast-check` to generate component selections from the full list of 59 components
    - **Validates: Requirements 2.1, 2.2**

  - [ ]* 11.2 Write property test for token-only values (Property 2)
    - **Property 2: Token-only values**
    - Parse CSS property values and verify all color, spacing, typography, radius, shadow, and motion values use `var(--ux4g-*)` — hardcoded values only in fallback position
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 20.4**

  - [ ]* 11.3 Write property test for token fallback completeness (Property 3)
    - **Property 3: Token fallback completeness**
    - Parse all `var()` calls across all 59 CSS files and verify each includes a hardcoded fallback as the second argument
    - **Validates: Requirements 7.7**

  - [ ]* 11.4 Write property test for naming convention compliance (Property 4)
    - **Property 4: Naming convention compliance**
    - Parse all CSS selectors and verify they start with `.ux4g-` and use only lowercase kebab-case characters
    - **Validates: Requirements 12.1, 12.2, 12.3, 12.4**

  - [ ]* 11.5 Write property test for focus indicator correctness (Property 5)
    - **Property 5: Focus indicator correctness**
    - For interactive components, verify `:focus-visible` rule exists with `outline: 2px solid var(--ux4g-color-focus-ring, ...)` and `outline-offset: 2px`
    - Verify no `:focus` rule removes or overrides the indicator
    - **Validates: Requirements 9.1, 9.2, 9.3, 9.5**

  - [ ]* 11.6 Write property test for reduced motion coverage (Property 6)
    - **Property 6: Reduced motion coverage**
    - For CSS files that define `transition` or `animation`, verify a `@media (prefers-reduced-motion: reduce)` query is present
    - **Validates: Requirements 11.1, 11.2, 11.3**

  - [ ]* 11.7 Write property test for interactive state completeness (Property 7)
    - **Property 7: Interactive state completeness**
    - For interactive components, verify both `:hover` and `:active` pseudo-class rules exist with visually distinct style changes
    - **Validates: Requirements 4.3, 5.4, 5.5**

  - [ ]* 11.8 Write property test for state class required properties (Property 8)
    - **Property 8: State class required properties**
    - For components with disabled state, verify `.ux4g-{component}-disabled` contains `opacity`, `cursor: not-allowed`, `pointer-events: none`
    - For components with error state, verify `.ux4g-{component}-error` references `--ux4g-color-error`
    - For components with loading state, verify `.ux4g-{component}-loading` contains `pointer-events: none`
    - **Validates: Requirements 5.1, 5.2, 5.3**

  - [ ]* 11.9 Write property test for file header documentation (Property 9)
    - **Property 9: File header documentation**
    - Verify each CSS file begins with a block comment containing the component name and React component class contract path reference
    - **Validates: Requirements 20.1**

- [ ] 12. Build verification and final validation
  - [ ] 12.1 Run full PostCSS build verification
    - Run `pnpm run build` in `src/app/styles-package/` and verify it completes without errors
    - Verify `components/index.css` contains exactly 87 `@import` statements (28 existing + 59 new)
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ]* 12.2 Write integration tests for import resolution
    - Verify all 59 new `@import` paths resolve correctly
    - Verify the complete `dist/components.css` bundle is generated
    - _Requirements: 1.2, 1.3_

- [x] 13. Final checkpoint — Ensure all tests pass and build is clean
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints after each wave ensure incremental validation
- Property tests validate universal correctness properties from the design document using Vitest + fast-check
- All CSS files follow the template: base → sub-elements → variants → states → sizes → pseudo-classes → reduced-motion
- All values use `var(--ux4g-*, fallback)` — no hardcoded values outside fallback positions
- The 5-wave rollout follows dependency order: layout → forms → data display → navigation/overlays → India-specific/feedback

# Implementation Plan: Design Token Documentation Page

## Overview

Build an interactive Design Token Documentation Page at `/foundations/tokens` that lets developers and designers browse, search, and copy all UX4G design tokens. Implementation proceeds bottom-up: data layer utilities first, then shared UI components (CopyButton, TokenCard), then category-specific preview components, then the main page assembly with search/filter, and finally route registration and verification.

All code is TypeScript/React with Tailwind CSS v4 styling, using existing project conventions (`PageContainer`, `SectionShell`, `forwardRef`, `displayName`, `cn()`, `ux4g-` prefix, `var(--ux4g-*, fallback)` for previews).

## Tasks

- [x] 1. Set up project structure and token data utilities
  - [x] 1.1 Install `fast-check` as a dev dependency (`pnpm add -D fast-check`)
    - Required for property-based tests defined in the design
    - _Requirements: Testing strategy_

  - [x] 1.2 Add route path constant and create directory structure
    - Add `TOKENS: "/foundations/tokens"` to `ROUTE_PATHS.FOUNDATIONS` in `src/app/routes/pathSource.ts`
    - Create directory structure under `src/app/pages/DesignTokens/` with `components/` and `utils/` subdirectories
    - _Requirements: 1.1, 1.2_

  - [x] 1.3 Implement `src/app/pages/DesignTokens/utils/tokenUtils.ts`
    - Define `TokenEntry`, `TokenCategory`, `CategoryConfig` interfaces
    - Import all 9 base token JSON files and `semantic.json` via static Vite JSON imports
    - Implement `flattenTokens()` to recursively walk nested JSON and produce flat `TokenEntry[]` arrays
    - Implement `toCssVariable()` to generate `--ux4g-{category}-{path}` names, stripping the `base` segment
    - Implement `toPixels()` to convert rem values to pixel equivalents (×16) and pass through px values
    - Export `TOKEN_DATA: Record<TokenCategory, TokenEntry[]>` with all normalized tokens grouped by category
    - Export `CATEGORY_CONFIGS` array with titles, descriptions, and lucide-react icons for each category
    - Export `SCRIPT_SAMPLES` map with sample text for each font family key (Devanagari → "हिन्दी", Tamil → "தமிழ்", etc.)
    - Handle semantic tokens: extract `{ux4g.*}` references into `TokenEntry.reference` field
    - Skip entries without a `value` field; log dev-mode warning
    - _Requirements: 1.4, 3.1, 3.4, 3.5, 4.1, 4.2, 4.3, 5.1, 5.2, 5.5, 6.1, 6.5, 7.1, 7.4, 11.1, 11.2_

  - [ ]* 1.4 Write property test: Token rendering completeness
    - **Property 1: Token rendering completeness**
    - Generate random subsets of token JSON structures, run through `flattenTokens`, verify every leaf node produces a `TokenEntry` with non-empty `name`, `value`, and `cssVariable`
    - **Validates: Requirements 3.1, 4.1, 5.1, 6.1, 6.2, 7.1**

  - [ ]* 1.5 Write property test: Token entry information completeness
    - **Property 2: Token entry information completeness**
    - Generate random `TokenEntry` objects via `flattenTokens`, verify `name` and `value` are non-empty and `cssVariable` starts with `--ux4g-`
    - **Validates: Requirements 3.2, 4.3, 5.5, 6.5, 7.4**

  - [ ]* 1.6 Write property test: CSS variable naming convention
    - **Property 9: CSS variable naming convention**
    - Generate random token path segments, verify `toCssVariable` produces `--ux4g-` prefixed, hyphen-joined output with `base` stripped
    - **Validates: Requirements 3.4, 10.3**

  - [ ]* 1.7 Write property test: Spacing pixel equivalence
    - **Property 10: Spacing pixel equivalence**
    - Generate random rem and px values, verify `toPixels` returns correct pixel equivalents (rem × 16) and px values unchanged
    - **Validates: Requirements 4.2, 4.3**

  - [ ]* 1.8 Write property test: Color a11y annotation fidelity
    - **Property 3: Color a11y annotation fidelity**
    - Generate color token objects with/without `a11y` fields, verify the normalized output preserves or omits the annotation correctly
    - **Validates: Requirements 3.5**

  - [ ]* 1.9 Write property test: Semantic mapping indicator accuracy
    - **Property 7: Semantic mapping indicator accuracy**
    - Generate semantic token objects with `{ux4g.*}` references, verify the `reference` field is extracted correctly
    - **Validates: Requirements 11.1, 11.2**

  - [ ]* 1.10 Write property test: Font family script sample mapping
    - **Property 8: Font family script sample mapping**
    - Generate font family keys from the typography JSON, verify `SCRIPT_SAMPLES` has a non-empty entry for each
    - **Validates: Requirements 5.2**

  - [ ]* 1.11 Write unit tests for tokenUtils
    - Test `flattenTokens` with colors.json produces correct count and structure
    - Test `toCssVariable` strips `base` segment correctly
    - Test `toPixels` with rem, px, and invalid values
    - Test `SCRIPT_SAMPLES` contains entries for all 15 font families
    - Test semantic token `reference` extraction
    - Test entries without `value` field are skipped
    - _Requirements: 3.1, 3.4, 4.2, 5.2, 11.1_

- [x] 2. Checkpoint — Ensure data layer builds and tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Create shared UI components (CopyButton, TokenCard, SearchFilter)
  - [x] 3.1 Create `src/app/pages/DesignTokens/components/CopyButton.tsx`
    - Implement `CopyButtonProps` interface with `text` and `label` props
    - Use `navigator.clipboard.writeText(text)` with try/catch
    - Manage `CopyState` ('idle' | 'success' | 'error') — swap to checkmark icon on success for 2 seconds, error icon on failure
    - Use `aria-label={label}` for accessibility
    - Use `forwardRef` and set `displayName`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 12.3_

  - [x] 3.2 Create `src/app/pages/DesignTokens/components/TokenCard.tsx`
    - Render token name, resolved value, CSS variable name
    - Include two `CopyButton` instances: one for CSS variable, one for value
    - Use `cn()` for class merging, `ux4g-` CSS prefix
    - Use `forwardRef` and set `displayName`
    - _Requirements: 9.1, 9.2, 12.4_

  - [x] 3.3 Create `src/app/pages/DesignTokens/components/SearchFilter.tsx`
    - Render `<input type="search">` with `aria-label="Search design tokens"`
    - Call `onChange` with debounced value (150ms)
    - Render `aria-live="polite"` region announcing `"{n} tokens found"` or `"No tokens found"`
    - Use `forwardRef` and set `displayName`
    - _Requirements: 8.1, 8.2, 8.5, 12.2_

  - [ ]* 3.4 Write property test: Search filtering correctness
    - **Property 4: Search filtering correctness**
    - Generate random query strings and token lists, verify all filtered results contain the query as a case-insensitive substring in `name`, `cssVariable`, or `value`
    - **Validates: Requirements 8.2, 8.3**

  - [ ]* 3.5 Write property test: Search clear round-trip
    - **Property 5: Search clear round-trip**
    - Generate random token lists and queries, verify filtering then clearing (empty string) produces the original list
    - **Validates: Requirements 8.4**

  - [ ]* 3.6 Write property test: Copy to clipboard correctness
    - **Property 6: Copy to clipboard correctness**
    - Generate random `TokenEntry` objects, mock clipboard API, verify the correct string is written for CSS variable copy and value copy
    - **Validates: Requirements 9.3**

  - [ ]* 3.7 Write unit tests for CopyButton, TokenCard, and SearchFilter
    - Test CopyButton shows checkmark on successful copy
    - Test CopyButton shows error icon when clipboard API fails
    - Test CopyButton has correct `aria-label`
    - Test TokenCard renders name, value, CSS variable, and two CopyButtons
    - Test SearchFilter has `aria-label="Search design tokens"`
    - Test SearchFilter ARIA live region announces result count
    - Test SearchFilter debounces input at ≤150ms
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 8.1, 8.2, 8.5, 12.2, 12.3_

- [x] 4. Create CategoryPanel and TableOfContents components
  - [x] 4.1 Create `src/app/pages/DesignTokens/components/CategoryPanel.tsx`
    - Implement `CategoryPanelProps` with `config`, `tokens`, `visible`, `children`
    - Wrap children in `<SectionShell id={category} title={title} icon={icon}>`
    - Hide via `hidden` attribute when `visible` is false (preserves DOM for search restoration)
    - Use `forwardRef` and set `displayName`
    - _Requirements: 2.1, 2.2_

  - [x] 4.2 Create `src/app/pages/DesignTokens/components/TableOfContents.tsx`
    - Render smooth-scroll anchor links for each category
    - Each link `href` matches the corresponding `CategoryPanel` section `id`
    - Collapse into horizontal scroll on mobile viewports
    - Use `forwardRef` and set `displayName`
    - _Requirements: 1.3, 2.3, 13.4_

  - [ ]* 4.3 Write unit tests for CategoryPanel and TableOfContents
    - Test CategoryPanel renders SectionShell with correct id and title
    - Test CategoryPanel hidden attribute when `visible` is false
    - Test TOC links have `href` matching category section ids
    - Test TOC responsive behavior on mobile
    - _Requirements: 2.1, 2.2, 2.3, 1.3, 13.4_

- [x] 5. Checkpoint — Ensure shared components build and tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Create category-specific preview components
  - [x] 6.1 Create `src/app/pages/DesignTokens/components/ColorSwatch.tsx`
    - Render `<div>` with `style={{ backgroundColor: 'var(--ux4g-color-..., fallback)' }}`
    - Display token name, hex value, CSS variable via TokenCard
    - Conditionally render a11y badge ("AA", "AAA") when `token.a11y` is present
    - Include text label for color name and value (color info not conveyed by color alone)
    - Use `forwardRef` and set `displayName`
    - _Requirements: 3.1, 3.2, 3.4, 3.5, 12.4_

  - [x] 6.2 Create `src/app/pages/DesignTokens/components/SpacingBar.tsx`
    - Render horizontal `<div>` with `style={{ width: token.value }}` (capped at 100% of container)
    - Display token name, rem value, pixel equivalent (via `toPixels`), CSS variable
    - Use `forwardRef` and set `displayName`
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 6.3 Create `src/app/pages/DesignTokens/components/TypographySample.tsx`
    - For font families: render sample text from `SCRIPT_SAMPLES` in the corresponding script
    - For font sizes: render text at actual size
    - For weights/line-heights/letter-spacing: render with applied style
    - Fall back to generic Latin sample text for unknown font families
    - Use `forwardRef` and set `displayName`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 6.4 Create `src/app/pages/DesignTokens/components/ShadowPreview.tsx`
    - Render a box with `style={{ boxShadow: 'var(--ux4g-shadow-..., fallback)' }}`
    - Display token name, resolved value, CSS variable
    - Use `forwardRef` and set `displayName`
    - _Requirements: 6.1, 6.5_

  - [x] 6.5 Create `src/app/pages/DesignTokens/components/RadiusPreview.tsx`
    - Render a box with `style={{ borderRadius: 'var(--ux4g-radius-..., fallback)' }}`
    - Display token name, resolved value, CSS variable
    - Use `forwardRef` and set `displayName`
    - _Requirements: 6.2, 6.5_

  - [x] 6.6 Create `src/app/pages/DesignTokens/components/MotionPreview.tsx`
    - Render a box that translates horizontally over the token's duration on hover/focus
    - Respect `motionPreference` from `useTheme()` — show static indicator when `'reduced'`
    - Render easing tokens with small SVG curve visualization
    - Use `forwardRef` and set `displayName`
    - _Requirements: 6.3, 6.4, 6.5, 12.6_

  - [x] 6.7 Create `src/app/pages/DesignTokens/components/OpacityPreview.tsx`
    - Render a colored box at the token's opacity level with checkerboard background pattern
    - Display token name, resolved value, CSS variable
    - Use `forwardRef` and set `displayName`
    - _Requirements: 7.1, 7.4_

  - [x] 6.8 Create `src/app/pages/DesignTokens/components/SemanticMappingIndicator.tsx`
    - Render `"→ {reference}"` as a muted label next to the semantic token's resolved value
    - Show which base token the semantic token maps to
    - Use `forwardRef` and set `displayName`
    - _Requirements: 11.1, 11.2_

  - [ ]* 6.9 Write unit tests for all preview components
    - Test ColorSwatch renders background via CSS variable, displays a11y badge when present, omits badge when absent
    - Test SpacingBar renders proportional width, displays pixel equivalent
    - Test TypographySample renders correct script sample for each font family, falls back to Latin for unknown
    - Test ShadowPreview applies shadow via CSS variable
    - Test RadiusPreview applies border-radius via CSS variable
    - Test MotionPreview disables animation when `motionPreference` is `'reduced'`
    - Test OpacityPreview renders checkerboard background and applies opacity
    - Test SemanticMappingIndicator renders reference path with arrow
    - _Requirements: 3.1, 3.5, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 6.3, 7.1, 11.1, 12.6_

- [x] 7. Checkpoint — Ensure all preview components build and tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Assemble the main DesignTokens page
  - [x] 8.1 Create `src/app/pages/DesignTokens/DesignTokens.tsx`
    - Wrap content in `PageContainer` with page title and introductory description
    - Manage search state via `useState<string>` with 150ms debounced value
    - Import `TOKEN_DATA` and `CATEGORY_CONFIGS` from `tokenUtils`
    - Read `useTheme()` for active color scheme badge display
    - Render `TableOfContents` linking to all categories
    - Render `SearchFilter` above category panels
    - Filter normalized token list by debounced query using `filterTokens()`
    - Render `CategoryPanel` for each of the 9 base categories with appropriate preview components:
      - Colors → `ColorSwatch` (grouped by palette: saffron, green, navy, neutral, semantic status)
      - Spacing → `SpacingBar` (sub-sections: base, inset, stack, inline)
      - Typography → `TypographySample` (sub-sections: font families, font sizes, weights, line heights, letter spacing)
      - Shadows → `ShadowPreview`
      - Radius → `RadiusPreview`
      - Motion → `MotionPreview`
      - Opacity → `OpacityPreview`
      - Sizing → tabular format with pixel equivalents
      - Z-Index → stacking order visualization
    - Render semantic tokens `CategoryPanel` with `SemanticMappingIndicator`, organized by purpose (brand, text, background, border, interactive, feedback, spacing, typography)
    - Hide categories with zero search matches via `CategoryPanel` `visible` prop
    - Use responsive grid: single column on mobile (<640px), multi-column on tablet (640px–1024px), wider on desktop (>1024px)
    - Display active color scheme badge (light/dark/system)
    - Use `var(--ux4g-*, fallback)` for all visual previews so theme changes propagate via CSS cascade
    - Export as default for lazy loading
    - _Requirements: 1.1, 1.3, 1.4, 2.1, 2.2, 2.4, 3.1, 3.3, 4.4, 5.3, 5.4, 7.2, 7.3, 8.1, 8.2, 8.3, 8.4, 10.1, 10.2, 10.3, 10.4, 11.3, 11.4, 13.1, 13.2, 13.3, 13.5_

  - [ ]* 8.2 Write unit tests for DesignTokens page
    - Test page renders title, description, and all 10 category headings (9 base + semantic)
    - Test TOC links have `href` matching category section `id`s
    - Test search input filters tokens and hides empty categories
    - Test clearing search restores all categories
    - Test active color scheme badge is displayed
    - Test responsive grid classes at breakpoints
    - Test all interactive elements are keyboard-focusable
    - Run axe-core accessibility audit on rendered page
    - _Requirements: 1.1, 1.3, 2.1, 8.1, 8.2, 8.3, 8.4, 10.4, 12.1, 12.2, 12.5, 13.1_

- [x] 9. Register route in foundationsRoutes
  - [x] 9.1 Register lazy-loaded route in `src/app/routes/domains/foundationsRoutes.tsx`
    - Add `const DesignTokens = lazy(() => import("../../pages/DesignTokens/DesignTokens"))`
    - Add route entry: `{ path: toChildPath(ROUTE_PATHS.FOUNDATIONS.TOKENS), Component: DesignTokens }`
    - _Requirements: 1.1, 1.2_

  - [ ]* 9.2 Write unit test for route registration
    - Verify `foundationsRoutes` includes a route for `/foundations/tokens`
    - Verify the route uses lazy loading
    - _Requirements: 1.1, 1.2_

- [x] 10. Checkpoint — Ensure full page renders and all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. Build verification
  - [x] 11.1 Run full build verification
    - Run `pnpm run build` to confirm production build succeeds with no errors
    - Run `pnpm vitest --run` to confirm all tests pass
    - Run `pnpm run typecheck` to confirm no TypeScript errors
    - _Requirements: 1.1, 1.2, 10.3, 12.1, 12.5_

- [x] 12. Final checkpoint — Ensure all tests pass and build is clean
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after each major phase
- Property tests validate universal correctness properties from the design document using Vitest + fast-check
- Unit tests validate specific examples and edge cases using Vitest + Testing Library
- All preview components use `var(--ux4g-*, fallback)` CSS custom properties so theme switches update automatically
- The `SCRIPT_SAMPLES` map covers all 15 font families including 12 Indian language scripts

# Implementation Plan: Advanced Theming System

## Overview

Extend the existing `ThemeContext.tsx` with a full-featured theming infrastructure organized into four core modules: ThemeEngine, ThemeValidator, ThemePersistenceManager, and FOUC Prevention Script. Implementation proceeds incrementally — types and presets first, then core engine logic, then validation, persistence, the extended provider, FOUC prevention, and finally integration. Each module is tested close to its implementation. All code is TypeScript, tests use Vitest + fast-check.

## Tasks

- [-] 1. Define shared types and theme preset data
  - [-] 1.1 Create `src/app/contexts/theme/types.ts`
    - Define `ThemeColorTokens`, `ThemeDefinition`, `SerializedTheme`, `PresetName` types
    - Re-export `ColorScheme`, `MotionPreference`, `DensityPreference` from existing `ThemeContext.tsx`
    - Define extended `ThemeContextType` interface with new fields (`activeTheme`, `contrastMode`, `setTheme`, `setContrastMode`, `resolvedTokens`, `presets`) while preserving all existing fields
    - _Requirements: 1.5, 3.3, 8.1–8.10, 11.6_

  - [ ] 1.2 Create `src/app/contexts/theme/presets/default.ts`
    - Export the `default` / `navy-primary` preset with full light and dark `ThemeColorTokens` using the Indian tricolor palette (navy primary, saffron secondary, green tertiary)
    - All 7 semantic token categories (`brand`, `text`, `background`, `surface`, `border`, `interactive`, `feedback`) must be fully defined for both variants
    - _Requirements: 6.1, 6.3, 6.6_

  - [ ] 1.3 Create `src/app/contexts/theme/presets/saffron-primary.ts`
    - Export the `saffron-primary` preset using saffron-600 (`#cc5f00`) as primary brand color with navy secondary
    - Both light and dark variants fully defined across all 7 token categories
    - _Requirements: 6.2, 6.6_

  - [ ] 1.4 Create `src/app/contexts/theme/presets/green-primary.ts`
    - Export the `green-primary` preset using Indian green (`#008800`) as primary brand color with navy secondary
    - Both light and dark variants fully defined across all 7 token categories
    - _Requirements: 6.4, 6.6_

  - [ ] 1.5 Create `src/app/contexts/theme/presets/high-contrast.ts`
    - Export the `high-contrast` preset maximizing contrast ratios (pure black/white backgrounds, deepened brand colors)
    - Light variant: `#000000` text on `#ffffff` background; Dark variant: `#ffffff` text on `#000000` background
    - Both variants fully defined across all 7 token categories
    - _Requirements: 6.5, 6.6_

  - [ ] 1.6 Create `src/app/contexts/theme/presets/index.ts`
    - Re-export all presets and assemble the `THEME_PRESETS` registry as `Record<PresetName, ThemeDefinition>`
    - Map `'navy-primary'` to the same definition as `'default'`
    - _Requirements: 6.1–6.6_

- [ ] 2. Implement ThemeEngine core logic
  - [ ] 2.1 Create `src/app/contexts/theme/ThemeEngine.ts` — `createTheme` function
    - Implement deep-merge of partial token overrides onto a base preset
    - Throw `Error` with descriptive message if `baseTheme` is not a recognized preset name
    - Generate both light and dark variants from the overrides
    - Return a `ThemeDefinition` usable by `ThemeProvider` or `setTheme`
    - _Requirements: 3.1, 3.2, 3.4, 3.5, 3.6_

  - [ ]* 2.2 Write property test for `createTheme` deep-merge correctness
    - **Property 3: createTheme Deep-Merge Correctness**
    - Use `fast-check` to generate random base preset names and partial token override objects
    - Verify: (a) override values appear in result, (b) non-overridden base values preserved, (c) both light and dark variants fully populated
    - **Validates: Requirements 3.2, 3.4**

  - [ ] 2.3 Implement `resolveTokens` function in `ThemeEngine.ts`
    - Start with default preset for the given color scheme, deep-merge theme tokens, then merge high-contrast overrides if `contrastMode` is true
    - Flatten nested token object to CSS property names: `{ brand: { primary: '#005196' } }` → `{ '--ux4g-color-brand-primary': '#005196' }`
    - Return `Record<string, string>`
    - _Requirements: 1.4, 2.1, 8.8_

  - [ ]* 2.4 Write property test for token resolution consistency
    - **Property 1: Token Resolution Consistency**
    - Use `fast-check` to generate random preset × random scheme combinations
    - Verify resolved token map keys match the CSS properties that would be applied to DOM
    - **Validates: Requirements 1.4, 2.1, 8.8**

  - [ ] 2.5 Implement `applyTokensToDOM` function in `ThemeEngine.ts`
    - Apply resolved tokens to `document.documentElement` via `requestAnimationFrame` batching
    - Set `data-theme` attribute, `color-scheme` CSS property, toggle `dark` class
    - Set `data-contrast="high"` attribute when contrast mode is enabled
    - Dispatch `ux4g-theme-change` custom DOM event with theme name and color scheme
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 7.3_

  - [ ]* 2.6 Write property test for DOM state reflects active color scheme
    - **Property 2: DOM State Reflects Active Color Scheme**
    - Use `fast-check` to generate random scheme × random system preference × random contrast boolean
    - Verify `data-theme`, `color-scheme`, `dark` class, and `data-contrast` attributes are correct
    - **Validates: Requirements 2.2, 2.3, 2.4, 5.1, 7.3**

  - [ ] 2.7 Implement `serializeTheme` and `deserializeTheme` functions in `ThemeEngine.ts`
    - `serializeTheme`: convert `ThemeDefinition` to JSON string with `version`, `name`, `baseTheme`, `tokens` fields
    - `deserializeTheme`: parse JSON string, validate required fields and version, return `ThemeDefinition`
    - Throw descriptive errors for malformed JSON, missing fields, or version mismatch
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

  - [ ]* 2.8 Write property test for theme serialization round-trip
    - **Property 12: Theme Serialization Round-Trip**
    - Use `fast-check` to generate random `ThemeDefinition` objects
    - Verify `deserializeTheme(serializeTheme(theme))` produces deeply equal result
    - Verify serialized JSON contains `version`, `name`, `baseTheme`, `tokens` fields
    - **Validates: Requirements 11.3, 11.6**

  - [ ]* 2.9 Write property test for deserialization rejects malformed input
    - **Property 13: Deserialization Rejects Malformed Input**
    - Use `fast-check` to generate random non-JSON strings
    - Verify `deserializeTheme` throws an error with a descriptive message
    - **Validates: Requirements 11.4**

- [x] 3. Checkpoint — Verify ThemeEngine
  - Ensure all tests pass with `pnpm vitest --run`, ask the user if questions arise.

- [x] 4. Implement ThemeValidator
  - [ ] 4.1 Create `src/app/contexts/theme/ThemeValidator.ts`
    - Implement `parseHex`: parse `#RGB` and `#RRGGBB` to `[r, g, b]`, throw on invalid format
    - Implement `relativeLuminance`: WCAG 2.1 formula (linearize sRGB channels, L = 0.2126R + 0.7152G + 0.0722B)
    - Implement `contrastRatio`: `(L1 + 0.05) / (L2 + 0.05)` where L1 >= L2
    - Implement `validateTheme`: check text-to-background pairs (4.5:1 AA), interactive-to-background pairs (3:1 AA), both light and dark variants
    - Return `ValidationResult` with `valid`, `failures`, and `warnings` (ratios between 4.5:1 and 5:1)
    - _Requirements: 9.1–9.8_

  - [ ]* 4.2 Write property test for luminance and contrast ratio mathematical correctness
    - **Property 11: Luminance and Contrast Ratio Mathematical Correctness**
    - Use `fast-check` to generate random valid hex strings
    - Verify: luminance ∈ [0, 1], contrast ratio ∈ [1, 21], commutativity, self-contrast = 1
    - **Validates: Requirements 9.8**

  - [ ]* 4.3 Write property test for validator detects contrast failures
    - **Property 10: Validator Detects Contrast Failures**
    - Use `fast-check` to generate hex color pairs with known low contrast
    - Verify `validateTheme` includes failure entries for text pairs below 4.5:1 and interactive pairs below 3:1
    - **Validates: Requirements 9.2, 9.3, 9.4, 9.5**

  - [ ]* 4.4 Write property test for preset WCAG AA compliance
    - **Property 7: Preset WCAG AA Compliance**
    - Iterate all presets × both variants (exhaustive)
    - Verify every text-to-background pair ≥ 4.5:1 and every interactive-to-background pair ≥ 3:1
    - **Validates: Requirements 6.7**

  - [ ]* 4.5 Write property test for preset completeness
    - **Property 6: Preset Completeness**
    - Iterate all presets (exhaustive)
    - Verify both light and dark variants have all 7 semantic token categories fully defined with no missing tokens
    - **Validates: Requirements 6.6**

- [ ] 5. Checkpoint — Verify ThemeValidator
  - Ensure all tests pass with `pnpm vitest --run`, ask the user if questions arise.

- [ ] 6. Implement ThemePersistenceManager
  - [ ] 6.1 Create `src/app/contexts/theme/ThemePersistenceManager.ts`
    - Define `STORAGE_KEYS` constant with all 5 localStorage keys
    - Implement `loadPreferences`: read all keys from localStorage, return `PersistedPreferences` with null for unavailable keys
    - Implement `savePreference`: write a single key to localStorage, silently no-op if localStorage unavailable
    - Wrap all localStorage access in try/catch for resilience
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 6.2 Write property test for preference persistence round-trip
    - **Property 4: Preference Persistence Round-Trip**
    - Use `fast-check` to generate random theme name × random scheme × random boolean
    - Save via `savePreference`, load via `loadPreferences`, verify values match originals
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4**

  - [ ]* 6.3 Write unit tests for ThemePersistenceManager
    - Test localStorage unavailable scenario (falls back without throwing)
    - Test loading when no preferences stored (returns nulls)
    - _Requirements: 4.5_

- [ ] 7. Implement extended ThemeProvider and useTheme hook
  - [ ] 7.1 Create `src/app/contexts/theme/ThemeProvider.tsx`
    - Accept `defaultTheme` and `defaultColorScheme` props
    - On mount: read persisted preferences via `ThemePersistenceManager`, reconcile with DOM attributes set by FOUC script
    - Manage state for `activeTheme`, `colorScheme`, `isDarkMode`, `contrastMode`, `motionPreference`, `densityPreference`
    - Implement `setTheme`: resolve tokens via `ThemeEngine.resolveTokens`, apply via `applyTokensToDOM`, persist via `savePreference`
    - Implement `setContrastMode`: merge high-contrast overrides, update `data-contrast` attribute, persist
    - Implement `setColorScheme`: update color scheme, listen to `prefers-color-scheme` when `system`, persist
    - Listen for `storage` events for cross-tab synchronization
    - Listen for `prefers-color-scheme` media query changes when scheme is `system` (stop listening when explicit light/dark selected)
    - Expose all fields from extended `ThemeContextType` including backward-compatible fields
    - Preserve `useTheme` hook throwing error outside provider
    - Export `ThemeProvider`, `useTheme`, and legacy aliases `DarkModeProvider`, `useDarkMode`
    - _Requirements: 1.1–1.7, 2.1–2.6, 4.6, 5.1–5.4, 7.1–7.6, 8.1–8.10_

  - [ ]* 7.2 Write property test for cross-tab theme synchronization
    - **Property 5: Cross-Tab Theme Synchronization**
    - Use `fast-check` to generate random valid theme names
    - Simulate `storage` event with `ux4g-theme-active` key, verify ThemeProvider updates active theme
    - **Validates: Requirements 4.6**

  - [ ]* 7.3 Write property test for contrast mode toggle round-trip
    - **Property 9: Contrast Mode Toggle Round-Trip**
    - Use `fast-check` to generate random preset × random scheme
    - Enable contrast mode then disable it, verify resolved tokens match original, theme name and scheme unchanged
    - **Validates: Requirements 7.4, 7.5**

  - [ ]* 7.4 Write property test for contrast mode AAA compliance
    - **Property 8: Contrast Mode AAA Compliance**
    - Iterate all presets × both variants with contrast mode enabled (exhaustive)
    - Verify every text-to-background pair ≥ 7:1 and every interactive-to-background pair ≥ 4.5:1
    - **Validates: Requirements 7.2**

  - [ ]* 7.5 Write unit tests for ThemeProvider
    - Test ThemeProvider renders and exposes all context fields
    - Test `defaultTheme` and `defaultColorScheme` props
    - Test `useTheme` throws outside ThemeProvider
    - Test theme switch does not remount React tree
    - Test `ux4g-theme-change` custom event dispatched with correct payload
    - Test system preference listener active only when colorScheme is `system`
    - _Requirements: 1.1, 1.2, 1.3, 1.5, 1.7, 2.5, 2.6, 5.2, 5.4_

- [ ] 8. Checkpoint — Verify ThemeProvider and persistence
  - Ensure all tests pass with `pnpm vitest --run`, ask the user if questions arise.

- [ ] 9. Implement FOUC prevention script
  - [ ] 9.1 Create `src/app/contexts/theme/fouc-script.ts`
    - Export `generateFOUCScript` function returning a minified inline script string (< 1KB)
    - Script logic: read `ux4g-theme-color-scheme` from localStorage, fall back to `matchMedia('(prefers-color-scheme: dark)')`, set `data-theme`, `color-scheme`, toggle `dark` class, read `ux4g-theme-contrast-mode` and set `data-contrast="high"` if true
    - Entire script body wrapped in try/catch, defaults to `light` on any error
    - Script must be synchronous (no async/defer)
    - _Requirements: 10.1–10.6_

  - [ ]* 9.2 Write unit tests for FOUC script
    - Test script output is < 1KB minified
    - Test script has no async/defer attributes
    - Test script defaults to light when localStorage unavailable
    - Test script sets correct attributes for stored dark preference
    - Test script sets `data-contrast="high"` when contrast mode stored as `"true"`
    - _Requirements: 10.3, 10.4, 10.5_

- [ ] 10. Wire everything together and integrate with App.tsx
  - [ ] 10.1 Create `src/app/contexts/theme/index.ts` barrel export
    - Re-export `ThemeProvider`, `useTheme`, `DarkModeProvider`, `useDarkMode` from `ThemeProvider.tsx`
    - Re-export `createTheme`, `serializeTheme`, `deserializeTheme` from `ThemeEngine.ts`
    - Re-export `validateTheme` from `ThemeValidator.ts`
    - Re-export all types from `types.ts`
    - _Requirements: 1.5, 3.6, 8.1–8.10_

  - [ ] 10.2 Update `src/app/App.tsx` to use the new ThemeProvider
    - Replace import of `ThemeProvider` from `./contexts/ThemeContext` with import from `./contexts/theme`
    - Pass `defaultTheme="default"` and `defaultColorScheme="system"` props
    - Ensure existing consumers continue to work unchanged
    - _Requirements: 1.1, 1.2, 1.5, 1.6_

  - [ ] 10.3 Add FOUC prevention script to `index.html`
    - Insert the inline script generated by `generateFOUCScript()` into the `<head>` before any other scripts
    - Ensure the script tag has no `defer` or `async` attributes
    - _Requirements: 10.1, 10.2, 10.3_

- [ ] 11. Final checkpoint — Ensure all tests pass
  - Run `pnpm vitest --run` to verify all unit and property tests pass.
  - Run `pnpm run typecheck` to verify no TypeScript errors.
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document (13 properties total)
- Unit tests validate specific examples and edge cases
- The implementation extends the existing ThemeContext.tsx rather than replacing it, preserving backward compatibility

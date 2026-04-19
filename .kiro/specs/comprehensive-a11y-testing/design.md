# Design Document: Comprehensive Accessibility Testing

## Overview

This design establishes a comprehensive, automated WCAG 2.1 AA accessibility testing infrastructure for the UX4G Design System's 78+ React components. The approach centers on a reusable test helper module (`src/test/a11y-helpers.ts`) that wraps `vitest-axe` with standardized configuration, paired with a consistent test pattern that slots into existing component test files under an `Accessibility` describe block.

The system integrates with the existing Vitest + jsdom + @testing-library/react stack. No new test runners or frameworks are introduced. The `test:a11y` npm script is updated from targeting 4 hardcoded files to a glob + grep pattern that runs only the `Accessibility` blocks across all component test files.

Components are rolled out in three tiers by interaction complexity: Tier 1 (interactive widgets/form controls), Tier 2 (navigation/feedback), Tier 3 (static/layout).

## Architecture

```mermaid
graph TD
    subgraph "Test Infrastructure"
        A[src/test/a11y-helpers.ts] -->|wraps| B[vitest-axe / axe-core]
        A -->|uses| C[@testing-library/react render]
        S[src/test/setup.ts] -->|extends expect with| B
    end

    subgraph "Component Test Files"
        D[Button.test.tsx] -->|imports| A
        E[Dialog.test.tsx] -->|imports| A
        F[Tabs.test.tsx] -->|imports| A
        G[...78 components] -->|imports| A
    end

    subgraph "CI Pipeline"
        H[test:a11y script] -->|vitest --run --grep Accessibility| D
        H --> E
        H --> F
        H --> G
    end
```

The architecture is a single shared utility module consumed by all component test files. There is no runtime code — this is purely test infrastructure.

**Key design decisions:**

1. **Single helper file, not a package** — The helper lives at `src/test/a11y-helpers.ts` alongside `setup.ts`. It's a project-internal utility, not a publishable module. This keeps the dependency graph flat and avoids over-engineering.

2. **Augment existing test files, don't create separate a11y test files** — Accessibility tests are added as a new `describe('Accessibility', ...)` block inside each component's existing `{Name}.test.tsx`. This keeps all component tests co-located and avoids file proliferation.

3. **Grep-based filtering over Vitest projects** — The `test:a11y` script uses `--grep "Accessibility"` to run only a11y blocks. This is simpler than configuring Vitest workspace projects and works with the existing single `vitest.config.ts`.

4. **Helper functions return results, assertions happen in tests** — The core `checkA11y` function returns `AxeResults` so tests can make custom assertions. The convenience `assertA11y` function handles the common case of "render + assert no violations" in one call.

## Components and Interfaces

### a11y-helpers.ts Module API

```typescript
// src/test/a11y-helpers.ts

import { axe, type AxeResults } from 'vitest-axe';
import { render, type RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';
import type { RunOptions, Spec } from 'axe-core';

/**
 * Default axe configuration targeting WCAG 2.1 A + AA.
 */
export const DEFAULT_AXE_CONFIG: RunOptions = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
  },
};

/**
 * Tier classification for prioritized rollout.
 */
export const COMPONENT_TIERS = {
  tier1: [
    'Accordion', 'Autocomplete', 'Button', 'Checkbox', 'DatePicker',
    'Dialog', 'Drawer', 'Dropdown', 'FileUpload', 'Input', 'Menu',
    'Modal', 'OTPInput', 'Pagination', 'Popover', 'Radio', 'Rating',
    'SearchBar', 'Select', 'Slider', 'Stepper', 'Switch', 'Table',
    'Tabs', 'Textarea', 'Toast', 'Tooltip', 'TreeView',
  ],
  tier2: [
    'Alert', 'Breadcrumb', 'Header', 'Footer', 'NavigationMenu',
    'Notification', 'Progress', 'Snackbar', 'Tag', 'Timeline',
  ],
  tier3: [
    'Avatar', 'Badge', 'Card', 'Center', 'Container', 'Divider',
    'EmptyState', 'Flex', 'Grid', 'List', 'Section', 'Skeleton',
    'Spacer', 'Spinner', 'Stack', 'Statistic',
  ],
} as const;

/**
 * Run axe accessibility scan on a rendered DOM container.
 * Returns raw AxeResults for custom assertions.
 *
 * @param container - The DOM element to scan (typically from render().container)
 * @param overrides - Optional axe RunOptions to merge with defaults
 * @returns AxeResults from axe-core
 */
export async function checkA11y(
  container: Element,
  overrides?: RunOptions,
): Promise<AxeResults>;

/**
 * Render a React element, run axe, and assert zero violations.
 * Convenience wrapper for the most common a11y test pattern.
 *
 * @param ui - React element to render and scan
 * @param overrides - Optional axe RunOptions to merge with defaults
 * @throws AssertionError if any axe violations are found
 */
export async function assertA11y(
  ui: ReactElement,
  overrides?: RunOptions,
): Promise<void>;

/**
 * Render a component in multiple states and assert zero axe violations for each.
 * Useful for testing default, disabled, error, loading, and variant states in one call.
 *
 * @param states - Array of { name, ui } objects describing each state to scan
 * @param overrides - Optional axe RunOptions to merge with defaults
 * @throws AssertionError with state name context if any state has violations
 */
export async function assertA11yStates(
  states: Array<{ name: string; ui: ReactElement }>,
  overrides?: RunOptions,
): Promise<void>;
```

### Implementation Details

```typescript
// checkA11y implementation sketch
export async function checkA11y(
  container: Element,
  overrides?: RunOptions,
): Promise<AxeResults> {
  const config = overrides
    ? { ...DEFAULT_AXE_CONFIG, ...overrides }
    : DEFAULT_AXE_CONFIG;
  return axe(container, config);
}

// assertA11y implementation sketch
export async function assertA11y(
  ui: ReactElement,
  overrides?: RunOptions,
): Promise<void> {
  const { container } = render(ui);
  const results = await checkA11y(container, overrides);
  expect(results).toHaveNoViolations();
}

// assertA11yStates implementation sketch
export async function assertA11yStates(
  states: Array<{ name: string; ui: ReactElement }>,
  overrides?: RunOptions,
): Promise<void> {
  for (const { name, ui } of states) {
    const { container, unmount } = render(ui);
    const results = await checkA11y(container, overrides);
    expect(results).toHaveNoViolations();
    unmount();
  }
}
```

### Standardized Test Pattern for Component Files

Each component test file follows this structure for the Accessibility block:

```typescript
// Example: Button.test.tsx — new Accessibility block added at end of file

import { assertA11y, assertA11yStates, checkA11y } from '@/test/a11y-helpers';

describe('Button', () => {
  // ... existing rendering, variant, interaction tests ...

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Button>Submit</Button>);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Button disabled>Submit</Button>);
    });

    it('has no axe violations when loading', async () => {
      await assertA11y(<Button loading>Submit</Button>);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'primary', ui: <Button variant="primary">Action</Button> },
        { name: 'secondary', ui: <Button variant="secondary">Action</Button> },
        { name: 'destructive', ui: <Button variant="destructive">Action</Button> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Button>Submit</Button>);
        await user.tab();
        expect(screen.getByRole('button')).toHaveFocus();
      });

      it('activates via Enter key', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Submit</Button>);
        await user.tab();
        await user.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('activates via Space key', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Submit</Button>);
        await user.tab();
        await user.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
```

**Pattern rules by component type:**

| Component Type | Default axe scan | State scans | Variant scan | Keyboard nav block |
|---|---|---|---|---|
| Interactive (Tier 1) | ✅ Required | disabled, error, loading (as applicable) | ✅ At least one non-default | ✅ Required (Tab, Enter/Space, Arrow, Escape, Home/End as applicable) |
| Navigation/Feedback (Tier 2) | ✅ Required | As applicable | ✅ If variants exist | ✅ If interactive elements present |
| Static/Layout (Tier 3) | ✅ Required | N/A | ✅ If variants exist | ❌ Not applicable |

### Keyboard Navigation Test Patterns by Widget Type

| Widget Pattern | Keys to Test | Components |
|---|---|---|
| Action button | Tab, Enter, Space | Button, Switch, Checkbox, Radio |
| Text input | Tab, typing | Input, Textarea, SearchBar, OTPInput |
| Overlay trigger | Tab, Enter/Space to open, Escape to close | Dialog, Modal, Drawer, Popover, Tooltip, Dropdown |
| List navigation | Arrow keys, Home, End | Tabs, Accordion, Menu, Select, TreeView |
| Composite widget | Combination of above | DatePicker, Autocomplete, Table, Pagination, Stepper |

## Data Models

No persistent data models are introduced. The module deals exclusively with test-time types:

```typescript
/** Input to assertA11yStates — describes a component rendering to scan */
interface ComponentState {
  /** Human-readable state name for error messages (e.g., "disabled", "error") */
  name: string;
  /** React element to render and scan */
  ui: ReactElement;
}

/** Re-exported from vitest-axe for consumer convenience */
export type { AxeResults } from 'vitest-axe';

/** Re-exported from axe-core for override configuration */
export type { RunOptions } from 'axe-core';
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: checkA11y returns valid AxeResults for any container

*For any* valid DOM container element (including empty containers, containers with text, and containers with nested elements), `checkA11y(container)` SHALL return an `AxeResults` object with a `violations` array property.

**Validates: Requirements 1.1**

### Property 2: assertA11y passes for any accessible element and fails for any inaccessible element

*For any* React element that produces accessible HTML (e.g., a `<button>` with text content), `assertA11y(element)` SHALL resolve without error. *For any* React element that produces inaccessible HTML (e.g., an `<img>` without `alt`), `assertA11y(element)` SHALL throw an assertion error.

**Validates: Requirements 1.3**

### Property 3: Rule overrides are respected for any override configuration

*For any* axe rule ID that would normally produce a violation, passing an override configuration that disables that rule SHALL cause `checkA11y` to return results that do not include violations for that rule.

**Validates: Requirements 1.4**

### Property 4: assertA11yStates scans every provided state

*For any* array of `{ name, ui }` state objects where all elements are accessible, `assertA11yStates(states)` SHALL resolve without error. If any single state in the array is inaccessible, the function SHALL throw an assertion error referencing that state.

**Validates: Requirements 1.6**

## Error Handling

### Axe Scan Failures

When `assertA11y` or `assertA11yStates` encounters violations, the `toHaveNoViolations()` matcher from `vitest-axe` produces a detailed error message including:
- Rule ID and description
- WCAG criteria violated
- Affected DOM nodes (CSS selectors)
- Remediation guidance

No custom error formatting is needed — `vitest-axe` handles this well.

### State-Specific Failure Context

`assertA11yStates` iterates states sequentially. If a state fails, the standard Vitest assertion error includes the violation details. The `name` field in each state object helps developers identify which rendering caused the failure when reading test output.

### Timeout Handling

Axe scans on complex components (e.g., Table with many rows, TreeView with deep nesting) may be slow in jsdom. The existing Vitest default timeout (5000ms) should suffice for individual component scans. If specific components need more time, tests can use Vitest's `{ timeout: 15000 }` option on individual test cases, matching the pattern already used in page-level tests.

### Known Limitations

- **jsdom limitations**: axe-core in jsdom cannot detect visual-only issues (color contrast with computed styles, focus indicator visibility, animation). These require manual review or Playwright-based visual tests.
- **Dynamic content**: Components that fetch data or rely on timers (Toast auto-dismiss) need careful test setup to ensure the DOM is in the expected state before scanning.
- **Third-party Radix primitives**: Some Radix UI components may produce axe warnings for patterns that are intentionally non-standard. Use the `overrides` parameter to document and suppress these with inline comments explaining the rationale.

## Testing Strategy

### Unit Tests for a11y-helpers.ts

The helper module itself gets a dedicated test file at `src/test/a11y-helpers.test.ts`:

- **checkA11y returns AxeResults**: Verify the function returns a result object with `violations` array for a simple accessible element.
- **Default config uses WCAG 2.1 AA tags**: Verify `DEFAULT_AXE_CONFIG.runOnly.values` contains `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`.
- **assertA11y passes for accessible element**: Render a `<button>Click</button>`, assert no error.
- **assertA11y fails for inaccessible element**: Render an `<img>` without `alt`, assert it throws.
- **Override config disables specific rule**: Pass an override that disables `image-alt`, render an `<img>` without `alt`, assert no violation for that rule.
- **assertA11yStates scans all states**: Provide 3 accessible states, assert all pass. Provide 1 inaccessible state among 2 accessible ones, assert failure.
- **COMPONENT_TIERS contains expected components**: Verify tier lists are non-empty and contain key components.

### Property-Based Tests for a11y-helpers.ts

Property-based testing applies to the helper module because the functions are pure wrappers with clear input/output behavior that varies meaningfully with input.

- **Library**: `fast-check` (already compatible with Vitest ecosystem)
- **Minimum iterations**: 100 per property
- **Tag format**: `Feature: comprehensive-a11y-testing, Property {N}: {description}`

Each correctness property (1–4) maps to a single property-based test:

1. Generate random valid HTML strings → wrap in container → `checkA11y` → verify result has `violations` array
2. Generate random accessible elements (buttons with text, headings, labeled inputs) → `assertA11y` → verify no throw; generate inaccessible elements → verify throw
3. Generate random rule IDs from axe rule list → create override disabling that rule → verify violations exclude that rule
4. Generate random arrays of accessible elements as states → `assertA11yStates` → verify no throw; inject one inaccessible element → verify throw

### Component-Level Tests (per-component, example-based)

Each component's `Accessibility` describe block contains:
- Axe scan tests (example-based, not property-based — each component is a concrete example)
- Keyboard navigation tests (example-based interaction tests)

These are not candidates for PBT because each component is a specific, concrete artifact — not a parameterized input space.

### test:a11y Script Update

Current script:
```json
"test:a11y": "vitest --run src/app/react-core-package/src/components/Field/Field.test.tsx src/app/react-core-package/src/components/Dialog/Dialog.test.tsx src/app/react-core-package/src/components/Table/Table.test.tsx src/app/react-core-package/src/components/Autocomplete/Autocomplete.test.tsx"
```

Updated script:
```json
"test:a11y": "vitest --run --grep 'Accessibility' src/app/react-core-package/src/components/*/*.test.tsx"
```

This runs only the `Accessibility` describe blocks from all component test files, keeping CI fast by skipping rendering/interaction/ref tests.

### Tiered Rollout Strategy

1. **Phase 1 — Infrastructure**: Create `a11y-helpers.ts`, its tests, update `test:a11y` script
2. **Phase 2 — Tier 1** (28 components): Add `Accessibility` blocks to all interactive widgets. These carry the highest a11y risk.
3. **Phase 3 — Tier 2** (10 components): Add `Accessibility` blocks to navigation/feedback components.
4. **Phase 4 — Tier 3** (16 components): Add `Accessibility` blocks to static/layout components. These are lowest risk (mostly structural containers).

Each phase is independently shippable — the `test:a11y` script picks up new `Accessibility` blocks automatically via the glob + grep pattern.

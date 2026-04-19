import { axe } from 'vitest-axe';
import 'vitest-axe/extend-expect';
import type * as AxeCore from 'axe-core';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

/** Re-exported for consumer convenience */
export type AxeResults = AxeCore.AxeResults;
export type RunOptions = AxeCore.RunOptions;

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
 */
export async function checkA11y(
  container: Element,
  overrides?: RunOptions,
): Promise<AxeResults> {
  const config = overrides
    ? { ...DEFAULT_AXE_CONFIG, ...overrides }
    : DEFAULT_AXE_CONFIG;
  return axe(container, config) as Promise<AxeResults>;
}

/**
 * Render a React element, run axe, and assert zero violations.
 */
export async function assertA11y(
  ui: ReactElement,
  overrides?: RunOptions,
): Promise<void> {
  const { container } = render(ui);
  const results = await checkA11y(container, overrides);
  (expect(results) as any).toHaveNoViolations();
}

/**
 * Render a component in multiple states and assert zero axe violations for each.
 * Unmounts between states to avoid DOM pollution.
 */
export async function assertA11yStates(
  states: Array<{ name: string; ui: ReactElement }>,
  overrides?: RunOptions,
): Promise<void> {
  for (const { name, ui } of states) {
    const { container, unmount } = render(ui);
    const results = await checkA11y(container, overrides);
    (expect(results) as any).toHaveNoViolations();
    unmount();
  }
}

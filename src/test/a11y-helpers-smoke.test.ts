import { DEFAULT_AXE_CONFIG, COMPONENT_TIERS, checkA11y, assertA11y, assertA11yStates } from '@/test/a11y-helpers';
import type { AxeResults, RunOptions } from '@/test/a11y-helpers';

describe('a11y-helpers smoke test', () => {
  it('exports DEFAULT_AXE_CONFIG', () => {
    expect(DEFAULT_AXE_CONFIG).toBeDefined();
    expect(DEFAULT_AXE_CONFIG.runOnly).toBeDefined();
  });

  it('exports COMPONENT_TIERS', () => {
    expect(COMPONENT_TIERS.tier1).toHaveLength(28);
    expect(COMPONENT_TIERS.tier2).toHaveLength(10);
    expect(COMPONENT_TIERS.tier3).toHaveLength(16);
  });

  it('exports checkA11y function', () => {
    expect(typeof checkA11y).toBe('function');
  });

  it('exports assertA11y function', () => {
    expect(typeof assertA11y).toBe('function');
  });

  it('exports assertA11yStates function', () => {
    expect(typeof assertA11yStates).toBe('function');
  });
});

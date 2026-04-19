import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  DEFAULT_AXE_CONFIG,
  COMPONENT_TIERS,
  checkA11y,
  assertA11y,
  assertA11yStates,
} from '@/test/a11y-helpers';

describe('a11y-helpers', () => {
  describe('DEFAULT_AXE_CONFIG', () => {
    it('runOnly.values contains all 4 WCAG tags', () => {
      const values = (DEFAULT_AXE_CONFIG.runOnly as { type: string; values: string[] }).values;
      expect(values).toContain('wcag2a');
      expect(values).toContain('wcag2aa');
      expect(values).toContain('wcag21a');
      expect(values).toContain('wcag21aa');
      expect(values).toHaveLength(4);
    });
  });

  describe('COMPONENT_TIERS', () => {
    it('tier1 is non-empty and contains key interactive components', () => {
      expect(COMPONENT_TIERS.tier1.length).toBeGreaterThan(0);
      expect(COMPONENT_TIERS.tier1).toContain('Button');
      expect(COMPONENT_TIERS.tier1).toContain('Dialog');
      expect(COMPONENT_TIERS.tier1).toContain('Tabs');
      expect(COMPONENT_TIERS.tier1).toContain('Input');
    });

    it('tier2 is non-empty and contains key nav/feedback components', () => {
      expect(COMPONENT_TIERS.tier2.length).toBeGreaterThan(0);
      expect(COMPONENT_TIERS.tier2).toContain('Alert');
      expect(COMPONENT_TIERS.tier2).toContain('Breadcrumb');
      expect(COMPONENT_TIERS.tier2).toContain('Progress');
    });

    it('tier3 is non-empty and contains key static/layout components', () => {
      expect(COMPONENT_TIERS.tier3.length).toBeGreaterThan(0);
      expect(COMPONENT_TIERS.tier3).toContain('Avatar');
      expect(COMPONENT_TIERS.tier3).toContain('Card');
      expect(COMPONENT_TIERS.tier3).toContain('Skeleton');
    });
  });

  describe('checkA11y', () => {
    it('returns AxeResults with violations array for an accessible element', async () => {
      const { container } = render(React.createElement('button', null, 'Click me'));
      const results = await checkA11y(container);
      expect(results).toBeDefined();
      expect(Array.isArray(results.violations)).toBe(true);
      expect(results.violations).toHaveLength(0);
    });
  });

  describe('assertA11y', () => {
    it('passes for an accessible <button>', async () => {
      await expect(
        assertA11y(React.createElement('button', null, 'Click')),
      ).resolves.toBeUndefined();
    });

    it('fails for an <img> without alt attribute', async () => {
      await expect(
        assertA11y(React.createElement('img', { src: 'test.png' })),
      ).rejects.toThrow();
    });
  });

  describe('override config', () => {
    it('disabling image-alt rule allows <img> without alt to pass', async () => {
      const { container } = render(React.createElement('img', { src: 'test.png' }));
      const results = await checkA11y(container, {
        rules: { 'image-alt': { enabled: false } },
      });
      const imageAltViolations = results.violations.filter(
        (v) => v.id === 'image-alt',
      );
      expect(imageAltViolations).toHaveLength(0);
    });
  });

  describe('assertA11yStates', () => {
    it('passes when all states are accessible', async () => {
      const states = [
        { name: 'default', ui: React.createElement('button', null, 'OK') },
        { name: 'disabled', ui: React.createElement('button', { disabled: true }, 'OK') },
        { name: 'heading', ui: React.createElement('h1', null, 'Title') },
      ];
      await expect(assertA11yStates(states)).resolves.toBeUndefined();
    });

    it('fails when one state is inaccessible', async () => {
      const states = [
        { name: 'accessible', ui: React.createElement('button', null, 'OK') },
        { name: 'inaccessible', ui: React.createElement('img', { src: 'x.png' }) },
      ];
      await expect(assertA11yStates(states)).rejects.toThrow();
    });
  });
});

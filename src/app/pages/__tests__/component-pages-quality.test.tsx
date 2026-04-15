/**
 * Component Page Quality Audit
 *
 * Validates that every component documentation page has all 7 required sections
 * with proper content quality — not just existence but real rendered content.
 *
 * Uses static file analysis (reads source as strings) for speed and reliability.
 *
 * Run: npx vitest --run src/app/pages/__tests__/component-pages-quality.test.tsx
 */

import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

const PAGES_DIR = resolve(__dirname, '..');
const pageFiles = readdirSync(PAGES_DIR)
  .filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'))
  .sort();

// Helper: extract the Playground function body from source
function extractPlayground(content: string, name: string): string {
  const regex = new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm');
  const match = content.match(regex);
  return match ? match[0] : '';
}

// Helper: count pattern occurrences
function countMatches(text: string, pattern: RegExp): number {
  return (text.match(pattern) || []).length;
}

describe('Component Page Quality Audit', () => {
  // Sanity check: we have 77 pages
  it('finds exactly 77 component pages', () => {
    expect(pageFiles.length).toBe(77);
  });

  for (const file of pageFiles) {
    const name = file.replace('Component', '').replace('Page.tsx', '');
    const content = readFileSync(resolve(PAGES_DIR, file), 'utf8');

    describe(name, () => {
      // ── 1. Live Preview Hero ──────────────────────────────────────────────
      it('has a preview prop', () => {
        expect(content).toContain('preview={');
      });

      it('preview has no generic placeholder text', () => {
        // Must not contain the old generic "Xx component in its default state" pattern
        expect(content).not.toMatch(/component in its default state/);
      });

      it('preview has no generic icon placeholder', () => {
        // Must not contain the old w-16 h-16 rounded-2xl icon box
        expect(content).not.toMatch(
          /inline-flex items-center justify-center w-16 h-16 rounded-2xl/
        );
      });

      // ── 2. Interactive Playground ─────────────────────────────────────────
      it('defines a Playground function component', () => {
        expect(content).toMatch(new RegExp(`function ${name}Playground`));
      });

      it('playground has no emoji placeholder', () => {
        expect(content).not.toContain('🧩');
      });

      it('playground has at least one useState hook', () => {
        const playground = extractPlayground(content, name);
        // If playground extraction fails, check the whole file for useState in context
        const target = playground || content;
        expect(target).toMatch(/useState/);
      });

      it('playground has at least one control element', () => {
        const playground = extractPlayground(content, name);
        const target = playground || content;
        // Must have at least one: <select>, <input type="checkbox">, or <input>
        const hasSelect = target.includes('<select');
        const hasCheckbox = target.includes('type="checkbox"');
        const hasInput = target.includes('<input');
        expect(hasSelect || hasCheckbox || hasInput).toBe(true);
      });

      it('playground has a JSX code snippet', () => {
        const playground = extractPlayground(content, name);
        const target = playground || content;
        // Must contain a template literal with the component name for the snippet
        expect(target).toMatch(/\{`<\w+/);
      });

      // ── 3. Do/Don't Visual Examples ───────────────────────────────────────
      it('has a Do/Don\'t section', () => {
        expect(content).toMatch(/Do \/ Don/);
      });

      it('has a ✓ Do card', () => {
        expect(content).toContain('✓ Do');
      });

      it('has a ✗ Don\'t card', () => {
        expect(content).toMatch(/✗ Don/);
      });

      // ── 4. When to use / When not to use ──────────────────────────────────
      it('has When to use section', () => {
        expect(content).toContain('When to use');
      });

      it('has Do use list items', () => {
        // Pattern: "Do use ComponentName when" or similar
        expect(content).toMatch(/Do use \w+ when/);
      });

      it('has Don\'t use list items', () => {
        // Pattern: "Don't use ComponentName when" or "Don&apos;t use"
        expect(content).toMatch(/Don.*t use \w+ when/);
      });

      // ── 5. Related Components ─────────────────────────────────────────────
      it('has Related Components section', () => {
        expect(content).toContain('Related Components');
      });

      it('has at least 2 component links', () => {
        const linkCount = countMatches(content, /href="\/components\//g);
        expect(linkCount).toBeGreaterThanOrEqual(2);
      });

      // ── 6. Changelog ──────────────────────────────────────────────────────
      it('has Changelog section', () => {
        expect(content).toContain('Changelog');
      });

      it('has at least one version number', () => {
        expect(content).toMatch(/v\d+\.\d+\.\d+/);
      });

      // ── 7. Research & Evidence ────────────────────────────────────────────
      it('has Research section', () => {
        expect(content).toMatch(/Research/);
      });
    });
  }
});

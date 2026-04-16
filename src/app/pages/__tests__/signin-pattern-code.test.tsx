/**
 * Tests that SignInPattern page has code download section with all 3 frameworks.
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

const content = readFileSync(resolve(__dirname, '../SignInPattern.tsx'), 'utf8');

describe('SignInPattern Code Downloads', () => {
  it('has a code-downloads section', () => {
    expect(content).toContain('id="code-downloads"');
  });

  it('has Code Downloads heading', () => {
    expect(content).toContain('Code Downloads');
  });

  it('has React implementation code', () => {
    expect(content).toContain('REACT_CODE');
    expect(content).toContain('SignInPage');
    expect(content).toContain('useState');
  });

  it('has Angular implementation code', () => {
    expect(content).toContain('ANGULAR_CODE');
    expect(content).toContain('SignInComponent');
    expect(content).toContain('FormGroup');
  });

  it('has HTML implementation code', () => {
    expect(content).toContain('HTML_CODE');
    expect(content).toContain('signInForm');
    expect(content).toContain('togglePassword');
  });

  it('has download buttons for all 3 frameworks', () => {
    expect(content).toContain('SignInPage.tsx');
    expect(content).toContain('sign-in.component.ts');
    expect(content).toContain('sign-in.html');
  });

  it('has copy functionality', () => {
    expect(content).toContain('copyToClipboard');
    expect(content).toContain('copiedId');
  });

  it('has code-downloads in sidebar navigation', () => {
    expect(content).toContain('"code-downloads"');
    expect(content).toContain('"Code Downloads"');
  });

  it('React code includes form validation', () => {
    expect(content).toMatch(/validate|Validators|required/);
  });

  it('React code includes accessibility', () => {
    expect(content).toContain('aria-required');
    expect(content).toContain('aria-label');
    expect(content).toContain('role="alert"');
  });

  it('HTML code includes accessibility', () => {
    expect(content).toContain('aria-required="true"');
    expect(content).toContain('aria-label="Show password"');
  });
});

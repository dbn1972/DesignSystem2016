import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ComponentDocumentation } from '../ComponentDocumentation';

const BASE_PROPS = {
  name: 'Button',
  description: 'Primary interactive element for user actions.',
  category: 'Form',
  maturity: 'beta' as const,
  tier: 'core' as const,
  since: 'v1.0.0',
  props: [
    { name: 'variant', type: "'primary' | 'secondary'", default: "'primary'", required: false, description: 'Visual variant' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, description: 'Disabled state' },
    { name: 'onClick', type: '() => void', required: true, description: 'Click handler' },
  ],
  examples: [
    { title: 'Basic Button', description: 'Default usage', code: '<Button>Click me</Button>' },
  ],
  reactCode: {
    component: 'export function Button() { return <button>Click</button>; }',
    types: 'export interface ButtonProps { variant?: string; }',
  },
  angularCode: {
    component: '@Component({}) export class ButtonComponent {}',
    module: '@NgModule({}) export class ButtonModule {}',
    types: 'export interface ButtonProps {}',
  },
  comparisons: [
    { system: 'Material UI', component: 'Button', variants: 'contained, outlined, text', accessibility: 'WCAG 2.1 AA', documentation: 'Comprehensive', link: 'https://mui.com' },
  ],
  accessibility: {
    wcagLevel: 'WCAG 2.1 Level AA',
    features: ['Keyboard accessible', 'Screen reader support'],
    keyboardSupport: [
      { key: 'Enter / Space', action: 'Activate button' },
      { key: 'Tab', action: 'Move focus' },
    ],
    screenReader: ['Announces button label', 'Announces disabled state'],
  },
};

function renderDocs(props = {}) {
  return render(
    <MemoryRouter>
      <ComponentDocumentation {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

describe('ComponentDocumentation', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the component name as h1', () => {
    renderDocs();
    expect(screen.getByRole('heading', { level: 1, name: 'Button' })).toBeInTheDocument();
  });

  it('renders the description', () => {
    renderDocs();
    expect(screen.getByText('Primary interactive element for user actions.')).toBeInTheDocument();
  });

  it('renders maturity badge', () => {
    renderDocs();
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('renders category badge', () => {
    renderDocs();
    expect(screen.getByText('Category: Form')).toBeInTheDocument();
  });

  it('renders since badge', () => {
    renderDocs();
    expect(screen.getByText('Since: v1.0.0')).toBeInTheDocument();
  });

  // ── Tabs ──────────────────────────────────────────────────────────────────

  it('renders all tab buttons', () => {
    renderDocs();
    expect(screen.getByRole('button', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Props API' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Examples' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Code Downloads' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Design System Comparison' })).toBeInTheDocument();
  });

  it('shows Overview tab content by default', () => {
    renderDocs();
    expect(screen.getByText('Installation')).toBeInTheDocument();
    expect(screen.getByText('Accessibility')).toBeInTheDocument();
  });

  // ── Props API tab ─────────────────────────────────────────────────────────

  it('shows props table when Props API tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Props API' }));
    expect(screen.getByText('variant')).toBeInTheDocument();
    expect(screen.getByText('disabled')).toBeInTheDocument();
    expect(screen.getByText('onClick')).toBeInTheDocument();
  });

  it('marks required props correctly', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Props API' }));
    // "Required" appears as both a column header and a badge — check the badge specifically
    const requiredBadges = screen.getAllByText('Required');
    // At least one badge (for onClick prop) plus the column header
    expect(requiredBadges.length).toBeGreaterThanOrEqual(2);
  });

  // ── Examples tab ──────────────────────────────────────────────────────────

  it('shows examples when Examples tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Examples' }));
    expect(screen.getByText('Basic Button')).toBeInTheDocument();
    expect(screen.getByText('<Button>Click me</Button>')).toBeInTheDocument();
  });

  // ── Code Downloads tab ────────────────────────────────────────────────────

  it('shows React and Angular code when Code Downloads tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Code Downloads' }));
    expect(screen.getByText('React Implementation')).toBeInTheDocument();
    expect(screen.getByText('Angular Implementation')).toBeInTheDocument();
  });

  it('renders Download React Code button', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Code Downloads' }));
    expect(screen.getByRole('button', { name: /Download React Code/i })).toBeInTheDocument();
  });

  // ── Comparison tab ────────────────────────────────────────────────────────

  it('shows comparison table when Design System Comparison tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: 'Design System Comparison' }));
    expect(screen.getByText('Material UI')).toBeInTheDocument();
  });

  // ── Accessibility section ─────────────────────────────────────────────────

  it('shows WCAG level in overview', () => {
    renderDocs();
    expect(screen.getByText('WCAG 2.1 Level AA')).toBeInTheDocument();
  });

  it('shows keyboard support table', () => {
    renderDocs();
    expect(screen.getByText('Enter / Space')).toBeInTheDocument();
    expect(screen.getByText('Activate button')).toBeInTheDocument();
  });

  // ── Token mappings tab (optional) ─────────────────────────────────────────

  it('shows Token Mappings tab when tokens are provided', () => {
    renderDocs({
      tokens: {
        file: 'button.tokens.ts',
        mappings: [{ property: 'background', token: 'color.brand.primary', value: '#005196' }],
      },
    });
    expect(screen.getByRole('button', { name: 'Token Mappings' })).toBeInTheDocument();
  });

  it('does not show Token Mappings tab when tokens are not provided', () => {
    renderDocs();
    expect(screen.queryByRole('button', { name: 'Token Mappings' })).not.toBeInTheDocument();
  });
});

import React from 'react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
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
  webComponentsCode: {
    component: "import '@ux4g/web-components';",
    html: '<ux4g-button>Click me</ux4g-button>',
    package: 'npm install @ux4g/web-components @ux4g/styles',
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

beforeEach(() => {
  vi.restoreAllMocks();
});

function mockDownload() {
  const click = vi.fn();
  const anchor = {
    href: '',
    download: '',
    click,
  } as unknown as HTMLAnchorElement;

  const originalCreateElement = document.createElement.bind(document);
  vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
    if (tagName === 'a') return anchor;
    return originalCreateElement(tagName);
  });

  const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock');
  const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

  return { anchor, click, createObjectURL, revokeObjectURL };
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
    expect(screen.getByText('Form')).toBeInTheDocument();
  });

  it('renders since badge', () => {
    renderDocs();
    expect(screen.getByText('Since v1.0.0')).toBeInTheDocument();
  });

  // ── Tabs ──────────────────────────────────────────────────────────────────

  it('renders all tab buttons', () => {
    renderDocs();
    expect(screen.getByRole('button', { name: /Overview/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Props API/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Examples/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Code Downloads/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Comparison/ })).toBeInTheDocument();
  });

  it('shows Overview tab content by default', () => {
    renderDocs();
    expect(screen.getByRole('heading', { name: 'Installation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Accessibility' })).toBeInTheDocument();
  });

  // ── Props API tab ─────────────────────────────────────────────────────────

  it('shows props table when Props API tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Props API/ }));
    expect(screen.getByText('variant')).toBeInTheDocument();
    expect(screen.getByText('disabled')).toBeInTheDocument();
    expect(screen.getByText('onClick')).toBeInTheDocument();
  });

  it('marks required props correctly', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Props API/ }));
    // "Required" appears as both a column header and a badge — check the badge specifically
    const requiredBadges = screen.getAllByText('Required');
    // At least one badge (for onClick prop) plus the column header
    expect(requiredBadges.length).toBeGreaterThanOrEqual(2);
  });

  // ── Examples tab ──────────────────────────────────────────────────────────

  it('shows examples when Examples tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Examples/ }));
    expect(screen.getByText('Basic Button')).toBeInTheDocument();
    expect(screen.getByText('<Button>Click me</Button>')).toBeInTheDocument();
  });

  // ── Code Downloads tab ────────────────────────────────────────────────────

  it('shows React and Angular code when Code Downloads tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Code Downloads/ }));
    expect(screen.getByText('React implementation')).toBeInTheDocument();
    expect(screen.getByText('Angular implementation')).toBeInTheDocument();
    expect(screen.getByText('Web Components / HTML')).toBeInTheDocument();
  });

  it('renders Download React Code button', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Code Downloads/ }));
    expect(screen.getByRole('button', { name: /Download React Code/i })).toBeInTheDocument();
  });

  it('downloads bundled code for React, Angular, and Web Components', async () => {
    const user = userEvent.setup();

    renderDocs();
    await user.click(screen.getByRole('button', { name: /Code Downloads/ }));

    const { anchor, click, createObjectURL, revokeObjectURL } = mockDownload();

    await user.click(screen.getByRole('button', { name: /Download React code/i }));
    expect(createObjectURL).toHaveBeenCalled();
    expect(anchor.download).toBe('Button.tsx');
    expect(click).toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: /Download Angular code/i }));
    expect(anchor.download).toBe('button.component.ts');
    expect(click).toHaveBeenCalledTimes(2);

    await user.click(screen.getByRole('button', { name: /Download Web code/i }));
    expect(anchor.download).toBe('button.web.ts');
    expect(click).toHaveBeenCalledTimes(3);

    expect(revokeObjectURL).toHaveBeenCalledTimes(3);
  });

  // ── Comparison tab ────────────────────────────────────────────────────────

  it('shows comparison table when Design System Comparison tab is clicked', async () => {
    const user = userEvent.setup();
    renderDocs();
    await user.click(screen.getByRole('button', { name: /Comparison/ }));
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
    expect(screen.getByRole('button', { name: /Tokens/ })).toBeInTheDocument();
  });

  it('does not show Token Mappings tab when tokens are not provided', () => {
    renderDocs();
    expect(screen.queryByRole('button', { name: /^Tokens/ })).not.toBeInTheDocument();
  });
});

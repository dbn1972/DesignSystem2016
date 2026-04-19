import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';
import { assertA11y } from '@/test/a11y-helpers';

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack><span>A</span><span>B</span></Stack>);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('defaults to vertical (flex-col)', () => {
    const { container } = render(<Stack><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass('flex-col');
  });

  it('renders horizontal', () => {
    const { container } = render(<Stack direction="horizontal"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('applies gap', () => {
    const { container } = render(<Stack gap={24}><span>A</span></Stack>);
    expect(container.firstChild).toHaveStyle({ gap: '24px' });
  });

  it('applies string gap', () => {
    const { container } = render(<Stack gap="2rem"><span>A</span></Stack>);
    expect(container.firstChild).toHaveStyle({ gap: '2rem' });
  });

  it('applies alignment', () => {
    const { container } = render(<Stack align="center"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass('items-center');
  });

  it('applies justify', () => {
    const { container } = render(<Stack justify="between"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass('justify-between');
  });

  it('applies wrap', () => {
    const { container } = render(<Stack wrap><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass('flex-wrap');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Stack ref={ref}><span>A</span></Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Stack><span>Item A</span><span>Item B</span></Stack>);
    });
  });
});

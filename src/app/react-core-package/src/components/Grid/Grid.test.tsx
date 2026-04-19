import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';
import { assertA11y } from '@/test/a11y-helpers';

describe('Grid', () => {
  it('renders children', () => { render(<Grid><span>A</span></Grid>); expect(screen.getByText('A')).toBeInTheDocument(); });
  it('has grid class', () => { const { container } = render(<Grid><span>A</span></Grid>); expect(container.firstChild).toHaveClass('grid'); });
  it('applies columns', () => { const { container } = render(<Grid columns={3}><span>A</span></Grid>); expect(container.firstChild).toHaveStyle({ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }); });
  it('applies string columns', () => { const { container } = render(<Grid columns="1fr 2fr"><span>A</span></Grid>); expect(container.firstChild).toHaveStyle({ gridTemplateColumns: '1fr 2fr' }); });
  it('applies gap', () => { const { container } = render(<Grid gap={16}><span>A</span></Grid>); expect(container.firstChild).toHaveStyle({ gap: '16px' }); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<Grid ref={ref}><span>A</span></Grid>); expect(ref.current).toBeInstanceOf(HTMLDivElement); });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Grid><span>Item A</span><span>Item B</span></Grid>);
    });
  });
});

import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';
import { assertA11y } from '@/test/a11y-helpers';

const sections = [{ title: 'Resources', links: [{ label: 'Docs', href: '/docs' }, { label: 'API', href: '/api' }] }];

describe('Footer', () => {
  it('renders as footer element', () => { const { container } = render(<Footer />); expect(container.querySelector('footer')).toBeInTheDocument(); });
  it('renders sections', () => { render(<Footer sections={sections} />); expect(screen.getByText('Resources')).toBeInTheDocument(); expect(screen.getByText('Docs')).toBeInTheDocument(); });
  it('renders copyright', () => { render(<Footer copyright="© 2026 Gov" />); expect(screen.getByText('© 2026 Gov')).toBeInTheDocument(); });
  it('renders logo', () => { render(<Footer logo={<span data-testid="logo">🏛️</span>} />); expect(screen.getByTestId('logo')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLElement>(); render(<Footer ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLElement); });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Footer />);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses through footer links', async () => {
        const user = userEvent.setup();
        render(
          <Footer sections={[{ title: 'Resources', links: [{ label: 'Docs', href: '/docs' }, { label: 'API', href: '/api' }] }]} />
        );
        await user.tab();
        expect(screen.getByRole('link', { name: 'Docs' })).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('link', { name: 'API' })).toHaveFocus();
      });
    });
  });
});

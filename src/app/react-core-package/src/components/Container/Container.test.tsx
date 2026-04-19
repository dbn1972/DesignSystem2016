import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';
import { assertA11y } from '@/test/a11y-helpers';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('applies max-width class', () => {
    const { container } = render(<Container maxWidth="lg">C</Container>);
    expect(container.firstChild).toHaveClass('max-w-screen-lg');
  });
  it('centers by default', () => {
    const { container } = render(<Container>C</Container>);
    expect(container.firstChild).toHaveClass('mx-auto');
  });
  it('removes centering when centered=false', () => {
    const { container } = render(<Container centered={false}>C</Container>);
    expect(container.firstChild).not.toHaveClass('mx-auto');
  });
  it('has padding by default', () => {
    const { container } = render(<Container>C</Container>);
    expect(container.firstChild).toHaveClass('px-4');
  });
  it('removes padding when padding=false', () => {
    const { container } = render(<Container padding={false}>C</Container>);
    expect(container.firstChild).not.toHaveClass('px-4');
  });
  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Container ref={ref}>C</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Container>Page content</Container>);
    });
  });
});

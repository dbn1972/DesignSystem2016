import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Avatar', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Priya Sharma" />);
    expect(screen.getByRole('img', { name: 'Priya Sharma' })).toBeInTheDocument();
  });

  it('uses alt text from alt prop', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Profile photo" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Profile photo');
  });

  it('falls back to name as alt when alt is not provided', () => {
    render(<Avatar src="https://example.com/photo.jpg" name="Rahul Singh" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Rahul Singh');
  });

  // ── Initials fallback ─────────────────────────────────────────────────────

  it('renders initials when no src is provided', () => {
    render(<Avatar name="Priya Sharma" />);
    expect(screen.getByText('PS')).toBeInTheDocument();
  });

  it('renders single initial for single-word name', () => {
    render(<Avatar name="Priya" />);
    expect(screen.getByText('P')).toBeInTheDocument();
  });

  it('renders max 2 initials for multi-word names', () => {
    render(<Avatar name="Priya Sharma Singh" />);
    expect(screen.getByText('PS')).toBeInTheDocument();
  });

  it('renders initials in uppercase', () => {
    render(<Avatar name="priya sharma" />);
    expect(screen.getByText('PS')).toBeInTheDocument();
  });

  // ── Image error fallback ──────────────────────────────────────────────────

  it('falls back to initials when image fails to load', async () => {
    const { getByRole, getByText } = render(<Avatar src="broken.jpg" name="Priya Sharma" />);
    const img = getByRole('img');
    await import('@testing-library/react').then(({ act }) =>
      act(() => { img.dispatchEvent(new Event('error')); })
    );
    expect(getByText('PS')).toBeInTheDocument();
  });

  // ── Default icon fallback ─────────────────────────────────────────────────

  it('renders default icon SVG when no src and no name', () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg', 'xl'] as const)('applies %s size class', (size) => {
    const { container } = render(<Avatar name="PS" size={size} />);
    expect(container.firstChild).toHaveClass(`ux4g-avatar-${size}`);
  });

  it('defaults to md size', () => {
    const { container } = render(<Avatar name="PS" />);
    expect(container.firstChild).toHaveClass('ux4g-avatar-md');
  });

  // ── Shape ─────────────────────────────────────────────────────────────────

  it('applies circle shape class by default', () => {
    const { container } = render(<Avatar name="PS" />);
    expect(container.firstChild).toHaveClass('ux4g-avatar-circle');
  });

  it('applies square shape class when set', () => {
    const { container } = render(<Avatar name="PS" shape="square" />);
    expect(container.firstChild).toHaveClass('ux4g-avatar-square');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the wrapper div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar name="PS" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Avatar name="Priya Sharma" />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'with image', ui: <Avatar src="https://example.com/photo.jpg" alt="Priya Sharma" /> },
        { name: 'with initials', ui: <Avatar name="Priya Sharma" /> },
        { name: 'with fallback', ui: <Avatar /> },
      ]);
    });
  });
});

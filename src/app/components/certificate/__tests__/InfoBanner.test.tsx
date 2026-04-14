import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfoBanner } from '../InfoBanner';
import { AlertCircle } from 'lucide-react';

describe('InfoBanner', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders string message', () => {
    render(<InfoBanner message="Your application is under review." />);
    expect(screen.getByText('Your application is under review.')).toBeInTheDocument();
  });

  it('renders ReactNode message', () => {
    render(<InfoBanner message={<ul><li>Item one</li></ul>} />);
    expect(screen.getByText('Item one')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<InfoBanner message="msg" title="Important Notice" />);
    expect(screen.getByText('Important Notice')).toBeInTheDocument();
  });

  it('does not render title element when not provided', () => {
    render(<InfoBanner message="msg" />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders children below message', () => {
    render(
      <InfoBanner message="msg">
        <button type="button">Contact support</button>
      </InfoBanner>
    );
    expect(screen.getByRole('button', { name: 'Contact support' })).toBeInTheDocument();
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['info', 'success', 'warning', 'error'] as const)(
    'applies %s variant border class',
    (variant) => {
      const { container } = render(<InfoBanner message="msg" variant={variant} />);
      const banner = container.firstChild as HTMLElement;
      // Each variant has a unique border colour class
      const variantBorderMap = {
        info: 'border-blue-300',
        success: 'border-green-300',
        warning: 'border-orange-300',
        error: 'border-red-300',
      };
      expect(banner.className).toContain(variantBorderMap[variant]);
    }
  );

  it('defaults to info variant', () => {
    const { container } = render(<InfoBanner message="msg" />);
    expect((container.firstChild as HTMLElement).className).toContain('border-blue-300');
  });

  // ── Icon ─────────────────────────────────────────────────────────────────

  it('renders icon when provided', () => {
    const { container } = render(<InfoBanner message="msg" icon={AlertCircle} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('does not render icon when not provided', () => {
    const { container } = render(<InfoBanner message="msg" />);
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });
});

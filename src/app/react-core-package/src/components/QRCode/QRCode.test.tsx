import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QRCode } from './QRCode';

describe('QRCode', () => {
  it('renders with role="img"', () => { render(<QRCode value="https://gov.in" />); expect(screen.getByRole('img')).toBeInTheDocument(); });
  it('has accessible label', () => { render(<QRCode value="https://gov.in" />); expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'QR code for: https://gov.in'); });
  it('uses custom label', () => { render(<QRCode value="x" label="Scan to pay" />); expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Scan to pay'); });
  it('displays value text', () => { render(<QRCode value="https://gov.in" />); expect(screen.getAllByText('https://gov.in').length).toBeGreaterThanOrEqual(1); });
  it('renders SVG', () => { const { container } = render(<QRCode value="x" />); expect(container.querySelector('svg')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<QRCode value="x" ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});

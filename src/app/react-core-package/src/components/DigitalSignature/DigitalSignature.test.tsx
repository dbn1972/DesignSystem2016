import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DigitalSignature } from './DigitalSignature';

describe('DigitalSignature', () => {
  it('renders a canvas element', () => {
    render(<DigitalSignature />);
    const canvases = screen.getAllByLabelText('Signature pad');
    const canvas = canvases.find((el) => el.tagName === 'CANVAS');
    expect(canvas).toBeInTheDocument();
  });

  it('renders sign and clear buttons', () => {
    render(<DigitalSignature />);
    expect(screen.getByRole('button', { name: 'Sign' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('has an accessible label via aria-label on the group', () => {
    render(<DigitalSignature label="Draw your signature" />);
    expect(screen.getByRole('group', { name: 'Draw your signature' })).toBeInTheDocument();
  });

  it('disables buttons when disabled', () => {
    render(<DigitalSignature disabled />);
    expect(screen.getByRole('button', { name: 'Sign' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<DigitalSignature ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

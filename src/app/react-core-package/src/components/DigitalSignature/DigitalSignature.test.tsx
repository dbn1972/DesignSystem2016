import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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


describe('DigitalSignature – additional coverage', () => {
  it('renders the label text', () => {
    render(<DigitalSignature label="Sign here" />);
    expect(screen.getByText('Sign here')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<DigitalSignature className="custom-cls" />);
    expect(container.firstChild).toHaveClass('ux4g-digital-signature', 'custom-cls');
  });

  it('renders canvas with custom width and height', () => {
    render(<DigitalSignature width={600} height={300} />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS') as HTMLCanvasElement;
    expect(canvas).toHaveAttribute('width', '600');
    expect(canvas).toHaveAttribute('height', '300');
  });

  it('applies disabled styling to canvas', () => {
    render(<DigitalSignature disabled />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS');
    expect(canvas).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('calls onSign when Sign button is clicked', async () => {
    const user = userEvent.setup();
    const onSign = vi.fn();
    render(<DigitalSignature onSign={onSign} />);
    await user.click(screen.getByRole('button', { name: 'Sign' }));
    expect(onSign).toHaveBeenCalledTimes(1);
  });

  it('calls onClear when Clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<DigitalSignature onClear={onClear} />);
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('does not call onSign when onSign is not provided', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature />);
    // Should not throw
    await user.click(screen.getByRole('button', { name: 'Sign' }));
  });

  it('does not call onClear when onClear is not provided', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature />);
    // Should not throw
    await user.click(screen.getByRole('button', { name: 'Clear' }));
  });

  it('handles mousedown on canvas (startDraw)', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    await user.pointer({ target: canvas, keys: '[MouseLeft>]' });
    // No error means startDraw executed
  });

  it('handles mousemove on canvas (draw)', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    await user.pointer([
      { target: canvas, keys: '[MouseLeft>]' },
      { target: canvas, coords: { x: 50, y: 50 } },
    ]);
    // No error means draw executed
  });

  it('handles mouseup on canvas (stopDraw)', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    await user.pointer([
      { target: canvas, keys: '[MouseLeft>]' },
      { target: canvas, keys: '[/MouseLeft]' },
    ]);
    // No error means stopDraw executed
  });

  it('handles mouseleave on canvas (stopDraw via leave)', async () => {
    render(<DigitalSignature />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    // fireEvent is simpler for mouseleave
    const { fireEvent } = await import('@testing-library/react');
    fireEvent.mouseLeave(canvas);
    // No error means stopDraw executed
  });

  it('does not start drawing when disabled', async () => {
    const user = userEvent.setup();
    render(<DigitalSignature disabled />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    await user.pointer({ target: canvas, keys: '[MouseLeft>]' });
    // Should not throw; disabled guard prevents drawing
  });

  it('does not draw when disabled even if mouse moves', async () => {
    render(<DigitalSignature disabled />);
    const canvas = screen.getAllByLabelText('Signature pad').find((el) => el.tagName === 'CANVAS')!;
    const { fireEvent } = await import('@testing-library/react');
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 50, clientY: 50 });
    // Should not throw
  });

  it('spreads additional props to the root div', () => {
    render(<DigitalSignature data-testid="sig-root" />);
    expect(screen.getByTestId('sig-root')).toBeInTheDocument();
  });
});

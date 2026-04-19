import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OTPInput } from './OTPInput';
import { assertA11y } from '@/test/a11y-helpers';

describe('OTPInput', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders 6 inputs by default', () => {
    render(<OTPInput autoFocus={false} />);
    expect(screen.getAllByRole('textbox')).toHaveLength(6);
  });

  it('renders the specified number of inputs', () => {
    render(<OTPInput length={4} autoFocus={false} />);
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
  });

  it('labels each input with its position', () => {
    render(<OTPInput length={4} autoFocus={false} />);
    expect(screen.getByRole('textbox', { name: 'Digit 1 of 4' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Digit 4 of 4' })).toBeInTheDocument();
  });

  it('renders with defaultValue pre-filled', () => {
    render(<OTPInput defaultValue="123" length={6} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    expect(inputs[3]).toHaveValue('');
  });

  // ── Typing ────────────────────────────────────────────────────────────────

  it('accepts a digit and moves focus to next input', async () => {
    const user = userEvent.setup();
    render(<OTPInput length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.keyboard('5');

    expect(inputs[0]).toHaveValue('5');
    expect(inputs[1]).toHaveFocus();
  });

  it('calls onChange with the full current value on each keystroke', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<OTPInput length={4} autoFocus={false} onChange={onChange} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.keyboard('3');
    expect(onChange).toHaveBeenCalledWith('3   '.trimEnd() || expect.any(String));
    // More precisely: first call should have '3' at position 0
    expect(onChange.mock.calls[0][0][0]).toBe('3');
  });

  it('calls onComplete when all digits are entered', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    render(<OTPInput length={4} autoFocus={false} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.keyboard('1');
    await user.keyboard('2');
    await user.keyboard('3');
    await user.keyboard('4');

    expect(onComplete).toHaveBeenCalledWith('1234');
  });

  it('does not call onComplete for partial input', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    render(<OTPInput length={4} autoFocus={false} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.keyboard('1');
    await user.keyboard('2');

    expect(onComplete).not.toHaveBeenCalled();
  });

  // ── Keyboard navigation ───────────────────────────────────────────────────

  it('moves focus to previous input on Backspace when current is empty', async () => {
    const user = userEvent.setup();
    render(<OTPInput defaultValue="12" length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    // Focus third input (index 2, which is empty)
    inputs[2].focus();
    await user.keyboard('{Backspace}');
    expect(inputs[1]).toHaveFocus();
  });

  it('moves focus left with ArrowLeft', async () => {
    const user = userEvent.setup();
    render(<OTPInput defaultValue="12" length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[2].focus();
    await user.keyboard('{ArrowLeft}');
    expect(inputs[1]).toHaveFocus();
  });

  it('moves focus right with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<OTPInput defaultValue="12" length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[1].focus();
    await user.keyboard('{ArrowRight}');
    expect(inputs[2]).toHaveFocus();
  });

  it('does not move focus left from first input', async () => {
    const user = userEvent.setup();
    render(<OTPInput length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.keyboard('{ArrowLeft}');
    expect(inputs[0]).toHaveFocus();
  });

  it('does not move focus right from last input', async () => {
    const user = userEvent.setup();
    render(<OTPInput defaultValue="1234" length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[3].focus();
    await user.keyboard('{ArrowRight}');
    expect(inputs[3]).toHaveFocus();
  });

  // ── Paste ─────────────────────────────────────────────────────────────────

  it('fills all inputs on paste', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<OTPInput length={6} autoFocus={false} onChange={onChange} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.paste('123456');

    expect(onChange).toHaveBeenCalledWith('123456');
  });

  it('calls onComplete on paste of full OTP', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    render(<OTPInput length={4} autoFocus={false} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.paste('9876');

    expect(onComplete).toHaveBeenCalledWith('9876');
  });

  it('truncates paste to the OTP length', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<OTPInput length={4} autoFocus={false} onChange={onChange} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[0].focus();
    await user.paste('123456789');

    expect(onChange).toHaveBeenCalledWith('1234');
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('disables all inputs when disabled', () => {
    render(<OTPInput length={4} autoFocus={false} disabled />);
    screen.getAllByRole('textbox').forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<OTPInput length={4} autoFocus={false} disabled onChange={onChange} />);
    const inputs = screen.getAllByRole('textbox');
    inputs[0].focus();
    await user.keyboard('5');
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('applies error class when error is true', () => {
    const { container } = render(<OTPInput length={4} autoFocus={false} error />);
    expect(container.querySelector('.ux4g-otp-input')).toHaveClass('ux4g-otp-input-error');
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('renders controlled value', () => {
    render(<OTPInput length={4} value="5678" onChange={vi.fn()} autoFocus={false} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('5');
    expect(inputs[1]).toHaveValue('6');
    expect(inputs[2]).toHaveValue('7');
    expect(inputs[3]).toHaveValue('8');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<OTPInput length={4} autoFocus={false} />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<OTPInput length={4} autoFocus={false} disabled />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<OTPInput length={4} autoFocus={false} />);
        await user.tab();
        expect(screen.getAllByRole('textbox')[0]).toHaveFocus();
      });

      it('accepts typed input', async () => {
        const user = userEvent.setup();
        render(<OTPInput length={4} autoFocus={false} />);
        const inputs = screen.getAllByRole('textbox');
        inputs[0].focus();
        await user.keyboard('7');
        expect(inputs[0]).toHaveValue('7');
      });
    });
  });
});

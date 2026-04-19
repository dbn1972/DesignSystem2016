import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from './DatePicker';
import { assertA11y } from '@/test/a11y-helpers';

describe('DatePicker', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a date input', () => {
    render(<DatePicker aria-label="Date of birth" />);
    // date inputs don't have a textbox role — query by label
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument();
  });

  it('has type="date"', () => {
    render(<DatePicker aria-label="Date" />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('type', 'date');
  });

  it('renders with a min date', () => {
    render(<DatePicker aria-label="Date" min="2024-01-01" />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('min', '2024-01-01');
  });

  it('renders with a max date', () => {
    render(<DatePicker aria-label="Date" max="2024-12-31" />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('max', '2024-12-31');
  });

  it('renders with a controlled value', () => {
    render(<DatePicker aria-label="Date" value="2024-06-15" onChange={vi.fn()} />);
    expect(screen.getByLabelText('Date')).toHaveValue('2024-06-15');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<DatePicker aria-label="Date" size={size} />);
    expect(screen.getByLabelText('Date')).toHaveClass(`ux4g-input-${size}`);
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<DatePicker aria-label="Date" disabled />);
    expect(screen.getByLabelText('Date')).toBeDisabled();
  });

  it('applies disabled class', () => {
    render(<DatePicker aria-label="Date" disabled />);
    expect(screen.getByLabelText('Date')).toHaveClass('ux4g-input-disabled');
  });

  // ── Read-only state ───────────────────────────────────────────────────────

  it('is read-only when readOnly is true', () => {
    render(<DatePicker aria-label="Date" readOnly />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('readonly');
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<DatePicker aria-label="Date" error />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error class when error is true', () => {
    render(<DatePicker aria-label="Date" error />);
    expect(screen.getByLabelText('Date')).toHaveClass('ux4g-input-error');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets required and aria-required when required is true', () => {
    render(<DatePicker aria-label="Date" required />);
    const input = screen.getByLabelText('Date');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  // ── onChange ──────────────────────────────────────────────────────────────

  it('calls onChange with the string value when changed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DatePicker aria-label="Date" onChange={onChange} />);
    const input = screen.getByLabelText('Date');
    await user.type(input, '2024-06-15');
    expect(onChange).toHaveBeenCalled();
    // Last call should contain the typed value
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(typeof lastCall).toBe('string');
  });

  // ── Field context integration ─────────────────────────────────────────────
  // Note: DatePicker does not consume FieldContext — wire id and error directly.

  it('uses explicit id when provided', () => {
    render(<DatePicker id="dob" aria-label="Date of birth" />);
    expect(screen.getByLabelText('Date of birth')).toHaveAttribute('id', 'dob');
  });

  it('sets aria-invalid directly via error prop', () => {
    render(<DatePicker aria-label="Date" error />);
    expect(screen.getByLabelText('Date')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<DatePicker aria-label="Date" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<DatePicker aria-label="Date" />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<DatePicker aria-label="Date" disabled />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<DatePicker aria-label="Date" />);
        await user.tab();
        expect(screen.getByLabelText('Date')).toHaveFocus();
      });

      it('accepts keyboard date entry', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<DatePicker aria-label="Date" onChange={onChange} />);
        await user.tab();
        await user.keyboard('2024-06-15');
        expect(onChange).toHaveBeenCalled();
      });

      it('supports arrow key interaction on the date input', async () => {
        const user = userEvent.setup();
        render(<DatePicker aria-label="Date" value="2024-06-15" onChange={vi.fn()} />);
        const input = screen.getByLabelText('Date');
        input.focus();
        await user.keyboard('{ArrowUp}');
        expect(input).toHaveFocus();
      });

      it('does not receive focus when disabled', async () => {
        const user = userEvent.setup();
        render(<DatePicker aria-label="Date" disabled />);
        await user.tab();
        expect(screen.getByLabelText('Date')).not.toHaveFocus();
      });
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';
import { Field } from '../Field';

describe('Checkbox', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a checkbox input', () => {
    render(<Checkbox id="terms" label="Accept terms" />);
    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
  });

  it('renders label text from label prop', () => {
    render(<Checkbox id="terms" label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('renders label text from children', () => {
    render(<Checkbox id="terms">Accept terms</Checkbox>);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    render(<Checkbox id="terms" label="Accept terms" />);
    const label = screen.getByText('Accept terms');
    expect(label).toHaveAttribute('for', 'terms');
  });

  // ── Checked state ─────────────────────────────────────────────────────────

  it('renders unchecked by default', () => {
    render(<Checkbox id="terms" label="Accept" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders checked when defaultChecked is true', () => {
    render(<Checkbox id="terms" label="Accept" defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders checked when controlled checked is true', () => {
    render(<Checkbox id="terms" label="Accept" checked onChange={vi.fn()} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  // ── Indeterminate state ───────────────────────────────────────────────────

  it('sets indeterminate property on the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox id="all" label="Select all" indeterminate ref={ref} />);
    expect(ref.current?.indeterminate).toBe(true);
  });

  // ── Interaction ───────────────────────────────────────────────────────────

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox id="terms" label="Accept" onChange={onChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('toggles checked state in uncontrolled mode', async () => {
    const user = userEvent.setup();
    render(<Checkbox id="terms" label="Accept" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox id="terms" label="Accept" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox id="terms" label="Accept" disabled onChange={onChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Checkbox id="terms" label="Accept" error />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets aria-required when required is true', () => {
    render(<Checkbox id="terms" label="Accept" required />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-required', 'true');
  });

  // ── Keyboard ─────────────────────────────────────────────────────────────

  it('is toggled by Space key', async () => {
    const user = userEvent.setup();
    render(<Checkbox id="terms" label="Accept" />);
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await user.keyboard(' ');
    expect(checkbox).toBeChecked();
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up id and describedBy from Field context', () => {
    render(
      <Field id="consent" hint="You must accept to continue">
        <Checkbox label="I agree" />
      </Field>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'consent');
    expect(checkbox).toHaveAttribute('aria-describedby', 'consent-hint');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox id="terms" label="Accept" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

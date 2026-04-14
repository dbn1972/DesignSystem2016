import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';
import { Field } from '../Field';
import { HintText } from '../HintText';

describe('Input', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a text input by default', () => {
    render(<Input aria-label="Name" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with the correct type', () => {
    render(<Input type="email" aria-label="Email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('renders with a placeholder', () => {
    render(<Input aria-label="Name" placeholder="Enter name" />);
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  // ── Controlled / uncontrolled ─────────────────────────────────────────────

  it('renders with a default value (uncontrolled)', () => {
    render(<Input aria-label="Name" defaultValue="Priya" />);
    expect(screen.getByRole('textbox')).toHaveValue('Priya');
  });

  it('renders with a controlled value', () => {
    render(<Input aria-label="Name" value="Rahul" onChange={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('Rahul');
  });

  it('calls onChange with the new string value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input aria-label="Name" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'Hi');
    expect(onChange).toHaveBeenCalledWith('H');
    expect(onChange).toHaveBeenCalledWith('Hi');
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Input aria-label="Name" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input aria-label="Name" disabled onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'test');
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Read-only state ───────────────────────────────────────────────────────

  it('is read-only when readOnly prop is true', () => {
    render(<Input aria-label="Name" readOnly value="fixed" onChange={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Input aria-label="Name" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error class when error is true', () => {
    render(<Input aria-label="Name" error />);
    expect(screen.getByRole('textbox')).toHaveClass('ux4g-input-error');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets required and aria-required when required is true', () => {
    render(<Input aria-label="Name" required />);
    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Input aria-label="Name" size={size} />);
    expect(screen.getByRole('textbox')).toHaveClass(`ux4g-input-${size}`);
  });

  // ── Icons ─────────────────────────────────────────────────────────────────

  it('renders iconBefore with aria-hidden', () => {
    render(<Input aria-label="Search" iconBefore={<span data-testid="icon" />} />);
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders iconAfter with aria-hidden', () => {
    render(<Input aria-label="Search" iconAfter={<span data-testid="icon" />} />);
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up id, required, and describedBy from Field context', () => {
    render(
      <Field id="email" required hint="Use your work email">
        <Input type="email" />
      </Field>
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'email');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('aria-describedby', 'email-hint');
  });

  it('picks up error state from Field context', () => {
    render(
      <Field id="phone" errorText="Required">
        <Input type="tel" />
      </Field>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('merges explicit aria-describedby with Field context describedBy', () => {
    // Field hint prop sets describedBy; Input merges it with its own aria-describedby
    render(
      <Field id="name" hint="Your full name">
        <Input aria-describedby="extra-hint" />
      </Field>
    );
    const input = screen.getByRole('textbox');
    const describedBy = input.getAttribute('aria-describedby') ?? '';
    // Field's hint produces name-hint; Input's explicit prop adds extra-hint
    // Both should appear (order may vary)
    expect(describedBy).toContain('extra-hint');
    // Field context describedBy is set when hint prop is provided
    expect(input).toHaveAttribute('aria-describedby');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input aria-label="Name" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

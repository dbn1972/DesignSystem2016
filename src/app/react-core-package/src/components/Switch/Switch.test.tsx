import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch', () => {
  // ── Rendering ─────────────────────────────────────────────────────

  it('renders with role="switch"', () => {
    render(<Switch label="Toggle" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(<Switch label="Dark mode" />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('renders children as label', () => {
    render(<Switch>Enable notifications</Switch>);
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Switch aria-label="Toggle feature" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Toggle feature');
  });

  // ── Checked state ─────────────────────────────────────────────────

  it('is unchecked by default', () => {
    render(<Switch label="Toggle" />);
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('respects checked prop', () => {
    render(<Switch label="Toggle" checked onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('respects defaultChecked prop', () => {
    render(<Switch label="Toggle" defaultChecked />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  // ── Interaction ───────────────────────────────────────────────────

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('toggles checked state on click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange.mock.calls[0][0].target.checked).toBe(true);
  });

  it('is keyboard accessible via Space', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
    screen.getByRole('switch').focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // ── Disabled ──────────────────────────────────────────────────────

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Toggle" disabled onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('has disabled attribute when disabled', () => {
    render(<Switch label="Toggle" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  // ── Error state ───────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Switch label="Toggle" error />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Required ──────────────────────────────────────────────────────

  it('sets aria-required when required', () => {
    render(<Switch label="Toggle" required />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-required', 'true');
  });

  // ── Sizes ─────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Switch label="Toggle" size={size} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  // ── Ref forwarding ────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switch label="Toggle" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe('checkbox');
  });

  // ── Accessibility ─────────────────────────────────────────────────

  it('associates label with input via wrapping label element', () => {
    render(<Switch label="Dark mode" />);
    const input = screen.getByRole('switch');
    // Input is inside a <label>, so clicking the label text toggles it
    expect(input.closest('label')).toBeInTheDocument();
  });

  it('supports aria-describedby', () => {
    render(<Switch label="Toggle" aria-describedby="help-text" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-describedby', 'help-text');
  });
});

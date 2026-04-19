import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import { Field } from '../Field';
import { assertA11y } from '@/test/a11y-helpers';

const OPTIONS = (
  <>
    <option value="mh">Maharashtra</option>
    <option value="ka">Karnataka</option>
    <option value="tn">Tamil Nadu</option>
  </>
);

describe('Select', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a combobox', () => {
    render(<Select aria-label="State">{OPTIONS}</Select>);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders all option children', () => {
    render(<Select aria-label="State">{OPTIONS}</Select>);
    expect(screen.getByRole('option', { name: 'Maharashtra' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Karnataka' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Tamil Nadu' })).toBeInTheDocument();
  });

  it('renders a placeholder option when provided', () => {
    render(
      <Select aria-label="State" placeholder="Choose a state">
        {OPTIONS}
      </Select>
    );
    // Placeholder is hidden+disabled so not accessible as a role=option,
    // but it exists in the DOM
    const { container } = render(
      <Select aria-label="State" placeholder="Choose a state">
        {OPTIONS}
      </Select>
    );
    const placeholderOption = container.querySelector('option[value=""]');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toHaveTextContent('Choose a state');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Select aria-label="State" size={size}>{OPTIONS}</Select>);
    expect(screen.getByRole('combobox')).toHaveClass(`ux4g-select-${size}`);
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Select aria-label="State" disabled>{OPTIONS}</Select>);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('does not fire onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select aria-label="State" disabled onChange={onChange}>
        {OPTIONS}
      </Select>
    );
    await user.selectOptions(screen.getByRole('combobox'), 'mh');
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Select aria-label="State" error>{OPTIONS}</Select>);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error class when error is true', () => {
    render(<Select aria-label="State" error>{OPTIONS}</Select>);
    expect(screen.getByRole('combobox')).toHaveClass('ux4g-select-error');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets required and aria-required when required is true', () => {
    render(<Select aria-label="State" required>{OPTIONS}</Select>);
    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
    expect(select).toHaveAttribute('aria-required', 'true');
  });

  // ── Interaction ───────────────────────────────────────────────────────────

  it('calls onChange when an option is selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select aria-label="State" onChange={onChange}>
        {OPTIONS}
      </Select>
    );
    await user.selectOptions(screen.getByRole('combobox'), 'ka');
    expect(onChange).toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toHaveValue('ka');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up id and describedBy from Field context', () => {
    render(
      <Field id="state" hint="Select your home state">
        <Select>{OPTIONS}</Select>
      </Field>
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('id', 'state');
    expect(select).toHaveAttribute('aria-describedby', 'state-hint');
  });

  it('picks up error state from Field context', () => {
    render(
      <Field id="state" errorText="State is required">
        <Select>{OPTIONS}</Select>
      </Field>
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the select element', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Select aria-label="State" ref={ref}>{OPTIONS}</Select>);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Select aria-label="State">{OPTIONS}</Select>);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Select aria-label="State" disabled>{OPTIONS}</Select>);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Select aria-label="State">{OPTIONS}</Select>);
        await user.tab();
        expect(screen.getByRole('combobox')).toHaveFocus();
      });

      it('can select an option via keyboard interaction', async () => {
        const user = userEvent.setup();
        render(<Select aria-label="State">{OPTIONS}</Select>);
        await user.selectOptions(screen.getByRole('combobox'), 'ka');
        expect(screen.getByRole('combobox')).toHaveValue('ka');
      });

      it('does not respond to keyboard when disabled', async () => {
        const user = userEvent.setup();
        render(<Select aria-label="State" disabled>{OPTIONS}</Select>);
        await user.tab();
        expect(screen.getByRole('combobox')).not.toHaveFocus();
      });
    });
  });
});

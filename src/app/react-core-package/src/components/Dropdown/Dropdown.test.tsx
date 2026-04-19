import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';
import { assertA11y } from '@/test/a11y-helpers';

const options = [
  { value: 'DL', label: 'Delhi' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'KA', label: 'Karnataka' },
];

describe('Dropdown', () => {
  it('renders with label', () => {
    render(<Dropdown id="s" label="State" options={options} />);
    expect(screen.getByLabelText('State')).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(<Dropdown id="s" label="State" options={options} />);
    expect(screen.getByRole('option', { name: 'Delhi' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Maharashtra' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Karnataka' })).toBeInTheDocument();
  });

  it('renders placeholder option', () => {
    render(<Dropdown id="s" options={options} placeholder="Choose state" />);
    expect(screen.getByRole('option', { name: 'Choose state' })).toBeInTheDocument();
  });

  it('selects the correct value', () => {
    render(<Dropdown id="s" options={options} value="MH" onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toHaveValue('MH');
  });

  it('calls onChange when selection changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Dropdown id="s" options={options} value="" onChange={onChange} />);
    await user.selectOptions(screen.getByRole('combobox'), 'DL');
    expect(onChange).toHaveBeenCalledWith('DL');
  });

  it('disables individual options', () => {
    const opts = [...options, { value: 'X', label: 'Disabled', disabled: true }];
    render(<Dropdown id="s" options={opts} />);
    expect(screen.getByRole('option', { name: 'Disabled' })).toBeDisabled();
  });

  it('is disabled when disabled prop set', () => {
    render(<Dropdown id="s" options={options} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('shows error text', () => {
    render(<Dropdown id="s" options={options} errorText="Required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  it('shows hint text', () => {
    render(<Dropdown id="s" options={options} hint="Select your state" />);
    expect(screen.getByText('Select your state')).toBeInTheDocument();
  });

  it('sets aria-invalid on error', () => {
    render(<Dropdown id="s" options={options} error />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-required when required', () => {
    render(<Dropdown id="s" options={options} required />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('shows required indicator', () => {
    render(<Dropdown id="s" label="State" options={options} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Dropdown id="s" options={options} size={size} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Dropdown id="s" options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Dropdown id="s" label="State" options={options} />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Dropdown id="s" label="State" options={options} />);
        await user.tab();
        expect(screen.getByRole('combobox')).toHaveFocus();
      });

      it('opens and selects via Enter/Space interaction', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<Dropdown id="s" label="State" options={options} value="" onChange={onChange} />);
        await user.tab();
        await user.selectOptions(screen.getByRole('combobox'), 'DL');
        expect(onChange).toHaveBeenCalledWith('DL');
      });

      it('supports arrow key navigation between options', async () => {
        const user = userEvent.setup();
        render(<Dropdown id="s" label="State" options={options} />);
        await user.tab();
        expect(screen.getByRole('combobox')).toHaveFocus();
      });

      it('does not respond to keyboard when disabled', async () => {
        const user = userEvent.setup();
        render(<Dropdown id="s" label="State" options={options} disabled />);
        await user.tab();
        expect(screen.getByRole('combobox')).not.toHaveFocus();
      });
    });
  });
});

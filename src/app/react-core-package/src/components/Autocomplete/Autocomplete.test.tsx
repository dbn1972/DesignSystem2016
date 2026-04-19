import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from './Autocomplete';
import { Field } from '../Field';
import { assertA11y } from '@/test/a11y-helpers';

const options = [
  { value: 'dl', label: 'Delhi' },
  { value: 'mh', label: 'Maharashtra' },
  { value: 'tn', label: 'Tamil Nadu' },
];

describe('Autocomplete', () => {
  it('exposes combobox semantics with active descendant management', async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={options} aria-label="State" />);

    const input = screen.getByRole('combobox', { name: 'State' });
    await user.click(input);
    await user.keyboard('{ArrowDown}');

    const listbox = screen.getByRole('listbox');
    expect(input).toHaveAttribute('aria-controls', listbox.id);
    expect(input).toHaveAttribute('aria-activedescendant');
  });

  it('selects the highlighted option with keyboard input', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(<Autocomplete options={options} aria-label="State" onSelect={onSelect} />);

    const input = screen.getByRole('combobox', { name: 'State' });
    await user.click(input);
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');

    expect(onSelect).toHaveBeenCalledWith(options[1]);
    expect(input).toHaveValue('Maharashtra');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('connects described-by content from Field context', () => {
    render(
      <Field id="state" hint="Choose your current state">
        <Autocomplete options={options} aria-label="State" />
      </Field>
    );

    const input = screen.getByRole('combobox', { name: 'State' });
    expect(input).toHaveAttribute('aria-describedby', 'state-hint');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Autocomplete options={options} aria-label="State" />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Autocomplete options={options} aria-label="State" disabled />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Autocomplete options={options} aria-label="State" />);
        await user.tab();
        expect(screen.getByRole('combobox')).toHaveFocus();
      });

      it('filters suggestions by typing', async () => {
        const user = userEvent.setup();
        render(<Autocomplete options={options} aria-label="State" />);
        await user.tab();
        await user.keyboard('Del');
        const listbox = screen.getByRole('listbox');
        expect(listbox).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Delhi' })).toBeInTheDocument();
        expect(screen.queryByRole('option', { name: 'Maharashtra' })).not.toBeInTheDocument();
      });

      it('navigates suggestions with Arrow keys', async () => {
        const user = userEvent.setup();
        render(<Autocomplete options={options} aria-label="State" />);
        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.keyboard('{ArrowDown}');
        expect(input).toHaveAttribute('aria-activedescendant');
      });

      it('selects a suggestion with Enter', async () => {
        const user = userEvent.setup();
        const onSelect = vi.fn();
        render(<Autocomplete options={options} aria-label="State" onSelect={onSelect} />);
        const input = screen.getByRole('combobox');
        await user.click(input);
        await user.keyboard('{ArrowDown}{Enter}');
        expect(onSelect).toHaveBeenCalledWith(options[0]);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });

      it('closes suggestions with Escape', async () => {
        const user = userEvent.setup();
        render(<Autocomplete options={options} aria-label="State" />);
        const input = screen.getByRole('combobox');
        await user.click(input);
        expect(screen.getByRole('listbox')).toBeInTheDocument();
        await user.keyboard('{Escape}');
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });
  });
});


describe('Autocomplete – additional coverage', () => {
  it('shows loading state', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" loading />);
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows empty message when no options match', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" />);
    await user.type(screen.getByRole('combobox'), 'zzzzz');
    expect(screen.getByText('No options found')).toBeInTheDocument();
  });

  it('shows custom empty message', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" emptyMessage="Nothing here" />);
    await user.type(screen.getByRole('combobox'), 'zzzzz');
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('supports defaultValue for uncontrolled mode', () => {
    render(<Autocomplete options={options} aria-label="State" defaultValue="Del" />);
    expect(screen.getByRole('combobox')).toHaveValue('Del');
  });

  it('respects maxOptions limit', async () => {
    const user = userEvent.setup();
    const manyOptions = Array.from({ length: 20 }, (_, i) => ({ value: `opt${i}`, label: `Option ${i}` }));
    render(<Autocomplete options={manyOptions} aria-label="State" maxOptions={3} />);
    await user.click(screen.getByRole('combobox'));
    const opts = screen.getAllByRole('option');
    expect(opts.length).toBe(3);
  });

  it('applies error class when error is true', () => {
    render(<Autocomplete options={options} aria-label="State" error />);
    expect(screen.getByRole('combobox')).toHaveClass('ux4g-input-error');
  });

  it('applies disabled class when disabled', () => {
    render(<Autocomplete options={options} aria-label="State" disabled />);
    expect(screen.getByRole('combobox')).toHaveClass('ux4g-input-disabled');
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('applies size class', () => {
    render(<Autocomplete options={options} aria-label="State" size="lg" />);
    expect(screen.getByRole('combobox')).toHaveClass('ux4g-input-lg');
  });

  it('does not select disabled option', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    const opts = [
      { value: 'a', label: 'Alpha', disabled: true },
      { value: 'b', label: 'Beta' },
    ];
    render(<Autocomplete options={opts} aria-label="State" onSelect={onSelect} />);
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByText('Alpha'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('closes dropdown on Tab key', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" />);
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.tab();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens dropdown on ArrowDown when closed', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" />);
    const input = screen.getByRole('combobox');
    input.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('navigates up with ArrowUp', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" />);
    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.keyboard('{ArrowDown}{ArrowDown}{ArrowUp}');
    expect(input).toHaveAttribute('aria-activedescendant');
  });

  it('wraps around when navigating past last option', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} aria-label="State" />);
    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}');
    // Should wrap to first
    expect(input).toHaveAttribute('aria-activedescendant');
  });

  it('highlights option on mouse enter', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="State" />);
    await user.click(screen.getByRole('combobox'));
    const opt = screen.getByRole('option', { name: 'Maharashtra' });
    await user.hover(opt);
    expect(opt).toHaveAttribute('aria-selected', 'true');
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Autocomplete options={options} aria-label="State" />
        <button>Outside</button>
      </div>
    );
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.click(screen.getByText('Outside'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('uses custom filterFn', async () => {
    const user = userEvent.setup();
    const filterFn = vi.fn().mockReturnValue(true);
    render(<Autocomplete options={options} aria-label="State" filterFn={filterFn} />);
    await user.type(screen.getByRole('combobox'), 'x');
    expect(filterFn).toHaveBeenCalled();
  });

  it('sets aria-invalid from prop', () => {
    render(<Autocomplete options={options} aria-label="State" aria-invalid="true" />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });
});

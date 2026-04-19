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

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from './Autocomplete';
import { Field } from '../Field';

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
});

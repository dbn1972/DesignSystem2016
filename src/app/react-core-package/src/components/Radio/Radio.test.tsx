import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';
import { assertA11y } from '@/test/a11y-helpers';

describe('Radio', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a radio input', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument();
  });

  it('renders label from label prop', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders label from children', () => {
    render(<Radio id="opt1" name="choice" value="opt1">Option 1</Radio>);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByText('Option 1')).toHaveAttribute('for', 'opt1');
  });

  it('sets the value attribute', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByRole('radio')).toHaveAttribute('value', 'opt1');
  });

  it('sets the name attribute for grouping', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByRole('radio')).toHaveAttribute('name', 'choice');
  });

  // ── Checked state ─────────────────────────────────────────────────────────

  it('renders unchecked by default', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" />);
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('renders checked when defaultChecked is true', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" defaultChecked />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('renders checked when controlled checked is true', () => {
    render(
      <Radio id="opt1" name="choice" value="opt1" label="Option 1" checked onChange={vi.fn()} />
    );
    expect(screen.getByRole('radio')).toBeChecked();
  });

  // ── Interaction ───────────────────────────────────────────────────────────

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" onChange={onChange} />);
    await user.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('is selectable by clicking the label', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" onChange={onChange} />);
    await user.click(screen.getByText('Option 1'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Radio id="opt1" name="choice" value="opt1" label="Option 1" disabled onChange={onChange} />
    );
    await user.click(screen.getByRole('radio'));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" error />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets aria-required when required is true', () => {
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" required />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-required', 'true');
  });

  // ── Keyboard ─────────────────────────────────────────────────────────────

  it('is selectable with Space key', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" onChange={onChange} />);
    screen.getByRole('radio').focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Radio id="opt1" name="choice" value="opt1" label="Option 1" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(
        <fieldset>
          <legend>Choose an option</legend>
          <Radio id="opt1" name="choice" value="opt1" label="Option 1" />
          <Radio id="opt2" name="choice" value="opt2" label="Option 2" />
        </fieldset>
      );
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(
        <fieldset>
          <legend>Choose an option</legend>
          <Radio id="opt1" name="choice" value="opt1" label="Option 1" disabled />
          <Radio id="opt2" name="choice" value="opt2" label="Option 2" disabled />
        </fieldset>
      );
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(
          <fieldset>
            <legend>Choose an option</legend>
            <Radio id="opt1" name="nav" value="opt1" label="Option 1" />
            <Radio id="opt2" name="nav" value="opt2" label="Option 2" />
          </fieldset>
        );
        await user.tab();
        expect(screen.getByRole('radio', { name: 'Option 1' })).toHaveFocus();
      });

      it('navigates between options with Arrow keys', async () => {
        const user = userEvent.setup();
        render(
          <fieldset>
            <legend>Choose an option</legend>
            <Radio id="opt1" name="arrow" value="opt1" label="Option 1" />
            <Radio id="opt2" name="arrow" value="opt2" label="Option 2" />
            <Radio id="opt3" name="arrow" value="opt3" label="Option 3" />
          </fieldset>
        );
        await user.tab();
        await user.keyboard('{ArrowDown}');
        expect(screen.getByRole('radio', { name: 'Option 2' })).toBeChecked();
      });
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';
import { Field } from '../Field';
import { assertA11y } from '@/test/a11y-helpers';

describe('Textarea', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a textarea element', () => {
    render(<Textarea aria-label="Description" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with a placeholder', () => {
    render(<Textarea aria-label="Description" placeholder="Enter description" />);
    expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument();
  });

  it('renders with default 4 rows', () => {
    render(<Textarea aria-label="Description" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '4');
  });

  it('renders with custom rows', () => {
    render(<Textarea aria-label="Description" rows={8} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '8');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Textarea aria-label="Description" size={size} />);
    expect(screen.getByRole('textbox')).toHaveClass(`ux4g-textarea-${size}`);
  });

  // ── Interaction ───────────────────────────────────────────────────────────

  it('accepts typed input', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Description" />);
    await user.type(screen.getByRole('textbox'), 'Hello world');
    expect(screen.getByRole('textbox')).toHaveValue('Hello world');
  });

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea aria-label="Description" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'A');
    expect(onChange).toHaveBeenCalled();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Textarea aria-label="Description" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies disabled class', () => {
    render(<Textarea aria-label="Description" disabled />);
    expect(screen.getByRole('textbox')).toHaveClass('ux4g-textarea-disabled');
  });

  // ── Read-only state ───────────────────────────────────────────────────────

  it('is read-only when readOnly prop is true', () => {
    render(<Textarea aria-label="Description" readOnly />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Textarea aria-label="Description" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error class when error is true', () => {
    render(<Textarea aria-label="Description" error />);
    expect(screen.getByRole('textbox')).toHaveClass('ux4g-textarea-error');
  });

  // ── Required state ────────────────────────────────────────────────────────

  it('sets required and aria-required when required is true', () => {
    render(<Textarea aria-label="Description" required />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up id and describedBy from Field context', () => {
    render(
      <Field id="bio" hint="Max 500 characters">
        <Textarea />
      </Field>
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('id', 'bio');
    expect(textarea).toHaveAttribute('aria-describedby', 'bio-hint');
  });

  it('picks up error state from Field context', () => {
    render(
      <Field id="bio" errorText="Description is required">
        <Textarea />
      </Field>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the textarea element', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea aria-label="Description" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Textarea aria-label="Description" />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Textarea aria-label="Description" disabled />);
    });

    it('has no axe violations in error state', async () => {
      await assertA11y(<Textarea aria-label="Description" error />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Textarea aria-label="Description" />);
        await user.tab();
        expect(screen.getByRole('textbox')).toHaveFocus();
      });

      it('accepts typed input', async () => {
        const user = userEvent.setup();
        render(<Textarea aria-label="Description" />);
        await user.tab();
        await user.keyboard('Hello');
        expect(screen.getByRole('textbox')).toHaveValue('Hello');
      });
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Button', () => {
  // ── Rendering ────────────────────────────────────────────────────────────

  it('renders with default props', () => {
    render(<Button>Submit</Button>);
    const btn = screen.getByRole('button', { name: 'Submit' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('renders children inside a text span', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // ── Variants (canonical + legacy alias) ──────────────────────────────────

  it.each(['primary', 'secondary', 'tertiary', 'success'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Button variant={variant}>Action</Button>);
      expect(screen.getByRole('button')).toHaveClass(`ux4g-button-${variant}`);
    }
  );

  it('applies destructive variant class', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('ux4g-button-destructive');
  });

  it('applies ghost variant class', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('ux4g-button-ghost');
  });

  it('maps legacy "danger" to "destructive" class', () => {
    render(<Button variant="danger">Remove</Button>);
    expect(screen.getByRole('button')).toHaveClass('ux4g-button-destructive');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Button size={size}>Action</Button>);
    expect(screen.getByRole('button')).toHaveClass(`ux4g-button-${size}`);
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Action</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Action</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  // ── Loading state ─────────────────────────────────────────────────────────

  it('shows loading text and spinner when loading', () => {
    render(<Button loading>Submit</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Loading...');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).toBeDisabled();
  });

  it('uses custom loadingText when provided', () => {
    render(<Button loading loadingText="Saving...">Submit</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Saving...');
  });

  it('sets aria-label to loadingText while loading', () => {
    render(<Button loading loadingText="Processing...">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Processing...');
  });

  it('does not fire onClick when loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>Submit</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  // ── Interactions ──────────────────────────────────────────────────────────

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is keyboard activatable with Enter', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is keyboard activatable with Space', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    screen.getByRole('button').focus();
    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // ── Type attribute ────────────────────────────────────────────────────────

  it('renders as submit button when type="submit"', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  // ── Icons ─────────────────────────────────────────────────────────────────

  it('renders iconBefore with aria-hidden', () => {
    render(<Button iconBefore={<span data-testid="icon-before" />}>Action</Button>);
    const iconWrapper = screen.getByTestId('icon-before').parentElement;
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders iconAfter with aria-hidden', () => {
    render(<Button iconAfter={<span data-testid="icon-after" />}>Action</Button>);
    const iconWrapper = screen.getByTestId('icon-after').parentElement;
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides icons while loading', () => {
    render(
      <Button loading iconBefore={<span data-testid="icon" />}>
        Action
      </Button>
    );
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('uses aria-label when provided', () => {
    render(<Button aria-label="Delete item">×</Button>);
    expect(screen.getByRole('button', { name: 'Delete item' })).toBeInTheDocument();
  });

  it('fullWidth applies width class', () => {
    render(<Button fullWidth>Action</Button>);
    expect(screen.getByRole('button')).toHaveClass('ux4g-w-full');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Action</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // ── Polymorphic rendering (P0-2) ──────────────────────────────────────────

  it('renders as an anchor when as="a"', () => {
    render(<Button as="a" href="/next">Continue</Button>);
    const el = screen.getByText('Continue').closest('a');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('href', '/next');
    expect(el).not.toHaveAttribute('type'); // anchors don't get type
  });

  it('does not set disabled attribute on non-button elements', () => {
    render(<Button as="a" href="/next" disabled>Link</Button>);
    const el = screen.getByText('Link').closest('a');
    expect(el).toHaveAttribute('aria-disabled', 'true');
    expect(el).not.toHaveAttribute('disabled'); // only aria-disabled for links
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Button>Submit</Button>);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Button disabled>Submit</Button>);
    });

    it('has no axe violations when loading', async () => {
      await assertA11y(<Button loading>Submit</Button>);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'primary', ui: <Button variant="primary">Action</Button> },
        { name: 'secondary', ui: <Button variant="secondary">Action</Button> },
        { name: 'tertiary', ui: <Button variant="tertiary">Action</Button> },
        { name: 'destructive', ui: <Button variant="destructive">Action</Button> },
        { name: 'ghost', ui: <Button variant="ghost">Action</Button> },
        { name: 'success', ui: <Button variant="success">Action</Button> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Button>Submit</Button>);
        await user.tab();
        expect(screen.getByRole('button')).toHaveFocus();
      });

      it('activates via Enter key', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Submit</Button>);
        await user.tab();
        await user.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('activates via Space key', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Submit</Button>);
        await user.tab();
        await user.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

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

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['primary', 'secondary', 'tertiary', 'ghost', 'destructive'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Button variant={variant}>Action</Button>);
      expect(screen.getByRole('button')).toHaveClass(`ux4g-button-${variant}`);
    }
  );

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
});

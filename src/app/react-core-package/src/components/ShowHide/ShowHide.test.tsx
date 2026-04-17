import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShowHide } from './ShowHide';

describe('ShowHide', () => {
  it('renders toggle button', () => { render(<ShowHide label="details">Content</ShowHide>); expect(screen.getByRole('button', { name: /show details/i })).toBeInTheDocument(); });
  it('hides content by default', () => { render(<ShowHide label="details">Hidden</ShowHide>); expect(screen.queryByText('Hidden')).not.toBeInTheDocument(); });
  it('shows content when defaultOpen', () => { render(<ShowHide label="details" defaultOpen>Visible</ShowHide>); expect(screen.getByText('Visible')).toBeInTheDocument(); });
  it('toggles content on click', async () => {
    const user = userEvent.setup();
    render(<ShowHide label="details">Content</ShowHide>);
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Content')).toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
  it('sets aria-expanded', async () => {
    const user = userEvent.setup();
    render(<ShowHide label="details">C</ShowHide>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });
  it('calls onToggle', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<ShowHide label="details" onToggle={onToggle}>C</ShowHide>);
    await user.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledWith(true);
  });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<ShowHide label="d" ref={ref}>C</ShowHide>); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});

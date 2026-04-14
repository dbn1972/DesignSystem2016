import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a search input', () => {
    render(<SearchBar aria-label="Search" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders with a placeholder', () => {
    render(<SearchBar placeholder="Search applications..." />);
    expect(screen.getByPlaceholderText('Search applications...')).toBeInTheDocument();
  });

  it('renders with a default value', () => {
    render(<SearchBar defaultValue="income" aria-label="Search" />);
    expect(screen.getByRole('searchbox')).toHaveValue('income');
  });

  // ── Typing ────────────────────────────────────────────────────────────────

  it('accepts typed input', async () => {
    const user = userEvent.setup();
    render(<SearchBar aria-label="Search" />);
    await user.type(screen.getByRole('searchbox'), 'certificate');
    expect(screen.getByRole('searchbox')).toHaveValue('certificate');
  });

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar aria-label="Search" onChange={onChange} />);
    await user.type(screen.getByRole('searchbox'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  // ── Search on Enter ───────────────────────────────────────────────────────

  it('calls onSearch with current value on Enter', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar aria-label="Search" onSearch={onSearch} />);
    await user.type(screen.getByRole('searchbox'), 'income{Enter}');
    expect(onSearch).toHaveBeenCalledWith('income');
  });

  it('does not call onSearch on other keys', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar aria-label="Search" onSearch={onSearch} />);
    await user.type(screen.getByRole('searchbox'), 'abc');
    expect(onSearch).not.toHaveBeenCalled();
  });

  // ── Clear button ──────────────────────────────────────────────────────────

  it('shows clear button when there is a value', async () => {
    const user = userEvent.setup();
    render(<SearchBar aria-label="Search" />);
    await user.type(screen.getByRole('searchbox'), 'test');
    expect(screen.getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
  });

  it('does not show clear button when input is empty', () => {
    render(<SearchBar aria-label="Search" />);
    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
  });

  it('clears the input when clear button is clicked', async () => {
    const user = userEvent.setup();
    render(<SearchBar aria-label="Search" />);
    await user.type(screen.getByRole('searchbox'), 'test');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(screen.getByRole('searchbox')).toHaveValue('');
  });

  it('calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<SearchBar aria-label="Search" onClear={onClear} />);
    await user.type(screen.getByRole('searchbox'), 'test');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('does not show clear button when showClearButton=false', async () => {
    const user = userEvent.setup();
    render(<SearchBar aria-label="Search" showClearButton={false} />);
    await user.type(screen.getByRole('searchbox'), 'test');
    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
  });

  // ── Loading state ─────────────────────────────────────────────────────────

  it('does not show clear button when loading', async () => {
    const user = userEvent.setup();
    render(<SearchBar aria-label="Search" loading />);
    await user.type(screen.getByRole('searchbox'), 'test');
    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<SearchBar aria-label="Search" disabled />);
    expect(screen.getByRole('searchbox')).toBeDisabled();
  });

  it('applies disabled class', () => {
    const { container } = render(<SearchBar aria-label="Search" disabled />);
    expect(container.querySelector('.ux4g-search-bar')).toHaveClass('ux4g-search-bar-disabled');
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar aria-label="Search" disabled onChange={onChange} />);
    await user.type(screen.getByRole('searchbox'), 'test');
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('applies error class when error is true', () => {
    const { container } = render(<SearchBar aria-label="Search" error />);
    expect(container.querySelector('.ux4g-search-bar')).toHaveClass('ux4g-search-bar-error');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    const { container } = render(<SearchBar aria-label="Search" size={size} />);
    expect(container.querySelector('.ux4g-search-bar')).toHaveClass(`ux4g-search-bar-${size}`);
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('renders controlled value', () => {
    render(<SearchBar aria-label="Search" value="controlled" onChange={vi.fn()} />);
    expect(screen.getByRole('searchbox')).toHaveValue('controlled');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<SearchBar aria-label="Search" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

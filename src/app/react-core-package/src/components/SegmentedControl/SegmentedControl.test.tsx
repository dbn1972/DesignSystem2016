import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedControl } from './SegmentedControl';

const opts = [{ value: 'all', label: 'All' }, { value: 'active', label: 'Active' }, { value: 'closed', label: 'Closed' }];

describe('SegmentedControl', () => {
  it('renders all options', () => { render(<SegmentedControl options={opts} />); expect(screen.getByText('All')).toBeInTheDocument(); expect(screen.getByText('Active')).toBeInTheDocument(); });
  it('has radiogroup role', () => { render(<SegmentedControl options={opts} />); expect(screen.getByRole('radiogroup')).toBeInTheDocument(); });
  it('marks selected option', () => { render(<SegmentedControl options={opts} value="active" />); expect(screen.getByRole('radio', { name: 'Active' })).toHaveAttribute('aria-checked', 'true'); });
  it('calls onChange on click', async () => { const user = userEvent.setup(); const onChange = vi.fn(); render(<SegmentedControl options={opts} onChange={onChange} />); await user.click(screen.getByText('Closed')); expect(onChange).toHaveBeenCalledWith('closed'); });
  it('disables all when disabled', () => { render(<SegmentedControl options={opts} disabled />); screen.getAllByRole('radio').forEach((r) => expect(r).toBeDisabled()); });
  it('disables individual option', () => { const o = [...opts, { value: 'x', label: 'X', disabled: true }]; render(<SegmentedControl options={o} />); expect(screen.getByRole('radio', { name: 'X' })).toBeDisabled(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<SegmentedControl options={opts} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});

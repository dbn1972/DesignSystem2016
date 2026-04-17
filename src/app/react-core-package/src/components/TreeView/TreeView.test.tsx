import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TreeView } from './TreeView';

const nodes = [
  { id: '1', label: 'Documents', children: [{ id: '1a', label: 'Aadhaar.pdf' }, { id: '1b', label: 'PAN.pdf' }] },
  { id: '2', label: 'Photos' },
];

describe('TreeView', () => {
  it('renders root nodes', () => { render(<TreeView nodes={nodes} />); expect(screen.getByText('Documents')).toBeInTheDocument(); expect(screen.getByText('Photos')).toBeInTheDocument(); });
  it('has tree role', () => { render(<TreeView nodes={nodes} />); expect(screen.getByRole('tree')).toBeInTheDocument(); });
  it('hides children by default', () => { render(<TreeView nodes={nodes} />); expect(screen.queryByText('Aadhaar.pdf')).not.toBeInTheDocument(); });
  it('expands on click', async () => { const user = userEvent.setup(); render(<TreeView nodes={nodes} />); await user.click(screen.getByText('Documents')); expect(screen.getByText('Aadhaar.pdf')).toBeInTheDocument(); });
  it('collapses on second click', async () => { const user = userEvent.setup(); render(<TreeView nodes={nodes} />); await user.click(screen.getByText('Documents')); await user.click(screen.getByText('Documents')); expect(screen.queryByText('Aadhaar.pdf')).not.toBeInTheDocument(); });
  it('respects defaultExpanded', () => { render(<TreeView nodes={nodes} defaultExpanded={['1']} />); expect(screen.getByText('Aadhaar.pdf')).toBeInTheDocument(); });
  it('calls onSelect', async () => { const user = userEvent.setup(); const onSelect = vi.fn(); render(<TreeView nodes={nodes} onSelect={onSelect} />); await user.click(screen.getByText('Photos')); expect(onSelect).toHaveBeenCalledWith('2'); });
  it('forwards ref', () => { const ref = React.createRef<HTMLUListElement>(); render(<TreeView nodes={nodes} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLUListElement); });
});

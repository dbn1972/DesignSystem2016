import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataGrid } from './DataGrid';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'status', header: 'Status' },
];

const data = [
  { id: '1', name: 'Rahul Kumar', status: 'Active' },
  { id: '2', name: 'Priya Singh', status: 'Pending' },
  { id: '3', name: 'Amit Patel', status: 'Active' },
];

describe('DataGrid', () => {
  it('renders a table', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders row data', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" />);
    expect(screen.getByText('Rahul Kumar')).toBeInTheDocument();
    expect(screen.getByText('Priya Singh')).toBeInTheDocument();
    expect(screen.getByText('Amit Patel')).toBeInTheDocument();
  });

  it('renders empty message when no data', () => {
    render(<DataGrid columns={columns} data={[]} rowKey="id" />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders custom empty message', () => {
    render(<DataGrid columns={columns} data={[]} rowKey="id" emptyMessage="No applications found" />);
    expect(screen.getByText('No applications found')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<DataGrid columns={columns} data={[]} rowKey="id" loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('calls onSort when sortable header clicked', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(<DataGrid columns={columns} data={data} rowKey="id" onSort={onSort} />);
    await user.click(screen.getByText('Name'));
    expect(onSort).toHaveBeenCalledWith('name', 'asc');
  });

  it('toggles sort direction on repeated clicks', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(<DataGrid columns={columns} data={data} rowKey="id" onSort={onSort} sortKey="name" sortDirection="asc" />);
    await user.click(screen.getByText('Name ▲'));
    expect(onSort).toHaveBeenCalledWith('name', 'desc');
  });

  it('does not call onSort for non-sortable columns', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(<DataGrid columns={columns} data={data} rowKey="id" onSort={onSort} />);
    await user.click(screen.getByText('Status'));
    expect(onSort).not.toHaveBeenCalled();
  });

  it('shows sort indicator', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" sortKey="name" sortDirection="asc" />);
    expect(screen.getByText('Name ▲')).toBeInTheDocument();
  });

  it('sets aria-sort on sorted column', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" sortKey="name" sortDirection="asc" />);
    const th = screen.getByText('Name ▲').closest('th');
    expect(th).toHaveAttribute('aria-sort', 'ascending');
  });

  it('renders caption for accessibility', () => {
    render(<DataGrid columns={columns} data={data} rowKey="id" caption="Applications list" />);
    expect(screen.getByText('Applications list')).toBeInTheDocument();
  });

  it('renders custom cell renderer', () => {
    const cols = [
      { key: 'name', header: 'Name' },
      { key: 'status', header: 'Status', render: (v: unknown) => <span data-testid="badge">{String(v)}</span> },
    ];
    render(<DataGrid columns={cols} data={data} rowKey="id" />);
    expect(screen.getAllByTestId('badge').length).toBe(3);
  });

  it('forwards ref to table element', () => {
    const ref = React.createRef<HTMLTableElement>();
    render(<DataGrid columns={columns} data={data} rowKey="id" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('applies custom className', () => {
    const { container } = render(<DataGrid columns={columns} data={data} rowKey="id" className="my-grid" />);
    expect(container.querySelector('.my-grid')).toBeInTheDocument();
  });
});

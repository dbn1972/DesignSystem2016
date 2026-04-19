import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from './Table';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

const columns = [
  { key: 'name', header: 'Name', accessor: 'name', sortable: true },
  { key: 'status', header: 'Status', accessor: 'status' },
] satisfies import('./Table.types').TableColumn<{ id: number; name: string; status: string }>[];

const data = [
  { id: 1, name: 'Zeta', status: 'Pending' },
  { id: 2, name: 'Alpha', status: 'Done' },
];

describe('Table', () => {
  it('renders sortable headers as buttons and updates aria-sort', async () => {
    const user = userEvent.setup();

    render(<Table columns={columns} data={data} rowKey="id" />);

    const sortButton = screen.getByRole('button', { name: /name/i });
    const headerCell = sortButton.closest('th');

    expect(headerCell).toHaveAttribute('aria-sort', 'none');
    await user.click(sortButton);
    expect(headerCell).toHaveAttribute('aria-sort', 'ascending');
    await user.click(sortButton);
    expect(headerCell).toHaveAttribute('aria-sort', 'descending');
  });

  it('allows keyboard activation for clickable rows', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();

    render(<Table columns={columns} data={data} rowKey="id" onRowClick={onRowClick} />);

    const rows = screen.getAllByRole('row');
    const firstBodyRow = rows[1];

    firstBodyRow.focus();
    await user.keyboard('{Enter}');

    expect(onRowClick).toHaveBeenCalledWith(data[0], 0);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Table columns={columns} data={data} rowKey="id" />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'striped', ui: <Table columns={columns} data={data} rowKey="id" striped /> },
        { name: 'bordered', ui: <Table columns={columns} data={data} rowKey="id" bordered /> },
        { name: 'compact', ui: <Table columns={columns} data={data} rowKey="id" compact /> },
        { name: 'hoverable', ui: <Table columns={columns} data={data} rowKey="id" hoverable /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses interactive elements within table', async () => {
        const user = userEvent.setup();
        render(<Table columns={columns} data={data} rowKey="id" />);
        await user.tab();
        const sortButton = screen.getByRole('button', { name: /name/i });
        expect(sortButton).toHaveFocus();
      });
    });
  });
});


describe('Table – additional coverage', () => {
  it('renders caption when provided', () => {
    render(<Table columns={columns} data={data} rowKey="id" caption="User list" />);
    expect(screen.getByText('User list')).toBeInTheDocument();
  });

  it('renders caption with bottom side class', () => {
    const { container } = render(
      <Table columns={columns} data={data} rowKey="id" caption="Bottom caption" captionSide="bottom" />
    );
    expect(container.querySelector('.ux4g-table-caption-bottom')).toBeInTheDocument();
  });

  it('renders empty state when data is empty', () => {
    render(<Table columns={columns} data={[]} rowKey="id" />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders custom empty state', () => {
    render(<Table columns={columns} data={[]} rowKey="id" emptyState="Nothing here" />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('renders loading skeleton rows', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" loading loadingRows={3} />);
    const skeletons = container.querySelectorAll('.ux4g-skeleton');
    expect(skeletons.length).toBe(3 * columns.length);
  });

  it('sets aria-busy when loading', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" loading />);
    expect(container.firstChild).toHaveAttribute('aria-busy', 'true');
  });

  it('applies striped class', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" striped />);
    expect(container.querySelector('.ux4g-table-striped')).toBeInTheDocument();
  });

  it('applies bordered class', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" bordered />);
    expect(container.querySelector('.ux4g-table-bordered')).toBeInTheDocument();
  });

  it('applies compact class', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" compact />);
    expect(container.querySelector('.ux4g-table-compact')).toBeInTheDocument();
  });

  it('applies hoverable class', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" hoverable />);
    expect(container.querySelector('.ux4g-table-hoverable')).toBeInTheDocument();
  });

  it('applies stickyHeader class', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" stickyHeader />);
    expect(container.querySelector('.ux4g-table-sticky-header')).toBeInTheDocument();
  });

  it('applies maxHeight style to container', () => {
    const { container } = render(<Table columns={columns} data={data} rowKey="id" maxHeight="400px" />);
    expect(container.firstChild).toHaveStyle({ maxHeight: '400px', overflow: 'auto' });
  });

  it('sorts data descending then resets on third click', async () => {
    const user = userEvent.setup();
    render(<Table columns={columns} data={data} rowKey="id" />);
    const sortButton = screen.getByRole('button', { name: /name/i });
    const headerCell = sortButton.closest('th');

    await user.click(sortButton); // asc
    await user.click(sortButton); // desc
    await user.click(sortButton); // reset to none
    expect(headerCell).toHaveAttribute('aria-sort', 'none');
  });

  it('calls onSortChange callback', async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    render(<Table columns={columns} data={data} rowKey="id" onSortChange={onSortChange} />);
    await user.click(screen.getByRole('button', { name: /name/i }));
    expect(onSortChange).toHaveBeenCalledWith({ columnKey: 'name', direction: 'asc' });
  });

  it('supports controlled sort state', () => {
    render(
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        sortState={{ columnKey: 'name', direction: 'desc' }}
      />
    );
    const headerCell = screen.getByRole('button', { name: /name/i }).closest('th');
    expect(headerCell).toHaveAttribute('aria-sort', 'descending');
  });

  it('handles row click', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();
    render(<Table columns={columns} data={data} rowKey="id" onRowClick={onRowClick} />);
    const rows = screen.getAllByRole('row');
    await user.click(rows[1]);
    expect(onRowClick).toHaveBeenCalledWith(data[0], 0);
  });

  it('handles row keyboard activation with Space', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();
    render(<Table columns={columns} data={data} rowKey="id" onRowClick={onRowClick} />);
    const rows = screen.getAllByRole('row');
    rows[1].focus();
    await user.keyboard(' ');
    expect(onRowClick).toHaveBeenCalledWith(data[0], 0);
  });

  it('uses rowKey function when provided', () => {
    render(
      <Table
        columns={columns}
        data={data}
        rowKey={(row: any) => `row-${row.id}`}
      />
    );
    expect(screen.getAllByRole('row').length).toBe(3); // header + 2 data rows
  });

  it('uses index as key when no rowKey is provided', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getAllByRole('row').length).toBe(3);
  });

  it('renders cell with accessor function', () => {
    const cols = [
      { key: 'fullName', header: 'Full Name', accessor: (row: any) => `Mr. ${row.name}` },
    ];
    render(<Table columns={cols} data={data} rowKey="id" />);
    expect(screen.getByText('Mr. Zeta')).toBeInTheDocument();
  });

  it('renders cell with render function', () => {
    const cols = [
      { key: 'name', header: 'Name', accessor: 'name' as const, render: (val: any) => <strong>{val}</strong> },
    ];
    render(<Table columns={cols} data={data} rowKey="id" />);
    expect(screen.getByText('Zeta').tagName).toBe('STRONG');
  });

  it('sorts using custom sortFn', async () => {
    const user = userEvent.setup();
    const cols = [
      { key: 'name', header: 'Name', accessor: 'name' as const, sortable: true, sortFn: (a: any, b: any) => a.name.length - b.name.length },
      { key: 'status', header: 'Status', accessor: 'status' as const },
    ];
    render(<Table columns={cols} data={data} rowKey="id" />);
    await user.click(screen.getByRole('button', { name: /name/i }));
    // Zeta (4) should come before Alpha (5)
    const cells = screen.getAllByRole('cell');
    expect(cells[0]).toHaveTextContent('Zeta');
  });

  it('does not ignore keydown when onRowClick is not set', async () => {
    const user = userEvent.setup();
    render(<Table columns={columns} data={data} rowKey="id" />);
    const rows = screen.getAllByRole('row');
    rows[1].focus();
    await user.keyboard('{Enter}');
    // No error, no onRowClick called
  });
});

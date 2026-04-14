import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from './Table';

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
});

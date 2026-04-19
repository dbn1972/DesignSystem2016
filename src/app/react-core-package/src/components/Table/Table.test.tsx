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

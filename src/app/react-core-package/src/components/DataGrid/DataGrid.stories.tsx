import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './DataGrid';

const columns = [
  { key: 'appId', header: 'Application ID', sortable: true, width: '150px' },
  { key: 'name', header: 'Applicant', sortable: true },
  { key: 'service', header: 'Service' },
  { key: 'status', header: 'Status' },
  { key: 'date', header: 'Date', sortable: true },
];

const data = [
  { id: '1', appId: 'APP-001', name: 'Rahul Kumar', service: 'Birth Certificate', status: 'Approved', date: '2026-04-10' },
  { id: '2', appId: 'APP-002', name: 'Priya Singh', service: 'Passport', status: 'Pending', date: '2026-04-12' },
  { id: '3', appId: 'APP-003', name: 'Amit Patel', service: 'Driving License', status: 'Rejected', date: '2026-04-14' },
];

const meta: Meta<typeof DataGrid> = { title: 'Components/DataGrid', component: DataGrid, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DataGrid>;

export const Default: Story = { args: { columns, data, rowKey: 'id', caption: 'Applications' } };
export const Striped: Story = { args: { columns, data, rowKey: 'id', striped: true } };
export const Loading: Story = { args: { columns, data: [], rowKey: 'id', loading: true } };
export const Empty: Story = { args: { columns, data: [], rowKey: 'id', emptyMessage: 'No applications found' } };
export const Sorted: Story = { args: { columns, data, rowKey: 'id', sortKey: 'name', sortDirection: 'asc' } };

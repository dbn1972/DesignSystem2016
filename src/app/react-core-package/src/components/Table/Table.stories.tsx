import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Table } from './Table';
import { SortState } from './Table.types';

/**
 * The Table component displays data in a structured, tabular format with support
 * for sorting, filtering, and custom cell rendering.
 *
 * ## When to use
 * - Displaying structured data in rows and columns
 * - Comparing multiple data points
 * - Allowing users to sort and filter data
 * - Presenting government records or citizen information
 *
 * ## When NOT to use
 * - For simple lists - use a list component
 * - For single records - use a card or definition list
 * - For large datasets without pagination - consider virtualization
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Alternate row background colors',
    },
    hoverable: {
      control: 'boolean',
      description: 'Show hover effect on rows',
    },
    bordered: {
      control: 'boolean',
      description: 'Show borders around cells',
    },
    compact: {
      control: 'boolean',
      description: 'Reduce cell padding',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Keep header visible when scrolling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for stories
const citizenData = [
  { id: 1, name: 'Rajesh Kumar', aadhaar: '1234-5678-9012', state: 'Maharashtra', status: 'Verified' },
  { id: 2, name: 'Priya Sharma', aadhaar: '2345-6789-0123', state: 'Karnataka', status: 'Pending' },
  { id: 3, name: 'Amit Patel', aadhaar: '3456-7890-1234', state: 'Gujarat', status: 'Verified' },
  { id: 4, name: 'Sneha Reddy', aadhaar: '4567-8901-2345', state: 'Telangana', status: 'Verified' },
  { id: 5, name: 'Vikram Singh', aadhaar: '5678-9012-3456', state: 'Punjab', status: 'Rejected' },
];

const basicColumns = [
  { key: 'name', header: 'Name', accessor: 'name' as const, sortable: true },
  { key: 'aadhaar', header: 'Aadhaar Number', accessor: 'aadhaar' as const },
  { key: 'state', header: 'State', accessor: 'state' as const, sortable: true },
  { key: 'status', header: 'Status', accessor: 'status' as const },
];

/**
 * Basic table with citizen data
 */
export const Basic: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    caption: 'Citizen Verification Records',
  },
};

/**
 * Striped table for better readability of long data rows
 */
export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    striped: true,
    caption: 'Striped Table Example',
  },
};

/**
 * Hoverable table highlights row on hover for better interaction
 */
export const Hoverable: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    hoverable: true,
    caption: 'Hoverable Table Example',
  },
};

/**
 * Bordered table with visible cell borders
 */
export const Bordered: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    bordered: true,
    caption: 'Bordered Table Example',
  },
};

/**
 * Compact table with reduced padding for dense data
 */
export const Compact: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    compact: true,
    striped: true,
    caption: 'Compact Table Example',
  },
};

/**
 * Table with sortable columns. Click column headers to sort.
 */
export const Sortable: Story = {
  args: {
    columns: basicColumns,
    data: citizenData,
    striped: true,
    hoverable: true,
    caption: 'Sortable Table - Click headers to sort',
  },
};

/**
 * Table with custom cell rendering including status badges
 */
export const WithCustomRendering: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Applicant Name', accessor: 'name' as const, sortable: true },
      { key: 'aadhaar', header: 'Aadhaar', accessor: 'aadhaar' as const },
      { key: 'state', header: 'State', accessor: 'state' as const, sortable: true },
      {
        key: 'status',
        header: 'Verification Status',
        accessor: 'status' as const,
        render: (value: string) => {
          const statusClass =
            value === 'Verified'
              ? 'ux4g-badge ux4g-badge-success'
              : value === 'Pending'
              ? 'ux4g-badge ux4g-badge-warning'
              : 'ux4g-badge ux4g-badge-error';
          return <span className={statusClass}>{value}</span>;
        },
      },
    ],
    data: citizenData,
    striped: true,
    hoverable: true,
    caption: 'Table with Custom Cell Rendering',
  },
};

/**
 * PAN card application tracking table
 */
export const PANApplications: Story = {
  args: {
    columns: [
      { key: 'applicationId', header: 'Application ID', accessor: 'applicationId' as const },
      { key: 'name', header: 'Applicant Name', accessor: 'name' as const, sortable: true },
      { key: 'type', header: 'Application Type', accessor: 'type' as const },
      { key: 'submittedDate', header: 'Submitted', accessor: 'submittedDate' as const, sortable: true },
      {
        key: 'status',
        header: 'Status',
        accessor: 'status' as const,
        render: (value: string) => {
          const statusClass =
            value === 'Approved'
              ? 'ux4g-badge ux4g-badge-success'
              : value === 'Under Review'
              ? 'ux4g-badge ux4g-badge-info'
              : 'ux4g-badge ux4g-badge-warning';
          return <span className={statusClass}>{value}</span>;
        },
      },
    ],
    data: [
      { applicationId: 'PAN2024001', name: 'Rahul Verma', type: 'New PAN', submittedDate: '2024-03-15', status: 'Approved' },
      { applicationId: 'PAN2024002', name: 'Anita Desai', type: 'Correction', submittedDate: '2024-03-16', status: 'Under Review' },
      { applicationId: 'PAN2024003', name: 'Karan Malhotra', type: 'New PAN', submittedDate: '2024-03-17', status: 'Submitted' },
      { applicationId: 'PAN2024004', name: 'Meera Nair', type: 'Reprint', submittedDate: '2024-03-18', status: 'Approved' },
    ],
    striped: true,
    hoverable: true,
    bordered: true,
    caption: 'PAN Card Application Tracking',
  },
};

/**
 * DigiLocker document management table
 */
export const DigiLockerDocuments: Story = {
  args: {
    columns: [
      { key: 'documentName', header: 'Document Name', accessor: 'documentName' as const, sortable: true },
      { key: 'issuer', header: 'Issued By', accessor: 'issuer' as const },
      { key: 'issueDate', header: 'Issue Date', accessor: 'issueDate' as const, sortable: true },
      { key: 'size', header: 'Size', accessor: 'size' as const, align: 'right' as const },
      {
        key: 'verified',
        header: 'Verified',
        accessor: 'verified' as const,
        align: 'center' as const,
        render: (value: boolean) => (
          <span className={value ? 'ux4g-badge ux4g-badge-success' : 'ux4g-badge ux4g-badge-ghost'}>
            {value ? '✓ Verified' : 'Not Verified'}
          </span>
        ),
      },
    ],
    data: [
      { documentName: 'Aadhaar Card', issuer: 'UIDAI', issueDate: '2018-05-20', size: '245 KB', verified: true },
      { documentName: 'PAN Card', issuer: 'Income Tax Department', issueDate: '2019-08-15', size: '180 KB', verified: true },
      { documentName: 'Driving License', issuer: 'Ministry of Road Transport', issueDate: '2020-01-10', size: '320 KB', verified: true },
      { documentName: 'Voter ID', issuer: 'Election Commission of India', issueDate: '2017-11-05', size: '210 KB', verified: false },
    ],
    striped: true,
    hoverable: true,
    caption: 'DigiLocker Documents',
  },
};

/**
 * State-wise statistics table with custom column widths and alignment
 */
export const StateStatistics: Story = {
  args: {
    columns: [
      { key: 'state', header: 'State', accessor: 'state' as const, sortable: true, width: '25%' },
      { key: 'population', header: 'Population', accessor: 'population' as const, sortable: true, align: 'right' as const },
      { key: 'verified', header: 'Verified Citizens', accessor: 'verified' as const, sortable: true, align: 'right' as const },
      {
        key: 'percentage',
        header: 'Coverage',
        accessor: 'percentage' as const,
        sortable: true,
        align: 'right' as const,
        render: (value: number) => `${value}%`,
      },
    ],
    data: [
      { state: 'Uttar Pradesh', population: '199,812,341', verified: '175,000,000', percentage: 87.6 },
      { state: 'Maharashtra', population: '112,374,333', verified: '105,000,000', percentage: 93.4 },
      { state: 'Bihar', population: '104,099,452', verified: '88,000,000', percentage: 84.5 },
      { state: 'West Bengal', population: '91,276,115', verified: '85,000,000', percentage: 93.1 },
      { state: 'Madhya Pradesh', population: '72,626,809', verified: '68,000,000', percentage: 93.6 },
    ],
    striped: true,
    bordered: true,
    caption: 'State-wise Aadhaar Coverage Statistics',
  },
};

/**
 * Empty state when no data is available
 */
export const EmptyState: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyState: (
      <div className="ux4g-empty-state">
        <p>No citizen records found</p>
        <p className="ux4g-text-sm ux4g-text-muted">Try adjusting your search criteria</p>
      </div>
    ),
    caption: 'Empty Table Example',
  },
};

/**
 * Loading state with skeleton rows
 */
export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    loadingRows: 8,
    caption: 'Loading Table Example',
  },
};

/**
 * Controlled sorting example with external state management
 */
export const ControlledSorting: Story = {
  render: () => {
    const [sortState, setSortState] = useState<SortState>({
      columnKey: 'name',
      direction: 'asc',
    });

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            <strong>Current Sort:</strong> {sortState.columnKey || 'None'} -{' '}
            {sortState.direction || 'None'}
          </p>
        </div>
        <Table
          columns={basicColumns}
          data={citizenData}
          sortState={sortState}
          onSortChange={setSortState}
          striped
          hoverable
          caption="Controlled Sorting Example"
        />
      </div>
    );
  },
};

/**
 * Sticky header table with scrollable content
 */
export const StickyHeader: Story = {
  args: {
    columns: basicColumns,
    data: [
      ...citizenData,
      ...citizenData.map((item, idx) => ({ ...item, id: item.id + 100 + idx })),
      ...citizenData.map((item, idx) => ({ ...item, id: item.id + 200 + idx })),
    ],
    stickyHeader: true,
    maxHeight: '400px',
    striped: true,
    hoverable: true,
    caption: 'Sticky Header Table - Scroll to see header stay in place',
  },
};

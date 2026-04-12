import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {
    totalPages: 10,
    defaultValue: 1,
  },
};

export const ManyPages: Story = {
  args: {
    totalPages: 50,
    defaultValue: 25,
  },
};

export const Compact: Story = {
  args: {
    totalPages: 10,
    variant: 'compact',
    showFirstLast: false,
  },
};

export const WithPageInfo: Story = {
  args: {
    totalPages: 20,
    defaultValue: 5,
    showPageInfo: true,
  },
};

export const CitizenRecordsPagination: Story = {
  args: {
    totalPages: 100,
    defaultValue: 1,
    showPageInfo: true,
    labels: {
      pageInfo: (current, total) => `Showing page ${current} of ${total} citizen records`,
    },
  },
};

export const ApplicationsPagination: Story = {
  args: {
    totalPages: 15,
    defaultValue: 1,
    siblingCount: 2,
  },
};

export const MinimalPagination: Story = {
  args: {
    totalPages: 5,
    showFirstLast: false,
    defaultValue: 1,
  },
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f5f5f5' }}>
          <p>Current Page: {page}</p>
        </div>
        <Pagination totalPages={10} value={page} onChange={setPage} />
      </div>
    );
  },
};

export const DigiLockerDocuments: Story = {
  args: {
    totalPages: 8,
    defaultValue: 1,
    showPageInfo: true,
    labels: {
      pageInfo: (current, total) => `Documents: Page ${current} of ${total}`,
    },
  },
};

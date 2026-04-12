import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Basic: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const ApplicationSearch: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    return (
      <div>
        <SearchBar
          placeholder="Search applications by ID or name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={(value) => console.log('Searching:', value)}
        />
        {query && (
          <p style={{ marginTop: '1rem' }}>Searching for: {query}</p>
        )}
      </div>
    );
  },
};

export const CitizenSearch: Story = {
  args: {
    placeholder: 'Search citizens by Aadhaar or name...',
    onSearch: (value) => console.log('Searching:', value),
  },
};

export const DocumentSearch: Story = {
  args: {
    placeholder: 'Search documents in DigiLocker...',
    onSearch: (value) => console.log('Searching:', value),
  },
};

export const PANSearch: Story = {
  args: {
    placeholder: 'Enter PAN number (e.g., ABCDE1234F)',
    onSearch: (value) => console.log('Searching PAN:', value),
  },
};

export const AadhaarSearch: Story = {
  args: {
    placeholder: 'Enter Aadhaar number (12 digits)',
    onSearch: (value) => console.log('Searching Aadhaar:', value),
  },
};

export const SchemeSearch: Story = {
  args: {
    placeholder: 'Search government schemes...',
    onSearch: (value) => console.log('Searching schemes:', value),
  },
};

export const DepartmentSearch: Story = {
  args: {
    placeholder: 'Search government departments...',
    onSearch: (value) => console.log('Searching departments:', value),
  },
};

export const StateServiceSearch: Story = {
  args: {
    placeholder: 'Search state government services...',
    onSearch: (value) => console.log('Searching:', value),
  },
};

export const WithLoading: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleSearch = (value: string) => {
      setLoading(true);
      setTimeout(() => {
        console.log('Search complete:', value);
        setLoading(false);
      }, 2000);
    };

    return (
      <SearchBar
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        loading={loading}
      />
    );
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small search...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large search...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled search',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: 'Search...',
  },
};

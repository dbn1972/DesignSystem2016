import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithSubmenu: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      {
        label: 'Services',
        href: '#',
        children: [
          { label: 'Aadhaar', href: '#' },
          { label: 'PAN Card', href: '#' },
          { label: 'Passport', href: '#' },
        ],
      },
      { label: 'Contact', href: '#' },
    ],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
const meta: Meta<typeof Header> = { title: 'Components/Header', component: Header, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Header>;
export const Default: Story = { args: { title: 'Certificate Service', navItems: [{ label: 'Home', href: '/', active: true }, { label: 'Apply', href: '/apply' }, { label: 'Track', href: '/track' }], actions: <button style={{ padding: '6px 12px', fontSize: 14, border: '1px solid #d1d5db', borderRadius: 8 }}>Login</button> } };

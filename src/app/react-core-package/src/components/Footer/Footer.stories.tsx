import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
const meta: Meta<typeof Footer> = { title: 'Components/Footer', component: Footer, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Footer>;
export const Default: Story = { args: { sections: [{ title: 'Resources', links: [{ label: 'Documentation', href: '/docs' }, { label: 'API Reference', href: '/api' }] }, { title: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Use', href: '/terms' }] }], copyright: '© 2026 Government of India' } };

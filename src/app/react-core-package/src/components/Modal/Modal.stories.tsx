import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = { args: { open: true, onClose: () => {}, title: 'Confirm Action', description: 'Are you sure you want to proceed?', children: <div style={{ marginTop: 16 }}><button style={{ padding: '8px 16px', background: '#005196', color: 'white', border: 'none', borderRadius: 8 }}>Confirm</button></div> } };

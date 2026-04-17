import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';
const meta: Meta<typeof TreeView> = { title: 'Components/TreeView', component: TreeView, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof TreeView>;
export const Default: Story = { args: { nodes: [{ id: '1', label: 'Ministry of Home Affairs', children: [{ id: '1a', label: 'Passport Division' }, { id: '1b', label: 'Census Division' }] }, { id: '2', label: 'Ministry of Finance', children: [{ id: '2a', label: 'Tax Department', children: [{ id: '2a1', label: 'Income Tax' }, { id: '2a2', label: 'GST' }] }] }] } };

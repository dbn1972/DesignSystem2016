import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
const meta: Meta<typeof List> = { title: 'Components/List', component: List, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof List>;
export const Default: Story = { args: { items: [{ key: '1', primary: 'Birth Certificate', secondary: 'Applied on 10 Apr 2026' }, { key: '2', primary: 'Passport', secondary: 'Applied on 12 Apr 2026' }, { key: '3', primary: 'Driving License' }] } };
export const Empty: Story = { args: { items: [], emptyMessage: 'No applications found' } };
export const WithActions: Story = { args: { items: [{ key: '1', primary: 'Document.pdf', action: <button style={{ fontSize: 12, color: '#005196' }}>Download</button> }] } };

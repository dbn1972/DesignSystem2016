import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
const meta: Meta<typeof Container> = { title: 'Components/Container', component: Container, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Container>;
export const Default: Story = { args: { children: 'Contained content with max-width and padding.' } };
export const Small: Story = { args: { maxWidth: 'sm', children: 'Small container' } };
export const NoPadding: Story = { args: { padding: false, children: 'No padding' } };

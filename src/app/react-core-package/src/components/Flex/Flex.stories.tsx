import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
const meta: Meta<typeof Flex> = { title: 'Components/Flex', component: Flex, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Flex>;
const Box = ({ c }: { c: string }) => <div style={{ padding: 16, background: '#e5e7eb', borderRadius: 8 }}>{c}</div>;
export const Row: Story = { render: () => <Flex gap={16}><Box c="1" /><Box c="2" /><Box c="3" /></Flex> };
export const Column: Story = { render: () => <Flex direction="column" gap={16}><Box c="1" /><Box c="2" /><Box c="3" /></Flex> };
export const SpaceBetween: Story = { render: () => <Flex justify="between" align="center"><Box c="Left" /><Box c="Right" /></Flex> };

import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
const meta: Meta<typeof Stack> = { title: 'Components/Stack', component: Stack, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stack>;
const Box = ({ children }: { children: string }) => <div style={{ padding: 16, background: '#e5e7eb', borderRadius: 8 }}>{children}</div>;
export const Vertical: Story = { render: () => <Stack><Box>Item 1</Box><Box>Item 2</Box><Box>Item 3</Box></Stack> };
export const Horizontal: Story = { render: () => <Stack direction="horizontal"><Box>Item 1</Box><Box>Item 2</Box><Box>Item 3</Box></Stack> };
export const Centered: Story = { render: () => <Stack align="center" justify="center" style={{ height: 200 }}><Box>Centered</Box></Stack> };

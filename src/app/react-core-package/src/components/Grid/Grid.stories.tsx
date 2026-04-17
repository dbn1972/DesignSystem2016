import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
const meta: Meta<typeof Grid> = { title: 'Components/Grid', component: Grid, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Grid>;
const Box = ({ c }: { c: string }) => <div style={{ padding: 16, background: '#e5e7eb', borderRadius: 8, textAlign: 'center' }}>{c}</div>;
export const ThreeColumns: Story = { render: () => <Grid columns={3} gap={16}><Box c="1" /><Box c="2" /><Box c="3" /><Box c="4" /><Box c="5" /><Box c="6" /></Grid> };
export const TwoColumns: Story = { render: () => <Grid columns={2} gap={24}><Box c="Left" /><Box c="Right" /></Grid> };

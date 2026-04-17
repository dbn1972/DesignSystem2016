import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';
const meta: Meta<typeof AspectRatio> = { title: 'Components/AspectRatio', component: AspectRatio, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof AspectRatio>;
export const Square: Story = { args: { ratio: 1, children: <div style={{ background: '#e5e7eb', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1:1</div>, style: { width: 200 } } };
export const Widescreen: Story = { args: { ratio: '16/9', children: <div style={{ background: '#e5e7eb', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>16:9</div>, style: { width: 400 } } };

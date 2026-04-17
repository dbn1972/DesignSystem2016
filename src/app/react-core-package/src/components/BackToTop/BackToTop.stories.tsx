import type { Meta, StoryObj } from '@storybook/react';
import { BackToTop } from './BackToTop';
const meta: Meta<typeof BackToTop> = { title: 'Components/BackToTop', component: BackToTop, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof BackToTop>;
export const Default: Story = { args: { threshold: 0 } };

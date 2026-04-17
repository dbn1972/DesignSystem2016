import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackRatingWidget } from './FeedbackRatingWidget';
const meta: Meta<typeof FeedbackRatingWidget> = { title: 'Components/FeedbackRatingWidget', component: FeedbackRatingWidget, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof FeedbackRatingWidget>;
export const Default: Story = { args: {} };
export const WithValue: Story = { args: { value: 4 } };
export const Large: Story = { args: { size: 'lg', value: 3 } };
export const Disabled: Story = { args: { value: 2, disabled: true } };

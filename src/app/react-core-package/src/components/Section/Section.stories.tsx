import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
const meta: Meta<typeof Section> = { title: 'Components/Section', component: Section, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Section>;
export const Default: Story = { args: { title: 'Overview', description: 'This section describes the feature.', children: 'Section content goes here.' } };
export const NoHeader: Story = { args: { children: 'Just content, no title.' } };

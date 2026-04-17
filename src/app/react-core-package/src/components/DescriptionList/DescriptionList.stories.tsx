import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from './DescriptionList';
const meta: Meta<typeof DescriptionList> = { title: 'Components/DescriptionList', component: DescriptionList, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DescriptionList>;
export const Default: Story = { args: { items: [{ term: 'Application ID', description: 'APP-2026-001' }, { term: 'Applicant', description: 'Rahul Kumar' }, { term: 'Service', description: 'Birth Certificate' }, { term: 'Status', description: 'Under Review' }] } };
export const Vertical: Story = { args: { layout: 'vertical', items: [{ term: 'Name', description: 'Priya Singh' }, { term: 'Email', description: 'priya@gov.in' }] } };
export const Striped: Story = { args: { striped: true, items: [{ term: 'Field 1', description: 'Value 1' }, { term: 'Field 2', description: 'Value 2' }, { term: 'Field 3', description: 'Value 3' }] } };

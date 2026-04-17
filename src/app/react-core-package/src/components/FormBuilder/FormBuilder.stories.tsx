import type { Meta, StoryObj } from '@storybook/react';
import { FormBuilder } from './FormBuilder';

const meta: Meta<typeof FormBuilder> = { title: 'Components/FormBuilder', component: FormBuilder, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Default: Story = {
  args: {
    title: 'Certificate Application',
    description: 'Fill in the details below to apply.',
    fields: [
      { key: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter full name' },
      { key: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@gov.in' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
      { key: 'state', label: 'State', type: 'select', required: true, options: [{ value: 'DL', label: 'Delhi' }, { value: 'MH', label: 'Maharashtra' }, { value: 'KA', label: 'Karnataka' }] },
      { key: 'desc', label: 'Description', type: 'textarea', placeholder: 'Describe your request...' },
      { key: 'agree', label: 'I agree to the terms', type: 'checkbox', required: true },
    ],
    onSubmit: (v) => alert(JSON.stringify(v, null, 2)),
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationTracker } from './ApplicationTracker';

const meta: Meta<typeof ApplicationTracker> = { title: 'Components/ApplicationTracker', component: ApplicationTracker, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ApplicationTracker>;

const steps = [
  { key: 'submitted', label: 'Application Submitted', status: 'completed' as const, timestamp: '10 Apr 2026' },
  { key: 'screening', label: 'Initial Screening', status: 'completed' as const, timestamp: '11 Apr 2026' },
  { key: 'verification', label: 'Document Verification', status: 'current' as const, description: 'Officer reviewing documents' },
  { key: 'approval', label: 'Approval', status: 'upcoming' as const },
  { key: 'issued', label: 'Certificate Issued', status: 'upcoming' as const },
];

export const Default: Story = { args: { applicationId: 'DL-2026-89012', serviceName: 'Birth Certificate', steps } };
export const Horizontal: Story = { args: { applicationId: 'DL-2026-89012', serviceName: 'Passport', steps, orientation: 'horizontal' } };
export const WithError: Story = {
  args: {
    applicationId: 'DL-2026-89013',
    serviceName: 'Driving License',
    steps: [
      { key: 'submitted', label: 'Submitted', status: 'completed' as const },
      { key: 'rejected', label: 'Rejected', status: 'error' as const, description: 'Missing address proof' },
    ],
  },
};

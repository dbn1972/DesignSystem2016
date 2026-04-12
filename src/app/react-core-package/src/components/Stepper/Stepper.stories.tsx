import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const basicSteps = [
  { key: '1', label: 'Step 1' },
  { key: '2', label: 'Step 2' },
  { key: '3', label: 'Step 3' },
];

export const Basic: Story = {
  args: {
    steps: basicSteps,
    current: 1,
  },
};

export const WithDescriptions: Story = {
  args: {
    steps: [
      { key: '1', label: 'Personal Info', description: 'Enter your details' },
      { key: '2', label: 'Documents', description: 'Upload documents' },
      { key: '3', label: 'Review', description: 'Review and submit' },
    ],
    current: 1,
  },
};

export const PANApplication: Story = {
  args: {
    steps: [
      {
        key: 'personal',
        label: 'Personal Details',
        description: 'Name, DOB, Address',
      },
      {
        key: 'documents',
        label: 'Upload Documents',
        description: 'Identity and Address Proof',
      },
      {
        key: 'payment',
        label: 'Payment',
        description: 'Application Fee',
      },
      {
        key: 'review',
        label: 'Review & Submit',
        description: 'Final Verification',
      },
    ],
    current: 2,
  },
};

export const AadhaarEnrollment: Story = {
  args: {
    steps: [
      {
        key: 'verify',
        label: 'Mobile Verification',
        description: 'Verify mobile number',
      },
      {
        key: 'documents',
        label: 'Document Upload',
        description: 'Upload supporting documents',
      },
      {
        key: 'biometric',
        label: 'Biometric',
        description: 'Capture fingerprints',
      },
      {
        key: 'photo',
        label: 'Photograph',
        description: 'Capture photo',
      },
      {
        key: 'submit',
        label: 'Submit',
        description: 'Complete enrollment',
      },
    ],
    current: 2,
  },
};

export const PassportApplication: Story = {
  args: {
    steps: [
      { key: '1', label: 'Registration', description: 'Create account' },
      { key: '2', label: 'Fill Form', description: 'Complete application form' },
      { key: '3', label: 'Fee Payment', description: 'Pay application fee' },
      { key: '4', label: 'Appointment', description: 'Book PSK appointment' },
      { key: '5', label: 'Document Verification', description: 'Visit PSK' },
    ],
    current: 3,
  },
};

export const LicenseRenewal: Story = {
  args: {
    steps: [
      { key: '1', label: 'Login', description: 'Login with credentials' },
      { key: '2', label: 'Medical Certificate', description: 'Upload medical certificate' },
      { key: '3', label: 'Payment', description: 'Pay renewal fee' },
      { key: '4', label: 'Confirmation', description: 'Download acknowledgment' },
    ],
    current: 1,
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    steps: [
      { key: '1', label: 'Personal Details', description: 'Complete' },
      { key: '2', label: 'Contact Info', description: 'In Progress' },
      { key: '3', label: 'Address', description: 'Pending' },
      { key: '4', label: 'Submit', description: 'Pending' },
    ],
    current: 1,
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { key: '1', label: 'Step 1', status: 'finish' },
      { key: '2', label: 'Step 2', status: 'error' },
      { key: '3', label: 'Step 3', status: 'waiting' },
    ],
    current: 1,
  },
};

export const Interactive: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    const steps = [
      { key: '1', label: 'Personal Info' },
      { key: '2', label: 'Documents' },
      { key: '3', label: 'Review' },
      { key: '4', label: 'Submit' },
    ];

    return (
      <div>
        <Stepper steps={steps} current={current} />
        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
          <button
            className="ux4g-button ux4g-button-outline"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            Previous
          </button>
          <button
            className="ux4g-button ux4g-button-primary"
            onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
            disabled={current === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

export const Clickable: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    const steps = [
      { key: '1', label: 'Step 1' },
      { key: '2', label: 'Step 2' },
      { key: '3', label: 'Step 3' },
      { key: '4', label: 'Step 4' },
    ];

    return (
      <div>
        <p style={{ marginBottom: '1rem' }}>Click on steps to navigate</p>
        <Stepper steps={steps} current={current} clickable onStepClick={setCurrent} />
      </div>
    );
  },
};

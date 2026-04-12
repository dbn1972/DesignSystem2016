import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="ux4g-button ux4g-button-primary">Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    placement: 'top',
    children: <button className="ux4g-button ux4g-button-outline">Top</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
    children: <button className="ux4g-button ux4g-button-outline">Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: <button className="ux4g-button ux4g-button-outline">Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: <button className="ux4g-button ux4g-button-outline">Right</button>,
  },
};

export const AadhaarHelp: Story = {
  args: {
    content: 'Aadhaar is a 12-digit unique identification number issued by UIDAI',
    children: <span className="ux4g-text-link">What is Aadhaar? ℹ️</span>,
  },
};

export const PANCardFormat: Story = {
  args: {
    content: 'PAN format: ABCDE1234F (5 letters, 4 digits, 1 letter)',
    children: <label className="ux4g-label">PAN Card Number ℹ️</label>,
  },
};

export const DocumentSize: Story = {
  args: {
    content: 'Maximum file size: 5MB. Accepted formats: PDF, JPG, PNG',
    children: <button className="ux4g-button ux4g-button-outline">Upload Document ℹ️</button>,
  },
};

export const StateSelection: Story = {
  args: {
    content: 'Select your current state of residence',
    children: <label className="ux4g-label">State ℹ️</label>,
  },
};

export const DigiLockerInfo: Story = {
  args: {
    content: 'DigiLocker is a secure cloud-based platform for storing documents',
    placement: 'right',
    children: <span className="ux4g-badge ux4g-badge-info">DigiLocker ℹ️</span>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      'The Permanent Account Number (PAN) is a ten-character alphanumeric identifier issued by the Income Tax Department. It is mandatory for financial transactions and filing income tax returns.',
    children: <button className="ux4g-button ux4g-button-primary">PAN Details</button>,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <button className="ux4g-button ux4g-button-outline">Disabled Tooltip</button>,
  },
};

export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    showArrow: false,
    children: <button className="ux4g-button ux4g-button-outline">No Arrow</button>,
  },
};

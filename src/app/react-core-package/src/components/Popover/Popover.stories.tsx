import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  args: {
    content: <div>This is a popover content</div>,
    children: <button className="ux4g-button ux4g-button-primary">Click me</button>,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Popover Title',
    content: <div>This popover has a title</div>,
    children: <button className="ux4g-button ux4g-button-primary">Open</button>,
  },
};

export const HoverTrigger: Story = {
  args: {
    trigger: 'hover',
    content: <div>Hover to see this content</div>,
    children: <button className="ux4g-button ux4g-button-outline">Hover me</button>,
  },
};

export const AadhaarInfo: Story = {
  args: {
    title: 'Aadhaar Information',
    content: (
      <div style={{ maxWidth: '200px' }}>
        <p>Aadhaar is a 12-digit unique identification number.</p>
        <p>Format: 1234 5678 9012</p>
      </div>
    ),
    children: <span className="ux4g-text-link">What is Aadhaar?</span>,
  },
};

export const PANFormat: Story = {
  args: {
    title: 'PAN Card Format',
    content: (
      <div style={{ maxWidth: '250px' }}>
        <p>PAN format: ABCDE1234F</p>
        <ul>
          <li>First 5 characters: Letters</li>
          <li>Next 4 characters: Numbers</li>
          <li>Last character: Letter</li>
        </ul>
      </div>
    ),
    children: <button className="ux4g-button ux4g-button-outline">PAN Format ℹ️</button>,
  },
};

export const DocumentRequirements: Story = {
  args: {
    title: 'Document Requirements',
    content: (
      <div style={{ maxWidth: '300px' }}>
        <p><strong>Required Documents:</strong></p>
        <ul>
          <li>Aadhaar Card (PDF/JPG)</li>
          <li>PAN Card (PDF/JPG)</li>
          <li>Passport Photo (JPG/PNG)</li>
        </ul>
        <p>Maximum file size: 5MB each</p>
      </div>
    ),
    children: <button className="ux4g-button ux4g-button-primary">View Requirements</button>,
  },
};

export const ApplicationStatus: Story = {
  args: {
    title: 'Application Status',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>
          <strong>Status:</strong> <span className="ux4g-badge ux4g-badge-success">Approved</span>
        </div>
        <div>
          <strong>Date:</strong> March 20, 2024
        </div>
        <div>
          <strong>Reference:</strong> PAN2024001
        </div>
      </div>
    ),
    children: <button className="ux4g-button ux4g-button-outline">Check Status</button>,
  },
};

export const StateInfo: Story = {
  args: {
    trigger: 'hover',
    title: 'Maharashtra',
    content: (
      <div style={{ maxWidth: '200px' }}>
        <p>Capital: Mumbai</p>
        <p>Population: 112 million</p>
        <p>Area: 307,713 km²</p>
      </div>
    ),
    children: <span className="ux4g-text-link">Maharashtra ℹ️</span>,
  },
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    content: <div>Popover at bottom</div>,
    children: <button className="ux4g-button ux4g-button-outline">Bottom</button>,
  },
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    content: <div>Popover at top</div>,
    children: <button className="ux4g-button ux4g-button-outline">Top</button>,
  },
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    content: <div>Popover at left</div>,
    children: <button className="ux4g-button ux4g-button-outline">Left</button>,
  },
};

export const RightPlacement: Story = {
  args: {
    placement: 'right',
    content: <div>Popover at right</div>,
    children: <button className="ux4g-button ux4g-button-outline">Right</button>,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Right Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Filter Options" placement="right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Status</label>
              <select className="ux4g-select">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
              </select>
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">State</label>
              <select className="ux4g-select">
                <option>All States</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Left Drawer
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" placement="left">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#" className="ux4g-text-link">Dashboard</a>
            <a href="#" className="ux4g-text-link">Applications</a>
            <a href="#" className="ux4g-text-link">Documents</a>
            <a href="#" className="ux4g-text-link">Settings</a>
          </nav>
        </Drawer>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Drawer
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Application Form"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Submit</button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Full Name</label>
              <input type="text" className="ux4g-input" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">Email</label>
              <input type="email" className="ux4g-input" />
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const DocumentViewer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Document
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Aadhaar Card.pdf"
          size="600px"
        >
          <div style={{ padding: '2rem', background: '#f5f5f5', textAlign: 'center' }}>
            <p>Document Preview</p>
            <div className="ux4g-badge ux4g-badge-success">✓ Verified</div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const ApplicationDetails: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Application
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="PAN Application Details"
          footer={
            <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              Close
            </button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <strong>Application ID:</strong> PAN2024001
            </div>
            <div>
              <strong>Applicant:</strong> Rahul Verma
            </div>
            <div>
              <strong>Type:</strong> New PAN
            </div>
            <div>
              <strong>Status:</strong>{' '}
              <span className="ux4g-badge ux4g-badge-success">Approved</span>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const LargeDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Large Drawer
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Application Form"
          size="800px"
        >
          <p>Large drawer content with 800px width</p>
        </Drawer>
      </>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Top Drawer
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Notifications"
          placement="top"
          size="200px"
        >
          <p>You have 3 new notifications</p>
        </Drawer>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Bottom Drawer
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Quick Actions"
          placement="bottom"
          size="200px"
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="ux4g-button ux4g-button-outline">Action 1</button>
            <button className="ux4g-button ux4g-button-outline">Action 2</button>
          </div>
        </Drawer>
      </>
    );
  },
};

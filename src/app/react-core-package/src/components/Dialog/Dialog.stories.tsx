import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Dialog
        </button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Basic Dialog">
          <p>This is a basic dialog with a title and content.</p>
        </Dialog>
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
          Open Dialog
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
                Confirm
              </button>
            </div>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
        </Dialog>
      </>
    );
  },
};

export const AadhaarVerification: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Verify Aadhaar
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Aadhaar Verification"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Send OTP</button>
            </div>
          }
        >
          <div className="ux4g-field">
            <label className="ux4g-label">Aadhaar Number</label>
            <input type="text" className="ux4g-input" placeholder="1234 5678 9012" />
          </div>
        </Dialog>
      </>
    );
  },
};

export const DeleteConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-destructive" onClick={() => setOpen(true)}>
          Delete Application
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete Application"
          size="sm"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-destructive" onClick={() => setOpen(false)}>
                Delete
              </button>
            </div>
          }
        >
          <p>Are you sure you want to delete this application? This action cannot be undone.</p>
        </Dialog>
      </>
    );
  },
};

export const DocumentUpload: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Upload Documents
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Upload Required Documents"
          size="lg"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button className="ux4g-button ux4g-button-outline" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="ux4g-button ux4g-button-primary">Upload</button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ux4g-field">
              <label className="ux4g-label">Aadhaar Card</label>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">PAN Card</label>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="ux4g-field">
              <label className="ux4g-label">Photograph</label>
              <input type="file" accept=".jpg,.png" />
            </div>
          </div>
        </Dialog>
      </>
    );
  },
};

export const ApplicationStatus: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Status
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Application Status"
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
              <strong>Status:</strong>{' '}
              <span className="ux4g-badge ux4g-badge-success">Approved</span>
            </div>
            <div>
              <strong>Submitted:</strong> March 15, 2024
            </div>
            <div>
              <strong>Processed:</strong> March 20, 2024
            </div>
          </div>
        </Dialog>
      </>
    );
  },
};

export const LargeContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          View Terms
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Terms and Conditions"
          size="xl"
          footer={
            <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              Accept
            </button>
          }
        >
          <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            <h3>Government of India - Service Terms</h3>
            <p>
              These terms and conditions outline the rules and regulations for the use of
              Government of India services...
            </p>
            <p>
              By accessing this service, we assume you accept these terms and conditions. Do not
              continue to use the service if you do not agree to all of the terms and conditions
              stated on this page.
            </p>
            <h4>Privacy Policy</h4>
            <p>Your privacy is important to us. All personal information collected...</p>
            <h4>Data Protection</h4>
            <p>We implement appropriate security measures to protect your data...</p>
          </div>
        </Dialog>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(true)}>
          Open Dialog
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Required Action"
          showCloseButton={false}
          closeOnBackdrop={false}
          closeOnEscape={false}
          footer={
            <button className="ux4g-button ux4g-button-primary" onClick={() => setOpen(false)}>
              I Understand
            </button>
          }
        >
          <p>You must acknowledge this message to continue.</p>
        </Dialog>
      </>
    );
  },
};

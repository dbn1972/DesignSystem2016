import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

/**
 * Checkbox component for selecting one or more options.
 *
 * ## Accessibility
 * - Uses native HTML checkbox input
 * - Supports keyboard navigation (Space to toggle)
 * - Proper ARIA attributes for screen readers
 * - Visual focus indicators
 * - Label associated with input via htmlFor
 */
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Checkbox component for selecting one or more options from a list. Supports controlled and uncontrolled modes, indeterminate state, and full accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (for "select all" scenarios)',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    label: 'I agree to the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    id: 'checked',
    label: 'This checkbox is checked',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'This checkbox is disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked',
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    id: 'required',
    label: 'This checkbox is required',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'error',
    label: 'This checkbox has an error',
    error: true,
  },
};

export const Indeterminate: Story = {
  args: {
    id: 'indeterminate',
    label: 'Select all items',
    indeterminate: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="space-y-4">
        <Checkbox
          id="controlled"
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm text-gray-600">
          Current state: {checked ? 'Checked' : 'Unchecked'}
        </p>
        <button
          onClick={() => setChecked(!checked)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Toggle
        </button>
      </div>
    );
  },
};

export const MultipleCheckboxes: Story = {
  name: 'Multiple Checkboxes',
  render: () => (
    <div className="space-y-3">
      <Checkbox id="option1" label="Option 1" />
      <Checkbox id="option2" label="Option 2" defaultChecked />
      <Checkbox id="option3" label="Option 3" />
      <Checkbox id="option4" label="Option 4" />
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal States</h3>
        <div className="space-y-2">
          <Checkbox id="state-1" label="Unchecked" />
          <Checkbox id="state-2" label="Checked" defaultChecked />
          <Checkbox id="state-3" label="Indeterminate" indeterminate />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="space-y-2">
          <Checkbox id="state-4" label="Disabled Unchecked" disabled />
          <Checkbox id="state-5" label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Error State</h3>
        <div className="space-y-2">
          <Checkbox id="state-6" label="Error State" error />
        </div>
      </div>
    </div>
  ),
};

export const GovernmentConsent: Story = {
  name: 'Government Consent Form',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Aadhaar Authentication Consent</h3>
      <p className="text-sm text-gray-600">
        Please review and accept the following terms to proceed with Aadhaar authentication.
      </p>

      <div className="space-y-3">
        <Checkbox
          id="consent-1"
          label="I authorize the use of my Aadhaar for authentication purposes"
          required
        />
        <Checkbox
          id="consent-2"
          label="I have read and understood the privacy policy"
          required
        />
        <Checkbox
          id="consent-3"
          label="I consent to the collection and processing of my personal data as per UIDAI guidelines"
          required
        />
        <Checkbox
          id="consent-4"
          label="Send me updates via SMS (Optional)"
        />
      </div>
    </div>
  ),
};

export const DocumentVerification: Story = {
  name: 'Document Verification Checklist',
  render: () => {
    const [docs, setDocs] = useState({
      aadhaar: false,
      pan: false,
      address: false,
      photo: false,
    });

    const allChecked = Object.values(docs).every(Boolean);
    const someChecked = Object.values(docs).some(Boolean) && !allChecked;

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Upload Required Documents</h3>

        <Checkbox
          id="select-all"
          label="Select All Documents"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={(e) => {
            const newState = e.target.checked;
            setDocs({
              aadhaar: newState,
              pan: newState,
              address: newState,
              photo: newState,
            });
          }}
        />

        <hr className="border-gray-200" />

        <div className="space-y-3 pl-6">
          <Checkbox
            id="doc-aadhaar"
            label="Aadhaar Card (Front and Back)"
            checked={docs.aadhaar}
            onChange={(e) => setDocs({ ...docs, aadhaar: e.target.checked })}
            required
          />
          <Checkbox
            id="doc-pan"
            label="PAN Card"
            checked={docs.pan}
            onChange={(e) => setDocs({ ...docs, pan: e.target.checked })}
            required
          />
          <Checkbox
            id="doc-address"
            label="Address Proof (Electricity Bill, etc.)"
            checked={docs.address}
            onChange={(e) => setDocs({ ...docs, address: e.target.checked })}
            required
          />
          <Checkbox
            id="doc-photo"
            label="Passport Size Photograph"
            checked={docs.photo}
            onChange={(e) => setDocs({ ...docs, photo: e.target.checked })}
            required
          />
        </div>

        <p className="text-sm text-gray-600 mt-4">
          {Object.values(docs).filter(Boolean).length} of 4 documents selected
        </p>
      </div>
    );
  },
};

export const ServicePreferences: Story = {
  name: 'Service Preferences',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Communication Preferences</h3>
      <p className="text-sm text-gray-600">
        Select how you would like to receive updates from government services.
      </p>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Notification Channels</h4>
          <div className="space-y-2 pl-4">
            <Checkbox id="pref-sms" label="SMS to registered mobile number" />
            <Checkbox id="pref-email" label="Email notifications" />
            <Checkbox id="pref-app" label="In-app notifications" />
            <Checkbox id="pref-whatsapp" label="WhatsApp updates" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Update Types</h4>
          <div className="space-y-2 pl-4">
            <Checkbox id="type-status" label="Application status updates" defaultChecked />
            <Checkbox id="type-deadline" label="Deadline reminders" defaultChecked />
            <Checkbox id="type-news" label="New service announcements" />
            <Checkbox id="type-survey" label="Feedback surveys" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const EligibilityCriteria: Story = {
  name: 'Eligibility Criteria Check',
  render: () => {
    const [criteria, setCriteria] = useState({
      citizen: false,
      age: false,
      income: false,
      residence: false,
    });

    const [error, setError] = useState(false);

    const handleSubmit = () => {
      const allMet = Object.values(criteria).every(Boolean);
      setError(!allMet);
    };

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Scholarship Eligibility</h3>
        <p className="text-sm text-gray-600">
          Please confirm you meet all eligibility criteria:
        </p>

        <div className="space-y-3">
          <Checkbox
            id="crit-citizen"
            label="I am an Indian citizen"
            checked={criteria.citizen}
            onChange={(e) => setCriteria({ ...criteria, citizen: e.target.checked })}
            error={error && !criteria.citizen}
            required
          />
          <Checkbox
            id="crit-age"
            label="I am between 18-25 years of age"
            checked={criteria.age}
            onChange={(e) => setCriteria({ ...criteria, age: e.target.checked })}
            error={error && !criteria.age}
            required
          />
          <Checkbox
            id="crit-income"
            label="My annual family income is below ₹5,00,000"
            checked={criteria.income}
            onChange={(e) => setCriteria({ ...criteria, income: e.target.checked })}
            error={error && !criteria.income}
            required
          />
          <Checkbox
            id="crit-residence"
            label="I am a resident of the state for at least 5 years"
            checked={criteria.residence}
            onChange={(e) => setCriteria({ ...criteria, residence: e.target.checked })}
            error={error && !criteria.residence}
            required
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">
            Please confirm all eligibility criteria to proceed
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Check Eligibility
        </button>
      </div>
    );
  },
};

export const TermsAndConditions: Story = {
  name: 'Terms and Conditions',
  render: () => {
    const [accepted, setAccepted] = useState(false);

    return (
      <div className="max-w-2xl space-y-4">
        <h3 className="text-lg font-medium">Terms of Service - Digital Locker</h3>

        <div className="border border-gray-200 rounded p-4 max-h-64 overflow-y-auto bg-gray-50">
          <h4 className="font-medium mb-2">1. Introduction</h4>
          <p className="text-sm text-gray-700 mb-4">
            These Terms of Service govern your use of the Digital Locker service provided
            by the Government of India. By accessing this service, you agree to be bound
            by these terms.
          </p>

          <h4 className="font-medium mb-2">2. Data Privacy</h4>
          <p className="text-sm text-gray-700 mb-4">
            Your personal documents and information stored in Digital Locker are encrypted
            and secured in accordance with Information Technology Act, 2000 and UIDAI
            regulations.
          </p>

          <h4 className="font-medium mb-2">3. User Responsibilities</h4>
          <p className="text-sm text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account.
          </p>

          <h4 className="font-medium mb-2">4. Service Availability</h4>
          <p className="text-sm text-gray-700">
            While we strive for maximum uptime, the service may be temporarily unavailable
            due to maintenance or technical issues.
          </p>
        </div>

        <Checkbox
          id="terms-accept"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          required
        >
          <span className="text-sm">
            I have read and agree to the{' '}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </span>
        </Checkbox>

        <button
          disabled={!accepted}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed to Digital Locker
        </button>
      </div>
    );
  },
};

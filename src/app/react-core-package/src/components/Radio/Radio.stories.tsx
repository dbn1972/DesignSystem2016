import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

/**
 * Radio component for selecting a single option from a list.
 *
 * ## Accessibility
 * - Uses native HTML radio input
 * - Supports keyboard navigation (Arrow keys, Tab)
 * - Proper ARIA attributes for screen readers
 * - Visual focus indicators
 * - Label associated with input via htmlFor
 */
const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Radio component for selecting a single option from multiple choices. Use radio buttons when users must select exactly one option from a list.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio label text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Radio value',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Radio group name (links related radios)',
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
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the radio group is required',
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    name: 'default',
    value: 'option1',
    label: 'Option 1',
  },
};

export const Checked: Story = {
  args: {
    id: 'checked',
    name: 'checked',
    value: 'option1',
    label: 'This radio is checked',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    name: 'disabled',
    value: 'option1',
    label: 'This radio is disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked',
    name: 'disabled-checked',
    value: 'option1',
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'error',
    name: 'error',
    value: 'option1',
    label: 'This radio has an error',
    error: true,
  },
};

export const BasicRadioGroup: Story = {
  name: 'Basic Radio Group',
  render: () => (
    <div className="space-y-3">
      <Radio id="size-1" name="size" value="small" label="Small" />
      <Radio id="size-2" name="size" value="medium" label="Medium" defaultChecked />
      <Radio id="size-3" name="size" value="large" label="Large" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState('option2');

    return (
      <div className="space-y-4">
        <div className="space-y-3">
          <Radio
            id="controlled-1"
            name="controlled"
            value="option1"
            label="Option 1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <Radio
            id="controlled-2"
            name="controlled"
            value="option2"
            label="Option 2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <Radio
            id="controlled-3"
            name="controlled"
            value="option3"
            label="Option 3"
            checked={selected === 'option3'}
            onChange={(e) => setSelected(e.target.value)}
          />
        </div>

        <p className="text-sm text-gray-600">Selected: {selected}</p>

        <button
          onClick={() => setSelected('option1')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm"
        >
          Reset to Option 1
        </button>
      </div>
    );
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal States</h3>
        <div className="space-y-2">
          <Radio id="state-1" name="state-normal" value="1" label="Unchecked" />
          <Radio id="state-2" name="state-normal" value="2" label="Checked" defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="space-y-2">
          <Radio id="state-3" name="state-disabled" value="3" label="Disabled Unchecked" disabled />
          <Radio
            id="state-4"
            name="state-disabled"
            value="4"
            label="Disabled Checked"
            disabled
            defaultChecked
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Error State</h3>
        <div className="space-y-2">
          <Radio id="state-5" name="state-error" value="5" label="Error State" error />
        </div>
      </div>
    </div>
  ),
};

export const GenderSelection: Story = {
  name: 'Gender Selection',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Gender</h3>
      <p className="text-sm text-gray-600">As per Aadhaar card</p>

      <div className="space-y-3">
        <Radio id="gender-male" name="gender" value="male" label="Male" required />
        <Radio id="gender-female" name="gender" value="female" label="Female" required />
        <Radio id="gender-other" name="gender" value="other" label="Other" required />
      </div>
    </div>
  ),
};

export const MaritalStatus: Story = {
  name: 'Marital Status',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Marital Status</h3>

      <div className="space-y-3">
        <Radio id="marital-single" name="marital" value="single" label="Single / Unmarried" />
        <Radio id="marital-married" name="marital" value="married" label="Married" />
        <Radio id="marital-divorced" name="marital" value="divorced" label="Divorced" />
        <Radio id="marital-widowed" name="marital" value="widowed" label="Widowed" />
      </div>
    </div>
  ),
};

export const IncomeCategory: Story = {
  name: 'Income Category',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Annual Household Income</h3>
      <p className="text-sm text-gray-600">Select your annual household income range</p>

      <div className="space-y-3">
        <Radio id="income-1" name="income" value="below-2.5" label="Below ₹2,50,000" />
        <Radio id="income-2" name="income" value="2.5-5" label="₹2,50,000 - ₹5,00,000" />
        <Radio id="income-3" name="income" value="5-10" label="₹5,00,000 - ₹10,00,000" />
        <Radio id="income-4" name="income" value="above-10" label="Above ₹10,00,000" />
      </div>
    </div>
  ),
};

export const DocumentType: Story = {
  name: 'Identity Document Type',
  render: () => {
    const [docType, setDocType] = useState('');

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Select Identity Document</h3>
        <p className="text-sm text-gray-600">Choose the document you want to upload for verification</p>

        <div className="space-y-3">
          <Radio
            id="doc-aadhaar"
            name="docType"
            value="aadhaar"
            label="Aadhaar Card"
            checked={docType === 'aadhaar'}
            onChange={(e) => setDocType(e.target.value)}
            required
          />
          <Radio
            id="doc-pan"
            name="docType"
            value="pan"
            label="PAN Card"
            checked={docType === 'pan'}
            onChange={(e) => setDocType(e.target.value)}
            required
          />
          <Radio
            id="doc-voter"
            name="docType"
            value="voter"
            label="Voter ID"
            checked={docType === 'voter'}
            onChange={(e) => setDocType(e.target.value)}
            required
          />
          <Radio
            id="doc-passport"
            name="docType"
            value="passport"
            label="Passport"
            checked={docType === 'passport'}
            onChange={(e) => setDocType(e.target.value)}
            required
          />
          <Radio
            id="doc-license"
            name="docType"
            value="license"
            label="Driving License"
            checked={docType === 'license'}
            onChange={(e) => setDocType(e.target.value)}
            required
          />
        </div>

        {docType && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-900">
              {docType === 'aadhaar' && 'Please ensure your Aadhaar card front and back are clearly visible'}
              {docType === 'pan' && 'PAN card must be valid and clearly legible'}
              {docType === 'voter' && 'Voter ID must show your name and photo clearly'}
              {docType === 'passport' && 'Upload the page with your photo and details'}
              {docType === 'license' && 'Driving license must be valid and not expired'}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const PaymentMethod: Story = {
  name: 'Payment Method',
  render: () => {
    const [method, setMethod] = useState('');

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Select Payment Method</h3>

        <div className="space-y-3">
          <div className="border border-gray-200 rounded p-4">
            <Radio
              id="payment-upi"
              name="payment"
              value="upi"
              label="UPI"
              checked={method === 'upi'}
              onChange={(e) => setMethod(e.target.value)}
            />
            <p className="text-xs text-gray-500 ml-6 mt-1">Google Pay, PhonePe, Paytm, etc.</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio
              id="payment-netbanking"
              name="payment"
              value="netbanking"
              label="Net Banking"
              checked={method === 'netbanking'}
              onChange={(e) => setMethod(e.target.value)}
            />
            <p className="text-xs text-gray-500 ml-6 mt-1">Pay using your bank account</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio
              id="payment-card"
              name="payment"
              value="card"
              label="Credit/Debit Card"
              checked={method === 'card'}
              onChange={(e) => setMethod(e.target.value)}
            />
            <p className="text-xs text-gray-500 ml-6 mt-1">Visa, Mastercard, RuPay</p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <Radio
              id="payment-wallet"
              name="payment"
              value="wallet"
              label="Digital Wallet"
              checked={method === 'wallet'}
              onChange={(e) => setMethod(e.target.value)}
            />
            <p className="text-xs text-gray-500 ml-6 mt-1">Paytm Wallet, Amazon Pay, etc.</p>
          </div>
        </div>
      </div>
    );
  },
};

export const ServiceDeliveryOption: Story = {
  name: 'Service Delivery Option',
  render: () => {
    const [delivery, setDelivery] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
      if (!delivery) {
        setError(true);
      } else {
        setError(false);
        alert(`Selected: ${delivery}`);
      }
    };

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Certificate Delivery Preference</h3>
        <p className="text-sm text-gray-600">How would you like to receive your certificate?</p>

        <div className="space-y-3">
          <Radio
            id="delivery-digital"
            name="delivery"
            value="digital"
            label="Digital Certificate (DigiLocker)"
            checked={delivery === 'digital'}
            onChange={(e) => {
              setDelivery(e.target.value);
              setError(false);
            }}
            error={error}
            required
          />
          <p className="text-xs text-gray-500 ml-6">
            Instant delivery to your DigiLocker account
          </p>

          <Radio
            id="delivery-email"
            name="delivery"
            value="email"
            label="Email PDF"
            checked={delivery === 'email'}
            onChange={(e) => {
              setDelivery(e.target.value);
              setError(false);
            }}
            error={error}
            required
          />
          <p className="text-xs text-gray-500 ml-6">
            PDF sent to your registered email within 24 hours
          </p>

          <Radio
            id="delivery-physical"
            name="delivery"
            value="physical"
            label="Physical Certificate (Speed Post)"
            checked={delivery === 'physical'}
            onChange={(e) => {
              setDelivery(e.target.value);
              setError(false);
            }}
            error={error}
            required
          />
          <p className="text-xs text-gray-500 ml-6">
            Delivered to your registered address in 7-10 business days
          </p>
        </div>

        {error && (
          <p className="text-sm text-destructive">Please select a delivery option</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Continue
        </button>
      </div>
    );
  },
};

export const LanguagePreference: Story = {
  name: 'Language Preference',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Preferred Language / पसंदीदा भाषा</h3>
      <p className="text-sm text-gray-600">
        Select your preferred language for communication
      </p>

      <div className="space-y-3">
        <Radio id="lang-en" name="language" value="english" label="English" />
        <Radio id="lang-hi" name="language" value="hindi" label="हिन्दी (Hindi)" />
        <Radio id="lang-ta" name="language" value="tamil" label="தமிழ் (Tamil)" />
        <Radio id="lang-te" name="language" value="telugu" label="తెలుగు (Telugu)" />
        <Radio id="lang-bn" name="language" value="bengali" label="বাংলা (Bengali)" />
        <Radio id="lang-mr" name="language" value="marathi" label="मराठी (Marathi)" />
      </div>
    </div>
  ),
};

export const ApplicationPriority: Story = {
  name: 'Application Priority (with fees)',
  render: () => {
    const [priority, setPriority] = useState('normal');

    const fees = {
      normal: 100,
      fast: 500,
      express: 1000,
    };

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Application Processing Type</h3>

        <div className="space-y-3">
          <div className="border-2 border-primary rounded p-4">
            <Radio
              id="priority-normal"
              name="priority"
              value="normal"
              label="Normal Processing"
              checked={priority === 'normal'}
              onChange={(e) => setPriority(e.target.value)}
            />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.normal}</p>
              <p className="text-xs text-gray-600">15-20 business days</p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded p-4">
            <Radio
              id="priority-fast"
              name="priority"
              value="fast"
              label="Fast Track Processing"
              checked={priority === 'fast'}
              onChange={(e) => setPriority(e.target.value)}
            />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.fast}</p>
              <p className="text-xs text-gray-600">7-10 business days</p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded p-4">
            <Radio
              id="priority-express"
              name="priority"
              value="express"
              label="Express Processing"
              checked={priority === 'express'}
              onChange={(e) => setPriority(e.target.value)}
            />
            <div className="ml-6 mt-2 space-y-1">
              <p className="text-sm font-medium">₹{fees.express}</p>
              <p className="text-xs text-gray-600">2-3 business days</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded">
          <div className="flex justify-between text-sm">
            <span>Total Fee:</span>
            <span className="font-medium">₹{fees[priority as keyof typeof fees]}</span>
          </div>
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from './Textarea';
import { Field } from '../Field/Field';
import { Label } from '../Label/Label';
import { HintText } from '../HintText/HintText';
import { ErrorText } from '../ErrorText/ErrorText';

/**
 * Textarea component for multi-line text input.
 *
 * ## Accessibility
 * - Uses native HTML textarea element
 * - Supports keyboard navigation
 * - Proper ARIA attributes for screen readers
 * - Visual focus indicators
 * - Associated with label via htmlFor
 */
const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Textarea component for entering multi-line text. Use for longer text inputs like descriptions, comments, or addresses.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
      table: {
        defaultValue: { summary: '4' },
        type: { summary: 'number' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Textarea size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'sm | md | lg' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
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
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width textarea',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    resize: {
      control: 'boolean',
      description: 'Allow resizing',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    placeholder: 'Enter your text here...',
  },
};

export const Small: Story = {
  args: {
    id: 'small',
    size: 'sm',
    placeholder: 'Small textarea',
    rows: 3,
  },
};

export const Medium: Story = {
  args: {
    id: 'medium',
    size: 'md',
    placeholder: 'Medium textarea (default)',
    rows: 4,
  },
};

export const Large: Story = {
  args: {
    id: 'large',
    size: 'lg',
    placeholder: 'Large textarea',
    rows: 6,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    placeholder: 'This textarea is disabled',
    disabled: true,
    defaultValue: 'Some pre-filled text',
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'readonly',
    readOnly: true,
    defaultValue: 'This text is read-only and cannot be edited.',
  },
};

export const WithError: Story = {
  render: () => (
    <Field error>
      <Label htmlFor="error-textarea">Comments</Label>
      <Textarea id="error-textarea" placeholder="Enter your comments" error />
      <ErrorText>Comments are required (minimum 10 characters)</ErrorText>
    </Field>
  ),
};

export const FullWidth: Story = {
  args: {
    id: 'fullwidth',
    fullWidth: true,
    placeholder: 'Full width textarea',
  },
};

export const NoResize: Story = {
  args: {
    id: 'noresize',
    resize: false,
    placeholder: 'This textarea cannot be resized',
    rows: 4,
  },
};

export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;

    return (
      <Field>
        <Label htmlFor="maxlength">Bio</Label>
        <Textarea
          id="maxlength"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tell us about yourself..."
          maxLength={maxLength}
          rows={4}
          fullWidth
        />
        <HintText>
          {value.length} / {maxLength} characters
        </HintText>
      </Field>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-4">
        <Field>
          <Label htmlFor="controlled">Your Message</Label>
          <Textarea
            id="controlled"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type your message..."
            rows={5}
            fullWidth
          />
          <HintText>{value.length} characters</HintText>
        </Field>

        <button
          onClick={() => setValue('')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm"
        >
          Clear
        </button>
      </div>
    );
  },
};

export const AddressInput: Story = {
  name: 'Address Input',
  render: () => (
    <div className="max-w-md">
      <Field required>
        <Label htmlFor="address" required>
          Permanent Address
        </Label>
        <Textarea
          id="address"
          placeholder="Enter your complete address including street, city, state, and PIN code"
          rows={5}
          required
          fullWidth
        />
        <HintText>As per your Aadhaar card</HintText>
      </Field>
    </div>
  ),
};

export const ComplaintDescription: Story = {
  name: 'Complaint Description',
  render: () => {
    const [description, setDescription] = useState('');
    const minLength = 50;
    const maxLength = 500;
    const isValid = description.length >= minLength;

    return (
      <div className="max-w-2xl space-y-4">
        <h3 className="text-lg font-medium">File a Complaint</h3>

        <Field error={!isValid && description.length > 0} required>
          <Label htmlFor="complaint" required>
            Complaint Description
          </Label>
          <Textarea
            id="complaint"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your complaint in detail..."
            rows={8}
            maxLength={maxLength}
            required
            fullWidth
            error={!isValid && description.length > 0}
          />
          {!isValid && description.length > 0 ? (
            <ErrorText>
              Description must be at least {minLength} characters (current: {description.length})
            </ErrorText>
          ) : (
            <HintText>
              {description.length} / {maxLength} characters (minimum {minLength} required)
            </HintText>
          )}
        </Field>

        <button
          disabled={!isValid}
          className="px-6 py-2 bg-primary text-primary-foreground rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Complaint
        </button>
      </div>
    );
  },
};

export const FeedbackForm: Story = {
  name: 'Service Feedback',
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Service Feedback</h3>
      <p className="text-sm text-gray-600">
        Help us improve our services by sharing your experience
      </p>

      <Field>
        <Label htmlFor="positive">What did you like?</Label>
        <Textarea
          id="positive"
          placeholder="Tell us what went well..."
          rows={3}
          fullWidth
        />
      </Field>

      <Field>
        <Label htmlFor="improve">What can we improve?</Label>
        <Textarea
          id="improve"
          placeholder="Suggest improvements..."
          rows={3}
          fullWidth
        />
      </Field>

      <Field>
        <Label htmlFor="additional">Additional Comments</Label>
        <Textarea
          id="additional"
          placeholder="Any other feedback..."
          rows={3}
          fullWidth
        />
        <HintText>Optional</HintText>
      </Field>
    </div>
  ),
};

export const ApplicationReason: Story = {
  name: 'Application Reason',
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Scholarship Application</h3>

      <Field required>
        <Label htmlFor="reason" required>
          Why are you applying for this scholarship?
        </Label>
        <Textarea
          id="reason"
          placeholder="Explain your reasons for applying..."
          rows={6}
          maxLength={1000}
          required
          fullWidth
        />
        <HintText>Maximum 1000 characters. Be specific about your financial need and academic goals.</HintText>
      </Field>

      <Field required>
        <Label htmlFor="goals" required>
          What are your future goals?
        </Label>
        <Textarea
          id="goals"
          placeholder="Describe your career and educational goals..."
          rows={6}
          maxLength={1000}
          required
          fullWidth
        />
        <HintText>Maximum 1000 characters</HintText>
      </Field>
    </div>
  ),
};

export const DeclarationText: Story = {
  name: 'Declaration (Read-Only)',
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Declaration</h3>

      <Field>
        <Label htmlFor="declaration">Please read and accept the following declaration:</Label>
        <Textarea
          id="declaration"
          rows={8}
          readOnly
          fullWidth
          defaultValue={`I hereby declare that:

1. All the information provided by me in this application is true and correct to the best of my knowledge and belief.

2. I understand that if any information is found to be false or incorrect, my application will be rejected and legal action may be taken against me.

3. I authorize the government department to verify the information provided by me through any means deemed necessary.

4. I will abide by all rules and regulations of the scheme.

Date: ${new Date().toLocaleDateString('en-IN')}
Place: _____________`}
        />
      </Field>
    </div>
  ),
};

export const RemarksAndNotes: Story = {
  name: 'Officer Remarks',
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h3 className="text-lg font-medium">Application Review</h3>

      <Field>
        <Label htmlFor="remarks">Officer Remarks</Label>
        <Textarea
          id="remarks"
          placeholder="Enter your observations and recommendations..."
          rows={6}
          fullWidth
        />
        <HintText>Internal notes - not visible to applicant</HintText>
      </Field>

      <Field>
        <Label htmlFor="action">Recommended Action</Label>
        <Textarea
          id="action"
          placeholder="Specify recommended action..."
          rows={4}
          fullWidth
        />
      </Field>
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="space-y-4">
      <Field>
        <Label htmlFor="size-sm">Small</Label>
        <Textarea id="size-sm" size="sm" placeholder="Small textarea" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="size-md">Medium (Default)</Label>
        <Textarea id="size-md" size="md" placeholder="Medium textarea" rows={4} />
      </Field>

      <Field>
        <Label htmlFor="size-lg">Large</Label>
        <Textarea id="size-lg" size="lg" placeholder="Large textarea" rows={5} />
      </Field>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="space-y-4">
      <Field>
        <Label htmlFor="state-normal">Normal</Label>
        <Textarea id="state-normal" placeholder="Normal textarea" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="state-required" required>
          Required
        </Label>
        <Textarea id="state-required" placeholder="Required textarea" rows={3} required />
      </Field>

      <Field error>
        <Label htmlFor="state-error">With Error</Label>
        <Textarea id="state-error" placeholder="Error state" rows={3} error />
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field>
        <Label htmlFor="state-readonly">Read-Only</Label>
        <Textarea
          id="state-readonly"
          rows={3}
          readOnly
          defaultValue="This is read-only text"
        />
      </Field>

      <Field>
        <Label htmlFor="state-disabled" disabled>
          Disabled
        </Label>
        <Textarea
          id="state-disabled"
          placeholder="Disabled textarea"
          rows={3}
          disabled
        />
      </Field>
    </div>
  ),
};

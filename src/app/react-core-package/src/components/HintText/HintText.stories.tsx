import type { Meta, StoryObj } from '@storybook/react';
import { HintText } from './HintText';
import { Field } from '../Field/Field';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';

/**
 * HintText displays helper text below form fields to guide users.
 *
 * ## Usage
 * - Provide examples or format requirements
 * - Clarify what information is needed
 * - Reassure users about privacy or usage
 */
const meta = {
  title: 'Components/HintText',
  component: HintText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Helper text component for displaying hints and guidance below form fields.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Helper text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof HintText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Enter your email address',
  },
};

export const LongHint: Story = {
  args: {
    children:
      'Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character for security',
  },
};

export const ShortHint: Story = {
  args: {
    children: 'Optional',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="max-w-md">
      <Field>
        <Label htmlFor="email-hint">Email Address</Label>
        <Input id="email-hint" type="email" placeholder="you@example.com" />
        <HintText>We'll never share your email with third parties</HintText>
      </Field>
    </div>
  ),
};

export const FormatGuidance: Story = {
  name: 'Format Guidance Examples',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="phone-format">Phone Number</Label>
        <Input id="phone-format" type="tel" placeholder="9876543210" />
        <HintText>10-digit mobile number without spaces or dashes</HintText>
      </Field>

      <Field>
        <Label htmlFor="date-format">Date of Birth</Label>
        <Input id="date-format" type="date" />
        <HintText>Format: DD/MM/YYYY</HintText>
      </Field>

      <Field>
        <Label htmlFor="username-format">Username</Label>
        <Input id="username-format" placeholder="johndoe" />
        <HintText>Only letters, numbers, and underscores. 3-20 characters.</HintText>
      </Field>

      <Field>
        <Label htmlFor="file-format">Upload Document</Label>
        <Input id="file-format" type="file" />
        <HintText>Accepted formats: PDF, JPG, PNG. Max size: 5MB</HintText>
      </Field>
    </div>
  ),
};

export const GovernmentIDHints: Story = {
  name: 'Government ID Hints',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field required>
        <Label htmlFor="aadhaar-hint" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar-hint" placeholder="1234 5678 9012" maxLength={14} />
        <HintText>Enter your 12-digit Aadhaar number. Spaces optional.</HintText>
      </Field>

      <Field required>
        <Label htmlFor="pan-hint" required>
          PAN Card Number
        </Label>
        <Input id="pan-hint" placeholder="ABCDE1234F" maxLength={10} />
        <HintText>Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</HintText>
      </Field>

      <Field>
        <Label htmlFor="voter-hint">Voter ID</Label>
        <Input id="voter-hint" placeholder="ABC1234567" />
        <HintText>3 letters followed by 7 digits</HintText>
      </Field>

      <Field>
        <Label htmlFor="passport-hint">Passport Number</Label>
        <Input id="passport-hint" placeholder="A1234567" />
        <HintText>1 letter followed by 7 digits</HintText>
      </Field>

      <Field>
        <Label htmlFor="license-hint">Driving License</Label>
        <Input id="license-hint" placeholder="DL-1234567890123" />
        <HintText>State code followed by license number</HintText>
      </Field>
    </div>
  ),
};

export const PrivacyReassurance: Story = {
  name: 'Privacy & Security Hints',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="email-privacy">Email Address</Label>
        <Input id="email-privacy" type="email" placeholder="you@example.com" />
        <HintText>We'll never share your email with anyone else</HintText>
      </Field>

      <Field>
        <Label htmlFor="phone-privacy">Mobile Number</Label>
        <Input id="phone-privacy" type="tel" placeholder="9876543210" />
        <HintText>Used only for OTP verification and important updates</HintText>
      </Field>

      <Field>
        <Label htmlFor="password-privacy">Password</Label>
        <Input id="password-privacy" type="password" />
        <HintText>Your password is encrypted and cannot be seen by anyone</HintText>
      </Field>

      <Field>
        <Label htmlFor="aadhaar-privacy">Aadhaar Number</Label>
        <Input id="aadhaar-privacy" placeholder="1234 5678 9012" />
        <HintText>Stored securely in compliance with UIDAI regulations</HintText>
      </Field>
    </div>
  ),
};

export const ExamplesAndContext: Story = {
  name: 'Examples & Context',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="name-example">Full Name</Label>
        <Input id="name-example" placeholder="Enter your name" />
        <HintText>As it appears on your Aadhaar card</HintText>
      </Field>

      <Field>
        <Label htmlFor="address-example">Permanent Address</Label>
        <Input id="address-example" />
        <HintText>Example: 123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001</HintText>
      </Field>

      <Field>
        <Label htmlFor="income-example">Annual Income</Label>
        <Input id="income-example" type="number" placeholder="500000" />
        <HintText>Enter your total annual income in rupees (₹)</HintText>
      </Field>

      <Field>
        <Label htmlFor="occupation-example">Occupation</Label>
        <Input id="occupation-example" placeholder="Software Engineer" />
        <HintText>Your current job title or profession</HintText>
      </Field>
    </div>
  ),
};

export const OptionalFields: Story = {
  name: 'Optional Field Hints',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="middle-name">Middle Name</Label>
        <Input id="middle-name" />
        <HintText>Optional - leave blank if you don't have one</HintText>
      </Field>

      <Field>
        <Label htmlFor="alternate-phone">Alternate Phone</Label>
        <Input id="alternate-phone" type="tel" />
        <HintText>Optional - for backup contact purposes</HintText>
      </Field>

      <Field>
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="https://example.com" />
        <HintText>Optional</HintText>
      </Field>
    </div>
  ),
};

export const MultilingualHints: Story = {
  name: 'Multilingual Hints (Hindi)',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="name-hi">पूरा नाम (Full Name)</Label>
        <Input id="name-hi" placeholder="अपना पूरा नाम दर्ज करें" />
        <HintText>जैसा कि आपके आधार कार्ड पर दिखाई देता है (As it appears on your Aadhaar card)</HintText>
      </Field>

      <Field>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" type="tel" placeholder="9876543210" />
        <HintText>बिना स्थान या डैश के 10 अंक (10 digits without spaces or dashes)</HintText>
      </Field>

      <Field>
        <Label htmlFor="email-hi">ईमेल पता (Email Address)</Label>
        <Input id="email-hi" type="email" placeholder="you@example.com" />
        <HintText>हम आपकी ईमेल किसी के साथ साझा नहीं करेंगे (We'll never share your email)</HintText>
      </Field>
    </div>
  ),
};

export const CharacterCounts: Story = {
  name: 'Character Count Hints',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field>
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Tell us about yourself" />
        <HintText>Maximum 160 characters</HintText>
      </Field>

      <Field>
        <Label htmlFor="description">Description</Label>
        <Input id="description" />
        <HintText>0 / 500 characters</HintText>
      </Field>

      <Field>
        <Label htmlFor="comment">Comment</Label>
        <Input id="comment" />
        <HintText>Minimum 10 characters required</HintText>
      </Field>
    </div>
  ),
};

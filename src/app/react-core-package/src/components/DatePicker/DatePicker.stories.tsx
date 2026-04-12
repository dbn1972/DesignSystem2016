import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: '2024-03-15',
  },
};

export const DateOfBirth: Story = {
  args: {
    placeholder: 'Select date of birth',
    max: new Date().toISOString().split('T')[0],
  },
};

export const AadhaarDOB: Story = {
  render: () => {
    const [dob, setDob] = useState('');
    const maxDate = new Date().toISOString().split('T')[0];
    return (
      <div>
        <label className="ux4g-label">Date of Birth (as per Aadhaar)</label>
        <DatePicker
          value={dob}
          onChange={setDob}
          max={maxDate}
          required
        />
        <p className="ux4g-hint-text">Enter your date of birth as shown on Aadhaar card</p>
      </div>
    );
  },
};

export const PassportApplicationDate: Story = {
  render: () => {
    const [date, setDate] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const max = maxDate.toISOString().split('T')[0];

    return (
      <div>
        <label className="ux4g-label">Preferred Appointment Date</label>
        <DatePicker
          value={date}
          onChange={setDate}
          min={today}
          max={max}
        />
        <p className="ux4g-hint-text">Select a date within next 3 months</p>
      </div>
    );
  },
};

export const PANApplicationDate: Story = {
  args: {
    placeholder: 'Application date',
    value: new Date().toISOString().split('T')[0],
    readOnly: true,
  },
};

export const LicenseExpiryDate: Story = {
  render: () => {
    const [expiry, setExpiry] = useState('');
    return (
      <div>
        <label className="ux4g-label">Current License Expiry Date</label>
        <DatePicker
          value={expiry}
          onChange={setExpiry}
        />
        <p className="ux4g-hint-text">Enter expiry date from your current driving license</p>
      </div>
    );
  },
};

export const WithMinMax: Story = {
  args: {
    min: '2024-01-01',
    max: '2024-12-31',
  },
};

export const Disabled: Story = {
  args: {
    value: '2024-03-15',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const VoterRegistrationDOB: Story = {
  render: () => {
    const [dob, setDob] = useState('');
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    const max = maxDate.toISOString().split('T')[0];

    return (
      <div>
        <label className="ux4g-label">Date of Birth</label>
        <DatePicker
          value={dob}
          onChange={setDob}
          max={max}
          required
        />
        <p className="ux4g-hint-text">You must be at least 18 years old to register as a voter</p>
      </div>
    );
  },
};

export const EventRegistration: Story = {
  render: () => {
    const [date, setDate] = useState('');
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const min = minDate.toISOString().split('T')[0];

    return (
      <div>
        <label className="ux4g-label">Event Date</label>
        <DatePicker
          value={date}
          onChange={setDate}
          min={min}
        />
        <p className="ux4g-hint-text">Select a future date for the event</p>
      </div>
    );
  },
};

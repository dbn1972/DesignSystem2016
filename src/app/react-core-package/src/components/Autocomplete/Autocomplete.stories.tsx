import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const indianStates = [
  { value: 'AN', label: 'Andaman and Nicobar Islands' },
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CH', label: 'Chandigarh' },
  { value: 'CT', label: 'Chhattisgarh' },
  { value: 'DN', label: 'Dadra and Nagar Haveli' },
  { value: 'DD', label: 'Daman and Diu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JK', label: 'Jammu and Kashmir' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'LA', label: 'Ladakh' },
  { value: 'LD', label: 'Lakshadweep' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OR', label: 'Odisha' },
  { value: 'PY', label: 'Puducherry' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TG', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UT', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
];

export const Basic: Story = {
  args: {
    options: indianStates,
    placeholder: 'Select state',
  },
};

export const StateSelection: Story = {
  render: () => {
    const [state, setState] = useState('');
    return (
      <div>
        <label className="ux4g-label">State</label>
        <Autocomplete
          options={indianStates}
          value={state}
          onChange={setState}
          placeholder="Start typing to search..."
        />
        {state && (
          <p className="ux4g-hint-text">Selected: {state}</p>
        )}
      </div>
    );
  },
};

export const CitySelection: Story = {
  render: () => {
    const [city, setCity] = useState('');
    const cities = [
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'delhi', label: 'Delhi' },
      { value: 'bengaluru', label: 'Bengaluru' },
      { value: 'hyderabad', label: 'Hyderabad' },
      { value: 'ahmedabad', label: 'Ahmedabad' },
      { value: 'chennai', label: 'Chennai' },
      { value: 'kolkata', label: 'Kolkata' },
      { value: 'pune', label: 'Pune' },
      { value: 'jaipur', label: 'Jaipur' },
      { value: 'lucknow', label: 'Lucknow' },
    ];

    return (
      <div>
        <label className="ux4g-label">City</label>
        <Autocomplete
          options={cities}
          value={city}
          onChange={setCity}
          placeholder="Search city..."
        />
      </div>
    );
  },
};

export const DistrictSelection: Story = {
  render: () => {
    const [district, setDistrict] = useState('');
    const districts = [
      { value: 'mumbai-city', label: 'Mumbai City' },
      { value: 'mumbai-suburban', label: 'Mumbai Suburban' },
      { value: 'thane', label: 'Thane' },
      { value: 'pune', label: 'Pune' },
      { value: 'nashik', label: 'Nashik' },
      { value: 'nagpur', label: 'Nagpur' },
      { value: 'ahmednagar', label: 'Ahmednagar' },
      { value: 'solapur', label: 'Solapur' },
    ];

    return (
      <div>
        <label className="ux4g-label">District (Maharashtra)</label>
        <Autocomplete
          options={districts}
          value={district}
          onChange={setDistrict}
          placeholder="Select district..."
        />
      </div>
    );
  },
};

export const BankSearch: Story = {
  render: () => {
    const [bank, setBank] = useState('');
    const banks = [
      { value: 'sbi', label: 'State Bank of India' },
      { value: 'hdfc', label: 'HDFC Bank' },
      { value: 'icici', label: 'ICICI Bank' },
      { value: 'axis', label: 'Axis Bank' },
      { value: 'pnb', label: 'Punjab National Bank' },
      { value: 'bob', label: 'Bank of Baroda' },
      { value: 'canara', label: 'Canara Bank' },
      { value: 'union', label: 'Union Bank of India' },
    ];

    return (
      <div>
        <label className="ux4g-label">Bank Name</label>
        <Autocomplete
          options={banks}
          value={bank}
          onChange={setBank}
          placeholder="Search bank..."
        />
      </div>
    );
  },
};

export const DepartmentSearch: Story = {
  render: () => {
    const [dept, setDept] = useState('');
    const departments = [
      { value: 'income-tax', label: 'Income Tax Department' },
      { value: 'passport', label: 'Passport Seva' },
      { value: 'uidai', label: 'UIDAI (Aadhaar)' },
      { value: 'rto', label: 'Regional Transport Office' },
      { value: 'election', label: 'Election Commission' },
      { value: 'railways', label: 'Indian Railways' },
      { value: 'epfo', label: 'EPFO' },
      { value: 'esic', label: 'ESIC' },
    ];

    return (
      <div>
        <label className="ux4g-label">Government Department</label>
        <Autocomplete
          options={departments}
          value={dept}
          onChange={setDept}
          placeholder="Search department..."
        />
      </div>
    );
  },
};

export const OccupationSearch: Story = {
  render: () => {
    const [occupation, setOccupation] = useState('');
    const occupations = [
      { value: 'salaried', label: 'Salaried Employee' },
      { value: 'self-employed', label: 'Self Employed' },
      { value: 'business', label: 'Business Owner' },
      { value: 'professional', label: 'Professional' },
      { value: 'farmer', label: 'Farmer' },
      { value: 'student', label: 'Student' },
      { value: 'retired', label: 'Retired' },
      { value: 'homemaker', label: 'Homemaker' },
    ];

    return (
      <div>
        <label className="ux4g-label">Occupation</label>
        <Autocomplete
          options={occupations}
          value={occupation}
          onChange={setOccupation}
          placeholder="Select occupation..."
        />
      </div>
    );
  },
};

export const SchemeSearch: Story = {
  render: () => {
    const [scheme, setScheme] = useState('');
    const schemes = [
      { value: 'pmjdy', label: 'Pradhan Mantri Jan Dhan Yojana' },
      { value: 'pmay', label: 'Pradhan Mantri Awas Yojana' },
      { value: 'ayushman', label: 'Ayushman Bharat' },
      { value: 'ujjwala', label: 'Pradhan Mantri Ujjwala Yojana' },
      { value: 'mudra', label: 'Pradhan Mantri Mudra Yojana' },
      { value: 'sukanya', label: 'Sukanya Samriddhi Yojana' },
    ];

    return (
      <div>
        <label className="ux4g-label">Government Scheme</label>
        <Autocomplete
          options={schemes}
          value={scheme}
          onChange={setScheme}
          placeholder="Search scheme..."
        />
      </div>
    );
  },
};

export const Loading: Story = {
  args: {
    options: indianStates,
    loading: true,
    placeholder: 'Loading...',
  },
};

export const WithError: Story = {
  args: {
    options: indianStates,
    error: true,
    placeholder: 'Select state',
  },
};

export const Disabled: Story = {
  args: {
    options: indianStates,
    disabled: true,
    value: 'Maharashtra',
  },
};

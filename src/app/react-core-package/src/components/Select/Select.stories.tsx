import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';
import { Field } from '../Field/Field';
import { Label } from '../Label/Label';
import { HintText } from '../HintText/HintText';
import { ErrorText } from '../ErrorText/ErrorText';

/**
 * Select component for choosing from a list of options.
 *
 * ## Accessibility
 * - Uses native HTML select element
 * - Supports keyboard navigation (Arrow keys, Enter)
 * - Proper ARIA attributes for screen readers
 * - Visual focus indicators
 * - Associated with label via htmlFor
 */
const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Select component for choosing a single option from a dropdown list. Use for medium to large lists of options (5+ items).',
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'sm | md | lg' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
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
    fullWidth: {
      control: 'boolean',
      description: 'Full width select',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    placeholder: 'Select an option',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    id: 'small',
    size: 'sm',
    placeholder: 'Small select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    id: 'medium',
    size: 'md',
    placeholder: 'Medium select (default)',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    id: 'large',
    size: 'lg',
    placeholder: 'Large select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    disabled: true,
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const WithError: Story = {
  render: () => (
    <Field error>
      <Label htmlFor="error-select">Country</Label>
      <Select id="error-select" placeholder="Select a country" error>
        <option value="india">India</option>
        <option value="usa">United States</option>
      </Select>
      <ErrorText>Please select a country</ErrorText>
    </Field>
  ),
};

export const FullWidth: Story = {
  args: {
    id: 'fullwidth',
    fullWidth: true,
    placeholder: 'Full width select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-4">
        <Field>
          <Label htmlFor="controlled-select">Select a fruit</Label>
          <Select
            id="controlled-select"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Choose a fruit"
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="mango">Mango</option>
          </Select>
          <HintText>Your favorite fruit</HintText>
        </Field>

        <p className="text-sm text-gray-600">Selected: {value || 'None'}</p>

        <button
          onClick={() => setValue('mango')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm"
        >
          Select Mango
        </button>
      </div>
    );
  },
};

export const StateSelection: Story = {
  name: 'Indian State Selection',
  render: () => (
    <div className="max-w-md">
      <Field required>
        <Label htmlFor="state" required>
          State / राज्य
        </Label>
        <Select id="state" placeholder="Select your state" required fullWidth>
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chandigarh</option>
          <option value="CT">Chhattisgarh</option>
          <option value="DN">Dadra and Nagar Haveli</option>
          <option value="DD">Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="GA">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="LA">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PY">Puducherry</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UT">Uttarakhand</option>
          <option value="WB">West Bengal</option>
        </Select>
        <HintText>Select your current state of residence</HintText>
      </Field>
    </div>
  ),
};

export const CategorySelection: Story = {
  name: 'Caste Category',
  render: () => (
    <div className="max-w-md">
      <Field required>
        <Label htmlFor="category" required>
          Caste Category
        </Label>
        <Select id="category" placeholder="Select category" required fullWidth>
          <option value="general">General</option>
          <option value="obc">OBC (Other Backward Classes)</option>
          <option value="sc">SC (Scheduled Caste)</option>
          <option value="st">ST (Scheduled Tribe)</option>
          <option value="ews">EWS (Economically Weaker Section)</option>
        </Select>
        <HintText>As per your caste certificate</HintText>
      </Field>
    </div>
  ),
};

export const EducationQualification: Story = {
  name: 'Educational Qualification',
  render: () => (
    <div className="max-w-md">
      <Field required>
        <Label htmlFor="education" required>
          Highest Educational Qualification
        </Label>
        <Select id="education" placeholder="Select qualification" required fullWidth>
          <optgroup label="Below 10th">
            <option value="below-10">Below 10th Standard</option>
            <option value="10th">10th Standard</option>
          </optgroup>
          <optgroup label="Higher Secondary">
            <option value="12th">12th Standard / Intermediate</option>
            <option value="diploma">Diploma</option>
          </optgroup>
          <optgroup label="Graduate">
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
          </optgroup>
          <optgroup label="Doctorate">
            <option value="phd">PhD / Doctorate</option>
          </optgroup>
          <optgroup label="Professional">
            <option value="professional">Professional Degree (CA, CS, etc.)</option>
          </optgroup>
        </Select>
        <HintText>Select your highest completed qualification</HintText>
      </Field>
    </div>
  ),
};

export const BankSelection: Story = {
  name: 'Bank Selection',
  render: () => (
    <div className="max-w-md space-y-4">
      <Field required>
        <Label htmlFor="bank" required>
          Bank Name
        </Label>
        <Select id="bank" placeholder="Select your bank" required fullWidth>
          <option value="sbi">State Bank of India</option>
          <option value="pnb">Punjab National Bank</option>
          <option value="bob">Bank of Baroda</option>
          <option value="canara">Canara Bank</option>
          <option value="union">Union Bank of India</option>
          <option value="boi">Bank of India</option>
          <option value="indian">Indian Bank</option>
          <option value="central">Central Bank of India</option>
          <option value="iob">Indian Overseas Bank</option>
          <option value="uco">UCO Bank</option>
          <option value="bom">Bank of Maharashtra</option>
          <option value="punjabsind">Punjab & Sind Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="axis">Axis Bank</option>
          <option value="kotak">Kotak Mahindra Bank</option>
          <option value="indusind">IndusInd Bank</option>
          <option value="yes">Yes Bank</option>
        </Select>
        <HintText>Select the bank where you have an account</HintText>
      </Field>
    </div>
  ),
};

export const MonthYearSelection: Story = {
  name: 'Month and Year Selection',
  render: () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium">Date of Birth</h3>

        <div className="grid grid-cols-2 gap-4">
          <Field required>
            <Label htmlFor="birth-month" required>
              Month
            </Label>
            <Select id="birth-month" placeholder="Month" required fullWidth>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
          </Field>

          <Field required>
            <Label htmlFor="birth-year" required>
              Year
            </Label>
            <Select id="birth-year" placeholder="Year" required fullWidth>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </div>
    );
  },
};

export const DependentSelects: Story = {
  name: 'Dependent Dropdowns (State → District)',
  render: () => {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');

    const districts: Record<string, string[]> = {
      maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
      karnataka: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi'],
      'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
      kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
    };

    return (
      <div className="max-w-md space-y-4">
        <Field required>
          <Label htmlFor="dep-state" required>
            State
          </Label>
          <Select
            id="dep-state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict(''); // Reset district when state changes
            }}
            placeholder="Select state"
            required
            fullWidth
          >
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
          </Select>
        </Field>

        <Field required>
          <Label htmlFor="dep-district" required>
            District
          </Label>
          <Select
            id="dep-district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder={state ? 'Select district' : 'Select state first'}
            disabled={!state}
            required
            fullWidth
          >
            {state &&
              districts[state]?.map((dist) => (
                <option key={dist} value={dist.toLowerCase()}>
                  {dist}
                </option>
              ))}
          </Select>
          <HintText>
            {!state && 'Please select a state first'}
            {state && 'Select your district'}
          </HintText>
        </Field>

        {state && district && (
          <p className="text-sm text-gray-600">
            Selected: {state} → {district}
          </p>
        )}
      </div>
    );
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="space-y-4">
      <Field>
        <Label htmlFor="size-sm">Small</Label>
        <Select id="size-sm" size="sm" placeholder="Small select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="size-md">Medium (Default)</Label>
        <Select id="size-md" size="md" placeholder="Medium select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="size-lg">Large</Label>
        <Select id="size-lg" size="lg" placeholder="Large select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
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
        <Select id="state-normal" placeholder="Select an option">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="state-required" required>
          Required
        </Label>
        <Select id="state-required" placeholder="Select an option" required>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field error>
        <Label htmlFor="state-error">With Error</Label>
        <Select id="state-error" placeholder="Select an option" error>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field>
        <Label htmlFor="state-disabled" disabled>
          Disabled
        </Label>
        <Select id="state-disabled" placeholder="Select an option" disabled>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>
    </div>
  ),
};

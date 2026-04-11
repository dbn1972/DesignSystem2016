---
sidebar_position: 3
---

# Quick Start

Build your first government form with UX4G in 5 minutes.

## Create Your First Form

Let's build an Aadhaar verification form - a common requirement in Indian government applications.

### Step 1: Setup

Make sure you've [installed UX4G](/getting-started/installation) and imported the styles.

### Step 2: Import Components

```tsx
import {
  Button,
  Input,
  Field,
  Label,
  HintText,
  ErrorText,
  Alert,
} from '@ux4g/react-core';
```

### Step 3: Build the Form

```tsx title="src/components/AadhaarForm.tsx"
import { useState } from 'react';
import {
  Button,
  Input,
  Field,
  Label,
  HintText,
  ErrorText,
  Alert,
} from '@ux4g/react-core';

function AadhaarForm() {
  const [aadhaar, setAadhaar] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateAadhaar = (value: string) => {
    // Remove spaces
    const cleaned = value.replace(/\s/g, '');

    // Check if 12 digits
    if (cleaned.length !== 12) {
      return 'Aadhaar number must be exactly 12 digits';
    }

    // Check if only numbers
    if (!/^\d+$/.test(cleaned)) {
      return 'Aadhaar number must contain only digits';
    }

    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateAadhaar(aadhaar);
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }

    // Simulate API call
    setError('');
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Auto-format with spaces (1234 5678 9012)
    value = value.replace(/\s/g, '');
    if (value.length > 4) {
      value = value.slice(0, 4) + ' ' + value.slice(4);
    }
    if (value.length > 9) {
      value = value.slice(0, 9) + ' ' + value.slice(9);
    }

    setAadhaar(value);
    setError('');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-medium mb-6">Aadhaar Verification</h1>

      {success && (
        <Alert variant="success" className="mb-6">
          Aadhaar number verified successfully!
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Field error={!!error} required>
          <Label htmlFor="aadhaar" required>
            Aadhaar Number
          </Label>
          <Input
            id="aadhaar"
            value={aadhaar}
            onChange={handleChange}
            placeholder="1234 5678 9012"
            maxLength={14}
            error={!!error}
            required
          />
          {error ? (
            <ErrorText>{error}</ErrorText>
          ) : (
            <HintText>Enter your 12-digit Aadhaar number</HintText>
          )}
        </Field>

        <Button
          type="submit"
          variant="primary"
          fullWidth
        >
          Verify Aadhaar
        </Button>
      </form>
    </div>
  );
}

export default AadhaarForm;
```

### Step 4: Run Your App

```bash
npm run dev
```

Your form is now ready with:

- ✅ Validation
- ✅ Error handling
- ✅ Auto-formatting
- ✅ Accessibility
- ✅ Government-compliant styling

## Complete Application Example

Let's build a full citizen registration form:

```tsx title="src/components/RegistrationForm.tsx"
import { useState } from 'react';
import {
  Button,
  Input,
  Field,
  Label,
  HintText,
  ErrorText,
  Alert,
} from '@ux4g/react-core';

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  aadhaar: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  aadhaar?: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: '',
    aadhaar: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
    }

    if (!formData.aadhaar.replace(/\s/g, '')) {
      newErrors.aadhaar = 'Aadhaar number is required';
    } else if (formData.aadhaar.replace(/\s/g, '').length !== 12) {
      newErrors.aadhaar = 'Aadhaar number must be exactly 12 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted:', formData);
      setSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({ fullName: '', email: '', mobile: '', aadhaar: '' });
        setSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-medium mb-2">Citizen Registration</h1>
      <p className="text-gray-600 mb-8">
        Please fill in your details to register for government services
      </p>

      {success && (
        <Alert variant="success" className="mb-6">
          Registration successful! Your application is being processed.
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Field error={!!errors.fullName} required>
          <Label htmlFor="fullName" required>
            Full Name
          </Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={handleChange('fullName')}
            placeholder="Enter your full name"
            error={!!errors.fullName}
            required
          />
          {errors.fullName ? (
            <ErrorText>{errors.fullName}</ErrorText>
          ) : (
            <HintText>As per your Aadhaar card</HintText>
          )}
        </Field>

        <Field error={!!errors.email} required>
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            error={!!errors.email}
            required
          />
          {errors.email ? (
            <ErrorText>{errors.email}</ErrorText>
          ) : (
            <HintText>For official communications</HintText>
          )}
        </Field>

        <Field error={!!errors.mobile} required>
          <Label htmlFor="mobile" required>
            Mobile Number
          </Label>
          <Input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange('mobile')}
            placeholder="9876543210"
            maxLength={10}
            error={!!errors.mobile}
            required
          />
          {errors.mobile ? (
            <ErrorText>{errors.mobile}</ErrorText>
          ) : (
            <HintText>10-digit mobile number</HintText>
          )}
        </Field>

        <Field error={!!errors.aadhaar} required>
          <Label htmlFor="aadhaar" required>
            Aadhaar Number
          </Label>
          <Input
            id="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange('aadhaar')}
            placeholder="1234 5678 9012"
            maxLength={14}
            error={!!errors.aadhaar}
            required
          />
          {errors.aadhaar ? (
            <ErrorText>{errors.aadhaar}</ErrorText>
          ) : (
            <HintText>12-digit Aadhaar number</HintText>
          )}
        </Field>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({ fullName: '', email: '', mobile: '', aadhaar: '' });
              setErrors({});
            }}
          >
            Reset
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Submit Registration
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
```

## Best Practices

### 1. Always Use Field Component

Wrap your inputs with the `Field` component for consistent spacing:

```tsx
<Field error={hasError}>
  <Label htmlFor="input-id">Label</Label>
  <Input id="input-id" />
  {hasError ? <ErrorText>Error</ErrorText> : <HintText>Hint</HintText>}
</Field>
```

### 2. Provide Clear Error Messages

Error messages should be specific and actionable:

```tsx
// ❌ Bad
<ErrorText>Invalid input</ErrorText>

// ✅ Good
<ErrorText>Mobile number must be exactly 10 digits</ErrorText>
```

### 3. Use Hint Text for Guidance

Help users understand what input is expected:

```tsx
<HintText>Format: ABCDE1234F (5 letters, 4 digits, 1 letter)</HintText>
```

### 4. Mark Required Fields

Always indicate required fields visually and programmatically:

```tsx
<Label htmlFor="field" required>
  Full Name
</Label>
<Input id="field" required />
```

### 5. Validate Early

Clear errors as users type to provide immediate feedback:

```tsx
const handleChange = (e) => {
  setValue(e.target.value);
  if (error) {
    setError(''); // Clear error on change
  }
};
```

## Next Steps

Now that you've built your first form:

1. Explore [all components](/components) available in UX4G
2. Learn about [form validation patterns](/patterns/form-validation)
3. Check out [government ID patterns](/patterns/government-ids)
4. See [live examples in Storybook](/storybook)

---

**Questions?** Check our [FAQs](/resources/faqs) or [join the community](https://github.com/ux4g/ux4g/discussions).

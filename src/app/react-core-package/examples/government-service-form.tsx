/**
 * Government Service Application Form
 * Complete example using UX4G React components
 */

import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Field,
  Label,
  HintText,
  ErrorText,
  Alert,
  Card,
  Stepper,
  FileUpload
} from '@ux4g/react-core';
import '@ux4g/styles';

interface FormData {
  // Personal Details
  fullName: string;
  email: string;
  phone: string;
  address: string;

  // Document Details
  documentType: string;
  documentNumber: string;

  // Additional Info
  purpose: string;
  termsAccepted: boolean;

  // Files
  supportingDocuments: FileList | null;
}

interface FormErrors {
  [key: string]: string;
}

export function GovernmentServiceForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    documentType: '',
    documentNumber: '',
    purpose: '',
    termsAccepted: false,
    supportingDocuments: null
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    { label: 'Personal Details', description: 'Enter your personal information' },
    { label: 'Document Details', description: 'Provide document information' },
    { label: 'Supporting Documents', description: 'Upload required documents' },
    { label: 'Review & Submit', description: 'Review your application' }
  ];

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 0) {
      // Validate Personal Details
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
      if (!formData.address.trim()) {
        newErrors.address = 'Address is required';
      }
    } else if (step === 1) {
      // Validate Document Details
      if (!formData.documentType) {
        newErrors.documentType = 'Please select a document type';
      }
      if (!formData.documentNumber.trim()) {
        newErrors.documentNumber = 'Document number is required';
      }
    } else if (step === 2) {
      // Validate Supporting Documents
      if (!formData.supportingDocuments || formData.supportingDocuments.length === 0) {
        newErrors.supportingDocuments = 'Please upload at least one supporting document';
      }
    } else if (step === 3) {
      // Validate Review & Submit
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'You must accept the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitSuccess) {
    return (
      <Card className="ux4g-max-w-2xl ux4g-mx-auto ux4g-mt-12">
        <Alert
          variant="success"
          title="Application Submitted Successfully"
          description="Your application has been received. You will receive a confirmation email shortly."
        />

        <div className="ux4g-mt-6">
          <h3 className="ux4g-mb-2">Application Reference Number</h3>
          <p className="ux4g-font-mono ux4g-text-2xl">APP-2026-{Math.floor(Math.random() * 10000)}</p>
        </div>

        <div className="ux4g-mt-6">
          <Button variant="primary" onClick={() => window.location.reload()}>
            Submit Another Application
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="ux4g-container ux4g-py-12">
      <Card className="ux4g-max-w-4xl ux4g-mx-auto">
        <h1 className="ux4g-mb-6">Government Service Application</h1>

        <Alert
          variant="info"
          title="Application Instructions"
          description="Please fill out all required fields. You can save your progress and return later."
          className="ux4g-mb-8"
        />

        {/* Stepper */}
        <div className="ux4g-mb-8">
          <Stepper
            steps={steps}
            activeStep={currentStep}
            completedSteps={Array.from({ length: currentStep }, (_, i) => i)}
          />
        </div>

        {/* Step Content */}
        <div className="ux4g-mb-8">
          {/* Step 1: Personal Details */}
          {currentStep === 0 && (
            <div className="ux4g-stack-6">
              <h2>Personal Details</h2>

              <Field error={!!errors.fullName}>
                <Label htmlFor="fullName" required>Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(value) => updateField('fullName', value)}
                  error={!!errors.fullName}
                  placeholder="Enter your full name as per government ID"
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <ErrorText id="fullName-error">{errors.fullName}</ErrorText>
                )}
              </Field>

              <Field error={!!errors.email}>
                <Label htmlFor="email" required>Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => updateField('email', value)}
                  error={!!errors.email}
                  placeholder="your.email@example.gov.in"
                  aria-describedby={errors.email ? 'email-error' : 'email-hint'}
                />
                {errors.email ? (
                  <ErrorText id="email-error">{errors.email}</ErrorText>
                ) : (
                  <HintText id="email-hint">
                    We'll send confirmation to this email address
                  </HintText>
                )}
              </Field>

              <Field error={!!errors.phone}>
                <Label htmlFor="phone" required>Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => updateField('phone', value)}
                  error={!!errors.phone}
                  placeholder="+91 XXXXX XXXXX"
                  aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
                />
                {errors.phone ? (
                  <ErrorText id="phone-error">{errors.phone}</ErrorText>
                ) : (
                  <HintText id="phone-hint">
                    10-digit mobile number for SMS notifications
                  </HintText>
                )}
              </Field>

              <Field error={!!errors.address}>
                <Label htmlFor="address" required>Residential Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(value) => updateField('address', value)}
                  error={!!errors.address}
                  rows={4}
                  placeholder="Enter your complete residential address"
                  aria-describedby={errors.address ? 'address-error' : undefined}
                />
                {errors.address && (
                  <ErrorText id="address-error">{errors.address}</ErrorText>
                )}
              </Field>
            </div>
          )}

          {/* Step 2: Document Details */}
          {currentStep === 1 && (
            <div className="ux4g-stack-6">
              <h2>Document Details</h2>

              <Field error={!!errors.documentType}>
                <Label htmlFor="documentType" required>Document Type</Label>
                <Select
                  id="documentType"
                  value={formData.documentType}
                  onChange={(value) => updateField('documentType', value)}
                  error={!!errors.documentType}
                  placeholder="Select document type"
                  options={[
                    { label: 'Aadhaar Card', value: 'aadhaar' },
                    { label: 'PAN Card', value: 'pan' },
                    { label: 'Voter ID', value: 'voter' },
                    { label: 'Passport', value: 'passport' },
                    { label: 'Driving License', value: 'license' }
                  ]}
                  aria-describedby={errors.documentType ? 'documentType-error' : undefined}
                />
                {errors.documentType && (
                  <ErrorText id="documentType-error">{errors.documentType}</ErrorText>
                )}
              </Field>

              <Field error={!!errors.documentNumber}>
                <Label htmlFor="documentNumber" required>Document Number</Label>
                <Input
                  id="documentNumber"
                  value={formData.documentNumber}
                  onChange={(value) => updateField('documentNumber', value)}
                  error={!!errors.documentNumber}
                  placeholder="Enter document number"
                  aria-describedby={errors.documentNumber ? 'documentNumber-error' : 'documentNumber-hint'}
                />
                {errors.documentNumber ? (
                  <ErrorText id="documentNumber-error">{errors.documentNumber}</ErrorText>
                ) : (
                  <HintText id="documentNumber-hint">
                    Enter the unique number on your document
                  </HintText>
                )}
              </Field>

              <Field>
                <Label htmlFor="purpose">Purpose of Application</Label>
                <Textarea
                  id="purpose"
                  value={formData.purpose}
                  onChange={(value) => updateField('purpose', value)}
                  rows={4}
                  placeholder="Briefly describe the purpose of this application"
                />
                <HintText>Optional - helps us process your application faster</HintText>
              </Field>
            </div>
          )}

          {/* Step 3: Supporting Documents */}
          {currentStep === 2 && (
            <div className="ux4g-stack-6">
              <h2>Supporting Documents</h2>

              <Field error={!!errors.supportingDocuments}>
                <Label htmlFor="documents" required>Upload Documents</Label>
                <FileUpload
                  id="documents"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  maxSize={5 * 1024 * 1024} // 5MB
                  onChange={(files) => updateField('supportingDocuments', files)}
                  error={!!errors.supportingDocuments}
                  aria-describedby={errors.supportingDocuments ? 'documents-error' : 'documents-hint'}
                />
                {errors.supportingDocuments ? (
                  <ErrorText id="documents-error">{errors.supportingDocuments}</ErrorText>
                ) : (
                  <HintText id="documents-hint">
                    Upload PDF, JPG, or PNG files (max 5MB each)
                  </HintText>
                )}
              </Field>

              <Alert
                variant="info"
                description="Ensure all documents are clear and legible. Accepted formats: PDF, JPG, PNG"
              />
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 3 && (
            <div className="ux4g-stack-6">
              <h2>Review & Submit</h2>

              <Card variant="flat" padding="md">
                <h3 className="ux4g-mb-4">Personal Details</h3>
                <dl className="ux4g-stack-2">
                  <div>
                    <dt className="ux4g-font-weight-semibold">Full Name</dt>
                    <dd>{formData.fullName}</dd>
                  </div>
                  <div>
                    <dt className="ux4g-font-weight-semibold">Email</dt>
                    <dd>{formData.email}</dd>
                  </div>
                  <div>
                    <dt className="ux4g-font-weight-semibold">Phone</dt>
                    <dd>{formData.phone}</dd>
                  </div>
                  <div>
                    <dt className="ux4g-font-weight-semibold">Address</dt>
                    <dd>{formData.address}</dd>
                  </div>
                </dl>
              </Card>

              <Card variant="flat" padding="md">
                <h3 className="ux4g-mb-4">Document Details</h3>
                <dl className="ux4g-stack-2">
                  <div>
                    <dt className="ux4g-font-weight-semibold">Document Type</dt>
                    <dd>{formData.documentType || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt className="ux4g-font-weight-semibold">Document Number</dt>
                    <dd>{formData.documentNumber}</dd>
                  </div>
                  {formData.purpose && (
                    <div>
                      <dt className="ux4g-font-weight-semibold">Purpose</dt>
                      <dd>{formData.purpose}</dd>
                    </div>
                  )}
                </dl>
              </Card>

              <Field error={!!errors.termsAccepted}>
                <div className="ux4g-choice">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={(checked) => updateField('termsAccepted', checked)}
                    error={!!errors.termsAccepted}
                  />
                  <Label htmlFor="termsAccepted">
                    I accept the{' '}
                    <a href="/terms" target="_blank" className="ux4g-text-link">
                      terms and conditions
                    </a>{' '}
                    and confirm that the information provided is accurate
                    <span className="ux4g-label-required"></span>
                  </Label>
                </div>
                {errors.termsAccepted && (
                  <ErrorText>{errors.termsAccepted}</ErrorText>
                )}
              </Field>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="ux4g-flex ux4g-justify-between ux4g-pt-6 ux4g-border-t">
          <Button
            variant="secondary"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              loading={isSubmitting}
              loadingText="Submitting..."
            >
              Submit Application
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default GovernmentServiceForm;

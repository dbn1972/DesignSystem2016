import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Section 1',
        content: <div>This is the content of section 1</div>,
      },
      {
        key: '2',
        title: 'Section 2',
        content: <div>This is the content of section 2</div>,
      },
      {
        key: '3',
        title: 'Section 3',
        content: <div>This is the content of section 3</div>,
      },
    ],
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    items: [
      {
        key: '1',
        title: 'Personal Information',
        content: <div>Enter your personal details here</div>,
      },
      {
        key: '2',
        title: 'Contact Information',
        content: <div>Enter your contact details here</div>,
      },
      {
        key: '3',
        title: 'Address Information',
        content: <div>Enter your address details here</div>,
      },
    ],
  },
};

export const WithDefaultOpen: Story = {
  args: {
    defaultValue: ['1'],
    items: [
      {
        key: '1',
        title: 'Getting Started',
        content: <div>This section is open by default</div>,
      },
      {
        key: '2',
        title: 'Advanced Options',
        content: <div>This section is collapsed by default</div>,
      },
    ],
  },
};

export const AadhaarFAQ: Story = {
  args: {
    items: [
      {
        key: 'what-is-aadhaar',
        title: 'What is Aadhaar?',
        content: (
          <div>
            <p>Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI) to all Indian residents.</p>
          </div>
        ),
      },
      {
        key: 'how-to-apply',
        title: 'How do I apply for Aadhaar?',
        content: (
          <div>
            <p>You can apply for Aadhaar by visiting your nearest Aadhaar enrollment center with required documents.</p>
          </div>
        ),
      },
      {
        key: 'documents-required',
        title: 'What documents are required?',
        content: (
          <div>
            <ul>
              <li>Proof of Identity (POI)</li>
              <li>Proof of Address (POA)</li>
              <li>Date of Birth proof</li>
            </ul>
          </div>
        ),
      },
      {
        key: 'how-to-update',
        title: 'How can I update my Aadhaar details?',
        content: (
          <div>
            <p>You can update your Aadhaar details online through the UIDAI website or by visiting an Aadhaar enrollment center.</p>
          </div>
        ),
      },
    ],
  },
};

export const PANCardInfo: Story = {
  args: {
    items: [
      {
        key: 'new-pan',
        title: 'Apply for New PAN Card',
        icon: '📝',
        content: (
          <div>
            <p>Follow these steps to apply for a new PAN card:</p>
            <ol>
              <li>Fill the online application form</li>
              <li>Upload required documents</li>
              <li>Pay the application fee</li>
              <li>Submit and note your acknowledgment number</li>
            </ol>
          </div>
        ),
      },
      {
        key: 'correction',
        title: 'Request PAN Card Correction',
        icon: '✏️',
        content: (
          <div>
            <p>To make corrections to your PAN card, submit a correction request through the Income Tax Department portal with supporting documents.</p>
          </div>
        ),
      },
      {
        key: 'reprint',
        title: 'Request PAN Card Reprint',
        icon: '🖨️',
        content: (
          <div>
            <p>If you have lost your PAN card, you can request a reprint by providing your PAN number and paying the reprint fee.</p>
          </div>
        ),
      },
    ],
  },
};

export const DigiLockerGuide: Story = {
  args: {
    allowMultiple: true,
    defaultValue: ['setup'],
    items: [
      {
        key: 'setup',
        title: 'Setting up DigiLocker',
        content: (
          <div>
            <p>To set up your DigiLocker account:</p>
            <ol>
              <li>Visit the DigiLocker website</li>
              <li>Register with your Aadhaar number</li>
              <li>Verify your mobile number</li>
              <li>Set up your account credentials</li>
            </ol>
          </div>
        ),
      },
      {
        key: 'upload',
        title: 'Uploading Documents',
        content: (
          <div>
            <p>You can upload documents in PDF, JPG, or PNG format. Maximum file size is 5MB per document.</p>
          </div>
        ),
      },
      {
        key: 'share',
        title: 'Sharing Documents',
        content: (
          <div>
            <p>Generate a secure share link to share your documents with government departments or other organizations.</p>
          </div>
        ),
      },
    ],
  },
};

export const GovernmentSchemes: Story = {
  args: {
    items: [
      {
        key: 'pmjdy',
        title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
        content: (
          <div>
            <p>Financial inclusion program providing bank accounts with zero balance, RuPay debit card, and accident insurance.</p>
            <p><strong>Eligibility:</strong> All Indian citizens</p>
          </div>
        ),
      },
      {
        key: 'pmay',
        title: 'Pradhan Mantri Awas Yojana (PMAY)',
        content: (
          <div>
            <p>Housing scheme providing affordable housing to urban and rural poor.</p>
            <p><strong>Eligibility:</strong> Families without pucca house</p>
          </div>
        ),
      },
      {
        key: 'ayushman',
        title: 'Ayushman Bharat',
        content: (
          <div>
            <p>Health insurance scheme providing coverage up to Rs. 5 lakhs per family.</p>
            <p><strong>Eligibility:</strong> Based on SECC 2011 database</p>
          </div>
        ),
      },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Available Section',
        content: <div>This section is available</div>,
      },
      {
        key: '2',
        title: 'Disabled Section',
        content: <div>This content is not accessible</div>,
        disabled: true,
      },
      {
        key: '3',
        title: 'Another Available Section',
        content: <div>This section is also available</div>,
      },
    ],
  },
};

export const StateInformation: Story = {
  args: {
    items: [
      {
        key: 'mh',
        title: 'Maharashtra',
        content: (
          <div>
            <p><strong>Capital:</strong> Mumbai</p>
            <p><strong>Population:</strong> 112 million</p>
            <p><strong>Area:</strong> 307,713 km²</p>
          </div>
        ),
      },
      {
        key: 'ka',
        title: 'Karnataka',
        content: (
          <div>
            <p><strong>Capital:</strong> Bengaluru</p>
            <p><strong>Population:</strong> 61 million</p>
            <p><strong>Area:</strong> 191,791 km²</p>
          </div>
        ),
      },
      {
        key: 'gj',
        title: 'Gujarat',
        content: (
          <div>
            <p><strong>Capital:</strong> Gandhinagar</p>
            <p><strong>Population:</strong> 60 million</p>
            <p><strong>Area:</strong> 196,244 km²</p>
          </div>
        ),
      },
    ],
  },
};

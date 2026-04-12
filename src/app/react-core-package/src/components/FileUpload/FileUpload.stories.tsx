import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Basic: Story = {
  args: {
    onChange: (files) => console.log('Files:', files),
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    onChange: (files) => console.log('Files:', files),
  },
};

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
    onChange: (files) => console.log('Files:', files),
  },
};

export const ImagesOnly: Story = {
  args: {
    accept: '.jpg,.jpeg,.png',
    multiple: true,
    onChange: (files) => console.log('Files:', files),
  },
};

export const AadhaarUpload: Story = {
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    maxSize: 5 * 1024 * 1024,
    onChange: (files) => console.log('Aadhaar files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Aadhaar Card
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          PDF, JPG, or PNG (max 5MB)
        </p>
      </div>
    ),
  },
};

export const PANCardUpload: Story = {
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    maxSize: 2 * 1024 * 1024,
    onChange: (files) => console.log('PAN files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🪪</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload PAN Card
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          PDF or Image (max 2MB)
        </p>
      </div>
    ),
  },
};

export const PassportPhotoUpload: Story = {
  args: {
    accept: '.jpg,.jpeg',
    maxSize: 1 * 1024 * 1024,
    onChange: (files) => console.log('Photo files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Passport Size Photo
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          JPG format only (max 1MB)
        </p>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '0.5rem' }}>
          Dimensions: 35mm x 45mm, White background
        </p>
      </div>
    ),
  },
};

export const DigiLockerUpload: Story = {
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    multiple: true,
    maxSize: 5 * 1024 * 1024,
    maxFiles: 5,
    onChange: (files) => console.log('DigiLocker files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Documents to DigiLocker
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Upload up to 5 documents (max 5MB each)
        </p>
      </div>
    ),
  },
};

export const IncomeProofUpload: Story = {
  args: {
    accept: '.pdf',
    multiple: true,
    maxFiles: 3,
    onChange: (files) => console.log('Income proof files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Income Proof Documents
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Salary slips, ITR, Form 16 (PDF only, up to 3 files)
        </p>
      </div>
    ),
  },
};

export const AddressProofUpload: Story = {
  args: {
    accept: '.pdf,.jpg,.jpeg,.png',
    onChange: (files) => console.log('Address proof files:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Address Proof
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Electricity bill, Gas bill, or Bank statement
        </p>
      </div>
    ),
  },
};

export const EducationalDocuments: Story = {
  args: {
    accept: '.pdf',
    multiple: true,
    maxFiles: 5,
    onChange: (files) => console.log('Educational documents:', files),
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Upload Educational Certificates
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          10th, 12th, Graduation certificates (PDF, up to 5 files)
        </p>
      </div>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

/**
 * Breadcrumbs provide a navigation trail for users to understand their location
 * within a website's hierarchy and navigate back to parent pages.
 *
 * ## When to use
 * - Multi-level website structures
 * - Helping users understand their location
 * - Providing quick navigation to parent pages
 * - Government portals with deep page hierarchies
 *
 * ## When NOT to use
 * - Single-level websites
 * - Mobile apps with flat navigation
 * - As primary navigation
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/**
 * Basic breadcrumb with simple navigation path
 */
export const Basic: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Aadhaar', current: true },
    ],
  },
};

/**
 * Breadcrumb with custom separator
 */
export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Documents', href: '/documents' },
      { label: 'Identity Proofs', current: true },
    ],
    separator: '>',
  },
};

/**
 * Breadcrumb with icons
 */
export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'My Applications', href: '/applications', icon: '📋' },
      { label: 'PAN Application', current: true, icon: '📝' },
    ],
  },
};

/**
 * DigiLocker breadcrumb navigation
 */
export const DigiLockerNavigation: Story = {
  args: {
    items: [
      { label: 'DigiLocker', href: '/' },
      { label: 'Documents', href: '/documents' },
      { label: 'Educational', href: '/documents/educational' },
      { label: '10th Certificate', current: true },
    ],
  },
};

/**
 * Government portal breadcrumb
 */
export const GovernmentPortal: Story = {
  args: {
    items: [
      { label: 'India.gov.in', href: '/' },
      { label: 'Citizen Services', href: '/citizen-services' },
      { label: 'Identity Cards', href: '/citizen-services/identity' },
      { label: 'Aadhaar Services', href: '/citizen-services/identity/aadhaar' },
      { label: 'Update Demographics', current: true },
    ],
  },
};

/**
 * Passport application breadcrumb
 */
export const PassportApplication: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Passport', href: '/passport' },
      { label: 'Apply', href: '/passport/apply' },
      { label: 'New Application', href: '/passport/apply/new' },
      { label: 'Personal Details', current: true },
    ],
  },
};

/**
 * Income Tax Portal breadcrumb
 */
export const IncomeTaxPortal: Story = {
  args: {
    items: [
      { label: 'Income Tax Department', href: '/' },
      { label: 'e-Filing', href: '/e-filing' },
      { label: 'File Returns', href: '/e-filing/returns' },
      { label: 'ITR-1', current: true },
    ],
  },
};

/**
 * State government service breadcrumb
 */
export const StateGovernmentService: Story = {
  args: {
    items: [
      { label: 'Maharashtra', href: '/' },
      { label: 'Revenue Department', href: '/revenue' },
      { label: '7/12 Extract', href: '/revenue/7-12' },
      { label: 'Apply Online', current: true },
    ],
  },
};

/**
 * Collapsed breadcrumb with many items
 */
export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Government Schemes', href: '/services/schemes' },
      { label: 'Social Welfare', href: '/services/schemes/social-welfare' },
      { label: 'Pension Schemes', href: '/services/schemes/social-welfare/pension' },
      { label: 'Old Age Pension', href: '/services/schemes/social-welfare/pension/old-age' },
      { label: 'Application Form', current: true },
    ],
    maxItems: 4,
  },
};

/**
 * Breadcrumb with click handlers instead of links
 */
export const WithClickHandlers: Story = {
  args: {
    items: [
      { label: 'Dashboard', onClick: () => alert('Navigate to Dashboard') },
      { label: 'Applications', onClick: () => alert('Navigate to Applications') },
      { label: 'Pending Review', current: true },
    ],
  },
};

/**
 * Single item breadcrumb (current page only)
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', current: true }],
  },
};

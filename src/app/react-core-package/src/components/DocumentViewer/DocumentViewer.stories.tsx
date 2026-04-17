import type { Meta, StoryObj } from '@storybook/react';
import { DocumentViewer } from './DocumentViewer';

const meta: Meta<typeof DocumentViewer> = {
  title: 'Components/DocumentViewer',
  component: DocumentViewer,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DocumentViewer>;

export const PDF: Story = { args: { src: '/sample.pdf', title: 'Sample PDF', type: 'pdf' } };
export const Image: Story = { args: { src: '/photo.png', title: 'Photo Preview', type: 'image' } };
export const Downloadable: Story = { args: { src: '/report.pdf', title: 'Downloadable Report', type: 'pdf', downloadable: true } };

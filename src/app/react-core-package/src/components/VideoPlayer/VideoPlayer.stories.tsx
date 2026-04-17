import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = { args: { src: 'https://example.com/video.mp4', title: 'Sample Video' } };
export const WithPoster: Story = { args: { src: 'https://example.com/video.mp4', title: 'Video with Poster', poster: 'https://example.com/poster.jpg' } };
export const AutoPlay: Story = { args: { src: 'https://example.com/video.mp4', title: 'Auto-playing Video', autoPlay: true } };

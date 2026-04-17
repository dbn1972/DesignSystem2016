import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VideoPlayer } from './VideoPlayer';

describe('VideoPlayer', () => {
  it('renders video element', () => {
    render(<VideoPlayer src="/video.mp4" />);
    const video = document.querySelector('video');
    expect(video).toBeInTheDocument();
  });

  it('sets src attribute', () => {
    render(<VideoPlayer src="/video.mp4" />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('src', '/video.mp4');
  });

  it('has controls by default', () => {
    render(<VideoPlayer src="/video.mp4" />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('controls');
  });

  it('shows title', () => {
    render(<VideoPlayer src="/video.mp4" title="My Video" />);
    expect(screen.getByText('My Video')).toBeInTheDocument();
  });

  it('sets poster attribute', () => {
    render(<VideoPlayer src="/video.mp4" poster="/poster.jpg" />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('poster', '/poster.jpg');
  });

  it('sets aria-label from title', () => {
    render(<VideoPlayer src="/video.mp4" title="Accessible Video" />);
    const video = document.querySelector('video');
    expect(video).toHaveAttribute('aria-label', 'Accessible Video');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLVideoElement>();
    render(<VideoPlayer src="/video.mp4" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLVideoElement);
  });
});

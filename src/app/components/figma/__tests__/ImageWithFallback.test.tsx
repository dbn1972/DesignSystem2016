import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ImageWithFallback } from '../ImageWithFallback';

describe('ImageWithFallback', () => {
  it('renders an img element with the provided src', () => {
    render(<ImageWithFallback src="https://example.com/photo.jpg" alt="Profile" />);
    expect(screen.getByRole('img', { name: 'Profile' })).toHaveAttribute(
      'src',
      'https://example.com/photo.jpg'
    );
  });

  it('renders with alt text', () => {
    render(<ImageWithFallback src="photo.jpg" alt="User avatar" />);
    expect(screen.getByRole('img', { name: 'User avatar' })).toBeInTheDocument();
  });

  it('applies className to the img', () => {
    render(<ImageWithFallback src="photo.jpg" alt="img" className="rounded-full" />);
    expect(screen.getByRole('img')).toHaveClass('rounded-full');
  });

  it('shows fallback UI when image fails to load', async () => {
    render(<ImageWithFallback src="broken.jpg" alt="Broken image" />);
    const img = screen.getByRole('img', { name: 'Broken image' });

    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });

    // After error, fallback renders a div wrapper with an error SVG image
    expect(screen.getByRole('img', { name: 'Error loading image' })).toBeInTheDocument();
  });

  it('stores original src in data-original-url on fallback image', async () => {
    render(<ImageWithFallback src="broken.jpg" alt="Broken" />);
    const img = screen.getByRole('img', { name: 'Broken' });

    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });

    expect(screen.getByRole('img', { name: 'Error loading image' })).toHaveAttribute(
      'data-original-url',
      'broken.jpg'
    );
  });

  it('does not show fallback before error occurs', () => {
    render(<ImageWithFallback src="valid.jpg" alt="Valid" />);
    expect(screen.queryByRole('img', { name: 'Error loading image' })).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Valid' })).toBeInTheDocument();
  });
});

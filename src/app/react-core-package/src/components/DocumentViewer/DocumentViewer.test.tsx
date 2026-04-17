import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DocumentViewer } from './DocumentViewer';

describe('DocumentViewer', () => {
  it('renders iframe for pdf type', () => {
    render(<DocumentViewer src="/doc.pdf" type="pdf" />);
    const iframe = document.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', '/doc.pdf');
  });

  it('renders img for image type', () => {
    render(<DocumentViewer src="/photo.png" type="image" />);
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/photo.png');
  });

  it('renders text container for text type', () => {
    render(<DocumentViewer src="/readme.txt" type="text" title="Readme" />);
    expect(screen.getByRole('document')).toBeInTheDocument();
  });

  it('shows title', () => {
    render(<DocumentViewer src="/doc.pdf" title="My Document" />);
    expect(screen.getByText('My Document')).toBeInTheDocument();
  });

  it('shows download button when downloadable', () => {
    render(<DocumentViewer src="/doc.pdf" title="Report" downloadable />);
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument();
  });

  it('calls onDownload when download button clicked', async () => {
    const user = userEvent.setup();
    const onDownload = vi.fn();
    render(<DocumentViewer src="/doc.pdf" title="Report" downloadable onDownload={onDownload} />);
    await user.click(screen.getByRole('button', { name: /download/i }));
    expect(onDownload).toHaveBeenCalledOnce();
  });

  it('hides download button when not downloadable', () => {
    render(<DocumentViewer src="/doc.pdf" title="Report" />);
    expect(screen.queryByRole('button', { name: /download/i })).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<DocumentViewer src="/doc.pdf" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

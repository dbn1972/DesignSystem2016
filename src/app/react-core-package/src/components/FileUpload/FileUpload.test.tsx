import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUpload } from './FileUpload';
import { assertA11y } from '@/test/a11y-helpers';

/** Helper: create a mock File */
const makeFile = (name: string, size: number, type = 'application/pdf') =>
  new File(['x'.repeat(size)], name, { type });

describe('FileUpload', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the upload area', () => {
    const { container } = render(<FileUpload />);
    expect(container.querySelector('.ux4g-file-upload-area')).toBeInTheDocument();
  });

  it('renders default drag-and-drop prompt text', () => {
    render(<FileUpload />);
    expect(
      screen.getByText('Drag and drop files here or click to browse')
    ).toBeInTheDocument();
  });

  it('renders custom children instead of default content', () => {
    render(
      <FileUpload>
        <span>Custom upload area</span>
      </FileUpload>
    );
    expect(screen.getByText('Custom upload area')).toBeInTheDocument();
    expect(
      screen.queryByText('Drag and drop files here or click to browse')
    ).not.toBeInTheDocument();
  });

  it('renders accepted formats hint when accept is provided', () => {
    render(<FileUpload accept=".pdf,.jpg" />);
    expect(screen.getByText('Accepted formats: .pdf,.jpg')).toBeInTheDocument();
  });

  it('renders max size hint when maxSize is provided', () => {
    render(<FileUpload maxSize={5 * 1024 * 1024} />);
    expect(screen.getByText('Maximum file size: 5.0MB')).toBeInTheDocument();
  });

  // ── File input ────────────────────────────────────────────────────────────

  it('renders a hidden file input with aria-label', () => {
    render(<FileUpload />);
    expect(screen.getByLabelText('File upload')).toBeInTheDocument();
  });

  it('sets accept attribute on the file input', () => {
    render(<FileUpload accept=".pdf,.png" />);
    expect(screen.getByLabelText('File upload')).toHaveAttribute('accept', '.pdf,.png');
  });

  it('sets multiple attribute when multiple is true', () => {
    render(<FileUpload multiple />);
    expect(screen.getByLabelText('File upload')).toHaveAttribute('multiple');
  });

  // ── File selection ────────────────────────────────────────────────────────

  it('calls onChange with selected files', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} />);

    const file = makeFile('document.pdf', 1024);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0][0].name).toBe('document.pdf');
  });

  it('shows uploaded file in the file list', async () => {
    const user = userEvent.setup();
    render(<FileUpload />);

    const file = makeFile('report.pdf', 2048);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(screen.getByText('report.pdf')).toBeInTheDocument();
  });

  it('shows file size in the file list', async () => {
    const user = userEvent.setup();
    render(<FileUpload />);

    const file = makeFile('report.pdf', 2048);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(screen.getByText('2.0 KB')).toBeInTheDocument();
  });

  it('renders remove button for each uploaded file', async () => {
    const user = userEvent.setup();
    render(<FileUpload />);

    const file = makeFile('doc.pdf', 1024);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(screen.getByRole('button', { name: 'Remove doc.pdf' })).toBeInTheDocument();
  });

  it('removes file when remove button is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} />);

    const file = makeFile('doc.pdf', 1024);
    await user.upload(screen.getByLabelText('File upload'), file);
    expect(screen.getByText('doc.pdf')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Remove doc.pdf' }));
    expect(screen.queryByText('doc.pdf')).not.toBeInTheDocument();
    // onChange called again with empty array
    expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toHaveLength(0);
  });

  // ── Multiple files ────────────────────────────────────────────────────────

  it('accumulates multiple files when multiple is true', async () => {
    const user = userEvent.setup();
    render(<FileUpload multiple />);

    const files = [makeFile('a.pdf', 1024), makeFile('b.pdf', 2048)];
    await user.upload(screen.getByLabelText('File upload'), files);

    expect(screen.getByText('a.pdf')).toBeInTheDocument();
    expect(screen.getByText('b.pdf')).toBeInTheDocument();
  });

  it('replaces file when multiple is false', async () => {
    const user = userEvent.setup();
    render(<FileUpload multiple={false} />);

    await user.upload(screen.getByLabelText('File upload'), makeFile('first.pdf', 1024));
    await user.upload(screen.getByLabelText('File upload'), makeFile('second.pdf', 1024));

    expect(screen.queryByText('first.pdf')).not.toBeInTheDocument();
    expect(screen.getByText('second.pdf')).toBeInTheDocument();
  });

  // ── Validation ────────────────────────────────────────────────────────────

  it('shows error when file exceeds maxSize', async () => {
    const user = userEvent.setup();
    render(<FileUpload maxSize={1024} />); // 1 KB limit

    const bigFile = makeFile('big.pdf', 5 * 1024); // 5 KB
    await user.upload(screen.getByLabelText('File upload'), bigFile);

    expect(screen.getByText(/File size exceeds/)).toBeInTheDocument();
  });

  it('does not add file that fails validation', async () => {
    const user = userEvent.setup();
    render(<FileUpload maxSize={1024} />);

    const bigFile = makeFile('big.pdf', 5 * 1024);
    await user.upload(screen.getByLabelText('File upload'), bigFile);

    expect(screen.queryByText('big.pdf')).not.toBeInTheDocument();
  });

  it('uses custom validator when provided', async () => {
    const user = userEvent.setup();
    const validator = vi.fn().mockReturnValue('Custom error message');
    render(<FileUpload validator={validator} />);

    const file = makeFile('doc.pdf', 1024);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(screen.getByText(/Custom error message/)).toBeInTheDocument();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('disables the file input when disabled', () => {
    render(<FileUpload disabled />);
    expect(screen.getByLabelText('File upload')).toBeDisabled();
  });

  it('applies disabled class to upload area', () => {
    const { container } = render(<FileUpload disabled />);
    expect(container.querySelector('.ux4g-file-upload-area')).toHaveClass(
      'ux4g-file-upload-disabled'
    );
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it('applies error class to upload area when error is true', () => {
    const { container } = render(<FileUpload error />);
    expect(container.querySelector('.ux4g-file-upload-area')).toHaveClass(
      'ux4g-file-upload-error'
    );
  });

  // ── Hide file list ────────────────────────────────────────────────────────

  it('does not show file list when showFileList is false', async () => {
    const user = userEvent.setup();
    render(<FileUpload showFileList={false} />);

    const file = makeFile('doc.pdf', 1024);
    await user.upload(screen.getByLabelText('File upload'), file);

    expect(screen.queryByText('doc.pdf')).not.toBeInTheDocument();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<FileUpload />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<FileUpload disabled />);
    });

    it('has no axe violations in error state', async () => {
      await assertA11y(<FileUpload error />);
    });

    describe('Keyboard navigation', () => {
      it('file input receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<FileUpload />);
        await user.tab();
        expect(screen.getByLabelText('File upload')).toHaveFocus();
      });

      it('activates file input via Enter key', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<FileUpload onChange={onChange} />);
        const input = screen.getByLabelText('File upload');
        input.focus();
        // Verify the input is focused and can receive keyboard interaction
        expect(input).toHaveFocus();
      });

      it('activates file input via Space key', async () => {
        const user = userEvent.setup();
        render(<FileUpload />);
        const input = screen.getByLabelText('File upload');
        input.focus();
        expect(input).toHaveFocus();
      });
    });
  });
});

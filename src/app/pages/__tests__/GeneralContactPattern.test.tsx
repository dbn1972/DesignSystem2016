import { describe, expect, it, vi, beforeAll } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GeneralContactPattern from '../GeneralContactPattern';
import { renderWithRouter } from './test-utils';

// ── Global mocks ────────────────────────────────────────────────────
const writeTextMock = vi.fn().mockResolvedValue(undefined);

beforeAll(() => {
  // clipboard
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: writeTextMock },
    writable: true,
    configurable: true,
  });
  // URL helpers
  global.URL.createObjectURL = vi.fn(() => 'blob:mock');
  global.URL.revokeObjectURL = vi.fn();
});

describe('GeneralContactPattern', () => {
  // ── Smoke ─────────────────────────────────────────────────────────
  it('renders without crashing', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(document.body).toBeTruthy();
  });

  it('renders the page heading', () => {
    renderWithRouter(<GeneralContactPattern />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  // ── Code Downloads section ────────────────────────────────────────
  it('contains a Code Downloads section', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(document.getElementById('code-downloads')).toBeInTheDocument();
  });

  it('has a Code Downloads h2 heading', () => {
    renderWithRouter(<GeneralContactPattern />);
    const h2 = document.getElementById('code-downloads')?.querySelector('h2');
    expect(h2?.textContent).toBe('Code Downloads');
  });

  // ── Framework lanes ───────────────────────────────────────────────
  it('renders three framework lanes', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(screen.getAllByText('Framework lane').length).toBe(3);
  });

  it('has React lane', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(document.getElementById('code-downloads')?.textContent).toContain('React');
  });

  it('has Angular lane', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(document.getElementById('code-downloads')?.textContent).toContain('Angular');
  });

  it('has HTML lane', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(document.getElementById('code-downloads')?.textContent).toContain('HTML');
  });

  // ── Buttons ───────────────────────────────────────────────────────
  it('renders download buttons for each framework', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(screen.getByLabelText('Download React code')).toBeInTheDocument();
    expect(screen.getByLabelText('Download Angular code')).toBeInTheDocument();
    expect(screen.getByLabelText('Download HTML / CSS / JS code')).toBeInTheDocument();
  });

  it('renders three copy buttons', () => {
    renderWithRouter(<GeneralContactPattern />);
    expect(screen.getAllByText('Copy').length).toBe(3);
  });

  // ── Code previews ─────────────────────────────────────────────────
  it('renders code preview blocks with content', () => {
    renderWithRouter(<GeneralContactPattern />);
    const blocks = document.querySelectorAll('#code-downloads pre code');
    expect(blocks.length).toBe(3);
    blocks.forEach((b) => expect(b.textContent?.length).toBeGreaterThan(0));
  });

  // ── Interactions ──────────────────────────────────────────────────
  it('copy button shows Copied after click', async () => {
    writeTextMock.mockClear();
    const user = userEvent.setup();
    renderWithRouter(<GeneralContactPattern />);
    await user.click(screen.getAllByText('Copy')[0]);
    await waitFor(() => expect(screen.getByText('Copied')).toBeInTheDocument());
  });

  it('download button creates a blob download', async () => {
    const user = userEvent.setup();
    const clickSpy = vi.fn();
    const orig = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tag: string) => {
      const el = orig(tag);
      if (tag === 'a') el.click = clickSpy;
      return el;
    });
    renderWithRouter(<GeneralContactPattern />);
    await user.click(screen.getByLabelText('Download React code'));
    expect(global.URL.createObjectURL).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();
    vi.restoreAllMocks();
  });
});

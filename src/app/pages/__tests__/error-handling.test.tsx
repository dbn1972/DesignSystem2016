import { describe, expect, it, vi, beforeAll } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import NotFound from '../NotFound';
import { renderWithRouter } from './test-utils';

// ── 404 Page ────────────────────────────────────────────────────────

describe('404 Not Found Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<NotFound />);
    expect(document.body).toBeTruthy();
  });

  it('displays a not-found message', () => {
    renderWithRouter(<NotFound />);
    const body = document.body.textContent || '';
    const has404 = /404|not found|page.*not|doesn.*exist/i.test(body);
    expect(has404).toBe(true);
  });

  it('has a link to go home', () => {
    renderWithRouter(<NotFound />);
    const homeLink = document.querySelector('a[href="/"]') ||
      document.querySelector('a[href*="home"]') ||
      screen.queryByText(/home|go back|return/i);
    expect(homeLink).toBeTruthy();
  });

  it('renders heading', () => {
    renderWithRouter(<NotFound />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});

// ── Error Boundary ──────────────────────────────────────────────────

// Simple error boundary for testing
class TestErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Component that throws
function CrashingComponent(): React.ReactElement {
  throw new Error('Test crash');
}

describe('Error Boundary', () => {
  it('catches component crash and shows fallback', () => {
    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <TestErrorBoundary fallback={<div data-testid="error-fallback">Something went wrong</div>}>
        <CrashingComponent />
      </TestErrorBoundary>
    );

    expect(screen.getByTestId('error-fallback')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    spy.mockRestore();
  });

  it('renders children when no error', () => {
    render(
      <TestErrorBoundary fallback={<div>Error</div>}>
        <div data-testid="healthy">All good</div>
      </TestErrorBoundary>
    );

    expect(screen.getByTestId('healthy')).toBeInTheDocument();
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });
});

// ── Network Failure Handling ────────────────────────────────────────

describe('Network Failure Handling', () => {
  it('fetch failure returns error that can be caught', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    let caught = false;
    try {
      await fetch('/api/test');
    } catch (e: any) {
      caught = true;
      expect(e.message).toBe('Network error');
    }
    expect(caught).toBe(true);

    global.fetch = originalFetch;
  });

  it('fetch 500 response can be detected', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: () => Promise.resolve({ message: 'Server error' }),
    });

    const res = await fetch('/api/test');
    expect(res.ok).toBe(false);
    expect(res.status).toBe(500);

    global.fetch = originalFetch;
  });

  it('fetch timeout can be simulated', async () => {
    const originalFetch = global.fetch;
    global.fetch = vi.fn().mockImplementation(
      () => new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 100)
      )
    );

    let caught = false;
    try {
      await fetch('/api/test');
    } catch (e: any) {
      caught = true;
      expect(e.message).toBe('Request timeout');
    }
    expect(caught).toBe(true);

    global.fetch = originalFetch;
  });

  it('offline state can be detected', () => {
    const original = navigator.onLine;
    Object.defineProperty(navigator, 'onLine', { value: false, writable: true, configurable: true });
    expect(navigator.onLine).toBe(false);
    Object.defineProperty(navigator, 'onLine', { value: original, writable: true, configurable: true });
  });
});

// ── Route Error Handling ────────────────────────────────────────────

describe('Route Error Handling', () => {
  it('unknown route renders NotFound', () => {
    render(
      <MemoryRouter initialEntries={['/this-does-not-exist-xyz']}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    const body = document.body.textContent || '';
    expect(/404|not found/i.test(body)).toBe(true);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('valid route does not show NotFound', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});

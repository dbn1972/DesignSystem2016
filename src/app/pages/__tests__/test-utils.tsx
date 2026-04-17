import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

/**
 * Renders a component wrapped in MemoryRouter for pattern page tests.
 */
export function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

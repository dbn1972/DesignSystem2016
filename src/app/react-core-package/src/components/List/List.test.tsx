import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { List } from './List';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

const items = [
  { key: '1', primary: 'Item One', secondary: 'Description' },
  { key: '2', primary: 'Item Two' },
];

describe('List', () => {
  it('renders items', () => { render(<List items={items} />); expect(screen.getByText('Item One')).toBeInTheDocument(); expect(screen.getByText('Item Two')).toBeInTheDocument(); });
  it('renders secondary text', () => { render(<List items={items} />); expect(screen.getByText('Description')).toBeInTheDocument(); });
  it('renders empty message when no items', () => { render(<List items={[]} />); expect(screen.getByText('No items')).toBeInTheDocument(); });
  it('renders custom empty message', () => { render(<List items={[]} emptyMessage="Nothing here" />); expect(screen.getByText('Nothing here')).toBeInTheDocument(); });
  it('renders icon', () => { render(<List items={[{ key: '1', primary: 'A', icon: <span data-testid="ico">★</span> }]} />); expect(screen.getByTestId('ico')).toBeInTheDocument(); });
  it('renders action', () => { render(<List items={[{ key: '1', primary: 'A', action: <button>Edit</button> }]} />); expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument(); });
  it('has role="list"', () => { render(<List items={items} />); expect(screen.getByRole('list')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLUListElement>(); render(<List items={items} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLUListElement); });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(
        <List items={[{ key: '1', primary: 'Item One' }, { key: '2', primary: 'Item Two' }]} />
      );
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'with items', ui: <List items={[{ key: '1', primary: 'Item One', secondary: 'Description' }]} /> },
        { name: 'empty list', ui: <List items={[]} /> },
        { name: 'with icon', ui: <List items={[{ key: '1', primary: 'Item', icon: <span aria-hidden="true">★</span> }]} /> },
      ]);
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

const ITEMS = [
  { value: 'personal', label: 'Personal Details', content: <p>Personal content</p> },
  { value: 'documents', label: 'Documents', content: <p>Documents content</p> },
  { value: 'review', label: 'Review', content: <p>Review content</p> },
];

const ITEMS_WITH_DISABLED = [
  { value: 'tab1', label: 'Tab 1', content: <p>Tab 1 content</p> },
  { value: 'tab2', label: 'Tab 2', content: <p>Tab 2 content</p>, disabled: true },
  { value: 'tab3', label: 'Tab 3', content: <p>Tab 3 content</p> },
];

describe('Tabs', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a tablist with all tabs', () => {
    render(<Tabs items={ITEMS} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });

  it('renders tab labels', () => {
    render(<Tabs items={ITEMS} />);
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Documents' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Review' })).toBeInTheDocument();
  });

  it('renders tab panels (lazy=false renders all, hidden ones use hidden attr)', () => {
    render(<Tabs items={ITEMS} />);
    // By default (lazy=false, keepMounted=false) all panels are rendered in DOM
    // but inactive ones have hidden attribute
    const { container } = render(<Tabs items={ITEMS} />);
    const panels = container.querySelectorAll('[role="tabpanel"]');
    expect(panels).toHaveLength(3);
  });

  // ── Default active tab ────────────────────────────────────────────────────

  it('activates the first tab by default', () => {
    render(<Tabs items={ITEMS} />);
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('shows content of the first tab by default', () => {
    render(<Tabs items={ITEMS} />);
    expect(screen.getByText('Personal content')).toBeVisible();
  });

  it('activates the defaultValue tab', () => {
    render(<Tabs items={ITEMS} defaultValue="documents" />);
    expect(screen.getByRole('tab', { name: 'Documents' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  // ── Tab switching ─────────────────────────────────────────────────────────

  it('switches active tab on click', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} />);
    await user.click(screen.getByRole('tab', { name: 'Documents' }));
    expect(screen.getByRole('tab', { name: 'Documents' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
  });

  it('calls onChange when a tab is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs items={ITEMS} onChange={onChange} />);
    await user.click(screen.getByRole('tab', { name: 'Review' }));
    expect(onChange).toHaveBeenCalledWith('review');
  });

  // ── ARIA wiring ───────────────────────────────────────────────────────────

  it('wires tab aria-controls to panel id', () => {
    render(<Tabs items={ITEMS} />);
    const tab = screen.getByRole('tab', { name: 'Personal Details' });
    const panelId = tab.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    expect(document.getElementById(panelId!)).toHaveAttribute('role', 'tabpanel');
  });

  it('wires panel aria-labelledby to tab id', () => {
    render(<Tabs items={ITEMS} />);
    const tab = screen.getByRole('tab', { name: 'Personal Details' });
    const panel = screen.getAllByRole('tabpanel')[0];
    expect(panel).toHaveAttribute('aria-labelledby', tab.id);
  });

  it('sets tabIndex=0 on active tab and -1 on others', () => {
    render(<Tabs items={ITEMS} />);
    const [first, second, third] = screen.getAllByRole('tab');
    expect(first).toHaveAttribute('tabindex', '0');
    expect(second).toHaveAttribute('tabindex', '-1');
    expect(third).toHaveAttribute('tabindex', '-1');
  });

  // ── Keyboard navigation ───────────────────────────────────────────────────

  it('moves to next tab with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} />);
    screen.getByRole('tab', { name: 'Personal Details' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Documents' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Documents' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('moves to previous tab with ArrowLeft', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} defaultValue="documents" />);
    screen.getByRole('tab', { name: 'Documents' }).focus();
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
  });

  it('wraps from last to first tab with ArrowRight', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} defaultValue="review" />);
    screen.getByRole('tab', { name: 'Review' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
  });

  it('jumps to first tab with Home key', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} defaultValue="review" />);
    screen.getByRole('tab', { name: 'Review' }).focus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
  });

  it('jumps to last tab with End key', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS} />);
    screen.getByRole('tab', { name: 'Personal Details' }).focus();
    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Review' })).toHaveFocus();
  });

  // ── Disabled tabs ─────────────────────────────────────────────────────────

  it('does not activate a disabled tab on click', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS_WITH_DISABLED} />);
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
  });

  it('skips disabled tabs during keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Tabs items={ITEMS_WITH_DISABLED} />);
    screen.getByRole('tab', { name: 'Tab 1' }).focus();
    await user.keyboard('{ArrowRight}');
    // Tab 2 is disabled, should skip to Tab 3
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveFocus();
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled value prop', () => {
    render(<Tabs items={ITEMS} value="review" onChange={vi.fn()} />);
    expect(screen.getByRole('tab', { name: 'Review' })).toHaveAttribute('aria-selected', 'true');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Tabs items={ITEMS} />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'default', ui: <Tabs items={ITEMS} variant="default" /> },
        { name: 'pills', ui: <Tabs items={ITEMS} variant="pills" /> },
        { name: 'underline', ui: <Tabs items={ITEMS} variant="underline" /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Tabs items={ITEMS} />);
        await user.tab();
        expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
      });

      it('navigates between tabs with Arrow keys', async () => {
        const user = userEvent.setup();
        render(<Tabs items={ITEMS} />);
        screen.getByRole('tab', { name: 'Personal Details' }).focus();
        await user.keyboard('{ArrowRight}');
        expect(screen.getByRole('tab', { name: 'Documents' })).toHaveFocus();
        await user.keyboard('{ArrowLeft}');
        expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
      });

      it('jumps to first tab with Home key', async () => {
        const user = userEvent.setup();
        render(<Tabs items={ITEMS} defaultValue="review" />);
        screen.getByRole('tab', { name: 'Review' }).focus();
        await user.keyboard('{Home}');
        expect(screen.getByRole('tab', { name: 'Personal Details' })).toHaveFocus();
      });

      it('jumps to last tab with End key', async () => {
        const user = userEvent.setup();
        render(<Tabs items={ITEMS} />);
        screen.getByRole('tab', { name: 'Personal Details' }).focus();
        await user.keyboard('{End}');
        expect(screen.getByRole('tab', { name: 'Review' })).toHaveFocus();
      });
    });
  });
});

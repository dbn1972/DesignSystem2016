import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

const ITEMS = [
  { key: 'faq1', title: 'What is Aadhaar?', content: <p>Aadhaar is a 12-digit ID.</p> },
  { key: 'faq2', title: 'How to apply?', content: <p>Visit the nearest centre.</p> },
  { key: 'faq3', title: 'Fees', content: <p>No fee required.</p>, disabled: true },
];

describe('Accordion', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders all item headers', () => {
    render(<Accordion items={ITEMS} />);
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /How to apply/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Fees/i })).toBeInTheDocument();
  });

  it('renders all content regions (including hidden ones)', () => {
    render(<Accordion items={ITEMS} />);
    // Closed panels have hidden attribute — query with hidden:true
    expect(screen.getAllByRole('region', { hidden: true })).toHaveLength(3);
  });

  it('all items are collapsed by default', () => {
    render(<Accordion items={ITEMS} />);
    screen.getAllByRole('button').forEach((btn) => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('opens item specified in defaultValue', () => {
    render(<Accordion items={ITEMS} defaultValue={['faq1']} />);
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  it('shows content of open item', () => {
    render(<Accordion items={ITEMS} defaultValue={['faq1']} />);
    expect(screen.getByText('Aadhaar is a 12-digit ID.')).toBeVisible();
  });

  it('hides content of closed items', () => {
    render(<Accordion items={ITEMS} />);
    // hidden attribute is set on closed panels
    const regions = screen.getAllByRole('region', { hidden: true });
    regions.forEach((r) => expect(r).toHaveAttribute('hidden'));
  });

  // ── Toggle ────────────────────────────────────────────────────────────────

  it('opens an item on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);
    await user.click(screen.getByRole('button', { name: /What is Aadhaar/i }));
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  it('collapses an open item on second click (collapsible=true)', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} defaultValue={['faq1']} />);
    await user.click(screen.getByRole('button', { name: /What is Aadhaar/i }));
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'false'
    );
  });

  it('does not collapse when collapsible=false', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} defaultValue={['faq1']} collapsible={false} />);
    await user.click(screen.getByRole('button', { name: /What is Aadhaar/i }));
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  it('calls onChange when an item is toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Accordion items={ITEMS} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /What is Aadhaar/i }));
    expect(onChange).toHaveBeenCalledWith(['faq1']);
  });

  // ── Single vs multiple ────────────────────────────────────────────────────

  it('closes other items when allowMultiple=false (default)', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} defaultValue={['faq1']} />);
    await user.click(screen.getByRole('button', { name: /How to apply/i }));
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'false'
    );
    expect(screen.getByRole('button', { name: /How to apply/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  it('keeps multiple items open when allowMultiple=true', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} allowMultiple />);
    await user.click(screen.getByRole('button', { name: /What is Aadhaar/i }));
    await user.click(screen.getByRole('button', { name: /How to apply/i }));
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
    expect(screen.getByRole('button', { name: /How to apply/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  // ── Disabled item ─────────────────────────────────────────────────────────

  it('disabled item header is disabled', () => {
    render(<Accordion items={ITEMS} />);
    expect(screen.getByRole('button', { name: /Fees/i })).toBeDisabled();
  });

  it('does not open a disabled item on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);
    await user.click(screen.getByRole('button', { name: /Fees/i }));
    expect(screen.getByRole('button', { name: /Fees/i })).toHaveAttribute(
      'aria-expanded', 'false'
    );
  });

  // ── ARIA wiring ───────────────────────────────────────────────────────────

  it('header aria-controls points to content region id', () => {
    render(<Accordion items={ITEMS} />);
    const header = screen.getByRole('button', { name: /What is Aadhaar/i });
    const controlsId = header.getAttribute('aria-controls');
    expect(controlsId).toBe('accordion-content-faq1');
    expect(document.getElementById(controlsId!)).toBeInTheDocument();
  });

  it('content region aria-labelledby points to header id', () => {
    render(<Accordion items={ITEMS} />);
    const region = document.getElementById('accordion-content-faq1');
    expect(region).toHaveAttribute('aria-labelledby', 'accordion-header-faq1');
  });

  // ── Keyboard ─────────────────────────────────────────────────────────────

  it('opens item with Enter key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);
    screen.getByRole('button', { name: /What is Aadhaar/i }).focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  it('opens item with Space key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);
    screen.getByRole('button', { name: /What is Aadhaar/i }).focus();
    await user.keyboard(' ');
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled value', () => {
    render(<Accordion items={ITEMS} value={['faq2']} onChange={vi.fn()} />);
    expect(screen.getByRole('button', { name: /How to apply/i })).toHaveAttribute(
      'aria-expanded', 'true'
    );
    expect(screen.getByRole('button', { name: /What is Aadhaar/i })).toHaveAttribute(
      'aria-expanded', 'false'
    );
  });
});

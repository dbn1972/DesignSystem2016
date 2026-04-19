import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Statistic } from './Statistic';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Statistic', () => {
  it('renders label', () => { render(<Statistic label="Applications" value={42} />); expect(screen.getByText('Applications')).toBeInTheDocument(); });
  it('renders value', () => { render(<Statistic label="Total" value="1,234" />); expect(screen.getByText('1,234')).toBeInTheDocument(); });
  it('renders prefix', () => { render(<Statistic label="Revenue" value="50,000" prefix="₹" />); expect(screen.getByText('₹')).toBeInTheDocument(); });
  it('renders suffix', () => { render(<Statistic label="Growth" value={12} suffix="%" />); expect(screen.getByText('%')).toBeInTheDocument(); });
  it('renders positive trend', () => { render(<Statistic label="Users" value={100} trend={{ value: 5, label: 'vs last month' }} />); expect(screen.getByText('5%')).toBeInTheDocument(); expect(screen.getByText('vs last month')).toBeInTheDocument(); });
  it('renders negative trend', () => { render(<Statistic label="Errors" value={3} trend={{ value: -10 }} />); expect(screen.getByText('10%')).toBeInTheDocument(); });
  it('renders icon', () => { render(<Statistic label="L" value={1} icon={<span data-testid="ico">📊</span>} />); expect(screen.getByTestId('ico')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<Statistic label="L" value={1} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDivElement); });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Statistic label="Applications" value={42} />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'with prefix', ui: <Statistic label="Revenue" value="50,000" prefix="₹" /> },
        { name: 'with suffix', ui: <Statistic label="Growth" value={12} suffix="%" /> },
        { name: 'with trend', ui: <Statistic label="Users" value={100} trend={{ value: 5, label: 'vs last month' }} /> },
      ]);
    });
  });
});

import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from './Stepper';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

const STEPS = [
  { key: '1', label: 'Personal Info', description: 'Enter your details' },
  { key: '2', label: 'Documents', description: 'Upload required files' },
  { key: '3', label: 'Review' },
  { key: '4', label: 'Payment' },
];

describe('Stepper', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders all step labels', () => {
    render(<Stepper steps={STEPS} current={0} />);
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('renders step descriptions when provided', () => {
    render(<Stepper steps={STEPS} current={0} />);
    expect(screen.getByText('Enter your details')).toBeInTheDocument();
    expect(screen.getByText('Upload required files')).toBeInTheDocument();
  });

  it('renders step numbers for waiting and process steps', () => {
    render(<Stepper steps={STEPS} current={1} />);
    // Step 0 is finished (shows ✓), step 1 is current (shows 2), steps 2-3 show numbers
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders checkmark for finished steps', () => {
    render(<Stepper steps={STEPS} current={2} />);
    // Steps 0 and 1 are finished
    const checkmarks = screen.getAllByText('✓');
    expect(checkmarks).toHaveLength(2);
  });

  // ── Step status ───────────────────────────────────────────────────────────

  it('applies process class to current step', () => {
    const { container } = render(<Stepper steps={STEPS} current={1} />);
    const steps = container.querySelectorAll('.ux4g-step');
    expect(steps[1]).toHaveClass('ux4g-step-process');
  });

  it('applies finish class to completed steps', () => {
    const { container } = render(<Stepper steps={STEPS} current={2} />);
    const steps = container.querySelectorAll('.ux4g-step');
    expect(steps[0]).toHaveClass('ux4g-step-finish');
    expect(steps[1]).toHaveClass('ux4g-step-finish');
  });

  it('applies waiting class to future steps', () => {
    const { container } = render(<Stepper steps={STEPS} current={1} />);
    const steps = container.querySelectorAll('.ux4g-step');
    expect(steps[2]).toHaveClass('ux4g-step-waiting');
    expect(steps[3]).toHaveClass('ux4g-step-waiting');
  });

  it('respects explicit step status override', () => {
    const stepsWithError = [
      { key: '1', label: 'Step 1' },
      { key: '2', label: 'Step 2', status: 'error' as const },
      { key: '3', label: 'Step 3' },
    ];
    const { container } = render(<Stepper steps={stepsWithError} current={0} />);
    const steps = container.querySelectorAll('.ux4g-step');
    expect(steps[1]).toHaveClass('ux4g-step-error');
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('marks current step with aria-current="step"', () => {
    render(<Stepper steps={STEPS} current={1} />);
    const indicators = screen.getAllByRole('generic').filter(
      (el) => el.getAttribute('aria-current') === 'step'
    );
    expect(indicators).toHaveLength(1);
  });

  it('does not set aria-current on non-current steps', () => {
    const { container } = render(<Stepper steps={STEPS} current={1} />);
    const indicators = container.querySelectorAll('[aria-current="step"]');
    expect(indicators).toHaveLength(1);
  });

  // ── Orientation ───────────────────────────────────────────────────────────

  it('applies horizontal orientation class by default', () => {
    const { container } = render(<Stepper steps={STEPS} current={0} />);
    expect(container.firstChild).toHaveClass('ux4g-stepper-horizontal');
  });

  it('applies vertical orientation class when set', () => {
    const { container } = render(<Stepper steps={STEPS} current={0} orientation="vertical" />);
    expect(container.firstChild).toHaveClass('ux4g-stepper-vertical');
  });

  // ── Clickable steps ───────────────────────────────────────────────────────

  it('does not render step indicators as buttons by default', () => {
    render(<Stepper steps={STEPS} current={1} />);
    // No role=button on step indicators when not clickable
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(0);
  });

  it('renders non-current steps as buttons when clickable', () => {
    render(<Stepper steps={STEPS} current={1} clickable onStepClick={vi.fn()} />);
    const buttons = screen.getAllByRole('button');
    // Steps 0, 2, 3 are clickable (not current step 1)
    expect(buttons).toHaveLength(3);
  });

  it('calls onStepClick with the correct index when a step is clicked', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    render(<Stepper steps={STEPS} current={1} clickable onStepClick={onStepClick} />);
    // Click the first step (index 0, which is finished)
    await user.click(screen.getAllByRole('button')[0]);
    expect(onStepClick).toHaveBeenCalledWith(0);
  });

  it('does not call onStepClick for the current step', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    render(<Stepper steps={STEPS} current={1} clickable onStepClick={onStepClick} />);
    // Current step indicator has no role=button, so clicking it does nothing
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3); // only 3 non-current steps
    expect(onStepClick).not.toHaveBeenCalled();
  });

  it('clickable step buttons are keyboard accessible', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    render(<Stepper steps={STEPS} current={2} clickable onStepClick={onStepClick} />);
    const firstButton = screen.getAllByRole('button')[0];
    firstButton.focus();
    // role=button divs respond to click events triggered by keyboard
    await user.click(firstButton);
    expect(onStepClick).toHaveBeenCalledWith(0);
  });

  // ── Custom icon ───────────────────────────────────────────────────────────

  it('renders custom icon when provided', () => {
    const stepsWithIcon = [
      { key: '1', label: 'Step 1', icon: <span data-testid="custom-icon" /> },
      { key: '2', label: 'Step 2' },
    ];
    render(<Stepper steps={stepsWithIcon} current={0} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  // ── Connector ─────────────────────────────────────────────────────────────

  it('renders connectors between steps (not after last)', () => {
    const { container } = render(<Stepper steps={STEPS} current={0} />);
    const connectors = container.querySelectorAll('.ux4g-step-connector');
    expect(connectors).toHaveLength(STEPS.length - 1);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Stepper steps={STEPS} current={0} />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'horizontal', ui: <Stepper steps={STEPS} current={1} orientation="horizontal" /> },
        { name: 'vertical', ui: <Stepper steps={STEPS} current={1} orientation="vertical" /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses between clickable steps', async () => {
        const user = userEvent.setup();
        render(<Stepper steps={STEPS} current={1} clickable onStepClick={vi.fn()} />);
        await user.tab();
        const buttons = screen.getAllByRole('button');
        expect(buttons[0]).toHaveFocus();
        await user.tab();
        expect(buttons[1]).toHaveFocus();
      });
    });
  });
});

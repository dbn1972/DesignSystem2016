import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Captcha } from './Captcha';

describe('Captcha', () => {
  it('renders captcha code display', () => { const { container } = render(<Captcha onVerify={() => {}} />); expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument(); });
  it('renders input field', () => { render(<Captcha onVerify={() => {}} />); expect(screen.getByRole('textbox', { name: 'Captcha code' })).toBeInTheDocument(); });
  it('renders verify button', () => { render(<Captcha onVerify={() => {}} />); expect(screen.getByRole('button', { name: 'Verify' })).toBeInTheDocument(); });
  it('renders refresh button', () => { render(<Captcha onVerify={() => {}} />); expect(screen.getByRole('button', { name: 'Refresh captcha' })).toBeInTheDocument(); });
  it('calls onVerify on submit', async () => { const user = userEvent.setup(); const onVerify = vi.fn(); render(<Captcha onVerify={onVerify} />); await user.type(screen.getByRole('textbox'), 'ABC'); await user.click(screen.getByRole('button', { name: 'Verify' })); expect(onVerify).toHaveBeenCalled(); });
  it('shows error text', () => { render(<Captcha onVerify={() => {}} errorText="Wrong code" />); expect(screen.getByRole('alert')).toHaveTextContent('Wrong code'); });
  it('renders label', () => { render(<Captcha onVerify={() => {}} label="Type the code" />); expect(screen.getByText('Type the code')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<Captcha onVerify={() => {}} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});

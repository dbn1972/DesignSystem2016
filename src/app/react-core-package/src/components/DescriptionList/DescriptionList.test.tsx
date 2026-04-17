import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DescriptionList } from './DescriptionList';

const items = [{ term: 'Name', description: 'Rahul Kumar' }, { term: 'Status', description: 'Active' }];

describe('DescriptionList', () => {
  it('renders terms', () => { render(<DescriptionList items={items} />); expect(screen.getByText('Name')).toBeInTheDocument(); });
  it('renders descriptions', () => { render(<DescriptionList items={items} />); expect(screen.getByText('Rahul Kumar')).toBeInTheDocument(); });
  it('renders as dl element', () => { const { container } = render(<DescriptionList items={items} />); expect(container.querySelector('dl')).toBeInTheDocument(); });
  it('renders dt and dd', () => { const { container } = render(<DescriptionList items={items} />); expect(container.querySelectorAll('dt').length).toBe(2); expect(container.querySelectorAll('dd').length).toBe(2); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDListElement>(); render(<DescriptionList items={items} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDListElement); });
});

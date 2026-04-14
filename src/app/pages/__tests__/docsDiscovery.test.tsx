import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Documentation from '../Documentation';
import ResourcesHub from '../ResourcesHub';

describe('docs discovery', () => {
  it('surfaces Angular and Web Components docs from the documentation hub', () => {
    render(
      <MemoryRouter>
        <Documentation />
      </MemoryRouter>
    );

    expect(linkByHref('/api-reference')).toBeTruthy();
    expect(linkByHref('/resources/angular-core')).toBeTruthy();
    expect(linkByHref('/resources/angular-patterns')).toBeTruthy();
    expect(linkByHref('/resources/web-components')).toBeTruthy();
  });

  it('surfaces Angular and Web Components docs from the resources hub', () => {
    render(
      <MemoryRouter>
        <ResourcesHub />
      </MemoryRouter>
    );

    expect(linkByHref('/resources/angular-core')).toBeTruthy();
    expect(linkByHref('/resources/angular-patterns')).toBeTruthy();
    expect(linkByHref('/resources/web-components')).toBeTruthy();
  });
});

function linkByHref(href: string) {
  return screen.getAllByRole('link').find((link) => link.getAttribute('href') === href);
}

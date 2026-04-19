import type { Preview } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import '../../tokens-package/dist/tokens.css';
import '../../styles-package/dist/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    layout: 'centered',
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components'],
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '900px',
          },
        },
      },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#f8fafc' },
        { name: 'surface', value: '#ffffff' },
        { name: 'slate', value: '#0f172a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ minHeight: '100vh', padding: '2rem', background: '#f8fafc' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default preview;

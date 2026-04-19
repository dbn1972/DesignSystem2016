import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: './',
      resolve: {
        alias: {
          '@ux4g/react-core': path.resolve(__dirname, '../src/index.ts'),
          '@ux4g/tokens/css': path.resolve(__dirname, '../../tokens-package/dist/tokens.css'),
          '@ux4g/styles': path.resolve(__dirname, '../../styles-package/dist/index.css'),
          '@ux4g/styles/base': path.resolve(__dirname, '../../styles-package/src/base/index.css'),
          '@ux4g/styles/utilities': path.resolve(__dirname, '../../styles-package/src/utilities/index.css'),
          '@ux4g/styles/components': path.resolve(__dirname, '../../styles-package/src/components/index.css'),
        },
      },
    });
  },
};

export default config;

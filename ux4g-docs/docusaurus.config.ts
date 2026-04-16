import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UX4G Design System',
  tagline: 'Indian Government Design System - Building accessible digital services',
  favicon: 'img/favicon.ico',

  url: 'https://dbn1972.github.io',
  baseUrl: '/DesignSystem2016/',

  organizationName: 'dbn1972',
  projectName: 'DesignSystem2016',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      hi: {
        label: 'हिन्दी',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dbn1972/DesignSystem2016/tree/main/ux4g-docs/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ux4g-social-card.png',
    navbar: {
      title: 'UX4G',
      logo: {
        alt: 'UX4G Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/dbn1972/DesignSystem2016',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Components',
              to: '/components',
            },
            {
              label: 'Patterns',
              to: '/patterns',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Design Tokens',
              to: '/foundations/design-tokens',
            },
            {
              label: 'Accessibility',
              to: '/guidelines/accessibility',
            },
            {
              label: 'Storybook',
              href: '/storybook',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dbn1972/DesignSystem2016',
            },
            {
              label: 'Contribute',
              to: '/contributing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UX4G Design System. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'tsx', 'jsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

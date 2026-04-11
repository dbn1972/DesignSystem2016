import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/browser-support',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/design-principles',
        'foundations/design-tokens',
        'foundations/colors',
        'foundations/typography',
        'foundations/spacing',
        'foundations/icons',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'category',
          label: 'Form Components',
          items: [
            'components/button',
            'components/input',
            'components/checkbox',
            'components/radio',
            'components/select',
            'components/textarea',
            'components/field',
            'components/label',
          ],
        },
        {
          type: 'category',
          label: 'Feedback Components',
          items: [
            'components/alert',
            'components/toast',
            'components/progress',
            'components/spinner',
          ],
        },
        {
          type: 'category',
          label: 'Data Display',
          items: [
            'components/table',
            'components/card',
            'components/badge',
            'components/avatar',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'components/breadcrumb',
            'components/tabs',
            'components/pagination',
            'components/sidebar',
          ],
        },
        {
          type: 'category',
          label: 'Overlays',
          items: [
            'components/dialog',
            'components/drawer',
            'components/tooltip',
            'components/popover',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      items: [
        'patterns/form-validation',
        'patterns/data-tables',
        'patterns/authentication',
        'patterns/error-handling',
        'patterns/government-ids',
        'patterns/multilingual',
      ],
    },
    {
      type: 'category',
      label: 'Guidelines',
      items: [
        'guidelines/accessibility',
        'guidelines/writing-style',
        'guidelines/responsive-design',
        'guidelines/performance',
        'guidelines/security',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/faqs',
        'resources/changelog',
        'resources/roadmap',
        'resources/contributing',
      ],
    },
  ],
};

export default sidebars;

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
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/overview',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/design-tokens',
        'foundations/accessibility',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      items: [
        'patterns/overview',
      ],
    },
    {
      type: 'category',
      label: 'Guidelines',
      items: [
        'guidelines/contributing',
        'guidelines/architecture',
      ],
    },
  ],
};

export default sidebars;

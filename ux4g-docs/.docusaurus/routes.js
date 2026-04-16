import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/DesignSystem2016/',
    component: ComponentCreator('/DesignSystem2016/', 'eb1'),
    routes: [
      {
        path: '/DesignSystem2016/',
        component: ComponentCreator('/DesignSystem2016/', '083'),
        routes: [
          {
            path: '/DesignSystem2016/',
            component: ComponentCreator('/DesignSystem2016/', '615'),
            routes: [
              {
                path: '/DesignSystem2016/components/overview',
                component: ComponentCreator('/DesignSystem2016/components/overview', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/foundations/accessibility',
                component: ComponentCreator('/DesignSystem2016/foundations/accessibility', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/foundations/design-tokens',
                component: ComponentCreator('/DesignSystem2016/foundations/design-tokens', 'e87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/getting-started/installation',
                component: ComponentCreator('/DesignSystem2016/getting-started/installation', 'c5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/getting-started/introduction',
                component: ComponentCreator('/DesignSystem2016/getting-started/introduction', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/getting-started/quick-start',
                component: ComponentCreator('/DesignSystem2016/getting-started/quick-start', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/guidelines/architecture',
                component: ComponentCreator('/DesignSystem2016/guidelines/architecture', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/guidelines/contributing',
                component: ComponentCreator('/DesignSystem2016/guidelines/contributing', 'e68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DesignSystem2016/patterns/overview',
                component: ComponentCreator('/DesignSystem2016/patterns/overview', 'd67'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

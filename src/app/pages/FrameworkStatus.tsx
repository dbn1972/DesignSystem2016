import React from 'react';
import { Check, Clock, AlertCircle, Code } from 'lucide-react';
import { Link } from 'react-router';

export default function FrameworkStatus() {
  const angularInProgress = ['Button', 'Input', 'Checkbox', 'Radio'];
  const angularPlanned = [
    'Select', 'Textarea', 'Label', 'Field', 'Alert', 'Card', 'Table', 'Dialog',
    'Badge', 'Tabs', 'Pagination', 'Breadcrumb'
  ];

  const componentsByCategory = [
    {
      category: 'Form Elements',
      components: [
        { name: 'Button', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Input', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Checkbox', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Radio', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Switch', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Select', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Textarea', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Autocomplete', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Segmented Control', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Date Picker', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'File Upload', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'OTP Input', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Aadhaar Input', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'PAN Card Input', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Address Autocomplete India', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'CAPTCHA', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    },
    {
      category: 'Navigation',
      components: [
        { name: 'Header', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Footer', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Breadcrumb', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Tabs', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Pagination', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Menu', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Dropdown', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Drawer', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Back to Top', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Stepper', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    },
    {
      category: 'Feedback',
      components: [
        { name: 'Alert', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Toast', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Badge', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Progress', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Spinner', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Modal', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Dialog', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Skeleton', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Popover', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Feedback Rating Widget', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    },
    {
      category: 'Data Display',
      components: [
        { name: 'Table', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Card', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'List', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Accordion', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Tooltip', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Avatar', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Tag', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Timeline', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Statistic', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Description List', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Empty State', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Code Block', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Tree View', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Application Tracker', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Data Grid', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Document Viewer', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Chart Library', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Calendar Scheduler', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'QR Code', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    },
    {
      category: 'Layout',
      components: [
        { name: 'Container', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Grid', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Stack', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Divider', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Spacer', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Flex', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Center', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Aspect Ratio', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Show Hide', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Section', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    },
    {
      category: 'Advanced Components',
      components: [
        { name: 'Digital Signature', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Map Location Picker', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Language Selector', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Payment Gateway', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Chatbot', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Rich Text Editor', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Form Builder', react: 'ready', angular: 'ready', web: 'ready' },
        { name: 'Video Player', react: 'ready', angular: 'ready', web: 'ready' },
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
            <Check size={12} />
            Ready
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
            <Clock size={12} />
            In Progress
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
            <AlertCircle size={12} />
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Framework Support Status</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            All 73 UX4G components are production-ready across React, Angular, and Web Components (framework-agnostic).
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* React Status */}
            <div className="bg-card rounded-xl p-6 border-2 border-green-200 dark:border-green-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">React</h2>
                  <p className="text-sm text-green-600 font-medium">Production Ready</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Components</span>
                  <span className="font-bold text-2xl text-foreground">73</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-semibold text-foreground">v1.0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                    <Check size={14} />
                    100% Complete
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  All 73 components are production-ready with full documentation, accessibility support, and design token integration.
                </p>
              </div>
            </div>

            {/* Angular Status */}
            <div className="bg-card rounded-xl p-6 border-2 border-green-200 dark:border-green-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Angular</h2>
                  <p className="text-sm text-green-600 font-medium">Production Ready</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Components</span>
                  <span className="font-bold text-2xl text-foreground">73</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-semibold text-foreground">v1.0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                    <Check size={14} />
                    100% Complete
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  All 73 components are production-ready with complete feature parity with React implementation.
                </p>
              </div>
            </div>

            {/* Web Components Status */}
            <div className="bg-card rounded-xl p-6 border-2 border-green-200 dark:border-green-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Web Components</h2>
                  <p className="text-sm text-green-600 font-medium">Production Ready</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Components</span>
                  <span className="font-bold text-2xl text-foreground">73</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-semibold text-foreground">v1.0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                    <Check size={14} />
                    100% Complete
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Framework-agnostic components for vanilla HTML, React, Angular, Vue, and more. All 73 components are production-ready.
                </p>
                <Link
                  to="/web-components"
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-300 font-medium hover:underline"
                >
                  View →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Status Matrix */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Component Status by Category</h2>
            <p className="text-muted-foreground">
              Detailed breakdown of component availability across frameworks.
            </p>
          </div>

          <div className="space-y-8">
            {componentsByCategory.map((category, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="bg-background px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.components.length} components
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-background border-b border-border">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Component
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          React
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Angular
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Web
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {category.components.map((component, compIdx) => (
                        <tr key={compIdx} className="hover:bg-background transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">
                            {component.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {getStatusBadge(component.react)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {getStatusBadge(component.angular)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {getStatusBadge(component.web)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Status Legend</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('ready')}
                <span className="font-semibold text-foreground">Production Ready</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fully implemented, tested, documented, and available for production use.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('in-progress')}
                <span className="font-semibold text-foreground">In Progress</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently under active development. Alpha/beta versions may be available.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('planned')}
                <span className="font-semibold text-foreground">Planned</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Scheduled for future implementation. See roadmap for timeline details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Get Started with UX4G</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">React Developers</h4>
                <p className="text-blue-100 mb-3">
                  Start using production-ready components today with full TypeScript support and comprehensive documentation.
                </p>
                <Link
                  to="/resources/component-specs"
                  className="inline-block px-4 py-2 bg-card text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:bg-blue-900/20 transition-colors"
                >
                  View React Docs
                </Link>
              </div>
              <div>
                <h4 className="font-bold mb-2">Angular Developers</h4>
                <p className="text-blue-100 mb-3">
                  Review the Angular package docs, component API guidance, and parity notes.
                </p>
                <Link
                  to="/resources/angular-core"
                  className="inline-block px-4 py-2 bg-card text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:bg-blue-900/20 transition-colors"
                >
                  View Angular Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

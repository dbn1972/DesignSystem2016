import React from 'react';
import { Check, Clock, AlertCircle } from 'lucide-react';

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
        { name: 'Button', react: 'ready', angular: 'ready' },
        { name: 'Input', react: 'ready', angular: 'ready' },
        { name: 'Checkbox', react: 'ready', angular: 'ready' },
        { name: 'Radio', react: 'ready', angular: 'ready' },
        { name: 'Switch', react: 'ready', angular: 'planned' },
        { name: 'Select', react: 'ready', angular: 'ready' },
        { name: 'Textarea', react: 'ready', angular: 'ready' },
        { name: 'Autocomplete', react: 'ready', angular: 'planned' },
        { name: 'Segmented Control', react: 'ready', angular: 'planned' },
        { name: 'Date Picker', react: 'ready', angular: 'planned' },
        { name: 'File Upload', react: 'ready', angular: 'planned' },
        { name: 'OTP Input', react: 'ready', angular: 'planned' },
        { name: 'Aadhaar Input', react: 'ready', angular: 'planned' },
        { name: 'PAN Card Input', react: 'ready', angular: 'planned' },
        { name: 'Address Autocomplete India', react: 'ready', angular: 'planned' },
        { name: 'CAPTCHA', react: 'ready', angular: 'planned' },
      ]
    },
    {
      category: 'Navigation',
      components: [
        { name: 'Header', react: 'ready', angular: 'planned' },
        { name: 'Footer', react: 'ready', angular: 'planned' },
        { name: 'Breadcrumb', react: 'ready', angular: 'ready' },
        { name: 'Tabs', react: 'ready', angular: 'ready' },
        { name: 'Pagination', react: 'ready', angular: 'ready' },
        { name: 'Menu', react: 'ready', angular: 'planned' },
        { name: 'Dropdown', react: 'ready', angular: 'planned' },
        { name: 'Drawer', react: 'ready', angular: 'planned' },
        { name: 'Back to Top', react: 'ready', angular: 'planned' },
        { name: 'Stepper', react: 'ready', angular: 'planned' },
      ]
    },
    {
      category: 'Feedback',
      components: [
        { name: 'Alert', react: 'ready', angular: 'ready' },
        { name: 'Toast', react: 'ready', angular: 'planned' },
        { name: 'Badge', react: 'ready', angular: 'ready' },
        { name: 'Progress', react: 'ready', angular: 'planned' },
        { name: 'Spinner', react: 'ready', angular: 'planned' },
        { name: 'Modal', react: 'ready', angular: 'planned' },
        { name: 'Dialog', react: 'ready', angular: 'ready' },
        { name: 'Skeleton', react: 'ready', angular: 'planned' },
        { name: 'Popover', react: 'ready', angular: 'planned' },
        { name: 'Feedback Rating Widget', react: 'ready', angular: 'planned' },
      ]
    },
    {
      category: 'Data Display',
      components: [
        { name: 'Table', react: 'ready', angular: 'ready' },
        { name: 'Card', react: 'ready', angular: 'ready' },
        { name: 'List', react: 'ready', angular: 'planned' },
        { name: 'Accordion', react: 'ready', angular: 'planned' },
        { name: 'Tooltip', react: 'ready', angular: 'planned' },
        { name: 'Avatar', react: 'ready', angular: 'planned' },
        { name: 'Tag', react: 'ready', angular: 'planned' },
        { name: 'Timeline', react: 'ready', angular: 'planned' },
        { name: 'Statistic', react: 'ready', angular: 'planned' },
        { name: 'Description List', react: 'ready', angular: 'planned' },
        { name: 'Empty State', react: 'ready', angular: 'planned' },
        { name: 'Code Block', react: 'ready', angular: 'planned' },
        { name: 'Tree View', react: 'ready', angular: 'planned' },
        { name: 'Application Tracker', react: 'ready', angular: 'planned' },
        { name: 'Data Grid', react: 'ready', angular: 'planned' },
        { name: 'Document Viewer', react: 'ready', angular: 'planned' },
        { name: 'Chart Library', react: 'ready', angular: 'planned' },
        { name: 'Calendar Scheduler', react: 'ready', angular: 'planned' },
        { name: 'QR Code', react: 'ready', angular: 'planned' },
      ]
    },
    {
      category: 'Layout',
      components: [
        { name: 'Container', react: 'ready', angular: 'planned' },
        { name: 'Grid', react: 'ready', angular: 'planned' },
        { name: 'Stack', react: 'ready', angular: 'planned' },
        { name: 'Divider', react: 'ready', angular: 'planned' },
        { name: 'Spacer', react: 'ready', angular: 'planned' },
        { name: 'Flex', react: 'ready', angular: 'planned' },
        { name: 'Center', react: 'ready', angular: 'planned' },
        { name: 'Aspect Ratio', react: 'ready', angular: 'planned' },
        { name: 'Show Hide', react: 'ready', angular: 'planned' },
        { name: 'Section', react: 'ready', angular: 'planned' },
      ]
    },
    {
      category: 'Advanced Components',
      components: [
        { name: 'Digital Signature', react: 'ready', angular: 'planned' },
        { name: 'Map Location Picker', react: 'ready', angular: 'planned' },
        { name: 'Language Selector', react: 'ready', angular: 'planned' },
        { name: 'Payment Gateway', react: 'ready', angular: 'planned' },
        { name: 'Chatbot', react: 'ready', angular: 'planned' },
        { name: 'Rich Text Editor', react: 'ready', angular: 'planned' },
        { name: 'Form Builder', react: 'ready', angular: 'planned' },
        { name: 'Video Player', react: 'ready', angular: 'planned' },
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            <Check size={12} />
            Ready
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            <Clock size={12} />
            In Progress
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
            <AlertCircle size={12} />
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Framework Support Status</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Track the availability of UX4G components across React and Angular frameworks.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* React Status */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">React</h2>
                  <p className="text-sm text-green-600 font-medium">Production Ready</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Components</span>
                  <span className="font-bold text-2xl text-gray-900">73</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Version</span>
                  <span className="font-semibold text-gray-900">v1.0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    <Check size={14} />
                    100% Complete
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  All 73 components are production-ready with full documentation, accessibility support, and design token integration.
                </p>
              </div>
            </div>

            {/* Angular Status */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Angular</h2>
                  <p className="text-sm text-green-600 font-medium">Phase 1 Complete</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Phase 1 Complete</span>
                  <span className="font-bold text-2xl text-green-600">16</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Planned (Q3 2026)</span>
                  <span className="font-bold text-gray-900">27</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Version</span>
                  <span className="font-semibold text-gray-900">v0.5.0 (Beta)</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  Following a phased approach with Phase 1 targeting 16 core components by June 2026.
                </p>
                <a
                  href="/workspaces/default/code/src/app/angular-core-package/ROADMAP.md"
                  target="_blank"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  View Full Roadmap →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Status Matrix */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Component Status by Category</h2>
            <p className="text-gray-600">
              Detailed breakdown of component availability across frameworks.
            </p>
          </div>

          <div className="space-y-8">
            {componentsByCategory.map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.components.length} components
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Component
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          React
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Angular
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {category.components.map((component, compIdx) => (
                        <tr key={compIdx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {component.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {getStatusBadge(component.react)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {getStatusBadge(component.angular)}
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
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Status Legend</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('ready')}
                <span className="font-semibold text-gray-900">Production Ready</span>
              </div>
              <p className="text-sm text-gray-600">
                Fully implemented, tested, documented, and available for production use.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('in-progress')}
                <span className="font-semibold text-gray-900">In Progress</span>
              </div>
              <p className="text-sm text-gray-600">
                Currently under active development. Alpha/beta versions may be available.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                {getStatusBadge('planned')}
                <span className="font-semibold text-gray-900">Planned</span>
              </div>
              <p className="text-sm text-gray-600">
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
                <a
                  href="/workspaces/default/code/src/app/react-core-package/README.md"
                  target="_blank"
                  className="inline-block px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View React Docs
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-2">Angular Developers</h4>
                <p className="text-blue-100 mb-3">
                  Follow our development progress and contribute to the Angular implementation roadmap.
                </p>
                <a
                  href="/workspaces/default/code/src/app/angular-core-package/ROADMAP.md"
                  target="_blank"
                  className="inline-block px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Angular Roadmap
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

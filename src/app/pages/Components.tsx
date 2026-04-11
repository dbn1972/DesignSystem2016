import React from 'react';
import { CheckCircle, Code, Package, Palette, Shield, Download, Upload, Search, ChevronDown, X, Info, AlertCircle, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router';

export default function Components() {
  const [showAlert, setShowAlert] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");
  const [switchState, setSwitchState] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");

  const componentCategories = [
    {
      name: "Form Elements",
      components: ["Button", "Input", "Checkbox", "Radio", "Switch", "Select", "Textarea", "Autocomplete", "Segmented Control", "Date Picker", "File Upload", "OTP Input", "Aadhaar Input", "PAN Card Input", "Address Autocomplete India", "CAPTCHA"]
    },
    {
      name: "Navigation",
      components: ["Header", "Footer", "Breadcrumb", "Tabs", "Pagination", "Menu", "Dropdown", "Drawer", "Back to Top", "Stepper"]
    },
    {
      name: "Feedback",
      components: ["Alert", "Toast", "Badge", "Progress", "Spinner", "Modal", "Dialog", "Skeleton", "Popover", "Feedback Rating Widget"]
    },
    {
      name: "Data Display",
      components: ["Table", "Card", "List", "Accordion", "Tooltip", "Avatar", "Tag", "Timeline", "Statistic", "Description List", "Empty State", "Code Block", "Tree View", "Application Tracker", "Data Grid", "Document Viewer", "Chart Library", "Calendar Scheduler", "QR Code"]
    },
    {
      name: "Layout",
      components: ["Container", "Grid", "Stack", "Divider", "Spacer", "Flex", "Center", "Aspect Ratio", "Show Hide", "Section"]
    },
    {
      name: "Advanced Components",
      components: ["Digital Signature", "Map Location Picker", "Language Selector", "Payment Gateway", "Chatbot", "Rich Text Editor", "Form Builder", "Video Player"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Component Library</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Production-ready, accessible components for React and Angular with comprehensive 
            documentation and implementation guidance.
          </p>
        </div>
      </section>

      {/* Framework Status */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Multi-Framework Support</h2>
              <p className="text-gray-700 mb-4">
                UX4G components are available for both React and Angular frameworks. Choose the implementation that fits your project.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-900">React</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Production Ready</span>
                  </div>
                  <p className="text-sm text-gray-600">73/73 components available - v1.0.0</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-900">Angular</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Phase 1 Complete</span>
                  </div>
                  <p className="text-sm text-gray-600">16/73 components (Phase 1: 100%) - v0.5.0</p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/framework-status"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  View Framework Support Status →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Component Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#000080] transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.components.map((component, idx) => {
                    // Create URL-friendly slug from component name
                    const componentSlug = component.toLowerCase().replace(/\s+/g, '-');
                    // Check if documentation page exists (only components with actual pages)
                    const hasDocPage = [
                      // Form Elements (16)
                      'button', 'input', 'checkbox', 'radio', 'switch', 'select', 'textarea',
                      'autocomplete', 'segmented-control', 'date-picker', 'file-upload',
                      'otp-input', 'aadhaar-input', 'pan-card-input', 'address-autocomplete-india',
                      'captcha',
                      // Navigation (10)
                      'header', 'footer', 'breadcrumb', 'tabs', 'pagination', 'menu',
                      'dropdown', 'drawer', 'back-to-top', 'stepper',
                      // Feedback (10)
                      'alert', 'toast', 'badge', 'progress', 'spinner', 'modal',
                      'dialog', 'skeleton', 'popover', 'feedback-rating-widget',
                      // Data Display (19)
                      'table', 'card', 'list', 'accordion', 'tooltip', 'avatar',
                      'tag', 'timeline', 'statistic', 'description-list', 'empty-state',
                      'code-block', 'tree-view', 'application-tracker', 'data-grid',
                      'document-viewer', 'chart-library', 'calendar-scheduler', 'qr-code',
                      // Layout (10)
                      'container', 'grid', 'stack', 'divider', 'spacer',
                      'flex', 'center', 'aspect-ratio', 'show-hide', 'section',
                      // Advanced Components (8)
                      'digital-signature', 'map-location-picker', 'language-selector',
                      'payment-gateway', 'chatbot', 'rich-text-editor', 'form-builder',
                      'video-player'
                    ].includes(componentSlug);
                    
                    return (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle size={16} className="text-[#138808]" />
                        {hasDocPage ? (
                          <Link 
                            to={`/components/${componentSlug}`}
                            className="hover:text-[#005196] hover:underline transition-colors"
                          >
                            {component}
                          </Link>
                        ) : (
                          <span>{component}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Buttons</h2>
            <p className="text-lg text-gray-600">
              Primary action elements with multiple variants and states.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Primary</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors font-semibold">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors font-semibold flex items-center gap-2">
                    <Download size={20} />
                    With Icon
                  </button>
                  <button className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-semibold" disabled>
                    Disabled
                  </button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Secondary</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-[#000080] border-2 border-[#000080] rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-white text-[#000080] border-2 border-[#000080] rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center gap-2">
                    <Upload size={20} />
                    With Icon
                  </button>
                </div>
              </div>

              {/* Success/Danger Buttons */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Contextual</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#138808] text-white rounded-lg hover:bg-[#0f6806] transition-colors font-semibold">
                    Success
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Danger
                  </button>
                  <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                    Warning
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-3 py-1.5 bg-[#000080] text-white rounded text-sm hover:bg-[#000060] transition-colors">
                    Small
                  </button>
                  <button className="px-6 py-3 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors font-semibold">
                    Medium
                  </button>
                  <button className="px-8 py-4 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors font-semibold text-lg">
                    Large
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Form Elements</h2>
            <p className="text-lg text-gray-600">
              Accessible form components with built-in validation states.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="space-y-8">
              {/* Text Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Text Input
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter text here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                />
                <p className="mt-2 text-sm text-gray-500">Helper text goes here</p>
              </div>

              {/* Search Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Input
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Select */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Dropdown
                </label>
                <div className="relative">
                  <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Checkbox */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkboxState}
                    onChange={(e) => setCheckboxState(e.target.checked)}
                    className="w-5 h-5 border-2 border-gray-300 rounded text-[#000080] focus:ring-2 focus:ring-[#000080] cursor-pointer"
                  />
                  <span className="text-gray-700">Checkbox Label</span>
                </label>
              </div>

              {/* Radio Group */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Radio Group
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-group"
                      value="option1"
                      checked={radioValue === "option1"}
                      onChange={(e) => setRadioValue(e.target.value)}
                      className="w-5 h-5 border-2 border-gray-300 text-[#000080] focus:ring-2 focus:ring-[#000080] cursor-pointer"
                    />
                    <span className="text-gray-700">Option 1</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-group"
                      value="option2"
                      checked={radioValue === "option2"}
                      onChange={(e) => setRadioValue(e.target.value)}
                      className="w-5 h-5 border-2 border-gray-300 text-[#000080] focus:ring-2 focus:ring-[#000080] cursor-pointer"
                    />
                    <span className="text-gray-700">Option 2</span>
                  </label>
                </div>
              </div>

              {/* Switch */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <button
                    onClick={() => setSwitchState(!switchState)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      switchState ? "bg-[#138808]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        switchState ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                  <span className="text-gray-700">Toggle Switch</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Alerts & Notifications</h2>
            <p className="text-lg text-gray-600">
              Feedback components to communicate important information to users.
            </p>
          </div>

          <div className="space-y-4">
            {/* Success Alert */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="text-[#138808] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Success</h3>
                <p className="text-gray-700">Your action was completed successfully.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Info Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <Info className="text-[#000080] flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Information</h3>
                <p className="text-gray-700">Here is some important information for you.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Warning Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Warning</h3>
                <p className="text-gray-700">Please review this information carefully.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Error Alert */}
            {showAlert && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Error</h3>
                  <p className="text-gray-700">There was a problem processing your request.</p>
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cards</h2>
            <p className="text-lg text-gray-600">
              Flexible containers for grouping related information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Card Title</h3>
              <p className="text-gray-600 mb-4">
                This is a basic card component with a title, description, and action button.
              </p>
              <button className="px-4 py-2 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors text-sm font-semibold">
                Learn More
              </button>
            </div>

            {/* Icon Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#FF9933] rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">With Icon</h3>
              <p className="text-gray-600 mb-4">
                Card component featuring an icon for visual enhancement.
              </p>
              <button className="text-[#000080] hover:text-[#000060] transition-colors text-sm font-semibold">
                View Details →
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#000080] to-[#000050] rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Bell size={24} />
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                  Active
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">1,234</div>
              <p className="text-blue-100">Total Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Badges</h2>
            <p className="text-lg text-gray-600">
              Small status indicators and labels.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-[#000080] text-white rounded-full text-sm font-semibold">
                Primary
              </span>
              <span className="px-3 py-1 bg-[#138808] text-white rounded-full text-sm font-semibold">
                Success
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
                Warning
              </span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
                Error
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Neutral
              </span>
              <span className="px-3 py-1 bg-[#FF9933] text-white rounded-full text-sm font-semibold">
                Saffron
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Note */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#000080] rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accessibility Compliance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All components in the UX4G Design System are built with WCAG 2.1 AA compliance 
                  in mind. This includes proper color contrast, keyboard navigation support, 
                  screen reader compatibility, and focus management. Each component includes 
                  detailed accessibility documentation and testing guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
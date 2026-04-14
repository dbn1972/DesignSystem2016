import { Link } from "react-router";
import { Package, Rocket, Code, Figma, BookOpen, Download, CheckCircle, ArrowRight, Globe, Workflow } from "lucide-react";

export default function ResourcesHub() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-orange-900/20 dark:via-gray-800 dark:to-yellow-900/20 border-b-2 border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-border dark:border-gray-700 rounded flex items-center justify-center">
                <Package size={32} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Developer Tools</div>
                <h1 className="text-4xl font-bold text-foreground dark:text-gray-100">Resources</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
              Everything you need to start building with UX4G. Installation guides, starter kits,
              component specifications, and design tools to accelerate your development.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          <QuickLinkCard
            icon={<Rocket size={24} />}
            title="Getting Started"
            description="5-minute setup"
            path="/resources/getting-started"
            color="blue"
          />
          <QuickLinkCard
            icon={<Download size={24} />}
            title="Starter Kit"
            description="Production templates"
            path="/resources/starter-kit"
            color="green"
          />
          <QuickLinkCard
            icon={<Code size={24} />}
            title="Component Specs"
            description="React & Angular"
            path="/resources/component-specs"
            color="purple"
          />
          <QuickLinkCard
            icon={<Figma size={24} />}
            title="Figma Tools"
            description="Design files"
            path="/resources/figma"
            color="orange"
          />
          <QuickLinkCard
            icon={<Package size={24} />}
            title="Angular Core"
            description="Package docs"
            path="/docs/angular"
            color="blue"
          />
          <QuickLinkCard
            icon={<Workflow size={24} />}
            title="Angular Patterns"
            description="Service flows"
            path="/resources/angular-patterns"
            color="purple"
          />
          <QuickLinkCard
            icon={<Globe size={24} />}
            title="Web Components"
            description="Custom elements"
            path="/docs/web-components"
            color="green"
          />
        </div>

        {/* Main Resources */}
        <div className="space-y-8">
          
          {/* Getting Started */}
          <ResourceSection
            icon={<Rocket size={32} className="text-blue-600" />}
            title="Getting Started"
            description="Install and configure UX4G in your project"
            color="blue"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Installation Guide"
                description="Step-by-step guide to install UX4G in React or Angular projects"
                topics={["npm install", "Configuration", "Import components", "Theming setup"]}
                path="/resources/getting-started"
              />
              <ResourceItem
                title="Quick Start Tutorial"
                description="Build your first government service page in 10 minutes"
                topics={["Create page", "Add components", "Apply patterns", "Test accessibility"]}
                path="/resources/getting-started"
              />
              <ResourceItem
                title="Project Structure"
                description="Recommended folder structure and organization"
                topics={["Components folder", "Pages folder", "Services folder", "Content library"]}
                path="/resources/getting-started"
              />
            </div>
          </ResourceSection>

          {/* Starter Kit */}
          <ResourceSection
            icon={<Download size={32} className="text-green-600" />}
            title="Starter Kit"
            description="Production-ready code templates and examples"
            color="green"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>30+ reusable components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>8 common patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>45+ reference pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Mock API layer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Routing configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Content design system</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-3">Quick Start</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary dark:bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</div>
                    <div>
                      <p className="font-bold text-foreground dark:text-gray-100">Copy files</p>
                      <p className="text-muted-foreground dark:text-gray-400">Copy starter kit to your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary dark:bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</div>
                    <div>
                      <p className="font-bold text-foreground dark:text-gray-100">Install dependencies</p>
                      <p className="text-muted-foreground dark:text-gray-400">npm install react-router lucide-react</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary dark:bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</div>
                    <div>
                      <p className="font-bold text-foreground dark:text-gray-100">Start building</p>
                      <p className="text-muted-foreground dark:text-gray-400">Use components and patterns</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/resources/starter-kit"
                  className="block w-full mt-6 px-4 py-2 bg-primary dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700 text-white text-center font-bold rounded transition-colors"
                >
                  View Starter Kit →
                </Link>
              </div>
            </div>
          </ResourceSection>

          {/* Component Specifications */}
          <ResourceSection
            icon={<Code size={32} className="text-purple-600" />}
            title="Component Specifications"
            description="Framework-agnostic component APIs"
            color="purple"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Component-to-Code Mapping"
                description="Complete TypeScript interfaces for all 15+ components"
                topics={["React props", "Angular I/O", "Variants", "States"]}
                path="/resources/component-specs"
              />
              <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-3">Covered Components</h4>
                <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground dark:text-gray-300">
                  <ul className="space-y-1">
                    <li>• Button</li>
                    <li>• Form Field</li>
                    <li>• Input</li>
                    <li>• Select</li>
                    <li>• Checkbox</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Radio</li>
                    <li>• Alert</li>
                    <li>• Modal</li>
                    <li>• Tabs</li>
                    <li>• Badge</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Progress Steps</li>
                    <li>• Loading Spinner</li>
                    <li>• Card</li>
                    <li>• Breadcrumb</li>
                    <li>• Toast</li>
                  </ul>
                </div>
              </div>
            </div>
          </ResourceSection>

          {/* Figma Resources */}
          <ResourceSection
            icon={<Figma size={32} className="text-orange-600" />}
            title="Figma Resources"
            description="Design files and tools for designers"
            color="orange"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Design System Library"
                description="Complete Figma component library with variants and auto-layout"
                topics={["Components", "Patterns", "Templates", "Icons"]}
                path="/resources/figma"
              />
              <ResourceItem
                title="Design-to-Code Tools"
                description="Tools to convert Figma designs to production code"
                topics={["Component export", "Token sync", "Code generation"]}
                path="/resources/figma"
              />
              <ResourceItem
                title="Theming & Tokens"
                description="Design tokens for colors, typography, and spacing"
                topics={["Color tokens", "Typography scale", "Spacing system"]}
                path="/resources/figma"
              />
            </div>
          </ResourceSection>

          {/* Additional Resources */}
          <ResourceSection
            icon={<BookOpen size={32} className="text-muted-foreground" />}
            title="Additional Resources"
            description="Documentation and guides"
            color="gray"
          >
            <div className="grid grid-cols-2 gap-4">
              <Link to="/accessibility" className="p-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 hover:shadow-md transition-all">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">Accessibility Guide</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-300">WCAG 2.1 AA compliance guidelines</p>
              </Link>
              <Link to="/content-system" className="p-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 hover:shadow-md transition-all">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">Content Design System</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-300">Standardized labels and messages</p>
              </Link>
              <Link to="/patterns" className="p-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 hover:shadow-md transition-all">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">Pattern Documentation</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-300">Design pattern guidelines</p>
              </Link>
              <Link to="/governance" className="p-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 hover:shadow-md transition-all">
                <h4 className="font-bold text-foreground dark:text-gray-100 mb-1">Governance Guidelines</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-300">Adoption and compliance tracking</p>
              </Link>
            </div>
          </ResourceSection>

        </div>
      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function QuickLinkCard({ icon, title, description, path, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  color: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800 hover:border-green-500 dark:hover:border-green-500',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-500',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-800 hover:border-orange-500 dark:hover:border-orange-500'
  };

  return (
    <Link
      to={path}
      className={`${colorClasses[color as keyof typeof colorClasses]} border-2 rounded-lg p-6 hover:shadow-md transition-all group`}
    >
      <div className="mb-3 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-foreground dark:text-gray-100 mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-300">{description}</p>
    </Link>
  );
}

function ResourceSection({ icon, title, description, color, children }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-800',
    gray: 'bg-background dark:bg-gray-800 border-border dark:border-gray-700'
  };

  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} border-b-2 border-border dark:border-gray-700 p-6`}>
        <div className="flex items-center gap-4">
          <div>{icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-foreground dark:text-gray-100">{title}</h2>
            <p className="text-muted-foreground dark:text-gray-300 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function ResourceItem({ title, description, topics, path }: {
  title: string;
  description: string;
  topics: string[];
  path: string;
}) {
  return (
    <Link
      to={path}
      className="block p-4 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-bold text-foreground dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground dark:text-gray-300 mb-3">{description}</p>
        </div>
        <ArrowRight size={20} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400 flex-shrink-0 ml-4" />
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, i) => (
          <span key={i} className="text-xs text-muted-foreground dark:text-gray-400 bg-muted dark:bg-gray-700 px-2 py-1 rounded">
            {topic}
          </span>
        ))}
      </div>
    </Link>
  );
}

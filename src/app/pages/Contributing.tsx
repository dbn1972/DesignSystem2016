import { Users, GitBranch, Code, CheckCircle, AlertTriangle, FileText, MessageSquare, Heart, Zap, BookOpen, Target, Clock, Shield, Star } from "lucide-react";

export default function Contributing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Heart size={16} />
              <span>Contributing to UX4G</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Contributing Guidelines
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Welcome! We're excited that you're interested in contributing to the UX4G Design System.
              This guide will help you understand how to contribute effectively, whether you're fixing bugs,
              proposing new features, improving documentation, or enhancing existing components.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Open Source</div>
                <div className="text-blue-200 text-sm">MIT Licensed</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Community Driven</div>
                <div className="text-blue-200 text-sm">Contributors welcome</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">73 Components</div>
                <div className="text-blue-200 text-sm">And growing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        <GettingStartedSection />
        <TypesOfContributionsSection />
        <ContributionWorkflowSection />
        <DevelopmentGuidelinesSection />
        <CodeStandardsSection />
        <ComponentGuidelinesSection />
        <DocumentationStandardsSection />
        <SubmittingContributionsSection />
        <ReviewProcessSection />
        <CommunityGuidelinesSection />
        <LicenseAgreementSection />
        <RecognitionSection />
      </div>
    </div>
  );
}

function GettingStartedSection() {
  return (
    <section id="getting-started">
      <SectionHeader
        title="Getting Started"
        description="First steps to contributing to UX4G"
        icon={<BookOpen size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Before You Start</h3>
          <p className="text-sm text-gray-700 mb-4">
            Before making your first contribution, please ensure you:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span className="text-sm text-gray-700">Read our <a href="/code-of-conduct" className="text-blue-600 hover:underline">Code of Conduct</a></span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span className="text-sm text-gray-700">Review the <a href="/copyright" className="text-blue-600 hover:underline">License Agreement</a></span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span className="text-sm text-gray-700">Understand our <a href="/governance" className="text-blue-600 hover:underline">Governance Model</a></span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span className="text-sm text-gray-700">Set up your development environment</span>
            </div>
          </div>
        </div>

        {/* Quick Start Steps */}
        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b-2 border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 text-xl">Quick Start</h3>
          </div>

          <div className="p-8 space-y-6">
            <QuickStartStep
              number="1"
              title="Fork the Repository"
              description="Create your own fork of the UX4G repository on GitHub"
              code="# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/ux4g.git
cd ux4g"
            />

            <QuickStartStep
              number="2"
              title="Install Dependencies"
              description="Install all required packages using pnpm (our preferred package manager)"
              code="pnpm install"
            />

            <QuickStartStep
              number="3"
              title="Create a Branch"
              description="Create a new branch for your contribution"
              code="git checkout -b feature/your-feature-name"
            />

            <QuickStartStep
              number="4"
              title="Make Your Changes"
              description="Implement your feature, fix, or improvement"
              code="# Make your changes
# Test thoroughly
pnpm test"
            />

            <QuickStartStep
              number="5"
              title="Submit a Pull Request"
              description="Push your changes and create a pull request"
              code="git push origin feature/your-feature-name
# Then create PR on GitHub"
            />
          </div>
        </div>

        {/* Prerequisites */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Required Tools</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Code className="text-blue-600" size={16} />
                <span>Node.js 18+ and pnpm</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="text-blue-600" size={16} />
                <span>Git 2.30+</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="text-blue-600" size={16} />
                <span>Code editor (VS Code recommended)</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="text-blue-600" size={16} />
                <span>GitHub account</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Recommended Knowledge</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Star className="text-yellow-600" size={16} />
                <span>React and TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-600" size={16} />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-600" size={16} />
                <span>Accessibility (WCAG 2.1 AA)</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-600" size={16} />
                <span>Git workflow and GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStartStep({ number, title, description, code }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-[#000080] text-white rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <pre className="whitespace-pre-wrap">{code}</pre>
        </div>
      </div>
    </div>
  );
}

function TypesOfContributionsSection() {
  return (
    <section id="types-of-contributions">
      <SectionHeader
        title="Types of Contributions"
        description="Many ways to contribute to UX4G"
        icon={<Target size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <ContributionType
            icon={<Code className="text-blue-600" size={24} />}
            title="Code Contributions"
            description="Help build and improve components"
            examples={[
              'New components or patterns',
              'Bug fixes and patches',
              'Performance improvements',
              'Framework implementations (Angular, Vue)',
              'Accessibility enhancements',
              'Unit and integration tests'
            ]}
            difficulty="Medium to High"
            color="blue"
          />

          <ContributionType
            icon={<FileText className="text-green-600" size={24} />}
            title="Documentation"
            description="Improve guides and examples"
            examples={[
              'Usage examples and demos',
              'API documentation',
              'Tutorials and guides',
              'Translations to Indian languages',
              'Accessibility documentation',
              'Best practices guides'
            ]}
            difficulty="Low to Medium"
            color="green"
          />

          <ContributionType
            icon={<MessageSquare className="text-purple-600" size={24} />}
            title="Design & UX"
            description="Enhance visual design and usability"
            examples={[
              'Figma design improvements',
              'Design tokens and themes',
              'Icon design',
              'User experience research',
              'Usability testing',
              'Design system documentation'
            ]}
            difficulty="Medium"
            color="purple"
          />

          <ContributionType
            icon={<AlertTriangle className="text-orange-600" size={24} />}
            title="Issue Reporting"
            description="Report bugs and suggest features"
            examples={[
              'Bug reports with reproductions',
              'Feature requests',
              'Accessibility issues',
              'Security vulnerabilities',
              'Performance issues',
              'Documentation gaps'
            ]}
            difficulty="Low"
            color="orange"
          />

          <ContributionType
            icon={<Users className="text-pink-600" size={24} />}
            title="Community Support"
            description="Help other contributors and users"
            examples={[
              'Answer questions on GitHub',
              'Help with troubleshooting',
              'Review pull requests',
              'Mentor new contributors',
              'Organize community events',
              'Share use cases and examples'
            ]}
            difficulty="Low to Medium"
            color="pink"
          />

          <ContributionType
            icon={<Shield className="text-red-600" size={24} />}
            title="Quality Assurance"
            description="Test and validate components"
            examples={[
              'Browser compatibility testing',
              'Accessibility audits',
              'Performance testing',
              'Security reviews',
              'Regression testing',
              'Cross-platform validation'
            ]}
            difficulty="Medium"
            color="red"
          />
        </div>
      </div>
    </section>
  );
}

function ContributionType({ icon, title, description, examples, difficulty, color }: any) {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50',
    orange: 'border-orange-200 bg-orange-50',
    pink: 'border-pink-200 bg-pink-50',
    red: 'border-red-200 bg-red-50'
  };

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg overflow-hidden`}>
      <div className="bg-white border-b-2 border-gray-200 p-4 flex items-center gap-3">
        {icon}
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Examples:</h4>
        <ul className="space-y-2 mb-4">
          {examples.map((example: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600">Difficulty: <span className="font-semibold text-gray-900">{difficulty}</span></div>
        </div>
      </div>
    </div>
  );
}

function ContributionWorkflowSection() {
  return (
    <section id="workflow">
      <SectionHeader
        title="Contribution Workflow"
        description="Step-by-step process for contributing"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 text-xl mb-2">Contribution Process</h3>
            <p className="text-sm text-gray-700">Follow these steps for a smooth contribution experience</p>
          </div>

          <div className="p-8 space-y-6">
            <WorkflowStep
              step="1"
              title="Check Existing Issues"
              description="Before starting work, search for existing issues or pull requests"
              actions={[
                'Search GitHub issues for duplicates',
                'Check if someone is already working on it',
                'Join the discussion if issue exists',
                'Create new issue if needed'
              ]}
              duration="5-10 minutes"
            />

            <WorkflowStep
              step="2"
              title="Discuss Your Idea"
              description="For significant changes, discuss with the team first"
              actions={[
                'Create or comment on relevant issue',
                'Explain your proposed solution',
                'Get feedback from maintainers',
                'Wait for approval before coding'
              ]}
              duration="1-3 days"
            />

            <WorkflowStep
              step="3"
              title="Fork and Branch"
              description="Set up your development environment"
              actions={[
                'Fork the repository',
                'Clone your fork locally',
                'Create a feature branch',
                'Keep branch name descriptive'
              ]}
              duration="10 minutes"
            />

            <WorkflowStep
              step="4"
              title="Develop and Test"
              description="Implement your changes following our standards"
              actions={[
                'Write clean, documented code',
                'Follow code style guidelines',
                'Add or update tests',
                'Test across browsers and devices',
                'Validate accessibility'
              ]}
              duration="Hours to days"
            />

            <WorkflowStep
              step="5"
              title="Commit Changes"
              description="Make clear, atomic commits"
              actions={[
                'Write clear commit messages',
                'Follow commit message conventions',
                'Keep commits atomic and focused',
                'Reference issue numbers'
              ]}
              duration="Ongoing"
            />

            <WorkflowStep
              step="6"
              title="Submit Pull Request"
              description="Create a detailed pull request"
              actions={[
                'Push to your fork',
                'Create pull request on GitHub',
                'Fill out PR template completely',
                'Link related issues',
                'Request review from maintainers'
              ]}
              duration="30 minutes"
            />

            <WorkflowStep
              step="7"
              title="Address Feedback"
              description="Respond to review comments"
              actions={[
                'Read review comments carefully',
                'Make requested changes',
                'Push updates to same branch',
                'Respond to comments',
                'Re-request review when ready'
              ]}
              duration="1-7 days"
            />

            <WorkflowStep
              step="8"
              title="Merge and Celebrate!"
              description="Your contribution is merged"
              actions={[
                'Maintainer merges your PR',
                'Thank reviewers',
                'Celebrate your contribution!',
                'You\'re added to contributors list'
              ]}
              duration="🎉"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ step, title, description, actions, duration }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#000080] text-white rounded-full flex items-center justify-center font-bold text-xl">
          {step}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0 ml-4">
            <Clock size={12} />
            {duration}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="space-y-2">
            {actions.map((action: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={14} />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DevelopmentGuidelinesSection() {
  return (
    <section id="development">
      <SectionHeader
        title="Development Guidelines"
        description="Best practices for developing UX4G components"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <GuidelineCard
            title="Branch Naming"
            rules={[
              'feature/component-name - New features',
              'fix/issue-description - Bug fixes',
              'docs/topic - Documentation',
              'refactor/component-name - Refactoring',
              'test/component-name - Tests'
            ]}
          />

          <GuidelineCard
            title="Commit Messages"
            rules={[
              'Use present tense ("Add feature" not "Added")',
              'Start with verb (Add, Fix, Update, Remove)',
              'Be concise but descriptive',
              'Reference issues (#123)',
              'Example: "Fix Button focus state in dark mode (#456)"'
            ]}
          />

          <GuidelineCard
            title="Code Organization"
            rules={[
              'One component per file',
              'Co-locate tests with components',
              'Keep files under 300 lines',
              'Use clear, descriptive names',
              'Group related utilities'
            ]}
          />

          <GuidelineCard
            title="Testing Requirements"
            rules={[
              'Unit tests for all components',
              'Accessibility tests (axe-core)',
              'Browser compatibility tests',
              'Test edge cases and errors',
              'Maintain 80%+ code coverage'
            ]}
          />
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Zap className="text-yellow-600" size={20} />
            Performance Guidelines
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong className="text-gray-900">Do:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Use React.memo for expensive components</li>
                <li>• Optimize re-renders</li>
                <li>• Lazy load when appropriate</li>
                <li>• Keep bundle size small</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Don't:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Create unnecessary re-renders</li>
                <li>• Use inline functions in render</li>
                <li>• Import entire libraries for one function</li>
                <li>• Ignore performance warnings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidelineCard({ title, rules }: any) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {rules.map((rule: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-gray-400" size={14} />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodeStandardsSection() {
  return (
    <section id="code-standards">
      <SectionHeader
        title="Code Standards"
        description="Coding conventions and style guidelines"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b-2 border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 text-xl">TypeScript & React Standards</h3>
          </div>

          <div className="p-6 space-y-6">
            <CodeExample
              title="Component Structure"
              language="typescript"
              code={`import { useState } from 'react';
import { Button } from '../Button';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4">
      <h2>{title}</h2>
      <Button onClick={onAction}>Click Me</Button>
    </div>
  );
}`}
            />

            <CodeExample
              title="Accessibility Requirements"
              language="typescript"
              code={`// ✅ Good: Semantic HTML with ARIA
<button
  type="button"
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X size={16} />
</button>

// ❌ Bad: Non-semantic without ARIA
<div onClick={handleClose}>
  <X size={16} />
</div>`}
            />

            <CodeExample
              title="Styling with Tailwind"
              language="typescript"
              code={`// ✅ Good: Use design tokens and Tailwind classes
<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Submit
</button>

// ❌ Bad: Inline styles or custom CSS
<button style={{ padding: '8px 16px', backgroundColor: '#0066cc' }}>
  Submit
</button>`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">✅ Do's</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use TypeScript for type safety</li>
              <li>• Write self-documenting code</li>
              <li>• Follow single responsibility principle</li>
              <li>• Use semantic HTML elements</li>
              <li>• Add ARIA labels where needed</li>
              <li>• Handle all edge cases</li>
              <li>• Write descriptive prop names</li>
              <li>• Use constants for magic numbers</li>
            </ul>
          </div>

          <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">❌ Don'ts</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use any type in TypeScript</li>
              <li>• Write components over 300 lines</li>
              <li>• Nest more than 3 levels deep</li>
              <li>• Use non-semantic divs for buttons</li>
              <li>• Hardcode colors or spacing</li>
              <li>• Ignore ESLint warnings</li>
              <li>• Leave console.logs in code</li>
              <li>• Skip error handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeExample({ title, language, code }: any) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
        <pre className="whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}

function ComponentGuidelinesSection() {
  return (
    <section id="component-guidelines">
      <SectionHeader
        title="Component Guidelines"
        description="Standards for creating UX4G components"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Every Component Must Include</h3>

          <div className="grid grid-cols-2 gap-6">
            <ComponentRequirement
              title="TypeScript Props Interface"
              description="Fully typed props with JSDoc comments"
              required
            />
            <ComponentRequirement
              title="Accessibility Support"
              description="WCAG 2.1 AA compliant with ARIA attributes"
              required
            />
            <ComponentRequirement
              title="Documentation"
              description="Usage examples, props table, and guidelines"
              required
            />
            <ComponentRequirement
              title="Unit Tests"
              description="Jest/React Testing Library tests"
              required
            />
            <ComponentRequirement
              title="Storybook Stories"
              description="Interactive examples for all variants"
              required={false}
            />
            <ComponentRequirement
              title="Dark Mode Support"
              description="Works in both light and dark themes"
              required={false}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Component Checklist</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Functionality</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>□ Works as expected</li>
                <li>□ Handles edge cases</li>
                <li>□ Error states handled</li>
                <li>□ Loading states (if applicable)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Accessibility</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>□ Keyboard navigable</li>
                <li>□ Screen reader tested</li>
                <li>□ Focus indicators visible</li>
                <li>□ ARIA labels present</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Testing</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>□ Unit tests pass</li>
                <li>□ Accessibility tests pass</li>
                <li>□ Visual regression tests</li>
                <li>□ Cross-browser tested</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Documentation</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>□ Props documented</li>
                <li>□ Usage examples provided</li>
                <li>□ Accessibility notes</li>
                <li>□ Migration guide (if needed)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentRequirement({ title, description, required }: any) {
  return (
    <div className="flex items-start gap-3">
      {required ? (
        <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={20} />
      ) : (
        <Star className="flex-shrink-0 mt-0.5 text-blue-600" size={20} />
      )}
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">
          {title}
          {required && <span className="ml-2 text-xs text-red-600">*Required</span>}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function DocumentationStandardsSection() {
  return (
    <section id="documentation">
      <SectionHeader
        title="Documentation Standards"
        description="How to write clear, helpful documentation"
        icon={<BookOpen size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Documentation Structure</h3>
          <p className="text-sm text-gray-700 mb-4">
            Every component page should follow this structure:
          </p>

          <div className="space-y-3">
            <DocSection title="1. Overview" content="Brief description of the component and its purpose" />
            <DocSection title="2. When to Use" content="Appropriate use cases and scenarios" />
            <DocSection title="3. When Not to Use" content="Antipatterns and alternatives" />
            <DocSection title="4. Examples" content="Live demos showing all variants and states" />
            <DocSection title="5. API Reference" content="Props table with types and descriptions" />
            <DocSection title="6. Accessibility" content="ARIA support, keyboard navigation, screen reader notes" />
            <DocSection title="7. Best Practices" content="Do's and don'ts with visual examples" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Writing Style</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use clear, simple language</li>
              <li>• Write in present tense</li>
              <li>• Be concise but complete</li>
              <li>• Use active voice</li>
              <li>• Include code examples</li>
              <li>• Link to related components</li>
            </ul>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Code Examples</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Show realistic use cases</li>
              <li>• Include imports</li>
              <li>• Demonstrate all props</li>
              <li>• Show common patterns</li>
              <li>• Include accessibility features</li>
              <li>• Keep examples focused</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocSection({ title, content }: any) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-sm text-gray-700">{content}</p>
    </div>
  );
}

function SubmittingContributionsSection() {
  return (
    <section id="submitting">
      <SectionHeader
        title="Submitting Contributions"
        description="How to create a great pull request"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b-2 border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 text-xl">Pull Request Template</h3>
            <p className="text-sm text-gray-600 mt-1">Follow this template for all pull requests</p>
          </div>

          <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
            <pre className="whitespace-pre-wrap">{`## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update

## Related Issues
Fixes #123
Related to #456

## Testing
- [ ] Unit tests added/updated
- [ ] Accessibility tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added and passing
- [ ] Accessibility validated

## Screenshots (if applicable)
[Add screenshots or recordings]

## Additional Context
[Any additional information]`}</pre>
          </div>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="text-orange-600" size={20} />
            Before Submitting
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-orange-600" size={16} />
              Run all tests locally and ensure they pass
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-orange-600" size={16} />
              Update documentation for any changed functionality
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-orange-600" size={16} />
              Ensure your branch is up to date with main
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-orange-600" size={16} />
              Review your own code first
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-orange-600" size={16} />
              Fill out the PR template completely
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ReviewProcessSection() {
  return (
    <section id="review">
      <SectionHeader
        title="Review Process"
        description="What to expect during code review"
        icon={<MessageSquare size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Review Timeline</h3>
          <div className="space-y-3">
            <TimelineItem
              label="Initial Review"
              time="1-3 business days"
              description="A maintainer will do an initial review and provide feedback"
            />
            <TimelineItem
              label="Updates & Discussion"
              time="Ongoing"
              description="Address feedback and engage in discussion as needed"
            />
            <TimelineItem
              label="Final Review"
              time="1-2 business days"
              description="Once changes are made, final review before merge"
            />
            <TimelineItem
              label="Merge"
              time="Immediate"
              description="PR is merged and included in next release"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">What Reviewers Look For</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Code quality and readability</li>
              <li>• Adherence to style guidelines</li>
              <li>• Test coverage and quality</li>
              <li>• Accessibility compliance</li>
              <li>• Performance implications</li>
              <li>• Documentation completeness</li>
              <li>• Backward compatibility</li>
            </ul>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Responding to Feedback</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Be receptive and professional</li>
              <li>• Ask questions if unclear</li>
              <li>• Make requested changes promptly</li>
              <li>• Explain your reasoning when needed</li>
              <li>• Re-request review after updates</li>
              <li>• Thank reviewers for their time</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Approval Criteria</h3>
          <p className="text-sm text-gray-700 mb-3">
            Your PR will be approved when:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✅ All tests pass</li>
                <li>✅ Code review approved</li>
                <li>✅ Accessibility validated</li>
                <li>✅ Documentation updated</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✅ No merge conflicts</li>
                <li>✅ Design approved (if applicable)</li>
                <li>✅ Breaking changes justified</li>
                <li>✅ CI/CD checks pass</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ label, time, description }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-32 text-right">
        <div className="font-semibold text-gray-900 text-sm">{label}</div>
        <div className="text-xs text-gray-600">{time}</div>
      </div>
      <div className="flex-1 border-l-2 border-blue-500 pl-4 pb-4">
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function CommunityGuidelinesSection() {
  return (
    <section id="community">
      <SectionHeader
        title="Community Guidelines"
        description="How to be a great community member"
        icon={<Heart size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Our Values</h3>
          <div className="grid grid-cols-3 gap-4">
            <ValueCard
              icon={<Heart className="text-pink-600" size={24} />}
              title="Respect"
              description="Treat everyone with kindness and professionalism"
            />
            <ValueCard
              icon={<Users className="text-purple-600" size={24} />}
              title="Collaboration"
              description="Work together toward common goals"
            />
            <ValueCard
              icon={<Shield className="text-blue-600" size={24} />}
              title="Inclusivity"
              description="Welcome all backgrounds and skill levels"
            />
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Code of Conduct</h3>
          <p className="text-sm text-gray-700 mb-4">
            All contributors must follow our <a href="/code-of-conduct" className="text-blue-600 hover:underline">Code of Conduct</a>.
            Key points:
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">✅ Expected Behavior</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Be respectful and inclusive</li>
                <li>• Give and receive feedback gracefully</li>
                <li>• Focus on what's best for the community</li>
                <li>• Show empathy toward others</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">❌ Unacceptable Behavior</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Harassment or discrimination</li>
                <li>• Trolling or insulting comments</li>
                <li>• Personal or political attacks</li>
                <li>• Publishing others' private information</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Getting Help</h3>
          <p className="text-sm text-gray-700 mb-4">
            Need help with your contribution? We're here to support you:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <MessageSquare className="text-blue-600" size={16} />
              <span>Ask questions in GitHub Discussions</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="text-blue-600" size={16} />
              <span>Check the documentation and examples</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="text-blue-600" size={16} />
              <span>Reach out to maintainers for guidance</span>
            </li>
            <li className="flex items-center gap-2">
              <Heart className="text-blue-600" size={16} />
              <span>Join our community events and office hours</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, description }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}

function LicenseAgreementSection() {
  return (
    <section id="license">
      <SectionHeader
        title="License Agreement"
        description="Understanding your contribution rights"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Contributor License Agreement (CLA)</h3>
          <p className="text-sm text-gray-700 mb-4">
            By contributing to UX4G, you agree that:
          </p>

          <div className="space-y-4">
            <CLAPoint
              number="1"
              title="Original Work"
              content="Your contributions are your original work or you have the right to submit them under our open source license."
            />

            <CLAPoint
              number="2"
              title="License Grant"
              content="You grant the Government of India and the UX4G project a perpetual, worldwide, non-exclusive, royalty-free license to use, modify, and distribute your contribution under the MIT License."
            />

            <CLAPoint
              number="3"
              title="Patent Rights"
              content="You grant a patent license for any patents that would be infringed by your contribution, allowing the project and users to use your contribution without patent concerns."
            />

            <CLAPoint
              number="4"
              title="Attribution"
              content="You will be credited as a contributor in the project's CONTRIBUTORS file and release notes."
            />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Learn More</h3>
          <p className="text-sm text-gray-700">
            For complete details about licensing and copyright, see our{' '}
            <a href="/copyright" className="text-blue-600 hover:underline">Copyright & License page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function CLAPoint({ number, title, content }: any) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-700">{content}</p>
      </div>
    </div>
  );
}

function RecognitionSection() {
  return (
    <section id="recognition">
      <SectionHeader
        title="Recognition & Thanks"
        description="How we recognize our contributors"
        icon={<Star size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-8">
          <h3 className="font-bold text-gray-900 text-xl mb-4">Thank You! 🙏</h3>
          <p className="text-gray-700 mb-6">
            We deeply appreciate every contribution, big or small. The UX4G Design System is built by the community,
            for the community. Your contributions help make government digital services better for millions of citizens.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <RecognitionCard
              title="CONTRIBUTORS File"
              description="All contributors are listed in the project's CONTRIBUTORS.md file"
            />

            <RecognitionCard
              title="Release Notes"
              description="Significant contributions are highlighted in release notes"
            />

            <RecognitionCard
              title="GitHub Profile"
              description="Your contributions appear on your GitHub contribution graph"
            />

            <RecognitionCard
              title="Community Showcase"
              description="Outstanding contributions may be featured in our community showcase"
            />
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white">
          <h3 className="font-bold text-gray-900 text-xl mb-4">Ready to Contribute?</h3>
          <p className="text-gray-700 mb-6">
            We're excited to have you join the UX4G community! Start by exploring open issues,
            reading the documentation, and making your first contribution.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/gov-in/ux4g/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#000080] text-white rounded-lg font-semibold hover:bg-[#000070] transition-colors"
            >
              Browse Issues
            </a>
            <a
              href="https://github.com/gov-in/ux4g"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View Repository
            </a>
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Questions?</h3>
          <p className="text-sm text-gray-700 mb-4">
            If you have questions about contributing, please reach out:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-2">General Questions</div>
              <a href="mailto:contributors@ux4g.gov.in" className="text-blue-600 hover:underline text-sm">
                contributors@ux4g.gov.in
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-2">Technical Support</div>
              <a href="https://github.com/gov-in/ux4g/discussions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                GitHub Discussions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionCard({ title, description }: any) {
  return (
    <div className="bg-white border border-yellow-300 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#000080]">{icon}</div>
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

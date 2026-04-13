import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Search, Grid, Layers, FileText, Map, Globe, CheckCircle, AlertCircle, RefreshCw, Users, UserCheck, Shield, Upload, Phone, Eye, Box, Palette, Type, Layout, Accessibility, Gauge, GitBranch, BookOpen, Download, Code, BarChart3, Settings, Building2, Globe2, MessageSquare, Moon, Sun, CreditCard } from "lucide-react";
import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import LanguageSelector from './LanguageSelector';

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const isSectionActive = (section: string) => {
    const sectionMap: Record<string, string[]> = {
      foundations: ["/foundations", "/accessibility", "/content-system"],
      components: ["/components"],
      patterns: ["/patterns", "/pattern-library"],
      archetypes: ["/archetypes"],
      systems: ["/systems"],
      "reference-services": ["/reference-service"],
      resources: ["/resources"],
      governance: ["/governance"]
    };

    return sectionMap[section]?.some(path => location.pathname.startsWith(path)) || false;
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors shadow-sm">
      {/* Indian Tricolor Band */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
      }}></div>

      <div className="max-w-[1600px] mx-auto">
        {/* Top Bar */}
        <div className="px-6 py-3.5 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105" style={{
              backgroundColor: 'var(--ux4g-color-brand-primary)'
            }}>
              <span className="text-white font-bold text-sm">UX4G</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 text-base">Design System Platform</div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400">Government of India</div>
            </div>
          </Link>

          {/* Utility Nav */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <LanguageSelector variant="compact" />
            <a href="https://github.com" className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
              GitHub
            </a>
            <Link to="/resources/getting-started" className="px-3.5 py-2 text-sm font-medium rounded-lg transition-all hover:shadow-md" style={{
              backgroundColor: 'var(--ux4g-color-interactive-default)',
              color: 'var(--ux4g-color-text-inverse)'
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-interactive-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-interactive-default)'}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Main menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className="hidden md:block" onMouseLeave={() => setActiveDropdown(null)}>
          <div className="flex items-center px-6">
            <NavItem
              label="Foundations"
              href="/foundations"
              active={isSectionActive('foundations')}
              onMouseEnter={() => setActiveDropdown('foundations')}
            />
            <NavItem
              label="Components"
              href="/components"
              active={isSectionActive('components')}
              onMouseEnter={() => setActiveDropdown('components')}
            />
            <NavItem
              label="Patterns"
              href="/patterns"
              active={isSectionActive('patterns')}
              onMouseEnter={() => setActiveDropdown('patterns')}
            />
            <NavItem
              label="Archetypes"
              href="/archetypes"
              active={isSectionActive('archetypes')}
              onMouseEnter={() => setActiveDropdown('archetypes')}
            />
            <NavItem
              label="Systems"
              href="/systems/multilingual"
              active={isSectionActive('systems')}
              onMouseEnter={() => setActiveDropdown('systems')}
            />
            <NavItem
              label="Services"
              href="/reference-service/overview"
              active={isSectionActive('reference-services')}
              onMouseEnter={() => setActiveDropdown('reference-services')}
            />
            <NavItem
              label="Resources"
              href="/resources"
              active={isSectionActive('resources')}
              onMouseEnter={() => setActiveDropdown('resources')}
            />
            <NavItem
              label="Governance"
              href="/governance"
              active={isSectionActive('governance')}
              onMouseEnter={() => setActiveDropdown('governance')}
            />
          </div>

          {/* Mega Menu Dropdowns */}
          {activeDropdown === 'foundations' && (
            <FoundationsMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'components' && (
            <ComponentsMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'patterns' && (
            <PatternsMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'archetypes' && (
            <ArchetypesMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'systems' && (
            <SystemsMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'reference-services' && (
            <ReferenceServicesMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'resources' && (
            <ResourcesMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
          {activeDropdown === 'governance' && (
            <GovernanceMegaMenu onClose={() => setActiveDropdown(null)} />
          )}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <MobileNavigation onClose={() => setMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
}

// ==================== NAV ITEM ====================

interface NavItemProps {
  label: string;
  href: string;
  active: boolean;
  hasDropdown?: boolean;
  dropdownOpen?: boolean;
  onMouseEnter: () => void;
}

function NavItem({ label, href, active, hasDropdown, dropdownOpen, onMouseEnter }: NavItemProps) {
  return (
    <div onMouseEnter={onMouseEnter} className="relative">
      <Link
        to={href}
        className={`flex items-center px-5 py-3.5 text-sm font-medium border-b-2 transition-all ${
          active
            ? 'text-gray-900 dark:text-gray-100'
            : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-800/50'
        }`}
        style={active ? { borderColor: 'var(--ux4g-color-brand-primary)' } : undefined}
        aria-haspopup={hasDropdown ? 'true' : undefined}
        aria-expanded={hasDropdown ? dropdownOpen : undefined}
      >
        {label}
      </Link>
    </div>
  );
}

// ==================== FOUNDATIONS MEGA MENU ====================

function FoundationsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Design Foundations
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Palette size={16} className="text-blue-500" />} label="Foundations Overview" href="/foundations" />
              <MegaMenuItem icon={<Accessibility size={16} className="text-teal-500" />} label="Accessibility Guidelines" href="/accessibility" />
              <MegaMenuItem icon={<Type size={16} className="text-purple-500" />} label="Content Design System" href="/content-system" />
            </div>
          </div>

          <div className="col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-5">Foundation Topics</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <Link to="/foundations" className="group space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Design Tokens</div>
                <div className="text-gray-500 dark:text-gray-400">Color, typography, spacing, and more</div>
              </Link>
              <Link to="/accessibility" className="group space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Accessibility</div>
                <div className="text-gray-500 dark:text-gray-400">WCAG 2.1 Level AA compliance</div>
              </Link>
              <Link to="/content-system" className="group space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Content Guidelines</div>
                <div className="text-gray-500 dark:text-gray-400">Voice, tone, and writing principles</div>
              </Link>
              <Link to="/foundations" className="group space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Responsive Design</div>
                <div className="text-gray-500 dark:text-gray-400">Mobile-first approach</div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-2">Design System Foundations</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Learn the foundational principles of the UX4G Design System
            </p>
            <Link to="/foundations" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
              View Foundations Guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS MEGA MENU ====================

function ComponentsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Component Library
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Box size={14} className="text-blue-600" />} label="Components Overview" href="/components" />
              <MegaMenuItem icon={<Code size={14} className="text-green-600" />} label="Framework Support" href="/framework-status" />
            </div>
          </div>

          <div className="col-span-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-4">Component Categories</div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <Link to="/components" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Form Components</div>
                <div className="text-gray-600 dark:text-gray-400">Input, Select, Checkbox, Radio, Textarea</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Navigation</div>
                <div className="text-gray-600 dark:text-gray-400">Header, Footer, Breadcrumb, Tabs</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Feedback</div>
                <div className="text-gray-600 dark:text-gray-400">Alert, Toast, Modal, Tooltip</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Data Display</div>
                <div className="text-gray-600 dark:text-gray-400">Table, Card, Badge, Tag</div>
              </Link>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">73 React Components</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              Production-ready, accessible components. Angular version in development.
            </p>
            <Link to="/framework-status" className="text-xs font-bold text-green-700 dark:text-green-400 hover:underline">
              View Framework Status →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== PATTERNS MEGA MENU ====================

function PatternsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1: Overview */}
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Overview
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Layout size={16} className="text-gray-500" />} label="Patterns Overview" href="/patterns" />
              <MegaMenuItem icon={<Grid size={16} className="text-blue-500" />} label="Pattern Library" href="/pattern-library" />
            </div>
          </div>

          {/* Column 2: Identity & Access */}
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Identity & Access
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<Users size={16} className="text-blue-500" />}
                label="Identity Patterns"
                href="/patterns/identity"
              />
              <MegaMenuItem
                icon={<CheckCircle size={16} className="text-green-500" />}
                label="Consent & Declaration"
                href="/patterns/consent"
              />
            </div>
          </div>

          {/* Column 3: Service Patterns */}
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Service Patterns
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<Search size={16} className="text-purple-500" />}
                label="Search & Discovery"
                href="/patterns/search-discovery"
              />
              <MegaMenuItem
                icon={<Layout size={16} className="text-orange-500" />}
                label="Dashboard & Tasks"
                href="/patterns/dashboard"
              />
              <MegaMenuItem
                icon={<RefreshCw size={16} className="text-teal-500" />}
                label="Status & Lifecycle"
                href="/patterns/status-lifecycle"
              />
              <MegaMenuItem
                icon={<AlertCircle size={16} className="text-indigo-500" />}
                label="Notifications"
                href="/patterns/notifications"
              />
              <MegaMenuItem
                icon={<Phone size={16} className="text-pink-500" />}
                label="Contact & Support"
                href="/patterns/contact-support"
              />
              <MegaMenuItem
                icon={<MessageSquare size={16} className="text-purple-500" />}
                label="Feedback & Rating"
                href="/patterns/feedback"
              />
            </div>
          </div>

          {/* Column 4: Advanced Patterns */}
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Advanced Patterns
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<FileText size={16} className="text-blue-500" />}
                label="Form Intelligence"
                href="/patterns/forms"
              />
              <MegaMenuItem
                icon={<RefreshCw size={16} className="text-green-500" />}
                label="State Resilience"
                href="/patterns/resilience"
              />
              <MegaMenuItem
                icon={<Globe2 size={16} className="text-purple-500" />}
                label="Payment Patterns"
                href="/patterns/payment"
              />
              <MegaMenuItem
                icon={<Globe size={16} className="text-indigo-500" />}
                label="Localization & i18n"
                href="/patterns/localization"
              />
              <MegaMenuItem
                icon={<FileText size={16} className="text-cyan-500" />}
                label="Data Input Beyond Forms"
                href="/patterns/data-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== SERVICE ARCHETYPES MEGA MENU ====================

function ArchetypesMegaMenu({ onClose }: { onClose: () => void }) {
  const location = useLocation();

  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Overview
            </div>
            <MegaMenuItem icon={<Layers size={14} className="text-gray-600" />} label="Service Archetypes" href="/archetypes" />
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Application Archetypes
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<FileText size={14} className="text-blue-600" />}
                label="Application Submission"
                href="/archetypes/application"
              />
              <MegaMenuItem
                icon={<CheckCircle size={14} className="text-green-600" />}
                label="Eligibility Screening"
                href="/archetypes/eligibility"
              />
              <MegaMenuItem
                icon={<RefreshCw size={14} className="text-purple-600" />}
                label="Renewal"
                href="/archetypes/renewal"
              />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Support Archetypes
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<AlertCircle size={14} className="text-orange-600" />}
                label="Correction & Resubmission"
                href="/archetypes/correction"
              />
              <MegaMenuItem
                icon={<Phone size={14} className="text-teal-600" />}
                label="Complaint & Escalation"
                href="/archetypes/complaint"
              />
              <MegaMenuItem
                icon={<Users size={14} className="text-indigo-600" />}
                label="Assisted Services"
                href="/archetypes/assisted"
              />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Processing Archetypes
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem
                icon={<CheckCircle size={14} className="text-green-600" />}
                label="Approval & Issuance"
                href="/archetypes/approval"
              />
              <MegaMenuItem
                icon={<Eye size={14} className="text-purple-600" />}
                label="Status Tracking"
                href="/archetypes/tracking"
              />
              <MegaMenuItem
                icon={<Globe2 size={14} className="text-blue-600" />}
                label="Appointment Booking"
                href="/archetypes/appointment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== SYSTEMS MEGA MENU ====================

function SystemsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Cross-Cutting Systems
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Globe size={14} className="text-blue-600" />} label="Multilingual Guidance" href="/systems/multilingual" />
              <MegaMenuItem icon={<FileText size={14} className="text-green-600" />} label="Form Intelligence" href="/systems/form-intelligence" />
              <MegaMenuItem icon={<RefreshCw size={16} className="text-purple-500" />} label="State Resilience" href="/systems/state-resilience" />
            </div>
          </div>

          <div className="col-span-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-4">About Systems</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              Systems are cross-cutting capabilities that work across multiple patterns and service archetypes. They provide foundational functionality for complex government services.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <Link to="/systems/multilingual" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Multilingual</div>
                <div className="text-gray-600 dark:text-gray-400">22 official languages support</div>
              </Link>
              <Link to="/systems/form-intelligence" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Form Intelligence</div>
                <div className="text-gray-600 dark:text-gray-400">Smart form features and validation</div>
              </Link>
              <Link to="/systems/state-resilience" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors col-span-2">
                <div className="font-bold text-gray-700 dark:text-gray-300">State Resilience</div>
                <div className="text-gray-600 dark:text-gray-400">Save progress and offline support</div>
              </Link>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">System Capabilities</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              Explore advanced system capabilities for complex services
            </p>
            <Link to="/systems/form-intelligence" className="text-xs font-bold text-purple-700 dark:text-purple-400 hover:underline">
              View Systems →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== REFERENCE SERVICES MEGA MENU ====================

function ReferenceServicesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Services
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Map size={14} className="text-blue-600" />} label="Service Blueprint" href="/reference-service/overview" />
              <MegaMenuItem icon={<Box size={14} className="text-green-600" />} label="Certificate Service Demo" href="/reference-service/demo" />
              <MegaMenuItem icon={<Users size={14} className="text-indigo-600" />} label="Reusable Sign In Service" href="/reference-service/sign-in" />
              <MegaMenuItem icon={<UserCheck size={14} className="text-green-700" />} label="Reusable Sign Up Service" href="/reference-service/sign-up" />
              <MegaMenuItem icon={<Shield size={14} className="text-purple-600" />} label="Reusable OTP Service" href="/reference-service/verify-otp" />
              <MegaMenuItem icon={<AlertCircle size={14} className="text-orange-600" />} label="Auth Status Service" href="/reference-service/auth-status" />
              <MegaMenuItem icon={<CheckCircle size={14} className="text-teal-600" />} label="Eligibility Service" href="/reference-service/eligibility" />
              <MegaMenuItem icon={<FileText size={14} className="text-blue-700" />} label="Application Start Service" href="/reference-service/start" />
              <MegaMenuItem icon={<Upload size={14} className="text-cyan-700" />} label="Document Upload Service" href="/reference-service/document-upload" />
              <MegaMenuItem icon={<User size={14} className="text-purple-700" />} label="User Profile Service" href="/reference-service/user-profile" />
              <MegaMenuItem icon={<FileText size={14} className="text-violet-700" />} label="Personal Form Service" href="/reference-service/form/personal" />
              <MegaMenuItem icon={<Map size={14} className="text-orange-700" />} label="Address Form Service" href="/reference-service/form/address" />
              <MegaMenuItem icon={<FileText size={14} className="text-indigo-700" />} label="Additional Form Service" href="/reference-service/form/additional" />
              <MegaMenuItem icon={<FileText size={14} className="text-teal-700" />} label="Form Review Service" href="/reference-service/form/review" />
              <MegaMenuItem icon={<FileText size={14} className="text-indigo-700" />} label="Review Summary Service" href="/reference-service/review-summary" />
              <MegaMenuItem icon={<CheckCircle size={14} className="text-purple-700" />} label="Declaration Service" href="/reference-service/declaration" />
              <MegaMenuItem icon={<CreditCard size={14} className="text-pink-600" />} label="Payment Summary Service" href="/reference-service/payment-summary" />
              <MegaMenuItem icon={<CreditCard size={14} className="text-green-600" />} label="Payment Receipt Service" href="/reference-service/payment-receipt" />
              <MegaMenuItem icon={<BarChart3 size={14} className="text-indigo-600" />} label="Status Tracker Service" href="/reference-service/status-tracker" />
            </div>
          </div>

          <div className="col-span-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-4">Certificate Service Implementation</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              A complete end-to-end reference implementation showing:
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <Link to="/reference-service/certificate/sign-in" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Authentication Flow</div>
                <div className="text-gray-600 dark:text-gray-400">Sign in, sign up, OTP verification</div>
              </Link>
              <Link to="/reference-service/certificate/form/personal" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Application Process</div>
                <div className="text-gray-600 dark:text-gray-400">Multi-step forms with validation</div>
              </Link>
              <Link to="/reference-service/certificate/payment-summary" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Payment Integration</div>
                <div className="text-gray-600 dark:text-gray-400">Fee summary and receipt</div>
              </Link>
              <Link to="/reference-service/certificate/officer/dashboard" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Officer Dashboard</div>
                <div className="text-gray-600 dark:text-gray-400">Review and approval workflow</div>
              </Link>
              <Link to="/resources/service-code-downloads" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">React Code Downloads</div>
                <div className="text-gray-600 dark:text-gray-400">Certificate + reusable sign-in source</div>
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">Live Demo</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              Explore a fully functional certificate service implementation
            </p>
            <Link to="/reference-service/demo" className="text-xs font-bold text-orange-700 dark:text-orange-400 hover:underline">
              Try Demo Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== RESOURCES MEGA MENU ====================

function ResourcesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Documentation
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<BookOpen size={14} className="text-blue-600" />} label="Resources Hub" href="/resources" />
              <MegaMenuItem icon={<Download size={14} className="text-green-600" />} label="Getting Started" href="/resources/getting-started" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Developer Tools
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Code size={14} className="text-purple-600" />} label="Starter Kit" href="/resources/starter-kit" />
              <MegaMenuItem icon={<FileText size={14} className="text-orange-600" />} label="Component Specs" href="/resources/component-specs" />
              <MegaMenuItem icon={<GitBranch size={14} className="text-indigo-600" />} label="Figma Integration" href="/resources/figma" />
            </div>
          </div>

          <div className="col-span-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-4">Developer Resources</div>
            <div className="grid grid-cols-2 gap-4 text-xs mb-4">
              <Link to="/resources/starter-kit" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">React Starter</div>
                <div className="text-gray-600 dark:text-gray-400">Pre-configured React + TypeScript template</div>
              </Link>
              <Link to="/resources/starter-kit" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Angular Starter</div>
                <div className="text-gray-600 dark:text-gray-400">Angular standalone components setup</div>
              </Link>
              <Link to="/resources/getting-started" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">NPM Packages</div>
                <div className="text-gray-600 dark:text-gray-400">@ux4g/tokens, styles, core, patterns</div>
              </Link>
              <Link to="/resources/figma" className="space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                <div className="font-bold text-gray-700 dark:text-gray-300">Figma Libraries</div>
                <div className="text-gray-600 dark:text-gray-400">Design tokens and components</div>
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link to="/resources/getting-started" className="text-xs font-bold text-[var(--ux4g-color-brand-primary)] hover:underline">
                View Complete Installation Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== GOVERNANCE MEGA MENU ====================

function GovernanceMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Governance Framework
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Building2 size={14} className="text-blue-600" />} label="Governance Overview" href="/governance" />
              <MegaMenuItem icon={<BarChart3 size={14} className="text-green-600" />} label="Adoption Tracking" href="/governance/adoption" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Compliance & Reporting
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<CheckCircle size={14} className="text-purple-600" />} label="Conformance Dashboard" href="/governance/conformance" />
              <MegaMenuItem icon={<Gauge size={14} className="text-orange-600" />} label="Service Analytics" href="/governance/analytics" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Departments & Vendors
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <Building2 size={12} className="text-blue-600" />
                <span>47 Departments</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={12} className="text-green-600" />
                <span>34 Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={12} className="text-purple-600" />
                <span>89% Conformance Rate</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">Mandatory Compliance</div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              All government digital services must conform to UX4G standards
            </p>
            <Link to="/governance" className="text-xs font-bold text-red-700 dark:text-red-400 hover:underline">
              View Requirements →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== MEGA MENU COMPONENTS ====================

function MegaMenuItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link
      to={href}
      className="group flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span className="group-hover:text-gray-900 dark:group-hover:text-gray-100">{label}</span>
    </Link>
  );
}

function ArchetypeMenuItem({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      to={href}
      className={`block px-4 py-2 text-sm rounded transition-colors ${
        active
          ? 'bg-blue-100 text-[var(--ux4g-color-brand-primary)] font-medium border-l-2 border-[var(--ux4g-color-brand-primary)]'
          : 'text-gray-700 hover:bg-white hover:text-[var(--ux4g-color-brand-primary)]'
      }`}
    >
      {label}
    </Link>
  );
}

// ==================== MOBILE NAVIGATION ====================

function MobileNavigation({ onClose }: { onClose: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 max-h-[600px] overflow-y-auto">
      <nav className="p-5 space-y-3">
        {/* Foundations */}
        <MobileSection
          title="Foundations"
          expanded={expandedSection === 'foundations'}
          onToggle={() => toggleSection('foundations')}
        >
          <MobileLink label="Foundations Overview" href="/foundations" onClose={onClose} />
          <MobileLink label="Accessibility" href="/accessibility" onClose={onClose} />
          <MobileLink label="Content Design System" href="/content-system" onClose={onClose} />
        </MobileSection>

        {/* Components */}
        <MobileSection
          title="Components"
          expanded={expandedSection === 'components'}
          onToggle={() => toggleSection('components')}
        >
          <MobileLink label="Components Overview" href="/components" onClose={onClose} />
        </MobileSection>

        {/* Patterns */}
        <MobileSection
          title="Patterns"
          expanded={expandedSection === 'patterns'}
          onToggle={() => toggleSection('patterns')}
        >
          <MobileLink label="Patterns Overview" href="/patterns" onClose={onClose} />
          <MobileLink label="Pattern Library" href="/pattern-library" onClose={onClose} />
          <MobileLink label="Identity & Access" href="/patterns/identity" onClose={onClose} small />
          <MobileLink label="Consent & Declaration" href="/patterns/consent" onClose={onClose} small />
          <MobileLink label="Search & Discovery" href="/patterns/search-discovery" onClose={onClose} small />
          <MobileLink label="Dashboard & Tasks" href="/patterns/dashboard" onClose={onClose} small />
          <MobileLink label="Status & Lifecycle" href="/patterns/status-lifecycle" onClose={onClose} small />
          <MobileLink label="Notifications" href="/patterns/notifications" onClose={onClose} small />
          <MobileLink label="Contact & Support" href="/patterns/contact-support" onClose={onClose} small />
          <MobileLink label="Payment Patterns" href="/patterns/payment" onClose={onClose} small />
        </MobileSection>

        {/* Service Archetypes */}
        <MobileSection
          title="Service Archetypes"
          expanded={expandedSection === 'archetypes'}
          onToggle={() => toggleSection('archetypes')}
        >
          <MobileLink label="Archetypes Overview" href="/archetypes" onClose={onClose} />
          <MobileLink label="Application Submission" href="/archetypes/application" onClose={onClose} small />
          <MobileLink label="Eligibility Screening" href="/archetypes/eligibility" onClose={onClose} small />
          <MobileLink label="Renewal" href="/archetypes/renewal" onClose={onClose} small />
          <MobileLink label="Correction & Resubmission" href="/archetypes/correction" onClose={onClose} small />
          <MobileLink label="Complaint & Escalation" href="/archetypes/complaint" onClose={onClose} small />
          <MobileLink label="Approval & Issuance" href="/archetypes/approval" onClose={onClose} small />
          <MobileLink label="Assisted Services" href="/archetypes/assisted" onClose={onClose} small />
          <MobileLink label="Status Tracking" href="/archetypes/tracking" onClose={onClose} small />
          <MobileLink label="Appointment Booking" href="/archetypes/appointment" onClose={onClose} small />
        </MobileSection>

        {/* Systems */}
        <MobileSection
          title="Systems"
          expanded={expandedSection === 'systems'}
          onToggle={() => toggleSection('systems')}
        >
          <MobileLink label="Multilingual Guidance" href="/systems/multilingual" onClose={onClose} />
          <MobileLink label="Form Intelligence" href="/systems/form-intelligence" onClose={onClose} />
          <MobileLink label="State Resilience" href="/systems/state-resilience" onClose={onClose} />
        </MobileSection>

        {/* Services */}
        <MobileSection
          title="Services"
          expanded={expandedSection === 'reference-services'}
          onToggle={() => toggleSection('reference-services')}
        >
          <MobileLink label="Service Blueprint" href="/reference-service/overview" onClose={onClose} />
          <MobileLink label="Certificate Service Demo" href="/reference-service/demo" onClose={onClose} />
          <MobileLink label="Reusable Sign In" href="/reference-service/sign-in" onClose={onClose} />
          <MobileLink label="Reusable Sign Up" href="/reference-service/sign-up" onClose={onClose} />
          <MobileLink label="Eligibility Service" href="/reference-service/eligibility" onClose={onClose} />
          <MobileLink label="Start Service" href="/reference-service/start" onClose={onClose} />
          <MobileLink label="User Profile" href="/reference-service/user-profile" onClose={onClose} />
          <MobileLink label="Form Personal" href="/reference-service/form/personal" onClose={onClose} />
          <MobileLink label="Form Address" href="/reference-service/form/address" onClose={onClose} />
          <MobileLink label="Form Additional" href="/reference-service/form/additional" onClose={onClose} />
          <MobileLink label="Form Review" href="/reference-service/form/review" onClose={onClose} />
          <MobileLink label="Document Upload" href="/reference-service/document-upload" onClose={onClose} />
          <MobileLink label="Review Summary" href="/reference-service/review-summary" onClose={onClose} />
          <MobileLink label="Declaration" href="/reference-service/declaration" onClose={onClose} />
          <MobileLink label="Payment Summary" href="/reference-service/payment-summary" onClose={onClose} />
          <MobileLink label="Payment Receipt" href="/reference-service/payment-receipt" onClose={onClose} />
          <MobileLink label="Status Tracker" href="/reference-service/status-tracker" onClose={onClose} />
        </MobileSection>

        {/* Resources */}
        <MobileSection
          title="Resources"
          expanded={expandedSection === 'resources'}
          onToggle={() => toggleSection('resources')}
        >
          <MobileLink label="Resources Hub" href="/resources" onClose={onClose} />
          <MobileLink label="Getting Started" href="/resources/getting-started" onClose={onClose} />
          <MobileLink label="Starter Kit" href="/resources/starter-kit" onClose={onClose} />
          <MobileLink label="Component Specs" href="/resources/component-specs" onClose={onClose} />
          <MobileLink label="Figma Integration" href="/resources/figma" onClose={onClose} />
        </MobileSection>

        {/* Governance */}
        <MobileSection
          title="Governance"
          expanded={expandedSection === 'governance'}
          onToggle={() => toggleSection('governance')}
        >
          <MobileLink label="Governance Overview" href="/governance" onClose={onClose} />
          <MobileLink label="Adoption Tracking" href="/governance/adoption" onClose={onClose} />
          <MobileLink label="Conformance Dashboard" href="/governance/conformance" onClose={onClose} />
          <MobileLink label="Service Analytics" href="/governance/analytics" onClose={onClose} />
        </MobileSection>
      </nav>
    </div>
  );
}

function MobileSection({ title, expanded, onToggle, children, active }: any) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${
          active
            ? 'bg-blue-50 dark:bg-blue-900/20 text-[var(--ux4g-color-brand-primary)]'
            : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-expanded={expanded}
        aria-label={`${title} menu`}
      >
        <span className="text-sm">{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {expanded && (
        <div className="mt-2 ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileLink({ label, href, onClose, small }: any) {
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClose}
      className={`block px-3 py-2 rounded-md transition-colors ${small ? 'text-xs' : 'text-sm'} ${
        active
          ? 'bg-blue-50 dark:bg-blue-900/20 text-[var(--ux4g-color-brand-primary)] font-medium'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </Link>
  );
}

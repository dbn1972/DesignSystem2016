import React from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Search, Grid, Layers, FileText, Map, Globe, CheckCircle, AlertCircle, RefreshCw, Users, User, UserCheck, Shield, Upload, Phone, Eye, Box, Palette, Type, Layout, Accessibility, Gauge, GitBranch, BookOpen, Download, Code, BarChart3, Settings, Building2, Globe2, MessageSquare, CreditCard } from "lucide-react";
import { useState } from "react";
import LanguageSelector from './LanguageSelector';
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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
      "reference-services": ["/services", "/reference-service"],
      resources: ["/resources"],
      governance: ["/governance"]
    };

    return sectionMap[section]?.some(path => location.pathname.startsWith(path)) || false;
  };

  return (
    <header className="bg-card sticky top-0 z-50 transition-colors shadow-sm">
      {/* Indian Tricolor Band */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
      }}></div>

      <div className="max-w-[1600px] mx-auto">
        {/* Top Bar */}
        <div className="px-6 py-3.5 flex items-center justify-between border-b border-border">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105" style={{
              backgroundColor: 'var(--ux4g-color-brand-primary)'
            }}>
              <span className="text-white font-bold text-sm">UX4G</span>
            </div>
            <div>
              <div className="font-semibold text-foreground text-base">Design System Platform</div>
              <div className="text-[11px] text-muted-foreground">Government of India</div>
            </div>
          </Link>

          {/* Utility Nav */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <ThemeSwitcher />
            <LanguageSelector variant="compact" />
            <a href="https://github.com" className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted transition-colors">
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
            className="md:hidden p-2.5 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Main menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Primary Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block" onMouseLeave={() => setActiveDropdown(null)}>
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
              href="/systems"
              active={isSectionActive('systems')}
              onMouseEnter={() => setActiveDropdown('systems')}
            />
            <NavItem
              label="Services"
              href="/services"
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
            ? 'text-foreground'
            : 'border-transparent text-muted-foreground hover:text-foreground  hover:bg-background/50 '
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Design Foundations
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Palette size={16} className="text-blue-500" />} label="Foundations Overview" href="/foundations" />
              <MegaMenuItem icon={<Accessibility size={16} className="text-teal-500" />} label="Accessibility Guidelines" href="/accessibility" />
              <MegaMenuItem icon={<Type size={16} className="text-purple-500" />} label="Content Design System" href="/content-system" />
            </div>
          </div>

          <div className="col-span-2 bg-background/50 rounded-xl p-6">
            <div className="font-semibold text-sm text-foreground mb-5">Foundation Topics</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <Link to="/foundations" className="group space-y-2 p-4 bg-card rounded-lg hover:shadow-md transition-all border border-border  hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Design Tokens</div>
                <div className="text-muted-foreground">Color, typography, spacing, and more</div>
              </Link>
              <Link to="/accessibility" className="group space-y-2 p-4 bg-card rounded-lg hover:shadow-md transition-all border border-border  hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Accessibility</div>
                <div className="text-muted-foreground">WCAG 2.1 Level AA compliance</div>
              </Link>
              <Link to="/content-system" className="group space-y-2 p-4 bg-card rounded-lg hover:shadow-md transition-all border border-border  hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Content Guidelines</div>
                <div className="text-muted-foreground">Voice, tone, and writing principles</div>
              </Link>
              <Link to="/foundations" className="group space-y-2 p-4 bg-card rounded-lg hover:shadow-md transition-all border border-border  hover:border-blue-200 dark:hover:border-blue-800">
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Responsive Design</div>
                <div className="text-muted-foreground">Mobile-first approach</div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="font-semibold text-sm text-foreground mb-2">Design System Foundations</div>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Component Library
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Box size={14} className="text-blue-600" />} label="Components Overview" href="/components" />
              <MegaMenuItem icon={<Code size={14} className="text-green-600" />} label="Framework Support" href="/framework-status" />
            </div>
          </div>

          <div className="col-span-2 bg-card border-2 border-border rounded-lg p-6">
            <div className="font-bold text-sm text-foreground mb-4">Component Categories</div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <Link to="/components" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Form Components</div>
                <div className="text-muted-foreground">Input, Select, Checkbox, Radio, Textarea</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Navigation</div>
                <div className="text-muted-foreground">Header, Footer, Breadcrumb, Tabs</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Feedback</div>
                <div className="text-muted-foreground">Alert, Toast, Modal, Tooltip</div>
              </Link>
              <Link to="/components" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Data Display</div>
                <div className="text-muted-foreground">Table, Card, Badge, Tag</div>
              </Link>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="font-bold text-sm text-foreground mb-2">73 React Components</div>
            <p className="text-xs text-muted-foreground mb-4">
              Production-ready, accessible components. Angular version in development.
            </p>
            <Link to="/framework-status" className="text-xs font-bold text-[var(--ux4g-color-feedback-success)] dark:text-green-400 hover:underline">
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1: Overview */}
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Overview
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Layout size={16} className="text-gray-500" />} label="Patterns Overview" href="/patterns" />
              <MegaMenuItem icon={<Grid size={16} className="text-blue-500" />} label="Pattern Library" href="/pattern-library" />
            </div>
          </div>

          {/* Column 2: Identity & Access */}
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Overview
            </div>
            <MegaMenuItem icon={<Layers size={14} className="text-muted-foreground" />} label="Service Archetypes" href="/archetypes" />
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Cross-Cutting Systems
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Globe size={14} className="text-blue-600" />} label="Multilingual Guidance" href="/systems/multilingual" />
              <MegaMenuItem icon={<FileText size={14} className="text-green-600" />} label="Form Intelligence" href="/systems/form-intelligence" />
              <MegaMenuItem icon={<RefreshCw size={16} className="text-purple-500" />} label="State Resilience" href="/systems/state-resilience" />
            </div>
          </div>

          <div className="col-span-2 bg-card border-2 border-border rounded-lg p-6">
            <div className="font-bold text-sm text-foreground mb-4">About Systems</div>
            <p className="text-xs text-muted-foreground mb-4">
              Systems are cross-cutting capabilities that work across multiple patterns and service archetypes. They provide foundational functionality for complex government services.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <Link to="/systems" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors col-span-2">
                <div className="font-bold text-muted-foreground">Systems Overview</div>
                <div className="text-muted-foreground">Premium hub for shared UX4G capabilities</div>
              </Link>
              <Link to="/systems/multilingual" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Multilingual</div>
                <div className="text-muted-foreground">22 official languages support</div>
              </Link>
              <Link to="/systems/form-intelligence" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Form Intelligence</div>
                <div className="text-muted-foreground">Smart form features and validation</div>
              </Link>
              <Link to="/systems/state-resilience" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors col-span-2">
                <div className="font-bold text-muted-foreground">State Resilience</div>
                <div className="text-muted-foreground">Save progress and offline support</div>
              </Link>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="font-bold text-sm text-foreground mb-2">System Capabilities</div>
            <p className="text-xs text-muted-foreground mb-4">
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
    <div className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn">
      <div className="max-w-[1600px] mx-auto px-12 py-8">
        <div className="grid grid-cols-4 gap-8">

          {/* Col 1 — Overview + Auth */}
          <div className="space-y-5">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Overview
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Layers size={14} className="text-blue-600" />} label="Services Hub" href="/services" />
              <MegaMenuItem icon={<Map size={14} className="text-blue-600" />} label="Service Blueprint" href="/reference-service/overview" />
              <MegaMenuItem icon={<Box size={14} className="text-green-600" />} label="Certificate Service Demo" href="/reference-service/demo" />
              <MegaMenuItem icon={<User size={14} className="text-purple-700" />} label="User Profile" href="/reference-service/user-profile" />
              <MegaMenuItem icon={<BarChart3 size={14} className="text-indigo-600" />} label="Status Tracker" href="/reference-service/status-tracker" />
            </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Identity & Access
              </div>
              <div className="space-y-0.5">
                <MegaMenuItem icon={<Users size={14} className="text-indigo-600" />} label="Sign In" href="/reference-service/sign-in" />
                <MegaMenuItem icon={<UserCheck size={14} className="text-green-700" />} label="Sign Up" href="/reference-service/sign-up" />
                <MegaMenuItem icon={<Shield size={14} className="text-purple-600" />} label="OTP Verification" href="/reference-service/verify-otp" />
                <MegaMenuItem icon={<AlertCircle size={14} className="text-orange-600" />} label="Auth Status" href="/reference-service/auth-status" />
              </div>
            </div>
          </div>

          {/* Col 2 — Application Flow */}
          <div className="space-y-5">
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Application Flow
              </div>
              <div className="space-y-0.5">
                <MegaMenuItem icon={<CheckCircle size={14} className="text-teal-600" />} label="Eligibility Check" href="/reference-service/eligibility" />
                <MegaMenuItem icon={<FileText size={14} className="text-blue-700" />} label="Application Start" href="/reference-service/start" />
                <MegaMenuItem icon={<FileText size={14} className="text-violet-700" />} label="Personal Form" href="/reference-service/form/personal" />
                <MegaMenuItem icon={<Map size={14} className="text-orange-700" />} label="Address Form" href="/reference-service/form/address" />
                <MegaMenuItem icon={<FileText size={14} className="text-indigo-700" />} label="Additional Form" href="/reference-service/form/additional" />
                <MegaMenuItem icon={<FileText size={14} className="text-teal-700" />} label="Form Review" href="/reference-service/form/review" />
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Submission & Payment
              </div>
              <div className="space-y-0.5">
                <MegaMenuItem icon={<Upload size={14} className="text-cyan-700" />} label="Document Upload" href="/reference-service/document-upload" />
                <MegaMenuItem icon={<FileText size={14} className="text-indigo-700" />} label="Review Summary" href="/reference-service/review-summary" />
                <MegaMenuItem icon={<CheckCircle size={14} className="text-purple-700" />} label="Declaration" href="/reference-service/declaration" />
                <MegaMenuItem icon={<CreditCard size={14} className="text-pink-600" />} label="Payment Summary" href="/reference-service/payment-summary" />
                <MegaMenuItem icon={<CreditCard size={14} className="text-green-600" />} label="Payment Receipt" href="/reference-service/payment-receipt" />
              </div>
            </div>
          </div>

          {/* Col 3 — Certificate Service spotlight */}
          <div className="bg-card border-2 border-border rounded-lg p-5">
            <div className="font-bold text-sm text-foreground mb-3">Certificate Service</div>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              A complete end-to-end reference — 51 pages, 15+ patterns, all flows.
            </p>
            <div className="space-y-2 text-xs">
              <Link to="/reference-service/certificate/sign-in" className="flex items-center gap-2 p-2.5 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <Users size={13} className="text-indigo-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Authentication Flow</div>
                  <div className="text-muted-foreground">Sign in, sign up, OTP</div>
                </div>
              </Link>
              <Link to="/reference-service/certificate/form/personal" className="flex items-center gap-2 p-2.5 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <FileText size={13} className="text-blue-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Application Process</div>
                  <div className="text-muted-foreground">Multi-step forms</div>
                </div>
              </Link>
              <Link to="/reference-service/certificate/payment-summary" className="flex items-center gap-2 p-2.5 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <CreditCard size={13} className="text-pink-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Payment Integration</div>
                  <div className="text-muted-foreground">Fee summary & receipt</div>
                </div>
              </Link>
              <Link to="/reference-service/certificate/officer/dashboard" className="flex items-center gap-2 p-2.5 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <UserCheck size={13} className="text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Officer Dashboard</div>
                  <div className="text-muted-foreground">Review & approval</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Col 4 — CTA */}
          <div className="flex flex-col gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-5 flex-1">
              <div className="font-bold text-sm text-foreground mb-2">Live Demo</div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Experience the full certificate service — from eligibility to certificate issuance.
              </p>
              <Link
                to="/reference-service/demo"
                className="block w-full text-center px-4 py-2.5 rounded text-xs font-bold text-primary-foreground transition-colors"
                style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}
              >
                Launch Demo →
              </Link>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-5">
              <div className="font-bold text-sm text-foreground mb-2">Code Downloads</div>
              <p className="text-xs text-muted-foreground mb-3">
                Download React source for all reusable services.
              </p>
              <Link to="/resources/service-code-downloads" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                View downloads →
              </Link>
            </div>
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Documentation
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<BookOpen size={14} className="text-blue-600" />} label="Resources Hub" href="/resources" />
              <MegaMenuItem icon={<Download size={14} className="text-green-600" />} label="Getting Started" href="/resources/getting-started" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Developer Tools
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Code size={14} className="text-purple-600" />} label="Starter Kit" href="/resources/starter-kit" />
              <MegaMenuItem icon={<FileText size={14} className="text-orange-600" />} label="Component Specs" href="/resources/component-specs" />
              <MegaMenuItem icon={<GitBranch size={14} className="text-indigo-600" />} label="Figma Integration" href="/resources/figma" />
            </div>
          </div>

          <div className="col-span-2 bg-card border-2 border-border rounded-lg p-6">
            <div className="font-bold text-sm text-foreground mb-4">Developer Resources</div>
            <div className="grid grid-cols-2 gap-4 text-xs mb-4">
              <Link to="/resources/starter-kit" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">React Starter</div>
                <div className="text-muted-foreground">Pre-configured React + TypeScript template</div>
              </Link>
              <Link to="/resources/starter-kit" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Angular Starter</div>
                <div className="text-muted-foreground">Angular standalone components setup</div>
              </Link>
              <Link to="/resources/getting-started" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">NPM Packages</div>
                <div className="text-muted-foreground">@ux4g/tokens, styles, core, patterns</div>
              </Link>
              <Link to="/resources/figma" className="space-y-2 p-3 border border-border rounded hover:border-[var(--ux4g-color-brand-primary)] hover:bg-accent transition-colors">
                <div className="font-bold text-muted-foreground">Figma Libraries</div>
                <div className="text-muted-foreground">Design tokens and components</div>
              </Link>
            </div>
            <div className="pt-4 border-t border-border">
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
      className="absolute left-0 right-0 bg-card border-t border-border shadow-xl animate-fadeIn"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Governance Framework
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<Building2 size={14} className="text-blue-600" />} label="Governance Overview" href="/governance" />
              <MegaMenuItem icon={<BarChart3 size={14} className="text-green-600" />} label="Adoption Tracking" href="/governance/adoption" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Compliance & Reporting
            </div>
            <div className="space-y-0.5">
              <MegaMenuItem icon={<CheckCircle size={14} className="text-purple-600" />} label="Conformance Dashboard" href="/governance/conformance" />
              <MegaMenuItem icon={<Gauge size={14} className="text-orange-600" />} label="Service Analytics" href="/governance/analytics" />
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Departments & Vendors
            </div>
            <div className="text-xs text-muted-foreground space-y-2">
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
            <div className="font-bold text-sm text-foreground mb-2">Mandatory Compliance</div>
            <p className="text-xs text-muted-foreground mb-4">
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
      className="group flex items-center gap-2.5 px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-all"
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span className="group-hover:text-foreground">{label}</span>
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
          : 'text-muted-foreground hover:bg-card hover:text-[var(--ux4g-color-brand-primary)]'
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
    <div className="md:hidden border-t border-border bg-card max-h-[600px] overflow-y-auto">
      <nav className="p-5 space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
          <span className="text-xs font-semibold text-muted-foreground">Theme</span>
          <ThemeSwitcher />
        </div>

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
          <MobileLink label="Systems Overview" href="/systems" onClose={onClose} />
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
          <MobileLink label="Services Hub" href="/services" onClose={onClose} />
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
            : 'bg-background text-foreground hover:bg-muted'
        }`}
        aria-expanded={expanded}
        aria-label={`${title} menu`}
      >
        <span className="text-sm">{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {expanded && (
        <div className="mt-2 ml-4 border-l-2 border-border pl-4 space-y-1">
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
          : 'text-muted-foreground hover:bg-muted'
      }`}
    >
      {label}
    </Link>
  );
}

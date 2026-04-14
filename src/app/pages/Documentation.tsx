import {
  Book,
  Code,
  Layout,
  Boxes,
  FileText,
  GitBranch,
  Users,
  HelpCircle,
  Palette,
  Rocket,
  Search,
  ChevronRight,
  Sparkles,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Zap,
  Shield,
  Globe,
  Download,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState("");

  // Main documentation sections
  const mainSections = [
    {
      icon: Rocket,
      title: "Getting Started",
      description: "Quick start guide, installation instructions, and setup for UX4G Design System",
      href: "/resources/getting-started",
      color: "bg-[#FF9933]",
      badge: "Start Here"
    },
    {
      icon: Palette,
      title: "Foundations",
      description: "Colors, typography, spacing, accessibility principles, and design tokens",
      href: "/foundations",
      color: "bg-primary",
      badge: "Essential"
    },
    {
      icon: Boxes,
      title: "Components Library",
      description: "Comprehensive library of UI components with code examples and guidelines",
      href: "/components",
      color: "bg-green-700",
      badge: "100+ Components"
    },
    {
      icon: Layout,
      title: "Patterns Library",
      description: "Service patterns, user flows, and best practices for government services",
      href: "/patterns",
      color: "bg-[#FF9933]",
      badge: "50+ Patterns"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation, component props, methods, and interfaces",
      href: "/api-reference",
      color: "bg-primary",
      badge: "Technical"
    },
    {
      icon: GitBranch,
      title: "Migration Guides",
      description: "Version migration guides, breaking changes, and upgrade instructions",
      href: "/resources/migration-guides",
      color: "bg-green-700",
      badge: null
    },
    {
      icon: Users,
      title: "Contribution Guidelines",
      description: "How to contribute components, patterns, and improvements to UX4G",
      href: "/contributing",
      color: "bg-[#FF9933]",
      badge: null
    },
    {
      icon: FileText,
      title: "Changelog",
      description: "Release notes, version history, and what's new in each release",
      href: "/resources/migration-guides",
      color: "bg-primary",
      badge: "v2.4.0"
    }
  ];

  // Quick links
  const quickLinks = [
    {
      icon: BookOpen,
      title: "Installation Guide",
      href: "/resources/getting-started"
    },
    {
      icon: Shield,
      title: "Accessibility",
      href: "/accessibility"
    },
    {
      icon: Zap,
      title: "Design Tokens",
      href: "/foundations"
    },
    {
      icon: Globe,
      title: "Localization",
      href: "/localization-patterns"
    },
    {
      icon: Download,
      title: "Figma Library",
      href: "/resources/figma"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      href: "/governance/analytics"
    }
  ];

  // What's New section
  const recentUpdates = [
    {
      date: "April 2026",
      version: "v2.4.0",
      title: "Enhanced Form Intelligence System",
      description: "New auto-save, smart validation, and progress indicators for complex forms",
      type: "Feature",
      href: "/resources/migration-guides#v2.4.0"
    },
    {
      date: "March 2026",
      version: "v2.3.5",
      title: "Improved Accessibility Features",
      description: "WCAG 2.2 compliance updates and enhanced screen reader support",
      type: "Enhancement",
      href: "/resources/migration-guides#v2.3.5"
    },
    {
      date: "March 2026",
      version: "v2.3.0",
      title: "New Digital Signature Component",
      description: "Secure digital signature capture and verification component",
      type: "Feature",
      href: "/resources/migration-guides#v2.3.0"
    }
  ];

  // Popular resources
  const popularResources = [
    {
      category: "Components",
      items: [
        { name: "Aadhaar Input", href: "/component-aadhaar-input" },
        { name: "OTP Input", href: "/component-otp-input" },
        { name: "Form Builder", href: "/component-form-builder" },
        { name: "Calendar Scheduler", href: "/component-calendar-scheduler" }
      ]
    },
    {
      category: "Patterns",
      items: [
        { name: "Application Submission", href: "/application-submission-pattern" },
        { name: "Aadhaar Authentication", href: "/aadhaar-authentication-pattern" },
        { name: "Status Tracking", href: "/high-volume-status-tracking-pattern" },
        { name: "Payment Flow", href: "/payment-gateway-page" }
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How do I get started with UX4G?",
      answer: "Begin with the Installation Guide to set up the design system, then explore Foundations to understand the core principles."
    },
    {
      question: "Is UX4G accessible?",
      answer: "Yes, all components meet WCAG 2.1 AA standards. We provide detailed accessibility guidelines for each component."
    },
    {
      question: "Can I use UX4G with existing projects?",
      answer: "Absolutely! UX4G is designed to integrate with existing React projects. Check our Migration Guides for details."
    },
    {
      question: "How do I contribute to UX4G?",
      answer: "Review our Contribution Guidelines for the process, coding standards, and how to submit pull requests."
    }
  ];

  return (
    <div className="bg-card min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Book size={40} className="text-[#FF9933]" />
              <h1 className="text-4xl lg:text-5xl font-bold">Documentation Hub</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete documentation for the UX4G Design System - Everything you need to build
              accessible, consistent government digital services
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation... (e.g., 'button component', 'accessibility')"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-card/10 text-primary-foreground placeholder-white/60 focus:outline-none focus:border-[#FF9933] focus:bg-white/20 transition-all"
                aria-label="Search documentation"
              />
            </div>
            <p className="text-sm text-blue-200 mt-2 text-center">
              Press / to focus search • Try searching for components, patterns, or guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Main Documentation Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Explore Documentation</h2>
            <p className="text-lg text-muted-foreground">
              Navigate through comprehensive guides, references, and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainSections.map((section, index) => (
              <Link
                key={index}
                to={section.href}
                className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <section.icon className="text-white" size={28} />
                  </div>
                  {section.badge && (
                    <span className="px-3 py-1 bg-[#FF9933]/10 text-[#FF9933] text-xs font-semibold rounded-full">
                      {section.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {section.description}
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {/* FAQ Card */}
            <Link
              to="/patterns/contact-support/overview"
              className="group bg-gradient-to-br from-[#138808] to-[#0d6006] text-primary-foreground rounded-xl p-6 hover:shadow-xl transition-all duration-200"
            >
              <div className="w-14 h-14 bg-card/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Find quick answers to common questions about UX4G Design System
              </p>

              <div className="flex items-center font-semibold group-hover:gap-2 transition-all">
                <span>View FAQs</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-[#FF9933]" size={32} />
            <h2 className="text-3xl font-bold text-foreground">What's New</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <Link
                key={index}
                to={update.href}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">{update.date}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    update.type === "Feature"
                      ? "bg-green-700/10 text-[#138808]"
                      : "bg-[#FF9933]/10 text-[#FF9933]"
                  }`}>
                    {update.type}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-mono rounded mb-2">
                    {update.version}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {update.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {update.description}
                </p>
              </Link>
            ))}
          </div>

      <div className="mt-8 text-center">
            <Link
              to="/resources/migration-guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-colors"
            >
              View Full Changelog
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quick Access</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-[#FF9933] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FF9933]/10 transition-colors">
                  <link.icon className="text-muted-foreground group-hover:text-[#FF9933] transition-colors" size={24} />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Popular Resources</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {popularResources.map((section, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF9933] rounded-full"></div>
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>
            <Link
              to="/patterns/contact-support/overview"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:bg-blue-50 rounded-lg transition-colors"
            >
              View All FAQs
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="text-[#FF9933]" size={14} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/patterns/contact-support/overview"
              className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View All FAQs
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-gradient-to-br from-[#000080] to-[#000060]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="mx-auto mb-4 text-[#FF9933]" size={48} />
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need Additional Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to support you
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/patterns/contact-support/overview"
                className="px-8 py-3 bg-[#FF9933] text-primary-foreground font-semibold rounded-lg hover:bg-[#e68a2e] transition-colors inline-flex items-center gap-2"
              >
                <Users size={20} />
                Contact Support
              </Link>
              <Link
                to="/contributing"
                className="px-8 py-3 bg-card text-primary font-semibold rounded-lg hover:bg-muted transition-colors inline-flex items-center gap-2"
              >
                <GitBranch size={20} />
                Contribute
              </Link>
              <a
                href="https://github.com/ux4g"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-primary-foreground font-semibold rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={20} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/resources/getting-started" className="text-muted-foreground hover:text-primary transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link to="/resources/starter-kit" className="text-muted-foreground hover:text-primary transition-colors">
                    Starter Kit
                  </Link>
                </li>
                <li>
                  <Link to="/governance/adoption" className="text-muted-foreground hover:text-primary transition-colors">
                    Adoption Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Design</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/foundations" className="text-muted-foreground hover:text-primary transition-colors">
                    Foundations
                  </Link>
                </li>
                <li>
                  <Link to="/components" className="text-muted-foreground hover:text-primary transition-colors">
                    Components
                  </Link>
                </li>
                <li>
                  <Link to="/patterns" className="text-muted-foreground hover:text-primary transition-colors">
                    Patterns
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="/resources/figma" className="text-muted-foreground hover:text-primary transition-colors">
                    Figma Library
                  </Link>
                </li>
                <li>
                  <Link to="/governance" className="text-muted-foreground hover:text-primary transition-colors">
                    Governance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contributing" className="text-muted-foreground hover:text-primary transition-colors">
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link to="/resources/migration-guides" className="text-muted-foreground hover:text-primary transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link to="/patterns/contact-support/overview" className="text-muted-foreground hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

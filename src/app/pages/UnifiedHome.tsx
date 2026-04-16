/**
 * UX4G Landing Page
 * Inspired by Material Design 3 (m3.material.io) — clean hero, card grid, section-based layout
 */
import { Link } from "react-router";
import {
  ArrowRight, Box, Layers, Code, Palette, Shield, Globe,
  Zap, Users, BookOpen, CheckCircle, BarChart3, Building2
} from "lucide-react";

export default function UnifiedHome() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,81,150,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(19,136,8,0.06),transparent_50%)]" />
        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#005196]/[0.04] blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-[#FF9933]/[0.05] blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
                <Shield size={14} className="text-[#005196]" />
                Government of India Design System
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                UX4G
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl mb-10">
                Build consistent, accessible digital public services with India's open-source design system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#005196] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#005196]/20 hover:bg-[#004178] transition-colors"
                >
                  Get started <ArrowRight size={16} />
                </Link>
                <Link
                  to="/documentation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-full text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right: Component showcase illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main card — Button variants */}
                <div className="bg-card border border-border rounded-2xl shadow-xl p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">components/button</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-[#005196] text-white text-sm rounded-lg font-medium">Primary</button>
                    <button className="px-4 py-2 border border-[#005196] text-[#005196] text-sm rounded-lg font-medium">Secondary</button>
                    <button className="px-4 py-2 text-[#005196] text-sm rounded-lg font-medium hover:bg-muted">Tertiary</button>
                    <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg font-medium">Destructive</button>
                  </div>
                  {/* Progress bar preview */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-foreground">Application Progress</span>
                      <span className="text-muted-foreground">65%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#005196] rounded-full" style={{width: '65%'}} />
                    </div>
                  </div>
                  {/* Badge row */}
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Approved</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Pending</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">Submitted</span>
                  </div>
                </div>

                {/* Floating card — Stepper */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl shadow-lg p-4 w-56">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                    <div className="flex-1 h-0.5 bg-green-500 rounded" />
                    <div className="w-6 h-6 rounded-full bg-[#005196] text-white flex items-center justify-center text-[10px] font-bold">2</div>
                    <div className="flex-1 h-0.5 bg-muted rounded" />
                    <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[10px] font-bold">3</div>
                  </div>
                  <div className="flex justify-between mt-2 text-[9px] text-muted-foreground">
                    <span>Personal</span>
                    <span>Documents</span>
                    <span>Review</span>
                  </div>
                </div>

                {/* Floating card — Toggle */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-3 flex items-center gap-3">
                  <div className="w-10 h-5 bg-[#005196] rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-card rounded-full shadow" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Dark mode</span>
                </div>

                {/* Floating card — Language */}
                <div className="absolute top-1/2 -right-8 bg-card border border-border rounded-xl shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#005196]" />
                    <span className="text-xs font-medium text-foreground">हिन्दी</span>
                    <span className="text-[10px] text-muted-foreground">▾</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '77', label: 'Components' },
              { value: '3', label: 'Frameworks' },
              { value: '2,551', label: 'Tests' },
              { value: 'AA', label: 'WCAG Level' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GRID (M3-style cards) ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Box, title: '77 Components', desc: 'Form elements, navigation, data display, layout, feedback, and India-specific components like Aadhaar Input and UPI Payment.', to: '/components', color: 'bg-blue-50 text-[#005196] dark:bg-blue-950/30' },
            { icon: Code, title: '3 Framework Lanes', desc: 'Every component ships with React, Angular, and Web Components code — download and use in any stack.', to: '/resources/component-specs', color: 'bg-green-50 text-[#138808] dark:bg-green-950/30' },
            { icon: Palette, title: 'Design Tokens', desc: 'CSS custom properties with --ux4g-* prefix. Consistent colors, spacing, and typography across all frameworks.', to: '/foundations', color: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30' },
            { icon: Shield, title: 'Accessibility First', desc: 'WCAG 2.1 AA compliant. Keyboard navigation, screen reader support, 44px touch targets, focus rings on every component.', to: '/foundations', color: 'bg-purple-50 text-purple-700 dark:bg-purple-950/30' },
            { icon: Globe, title: '22 Indian Languages', desc: 'Built-in i18n with LanguageSelector supporting all 22 scheduled languages of India including Hindi, Tamil, and Bengali.', to: '/components/language-selector', color: 'bg-rose-50 text-rose-700 dark:bg-rose-950/30' },
            { icon: Layers, title: 'Service Blueprints', desc: 'Complete certificate service flow, identity patterns, officer dashboards, and payment flows — ready to implement.', to: '/reference-service/overview', color: 'bg-teal-50 text-teal-700 dark:bg-teal-950/30' },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-[#005196]/30 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${card.color} mb-4`}>
                <card.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#005196] transition-colors">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              <ArrowRight size={16} className="absolute top-6 right-6 text-muted-foreground/0 group-hover:text-[#005196] transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── INDIA-SPECIFIC SECTION ── */}
      <section className="bg-gradient-to-b from-[#005196]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for India</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Purpose-built components for Indian government digital services — Aadhaar, PAN, UPI, and more.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Aadhaar Input', desc: '12-digit masked input with Verhoeff checksum validation and 4-4-4 formatting.', to: '/components/aadhaar-input' },
              { title: 'PAN Card Input', desc: 'AAAAA0000A format validation with real-time feedback for tax services.', to: '/components/pan-card-input' },
              { title: 'Address Autocomplete', desc: 'PIN code to city/state auto-fill using India Post database.', to: '/components/address-autocomplete-india' },
              { title: 'Payment Gateway', desc: 'UPI QR, Net Banking, and Card payments for government fee collection.', to: '/components/payment-gateway' },
              { title: 'Language Selector', desc: '22 scheduled languages with native script labels (हिन्दी, தமிழ், বাংলা).', to: '/components/language-selector' },
              { title: 'Digital Signature', desc: 'DSC token and Aadhaar eSign integration for official document signing.', to: '/components/digital-signature' },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-[#FF9933]/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9933] mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-[#005196] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR EVERY ROLE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">For every team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you design, develop, or manage — UX4G has the tools you need.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Palette, role: 'Designers', items: ['Design tokens & color system', 'Spacing & typography scales', 'Component specifications', 'Figma kit (coming soon)'], to: '/foundations' },
            { icon: Code, role: 'Developers', items: ['React, Angular, Web Components', 'TypeScript + full type safety', 'Copy-paste code downloads', '2,551 automated tests'], to: '/components' },
            { icon: Building2, role: 'Department Leads', items: ['Governance & conformance', 'Adoption tracking', 'Service blueprints', 'Onboarding guides'], to: '/governance' },
          ].map((card) => (
            <Link
              key={card.role}
              to={card.to}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all"
            >
              <card.icon size={28} className="text-[#005196] mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">{card.role}</h3>
              <ul className="space-y-2.5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} className="text-[#138808] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR RESOURCES (M3-style) ── */}
      <section className="border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Popular resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Get Started', desc: 'Installation, setup, and your first component', to: '/resources/getting-started', icon: Zap },
              { title: 'Component Library', desc: '77 components with live examples and code', to: '/components', icon: Box },
              { title: 'Service Blueprints', desc: 'Certificate, payment, and identity flows', to: '/reference-service/overview', icon: Layers },
              { title: 'API Reference', desc: 'Full API docs for all packages', to: '/api-reference', icon: BookOpen },
            ].map((res) => (
              <Link
                key={res.title}
                to={res.to}
                className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-[#005196]/30 transition-all"
              >
                <res.icon size={20} className="text-[#005196] mb-3" />
                <h3 className="font-semibold text-foreground group-hover:text-[#005196] transition-colors">{res.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Start building with UX4G</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join government teams across India building consistent, accessible digital services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#005196] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#005196]/20 hover:bg-[#004178] transition-colors"
            >
              Browse components <ArrowRight size={16} />
            </Link>
            <a
              href="https://github.com/dbn1972/DesignSystem2016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-full text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

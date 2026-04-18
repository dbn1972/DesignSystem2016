import { Link, useLocation } from "react-router";
import {
  Home,
  Search,
  ArrowLeft,
  BookOpen,
  Layers,
  Puzzle,
  FileText,
  Shield,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const QUICK_LINKS = [
  { to: "/components", label: "Components", desc: "Browse the full component library", icon: Layers },
  { to: "/foundations", label: "Foundations", desc: "Design tokens, typography, color", icon: BookOpen },
  { to: "/patterns", label: "Patterns", desc: "Identity, forms, consent flows", icon: Puzzle },
  { to: "/resources/getting-started", label: "Getting Started", desc: "Installation and setup guide", icon: FileText },
  { to: "/governance", label: "Governance", desc: "Conformance, analytics, adoption", icon: Shield },
  { to: "/contact", label: "Contact Support", desc: "Get help from the UX4G team", icon: HelpCircle },
];

const POPULAR_PAGES = [
  { to: "/components/button", label: "Button" },
  { to: "/components/input", label: "Input" },
  { to: "/components/alert", label: "Alert" },
  { to: "/components/card", label: "Card" },
  { to: "/components/table", label: "Table" },
  { to: "/components/modal", label: "Modal" },
  { to: "/components/tabs", label: "Tabs" },
  { to: "/components/dialog", label: "Dialog" },
];

export default function NotFound() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  // Try to suggest a section based on the URL
  const segment = pathname.split("/").filter(Boolean)[0] || "";
  const suggestion = QUICK_LINKS.find(
    (l) => l.to.includes(segment) && segment.length > 2
  );

  return (
    <div className="min-h-[80vh] bg-background text-foreground">
      {/* Hero */}
      <div className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          {/* Dog illustration + 404 */}
          <div className="relative inline-block mb-4">
            <p className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter text-primary/10 select-none">
              404
            </p>
            {/* Cute dog sitting on the 0 */}
            <svg
              viewBox="0 0 200 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 pointer-events-none"
              aria-hidden="true"
            >
              {/* Body */}
              <ellipse cx="100" cy="130" rx="38" ry="30" className="fill-primary/10" />
              {/* Head */}
              <circle cx="100" cy="80" r="28" className="fill-primary/15" />
              {/* Left ear (floppy) */}
              <ellipse cx="74" cy="62" rx="14" ry="22" transform="rotate(-15 74 62)" className="fill-primary/20" />
              {/* Right ear (floppy) */}
              <ellipse cx="126" cy="62" rx="14" ry="22" transform="rotate(15 126 62)" className="fill-primary/20" />
              {/* Left eye */}
              <circle cx="90" cy="76" r="4" className="fill-foreground" />
              <circle cx="91.5" cy="74.5" r="1.5" fill="white" />
              {/* Right eye */}
              <circle cx="110" cy="76" r="4" className="fill-foreground" />
              <circle cx="111.5" cy="74.5" r="1.5" fill="white" />
              {/* Nose */}
              <ellipse cx="100" cy="88" rx="5" ry="3.5" className="fill-foreground" />
              {/* Mouth */}
              <path d="M95 91 Q100 97 105 91" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
              {/* Tongue */}
              <ellipse cx="100" cy="97" rx="4" ry="5" className="fill-red-400" />
              {/* Front left paw */}
              <ellipse cx="78" cy="155" rx="10" ry="6" className="fill-primary/15" />
              {/* Front right paw */}
              <ellipse cx="122" cy="155" rx="10" ry="6" className="fill-primary/15" />
              {/* Tail */}
              <path d="M138 125 Q155 105 148 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" className="text-primary/20" />
              {/* Collar */}
              <path d="M76 95 Q100 105 124 95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" className="text-primary/40" />
              {/* Collar tag */}
              <circle cx="100" cy="103" r="4" className="fill-primary/30" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground -mt-8 sm:-mt-12">
            Page not found
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The page <code className="px-2 py-0.5 bg-muted rounded text-sm font-mono text-foreground">{pathname}</code> doesn't exist or has been moved.
          </p>

          {/* Smart suggestion */}
          {suggestion && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-primary/5 border border-primary/20 rounded-xl text-sm">
              <span className="text-muted-foreground">Did you mean</span>
              <Link to={suggestion.to} className="font-semibold text-primary hover:underline">
                {suggestion.label}
              </Link>
              <span className="text-muted-foreground">?</span>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-semibold text-foreground shadow-sm hover:bg-muted/60 transition-colors"
            >
              <ArrowLeft size={16} />
              Go back
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity"
            >
              <Home size={16} />
              Home page
            </Link>
          </div>

          {/* Inline search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) {
                // Trigger the global search modal via keyboard shortcut
                const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                document.dispatchEvent(event);
              }
            }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the design system..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Quick links grid */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-lg font-bold text-foreground mb-6">Browse by section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/5 text-primary shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Popular components */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-foreground mb-4">Popular components</h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR_PAGES.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                {page.label}
                <ArrowRight size={13} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Help text */}
        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            If you followed a link to get here, please{" "}
            <a
              href="https://github.com/dbn1972/DesignSystem2016/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              report the broken link
            </a>{" "}
            so we can fix it.
          </p>
        </div>
      </div>
    </div>
  );
}

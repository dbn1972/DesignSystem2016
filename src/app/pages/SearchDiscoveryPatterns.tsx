import { Link } from "react-router";
import { Search, Filter, AlertCircle, TrendingUp, Clock, Compass, List, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function SearchDiscoveryPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-4 border-primary">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Search size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Search & Discovery Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Intent-based discovery patterns that help citizens find government services through natural language, 
                suggestions, and guided assistance — not just exact keyword matching. Designed for accessibility, 
                multi-language support, and strong recovery from failed searches.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Discovery</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">8 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Focus: <span className="font-bold text-foreground">Intent-Based</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold text-center shadow-lg">
                DISCOVERY SYSTEM
              </div>
              <div className="px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg font-bold text-center">
                MULTILINGUAL
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="/patterns/search-discovery/overview" className="text-primary hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-primary hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* System Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Intent-Based Discovery?</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Challenge
                </h3>
                <p className="text-sm text-muted-foreground">
                  Citizens don't know exact service names. They search for "birth certificate" not "Civil Registration 
                  Certificate Application". Traditional keyword search fails them.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Solution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Intent-based discovery understands what users need, suggests relevant services, guides them through 
                  wizards, and provides strong recovery when searches fail.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  The Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  Users find services faster, reduce support requests, increase service adoption, and have better 
                  overall experience with government digital services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Pattern Categories
          </h2>

          {/* Core Search Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Search size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Core Search Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Global Search"
                description="Universal search across all government services with autocomplete, suggestions, and smart matching"
                icon={<Search size={32} className="text-blue-600" />}
                link="/patterns/search-discovery/global-search"
                complexity="Medium"
                timeToComplete="< 1 minute"
                useCases={["Service discovery", "Quick access", "Natural language queries"]}
              />
              <PatternCard
                title="Service Search Results"
                description="Structured display of search results with relevance ranking, highlights, and service previews"
                icon={<List size={32} className="text-purple-600" />}
                link="/patterns/search-discovery/search-results"
                complexity="Medium"
                timeToComplete="1-2 minutes"
                useCases={["Result browsing", "Service comparison", "Detailed information"]}
              />
            </div>
          </div>

          {/* Filtering & Refinement Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Filtering & Refinement Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Filters & Facets"
                description="Multi-dimensional filtering by department, category, eligibility, language, and location"
                icon={<Filter size={32} className="text-green-600" />}
                link="/patterns/search-discovery/filters"
                complexity="High"
                timeToComplete="2-3 minutes"
                useCases={["Narrow results", "Department-specific", "Category browsing"]}
              />
              <PatternCard
                title="No Results / Zero State"
                description="Strong recovery patterns with suggestions, alternatives, and guided assistance when no results found"
                icon={<AlertCircle size={32} className="text-orange-600" />}
                link="/patterns/search-discovery/no-results"
                complexity="Medium"
                timeToComplete="1-2 minutes"
                useCases={["Failed searches", "Misspellings", "Service not available"]}
              />
            </div>
          </div>

          {/* Discovery & Suggestion Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Discovery & Suggestion Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Suggested Services"
                description="Smart suggestions based on user profile, behavior, location, and frequently accessed services"
                icon={<Zap size={32} className="text-yellow-600" />}
                link="/patterns/search-discovery/suggested-services"
                complexity="Low"
                timeToComplete="< 1 minute"
                useCases={["Personalization", "Quick access", "Proactive discovery"]}
              />
              <PatternCard
                title="Popular Services"
                description="Most accessed services by category with usage trends and seasonal highlights"
                icon={<TrendingUp size={32} className="text-teal-600" />}
                link="/patterns/search-discovery/popular-services"
                complexity="Low"
                timeToComplete="< 1 minute"
                useCases={["Service browsing", "Discovery", "Trending services"]}
              />
            </div>
          </div>

          {/* Contextual & Guided Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Compass size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Contextual & Guided Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Recently Used Services"
                description="Quick access to user's recently accessed services with timestamp and status tracking"
                icon={<Clock size={32} className="text-indigo-600" />}
                link="/patterns/search-discovery/recent-services"
                complexity="Low"
                timeToComplete="< 30 seconds"
                useCases={["Return users", "Repeat access", "Service continuation"]}
              />
              <PatternCard
                title="Guided Service Finder"
                description="Step-by-step wizard that asks questions to identify the exact service user needs"
                icon={<Compass size={32} className="text-pink-600" />}
                link="/patterns/search-discovery/guided-finder"
                complexity="High"
                timeToComplete="2-5 minutes"
                useCases={["Complex needs", "Uncertain users", "Service education"]}
              />
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#138808] pl-4">
            Implementation Guidelines
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <GuidelineCard
              title="Search Behavior"
              points={[
                "Autocomplete after 2 characters typed",
                "Show suggestions while typing",
                "Support natural language queries",
                "Match synonyms and common terms",
                "Highlight matched keywords in results"
              ]}
            />
            <GuidelineCard
              title="Result Display"
              points={[
                "Rank by relevance and popularity",
                "Show service name, description, department",
                "Include quick actions (Apply, Learn More)",
                "Display eligibility indicators",
                "Provide result count and filters"
              ]}
            />
            <GuidelineCard
              title="Recovery Patterns"
              points={[
                "Never show empty 'No results' screen",
                "Suggest similar services or categories",
                "Offer guided finder as alternative",
                "Show popular services as fallback",
                "Provide contact support option"
              ]}
            />
          </div>
        </section>

        {/* Search Intelligence Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Search Intelligence Features
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-600" />
                Smart Matching
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Synonym matching:</strong> "DL" matches "Driving License"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fuzzy search:</strong> Handle typos and misspellings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Multi-language:</strong> Search in any of 22 scheduled languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Intent detection:</strong> Understand what user wants to do</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-teal-600" />
                Personalization
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Location-based:</strong> Show services relevant to user's state/district</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Profile-based:</strong> Suggest services based on user demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Usage history:</strong> Prioritize recently used services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Trending services:</strong> Highlight seasonal or time-sensitive services</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
            Related Resources
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Related Pattern Families</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/contact-support" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Contact & Support Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/forms" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Form Intelligence System</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Design System Components</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Search Input Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Filter & Sort Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Card & List Layouts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function PatternCard({ title, description, icon, link, complexity, timeToComplete, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  timeToComplete: string;
  useCases: string[];
}) {
  return (
    <Link to={link} className="block group">
      <div className="bg-card border-2 border-border rounded-lg p-6 h-full transition-all hover:border-primary hover:shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-background border-2 border-border rounded-lg group-hover:border-primary transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-1 bg-muted rounded">
                {complexity} Complexity
              </span>
              <span>{timeToComplete}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="mb-4">
          <div className="text-xs font-bold text-muted-foreground mb-2">Common Use Cases:</div>
          <ul className="space-y-1">
            {useCases.map((useCase, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                <span className="text-[#138808]">•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>View Pattern</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function GuidelineCard({ title, points }: {
  title: string;
  points: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Link } from "react-router";
import { Search, CheckCircle, AlertCircle, ArrowRight, Info, Zap, Users } from "lucide-react";

export default function SearchDiscoveryOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/search-discovery" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Search & Discovery Patterns
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-border rounded flex items-center justify-center">
              <Info size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">Pattern Overview</h1>
              <p className="text-lg text-muted-foreground">
                Understanding search and discovery in government digital services
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Purpose of Search & Discovery Patterns
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <p className="text-muted-foreground mb-6">
                  Search and Discovery patterns help citizens find government services based on their intent and needs, 
                  not exact service names or keywords. These patterns reduce friction, improve service adoption, and 
                  ensure users can accomplish their goals even when they don't know the formal terminology.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">The Problem</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Citizens use informal terms</li>
                      <li>• Service names are bureaucratic</li>
                      <li>• Multiple languages and synonyms</li>
                      <li>• Users don't know what they need</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">The Solution</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Natural language search</li>
                      <li>• Smart suggestions</li>
                      <li>• Guided wizards</li>
                      <li>• Strong recovery patterns</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">The Impact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Faster service discovery</li>
                      <li>• Reduced support requests</li>
                      <li>• Higher completion rates</li>
                      <li>• Better user satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pattern Selection Guide */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                When to Use Each Pattern
              </h2>
              <div className="space-y-4">
                <PatternGuide
                  title="Global Search"
                  when={[
                    "User knows what they're looking for (partially)",
                    "Quick access to specific services",
                    "Natural language queries",
                    "Entry point for discovery"
                  ]}
                  notWhen={[
                    "User doesn't know what service they need",
                    "Browsing without specific intent",
                    "Complex eligibility requirements"
                  ]}
                  color="blue"
                />
                <PatternGuide
                  title="Service Search Results"
                  when={[
                    "Display search query results",
                    "Multiple matching services found",
                    "User needs to compare options",
                    "Show relevance ranking"
                  ]}
                  notWhen={[
                    "No results found (use Zero State)",
                    "Single exact match (redirect)",
                    "User prefers browsing by category"
                  ]}
                  color="purple"
                />
                <PatternGuide
                  title="Filters & Facets"
                  when={[
                    "Many results need refinement",
                    "Multiple service categories",
                    "Department-specific filtering",
                    "Eligibility-based narrowing"
                  ]}
                  notWhen={[
                    "Few results (< 10)",
                    "Single category results",
                    "Simple result sets"
                  ]}
                  color="green"
                />
                <PatternGuide
                  title="No Results / Zero State"
                  when={[
                    "Search query returns no matches",
                    "All filters result in empty set",
                    "Misspelled queries",
                    "Service not available in location"
                  ]}
                  notWhen={[
                    "Results exist (even if few)",
                    "User hasn't searched yet",
                    "Loading state"
                  ]}
                  color="orange"
                />
                <PatternGuide
                  title="Suggested Services"
                  when={[
                    "Personalized recommendations",
                    "User profile exists",
                    "Location-based suggestions",
                    "Proactive service discovery"
                  ]}
                  notWhen={[
                    "Anonymous users (no profile)",
                    "First-time visitors",
                    "Privacy-sensitive scenarios"
                  ]}
                  color="yellow"
                />
                <PatternGuide
                  title="Popular Services"
                  when={[
                    "General browsing",
                    "No specific intent",
                    "Show trending services",
                    "Seasonal highlights"
                  ]}
                  notWhen={[
                    "User has specific goal",
                    "Search already performed",
                    "Personalized view preferred"
                  ]}
                  color="teal"
                />
                <PatternGuide
                  title="Recently Used Services"
                  when={[
                    "Returning authenticated users",
                    "Quick re-access needed",
                    "Continue previous actions",
                    "Track service history"
                  ]}
                  notWhen={[
                    "First-time users",
                    "Guest/anonymous access",
                    "No previous usage"
                  ]}
                  color="indigo"
                />
                <PatternGuide
                  title="Guided Service Finder"
                  when={[
                    "User unsure what service needed",
                    "Complex eligibility rules",
                    "Multiple service options",
                    "Educational journey required"
                  ]}
                  notWhen={[
                    "User knows exact service",
                    "Simple service selection",
                    "Time-sensitive needs"
                  ]}
                  color="pink"
                />
              </div>
            </section>

            {/* Search Intelligence */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-green-500 pl-4">
                Search Intelligence Features
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Zap size={20} className="text-yellow-600" />
                        Synonym & Fuzzy Matching
                      </h3>
                      <div className="bg-background rounded-lg p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left pb-2 font-bold">User Searches</th>
                              <th className="text-left pb-2 font-bold">System Matches</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border">
                              <td className="py-2">"DL" or "license"</td>
                              <td className="py-2">Driving License Application</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-2">"birth certificte" (typo)</td>
                              <td className="py-2">Birth Certificate</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-2">"ration card"</td>
                              <td className="py-2">Public Distribution System Card</td>
                            </tr>
                            <tr>
                              <td className="py-2">"passport"</td>
                              <td className="py-2">Passport Application, Passport Renewal, Passport Status</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Users size={20} className="text-purple-600" />
                        Multi-Language Support
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Search works across all 22 scheduled Indian languages with automatic translation and 
                        language detection.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3">
                          <div className="font-bold mb-1">Hindi</div>
                          <div className="text-muted-foreground">"पासपोर्ट" → Passport</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3">
                          <div className="font-bold mb-1">Tamil</div>
                          <div className="text-muted-foreground">"பாஸ்போர்ட்" → Passport</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3">
                          <div className="font-bold mb-1">Bengali</div>
                          <div className="text-muted-foreground">"পাসপোর্ট" → Passport</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-600" />
                        Intent Detection
                      </h3>
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="font-mono bg-card px-2 py-1 rounded text-xs">Query:</span>
                            <span>"How to apply for voter ID"</span>
                            <span className="ml-auto text-green-700 dark:text-green-400 font-bold">→ Intent: Application</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-mono bg-card px-2 py-1 rounded text-xs">Query:</span>
                            <span>"Check passport status"</span>
                            <span className="ml-auto text-green-700 dark:text-green-400 font-bold">→ Intent: Tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-mono bg-card px-2 py-1 rounded text-xs">Query:</span>
                            <span>"Renew driving license"</span>
                            <span className="ml-auto text-green-700 dark:text-green-400 font-bold">→ Intent: Renewal</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">WCAG 2.1 Level AA Compliance</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keyboard-only search navigation (Tab, Arrow keys, Enter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screen reader announces result count and suggestions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>ARIA live regions for dynamic results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Clear focus indicators on all interactive elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sufficient color contrast (4.5:1 minimum)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Inclusive Design Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Voice search support for low literacy users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Visual service icons for quick recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Guided finder for users needing assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mobile-optimized for touch interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Persistent search history for easy re-access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            <QuickNavigation />
            <KeyPrinciples />
            <Resources />
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function PatternGuide({ title, when, notWhen, color }: {
  title: string;
  when: string[];
  notWhen: string[];
  color: string;
}) {
  const colors = {
    blue: 'border-blue-300 bg-blue-50',
    purple: 'border-purple-300 bg-purple-50',
    green: 'border-green-300 bg-green-50',
    orange: 'border-orange-300 bg-orange-50',
    yellow: 'border-yellow-300 bg-yellow-50',
    teal: 'border-teal-300 bg-teal-50',
    indigo: 'border-indigo-300 bg-indigo-50',
    pink: 'border-pink-300 bg-pink-50'
  };

  return (
    <div className={`bg-card border-2 ${colors[color as keyof typeof colors]} rounded-lg p-6`}>
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-sm font-bold text-foreground">Use When:</span>
          </div>
          <ul className="space-y-2">
            {when.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={16} className="text-red-600" />
            <span className="text-sm font-bold text-foreground">Don't Use When:</span>
          </div>
          <ul className="space-y-2">
            {notWhen.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function QuickNavigation() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Navigation</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <a href="#purpose" className="block text-muted-foreground hover:text-primary">Purpose</a>
        <a href="#pattern-selection" className="block text-muted-foreground hover:text-primary">Pattern Selection</a>
        <a href="#search-intelligence" className="block text-muted-foreground hover:text-primary">Search Intelligence</a>
        <a href="#accessibility" className="block text-muted-foreground hover:text-primary">Accessibility</a>
      </div>
    </div>
  );
}

function KeyPrinciples() {
  return (
    <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Key Principles</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Intent-based discovery</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Natural language support</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Strong recovery patterns</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Personalized suggestions</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Multi-language matching</span>
        </li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/search-discovery" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Patterns</span>
        </Link>
        <Link to="/components" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Search Components</span>
        </Link>
        <Link to="/accessibility" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Accessibility Guide</span>
        </Link>
      </div>
    </div>
  );
}

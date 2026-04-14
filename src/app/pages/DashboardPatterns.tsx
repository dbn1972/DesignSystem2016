import { Link } from "react-router";
import { LayoutDashboard, User, Bell, CheckSquare, Clock, Bookmark, Settings, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function DashboardPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <LayoutDashboard size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Dashboard & Personalization Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Task-focused, personalized dashboard patterns that help citizens manage their government service interactions. 
                Centralized access to applications, notifications, saved services, pending actions, and activity history with 
                intelligent prioritization and continuity across service journeys.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Personalization</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">7 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Focus: <span className="font-bold text-foreground">Task-Driven</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-bold text-center shadow-lg">
                PERSONALIZED
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                TASK-FOCUSED
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
              <Link to="/patterns/dashboard/overview" className="text-primary hover:underline text-sm font-medium">
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Personalized Dashboards?</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Citizen Benefits
                </h3>
                <p className="text-sm text-muted-foreground">
                  One place to access all services, track applications, complete pending tasks, and manage 
                  preferences. Reduces cognitive load and eliminates need to remember multiple portals.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Service Continuity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamless resume of incomplete applications, proactive notifications for required actions, 
                  and intelligent suggestions based on user profile and behavior patterns.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  System Efficiency
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reduces abandonment rates, improves completion times, decreases support requests, 
                  and provides valuable analytics on user behavior and service usage patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-indigo-500 pl-4">
            Pattern Categories
          </h2>

          {/* Overview & Management Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Overview & Management Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Citizen Dashboard"
                description="Unified dashboard providing overview of all user activities, pending tasks, recent applications, and quick access to services"
                icon={<LayoutDashboard size={32} className="text-blue-600" />}
                link="/patterns/dashboard/citizen-dashboard"
                complexity="High"
                userType="All Citizens"
                useCases={["Service overview", "Quick actions", "Status at a glance"]}
              />
              <PatternCard
                title="Application Dashboard"
                description="Centralized view of all submitted applications with status tracking, document management, and next steps"
                icon={<CheckSquare size={32} className="text-green-600" />}
                link="/patterns/dashboard/application-dashboard"
                complexity="High"
                userType="Service Users"
                useCases={["Track applications", "Upload documents", "View decisions"]}
              />
            </div>
          </div>

          {/* Action & Task Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckSquare size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Action & Task Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Task List (Pending Actions)"
                description="Prioritized list of required actions, deadlines, and pending tasks with contextual guidance and quick completion"
                icon={<CheckSquare size={32} className="text-orange-600" />}
                link="/patterns/dashboard/task-list"
                complexity="Medium"
                userType="Active Users"
                useCases={["Complete actions", "Meet deadlines", "Clear notifications"]}
              />
              <PatternCard
                title="Notifications Center"
                description="Centralized notification hub with categorization, filtering, and action routing from messages"
                icon={<Bell size={32} className="text-purple-600" />}
                link="/patterns/dashboard/notifications"
                complexity="Medium"
                userType="All Citizens"
                useCases={["View alerts", "Action on updates", "Manage preferences"]}
              />
            </div>
          </div>

          {/* Saved & History Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Bookmark size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Saved & History Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Saved Services"
                description="Bookmarked services for quick access with personalized recommendations and recently accessed items"
                icon={<Bookmark size={32} className="text-teal-600" />}
                link="/patterns/dashboard/saved-services"
                complexity="Low"
                userType="All Citizens"
                useCases={["Quick access", "Service discovery", "Favorites management"]}
              />
              <PatternCard
                title="Activity History"
                description="Comprehensive timeline of all user interactions, applications, payments, and system activities with search and filter"
                icon={<Clock size={32} className="text-indigo-600" />}
                link="/patterns/dashboard/activity-history"
                complexity="Medium"
                userType="All Citizens"
                useCases={["Track history", "Download receipts", "Audit trail"]}
              />
            </div>
          </div>

          {/* Profile & Settings Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <User size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Profile & Settings Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Profile and Preferences"
                description="User profile management with personal information, communication preferences, security settings, and privacy controls"
                icon={<Settings size={32} className="text-pink-600" />}
                link="/patterns/dashboard/profile-preferences"
                complexity="High"
                userType="All Citizens"
                useCases={["Update profile", "Manage preferences", "Privacy settings"]}
              />
              <div className="p-6 border-2 border-dashed border-border rounded-lg bg-background flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-2">Additional dashboard patterns can be added:</p>
                  <p className="text-sm text-gray-500">Department-specific dashboards, Family dashboard, Service analytics</p>
                </div>
              </div>
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
              title="Data Hierarchy"
              points={[
                "Prioritize pending actions at top",
                "Show most recent items first",
                "Group by category or urgency",
                "Use visual indicators for status",
                "Provide filtering and sorting options"
              ]}
            />
            <GuidelineCard
              title="Navigation & Flow"
              points={[
                "Enable quick access to all patterns",
                "Maintain context when navigating",
                "Provide breadcrumbs and back navigation",
                "Deep link to specific items",
                "Support resume from any point"
              ]}
            />
            <GuidelineCard
              title="Personalization"
              points={[
                "Use citizen's name and profile data",
                "Show location-relevant services",
                "Suggest based on user behavior",
                "Remember preferences and settings",
                "Adapt interface to usage patterns"
              ]}
            />
          </div>
        </section>

        {/* Dashboard Intelligence Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Dashboard Intelligence Features
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-600" />
                Smart Prioritization
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Deadline-based:</strong> Tasks due soon appear at top</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Urgency indicators:</strong> Red for urgent, yellow for important</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Blocking detection:</strong> Show dependencies and blockers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Smart grouping:</strong> Related tasks grouped together</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <User size={20} className="text-purple-600" />
                Personalization Engine
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Profile-based:</strong> Services relevant to user demographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Location-aware:</strong> State/district specific services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Usage patterns:</strong> Frequently accessed items prioritized</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Lifecycle stage:</strong> Services relevant to life events</span>
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
                    <Link to="/patterns/search-discovery" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Search & Discovery Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/identity" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Identity & Access Patterns</span>
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
                      <span>Card & List Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Navigation Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Status & Badge Components</span>
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

function PatternCard({ title, description, icon, link, complexity, userType, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  userType: string;
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
                {complexity}
              </span>
              <span>{userType}</span>
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

import { Link } from "react-router";
import { MessageSquare, Headphones, AlertCircle, Phone, FileText, ThumbsUp, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSupportPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#138808] border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <MessageSquare size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Contact & Support Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                A comprehensive system of reusable patterns for citizen-government communication across 
                general inquiries, service requests, grievances, escalations, and urgent support needs. 
                Designed for accessibility, multi-channel routing, and structured case management.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Communication</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">8 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                GOVERNMENT GRADE
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                ACCESSIBLE
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
              <Link to="/patterns/contact-support/overview" className="text-primary hover:underline text-sm font-medium">
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
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">System Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Purpose
                </h3>
                <p className="text-sm text-muted-foreground">
                  Provide citizens with structured, accessible channels to contact government 
                  departments for inquiries, support requests, grievances, and urgent assistance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Key Features
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Intent-based routing</li>
                  <li>• Priority escalation paths</li>
                  <li>• Multi-language support</li>
                  <li>• Case tracking & reference IDs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Compliance
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• WCAG 2.1 Level AA</li>
                  <li>• Right to Information Act</li>
                  <li>• Digital India guidelines</li>
                  <li>• GIGW accessibility norms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#FF9933] pl-4">
            Pattern Categories
          </h2>

          {/* Standard Contact Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Standard Contact Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="General Contact Form"
                description="Basic contact pattern for general inquiries, questions, and non-urgent communication with government departments"
                icon={<MessageSquare size={32} className="text-blue-600" />}
                link="/patterns/contact-support/general-contact"
                complexity="Low"
                timeToComplete="3-5 minutes"
                useCases={["General inquiries", "Information requests", "Basic questions"]}
              />
              <PatternCard
                title="Department Inquiry Form"
                description="Structured inquiry pattern with department selection, category routing, and specialized field collection"
                icon={<FileText size={32} className="text-purple-600" />}
                link="/patterns/contact-support/department-inquiry"
                complexity="Medium"
                timeToComplete="5-8 minutes"
                useCases={["Department-specific queries", "Policy questions", "Procedural guidance"]}
              />
            </div>
          </div>

          {/* Service & Support Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Headphones size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Service & Support Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Service Support Request"
                description="Pattern for ongoing service assistance, application tracking, status updates, and technical support"
                icon={<Headphones size={32} className="text-green-600" />}
                link="/patterns/contact-support/service-support"
                complexity="Medium"
                timeToComplete="7-10 minutes"
                useCases={["Application status", "Technical issues", "Service modifications"]}
              />
              <PatternCard
                title="Callback Request"
                description="Schedule a callback from department officials with time slot selection and preferred contact method"
                icon={<Phone size={32} className="text-teal-600" />}
                link="/patterns/contact-support/callback-request"
                complexity="Low"
                timeToComplete="3-5 minutes"
                useCases={["Phone consultation", "Scheduled assistance", "Complex query discussion"]}
              />
            </div>
          </div>

          {/* Escalation & Priority Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Escalation & Priority Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Escalation Contact Form"
                description="Formal escalation pattern for unresolved issues with previous case reference and escalation justification"
                icon={<AlertCircle size={32} className="text-orange-600" />}
                link="/patterns/contact-support/escalation-form"
                complexity="High"
                timeToComplete="10-15 minutes"
                useCases={["Unresolved complaints", "Delayed services", "Appeal requests"]}
              />
              <PatternCard
                title="Urgent / Priority Contact"
                description="Fast-track routing for time-sensitive or critical issues requiring immediate attention and priority handling"
                icon={<Zap size={32} className="text-red-600" />}
                link="/patterns/contact-support/urgent-contact"
                complexity="Medium"
                timeToComplete="5-7 minutes"
                useCases={["Emergency situations", "Critical deadlines", "Time-sensitive issues"]}
              />
            </div>
          </div>

          {/* Hybrid & Assisted Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Hybrid & Assisted Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Feedback + Contact Hybrid"
                description="Combined pattern allowing users to provide feedback while simultaneously requesting follow-up contact"
                icon={<ThumbsUp size={32} className="text-indigo-600" />}
                link="/patterns/contact-support/feedback-contact"
                complexity="Medium"
                timeToComplete="5-8 minutes"
                useCases={["Service feedback with questions", "Experience sharing", "Suggestion submission"]}
              />
              <PatternCard
                title="Assisted Support Request"
                description="Pattern for users requiring assistance from helpers, CSCs, or intermediaries with shared access controls"
                icon={<Users size={32} className="text-pink-600" />}
                link="/patterns/contact-support/assisted-support"
                complexity="High"
                timeToComplete="8-12 minutes"
                useCases={["Elderly assistance", "Disability support", "Low digital literacy"]}
              />
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#138808] pl-4">
            Implementation Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuidelineCard
              title="Form Structure"
              points={[
                "Always start with user intent selection",
                "Use progressive disclosure for complex forms",
                "Include review step before submission",
                "Provide clear acknowledgment with reference ID",
                "Enable save and resume for long forms"
              ]}
            />
            <GuidelineCard
              title="Routing Logic"
              points={[
                "Route based on category and priority",
                "Escalate based on keywords or severity",
                "Assign to appropriate department/team",
                "Track SLA based on priority level",
                "Provide status tracking for all requests"
              ]}
            />
            <GuidelineCard
              title="Accessibility"
              points={[
                "Keyboard navigation for all interactions",
                "Screen reader compatible labels",
                "Error messages linked to form fields",
                "Sufficient color contrast (4.5:1 minimum)",
                "Support for 22 scheduled Indian languages"
              ]}
            />
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
                    <Link to="/patterns/forms" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Form Intelligence System</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/service" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Service Pattern Libraries</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/resilience" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>State Resilience System</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Design System Components</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/components/forms" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Form Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/validation" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Validation & Error Handling</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/feedback" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Feedback Messages</span>
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

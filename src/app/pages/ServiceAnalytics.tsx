import { BarChart3, TrendingUp, TrendingDown, AlertCircle, Search, FileX, Upload, Map, MessageSquare, Activity, Shield, Eye, Code, BookOpen, Layers, ChevronRight, Info, Users, Clock, CheckCircle, XCircle, ArrowRight, Circle, Target, Database, PieChart, LineChart } from "lucide-react";

export default function ServiceAnalytics() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <BarChart3 size={16} />
              <span>UX4G Analytics Framework</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Service Analytics Integration Patterns
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Evidence-based patterns for integrating analytics into government digital services. 
              These patterns prioritize service improvement, operational efficiency, and citizen privacy 
              over marketing metrics. Designed for both citizen-facing experiences and internal dashboards.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">12 Patterns</div>
                <div className="text-blue-200 text-sm">Analytics frameworks</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">Privacy-First</div>
                <div className="text-blue-200 text-sm">Citizen data protected</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">Service-Oriented</div>
                <div className="text-blue-200 text-sm">Improvement focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b-2 border-border bg-background sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex gap-6 overflow-x-auto py-4 text-sm">
            <a href="#success-measurement" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Success Measurement</a>
            <a href="#form-completion" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Form Completion</a>
            <a href="#drop-off" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Drop-off Tracking</a>
            <a href="#service-funnel" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Service Funnel</a>
            <a href="#search-behavior" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Search Behavior</a>
            <a href="#error-tracking" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Error Tracking</a>
            <a href="#upload-failures" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Upload Failures</a>
            <a href="#status-journey" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Status Journey</a>
            <a href="#support-escalation" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Support Escalation</a>
            <a href="#feedback-collection" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Feedback Collection</a>
            <a href="#privacy-consent" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Privacy & Consent</a>
            <a href="#performance-dashboard" className="whitespace-nowrap text-muted-foreground hover:text-primary font-medium">Performance Dashboard</a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        <SuccessMeasurementPattern />
        <FormCompletionPattern />
        <DropOffTrackingPattern />
        <ServiceFunnelPattern />
        <SearchBehaviorPattern />
        <ErrorTrackingPattern />
        <UploadFailuresPattern />
        <StatusJourneyPattern />
        <SupportEscalationPattern />
        <FeedbackCollectionPattern />
        <PrivacyConsentPattern />
        <PerformanceDashboardPattern />
      </div>
    </div>
  );
}

// Pattern Components

function SuccessMeasurementPattern() {
  return (
    <section id="success-measurement">
      <PatternHeader
        title="Success Measurement Overview"
        icon={<Target size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Define and track Key Performance Indicators (KPIs) that measure service effectiveness from a citizen outcomes perspective. Focus on completion rates, time-to-service, and satisfaction rather than vanity metrics."
          context="Required for: All digital services, quarterly reporting to governance boards, service improvement roadmaps, budget justification"
        />

        <ServiceEventsCard
          title="Key Service Events to Track"
          events={[
            { event: 'service_initiated', description: 'User begins service application', dataPoints: 'timestamp, service_type, entry_point, user_authenticated' },
            { event: 'service_completed', description: 'Application successfully submitted', dataPoints: 'timestamp, completion_time, application_id' },
            { event: 'service_approved', description: 'Service approved by department', dataPoints: 'timestamp, processing_time, approver_role' },
            { event: 'service_delivered', description: 'Final service delivered to citizen', dataPoints: 'timestamp, delivery_method, end_to_end_time' },
            { event: 'service_abandoned', description: 'User exits without completion', dataPoints: 'timestamp, last_step_completed, session_duration' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Service Dashboard Homepage', visibility: 'Internal only - Department admins', purpose: 'Overview of all service metrics' },
            { location: 'Individual Service Detail Page', visibility: 'Internal only - Service owners', purpose: 'Deep dive into specific service performance' },
            { location: 'Quarterly Report Generator', visibility: 'Internal only - Leadership', purpose: 'Automated reporting for governance' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Metric Card', usage: 'Display KPI values with trend indicators' },
            { name: 'Line Chart', usage: 'Show trend over time (monthly, quarterly)' },
            { name: 'Comparison Table', usage: 'Compare metrics across services or time periods' },
            { name: 'Alert Banner', usage: 'Highlight metrics requiring attention' },
            { name: 'Export Button', usage: 'Download reports as PDF/Excel' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'All metrics aggregated - no individual user tracking',
              'Data retention: 2 years for operational analytics',
              'Access control: Role-based dashboard access',
              'Audit log: Track who views what metrics when',
              'Compliance: IT Act 2000, Right to Information Act',
              'No third-party analytics tools without approval'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Dashboard keyboard navigable with skip links',
              'Charts have text alternative summaries',
              'Color not sole indicator (use patterns/icons)',
              'Screen reader announces metric changes',
              'High contrast mode for data visualization',
              'Export to accessible formats (Excel, CSV)'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Store events in dedicated analytics database (separate from transactional DB)',
            'Use event sourcing pattern for immutable audit trail',
            'Calculate metrics via scheduled jobs (daily aggregation)',
            'Cache dashboard data for performance (refresh every 15 minutes)',
            'Implement data pipeline: Events → Storage → Processing → Dashboard',
            'Use anonymization techniques before storing analytics data'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'UX4G Analytics Standards', link: '/docs/analytics-standards' },
            { doc: 'Privacy Guidelines for Government Analytics', link: '/docs/analytics-privacy' },
            { doc: 'Dashboard Component Library', link: '/components/dashboards' },
            { doc: 'Event Tracking Schema', link: '/docs/event-schema' }
          ]}
        />
      </div>
    </section>
  );
}

function FormCompletionPattern() {
  return (
    <section id="form-completion">
      <PatternHeader
        title="Form Completion Analytics"
        icon={<CheckCircle size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Track field-level interactions to identify where users struggle, which fields cause abandonment, and how to optimize form design for higher completion rates."
          context="Critical for: Multi-step applications, complex forms with 10+ fields, forms with high abandonment rates"
        />

        <ServiceEventsCard
          title="Form Interaction Events"
          events={[
            { event: 'form_started', description: 'User begins filling form', dataPoints: 'form_id, step_number, timestamp, device_type' },
            { event: 'field_focused', description: 'User clicks/tabs into field', dataPoints: 'field_id, field_type, timestamp' },
            { event: 'field_completed', description: 'User fills and exits field successfully', dataPoints: 'field_id, time_spent, character_count' },
            { event: 'field_error', description: 'Validation error occurs', dataPoints: 'field_id, error_type, error_message, retry_count' },
            { event: 'form_step_completed', description: 'User completes a step', dataPoints: 'step_number, time_on_step, fields_completed' },
            { event: 'form_abandoned', description: 'User exits form without completion', dataPoints: 'last_field_touched, completion_percentage, session_time' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Form Analytics Dashboard (Internal)', visibility: 'Service designers, form owners', purpose: 'Identify problematic fields and optimize' },
            { location: 'No citizen-facing placement', visibility: 'N/A', purpose: 'This is internal operational data only' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Funnel Visualization', usage: 'Show drop-off at each form step' },
            { name: 'Heat Map Table', usage: 'Highlight fields with high error rates (red) vs. smooth completion (green)' },
            { name: 'Time Analysis Chart', usage: 'Show average time spent per field' },
            { name: 'Error Rate Badge', usage: 'Display error percentage per field' },
            { name: 'Field Detail Modal', usage: 'Deep dive into specific field analytics' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Track field interactions, NOT field values',
              'Example: Track "field_aadhaar_focused" but never store actual Aadhaar number',
              'Hash form IDs to prevent individual tracking',
              'Session-based analytics, not user-based',
              'Data anonymized before storage',
              'Periodic review of tracked fields by privacy officer'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Analytics must not interfere with assistive tech',
              'No tracking of assistive technology usage specifics',
              'Dashboard shows accessibility-related errors',
              'Screen reader error messages counted separately',
              'Identify if keyboard users have higher error rates',
              'Track focus trap issues via support tickets'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Use debouncing (300ms) before logging field interactions',
            'Batch analytics events - send every 30 seconds or on form submission',
            'Store events in structured format: {event_type, field_metadata, timestamp}',
            'Calculate completion funnel: Started → Step 1 → Step 2 → ... → Submitted',
            'Alert service owner if field error rate exceeds 15%',
            'Generate weekly reports highlighting top 5 problematic fields'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Form Analytics Event Schema', link: '/docs/form-analytics-schema' },
            { doc: 'Field-Level Privacy Guidelines', link: '/docs/field-privacy' },
            { doc: 'Form Optimization Playbook', link: '/docs/form-optimization' },
            { doc: 'Analytics Dashboard Components', link: '/components/analytics-dashboards' }
          ]}
        />
      </div>
    </section>
  );
}

function DropOffTrackingPattern() {
  return (
    <section id="drop-off">
      <PatternHeader
        title="Drop-off Tracking Points"
        icon={<TrendingDown size={28} />}
        maturityStatus="recommended"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Identify critical points where users abandon the service journey. Use this data to prioritize UX improvements, simplify processes, and reduce friction."
          context="Essential for: Services with completion rate below 70%, long multi-step processes, services with high support call volume"
        />

        <ServiceEventsCard
          title="Drop-off Tracking Events"
          events={[
            { event: 'page_exit', description: 'User leaves page', dataPoints: 'page_id, time_on_page, scroll_depth, exit_trigger (back_button, close_tab, timeout)' },
            { event: 'step_abandoned', description: 'User abandons specific step', dataPoints: 'step_id, completion_percentage, last_interaction_time' },
            { event: 'session_timeout', description: 'Session expires due to inactivity', dataPoints: 'last_active_page, session_duration, warnings_shown' },
            { event: 'help_clicked_before_exit', description: 'User seeks help then exits', dataPoints: 'help_topic, time_between_help_and_exit' },
            { event: 'error_then_exit', description: 'User exits after encountering error', dataPoints: 'error_type, attempts_before_exit, error_message' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Service Performance Dashboard', visibility: 'Internal - Service managers', purpose: 'Monitor drop-off rates per step' },
            { location: 'Journey Map View', visibility: 'Internal - UX designers', purpose: 'Visualize where users exit in journey' },
            { location: 'Alert System', visibility: 'Internal - Operations team', purpose: 'Real-time alerts if drop-off exceeds threshold' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Sankey Diagram', usage: 'Show flow from step to step with drop-off visualization' },
            { name: 'Alert Card', usage: 'Highlight steps with abnormal drop-off rates' },
            { name: 'Trend Line Chart', usage: 'Track drop-off rate over time' },
            { name: 'Comparison Table', usage: 'Compare drop-off across different user segments' },
            { name: 'Action Button', usage: 'Quick link to investigate specific drop-off point' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Track aggregate drop-off rates, not individual sessions',
              'No identification of specific users who dropped off',
              'Hash session IDs for anonymity',
              'Drop-off data aggregated daily',
              'Cannot reconstruct individual user journey from analytics',
              'Data used solely for service improvement'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Identify if assistive tech users have higher drop-off',
              'Track keyboard navigation abandonment separately',
              'Monitor if CAPTCHA/verification causes exits',
              'Check if timeout warnings are accessible',
              'Analyze mobile vs desktop drop-off patterns',
              'Correlate error accessibility with abandonment'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Use beforeunload event with caution (unreliable on mobile)',
            'Implement heartbeat pings every 2 minutes to track active sessions',
            'Set threshold alerts: Drop-off >30% at any step = investigation trigger',
            'Combine drop-off data with support ticket analysis',
            'Create automated reports: "Top 3 drop-off points this week"',
            'Use cohort analysis to identify patterns (mobile users, regional differences)'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Drop-off Analysis Methodology', link: '/docs/dropoff-analysis' },
            { doc: 'Service Improvement Framework', link: '/docs/service-improvement' },
            { doc: 'Session Tracking Standards', link: '/docs/session-tracking' },
            { doc: 'Alert Configuration Guide', link: '/docs/alert-config' }
          ]}
        />
      </div>
    </section>
  );
}

function ServiceFunnelPattern() {
  return (
    <section id="service-funnel">
      <PatternHeader
        title="Service Funnel Stages"
        icon={<TrendingUp size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Map the complete service journey from awareness to fulfillment, tracking how many users progress through each stage. Identify bottlenecks in the service delivery pipeline."
          context="Applicable to: End-to-end government services, licensing processes, benefit applications, certificate issuance"
        />

        <ServiceEventsCard
          title="Funnel Stage Events"
          events={[
            { event: 'stage_awareness', description: 'User discovers service', dataPoints: 'entry_source (search, direct, referral), service_id' },
            { event: 'stage_consideration', description: 'User views eligibility/requirements', dataPoints: 'pages_viewed, time_spent, documents_list_viewed' },
            { event: 'stage_application', description: 'User starts application', dataPoints: 'form_started, user_type (new, returning)' },
            { event: 'stage_submission', description: 'Application submitted', dataPoints: 'submission_id, submission_method (online, assisted)' },
            { event: 'stage_processing', description: 'Application under review', dataPoints: 'processing_stage, assigned_officer_role' },
            { event: 'stage_fulfillment', description: 'Service delivered', dataPoints: 'delivery_method, time_to_fulfillment' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Executive Dashboard', visibility: 'Internal - Department heads', purpose: 'High-level funnel overview across all services' },
            { location: 'Service-Specific Dashboard', visibility: 'Internal - Service owners', purpose: 'Detailed funnel for individual service' },
            { location: 'Performance Review Portal', visibility: 'Internal - Auditors', purpose: 'Historical funnel analysis for reviews' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Funnel Chart', usage: 'Classic funnel visualization showing conversion rates' },
            { name: 'Stage Metrics Table', usage: 'Detailed stats per stage (count, %, avg time)' },
            { name: 'Conversion Rate Badge', usage: 'Highlight conversion rate between stages' },
            { name: 'Timeline Visualization', usage: 'Show average time spent in each stage' },
            { name: 'Filter Controls', usage: 'Filter funnel by date range, region, service type' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Funnel shows aggregated counts, not individual journeys',
              'Stage progression tracked via application status, not user tracking',
              'Application IDs anonymized in analytics database',
              'Cross-stage correlation uses hashed identifiers',
              'No personally identifiable information in funnel data',
              'Compliance with government data classification standards'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Funnel dashboard meets WCAG 2.1 AA standards',
              'Charts have accompanying data tables',
              'Color-blind safe palette for stage visualization',
              'Keyboard navigation through funnel stages',
              'Screen reader announces stage statistics',
              'Exportable funnel data in accessible formats'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Track stage transitions via application status updates in main database',
            'Calculate funnel metrics nightly via batch job',
            'Store funnel snapshots for historical comparison',
            'Alert if conversion rate drops >10% week-over-week',
            'Segment funnel by user demographics (if available and privacy-compliant)',
            'Integrate with case management system for processing stage data'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Service Funnel Methodology', link: '/docs/funnel-methodology' },
            { doc: 'Stage Definition Guidelines', link: '/docs/stage-definitions' },
            { doc: 'Funnel Analytics Dashboard', link: '/dashboards/funnel' },
            { doc: 'Conversion Optimization Playbook', link: '/docs/conversion-optimization' }
          ]}
        />
      </div>
    </section>
  );
}

function SearchBehaviorPattern() {
  return (
    <section id="search-behavior">
      <PatternHeader
        title="Search Behavior Analysis"
        icon={<Search size={28} />}
        maturityStatus="recommended"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Understand what citizens are looking for, identify gaps in content, improve search result relevance, and optimize information architecture based on actual search patterns."
          context="Essential for: Content-heavy portals, multi-service platforms, FAQ/help sections, document repositories"
        />

        <ServiceEventsCard
          title="Search Behavior Events"
          events={[
            { event: 'search_initiated', description: 'User performs search', dataPoints: 'search_query, search_location (page), timestamp' },
            { event: 'search_results_viewed', description: 'Results displayed', dataPoints: 'result_count, search_query, filter_applied' },
            { event: 'search_result_clicked', description: 'User clicks result', dataPoints: 'result_position, result_title, search_query' },
            { event: 'search_refined', description: 'User modifies search', dataPoints: 'original_query, new_query, refinement_type (filter, new_search)' },
            { event: 'search_abandoned', description: 'Zero results or no click', dataPoints: 'search_query, result_count, time_on_results_page' },
            { event: 'search_to_support', description: 'User contacts support after search', dataPoints: 'search_query, support_channel' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Search Analytics Dashboard', visibility: 'Internal - Content managers', purpose: 'Analyze popular searches and zero-result queries' },
            { location: 'Content Gap Report', visibility: 'Internal - Service designers', purpose: 'Identify missing content based on searches' },
            { location: 'Search Results Page (A/B Testing)', visibility: 'Internal - Product team', purpose: 'Test and optimize result relevance' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Search Query Table', usage: 'List top searches with volume and click-through rate' },
            { name: 'Word Cloud', usage: 'Visualize most common search terms' },
            { name: 'Zero-Results Alert', usage: 'Highlight searches returning no results' },
            { name: 'Click Position Chart', usage: 'Show distribution of clicks by result position' },
            { name: 'Search Trend Line', usage: 'Track search volume over time' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Search queries stored with minimal retention (30 days)',
              'Do NOT log searches containing PII (names, ID numbers)',
              'Implement PII detection and scrubbing before storage',
              'Aggregate search terms for reporting, not individual searches',
              'No correlation between search and user identity',
              'Regular audit of logged search queries for privacy compliance'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Search analytics help identify accessibility-related queries',
              'Track searches for "screen reader", "accessible format", etc.',
              'Dashboard itself must be accessible',
              'Identify if voice search users have different patterns',
              'Monitor search success rate for assistive tech users',
              'Ensure search result optimization doesn\'t harm accessibility'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Log search queries asynchronously (don\'t block search execution)',
            'Normalize queries: lowercase, trim whitespace, remove special chars',
            'Implement PII scrubbing regex before storage',
            'Generate weekly report: Top 20 searches, top 10 zero-result queries',
            'Use search data to train autocomplete/suggestions',
            'Create content improvement tasks from zero-result queries'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Search Analytics Standards', link: '/docs/search-analytics' },
            { doc: 'PII Detection and Scrubbing', link: '/docs/pii-scrubbing' },
            { doc: 'Content Gap Analysis Process', link: '/docs/content-gap' },
            { doc: 'Search Optimization Guide', link: '/docs/search-optimization' }
          ]}
        />
      </div>
    </section>
  );
}

function ErrorTrackingPattern() {
  return (
    <section id="error-tracking">
      <PatternHeader
        title="Error Rate & Failure Pattern Tracking"
        icon={<AlertCircle size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Systematically track technical errors, validation failures, and system issues to enable rapid response, proactive maintenance, and continuous reliability improvement."
          context="Critical for: Production services, high-traffic portals, services with SLA commitments, mission-critical applications"
        />

        <ServiceEventsCard
          title="Error Tracking Events"
          events={[
            { event: 'client_error', description: 'Frontend error', dataPoints: 'error_type, error_message, component_name, browser, user_action_before_error' },
            { event: 'api_error', description: 'Backend API failure', dataPoints: 'api_endpoint, http_status, error_code, response_time' },
            { event: 'validation_error', description: 'Form validation failure', dataPoints: 'field_id, validation_rule, error_message, retry_count' },
            { event: 'integration_error', description: 'Third-party service failure', dataPoints: 'service_name, error_type, fallback_used' },
            { event: 'timeout_error', description: 'Request timeout', dataPoints: 'endpoint, timeout_duration, retry_attempted' },
            { event: 'authentication_error', description: 'Login/auth failure', dataPoints: 'auth_method, error_reason, ip_address (hashed)' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Real-Time Monitoring Dashboard', visibility: 'Internal - Operations team, DevOps', purpose: 'Live error monitoring and alerting' },
            { location: 'Error Detail Page', visibility: 'Internal - Developers', purpose: 'Deep dive into specific error patterns' },
            { location: 'Service Health Dashboard', visibility: 'Internal - Management', purpose: 'Error rate as part of overall service health' },
            { location: 'Incident Response Portal', visibility: 'Internal - Support team', purpose: 'Link errors to support tickets' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Error Rate Chart', usage: 'Line chart showing errors over time (last 24h, 7d, 30d)' },
            { name: 'Alert Badge', usage: 'Critical error indicator with count' },
            { name: 'Error Distribution Pie Chart', usage: 'Break down errors by type' },
            { name: 'Error Log Table', usage: 'Detailed error logs with filters' },
            { name: 'Status Indicator', usage: 'Green/Yellow/Red status based on error threshold' },
            { name: 'Notification Toast', usage: 'Real-time alert when critical error occurs' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Error logs must not contain PII or sensitive data',
              'Scrub user input from error messages before logging',
              'Hash IP addresses for security event correlation',
              'Access to error logs restricted to authorized personnel',
              'Error data retention: 90 days for operational logs',
              'Anonymize stack traces if they contain user data'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Track accessibility-specific errors separately',
              'Monitor screen reader compatibility errors',
              'Identify keyboard navigation failures',
              'Track focus management issues',
              'Alert on ARIA attribute errors',
              'Dashboard accessible to visually impaired team members'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Implement global error boundary in React for client errors',
            'Use structured logging format: JSON with standard fields',
            'Send errors to centralized logging system (ELK, Splunk)',
            'Set up alerts: Critical errors = immediate SMS/email to on-call',
            'Calculate error rate: (errors / total requests) * 100',
            'Create automated incident ticket if error rate >5% for 5 minutes'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Error Tracking Implementation', link: '/docs/error-tracking' },
            { doc: 'Error Code Standards', link: '/docs/error-codes' },
            { doc: 'Incident Response Playbook', link: '/docs/incident-response' },
            { doc: 'Logging and Monitoring Setup', link: '/docs/logging-setup' }
          ]}
        />
      </div>
    </section>
  );
}

function UploadFailuresPattern() {
  return (
    <section id="upload-failures">
      <PatternHeader
        title="Document Upload Failure Analytics"
        icon={<FileX size={28} />}
        maturityStatus="recommended"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Track document upload failures to identify technical issues, user errors, and process improvements. Document upload is a critical step in many government services and a common pain point."
          context="Essential for: Document-heavy services (licenses, permits), services requiring KYC documents, scholarship applications, tender submissions"
        />

        <ServiceEventsCard
          title="Upload Tracking Events"
          events={[
            { event: 'upload_initiated', description: 'User selects file to upload', dataPoints: 'file_type, file_size, upload_field_id' },
            { event: 'upload_validation_failed', description: 'File rejected before upload', dataPoints: 'rejection_reason (size, format, content), file_type, file_size' },
            { event: 'upload_network_failed', description: 'Upload interrupted by network', dataPoints: 'bytes_uploaded, total_size, connection_type (wifi, mobile)' },
            { event: 'upload_server_error', description: 'Server-side processing failed', dataPoints: 'error_code, file_type, virus_scan_result' },
            { event: 'upload_success', description: 'File uploaded and verified', dataPoints: 'file_type, file_size, upload_duration' },
            { event: 'upload_retry', description: 'User retries after failure', dataPoints: 'retry_count, previous_failure_reason' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Upload Analytics Dashboard', visibility: 'Internal - Service operations team', purpose: 'Monitor upload success rates and failure patterns' },
            { location: 'Technical Support Dashboard', visibility: 'Internal - Support agents', purpose: 'Troubleshoot user-reported upload issues' },
            { location: 'Infrastructure Monitoring', visibility: 'Internal - DevOps', purpose: 'Identify storage/bandwidth issues' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Success Rate Gauge', usage: 'Show upload success percentage' },
            { name: 'Failure Reasons Breakdown', usage: 'Pie chart of failure types' },
            { name: 'File Type Analysis Table', usage: 'Compare success rates by file type (PDF, JPG, etc.)' },
            { name: 'Size Distribution Chart', usage: 'Identify if large files fail more often' },
            { name: 'Network Impact Analysis', usage: 'Compare mobile vs. wifi upload success' },
            { name: 'Alert Banner', usage: 'Notify if upload success rate drops below threshold' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Track upload metadata, NEVER log file contents',
              'No storage of file names if they contain PII',
              'Hash document IDs for correlation with applications',
              'Upload analytics separate from document storage system',
              'No tracking of what specific document type (Aadhaar, PAN)',
              'Aggregate failure reasons, not individual failure logs'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Track if screen reader users face more upload issues',
              'Monitor keyboard-only upload flow success rates',
              'Identify if drag-and-drop vs. button upload differ',
              'Check if mobile accessibility impacts uploads',
              'Ensure upload feedback announced to screen readers',
              'Track if error messages are sufficiently clear'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Implement chunked upload for large files (auto-resume on failure)',
            'Log upload events at client and server for correlation',
            'Set upload success target: >95% for production services',
            'Create automated alerts: Upload success rate <90% for 10 minutes',
            'Analyze failure patterns: time of day, file size, user region',
            'Generate weekly report: Top failure reasons with mitigation actions'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Upload Component Documentation', link: '/components/file-upload' },
            { doc: 'File Validation Rules', link: '/docs/file-validation' },
            { doc: 'Upload Failure Troubleshooting', link: '/docs/upload-troubleshooting' },
            { doc: 'Storage Infrastructure Guide', link: '/docs/storage-infrastructure' }
          ]}
        />
      </div>
    </section>
  );
}

function StatusJourneyPattern() {
  return (
    <section id="status-journey">
      <PatternHeader
        title="Status Journey Analytics"
        icon={<Map size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Track application status changes from submission to fulfillment, measuring processing times at each stage, identifying bottlenecks, and ensuring SLA compliance."
          context="Applicable to: All transactional services with approval workflows, licensing, permits, benefits, certificates"
        />

        <ServiceEventsCard
          title="Status Tracking Events"
          events={[
            { event: 'status_changed', description: 'Application moves to new status', dataPoints: 'application_id (hashed), old_status, new_status, timestamp, changed_by_role' },
            { event: 'status_viewed', description: 'Citizen checks status', dataPoints: 'application_id (hashed), view_method (portal, SMS, phone), timestamp' },
            { event: 'status_stuck', description: 'Application in same status >SLA', dataPoints: 'application_id (hashed), current_status, time_in_status, sla_threshold' },
            { event: 'status_escalated', description: 'Application escalated due to delay', dataPoints: 'application_id (hashed), escalation_reason, escalated_to_role' },
            { event: 'status_notification_sent', description: 'Status update sent to citizen', dataPoints: 'notification_channel (SMS, email), delivery_status, timestamp' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Status Tracking Dashboard (Citizen)', visibility: 'Public - Application owner', purpose: 'View personal application status' },
            { location: 'Processing Dashboard (Internal)', visibility: 'Internal - Case workers, supervisors', purpose: 'Monitor applications in queue, identify delays' },
            { location: 'SLA Compliance Dashboard', visibility: 'Internal - Management', purpose: 'Track SLA adherence across all applications' },
            { location: 'Escalation Dashboard', visibility: 'Internal - Senior officers', purpose: 'Review escalated cases requiring attention' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Status Timeline', usage: 'Visual journey showing status progression' },
            { name: 'Processing Time Chart', usage: 'Show avg time per status stage' },
            { name: 'SLA Indicator Badge', usage: 'Green (on-time), Yellow (near SLA), Red (breached)' },
            { name: 'Application Count Table', usage: 'Number of applications in each status' },
            { name: 'Bottleneck Alert Card', usage: 'Highlight status stages with delays' },
            { name: 'Status Distribution Funnel', usage: 'Show how applications flow through statuses' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Citizens can view only their own application status',
              'Internal dashboards show aggregated counts, not individual details',
              'Application IDs hashed in analytics to prevent identification',
              'Status change logs maintained for audit (who changed what when)',
              'No tracking of case worker identity in analytics (only role)',
              'Compliance with public records and RTI Act requirements'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Status timeline keyboard navigable',
              'Screen reader announces status changes',
              'Color not sole indicator for SLA status (use icons/text)',
              'High contrast mode for dashboard visualizations',
              'Alternative text for status icons',
              'Mobile-friendly status tracking for citizens'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Store status changes in immutable audit log',
            'Calculate processing times: time between status transitions',
            'Set up SLA monitors: Alert if application in status >SLA threshold',
            'Automated notifications: Trigger SMS/email on status change',
            'Daily aggregation job: Calculate avg processing time per status',
            'Integration with case management system for real-time status sync'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Status Tracking Standards', link: '/docs/status-tracking' },
            { doc: 'SLA Configuration Guide', link: '/docs/sla-configuration' },
            { doc: 'Case Management Integration', link: '/docs/case-management' },
            { doc: 'Status Notification Templates', link: '/docs/notification-templates' }
          ]}
        />
      </div>
    </section>
  );
}

function SupportEscalationPattern() {
  return (
    <section id="support-escalation">
      <PatternHeader
        title="Support Escalation Analytics"
        icon={<MessageSquare size={28} />}
        maturityStatus="recommended"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Track when and why citizens contact support, identify common pain points, measure resolution effectiveness, and reduce support volume through proactive improvements."
          context="Essential for: Services with support channels (helpdesk, chatbot, call center), high-volume services, services with complex processes"
        />

        <ServiceEventsCard
          title="Support Interaction Events"
          events={[
            { event: 'support_initiated', description: 'User contacts support', dataPoints: 'channel (chat, phone, email), originating_page, issue_category, timestamp' },
            { event: 'support_issue_logged', description: 'Support ticket created', dataPoints: 'ticket_id, issue_type, priority, assigned_to_team' },
            { event: 'support_escalated', description: 'Ticket escalated to higher tier', dataPoints: 'ticket_id, escalation_reason, escalated_from_tier, escalated_to_tier' },
            { event: 'support_resolved', description: 'Ticket closed', dataPoints: 'ticket_id, resolution_time, resolution_type (solved, workaround, duplicate)' },
            { event: 'support_feedback', description: 'User provides feedback on support', dataPoints: 'ticket_id, satisfaction_rating, feedback_text (optional)' },
            { event: 'self_service_to_support', description: 'User tries self-service then contacts support', dataPoints: 'self_service_attempts, time_before_escalation' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Support Analytics Dashboard', visibility: 'Internal - Support team lead', purpose: 'Monitor ticket volume, resolution times, escalation rates' },
            { location: 'Issue Category Report', visibility: 'Internal - Service designers', purpose: 'Identify most common issues for proactive fixes' },
            { location: 'Agent Performance Dashboard', visibility: 'Internal - Support managers', purpose: 'Track team performance and training needs' },
            { location: 'Self-Service Effectiveness', visibility: 'Internal - Content team', purpose: 'Measure if FAQs/guides reduce support volume' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Ticket Volume Chart', usage: 'Line chart showing daily/weekly ticket volume' },
            { name: 'Issue Category Breakdown', usage: 'Bar chart of top support issues' },
            { name: 'Resolution Time Metrics', usage: 'Avg/median time to resolve by issue type' },
            { name: 'Escalation Rate Badge', usage: 'Percentage of tickets escalated' },
            { name: 'Satisfaction Score', usage: 'Average CSAT score with trend' },
            { name: 'Self-Service Deflection Rate', usage: 'Percentage of users who resolved without support' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Support tickets anonymized for analytics (ticket ID hashed)',
              'Citizen identity not linked to analytics data',
              'Free-text feedback scrubbed for PII before analysis',
              'Support agent names replaced with role IDs in analytics',
              'Ticket data retention aligned with support SLA policy',
              'Access to ticket analytics restricted by role'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Track support requests related to accessibility issues',
              'Monitor if assistive tech users require more support',
              'Identify accessibility gaps from support patterns',
              'Ensure support channels themselves are accessible',
              'Dashboard accessible to visually impaired support staff',
              'Alternative formats for support reports (screen reader friendly)'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Integrate with support ticketing system (ServiceNow, Zendesk)',
            'Categorize issues automatically using NLP on ticket descriptions',
            'Set alerts: Ticket volume spike >50% from baseline = investigate',
            'Create weekly report: Top 10 issues with recommendations',
            'Track correlation: Specific UI changes → support volume changes',
            'Measure self-service success: Users who viewed FAQ and didn\'t contact support'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Support Channel Guidelines', link: '/docs/support-channels' },
            { doc: 'Issue Classification Taxonomy', link: '/docs/issue-taxonomy' },
            { doc: 'Support SLA Standards', link: '/docs/support-sla' },
            { doc: 'Self-Service Optimization', link: '/docs/self-service-optimization' }
          ]}
        />
      </div>
    </section>
  );
}

function FeedbackCollectionPattern() {
  return (
    <section id="feedback-collection">
      <PatternHeader
        title="Feedback Collection Patterns"
        icon={<MessageSquare size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Systematically collect citizen feedback at key journey points to measure satisfaction, identify issues, and prioritize improvements. Balance feedback collection with user experience (avoid over-surveying)."
          context="Applicable to: All citizen-facing services, post-transaction feedback, continuous improvement programs"
        />

        <ServiceEventsCard
          title="Feedback Events"
          events={[
            { event: 'feedback_prompt_shown', description: 'Feedback request displayed', dataPoints: 'prompt_type (modal, banner, email), trigger_point (post-submission, page-exit), timestamp' },
            { event: 'feedback_submitted', description: 'User provides feedback', dataPoints: 'feedback_type (rating, text, category), satisfaction_score, timestamp' },
            { event: 'feedback_dismissed', description: 'User closes feedback prompt', dataPoints: 'prompt_type, time_on_screen, dismiss_reason (closed, ignored)' },
            { event: 'feedback_categorized', description: 'Internal categorization of feedback', dataPoints: 'feedback_id, category (UI, process, technical), sentiment (positive, negative, neutral)' },
            { event: 'feedback_acted_upon', description: 'Feedback led to action', dataPoints: 'feedback_id, action_type (bug_fix, feature_request, content_update)' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Post-Transaction Page', visibility: 'Public - After service completion', purpose: 'Collect feedback on completed service experience' },
            { location: 'Exit Intent Modal', visibility: 'Public - When user attempts to exit', purpose: 'Understand why users are abandoning' },
            { location: 'Feedback Dashboard', visibility: 'Internal - Product team, management', purpose: 'Analyze aggregated feedback trends' },
            { location: 'Feedback Detail Page', visibility: 'Internal - Service owners', purpose: 'Review individual feedback items and prioritize actions' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Rating Component', usage: 'Star rating or numeric scale (1-5)' },
            { name: 'Feedback Modal', usage: 'Non-intrusive popup after transaction' },
            { name: 'Text Area', usage: 'Optional detailed feedback input' },
            { name: 'Quick Feedback Buttons', usage: 'Thumbs up/down or emoji reactions' },
            { name: 'Sentiment Chart', usage: 'Visualize positive/negative/neutral feedback distribution' },
            { name: 'Word Cloud', usage: 'Common themes from text feedback' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Feedback submission is always optional',
              'Clear notice: "Your feedback is anonymous and used for service improvement"',
              'Do NOT link feedback to user identity in analytics',
              'Scrub PII from free-text feedback before storage',
              'Feedback data retention: 1 year',
              'No third-party feedback tools without privacy review'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Feedback prompts keyboard accessible',
              'Screen reader compatible rating widgets',
              'Do not trap focus in feedback modal',
              'Provide "Close" button clearly labeled',
              'Announce feedback submission success',
              'Alternative text-based feedback if rating widget inaccessible'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Implement feedback throttling: Max 1 prompt per user per 7 days',
            'Use localStorage to track feedback prompt history',
            'Store feedback in database with metadata (timestamp, page, service)',
            'Analyze sentiment using NLP on text feedback',
            'Generate monthly feedback report with action items',
            'Close the loop: Show users how feedback led to improvements'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Feedback Collection Guidelines', link: '/docs/feedback-guidelines' },
            { doc: 'Feedback Components Library', link: '/components/feedback' },
            { doc: 'Sentiment Analysis Process', link: '/docs/sentiment-analysis' },
            { doc: 'Feedback-Driven Improvement Framework', link: '/docs/feedback-improvement' }
          ]}
        />
      </div>
    </section>
  );
}

function PrivacyConsentPattern() {
  return (
    <section id="privacy-consent">
      <PatternHeader
        title="Analytics Consent & Privacy Considerations"
        icon={<Shield size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Establish transparent, citizen-centric approach to analytics data collection. Ensure compliance with privacy laws, build trust, and provide citizens control over their data while maintaining service improvement capabilities."
          context="Mandatory for: All government digital services, especially those handling sensitive data or personal information"
        />

        <ServiceEventsCard
          title="Privacy & Consent Events"
          events={[
            { event: 'privacy_notice_shown', description: 'Analytics privacy notice displayed', dataPoints: 'notice_type (banner, modal, page), timestamp' },
            { event: 'analytics_consent_given', description: 'User opts in to analytics', dataPoints: 'consent_scope (basic, enhanced), consent_method (explicit, implied), timestamp' },
            { event: 'analytics_consent_withdrawn', description: 'User opts out', dataPoints: 'withdrawal_method, timestamp, data_deletion_requested' },
            { event: 'analytics_policy_viewed', description: 'User views analytics policy', dataPoints: 'timestamp, policy_version' },
            { event: 'data_access_request', description: 'Citizen requests their analytics data', dataPoints: 'request_id, request_type (view, delete, download), timestamp' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Cookie/Privacy Banner', visibility: 'Public - First visit to service', purpose: 'Inform about analytics and obtain consent if required' },
            { location: 'Privacy Policy Page', visibility: 'Public - Accessible from all pages', purpose: 'Detailed explanation of analytics practices' },
            { location: 'User Preferences/Settings', visibility: 'Public - Authenticated users', purpose: 'Allow users to view/modify consent preferences' },
            { location: 'Data Governance Dashboard', visibility: 'Internal - Privacy officers', purpose: 'Monitor consent rates and data access requests' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'Privacy Banner', usage: 'Notice about analytics with accept/decline options' },
            { name: 'Consent Toggle', usage: 'Allow users to enable/disable analytics' },
            { name: 'Privacy Modal', usage: 'Detailed information with layered disclosure' },
            { name: 'Data Request Form', usage: 'Citizen requests for data access/deletion' },
            { name: 'Consent Status Badge', usage: 'Show current consent state in user profile' },
            { name: 'Audit Log Table', usage: 'Record consent changes for compliance' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Compliance: IT Act 2000, Right to Privacy (Art. 21), Personal Data Protection Bill',
              'Default: Essential analytics (service improvement) without explicit consent',
              'Explicit consent required: Third-party analytics, cross-service tracking',
              'Respect Do Not Track browser settings',
              'Data minimization: Collect only what\'s necessary',
              'Regular privacy impact assessments (annually)'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Privacy banners keyboard accessible',
              'Consent buttons clearly labeled for screen readers',
              'Privacy policy in plain language (A2 level)',
              'Available in all 22 scheduled languages',
              'Consent mechanism usable without mouse',
              'Clear visual indication of consent status'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Implement consent management: Store consent choices in database + localStorage',
            'Before collecting analytics: Check consent status',
            'Anonymization by default: Hash identifiers, aggregate data',
            'Data retention policy: Clear timelines (30 days, 90 days, 1 year depending on type)',
            'Implement data deletion API for opt-out requests',
            'Audit log: Record all consent changes with timestamp'
          ]}
        />

        <DocumentationReferencesCard
          references={[
            { doc: 'Government Analytics Privacy Policy', link: '/docs/analytics-privacy-policy' },
            { doc: 'Consent Management Implementation', link: '/docs/consent-management' },
            { doc: 'Data Minimization Guidelines', link: '/docs/data-minimization' },
            { doc: 'Analytics Compliance Checklist', link: '/docs/compliance-checklist' }
          ]}
        />
      </div>
    </section>
  );
}

function PerformanceDashboardPattern() {
  return (
    <section id="performance-dashboard">
      <PatternHeader
        title="Internal Service Performance Dashboard"
        icon={<Activity size={28} />}
        maturityStatus="exemplar"
      />

      <div className="mt-8 space-y-6">
        <PurposeContextCard
          purpose="Comprehensive internal dashboard consolidating all service analytics for operational teams, management, and decision-makers. Provides real-time and historical views of service health, user experience, and operational efficiency."
          context="Essential for: Service operations teams, department heads, policy makers, continuous improvement initiatives"
        />

        <ServiceEventsCard
          title="Dashboard Data Sources"
          events={[
            { event: 'dashboard_viewed', description: 'User accesses dashboard', dataPoints: 'user_role, dashboard_type, timestamp' },
            { event: 'dashboard_filtered', description: 'User applies filters', dataPoints: 'filter_type (date_range, service_type, region), selected_values' },
            { event: 'dashboard_exported', description: 'User exports dashboard data', dataPoints: 'export_format (PDF, Excel, CSV), data_scope, timestamp' },
            { event: 'alert_triggered', description: 'Dashboard alert activated', dataPoints: 'alert_type, threshold_breached, notification_sent_to' },
            { event: 'dashboard_insight_acted', description: 'User takes action based on dashboard insight', dataPoints: 'insight_type, action_taken, timestamp' }
          ]}
        />

        <PagePlacementCard
          placements={[
            { location: 'Executive Dashboard', visibility: 'Internal - Department heads, leadership', purpose: 'High-level KPIs and trends across all services' },
            { location: 'Operational Dashboard', visibility: 'Internal - Service managers, operations team', purpose: 'Detailed metrics for day-to-day management' },
            { location: 'Service-Specific Dashboard', visibility: 'Internal - Service owners', purpose: 'Deep dive into individual service analytics' },
            { location: 'Real-Time Monitoring View', visibility: 'Internal - DevOps, support team', purpose: 'Live service health and incident detection' }
          ]}
        />

        <ComponentsUsedCard
          components={[
            { name: 'KPI Card Grid', usage: 'Display key metrics (completion rate, avg processing time, user satisfaction)' },
            { name: 'Trend Charts', usage: 'Line/area charts showing metrics over time' },
            { name: 'Service Health Indicators', usage: 'Red/yellow/green status for each service' },
            { name: 'Data Table with Sorting', usage: 'Detailed data with drill-down capability' },
            { name: 'Filter Panel', usage: 'Date range, service type, region filters' },
            { name: 'Export Button', usage: 'Download dashboard data in various formats' },
            { name: 'Alert Configuration Panel', usage: 'Set up custom alerts and thresholds' }
          ]}
        />

        <div className="grid grid-cols-2 gap-6">
          <PrivacyGovernanceCard
            notes={[
              'Dashboard access controlled via role-based permissions',
              'All data aggregated - no individual citizen data visible',
              'Audit log of dashboard access for compliance',
              'Data classification: Internal use only',
              'No external sharing without authorization',
              'Regular security reviews of dashboard access'
            ]}
          />

          <AccessibilityNotesCard
            notes={[
              'Dashboard meets WCAG 2.1 AA standards',
              'Keyboard navigation for all dashboard controls',
              'Screen reader compatible charts with data tables',
              'High contrast mode for data visualization',
              'Responsive design for mobile access',
              'Alternative text for all visual elements'
            ]}
          />
        </div>

        <ImplementationNotesCard
          notes={[
            'Use data warehouse for dashboard queries (not production DB)',
            'Implement caching: Refresh dashboard data every 15 minutes',
            'Real-time metrics via WebSocket for critical KPIs',
            'Optimize queries: Pre-aggregate data for common views',
            'Implement dashboard personalization: Save user preferences',
            'Set up automated reports: Weekly/monthly email to stakeholders'
          ]}
        />

        <DashboardMetricsCard />

        <DocumentationReferencesCard
          references={[
            { doc: 'Dashboard User Guide', link: '/docs/dashboard-guide' },
            { doc: 'KPI Definition Glossary', link: '/docs/kpi-glossary' },
            { doc: 'Dashboard Access Request Process', link: '/docs/dashboard-access' },
            { doc: 'Alert Configuration Guide', link: '/docs/alert-config' }
          ]}
        />
      </div>
    </section>
  );
}

// Reusable Components

function PatternHeader({ title, icon, maturityStatus }: any) {
  const statusConfig: any = {
    exemplar: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', label: 'EXEMPLAR' },
    recommended: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', label: 'RECOMMENDED' },
    developing: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', label: 'DEVELOPING' }
  };
  const status = statusConfig[maturityStatus];

  return (
    <div className="border-b-2 border-border pb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="text-primary">{icon}</div>
          <div>
            <h2 className="text-4xl font-bold text-foreground">{title}</h2>
          </div>
        </div>
        <div className={`px-4 py-2 ${status.bg} ${status.text} border-2 ${status.border} rounded-lg font-bold text-sm`}>
          {status.label}
        </div>
      </div>
    </div>
  );
}

function PurposeContextCard({ purpose, context }: any) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Target className="text-blue-600" size={20} />
          Purpose
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{purpose}</p>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info className="text-purple-600" size={20} />
          Service Context
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{context}</p>
      </div>
    </div>
  );
}

function ServiceEventsCard({ title, events }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <Database className="text-muted-foreground" size={20} />
          {title}
        </h3>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {events.map((event: any, index: number) => (
            <div key={index} className="bg-background border-l-4 border-blue-600 rounded-r-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <code className="text-sm font-mono font-bold text-blue-600">{event.event}</code>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Data Points: </span>
                {event.dataPoints}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PagePlacementCard({ placements }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <Map className="text-purple-600" size={20} />
          Page Placement & Visibility
        </h3>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          {placements.map((placement: any, index: number) => (
            <div key={index} className="grid grid-cols-3 gap-4 bg-background border border-border rounded-lg p-4">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</div>
                <div className="font-bold text-foreground text-sm">{placement.location}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Visibility</div>
                <div className="text-sm text-muted-foreground">{placement.visibility}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Purpose</div>
                <div className="text-sm text-muted-foreground">{placement.purpose}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComponentsUsedCard({ components }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <Layers className="text-blue-600" size={20} />
          UX4G Components Used
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {components.map((comp: any, index: number) => (
            <div key={index} className="bg-background border border-border rounded-lg p-4">
              <div className="font-bold text-foreground text-sm mb-2">{comp.name}</div>
              <div className="text-xs text-muted-foreground">{comp.usage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacyGovernanceCard({ notes }: any) {
  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden">
      <div className="bg-red-50 p-4 border-b-2 border-red-200">
        <h4 className="font-bold text-foreground flex items-center gap-2">
          <Shield className="text-red-600" size={18} />
          Privacy & Governance Notes
        </h4>
      </div>

      <div className="p-4 bg-card">
        <ul className="space-y-2">
          {notes.map((note: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Shield className="flex-shrink-0 mt-0.5 text-red-600" size={14} />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AccessibilityNotesCard({ notes }: any) {
  return (
    <div className="border-2 border-green-200 rounded-lg overflow-hidden">
      <div className="bg-green-50 p-4 border-b-2 border-green-200">
        <h4 className="font-bold text-foreground flex items-center gap-2">
          <Eye className="text-green-600" size={18} />
          Accessibility Considerations
        </h4>
      </div>

      <div className="p-4 bg-card">
        <ul className="space-y-2">
          {notes.map((note: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={14} />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ImplementationNotesCard({ notes }: any) {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
      <div className="bg-blue-50 p-4 border-b-2 border-blue-200">
        <h4 className="font-bold text-foreground flex items-center gap-2">
          <Code className="text-blue-600" size={18} />
          Implementation Notes
        </h4>
      </div>

      <div className="p-4 bg-card">
        <ul className="space-y-2">
          {notes.map((note: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Circle className="flex-shrink-0 mt-1.5 fill-current text-blue-600" size={6} />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DocumentationReferencesCard({ references }: any) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="text-purple-600" size={20} />
        Documentation References
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {references.map((ref: any, index: number) => (
          <div key={index} className="bg-card border border-border rounded-lg p-3 flex items-center justify-between group hover:border-blue-400 transition-colors">
            <span className="text-sm text-muted-foreground font-medium">{ref.doc}</span>
            <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={16} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMetricsCard() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <PieChart className="text-blue-600" size={20} />
          Key Dashboard Metrics
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <MetricSection
            title="Service Delivery Metrics"
            metrics={[
              'Service completion rate (%)',
              'Average time to service delivery',
              'SLA compliance rate (%)',
              'Application approval rate (%)'
            ]}
          />
          <MetricSection
            title="User Experience Metrics"
            metrics={[
              'Form completion rate (%)',
              'Drop-off rate by step (%)',
              'Error rate (%)',
              'User satisfaction score (1-5)'
            ]}
          />
          <MetricSection
            title="Operational Metrics"
            metrics={[
              'Support ticket volume',
              'Average resolution time',
              'Upload failure rate (%)',
              'System uptime (%)'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function MetricSection({ title, metrics }: any) {
  return (
    <div className="bg-background rounded-lg p-4">
      <h4 className="font-bold text-foreground text-sm mb-3">{title}</h4>
      <ul className="space-y-2">
        {metrics.map((metric: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={12} />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

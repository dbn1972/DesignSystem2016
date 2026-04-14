import { Link } from "react-router";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  AlertCircle,
  Cookie,
  Globe,
  Clock,
  Users,
  FileText,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Info
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-blue-200 mb-1">Legal Information</div>
                <h1 className="text-5xl font-bold">Privacy Policy</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              Your privacy is important to us. This Privacy Policy explains how the UX4G Design System
              collects, uses, and protects information when you access our documentation, resources, and services.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated Banner */}
      <div className="bg-blue-50 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-start gap-3">
            <Info className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-foreground">
                <span className="font-bold">Last Updated:</span> April 11, 2026
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                This Privacy Policy applies to the UX4G Design System documentation portal and all related
                services provided by the Government of India Digital Public Infrastructure team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Introduction */}
          <PolicySection
            icon={<FileText className="text-primary" size={28} />}
            title="Introduction"
            number="1"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              The UX4G Design System ("we", "our", or "us") is committed to protecting the privacy and security
              of all users who access our design system documentation, component libraries, pattern libraries,
              and related digital resources.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Privacy Policy describes our practices concerning the collection, use, disclosure, and
              protection of information in connection with our services. By accessing or using the UX4G Design
              System, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
            <div className="bg-green-50 border-l-4 border-[#138808] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Our Commitment</h4>
                  <p className="text-sm text-muted-foreground">
                    As a government digital platform, we adhere to the highest standards of data protection,
                    privacy, and transparency. We comply with all applicable laws including the Information
                    Technology Act, 2000, and the Digital Personal Data Protection Act.
                  </p>
                </div>
              </div>
            </div>
          </PolicySection>

          {/* Information Collection */}
          <PolicySection
            icon={<Database className="text-primary" size={28} />}
            title="Information We Collect"
            number="2"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We collect different types of information to provide, maintain, and improve the UX4G Design System
              and ensure its security and performance.
            </p>

            <SubSection title="2.1 Information You Provide to Us">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Account Information:</strong> When you create an account or register for services,
                  we collect your name, email address, organization name, role, and authentication credentials.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Feedback and Communications:</strong> Information you provide when submitting
                  feedback, reporting issues, participating in surveys, or contacting our support team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Content Contributions:</strong> If you contribute to the design system
                  (e.g., submitting components, patterns, or documentation), we collect the content you submit
                  along with associated metadata.</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Information Collected Automatically">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Usage Data:</strong> Pages visited, time spent on pages, navigation patterns,
                  features used, search queries, and interaction with components and documentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Technical Information:</strong> IP address, browser type and version, device type,
                  operating system, screen resolution, and unique device identifiers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Performance Data:</strong> Error logs, page load times, API response times,
                  and system performance metrics to diagnose issues and improve service quality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span><strong>Location Data:</strong> Approximate geographic location based on IP address
                  (country, region, city level) to understand regional usage patterns and provide localized content.</span>
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Information from Third Parties">
              <p className="text-muted-foreground mb-3">
                We may receive information from third-party services when you:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span>Authenticate using government single sign-on (SSO) systems or OAuth providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span>Access our services through integration with other government digital platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <span>Link your account with code repositories (GitHub, GitLab) for contribution workflows</span>
                </li>
              </ul>
            </SubSection>
          </PolicySection>

          {/* Use of Information */}
          <PolicySection
            icon={<Eye className="text-primary" size={28} />}
            title="How We Use Your Information"
            number="3"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use the information we collect for legitimate purposes in operating, providing, and improving
              the UX4G Design System. Specifically, we use your information to:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <UseCase
                title="Service Delivery"
                items={[
                  "Provide access to design system resources and documentation",
                  "Authenticate users and manage accounts",
                  "Process and respond to your requests and inquiries",
                  "Deliver notifications about updates and service changes"
                ]}
              />
              <UseCase
                title="Improvement & Analytics"
                items={[
                  "Analyze usage patterns to improve user experience",
                  "Conduct research and development on new features",
                  "Monitor and analyze trends in design system adoption",
                  "Generate anonymized statistics and reports"
                ]}
              />
              <UseCase
                title="Security & Compliance"
                items={[
                  "Detect, prevent, and respond to security incidents",
                  "Prevent fraud, abuse, and unauthorized access",
                  "Comply with legal obligations and government policies",
                  "Enforce our terms of service and usage policies"
                ]}
              />
              <UseCase
                title="Communication"
                items={[
                  "Send important service announcements and updates",
                  "Respond to your feedback and support requests",
                  "Notify you about changes to policies or services",
                  "Share relevant news about the design system (with consent)"
                ]}
              />
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Legal Basis for Processing</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We process your information based on: (a) your consent when you provide information voluntarily;
                (b) contractual necessity to provide services you request; (c) compliance with legal obligations;
                and (d) legitimate interests in operating and improving our platform, provided such interests are
                not overridden by your rights and freedoms.
              </p>
            </div>
          </PolicySection>

          {/* Data Security */}
          <PolicySection
            icon={<Lock className="text-primary" size={28} />}
            title="Data Security"
            number="4"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement comprehensive security measures to protect your information from unauthorized access,
              disclosure, alteration, and destruction. Our security practices include:
            </p>

            <div className="space-y-4">
              <SecurityMeasure
                title="Encryption"
                description="All data in transit is encrypted using TLS 1.3 or higher. Sensitive data at rest is encrypted using AES-256 encryption standards."
              />
              <SecurityMeasure
                title="Access Controls"
                description="Strict role-based access controls (RBAC) ensure that only authorized personnel can access specific data. Multi-factor authentication (MFA) is required for administrative access."
              />
              <SecurityMeasure
                title="Infrastructure Security"
                description="Our infrastructure is hosted on secure, government-certified cloud platforms with regular security audits, intrusion detection systems, and DDoS protection."
              />
              <SecurityMeasure
                title="Monitoring & Logging"
                description="Continuous monitoring of systems for suspicious activity. Comprehensive logging of access and changes with regular security log reviews."
              />
              <SecurityMeasure
                title="Incident Response"
                description="Established incident response procedures to quickly identify, contain, and remediate security incidents. Users are notified of breaches as required by law."
              />
              <SecurityMeasure
                title="Regular Audits"
                description="Periodic security assessments, vulnerability scanning, and penetration testing by independent security experts to identify and address potential weaknesses."
              />
            </div>

            <div className="mt-6 bg-orange-50 border-l-4 border-[#FF9933] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-[#FF9933] flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Important Notice</h4>
                  <p className="text-sm text-muted-foreground">
                    While we implement strong security measures, no method of transmission over the internet or
                    electronic storage is 100% secure. We cannot guarantee absolute security but we continuously
                    work to protect your information using industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </PolicySection>

          {/* Cookies */}
          <PolicySection
            icon={<Cookie className="text-primary" size={28} />}
            title="Cookies and Tracking Technologies"
            number="5"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage,
              and improve our services. You have control over cookie settings through your browser preferences.
            </p>

            <div className="space-y-6">
              <CookieCategory
                title="Essential Cookies"
                required={true}
                description="Necessary for the website to function properly. These cookies enable core functionality such as authentication, security, and accessibility features."
                examples={["Session authentication", "Security tokens", "Load balancing", "Accessibility preferences"]}
              />
              <CookieCategory
                title="Functional Cookies"
                required={false}
                description="Remember your preferences and choices to provide a personalized experience."
                examples={["Language preferences", "Theme settings (dark/light mode)", "Recently viewed pages", "Saved filters and searches"]}
              />
              <CookieCategory
                title="Analytics Cookies"
                required={false}
                description="Help us understand how visitors interact with our platform by collecting and reporting anonymized information."
                examples={["Page views and navigation paths", "Time spent on pages", "Feature usage statistics", "Error tracking"]}
              />
              <CookieCategory
                title="Performance Cookies"
                required={false}
                description="Measure and improve the performance of our platform."
                examples={["Page load times", "API response times", "Browser performance metrics", "Network diagnostics"]}
              />
            </div>

            <div className="mt-6 bg-background border-2 border-border rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Managing Cookies</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to refuse cookies,
                delete existing cookies, and set preferences for certain websites. Please note that disabling
                cookies may affect the functionality of our services.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-colors">
                  Cookie Preferences
                </button>
                <button className="px-4 py-2 border-2 border-border text-muted-foreground rounded-lg text-sm font-semibold hover:bg-background transition-colors">
                  Learn More About Cookies
                </button>
              </div>
            </div>
          </PolicySection>

          {/* Third-Party Services */}
          <PolicySection
            icon={<Globe className="text-primary" size={28} />}
            title="Third-Party Services"
            number="6"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              The UX4G Design System may integrate with or link to third-party services to enhance functionality.
              We carefully select trusted partners and service providers who meet our security and privacy standards.
            </p>

            <div className="space-y-6">
              <ThirdPartyService
                name="Government Authentication Services"
                purpose="Single sign-on (SSO) authentication through government identity systems"
                data="Authentication tokens, user ID, name, email, department affiliation"
                control="Required for secure access to restricted resources"
              />
              <ThirdPartyService
                name="Analytics Providers"
                purpose="Web analytics and usage tracking to improve user experience"
                data="Anonymized usage data, page views, session duration, device information"
                control="Optional - can be disabled in cookie preferences"
              />
              <ThirdPartyService
                name="Content Delivery Network (CDN)"
                purpose="Fast and reliable delivery of design system assets and documentation"
                data="IP address, requested resources, browser information"
                control="Required for optimal performance"
              />
              <ThirdPartyService
                name="Communication Services"
                purpose="Email notifications, support ticket management, feedback collection"
                data="Email address, name, message content, support history"
                control="Required for service communications; marketing emails require opt-in"
              />
              <ThirdPartyService
                name="Code Repository Integration"
                purpose="Contribution workflow for design system components and patterns"
                data="GitHub/GitLab username, public profile information, contribution history"
                control="Optional - only for contributors"
              />
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">External Links</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our platform may contain links to external websites not operated by us. We are not responsible
                for the privacy practices or content of third-party sites. We encourage you to review the privacy
                policies of any external sites you visit.
              </p>
            </div>
          </PolicySection>

          {/* User Rights */}
          <PolicySection
            icon={<UserCheck className="text-primary" size={28} />}
            title="Your Rights and Choices"
            number="7"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Under applicable data protection laws, you have certain rights regarding your personal information.
              We are committed to facilitating the exercise of these rights.
            </p>

            <div className="grid gap-4">
              <UserRight
                title="Right to Access"
                description="You have the right to request copies of your personal data. We will provide this information in a commonly used electronic format."
                action="Submit an access request via email or through your account settings."
              />
              <UserRight
                title="Right to Correction"
                description="You have the right to request correction of inaccurate or incomplete personal information we hold about you."
                action="Update your profile information directly or contact us to request corrections."
              />
              <UserRight
                title="Right to Erasure"
                description="You may request deletion of your personal data, subject to legal retention requirements and legitimate business purposes."
                action="Request account deletion through settings or contact our privacy team."
              />
              <UserRight
                title="Right to Restrict Processing"
                description="You can request that we limit how we use your personal data in certain circumstances."
                action="Contact our privacy team with specific restrictions you wish to request."
              />
              <UserRight
                title="Right to Data Portability"
                description="You have the right to receive your personal data in a structured, commonly used, machine-readable format and transfer it to another controller."
                action="Request a data export through your account settings or contact us."
              />
              <UserRight
                title="Right to Object"
                description="You can object to processing of your personal data for direct marketing purposes or based on legitimate interests."
                action="Opt-out of marketing communications or contact us to object to other processing."
              />
              <UserRight
                title="Right to Withdraw Consent"
                description="Where processing is based on consent, you have the right to withdraw consent at any time without affecting the lawfulness of processing before withdrawal."
                action="Manage consent preferences in your account settings or contact us."
              />
            </div>

            <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Mail className="text-[#138808]" size={20} />
                Exercising Your Rights
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                To exercise any of these rights, please contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@ux4g.gov.in" className="text-primary font-semibold hover:underline">
                  privacy@ux4g.gov.in
                </a>
                {" "}or use the contact information provided at the end of this policy. We will respond to your
                request within 30 days and may require verification of your identity before processing requests.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are not satisfied with our response, you have the right to lodge a complaint with the
                relevant data protection authority in your jurisdiction.
              </p>
            </div>
          </PolicySection>

          {/* Data Retention */}
          <PolicySection
            icon={<Clock className="text-primary" size={28} />}
            title="Data Retention"
            number="8"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <div className="space-y-4">
              <RetentionPolicy
                category="Account Information"
                duration="Duration of active account + 2 years after account closure"
                reason="To provide continuous service and maintain historical records for audit purposes"
              />
              <RetentionPolicy
                category="Usage Analytics"
                duration="Aggregated data: Indefinitely; Individual session data: 24 months"
                reason="To analyze long-term trends while protecting individual privacy"
              />
              <RetentionPolicy
                category="Support Communications"
                duration="5 years from last interaction"
                reason="To maintain support history and improve service quality"
              />
              <RetentionPolicy
                category="Contribution History"
                duration="Indefinitely (as part of version control)"
                reason="To maintain design system integrity and attribution"
              />
              <RetentionPolicy
                category="Authentication Logs"
                duration="12 months"
                reason="Security monitoring and incident investigation"
              />
              <RetentionPolicy
                category="Feedback and Surveys"
                duration="3 years or until purpose is fulfilled"
                reason="To analyze feedback trends and improve services"
              />
            </div>

            <div className="mt-6 bg-background border-2 border-border rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Deletion Procedures</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                When the retention period expires, or upon your request for deletion (where applicable), we:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Permanently delete personal data from active systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Anonymize data for statistical or archival purposes where possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Remove backups according to our backup retention schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Maintain only what is legally required for compliance purposes</span>
                </li>
              </ul>
            </div>
          </PolicySection>

          {/* Children's Privacy */}
          <PolicySection
            icon={<Users className="text-primary" size={28} />}
            title="Children's Privacy"
            number="9"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              The UX4G Design System is intended for use by government employees, contractors, designers,
              developers, and other professionals involved in building government digital services. Our services
              are not directed at children under the age of 18.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not knowingly collect personal information from individuals under 18 years of age. If you
              are under 18, please do not provide any personal information through our services.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#FF9933] p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-[#FF9933] flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Parent/Guardian Notice</h4>
                  <p className="text-sm text-muted-foreground">
                    If you believe that a child under 18 has provided us with personal information, please
                    contact us immediately at{" "}
                    <a href="mailto:privacy@ux4g.gov.in" className="text-primary font-semibold hover:underline">
                      privacy@ux4g.gov.in
                    </a>
                    {" "}and we will take steps to delete such information from our systems promptly.
                  </p>
                </div>
              </div>
            </div>
          </PolicySection>

          {/* Changes to Policy */}
          <PolicySection
            icon={<FileText className="text-primary" size={28} />}
            title="Changes to This Privacy Policy"
            number="10"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technologies, legal requirements, or other factors. When we make changes, we will:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-2" size={20} />
                <span>Update the "Last Updated" date at the top of this policy</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-2" size={20} />
                <span>Post the revised policy on this page</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-2" size={20} />
                <span>Notify you via email or prominent notice on our platform for material changes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-2" size={20} />
                <span>Maintain an archive of previous versions for reference</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Material changes will take effect 30 days after notification, giving you time to review and
              understand the changes. Your continued use of the UX4G Design System after the effective date
              constitutes acceptance of the updated Privacy Policy.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-2">Review Regularly</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we
                protect your information. If you disagree with any changes, you may discontinue using our
                services or contact us to close your account.
              </p>
            </div>
          </PolicySection>

          {/* Contact Information */}
          <PolicySection
            icon={<Mail className="text-primary" size={28} />}
            title="Contact Information"
            number="11"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions, concerns, complaints, or requests regarding this Privacy Policy or
              our data practices, please contact us using the information below.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#000080] to-[#000050] text-white rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Data Protection Officer</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="text-blue-200 text-xs mb-1">Email</div>
                      <a href="mailto:privacy@ux4g.gov.in" className="hover:underline font-semibold">
                        privacy@ux4g.gov.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="text-blue-200 text-xs mb-1">Phone</div>
                      <a href="tel:+911800-180-1900" className="hover:underline font-semibold">
                        1800-180-1900 (Toll-Free)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="text-blue-200 text-xs mb-1">Office Hours</div>
                      <div className="font-semibold">Monday - Friday, 9:00 AM - 6:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground text-lg mb-4">Postal Address</h4>
                <div className="text-sm text-muted-foreground space-y-1 mb-6">
                  <p className="font-semibold">Data Protection Officer</p>
                  <p>UX4G Design System</p>
                  <p>Digital Public Infrastructure Division</p>
                  <p>Ministry of Electronics and Information Technology</p>
                  <p>Government of India</p>
                  <p>Electronics Niketan, 6 CGO Complex</p>
                  <p>Lodhi Road, New Delhi - 110003</p>
                  <p className="pt-2 font-semibold">India</p>
                </div>
                <div className="text-xs text-muted-foreground bg-card border border-border rounded p-3">
                  <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 5-7 business
                  days. Complex requests may take up to 30 days as permitted by law.
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Shield className="text-[#138808]" size={20} />
                Security Issue Reporting
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                If you discover a security vulnerability or data breach, please report it immediately to our
                security team:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:security@ux4g.gov.in"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <Shield size={16} />
                  security@ux4g.gov.in
                </a>
                <div className="text-sm text-muted-foreground self-center">
                  Include "SECURITY" in the subject line for priority handling
                </div>
              </div>
            </div>
          </PolicySection>

        </div>

        {/* Back to Home */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t-2 border-border text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to UX4G Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-border mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">UX4G Design System</span>
              {" "}• Government of India • © 2026
            </div>
            <div className="flex items-center gap-6">
              <a href="/accessibility" className="text-muted-foreground hover:text-primary hover:underline">
                Accessibility
              </a>
              <span className="text-muted-foreground font-bold">Privacy Policy</span>
              <a href="/terms" className="text-muted-foreground hover:text-primary hover:underline">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#FF9933]"></span>
              <span className="w-4 h-4 rounded-full bg-card border-2 border-border"></span>
              <span className="w-4 h-4 rounded-full bg-green-700"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components

function PolicySection({
  icon,
  title,
  number,
  children
}: {
  icon: React.ReactNode;
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-8" id={`section-${number}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold text-primary mb-1">Section {number}</div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="ml-18 space-y-4">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
      {children}
    </div>
  );
}

function UseCase({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
      <h4 className="font-bold text-foreground mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
            <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityMeasure({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-green-50 border-l-4 border-[#138808] p-5 rounded-r-lg">
      <h4 className="font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function CookieCategory({
  title,
  required,
  description,
  examples
}: {
  title: string;
  required: boolean;
  description: string;
  examples: string[];
}) {
  return (
    <div className={`border-2 ${required ? 'border-orange-200 bg-orange-50' : 'border-border bg-background'} rounded-lg p-5`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-foreground">{title}</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          required
            ? 'bg-orange-200 text-orange-900'
            : 'bg-blue-100 text-blue-900'
        }`}>
          {required ? 'Required' : 'Optional'}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="text-xs text-muted-foreground">
        <strong>Examples:</strong> {examples.join(', ')}
      </div>
    </div>
  );
}

function ThirdPartyService({
  name,
  purpose,
  data,
  control
}: {
  name: string;
  purpose: string;
  data: string;
  control: string;
}) {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-5">
      <h4 className="font-bold text-foreground mb-3">{name}</h4>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-semibold text-muted-foreground">Purpose:</span>{' '}
          <span className="text-muted-foreground">{purpose}</span>
        </div>
        <div>
          <span className="font-semibold text-muted-foreground">Data Shared:</span>{' '}
          <span className="text-muted-foreground">{data}</span>
        </div>
        <div>
          <span className="font-semibold text-muted-foreground">Your Control:</span>{' '}
          <span className="text-muted-foreground">{control}</span>
        </div>
      </div>
    </div>
  );
}

function UserRight({
  title,
  description,
  action
}: {
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-5 hover:border-primary transition-colors">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="text-[#138808] flex-shrink-0 mt-1" size={20} />
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
          <div className="text-xs text-muted-foreground bg-blue-50 border border-blue-200 rounded p-3">
            <strong>How to exercise:</strong> {action}
          </div>
        </div>
      </div>
    </div>
  );
}

function RetentionPolicy({
  category,
  duration,
  reason
}: {
  category: string;
  duration: string;
  reason: string;
}) {
  return (
    <div className="bg-blue-50 border-l-4 border-primary p-5 rounded-r-lg">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-bold text-foreground">{category}</h4>
        <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold whitespace-nowrap ml-4">
          {duration}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{reason}</p>
    </div>
  );
}

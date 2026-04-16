import { AlertTriangle, FileText, Link as LinkIcon, Shield, Info, ExternalLink, Code, Users, Scale, Clock, CheckCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 rounded-full text-sm mb-6">
              <AlertTriangle size={16} />
              <span>Legal Disclaimer</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Disclaimer
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              This disclaimer outlines the limitations, responsibilities, and legal notices associated with
              the use of the UX4G Design System. Please read this carefully before using the design system
              in your projects.
            </p>

            <div className="bg-card/10 rounded-lg p-4">
              <p className="text-sm text-blue-200">
                <strong>Last Updated:</strong> April 12, 2026 | <strong>Effective Date:</strong> January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        <GeneralDisclaimerSection />
        <NoWarrantySection />
        <LimitationOfLiabilitySection />
        <AccuracyOfInformationSection />
        <ExternalLinksSection />
        <TechnicalDisclaimerSection />
        <AccessibilityDisclaimerSection />
        <SecurityDisclaimerSection />
        <GovernmentEndorsementSection />
        <ModificationsSection />
        <JurisdictionSection />
        <ContactDisclaimerSection />
      </div>
    </div>
  );
}

function GeneralDisclaimerSection() {
  return (
    <section id="general">
      <SectionHeader
        title="General Disclaimer"
        description="Important notices about using the UX4G Design System"
        icon={<Info size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Important Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The UX4G Design System is provided by the Government of India as an open-source resource
                to facilitate the development of consistent and accessible digital services. While we strive
                to ensure the quality and reliability of the design system, it is provided "as-is" without
                warranties of any kind, either express or implied.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <DisclaimerCard
            title="Purpose of the Design System"
            content="UX4G is designed to help government departments and service providers create consistent, accessible, and user-friendly digital services. It is a tool to support development, not a guarantee of compliance or success."
          />

          <DisclaimerCard
            title="User Responsibility"
            content="Users of the UX4G Design System are solely responsible for ensuring that their implementations meet all applicable laws, regulations, accessibility standards, and security requirements."
          />

          <DisclaimerCard
            title="Not Legal or Technical Advice"
            content="The content, guidelines, and recommendations in the UX4G Design System do not constitute legal, technical, or professional advice. Consult appropriate experts for specific guidance."
          />

          <DisclaimerCard
            title="Continuous Evolution"
            content="The design system is continuously evolving. Components, patterns, and guidelines may change over time. Users should stay informed about updates and changes that may affect their implementations."
          />
        </div>
      </div>
    </section>
  );
}

function DisclaimerCard({ title, content }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-gradient-to-br from-white to-gray-50">
      <h3 className="font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

function NoWarrantySection() {
  return (
    <section id="no-warranty">
      <SectionHeader
        title="No Warranty"
        description="Disclaimer of warranties for the design system"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-red-200 bg-red-50 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-100 to-red-50 border-b-2 border-red-200 p-6">
            <h3 className="font-bold text-foreground text-xl mb-2">Disclaimer of Warranties</h3>
            <p className="text-sm text-muted-foreground">
              The UX4G Design System is provided without warranties of any kind
            </p>
          </div>

          <div className="p-6 space-y-4">
            <WarrantyDisclaimer
              title="No Express Warranties"
              description="The Government of India makes no express warranties, representations, or guarantees regarding the UX4G Design System, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."
            />

            <WarrantyDisclaimer
              title="No Implied Warranties"
              description="All implied warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, are hereby disclaimed to the maximum extent permitted by applicable law."
            />

            <WarrantyDisclaimer
              title="No Guarantee of Accuracy"
              description="We do not warrant that the design system, its components, documentation, or any information provided is accurate, complete, reliable, current, or error-free."
            />

            <WarrantyDisclaimer
              title="No Guarantee of Availability"
              description="We do not warrant that the UX4G Design System, its website, documentation, or related services will be uninterrupted, secure, or free from errors, bugs, or viruses."
            />

            <WarrantyDisclaimer
              title="No Guarantee of Results"
              description="We do not warrant that use of the UX4G Design System will result in any particular outcome, including compliance with accessibility standards, security requirements, or user satisfaction."
            />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">What This Means for You</h3>
          <p className="text-sm text-muted-foreground mb-4">
            You accept all risks associated with using the UX4G Design System. You are responsible for:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Testing components and patterns in your specific environment</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Ensuring compliance with all applicable laws and regulations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Validating accessibility and security of your implementations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
              <span>Maintaining and updating your use of the design system</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function WarrantyDisclaimer({ title, description }: any) {
  return (
    <div className="border-l-4 border-red-500 pl-4 py-2">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function LimitationOfLiabilitySection() {
  return (
    <section id="liability">
      <SectionHeader
        title="Limitation of Liability"
        description="Limits on liability for use of the design system"
        icon={<Scale size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b-2 border-border p-6">
            <h3 className="font-bold text-foreground text-xl mb-2">Liability Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              The Government of India shall not be liable for any damages arising from the use of the UX4G Design System
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Exclusion of Liability</h4>
              <p className="text-sm text-muted-foreground mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Government of India,
                its departments, agencies, officers, employees, or contractors be liable for any:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <LiabilityExclusion items={[
                  'Direct damages',
                  'Indirect damages',
                  'Incidental damages',
                  'Consequential damages'
                ]} />

                <LiabilityExclusion items={[
                  'Special damages',
                  'Punitive damages',
                  'Loss of profits or revenue',
                  'Loss of data or information'
                ]} />
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                This limitation applies regardless of the theory of liability (contract, tort, negligence, or otherwise),
                even if the Government of India has been advised of the possibility of such damages.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">Not Liable For</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Errors or inaccuracies in the design system</li>
                  <li>• Service interruptions or downtime</li>
                  <li>• Security breaches or data loss</li>
                  <li>• Compatibility issues with your systems</li>
                  <li>• Third-party content or services</li>
                  <li>• Consequences of your implementation choices</li>
                  <li>• Non-compliance with regulations</li>
                  <li>• Accessibility failures in your implementations</li>
                </ul>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">Your Responsibility</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Assess suitability for your needs</li>
                  <li>• Test thoroughly before deployment</li>
                  <li>• Ensure regulatory compliance</li>
                  <li>• Validate accessibility standards</li>
                  <li>• Implement security measures</li>
                  <li>• Maintain backup and recovery procedures</li>
                  <li>• Monitor and update implementations</li>
                  <li>• Obtain professional advice when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiabilityExclusion({ items }: any) {
  return (
    <ul className="space-y-1">
      {items.map((item: string, index: number) => (
        <li key={index} className="text-sm text-muted-foreground">• {item}</li>
      ))}
    </ul>
  );
}

function AccuracyOfInformationSection() {
  return (
    <section id="accuracy">
      <SectionHeader
        title="Accuracy of Information"
        description="Disclaimer regarding content accuracy and completeness"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Information Accuracy Disclaimer</h3>
          <p className="text-muted-foreground mb-4">
            While we strive to provide accurate and up-to-date information, documentation, and guidelines,
            we make no representations or warranties about:
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Documentation & Guidelines</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Completeness of documentation</li>
                <li>• Accuracy of code examples</li>
                <li>• Currency of best practices</li>
                <li>• Applicability to all scenarios</li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Technical Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Browser compatibility data</li>
                <li>• Performance metrics</li>
                <li>• Accessibility claims</li>
                <li>• Security assessments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Clock size={20} className="text-blue-600" />
            Information May Change
          </h3>
          <p className="text-sm text-muted-foreground">
            The information, components, patterns, and guidelines in the UX4G Design System may be updated,
            modified, or removed at any time without prior notice. We recommend regularly checking for updates
            and changes that may affect your implementations.
          </p>
        </div>

        <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Verification Required</h3>
          <p className="text-sm text-muted-foreground mb-4">
            You are responsible for verifying the accuracy, completeness, and suitability of any information,
            components, or patterns from the UX4G Design System before using them in production environments.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Always test thoroughly</strong> and validate against your specific requirements, regulations,
            and standards.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExternalLinksSection() {
  return (
    <section id="external-links">
      <SectionHeader
        title="External Links Disclaimer"
        description="Disclaimer for third-party websites and resources"
        icon={<ExternalLink size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b-2 border-border p-6">
            <h3 className="font-bold text-foreground text-xl mb-2">Third-Party Links and Resources</h3>
            <p className="text-sm text-muted-foreground">
              The UX4G Design System may contain links to external websites, third-party resources, or references
              to external tools and services
            </p>
          </div>

          <div className="p-6 space-y-4">
            <ExternalLinkNotice
              title="No Endorsement"
              content="Links to external websites or references to third-party products, services, or resources do not constitute an endorsement by the Government of India. We are not responsible for the content, accuracy, or availability of external sites."
            />

            <ExternalLinkNotice
              title="No Control"
              content="We have no control over the content, privacy policies, terms of use, or practices of third-party websites. Visiting external links is at your own risk."
            />

            <ExternalLinkNotice
              title="Changes to External Sites"
              content="External websites may change or be discontinued without notice. We are not responsible for maintaining the accuracy of external links or for the consequences of broken or outdated links."
            />

            <ExternalLinkNotice
              title="User Responsibility"
              content="You are responsible for reviewing the terms of use, privacy policies, and other applicable policies of any third-party websites you visit through links from the UX4G Design System."
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-3">Common External Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <LinkIcon size={14} className="text-gray-400" />
                GitHub repositories
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={14} className="text-gray-400" />
                NPM packages
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={14} className="text-gray-400" />
                Documentation sites
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={14} className="text-gray-400" />
                Third-party tools
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={14} className="text-gray-400" />
                Reference materials
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-3">Security Warning</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Exercise caution when clicking external links:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Verify the legitimacy of the site</li>
              <li>• Check for secure (HTTPS) connections</li>
              <li>• Review privacy and security policies</li>
              <li>• Use caution with downloads</li>
              <li>• Report suspicious links</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExternalLinkNotice({ title, content }: any) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  );
}

function TechnicalDisclaimerSection() {
  return (
    <section id="technical">
      <SectionHeader
        title="Technical Disclaimer"
        description="Technical limitations and requirements"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Technical Considerations</h3>
          <p className="text-muted-foreground mb-6">
            The UX4G Design System has technical requirements and limitations that users should be aware of:
          </p>

          <div className="grid grid-cols-2 gap-6">
            <TechnicalNoticeCard
              title="Browser Compatibility"
              content="While we test across modern browsers, we cannot guarantee compatibility with all browsers, versions, or configurations. Users should test in their target environments."
            />

            <TechnicalNoticeCard
              title="Framework Compatibility"
              content="Components are designed for specific frameworks (React, Angular, etc.). Compatibility with custom frameworks or modified versions is not guaranteed."
            />

            <TechnicalNoticeCard
              title="Dependencies"
              content="The design system relies on third-party dependencies which may have their own requirements, limitations, and potential issues."
            />

            <TechnicalNoticeCard
              title="Performance"
              content="Performance may vary based on implementation, environment, data volume, and user devices. Optimize and test for your specific use case."
            />

            <TechnicalNoticeCard
              title="Breaking Changes"
              content="Major version updates may include breaking changes. Review release notes and test thoroughly before upgrading production systems."
            />

            <TechnicalNoticeCard
              title="Customization Risks"
              content="Heavy customization or modification of components may lead to unexpected behavior, compatibility issues, or maintenance challenges."
            />
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Testing Requirement</h3>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">You must thoroughly test all implementations</strong> in your specific
            environment before deploying to production. This includes testing for functionality, performance,
            accessibility, security, and compatibility with your infrastructure and user base.
          </p>
        </div>
      </div>
    </section>
  );
}

function TechnicalNoticeCard({ title, content }: any) {
  return (
    <div className="bg-background border border-border rounded-lg p-4">
      <h4 className="font-semibold text-foreground mb-2 text-sm">{title}</h4>
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  );
}

function AccessibilityDisclaimerSection() {
  return (
    <section id="accessibility">
      <SectionHeader
        title="Accessibility Disclaimer"
        description="Accessibility compliance and responsibilities"
        icon={<Users size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Accessibility Commitment & Disclaimer</h3>
          <p className="text-muted-foreground mb-6">
            We are committed to making the UX4G Design System accessible and compliant with WCAG 2.1 Level AA
            standards. However, accessibility is a shared responsibility between the design system and its
            implementers.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Our Commitment</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                  <span>Components designed for WCAG 2.1 AA compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                  <span>Accessibility guidelines and best practices provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                  <span>Regular accessibility testing and improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600" size={16} />
                  <span>Support for accessibility issues in core components</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3">Your Responsibility</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="flex-shrink-0 mt-0.5 text-orange-600" size={16} />
                  <span>Test accessibility in your specific implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="flex-shrink-0 mt-0.5 text-orange-600" size={16} />
                  <span>Ensure proper use of ARIA attributes and semantic HTML</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="flex-shrink-0 mt-0.5 text-orange-600" size={16} />
                  <span>Validate content accessibility (images, videos, documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="flex-shrink-0 mt-0.5 text-orange-600" size={16} />
                  <span>Conduct user testing with assistive technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Important Notice</h3>
          <p className="text-sm text-muted-foreground">
            While our components are designed with accessibility in mind, <strong>we cannot guarantee</strong> that
            your final implementation will be fully accessible. Accessibility depends on proper implementation,
            content quality, and context-specific considerations. You are responsible for ensuring your application
            meets all applicable accessibility requirements and regulations.
          </p>
        </div>
      </div>
    </section>
  );
}

function SecurityDisclaimerSection() {
  return (
    <section id="security">
      <SectionHeader
        title="Security Disclaimer"
        description="Security considerations and responsibilities"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Security Responsibility</h3>
              <p className="text-sm text-muted-foreground">
                Security is a shared responsibility. While we follow security best practices in developing the
                UX4G Design System, <strong>you are ultimately responsible</strong> for the security of your
                implementations and applications.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Follow secure coding practices</li>
              <li>• Address reported vulnerabilities promptly</li>
              <li>• Provide security guidelines and recommendations</li>
              <li>• Use trusted dependencies</li>
              <li>• Regular security reviews</li>
              <li>• Vulnerability disclosure process</li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h4 className="font-bold text-foreground mb-4">What You Must Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep components and dependencies updated</li>
              <li>• Implement proper authentication and authorization</li>
              <li>• Validate and sanitize all user inputs</li>
              <li>• Follow security best practices for your stack</li>
              <li>• Conduct security audits and penetration testing</li>
              <li>• Monitor for security vulnerabilities</li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Security Limitations</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• No guarantee of zero vulnerabilities</li>
            <li>• Security depends on proper implementation and configuration</li>
            <li>• Third-party dependencies may have their own vulnerabilities</li>
            <li>• Responsibility for data protection and privacy compliance rests with you</li>
            <li>• No liability for security breaches in your implementations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function GovernmentEndorsementSection() {
  return (
    <section id="endorsement">
      <SectionHeader
        title="Government Endorsement"
        description="Disclaimer about government endorsement and affiliation"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-yellow-200 bg-yellow-50 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">No Implied Endorsement</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use of the UX4G Design System <strong>does not imply</strong> endorsement, approval, or affiliation
            with the Government of India unless explicitly stated in writing.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">Cannot Claim:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Official government endorsement</li>
                <li>• Government approval or certification</li>
                <li>• Partnership with government entities</li>
                <li>• Government affiliation or sponsorship</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">May State:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• "Built with UX4G Design System"</li>
                <li>• "Uses UX4G components"</li>
                <li>• "Compatible with UX4G standards"</li>
                <li>• Proper attribution as required</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Commercial and Third-Party Use</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Commercial entities, vendors, and service providers using the UX4G Design System may not:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Claim their products or services are government-approved</li>
            <li>• Use government symbols or emblems without authorization</li>
            <li>• Imply official government partnership or endorsement</li>
            <li>• Mislead users about government affiliation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ModificationsSection() {
  return (
    <section id="modifications">
      <SectionHeader
        title="Modifications to Disclaimer"
        description="Changes to this disclaimer"
        icon={<FileText size={28} />}
      />

      <div className="mt-8">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Right to Modify</h3>
          <p className="text-muted-foreground mb-4">
            The Government of India reserves the right to modify, update, or change this disclaimer at any time
            without prior notice. Changes become effective immediately upon posting to the UX4G Design System
            website.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Your Responsibility to Review</h4>
            <p className="text-sm text-muted-foreground">
              It is your responsibility to review this disclaimer periodically. Continued use of the UX4G Design
              System after changes constitutes acceptance of the modified disclaimer.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong> April 12, 2026<br />
            <strong>Previous Version:</strong> January 1, 2024
          </div>
        </div>
      </div>
    </section>
  );
}

function JurisdictionSection() {
  return (
    <section id="jurisdiction">
      <SectionHeader
        title="Governing Law & Jurisdiction"
        description="Legal jurisdiction and applicable laws"
        icon={<Scale size={28} />}
      />

      <div className="mt-8">
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Applicable Law</h3>
          <p className="text-muted-foreground mb-4">
            This disclaimer and your use of the UX4G Design System shall be governed by and construed in
            accordance with the laws of India, without regard to conflict of law principles.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Jurisdiction</h4>
              <p className="text-sm text-muted-foreground">
                Any disputes arising from the use of the UX4G Design System shall be subject to the exclusive
                jurisdiction of the courts located in New Delhi, India.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Applicable Laws</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Information Technology Act, 2000</li>
                <li>• Copyright Act, 1957</li>
                <li>• Contract Act, 1872</li>
                <li>• Other applicable Indian laws</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDisclaimerSection() {
  return (
    <section id="contact-disclaimer">
      <SectionHeader
        title="Questions About This Disclaimer"
        description="Contact information for disclaimer-related queries"
        icon={<Info size={28} />}
      />

      <div className="mt-8">
        <div className="border-2 border-border rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white">
          <h3 className="font-bold text-foreground mb-4 text-xl">Need Clarification?</h3>
          <p className="text-muted-foreground mb-6">
            If you have questions about this disclaimer or need clarification about any of the terms,
            please contact our legal team.
          </p>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold text-foreground mb-2">Legal & Compliance Team</div>
            <a href="mailto:legal@ux4g.gov.in" className="text-blue-600 hover:underline">
              legal@ux4g.gov.in
            </a>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              For other inquiries, please visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        <h2 className="text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

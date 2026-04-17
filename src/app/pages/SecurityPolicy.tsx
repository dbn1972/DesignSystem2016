import { Shield, Lock, Key, AlertTriangle, FileText, Eye, CheckCircle, XCircle, Clock, Users, Database, Server, Package } from "lucide-react";
import { useTranslation } from "react-i18next";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";

export default function SecurityPolicy() {
  const { i18n } = useTranslation();
  const c = i18n.resolvedLanguage === 'hi' ? SEC_HI : SEC_EN;

  const toc = [
    { id: 'standards', label: 'Security Standards' },
    { id: 'reporting', label: 'Vulnerability Reporting' },
    { id: 'practices', label: 'Security Practices' },
    { id: 'data-protection', label: 'Data Protection' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'audit', label: 'Security Audits' },
    { id: 'incident-response', label: 'Incident Response' },
    { id: 'third-party', label: 'Third-Party Security' },
  ];

  return (
    <LegalPageLayout
      badge={c.badge}
      badgeIcon={<Lock size={14} className="text-primary" />}
      heroIcon={<Lock size={30} />}
      title={c.title}
      description={c.description}
      date="April 11, 2026"
      dateLabel={c.dateLabel}
      sidebarEyebrow={c.sidebarEyebrow}
      sidebarTitle={c.sidebarTitle}
      sidebarPill={c.sidebarPill}
      metrics={[
        { value: 'OWASP', label: c.metricSections },
        { value: 'WCAG AA', label: c.metricCompliance },
        { value: 'ISO 27001', label: c.metricFramework },
        { value: '24/7', label: c.metricResponse },
      ]}
      note={{ title: c.noteTitle, text: c.noteText }}
      breadcrumbTitle={c.title}
      breadcrumbHome={c.breadcrumbHome}
      breadcrumbGovernance={c.breadcrumbGovernance}
      toc={toc}
      footerQuestion={c.footerQuestion}
      footerDesc={c.footerDesc}
    >
        <SecurityStandardsSection />
        <VulnerabilityReportingSection />
        <SecurityPracticesSection />
        <DataProtectionSection />
        <ComplianceSection />
        <SecurityAuditSection />
        <IncidentResponseSection />
        <ThirdPartySecuritySection />
    </LegalPageLayout>
  );
}

function SecurityStandardsSection() {
  return (
    <section id="standards">
      <SectionHeader
        title="Security Standards"
        description="Industry standards and frameworks we follow"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 grid grid-cols-2 gap-6">
        <SecurityStandard
          title="OWASP Top 10"
          description="Protection against the most critical web application security risks"
          compliance="Full Compliance"
          details={[
            'Injection Prevention',
            'Broken Authentication Protection',
            'Sensitive Data Exposure Prevention',
            'XML External Entities (XXE) Protection',
            'Broken Access Control Prevention',
            'Security Misconfiguration Prevention',
            'Cross-Site Scripting (XSS) Protection',
            'Insecure Deserialization Prevention',
            'Using Components with Known Vulnerabilities',
            'Insufficient Logging & Monitoring'
          ]}
        />

        <SecurityStandard
          title="Indian Government IT Standards"
          description="Compliance with CERT-In and GIGW guidelines"
          compliance="Mandatory Compliance"
          details={[
            'CERT-In (Indian Computer Emergency Response Team) guidelines',
            'GIGW (Guidelines for Indian Government Websites)',
            'Aadhaar Data Protection Standards',
            'IT Act 2000 & Amendments',
            'Digital Personal Data Protection Act 2023',
            'MeitY Security Standards'
          ]}
        />
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Lock size={20} className="text-blue-600" />
          Security-First Development
        </h3>
        <p className="text-sm text-muted-foreground">
          All UX4G components are developed with security as a primary concern. We follow secure coding practices,
          conduct regular security reviews, and maintain zero-trust architecture principles. Every component undergoes
          security testing before release.
        </p>
      </div>
    </section>
  );
}

function SecurityStandard({ title, description, compliance, details }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-700 border border-green-300 rounded-full font-semibold text-xs">
            {compliance}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-foreground mb-3 text-sm">Coverage:</h4>
        <ul className="space-y-2">
          {details.map((detail: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function VulnerabilityReportingSection() {
  return (
    <section id="reporting">
      <SectionHeader
        title="Vulnerability Reporting"
        description="How to report security vulnerabilities responsibly"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Reporting Process */}
        <div className="border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-8">
          <h3 className="font-bold text-foreground mb-6 text-center">Responsible Disclosure Process</h3>

          <div className="max-w-5xl mx-auto space-y-6">
            <ReportingStep
              step="1"
              title="Identify Security Issue"
              description="Discover a potential security vulnerability in UX4G components"
              timeline="Immediate"
            />

            <ReportingStep
              step="2"
              title="Report Privately"
              description="Email security@ux4g.gov.in with detailed information (do not disclose publicly)"
              timeline="Within 24 hours of discovery"
            />

            <ReportingStep
              step="3"
              title="Acknowledgment"
              description="Security team acknowledges receipt and begins investigation"
              timeline="Within 24 hours"
            />

            <ReportingStep
              step="4"
              title="Investigation & Fix"
              description="Team investigates, develops patch, and tests solution"
              timeline="Critical: 24-48 hours | High: 3-7 days | Medium: 14 days"
            />

            <ReportingStep
              step="5"
              title="Coordinated Disclosure"
              description="Security advisory published after fix is deployed"
              timeline="After 90% of users have updated"
            />
          </div>
        </div>

        {/* What to Include in Report */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              What to Include in Your Report
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Component name and version affected</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Detailed description of the vulnerability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Steps to reproduce the issue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Proof of concept (if available)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Impact assessment and potential consequences</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Your contact information for follow-up</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Eye size={20} className="text-purple-600" />
              Severity Classification
            </h3>
            <div className="space-y-3 text-sm">
              <SeverityLevel
                level="Critical"
                color="red"
                examples="Remote code execution, authentication bypass, data breach"
                response="24-48 hours"
              />
              <SeverityLevel
                level="High"
                color="orange"
                examples="XSS, CSRF, privilege escalation"
                response="3-7 days"
              />
              <SeverityLevel
                level="Medium"
                color="yellow"
                examples="Information disclosure, missing security headers"
                response="14 days"
              />
              <SeverityLevel
                level="Low"
                color="blue"
                examples="Minor configuration issues, best practice violations"
                response="30 days"
              />
            </div>
          </div>
        </div>

        {/* Bug Bounty Program */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Key size={20} className="text-green-600" />
            Security Researcher Recognition
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            We recognize and appreciate security researchers who help us maintain a secure design system.
            Valid vulnerability reports receive:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-card border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="font-semibold text-foreground mb-1">Public Recognition</div>
              <div className="text-xs text-muted-foreground">Listed in security hall of fame</div>
            </div>
            <div className="bg-card border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="font-semibold text-foreground mb-1">Certificate</div>
              <div className="text-xs text-muted-foreground">Official acknowledgment from Government of India</div>
            </div>
            <div className="bg-card border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="font-semibold text-foreground mb-1">Priority Support</div>
              <div className="text-xs text-muted-foreground">Fast-track access to security team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportingStep({ step, title, description, timeline }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
          {step}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-foreground text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1 flex-shrink-0 ml-4">
            <Clock size={12} />
            {timeline}
          </div>
        </div>
      </div>
    </div>
  );
}

function SeverityLevel({ level, color, examples, response }: any) {
  const colorClasses = {
    red: 'bg-red-100 text-red-700 border-red-300',
    orange: 'bg-orange-100 text-orange-700 border-orange-300',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    blue: 'bg-blue-100 text-blue-700 border-blue-300'
  };

  return (
    <div className={`border ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-3`}>
      <div className="font-bold mb-1">{level}</div>
      <div className="text-xs text-muted-foreground mb-2">Examples: {examples}</div>
      <div className="text-xs">
        <strong>Response Time:</strong> {response}
      </div>
    </div>
  );
}

function SecurityPracticesSection() {
  return (
    <section id="practices">
      <SectionHeader
        title="Security Practices"
        description="How we build and maintain secure components"
        icon={<Lock size={28} />}
      />

      <div className="mt-8 grid grid-cols-3 gap-6">
        <SecurityPractice
          icon={<Server size={24} />}
          title="Secure Development"
          practices={[
            'Code review for all changes',
            'Automated security scanning',
            'Dependency vulnerability checks',
            'Static code analysis',
            'Principle of least privilege'
          ]}
        />

        <SecurityPractice
          icon={<Database size={24} />}
          title="Data Protection"
          practices={[
            'No data storage in components',
            'Sanitize all user inputs',
            'XSS prevention measures',
            'CSRF token validation',
            'Secure defaults'
          ]}
        />

        <SecurityPractice
          icon={<Users size={24} />}
          title="Access Control"
          practices={[
            'Role-based access control',
            'Multi-factor authentication',
            'Session management',
            'Audit logging',
            'Regular access reviews'
          ]}
        />
      </div>
    </section>
  );
}

function SecurityPractice({ icon, title, practices }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="font-bold text-foreground text-lg">{title}</h3>
      </div>

      <ul className="space-y-2">
        {practices.map((practice: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
            <span>{practice}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataProtectionSection() {
  return (
    <section id="data-protection">
      <SectionHeader
        title="Data Protection"
        description="How we protect citizen data and privacy"
        icon={<Database size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Data Handling Principles</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span><strong>No Data Storage:</strong> Components don't store sensitive data locally</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span><strong>Data Minimization:</strong> Only collect data absolutely necessary</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span><strong>Encryption:</strong> All data transmission uses HTTPS/TLS 1.2+</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span><strong>Data Sanitization:</strong> All inputs sanitized to prevent injection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span><strong>Privacy by Design:</strong> Privacy built into every component</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Aadhaar Data Protection</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
                <span>Aadhaar number masking by default (XXXX XXXX 1234)</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
                <span>Verhoeff checksum validation to prevent errors</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
                <span>No logging or analytics of Aadhaar numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
                <span>Compliance with UIDAI data protection guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="flex-shrink-0 mt-0.5 text-purple-600" size={16} />
                <span>Integration with Aadhaar eSign for digital signatures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section id="compliance">
      <SectionHeader
        title="Compliance & Certifications"
        description="Industry standards and government regulations we comply with"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 grid grid-cols-3 gap-6">
        <ComplianceItem
          title="WCAG 2.1 Level AA"
          description="Web Content Accessibility Guidelines"
          status="Certified"
          details="All components tested for accessibility compliance"
        />

        <ComplianceItem
          title="CERT-In Guidelines"
          description="Indian Computer Emergency Response Team"
          status="Compliant"
          details="Following CERT-In security guidelines for government websites"
        />

        <ComplianceItem
          title="GIGW Standards"
          description="Guidelines for Indian Government Websites"
          status="Compliant"
          details="Adheres to MeitY's website development standards"
        />

        <ComplianceItem
          title="Digital India Standards"
          description="National e-Governance Standards"
          status="Compliant"
          details="Aligned with Digital India framework requirements"
        />

        <ComplianceItem
          title="Data Protection Act 2023"
          description="Digital Personal Data Protection"
          status="Compliant"
          details="Privacy-by-design approach for citizen data"
        />

        <ComplianceItem
          title="ISO 27001"
          description="Information Security Management"
          status="In Progress"
          details="Working toward ISO 27001 certification"
        />
      </div>
    </section>
  );
}

function ComplianceItem({ title, description, status, details }: any) {
  const statusColors = {
    'Certified': 'bg-green-100 text-green-700 border-green-300',
    'Compliant': 'bg-blue-100 text-blue-700 border-blue-300',
    'In Progress': 'bg-yellow-100 text-yellow-700 border-yellow-300'
  };

  return (
    <div className="border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>

      <div className={`inline-block px-3 py-1 border ${statusColors[status as keyof typeof statusColors]} rounded-full font-semibold text-xs mb-3`}>
        {status}
      </div>

      <p className="text-xs text-muted-foreground">{details}</p>
    </div>
  );
}

function SecurityAuditSection() {
  return (
    <section id="audit">
      <SectionHeader
        title="Security Audits"
        description="Regular security assessments and testing"
        icon={<Eye size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Automated Security Testing</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Continuous Integration Scans:</strong> Every commit tested
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Dependency Scanning:</strong> Daily checks for known vulnerabilities
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>SAST (Static Analysis):</strong> Code analyzed before merge
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>DAST (Dynamic Analysis):</strong> Runtime security testing
                </div>
              </li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Manual Security Reviews</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Quarterly Penetration Testing:</strong> Third-party security audits
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Code Reviews:</strong> Security-focused peer reviews
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Annual Security Audit:</strong> Comprehensive security assessment
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <div>
                  <strong>Accessibility Audit:</strong> WCAG compliance verification
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncidentResponseSection() {
  return (
    <section id="incident-response">
      <SectionHeader
        title="Incident Response"
        description="How we handle security incidents"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 rounded-lg p-8">
        <h3 className="font-bold text-foreground mb-6 text-center">Security Incident Response Plan</h3>

        <div className="max-w-5xl mx-auto space-y-6">
          <IncidentStep
            step="1"
            title="Detection & Triage"
            description="Incident detected through monitoring or report"
            actions={['Verify incident', 'Assess severity', 'Alert security team']}
            timeline="0-2 hours"
          />

          <IncidentStep
            step="2"
            title="Containment"
            description="Limit the impact and prevent further damage"
            actions={['Isolate affected systems', 'Block attack vectors', 'Preserve evidence']}
            timeline="2-6 hours"
          />

          <IncidentStep
            step="3"
            title="Eradication & Recovery"
            description="Remove threat and restore normal operations"
            actions={['Patch vulnerabilities', 'Deploy fixes', 'Restore services']}
            timeline="6-24 hours"
          />

          <IncidentStep
            step="4"
            title="Communication"
            description="Notify affected parties and stakeholders"
            actions={['Notify departments', 'Public disclosure if needed', 'Update documentation']}
            timeline="24-48 hours"
          />

          <IncidentStep
            step="5"
            title="Post-Incident Review"
            description="Learn from the incident and improve processes"
            actions={['Root cause analysis', 'Update procedures', 'Implement preventive measures']}
            timeline="1 week"
          />
        </div>
      </div>
    </section>
  );
}

function IncidentStep({ step, title, description, actions, timeline }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
          {step}
        </div>
      </div>

      <div className="flex-1 bg-card border border-red-200 dark:border-red-800 rounded-lg p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-foreground text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1 flex-shrink-0 ml-4">
            <Clock size={12} />
            {timeline}
          </div>
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {actions.map((action: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThirdPartySecuritySection() {
  return (
    <section id="third-party">
      <SectionHeader
        title="Third-Party Security"
        description="Dependencies and external library management"
        icon={<Package size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Dependency Management</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Minimal external dependencies to reduce attack surface</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Automated vulnerability scanning of all dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Regular updates to patch known vulnerabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>License compliance verification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Subresource Integrity (SRI) for CDN resources</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Vendor Security</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Security questionnaires for all vendors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Contractual security requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Regular vendor security assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Incident notification requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={16} />
                <span>Right to audit vendor security practices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Current Dependencies</h3>
          <p className="text-sm text-muted-foreground mb-4">
            UX4G uses minimal, well-maintained, and security-audited dependencies. All dependencies are:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-card border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center">
              <div className="font-bold text-2xl text-foreground mb-1">React 18.3+</div>
              <div className="text-xs text-muted-foreground">Core framework</div>
            </div>
            <div className="bg-card border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center">
              <div className="font-bold text-2xl text-foreground mb-1">Angular 18+</div>
              <div className="text-xs text-muted-foreground">Core framework</div>
            </div>
            <div className="bg-card border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center">
              <div className="font-bold text-2xl text-foreground mb-1">Minimal</div>
              <div className="text-xs text-muted-foreground">External libs</div>
            </div>
            <div className="bg-card border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center">
              <div className="font-bold text-2xl text-foreground mb-1">Daily</div>
              <div className="text-xs text-muted-foreground">Security scans</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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


const SEC_EN = {
  badge: 'Security & Privacy',
  title: 'Security Policy',
  description: 'UX4G Design System follows strict security practices to protect government digital services and citizen data. This policy outlines our security standards, vulnerability reporting procedures, and compliance requirements.',
  dateLabel: 'Last Updated',
  sidebarEyebrow: 'Policy overview',
  sidebarTitle: 'What this page covers',
  sidebarPill: '8 sections',
  metricSections: 'Standards',
  metricCompliance: 'Accessibility',
  metricFramework: 'Certification',
  metricResponse: 'Monitoring',
  noteTitle: 'Government standard',
  noteText: 'Compliant with CERT-In guidelines and GIGW standards.',
  breadcrumbHome: 'Home',
  breadcrumbGovernance: 'Governance',
  footerQuestion: 'Questions about this policy?',
  footerDesc: 'Contact the UX4G security team for clarification or to report vulnerabilities.',
};
const SEC_HI = {
  badge: 'सुरक्षा और गोपनीयता',
  title: 'सुरक्षा नीति',
  description: 'UX4G डिज़ाइन सिस्टम सरकारी डिजिटल सेवाओं और नागरिक डेटा की सुरक्षा के लिए सख्त सुरक्षा प्रथाओं का पालन करता है। यह नीति हमारे सुरक्षा मानकों, भेद्यता रिपोर्टिंग प्रक्रियाओं और अनुपालन आवश्यकताओं की रूपरेखा प्रस्तुत करती है।',
  dateLabel: 'अंतिम अपडेट',
  sidebarEyebrow: 'नीति अवलोकन',
  sidebarTitle: 'इस पृष्ठ में क्या शामिल है',
  sidebarPill: '8 अनुभाग',
  metricSections: 'मानक',
  metricCompliance: 'अभिगम्यता',
  metricFramework: 'प्रमाणन',
  metricResponse: 'निगरानी',
  noteTitle: 'सरकारी मानक',
  noteText: 'CERT-In दिशानिर्देशों और GIGW मानकों के अनुरूप।',
  breadcrumbHome: 'मुखपृष्ठ',
  breadcrumbGovernance: 'शासन',
  footerQuestion: 'इस नीति के बारे में प्रश्न?',
  footerDesc: 'स्पष्टीकरण या भेद्यता रिपोर्ट के लिए UX4G सुरक्षा टीम से संपर्क करें।',
};

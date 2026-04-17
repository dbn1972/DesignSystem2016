import { useTranslation } from "react-i18next";
import { Scale, FileText, Shield, AlertTriangle, Lock, Users, Globe, BookOpen, Mail } from "lucide-react";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";
import { TermsIllustration } from "../components/legal-illustrations";

export default function TermsOfUse() {
  const { i18n } = useTranslation();
  const c = i18n.resolvedLanguage === 'hi' ? TERMS_HI : TERMS_EN;

  const toc = [
    { id: 'section-1', label: '1. Acceptance of Terms' },
    { id: 'section-2', label: '2. Use License' },
    { id: 'section-3', label: '3. Intellectual Property' },
    { id: 'section-4', label: '4. User Responsibilities' },
    { id: 'section-5', label: '5. Prohibited Uses' },
    { id: 'section-6', label: '6. Disclaimer of Warranties' },
    { id: 'section-7', label: '7. Limitation of Liability' },
    { id: 'section-8', label: '8. Governing Law' },
    { id: 'section-9', label: '9. Modifications to Terms' },
    { id: 'section-10', label: '10. Contact Information' },
  ];

  return (
    <LegalPageLayout
      badge={c.legalInfo}
      badgeIcon={<Scale size={14} className="text-primary" />}
      heroIcon={<Scale size={30} />}
      title={c.title}
      description={c.description}
      date="April 11, 2026"
      dateLabel={c.effectiveDate}
      sidebarEyebrow={c.sidebarEyebrow}
      sidebarTitle={c.sidebarTitle}
      sidebarPill={c.sidebarPill}
      metrics={[
        { value: '10', label: c.metricSections },
        { value: 'IT Act', label: c.metricCompliance },
        { value: 'Binding', label: c.metricBinding },
        { value: 'AA', label: c.metricAccessibility },
      ]}
      note={{ title: c.noteTitle, text: c.noteText }}
      breadcrumbTitle={c.title}
      breadcrumbHome={c.breadcrumbHome}
      breadcrumbGovernance={c.breadcrumbGovernance}
      toc={toc}
      footerQuestion={c.footerQuestion}
      footerDesc={c.footerDesc}
      illustration={<TermsIllustration />}
    >

              {/* Section 1: Acceptance of Terms */}
              <Section
                id="section-1"
                icon={<FileText size={24} className="text-primary" />}
                title="1. Acceptance of Terms"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      By accessing, downloading, or using the UX4G Design System (the "System"), you acknowledge
                      that you have read, understood, and agree to be bound by these Terms of Use. If you do not
                      agree to these terms, you may not access or use the System.
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The UX4G Design System is maintained and operated by the Digital India initiative under the
                      Government of India ("we," "us," or "our"). These terms apply to all users including government
                      departments, agencies, contractors, developers, designers, and any other parties accessing the System.
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your continued use of the System following any changes to these Terms of Use constitutes
                      acceptance of those changes. We reserve the right to modify these terms at any time, and such
                      modifications shall be effective immediately upon posting.
                    </p>
                  </>
                }
              />

              {/* Section 2: Use License */}
              <Section
                id="section-2"
                icon={<Scale size={24} className="text-primary" />}
                title="2. Use License"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Subject to your compliance with these Terms of Use, we grant you a limited, non-exclusive,
                      non-transferable, revocable license to access and use the UX4G Design System for the following purposes:
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">2.1 Permitted Uses</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Building and deploying government digital services and applications</li>
                      <li>• Creating prototypes and design mockups for government projects</li>
                      <li>• Developing internal tools and systems for government agencies</li>
                      <li>• Educational and training purposes within government organizations</li>
                      <li>• Contributing improvements and suggestions to the System through official channels</li>
                      <li>• Adapting components and patterns for specific government department needs</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">2.2 License Scope</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      The design system components, patterns, and code are provided under an open license framework
                      that permits use, modification, and distribution for government digital services. The specific
                      components may have individual licenses which must be respected. Official government logos, emblems,
                      and the Ashoka Chakra are subject to separate usage guidelines and restrictions.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">2.3 Attribution Requirements</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                      When using the UX4G Design System in production services, we encourage (but do not require)
                      attribution in your footer or documentation crediting the UX4G Design System and the
                      Government of India's Digital India initiative.
                    </p>
                  </>
                }
              />

              {/* Section 3: Intellectual Property */}
              <Section
                id="section-3"
                icon={<Lock size={24} className="text-primary" />}
                title="3. Intellectual Property Rights"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The UX4G Design System and all materials contained therein, including but not limited to
                      design files, code, documentation, graphics, logos, and text, are owned by the Government of India
                      or its licensors and are protected by Indian and international copyright, trademark, and other
                      intellectual property laws.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">3.1 Government Assets</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      The following are protected government assets and have specific usage restrictions:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-8">
                      <li>• State Emblem of India (Ashoka Chakra)</li>
                      <li>• National Flag of India</li>
                      <li>• Government of India logo and official seals</li>
                      <li>• Ministry and department-specific logos and emblems</li>
                      <li>• UX4G brand name and associated trademarks</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">3.2 User Contributions</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      If you submit feedback, suggestions, improvements, or contributions to the UX4G Design System
                      through official channels (GitHub, email, forums), you grant the Government of India a perpetual,
                      irrevocable, worldwide, royalty-free license to use, modify, and incorporate such contributions
                      into the System without any obligation of compensation or attribution.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">3.3 Third-Party Components</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                      The System may incorporate third-party open-source components and libraries. Such components
                      are subject to their respective licenses (MIT, Apache 2.0, etc.) and you must comply with
                      their terms when using them.
                    </p>
                  </>
                }
              />

              {/* Section 4: User Responsibilities */}
              <Section
                id="section-4"
                icon={<Users size={24} className="text-primary" />}
                title="4. User Responsibilities"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      As a user of the UX4G Design System, you agree to:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Use the System in accordance with all applicable laws and regulations of India</li>
                      <li>• Implement accessibility standards (WCAG 2.1 Level AA) when deploying government services</li>
                      <li>• Follow security best practices and guidelines provided in the System documentation</li>
                      <li>• Ensure data privacy and protection in compliance with applicable data protection laws</li>
                      <li>• Maintain the integrity and reputation of government digital services</li>
                      <li>• Report security vulnerabilities or accessibility issues through proper channels</li>
                      <li>• Keep your implementation up to date with current standards and guidelines</li>
                      <li>• Ensure multilingual support for services serving diverse populations</li>
                      <li>• Test thoroughly before deploying to production environments</li>
                      <li>• Provide accurate information and maintain transparency with citizens</li>
                    </ul>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You are responsible for your implementation choices and how you deploy the System in your
                      government services. The Government of India is not liable for how you choose to use, modify,
                      or deploy the System.
                    </p>
                  </>
                }
              />

              {/* Section 5: Prohibited Uses */}
              <Section
                id="section-5"
                icon={<AlertTriangle size={24} className="text-primary" />}
                title="5. Prohibited Uses"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      You may not use the UX4G Design System for any of the following purposes:
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">5.1 Unauthorized Commercial Use</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Selling or licensing the System or its components to third parties for profit</li>
                      <li>• Creating commercial products that compete with government digital services</li>
                      <li>• Using government assets or branding to promote private commercial ventures</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">5.2 Misrepresentation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Creating applications or websites that falsely appear to be official government services</li>
                      <li>• Misusing government logos, emblems, or branding without proper authorization</li>
                      <li>• Impersonating government officials or departments</li>
                      <li>• Creating fraudulent or deceptive services that mislead citizens</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">5.3 Harmful Activities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Introducing malware, viruses, or malicious code into the System</li>
                      <li>• Attempting to gain unauthorized access to System infrastructure or resources</li>
                      <li>• Conducting activities that could damage, disable, or impair government services</li>
                      <li>• Collecting or harvesting personal data without proper authorization</li>
                      <li>• Violating the privacy or rights of Indian citizens</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">5.4 Legal Violations</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li>• Using the System for any unlawful purpose or illegal activity</li>
                      <li>• Violating any applicable Indian laws or international treaties</li>
                      <li>• Infringing upon intellectual property rights of others</li>
                      <li>• Creating content that is defamatory, obscene, or promotes hatred</li>
                    </ul>
                  </>
                }
              />

              {/* Section 6: Disclaimer of Warranties */}
              <Section
                id="section-6"
                icon={<Shield size={24} className="text-primary" />}
                title="6. Disclaimer of Warranties"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      THE UX4G DESIGN SYSTEM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                      EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                      FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">6.1 No Warranty of Accuracy</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      The Government of India does not warrant that the System will be error-free, uninterrupted,
                      or free from viruses or other harmful components. We do not guarantee the accuracy, reliability,
                      or completeness of any information, content, or materials provided through the System.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">6.2 No Warranty of Results</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      We do not warrant that your use of the System will meet your requirements or achieve specific
                      results. The implementation, deployment, and effectiveness of government services built using
                      the System are solely your responsibility.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">6.3 Updates and Changes</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      We reserve the right to modify, suspend, or discontinue any aspect of the System at any time
                      without notice. We are not obligated to provide updates, but may do so at our discretion.
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusions
                      may not apply to you. You may have additional rights under Indian law.
                    </p>
                  </>
                }
              />

              {/* Section 7: Limitation of Liability */}
              <Section
                id="section-7"
                icon={<AlertTriangle size={24} className="text-primary" />}
                title="7. Limitation of Liability"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE GOVERNMENT OF INDIA, ITS AGENCIES, OFFICERS,
                      EMPLOYEES, AND CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                      CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                      DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                      RESULTING FROM:
                    </p>

                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-4">
                      <li>• Your access to, use of, or inability to access or use the System</li>
                      <li>• Any conduct or content of third parties using the System</li>
                      <li>• Any errors, mistakes, or inaccuracies in the System</li>
                      <li>• Personal injury or property damage resulting from your use of the System</li>
                      <li>• Any unauthorized access to or use of our servers or data</li>
                      <li>• Any interruption or cessation of transmission to or from the System</li>
                      <li>• Any bugs, viruses, or other harmful code transmitted through the System</li>
                      <li>• Any implementation choices or deployment decisions you make</li>
                    </ul>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      This limitation of liability applies regardless of the legal theory on which the claim is based,
                      whether contract, tort (including negligence), strict liability, or otherwise, even if we have
                      been advised of the possibility of such damages.
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Because some jurisdictions do not allow the exclusion or limitation of liability for consequential
                      or incidental damages, the above limitation may not apply to you. In such jurisdictions, our
                      liability shall be limited to the greatest extent permitted by law.
                    </p>
                  </>
                }
              />

              {/* Section 8: Governing Law */}
              <Section
                id="section-8"
                icon={<Globe size={24} className="text-primary" />}
                title="8. Governing Law and Jurisdiction"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      These Terms of Use shall be governed by and construed in accordance with the laws of India,
                      without regard to its conflict of law provisions.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">8.1 Jurisdiction</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      Any disputes arising out of or relating to these Terms of Use or the use of the UX4G Design System
                      shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India. You
                      consent to the personal jurisdiction of such courts and waive any objection to the venue.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">8.2 Compliance with Laws</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      You agree to comply with all applicable Indian laws and regulations, including but not limited to:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-8">
                      <li>• Information Technology Act, 2000 and subsequent amendments</li>
                      <li>• Digital Personal Data Protection Act, 2023</li>
                      <li>• Rights of Persons with Disabilities Act, 2016</li>
                      <li>• Official Secrets Act, 1923</li>
                      <li>• Copyright Act, 1957</li>
                      <li>• Any other applicable central or state legislation</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">8.3 Language</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                      These Terms of Use are written in English. In the event of any conflict between the English
                      version and any translation, the English version shall prevail.
                    </p>
                  </>
                }
              />

              {/* Section 9: Modifications to Terms */}
              <Section
                id="section-9"
                icon={<BookOpen size={24} className="text-primary" />}
                title="9. Modifications to Terms"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      We reserve the right to modify, amend, or update these Terms of Use at any time at our sole
                      discretion. When we make changes, we will update the "Effective Date" at the top of these terms.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">9.1 Notification of Changes</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      For material changes to these terms, we will make reasonable efforts to notify users through:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 ml-8">
                      <li>• A prominent notice on the UX4G Design System website</li>
                      <li>• Email notification to registered users (if applicable)</li>
                      <li>• Announcements through official government channels</li>
                      <li>• Updates to our documentation and release notes</li>
                    </ul>

                    <h4 className="font-bold text-foreground mb-2 text-sm">9.2 Continued Use</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-4">
                      Your continued use of the System following the posting of revised Terms of Use means that you
                      accept and agree to the changes. If you do not agree to the modified terms, you must discontinue
                      use of the System.
                    </p>

                    <h4 className="font-bold text-foreground mb-2 text-sm">9.3 Severability</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                      If any provision of these Terms of Use is found to be unlawful, void, or unenforceable, that
                      provision shall be deemed severable and shall not affect the validity and enforceability of the
                      remaining provisions.
                    </p>
                  </>
                }
              />

              {/* Section 10: Contact Information */}
              <Section
                id="section-10"
                icon={<Mail size={24} className="text-primary" />}
                title="10. Contact Information"
                content={
                  <>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      If you have questions, concerns, or inquiries about these Terms of Use or the UX4G Design System,
                      please contact us through the following channels:
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-4">
                      <h4 className="font-bold text-foreground mb-3">UX4G Design System Team</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="font-bold">Organization:</span> Digital India Initiative</p>
                        <p><span className="font-bold">Ministry:</span> Ministry of Electronics and Information Technology</p>
                        <p><span className="font-bold">Government of India</span></p>
                        <p className="mt-3">
                          <span className="font-bold">Email:</span>{" "}
                          <a href="mailto:support@ux4g.gov.in" className="text-primary hover:underline">
                            support@ux4g.gov.in
                          </a>
                        </p>
                        <p>
                          <span className="font-bold">Legal Inquiries:</span>{" "}
                          <a href="mailto:legal@ux4g.gov.in" className="text-primary hover:underline">
                            legal@ux4g.gov.in
                          </a>
                        </p>
                        <p>
                          <span className="font-bold">Accessibility Issues:</span>{" "}
                          <a href="mailto:accessibility@ux4g.gov.in" className="text-primary hover:underline">
                            accessibility@ux4g.gov.in
                          </a>
                        </p>
                        <p className="mt-3">
                          <span className="font-bold">Website:</span>{" "}
                          <a href="https://ux4g.gov.in" className="text-primary hover:underline">
                            https://ux4g.gov.in
                          </a>
                        </p>
                        <p>
                          <span className="font-bold">GitHub:</span>{" "}
                          <a href="https://github.com/dbn1972/DesignSystem2016" className="text-primary hover:underline">
                            https://github.com/dbn1972/DesignSystem2016
                          </a>
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For urgent security vulnerabilities, please report them directly to{" "}
                      <a href="mailto:security@ux4g.gov.in" className="text-primary font-bold hover:underline">
                        security@ux4g.gov.in
                      </a>{" "}
                      with full details and steps to reproduce. We take security seriously and will respond promptly
                      to legitimate security concerns.
                    </p>
                  </>
                }
              />

              {/* Acknowledgment */}
              <div className="pt-8 border-t-2 border-border">
                <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">Acknowledgment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By using the UX4G Design System, you acknowledge that you have read, understood, and agree
                    to be bound by these Terms of Use. You also acknowledge that these terms constitute a binding
                    legal agreement between you and the Government of India.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    These terms were last updated on <span className="font-bold">April 11, 2026</span> and are
                    effective immediately for all users.
                  </p>
                </div>
              </div>

    </LegalPageLayout>
  );
}

function Section({ id, icon, title, content }: { id?: string; icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-b-2 border-border pb-8 last:border-b-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-foreground flex-1">{title}</h2>
      </div>
      <div className="ml-13">
        {content}
      </div>
    </section>
  );
}


const TERMS_EN = {
  legalInfo: 'Legal Information',
  title: 'Terms of Use',
  description: 'These Terms of Use govern your access to and use of the UX4G Design System and all associated resources, components, patterns, and documentation provided by the Government of India.',
  effectiveDate: 'Effective Date',
  sidebarEyebrow: 'Terms overview',
  sidebarTitle: 'What this page covers',
  sidebarPill: '10 sections',
  metricSections: 'Sections',
  metricCompliance: 'Compliance',
  metricBinding: 'Agreement',
  metricAccessibility: 'Accessibility',
  noteTitle: 'Government standard',
  noteText: 'Compliant with the IT Act 2000 and applicable Indian laws.',
  breadcrumbHome: 'Home',
  breadcrumbGovernance: 'Governance',
  footerQuestion: 'Questions about these terms?',
  footerDesc: 'Contact the UX4G governance team for clarification or requests.',
};
const TERMS_HI = {
  legalInfo: 'कानूनी जानकारी',
  title: 'उपयोग की शर्तें',
  description: 'ये उपयोग की शर्तें UX4G डिज़ाइन सिस्टम और भारत सरकार द्वारा प्रदान किए गए सभी संबंधित संसाधनों, घटकों, पैटर्न और प्रलेखन तक आपकी पहुँच और उपयोग को नियंत्रित करती हैं।',
  effectiveDate: 'प्रभावी तिथि',
  sidebarEyebrow: 'शर्तों का अवलोकन',
  sidebarTitle: 'इस पृष्ठ में क्या शामिल है',
  sidebarPill: '10 अनुभाग',
  metricSections: 'अनुभाग',
  metricCompliance: 'अनुपालन',
  metricBinding: 'समझौता',
  metricAccessibility: 'अभिगम्यता',
  noteTitle: 'सरकारी मानक',
  noteText: 'IT अधिनियम 2000 और लागू भारतीय कानूनों के अनुरूप।',
  breadcrumbHome: 'मुखपृष्ठ',
  breadcrumbGovernance: 'शासन',
  footerQuestion: 'इन शर्तों के बारे में प्रश्न?',
  footerDesc: 'स्पष्टीकरण या अनुरोधों के लिए UX4G शासन टीम से संपर्क करें।',
};

import { Link } from "react-router";
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from "lucide-react";

export default function CertificatePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center">
              <Shield size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Legal Information</div>
              <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Last Updated */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">Last Updated:</span> January 1, 2026
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  This Privacy Policy explains how we collect, use, disclose, and protect your personal information 
                  when you use the Certificate Application Service.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            <div className="p-8 space-y-8">
              
              {/* Section 1 */}
              <Section
                icon={<Database size={24} className="text-[#000080]" />}
                title="1. Information We Collect"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      We collect the following types of information to provide and improve our certificate application services:
                    </p>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">1.1 Personal Information</h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                      <li>• Full name, date of birth, and gender</li>
                      <li>• Contact information (mobile number, email address)</li>
                      <li>• Residential address and PIN code</li>
                      <li>• Identity proof details (Aadhaar, Voter ID, Passport numbers)</li>
                      <li>• Photograph and signature</li>
                      <li>• Parent/guardian information where applicable</li>
                    </ul>

                    <h4 className="font-bold text-gray-900 mb-2 text-sm">1.2 Application-Specific Information</h4>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                      <li>• Income details and employment information</li>
                      <li>• Educational qualifications</li>
                      <li>• Caste and community information (where applicable)</li>
                      <li>• Any other information required for specific certificate types</li>
                    </ul>

                    <h4 className="font-bold text-gray-900 mb-2 text-sm">1.3 Technical Information</h4>
                    <ul className="space-y-2 text-sm text-gray-700 ml-4">
                      <li>• IP address and device information</li>
                      <li>• Browser type and version</li>
                      <li>• Login timestamps and session data</li>
                      <li>• Cookies and similar tracking technologies</li>
                    </ul>
                  </>
                }
              />

              {/* Section 2 */}
              <Section
                icon={<Eye size={24} className="text-[#000080]" />}
                title="2. How We Use Your Information"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      We use the collected information for the following purposes:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 ml-4">
                      <li>• Processing your certificate applications</li>
                      <li>• Verifying your identity and eligibility</li>
                      <li>• Communicating with you about your application status</li>
                      <li>• Preventing fraud and ensuring service security</li>
                      <li>• Improving our services and user experience</li>
                      <li>• Complying with legal obligations and government regulations</li>
                      <li>• Maintaining records as required by law</li>
                      <li>• Statistical analysis and service improvement</li>
                    </ul>
                  </>
                }
              />

              {/* Section 3 */}
              <Section
                icon={<Lock size={24} className="text-[#000080]" />}
                title="3. Information Sharing and Disclosure"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
                    </p>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">3.1 With Government Authorities</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 ml-4">
                      Your information may be shared with relevant government departments, verification agencies, 
                      and authorized officials for the purpose of processing your application and maintaining public records.
                    </p>

                    <h4 className="font-bold text-gray-900 mb-2 text-sm">3.2 Legal Requirements</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 ml-4">
                      We may disclose your information if required by law, court order, or government regulation, 
                      or to protect the rights, property, or safety of our service, users, or the public.
                    </p>

                    <h4 className="font-bold text-gray-900 mb-2 text-sm">3.3 Service Providers</h4>
                    <p className="text-sm text-gray-700 leading-relaxed ml-4">
                      We may engage trusted third-party service providers (payment gateways, SMS providers, etc.) 
                      who are bound by confidentiality obligations and use your data only for specified purposes.
                    </p>
                  </>
                }
              />

              {/* Section 4 */}
              <Section
                icon={<Shield size={24} className="text-[#000080]" />}
                title="4. Data Security"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      We implement industry-standard security measures to protect your personal information:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 ml-4">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Secure encrypted storage of sensitive information</li>
                      <li>• Regular security audits and vulnerability assessments</li>
                      <li>• Access controls and authentication mechanisms</li>
                      <li>• Employee training on data protection</li>
                      <li>• Secure backup and disaster recovery procedures</li>
                    </ul>
                    <p className="text-sm text-gray-700 leading-relaxed mt-4">
                      However, no method of transmission over the internet is 100% secure. While we strive to protect 
                      your information, we cannot guarantee absolute security.
                    </p>
                  </>
                }
              />

              {/* Section 5 */}
              <Section
                icon={<UserCheck size={24} className="text-[#000080]" />}
                title="5. Your Rights"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Under applicable data protection laws, you have the following rights:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 ml-4">
                      <li>• <span className="font-bold">Right to Access:</span> Request copies of your personal data</li>
                      <li>• <span className="font-bold">Right to Correction:</span> Request correction of inaccurate information</li>
                      <li>• <span className="font-bold">Right to Erasure:</span> Request deletion of your data (subject to legal retention requirements)</li>
                      <li>• <span className="font-bold">Right to Restrict Processing:</span> Request limitation on how we use your data</li>
                      <li>• <span className="font-bold">Right to Data Portability:</span> Request transfer of your data in a structured format</li>
                      <li>• <span className="font-bold">Right to Object:</span> Object to processing of your personal data</li>
                    </ul>
                    <p className="text-sm text-gray-700 leading-relaxed mt-4">
                      To exercise these rights, please contact our Data Protection Officer at{" "}
                      <a href="mailto:privacy@certificate.gov.in" className="text-[#000080] font-bold hover:underline">
                        privacy@certificate.gov.in
                      </a>
                    </p>
                  </>
                }
              />

              {/* Section 6 */}
              <Section
                icon={<Database size={24} className="text-[#000080]" />}
                title="6. Data Retention"
                content={
                  <>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                      unless a longer retention period is required by law:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 ml-4">
                      <li>• Active application data: Until application is processed and certificate issued</li>
                      <li>• Issued certificates: As per government record retention policies (typically 7-10 years)</li>
                      <li>• Account information: Until account deletion request or 2 years of inactivity</li>
                      <li>• Transaction records: As required by financial regulations</li>
                    </ul>
                  </>
                }
              />

              {/* Section 7 */}
              <Section
                icon={<AlertCircle size={24} className="text-[#000080]" />}
                title="7. Changes to Privacy Policy"
                content={
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                    an updated "Last Updated" date. Significant changes will be notified via email or through a prominent 
                    notice on our service. Your continued use of the service after changes constitutes acceptance of the updated policy.
                  </p>
                }
              />

              {/* Contact */}
              <div className="pt-8 border-t-2 border-gray-300">
                <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <p className="text-sm text-gray-700 mb-4">
                    If you have questions, concerns, or complaints about this Privacy Policy or our data practices, please contact:
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-bold">Data Protection Officer</span></p>
                    <p>Certificate Application Service</p>
                    <p>Government of India</p>
                    <p className="mt-3">
                      <span className="font-bold">Email:</span>{" "}
                      <a href="mailto:privacy@certificate.gov.in" className="text-[#000080] hover:underline">
                        privacy@certificate.gov.in
                      </a>
                    </p>
                    <p>
                      <span className="font-bold">Phone:</span>{" "}
                      <a href="tel:1800-111-1111" className="text-[#000080] hover:underline">
                        1800-111-1111
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Back to Service */}
          <div className="mt-8 text-center">
            <Link
              to="/reference-service/demo"
              className="inline-block px-8 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50"
            >
              Back to Service Home
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div className="flex items-center gap-6">
              <Link to="/reference-service/certificate/privacy-policy" className="text-[#000080] font-bold hover:underline">
                Privacy Policy
              </Link>
              <Link to="/reference-service/certificate/help" className="text-gray-600 hover:underline">
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <div className="border-b-2 border-gray-300 pb-8 last:border-b-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-gray-900 flex-1">{title}</h2>
      </div>
      <div className="ml-13">
        {content}
      </div>
    </div>
  );
}

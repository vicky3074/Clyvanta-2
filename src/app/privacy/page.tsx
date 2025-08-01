import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Information",
  description:
    "Learn how CanadaCashHomes collects, uses, and protects your personal information. We are committed to your privacy and data security.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 theme-section-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: 'var(--brand-section-text)' }}
            >
              Privacy Policy
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-gray-500 mt-4">
              Last updated: January 1, 2024
            </div>
          </div>
        </section>

        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Fill out our property information form</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Interact with our website or mobile applications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-600 mb-6">This may include:</p>
              <ul className="text-gray-600 mb-8">
                <li>Name, email address, phone number</li>
                <li>Property address and details</li>
                <li>Financial information related to your property</li>
                <li>Communications between you and CanadaCashHomes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 mb-6">
                When you visit our website, we automatically collect:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Provide you with cash offers for your property</li>
                <li>Communicate with you about our services</li>
                <li>
                  Process transactions and manage our business relationship
                </li>
                <li>
                  Send you newsletters and marketing communications (with your
                  consent)
                </li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with trusted third parties who assist us in operating our
                  website, conducting our business, or servicing you
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information when required by law or to protect our rights,
                  property, or safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of all or part of our company
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information
                  for other purposes with your explicit consent
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our website functionality</li>
              </ul>
              <p className="text-gray-600 mb-8">
                You can control cookies through your browser settings, but this
                may affect your ability to use certain features of our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your
                personal information, including:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>
                  Limited access to personal information on a need-to-know basis
                </li>
              </ul>
              <p className="text-gray-600 mb-8">
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 mb-6">You have the right to:</p>
              <ul className="text-gray-600 mb-8">
                <li>
                  <strong>Access:</strong> Request copies of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal requirements)
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications at any time
                </li>
                <li>
                  <strong>Data Portability:</strong> Request transfer of your
                  data to another service provider
                </li>
              </ul>
              <p className="text-gray-600 mb-8">
                To exercise these rights, please contact us using the
                information provided below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites or
                integrate with third-party services such as:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms</li>
                <li>Customer relationship management systems</li>
                <li>Email marketing services</li>
              </ul>
              <p className="text-gray-600 mb-8">
                These third parties have their own privacy policies, and we are
                not responsible for their practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600 mb-8">
                Our services are not intended for children under 18, and we do
                not knowingly collect personal information from children under
                18. If we become aware that we have collected information from a
                child under 18, we will delete such information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-8">
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. We encourage you
                to review this policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Canadian Privacy Laws
              </h2>
              <p className="text-gray-600 mb-8">
                As a Canadian company, we comply with the Personal Information
                Protection and Electronic Documents Act (PIPEDA) and applicable
                provincial privacy laws. We are committed to protecting your
                privacy in accordance with Canadian privacy standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>CanadaCashHomes</strong>
                </p>
                <p className="text-gray-600 mb-2">
                  Email: privacy@canadacashhomes.com
                </p>
                <p className="text-gray-600 mb-2">Phone: 1-800-CASH-HOME</p>
                <p className="text-gray-600">
                  Mailing Address: [Company Address]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - CanadaCashHomes Service Terms",
  description:
    "Read our terms and conditions for using CanadaCashHomes services. Understand your rights and responsibilities when selling your home to us.",
};

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Please read these terms and conditions carefully before using our
              services. By using CanadaCashHomes services, you agree to be bound
              by these terms.
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-8">
                By accessing and using the CanadaCashHomes website and services,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms & Conditions and our Privacy Policy. If you
                do not agree with any part of these terms, please do not use our
                services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-600 mb-6">
                CanadaCashHomes provides the following services:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>
                  Cash offers for residential real estate properties in Canada
                </li>
                <li>Property evaluation and assessment services</li>
                <li>Real estate transaction facilitation</li>
                <li>
                  Educational content and resources related to real estate
                </li>
                <li>Customer support and consultation services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Eligibility
              </h2>
              <p className="text-gray-600 mb-6">
                To use our services, you must:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>Be at least 18 years of age</li>
                <li>Have legal authority to sell the property in question</li>
                <li>Provide accurate and truthful information</li>
                <li>Be located in Canada or own property in Canada</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Property Information and Representations
              </h2>
              <p className="text-gray-600 mb-6">
                When submitting property information, you represent and warrant
                that:
              </p>
              <ul className="text-gray-600 mb-8">
                <li>
                  You are the legal owner or authorized agent of the property
                </li>
                <li>
                  All information provided is accurate, complete, and current
                </li>
                <li>
                  The property is not subject to any legal disputes or
                  encumbrances not disclosed to us
                </li>
                <li>
                  You have the right to enter into a purchase agreement for the
                  property
                </li>
                <li>
                  You will promptly notify us of any material changes to the
                  property or your circumstances
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Cash Offers and Purchase Process
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.1 Offer Process
              </h3>
              <ul className="text-gray-600 mb-6">
                <li>
                  Cash offers are estimates based on information provided and
                  market analysis
                </li>
                <li>
                  Offers are subject to property inspection and verification
                </li>
                <li>
                  We reserve the right to modify or withdraw offers based on new
                  information
                </li>
                <li>
                  Offers are valid for the time period specified in the offer
                  letter
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.2 No Obligation
              </h3>
              <p className="text-gray-600 mb-6">
                Requesting or receiving a cash offer creates no obligation for
                either party to proceed with a transaction. You are free to
                accept or decline any offer at your discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.3 Property Inspection
              </h3>
              <p className="text-gray-600 mb-8">
                We reserve the right to inspect any property before finalizing a
                purchase agreement. The final purchase price may be adjusted
                based on the inspection results and any undisclosed conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Website Usage
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6.1 Permitted Use
              </h3>
              <p className="text-gray-600 mb-6">
                You may use our website for legitimate business purposes related
                to real estate transactions. You agree not to:
              </p>
              <ul className="text-gray-600 mb-6">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>
                  Attempt to gain unauthorized access to any part of the website
                </li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Collect or harvest information about other users</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6.2 Intellectual Property
              </h3>
              <p className="text-gray-600 mb-8">
                All content on our website, including text, graphics, logos, and
                software, is owned by CanadaCashHomes and protected by copyright
                and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our written
                permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Privacy and Data Protection
              </h2>
              <p className="text-gray-600 mb-8">
                Our collection, use, and protection of your personal information
                is governed by our Privacy Policy, which is incorporated into
                these Terms & Conditions by reference. By using our services,
                you consent to the practices described in our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Disclaimers
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8.1 Service Availability
              </h3>
              <p className="text-gray-600 mb-6">
                We strive to maintain website availability but do not guarantee
                uninterrupted service. We may temporarily suspend or restrict
                access for maintenance, updates, or other operational reasons.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8.2 Market Information
              </h3>
              <p className="text-gray-600 mb-6">
                Real estate market information, valuations, and advice provided
                on our website are for general informational purposes only and
                should not be considered professional real estate, legal, or
                financial advice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8.3 Third-Party Content
              </h3>
              <p className="text-gray-600 mb-8">
                Our website may contain links to third-party websites or
                services. We are not responsible for the content, accuracy, or
                practices of third-party sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-8">
                To the fullest extent permitted by law, CanadaCashHomes shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to
                lost profits, lost revenue, or lost data, arising from your use
                of our services or website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-gray-600 mb-8">
                You agree to indemnify, defend, and hold harmless
                CanadaCashHomes, its officers, directors, employees, and agents
                from any claims, losses, damages, or expenses (including
                attorney fees) arising from your use of our services, violation
                of these terms, or violation of any rights of another party.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-600 mb-8">
                These Terms & Conditions are governed by the laws of Canada and
                the province in which the relevant transaction takes place. Any
                disputes arising from these terms or our services shall be
                resolved in the appropriate courts of that jurisdiction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Modifications to Terms
              </h2>
              <p className="text-gray-600 mb-8">
                We reserve the right to modify these Terms & Conditions at any
                time. Material changes will be posted on our website with an
                updated effective date. Your continued use of our services after
                changes are posted constitutes acceptance of the revised terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Termination
              </h2>
              <p className="text-gray-600 mb-8">
                We may terminate or suspend your access to our services at any
                time, without prior notice, for any reason, including violation
                of these Terms & Conditions. Upon termination, your right to use
                our services ceases immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Severability
              </h2>
              <p className="text-gray-600 mb-8">
                If any provision of these Terms & Conditions is found to be
                invalid or unenforceable, the remaining provisions shall
                continue in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms & Conditions, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-2">
                  <strong>CanadaCashHomes</strong>
                </p>
                <p className="text-gray-600 mb-2">
                  Email: legal@canadacashhomes.com
                </p>
                <p className="text-gray-600 mb-2">Phone: 1-800-CASH-HOME</p>
                <p className="text-gray-600">
                  Mailing Address: [Company Address]
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 theme-section-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--brand-section-text)' }}
            >
              Questions About Our Terms?
            </h2>
            <p 
              className="mb-6"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Our team is here to help clarify any questions you may have about
              our terms and conditions.
            </p>
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{
                background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

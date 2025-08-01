import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HowItWorks from "../../../components/HowItWorks";
import Testimonials from "../../../components/Testimonials";
import CTA from "../../../components/CTA";

export const metadata: Metadata = {
  title: "How It Works - Simple 3-Step Home Selling Process",
  description:
    "Learn how CanadaCashHomes makes selling your house simple: Submit info, get offer, close & get paid. Fast, fair, and hassle-free.",
};

export default function HowItWorksPage() {
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
              How It Works
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Selling your home the traditional way can take months and cost
              thousands in fees. Our process is different - it's fast, simple,
              and puts more money in your pocket.
            </p>
          </div>
        </section>

        <div className="theme-section-bg-alternate">
          <HowItWorks />
        </div>

        <section className="py-20 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Why Our Process Works Better
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Traditional Real Estate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        6+ Months Average
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        From listing to closing, if you find a buyer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        6-8% in Fees
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        Real estate commissions, closing costs, repairs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Repairs & Staging
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        Thousands in upfront costs to make home "market ready"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Uncertain Outcome
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        Deals can fall through, price reductions common
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Showings & Open Houses
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        Constant disruption to your life and privacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#16a34a' }} /* Keep green for contrast */
                >
                  CanadaCashHomes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >7-30 Days</h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        From offer to cash in your hand, guaranteed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        $0 in Fees
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        No commissions, no hidden costs, no surprises
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Sell As-Is
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        No repairs, cleaning, or staging required
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Guaranteed Sale
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        Cash offers don't fall through - we close as promised
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: 'var(--brand-section-text)' }}
                      >
                        Complete Privacy
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--brand-section-subtext)' }}
                      >
                        No showings, no strangers in your home
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="theme-section-bg-primary">
          <Testimonials />
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

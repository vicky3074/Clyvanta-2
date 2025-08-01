import { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import LeadForm from "../../../components/LeadForm";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact CanadaCashHomes - Get Your Cash Offer Today",
  description: "Get your fair cash offer in 24 hours. No fees, no repairs needed. We buy houses as-is in Ontario. Call (647) 503-2274 or fill out our form.",
  keywords: "contact CanadaCashHomes, cash offer, sell house fast, Ontario home buyers, no fees, as-is purchase",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Sell Your Ontario House Fast for Cash
              </h1>
              <p 
                className="text-xl mb-8 max-w-3xl mx-auto"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                Fair cash offers in 24 hours • No repairs needed • No agent fees • Close in 7-14 days
              </p>
              
              {/* Value Propositions */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 
                    className="font-semibold"
                    style={{ color: 'var(--brand-section-text)' }}
                  >24-Hour Offers</h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--brand-section-subtext)' }}
                  >Fast, professional evaluation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <h3 
                    className="font-semibold"
                    style={{ color: 'var(--brand-section-text)' }}
                  >Any Condition</h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--brand-section-subtext)' }}
                  >We buy houses as-is</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 
                    className="font-semibold"
                    style={{ color: 'var(--brand-section-text)' }}
                  >No Fees</h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--brand-section-subtext)' }}
                  >Zero commissions or costs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📋</div>
                  <h3 
                    className="font-semibold"
                    style={{ color: 'var(--brand-section-text)' }}
                  >Simple Process</h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--brand-section-subtext)' }}
                  >We handle all paperwork</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="rounded-2xl shadow-xl p-8"
              style={{ backgroundColor: 'var(--brand-white)' }}
            >
              <LeadForm variant="contact" />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Get In Touch Today
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                Ready to sell? Have questions? Our Ontario home buying experts are here to help. 
                We respond to all inquiries within the hour.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Phone */}
              <div 
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--brand-section-text)' }}
                >Call Now</h3>
                <a 
                  href="tel:647-503-2274" 
                  className="text-2xl font-bold transition-colors hover:opacity-80"
                  style={{ color: 'var(--brand-primary-600)' }}
                >
                  (647) 503-2274
                </a>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >Instant phone consultation</p>
              </div>
              
              {/* Email */}
              <div 
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <div className="text-4xl mb-4">📧</div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--brand-section-text)' }}
                >Email Us</h3>
                <a 
                  href={SITE_CONFIG.contact.email.href}
                  className="text-lg font-semibold transition-colors hover:opacity-80"
                  style={{ color: 'var(--brand-primary-600)' }}
                >
                  {SITE_CONFIG.contact.email.primary}
                </a>
              </div>
              
            </div>

          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Our Simple 3-Step Process
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                We've streamlined the home selling process to be fast, fair, and stress-free
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: 'var(--brand-primary-600)' }}
                  >1</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--brand-section-text)' }}
                >Contact Us</h3>
                <p style={{ color: 'var(--brand-section-subtext)' }}>
                  Fill out our form or call us. We'll schedule a quick property visit at your convenience.
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: 'var(--brand-primary-600)' }}
                  >2</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--brand-section-text)' }}
                >Get Your Offer</h3>
                <p style={{ color: 'var(--brand-section-subtext)' }}>
                  We'll evaluate your property and present a fair cash offer within 24 hours. No obligation.
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: 'var(--brand-primary-600)' }}
                  >3</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--brand-section-text)' }}
                >Close & Get Cash</h3>
                <p style={{ color: 'var(--brand-section-subtext)' }}>
                  Accept our offer and we'll handle all paperwork. Close in 7-14 days and get your cash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Common Questions
              </h2>
              <p 
                className="text-lg"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                Quick answers to help you get started
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: 'var(--brand-section-text)' }}
                >Do I pay any fees?</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Absolutely not. Unlike traditional real estate sales, we charge zero fees, commissions, or closing costs.
                </p>
              </div>

              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: 'var(--brand-section-text)' }}
                >How fast can you close?</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  We can close in as little as 7-14 days, compared to 4-6 weeks for traditional sales.
                </p>
              </div>

              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: 'var(--brand-section-text)' }}
                >Do I need to make repairs?</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  No repairs needed. We buy houses in any condition - from move-in ready to major fixer-uppers.
                </p>
              </div>

              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: 'var(--brand-section-text)' }}
                >Is your offer obligation-free?</h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Yes, completely no-obligation. You can accept, decline, or take time to consider other options.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/faq" 
                className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{
                  background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
                }}
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
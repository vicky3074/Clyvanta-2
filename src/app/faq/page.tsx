import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FAQ from "../../../components/FAQ";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - CanadaCashHomes",
  description:
    "Get answers to common questions about selling your house for cash in Canada. Learn about our process, timeline, and what to expect.",
};

const faqItems = [
  {
    question: "How do you determine the offer price?",
    answer:
      "We use current market data, comparable sales in your area, and the condition of your property to calculate a fair offer. Our team analyzes recent sales, current market trends, and property conditions to provide competitive offers based on real market value. We account for the convenience and speed we provide while ensuring you receive a fair price for your home.",
  },
  {
    question: "Is there any obligation to accept your offer?",
    answer:
      "Absolutely not. Our offers are completely free and come with no obligation whatsoever. You can take time to consider it, get other opinions, consult with family, or simply decline if it's not right for you. There's no pressure from our team, and we understand this is a big decision.",
  },
  {
    question: "How quickly can you close on my house?",
    answer:
      "We can close in as little as 7 days if needed, though most closings happen within 2-4 weeks. The timeline is entirely up to you - if you need more time to move or handle other arrangements, we can accommodate longer timelines as well. We work around your schedule, not the other way around.",
  },
  {
    question: "What types of properties do you buy?",
    answer:
      "We buy all types of residential properties across Canada including single-family homes, condos, townhouses, duplexes, mobile homes, and multi-family properties. We purchase properties in any condition - from move-in ready homes to major fixer-uppers that need extensive repairs. Location, condition, and size don't matter to us.",
  },
  {
    question: "Are there any fees, commissions, or hidden costs?",
    answer:
      "No, there are absolutely no fees, commissions, or hidden costs when you sell to us. Unlike traditional real estate sales where you pay 5-7% in realtor commissions plus closing costs, the cash offer we make is exactly what you'll receive at closing (minus any existing mortgages, liens, or back taxes owed on the property).",
  },
  {
    question: "Do I need to make repairs or renovations before selling?",
    answer:
      "Not at all! We buy houses completely as-is, which means you don't need to fix anything, make any repairs, clean extensively, or stage the property. We handle all necessary repairs and improvements after we purchase, saving you thousands of dollars and weeks of work.",
  },
  {
    question:
      "How is selling to you different from working with a real estate agent?",
    answer:
      "With a traditional real estate agent, you typically wait 3-6 months for a buyer, pay 5-7% in commissions and fees, make repairs and stage your home, deal with showings and open houses, and risk deals falling through due to financing issues. With us, you get a guaranteed cash offer within 24 hours, close on your timeline, avoid all fees and repairs, and have complete certainty the deal will close.",
  },
  {
    question: "What areas in Canada do you serve?",
    answer:
      "We buy homes throughout Canada, including all major cities like Toronto, Vancouver, Calgary, Montreal, Ottawa, Edmonton, Winnipeg, and Halifax, as well as smaller towns and rural areas. If you're unsure whether we serve your specific area, just contact us - we're constantly expanding our service areas.",
  },
  {
    question: "What happens during the property evaluation process?",
    answer:
      "After you submit your property information, our team conducts a market analysis using recent comparable sales and current market conditions. We may schedule a brief property walkthrough (usually 15-30 minutes) to verify the condition and confirm details. This isn't a formal inspection - we're just getting familiar with your property to finalize our offer.",
  },
  {
    question: "Can you buy my house if it's in foreclosure?",
    answer:
      "Yes, we can often help homeowners who are facing foreclosure. We work quickly to close before the foreclosure process completes, which can help protect your credit and potentially leave you with some cash after paying off your mortgage. Time is critical in these situations, so contact us as soon as possible.",
  },
  {
    question: "What if I owe more on my mortgage than my house is worth?",
    answer:
      "If you're in an underwater mortgage situation, we may still be able to help through a short sale process. We can work directly with your lender to negotiate a settlement that allows you to sell the property without owing the difference. This can help you avoid foreclosure and minimize credit damage.",
  },
  {
    question: "Do you buy inherited properties?",
    answer:
      "Yes, we frequently purchase inherited properties. We understand that inheriting a property can be overwhelming, especially if it needs repairs or if multiple heirs are involved. We can work with all parties involved and handle the complexities of inherited property sales, making the process as smooth as possible during what can be a difficult time.",
  },
  {
    question: "How do you ensure the transaction is legitimate and secure?",
    answer:
      "We are a licensed real estate company operating in compliance with all Canadian real estate laws and regulations. All transactions are handled through licensed real estate lawyers, title companies are used to ensure clear ownership transfer, and funds are held in secure escrow accounts. We provide references and proof of funds upon request.",
  },
  {
    question: "What documents do I need to sell my house to you?",
    answer:
      "The main documents you'll need are proof of ownership (deed or title), valid government ID, and any existing mortgage information. Our team will help guide you through gathering any additional documents needed for your specific situation, and we can often work with you to obtain missing paperwork.",
  },
  {
    question: "Can I sell if I'm going through a divorce?",
    answer:
      "Yes, we can purchase properties involved in divorce proceedings. We understand these situations require sensitivity and discretion. We can work with both parties and their attorneys to ensure the sale meets all legal requirements and court orders. In many cases, selling quickly for cash can help both parties move forward with their lives.",
  },
];

export default function FAQPage() {
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
              Frequently Asked Questions
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Get answers to the most common questions about selling your house
              for cash with CanadaCashHomes.
            </p>
          </div>
        </section>

        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ items={faqItems} />
          </div>
        </section>

        <section className="py-16 theme-section-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-lg p-8 shadow-sm text-center"
              style={{ backgroundColor: 'var(--brand-white)' }}
            >
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Still Have Questions?
              </h2>
              <p 
                className="mb-6"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                Our team is here to help answer any additional questions you may
                have about selling your house for cash.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
                  }}
                >
                  Get My Cash Offer
                </Link>
                <Link
                  href={SITE_CONFIG.contact.phone.href}
                  className="border-2 px-8 py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    borderColor: 'var(--brand-primary-600)',
                    color: 'var(--brand-primary-600)'
                  }}
                >
                  Call {SITE_CONFIG.contact.phone.display}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: 'var(--brand-section-text)' }}
            >
              Common Situations We Help With
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Foreclosure
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Stop foreclosure and protect your credit by selling quickly
                  for cash.
                </p>
              </div>

              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">👥</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Divorce
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Sell your shared property quickly and divide proceeds fairly.
                </p>
              </div>

              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Job Relocation
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Moving for work? Sell fast without waiting for traditional
                  buyers.
                </p>
              </div>

              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Inherited Property
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Inherited a house you don't want or can't maintain? We can
                  help.
                </p>
              </div>

              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Major Repairs Needed
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Don't have money for expensive repairs? Sell as-is to us.
                </p>
              </div>

              <div 
                className="rounded-lg p-6 hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderColor: 'var(--brand-border-default)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-primary-100)' }}
                >
                  <span className="text-2xl">💰</span>
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--brand-section-text)' }}
                >
                  Financial Hardship
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  Facing financial difficulties? Get cash quickly to solve your
                  problems.
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

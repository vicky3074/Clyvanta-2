import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CommitmentBadge from "../../../components/CommitmentBadge";
import CTA from "../../../components/CTA";

export const metadata: Metadata = {
  title: "About Us - Your Trusted Canadian Home Buyers",
  description:
    "Learn about CanadaCashHomes and our mission to help Canadian homeowners sell their houses quickly and fairly.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-24 lg:py-32 theme-section-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: 'var(--brand-section-text)' }}
            >
              About CanadaCashHomes
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              We're a team of experienced real estate professionals dedicated to
              helping Ontario homeowners sell their properties quickly and fairly.
              Founded on principles of transparency and local expertise, we provide
              a stress-free alternative to traditional real estate sales.
            </p>
          </div>
        </section>

        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Our Mission
              </h2>
              <p 
                className="text-lg max-w-3xl mx-auto"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                To provide Ontario homeowners with a transparent, efficient, and
                fair home-selling experience that puts their needs first. We combine
                local market expertise with personalized service to deliver cash
                offers that reflect true market value.
              </p>
            </div>

            <div 
              className="p-8 md:p-12 rounded-2xl shadow-sm"
              style={{
                backgroundColor: 'var(--brand-slate-50)',
                borderColor: 'var(--brand-border-default)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              <h3 
                className="text-2xl font-bold mb-8 text-center"
                style={{ color: 'var(--brand-section-text)' }}
              >
                Our Commitment to Every Homeowner
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <CommitmentBadge
                  number="1"
                  title="A Fair, Transparent Offer"
                  description="We provide a clear, no-obligation cash offer based on the current market value of your home. The price we agree on is the cash you receive."
                />
                <CommitmentBadge
                  number="2"
                  title="Zero Hidden Fees or Commissions"
                  description="We believe in honesty. You will never pay commissions or unexpected fees when you work with us."
                />
                <CommitmentBadge
                  number="3"
                  title="Sell Completely 'As-Is'"
                  description="Don't worry about repairs, cleaning, or staging. We buy your home in its current condition, saving you time and money."
                />
                <CommitmentBadge
                  number="4"
                  title="You Control the Timeline"
                  description="Whether you need to close in a week or need more time to plan your move, we work on your schedule."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 theme-section-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--brand-section-text)' }}
            >
              A Dedicated Canadian Team
            </h2>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              We are a team of local real estate professionals who live and work
              in the communities we serve. We are committed to helping our
              neighbours with integrity and respect.
            </p>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

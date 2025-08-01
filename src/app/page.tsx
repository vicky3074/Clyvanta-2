import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import WhyChooseUs from "../../components/WhyChooseUs";
import HowItWorks from "../../components/HowItWorks";
import TrackRecord from "../../components/TrackRecord";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="theme-section-bg-alternate">
          <Features />
        </div>
        <div className="theme-section-bg-primary">
          <WhyChooseUs />
        </div>
        <div className="theme-section-bg-alternate">
          <HowItWorks />
        </div>
        <div className="theme-section-bg-primary">
          <TrackRecord />
        </div>
        <div className="theme-section-bg-alternate">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FAQ />
            </div>
          </section>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

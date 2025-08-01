import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import Features from "../../../components/Features";
import WhyChooseUs from "../../../components/WhyChooseUs";
import HowItWorks from "../../../components/HowItWorks";
import FAQ from "../../../components/FAQ";
import CTA from "../../../components/CTA";
import { getLocationBySlug, getAllLocationSlugs } from "@/lib/cities";

interface CityPageProps {
  params: {
    city: string;
  };
}

/**
 * Generate static params for all Ontario cities and regions
 * This enables static generation at build time for optimal performance
 */
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  
  return slugs.map((slug) => ({
    city: slug,
  }));
}

/**
 * Generate metadata for each city page
 * Provides city-specific SEO optimization
 */
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const locationData = getLocationBySlug(params.city);
  
  if (!locationData) {
    return {
      title: "Location Not Found | CanadaCashHomes",
      description: "The requested location page could not be found."
    };
  }

  return {
    title: locationData.metaTitle,
    description: locationData.metaDescription,
    keywords: `sell house fast ${locationData.name}, cash for homes ${locationData.name}, we buy houses ${locationData.name}, ${locationData.region} real estate, ${locationData.name} home buyers`,
    openGraph: {
      title: locationData.metaTitle,
      description: locationData.metaDescription,
      type: 'website',
      locale: 'en_CA',
    },
    alternates: {
      canonical: `https://canadacashhomes.com/${locationData.slug}`,
    },
  };
}

/**
 * Dynamic city page component
 * Uses the same homepage structure with location-specific content
 */
export default function CityPage({ params }: CityPageProps) {
  const locationData = getLocationBySlug(params.city);
  
  // If location not found, return 404
  if (!locationData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero with dynamic city content */}
        <Hero 
          locationName={locationData.name}
          locationData={locationData}
        />
        
        {/* Same sections as homepage with alternating theme backgrounds */}
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
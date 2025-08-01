import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTA from "../../../components/CTA";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Real Estate Insights & Home Selling Tips",
  description:
    "Get expert advice on selling your home fast, real estate market insights, and tips for Canadian homeowners from CanadaCashHomes.",
};

export default function Blog() {
  const allPosts = getAllPosts();

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
              Insights and Tips for Homeowners
            </h1>
            <p 
              className="text-xl leading-relaxed"
              style={{ color: 'var(--brand-section-subtext)' }}
            >
              Expert advice on selling your home, real estate market insights,
              and tips to help Canadian homeowners make informed decisions.
            </p>
          </div>
        </section>

        <BlogClient posts={allPosts} />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

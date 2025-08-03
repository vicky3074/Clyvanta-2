"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { GlobalThemeToggle } from "../../components/GlobalThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <GlobalThemeToggle />
      <main>
        {/* Hero Section - Uses Global Theme */}
        <section className="relative overflow-hidden py-24 px-6 text-center theme-hero-bg" style={{color: 'var(--brand-hero-text)'}}>
          {/* Geometric shapes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl" style={{backgroundColor: 'var(--brand-primary-600)'}}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg" style={{backgroundColor: 'var(--brand-primary-500)'}}></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border"
              style={{
                backgroundColor: 'var(--brand-primary-100)',
                color: 'var(--brand-primary-800)',
                borderColor: 'var(--brand-primary-300)'
              }}
            >
              🚀 Next-Generation Technology Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-7xl font-extrabold mb-6"
              style={{color: 'var(--brand-hero-text)'}}
            >
              Technology Solutions That Scale With Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl max-w-2xl mx-auto leading-relaxed mb-8"
              style={{color: 'var(--brand-hero-subtext)'}}
            >
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl"
                style={{backgroundColor: 'var(--brand-primary-600)'}}
              >
                View Our Services
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
                style={{
                  borderColor: 'var(--brand-primary-600)',
                  color: 'var(--brand-primary-600)'
                }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Preview Section - Uses Global Theme */}
        <section id="services" className="py-20 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Our Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Comprehensive technology solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Uses Global Theme */}
        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Why Choose Us
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Experience the difference with our cutting-edge technology and personalized approach.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
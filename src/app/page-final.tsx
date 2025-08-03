"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO SECTION: Modern Gradient with Geometric Shapes */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          {/* Geometric shapes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              🚀 Next-Generation Technology Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            >
              Technology Solutions That Scale With Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8"
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
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl"
              >
                View Our Services
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-12 flex justify-center items-center gap-8 text-cyan-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Companies</div>
              </div>
              <div className="w-px h-8 bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="w-px h-8 bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to transform your business operations.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
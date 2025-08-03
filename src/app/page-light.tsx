"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO OPTION 1: Clean Professional with ChatGPT Content */}
        <section id="hero1" className="relative overflow-hidden py-20 px-6 text-center bg-gradient-to-br from-white to-gray-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 pointer-events-none"></div>
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

          <div className="relative max-w-2xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
            >
              Technology Solutions That Scale With Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-2 text-xl text-gray-600 max-w-xl mx-auto leading-relaxed"
            >
              We deliver enterprise-grade tools that automate, optimize, and scale —<br/>
              built to support your growing business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold 
                           shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Solutions
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold 
                           hover:bg-blue-50 transition-colors"
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </section>

        <div className="py-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-500">Hero Option 1 of 3 - Clean Professional</p>
        </div>

        {/* HERO OPTION 2: Modern Tech with Gradients */}
        <section id="hero2" className="relative overflow-hidden py-20 px-6 text-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-bold mb-6 text-white"
            >
              Technology Solutions That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Scale With Your Business
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              We deliver enterprise-grade tools that automate, optimize, and scale — 
              built to support your growing business with cutting-edge innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold 
                           shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Explore Solutions
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold 
                           hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </section>

        <div className="py-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-500">Hero Option 2 of 3 - Modern Tech with Gradients</p>
        </div>

        {/* HERO OPTION 3: Executive Professional */}
        <section id="hero3" className="relative overflow-hidden py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Technology Solutions That{" "}
                  <span className="text-blue-600">Scale With Your Business</span>
                </h1>
                
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  We deliver enterprise-grade tools that automate, optimize, and scale — 
                  built to support your growing business with proven results.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold 
                               shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore Solutions
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold 
                               hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 shadow-xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-5"></div>
                  <div className="relative bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise-Grade Solutions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Automated workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Scalable infrastructure</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">24/7 support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="py-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-500">Hero Option 3 of 3 - Executive Professional</p>
        </div>

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
                Choose which hero design you prefer, then we'll continue building the rest of the page.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
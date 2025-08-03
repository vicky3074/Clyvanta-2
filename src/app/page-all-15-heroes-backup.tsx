"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO OPTION 1: "FUTURE IS NOW" - Clyvanta Brand Colors */}
        <section id="hero1" className="relative overflow-hidden py-24 px-6 text-center theme-hero-bg">
          {/* Dynamic geometric background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <circle cx="200" cy="200" r="300" fill="currentColor" className="text-white animate-pulse" />
              <circle cx="1000" cy="600" r="200" fill="currentColor" className="text-white animate-pulse" style={{animationDelay: '1s'}} />
              <polygon points="600,100 750,350 450,350" fill="currentColor" className="text-white opacity-30" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <span style={{color: 'var(--brand-primary-200)'}} className="text-lg font-medium tracking-wider uppercase">
                The Future is Here
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
              style={{color: 'var(--brand-hero-text)'}}
            >
              <span className="block">FUTURE</span>
              <span className="block" style={{color: 'var(--brand-primary-400)'}}>IS NOW</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{color: 'var(--brand-primary-100)'}}
            >
              Revolutionary real estate solutions powered by cutting-edge technology. 
              Transform your property journey with AI-driven insights, seamless transactions, 
              and unparalleled market intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white rounded-xl font-bold text-lg shadow-2xl transition-all duration-300"
                style={{color: 'var(--brand-primary-600)'}}
              >
                Experience the Future
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
                style={{
                  borderColor: 'var(--brand-primary-300)',
                  color: 'var(--brand-primary-200)'
                }}
              >
                Discover Solutions
              </motion.a>
            </motion.div>

            {/* Tech stats with modern styling */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--brand-primary-300)'}}>99.7%</div>
                <div className="text-sm" style={{color: 'var(--brand-primary-200)'}}>Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--brand-primary-300)'}}>24/7</div>
                <div className="text-sm" style={{color: 'var(--brand-primary-200)'}}>AI-Powered Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--brand-primary-300)'}}>15+ Cities</div>
                <div className="text-sm" style={{color: 'var(--brand-primary-200)'}}>Technology Coverage</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 2: Bold Card Layout with Image Space */}
        <section id="hero2" className="relative py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Technology Solutions That Scale With Your Business
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
                >
                  We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    View Our Services
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Contact Us
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* HERO OPTION 3: Split Layout with Visual Balance */}
        <section id="hero3" className="relative py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Technology Solutions That Scale With Your Business
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                  >
                    View Our Services
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Placeholder for image/graphic */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-white">🚀</span>
                    </div>
                    <p className="text-gray-600 font-medium">Visual Content Area</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HERO OPTION 4: Minimal with Large Impact Typography */}
        <section id="hero4" className="relative py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl sm:text-8xl font-black text-gray-900 leading-none mb-8"
            >
              Technology Solutions
              <br />
              <span className="text-blue-600">That Scale</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-12 py-5 bg-blue-600 text-white rounded-xl font-bold text-xl shadow-xl"
              >
                View Our Services
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-12 py-5 border-3 border-blue-600 text-blue-600 rounded-xl font-bold text-xl hover:bg-blue-600 hover:text-white transition-all"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 5: Modern Gradient with Floating Elements */}
        <section id="hero5" className="relative py-20 px-6 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Geometric background shapes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rounded-lg rotate-45 blur-xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
            >
              Technology Solutions That Scale With Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl"
              >
                View Our Services
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 6: Modern Gradient with Geometric Shapes (ORIGINAL) */}
        <section id="hero6" className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
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
              Technology That
              <br />
              <span className="text-cyan-400">Transforms</span> Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Enterprise-grade automation, AI-powered insights, and scalable solutions that grow with your business. Join 500+ companies already transforming their operations.
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
                Start Your Transformation
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                Book a Demo
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 7: Minimalist with Large Typography (ORIGINAL) */}
        <section id="hero7" className="relative py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left"
            >
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-8">
                Technology Solutions
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-7xl sm:text-8xl font-black text-gray-900 leading-none mb-6"
              >
                Scale
                <br />
                <span className="text-orange-500">Faster</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                  We build the technology infrastructure that lets ambitious companies focus on what they do best.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-none font-semibold text-lg group"
                  >
                    Get Started
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-none font-semibold text-lg group"
                  >
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 8: Tech-Inspired with Code Elements (ORIGINAL) */}
        <section id="hero8" className="relative py-20 px-6 bg-gray-900 text-white overflow-hidden">
          {/* Code background */}
          <div className="absolute inset-0 opacity-5 font-mono text-xs leading-relaxed">
            <pre className="whitespace-pre-wrap">
{`function automateBusinessProcess() {
  const efficiency = optimize(currentWorkflow);
  const insights = analyzeData(businessMetrics);
  const growth = scale(operations, insights);
  return { efficiency, insights, growth };
}

class TechnologySolution {
  constructor(business) {
    this.client = business;
    this.ai = new AIEngine();
    this.automation = new AutomationPlatform();
  }
  
  deploy() {
    return this.ai.analyze(this.client.data)
      .then(insights => this.automation.implement(insights))
      .then(results => this.optimize(results));
  }
}`}
            </pre>
          </div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 text-green-400 mb-6"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-sm">// System Status: Optimizing Your Business</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              <span className="text-green-400 font-mono">const</span> success = 
              <br />
              <span className="text-blue-400">automate</span>(<span className="text-yellow-400">your_business</span>)
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Deploy enterprise-grade technology solutions that execute flawlessly, scale infinitely, and optimize continuously. No bugs, just results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-4 bg-green-500 text-gray-900 rounded-lg font-bold text-lg shadow-xl font-mono"
              >
                run --deploy-solution
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold text-lg font-mono hover:bg-green-400 hover:text-gray-900 transition-all"
              >
                console.log('demo')
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 9: Corporate Professional with Stats (ORIGINAL) */}
        <section id="hero9" className="relative py-24 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Trusted by Industry Leaders
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Enterprise Solutions
                  <br />
                  <span className="text-blue-600">That Deliver Results</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From Fortune 500 companies to fast-growing startups, our technology solutions drive measurable business outcomes through intelligent automation and strategic innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.02 }}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                  >
                    Schedule Consultation
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg"
                  >
                    View Case Studies
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-gray-600">Average Cost Reduction</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HERO OPTION 10: Creative with Video/Animation Feel (ORIGINAL) */}
        <section id="hero10" className="relative py-20 px-6 bg-black text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-purple-300 font-medium">System Online • All Services Operational</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-6xl sm:text-8xl font-black mb-6 leading-none"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                FUTURE
              </span>
              <br />
              <span className="text-white">IS NOW</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-2xl font-bold text-xl shadow-2xl transform transition-all"
              >
                View Our Services
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 border-2 border-purple-400 text-purple-400 rounded-2xl font-bold text-xl hover:bg-purple-400 hover:text-black transition-all"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 11: Executive Board Room Style */}
        <section id="hero11" className="relative py-24 px-6 bg-gradient-to-br from-slate-100 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-full font-medium mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Powering Business Success Since 2015
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Technology Solutions That Scale With Your Business
              </h1>
              
              <p className="text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business with proven results and measurable ROI.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">$2.5M</div>
                  <div className="text-slate-600">Average Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
                  <div className="text-slate-600">Enterprise Clients</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-10 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg shadow-xl"
                >
                  View Our Services
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 12: Trust & Credibility Focus */}
        <section id="hero12" className="relative py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center items-center gap-8 mb-8 text-sm text-gray-500"
              >
                <span>Trusted by Fortune 500 Companies</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>SOC 2 Type II Compliant</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Technology Solutions That Scale With Your Business
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business with bank-level security and 24/7 support.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                >
                  View Our Services
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="grid md:grid-cols-4 gap-8 pt-12 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600 text-sm">End-to-end encryption and compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Sub-second response times guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600 text-sm">Average 300% return within 12 months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Dedicated success manager included</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 13: Industry Leader Approach */}
        <section id="hero13" className="relative py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
                #1 Rated Technology Solutions Provider
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Technology Solutions That Scale With Your Business
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                Join thousands of successful businesses who trust our enterprise-grade tools to automate, optimize, and scale their operations with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg shadow-xl"
                >
                  View Our Services
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-blue-100">Businesses Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className="text-blue-100">System Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Global Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO OPTION 14: Solution-Focused Professional */}
        <section id="hero14" className="relative py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  Transforming Business Operations
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Technology Solutions That Scale With Your Business
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business while reducing costs and increasing efficiency.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Real-time analytics and reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Dedicated implementation support</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                  >
                    View Our Services
                  </motion.a>
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Solutions?</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">Over 1,000 successful implementations across various industries</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600">Certified professionals with 15+ years of experience</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">24/7 monitoring and dedicated customer success managers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HERO OPTION 15: Clean & Conversational */}
        <section id="hero15" className="relative py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Technology Solutions That Scale With Your Business
              </h1>
              
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                We deliver enterprise-grade tools that automate, optimize, and scale — built to support your growing business. No technical jargon, just solutions that work.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple to Use</h3>
                    <p className="text-gray-600">Intuitive interfaces designed for business professionals, not developers.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Implementation</h3>
                    <p className="text-gray-600">Get up and running in weeks, not months, with our proven methodology.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h3>
                    <p className="text-gray-600">Track your ROI with clear metrics and comprehensive reporting.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                >
                  View Our Services
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-10 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg shadow-lg"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 px-6 bg-gray-50">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Everything You Need to Compete in a Digital World</h2>
            <p className="mt-3 text-gray-600">Modular, outcome-driven services designed for SMB success.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                duration: 0.6,
                staggerChildren: 0.15 
              }
            }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">App & Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern experiences, custom built. We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">AI/ML for Everyday Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay future ready. Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Digital Marketing & CRM</h3>
              <p className="text-gray-600 leading-relaxed">
                Your brand, amplified. Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">SMB Utility Suite</h3>
              <p className="text-gray-600 leading-relaxed">
                Simplify your operations. An integrated toolkit—booking, invoicing, messaging—set up for you, fully managed, so your team can focus on service, not setup.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="py-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-8 text-center"
          >
            <h2 className="text-3xl font-bold">Industry Expertise — What We Do</h2>
            <p className="mt-3 text-gray-600">
              We deliver enterprise-grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                duration: 0.6,
                staggerChildren: 0.1 
              }
            }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Construction & Trades</p>
                <p className="text-gray-600">Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field-to-office workflows.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Retail & E-commerce</p>
                <p className="text-gray-600">End-to-end storefront platforms with inventory sync, loyalty tools, and seamless checkout flows.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Health & Wellness</p>
                <p className="text-gray-600">Secure booking, client record automation, reminders, and CRM workflows for clinics and studios.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Professional Services</p>
                <p className="text-gray-600">Digital intake forms, proposal automation, billing & e-sign portals for consultants, legal firms, and agencies.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Real Estate & Property</p>
                <p className="text-gray-600">IDX-compatible CRMs, lead nurturing, listing sync, and AI chatbots built to convert more inquiries.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="ml-4">
                <p className="font-semibold text-lg">Hospitality & Events</p>
                <p className="text-gray-600">Reservation engines, guest messaging automation, QR ordering flows, and intuitive dashboards.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* WHY CHOOSE */}
        <section id="why" className="py-20 px-6 bg-gray-50">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h2 className="text-3xl font-bold">Why Choose Clyvanta</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just a vendor — we&apos;re your technical partner. Full-service delivery, SMB-focused, always human.
            </p>
          </motion.div>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                duration: 0.6,
                staggerChildren: 0.2 
              }
            }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4 text-gray-800"
          >
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start p-4 rounded-lg hover:bg-white transition-colors"
            >
              <span className="font-semibold mr-2 text-blue-600">•</span>
              <span><strong>Full-Service Delivery:</strong> From audit to launch — and beyond.</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start p-4 rounded-lg hover:bg-white transition-colors"
            >
              <span className="font-semibold mr-2 text-blue-600">•</span>
              <span><strong>Tailored for SMBs:</strong> No bloated tools or &quot;enterprise&quot; confusion.</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start p-4 rounded-lg hover:bg-white transition-colors"
            >
              <span className="font-semibold mr-2 text-blue-600">•</span>
              <span><strong>Always Human:</strong> You get clarity, not complexity.</span>
            </motion.li>
          </motion.ul>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <motion.a 
              href="#why" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transition-shadow"
            >
              Why Clyvanta?
            </motion.a>
          </motion.div>
        </section>

        {/* CONNECT */}
        <section id="contact" className="py-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold"
            >
              Let&apos;s Build Something That Works for You
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-gray-600"
            >
              You focus on the business — we&apos;ll handle the technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <motion.a 
                href="mailto:hello@clyvanta.com"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold 
                           shadow-lg hover:shadow-xl transition-shadow text-lg"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

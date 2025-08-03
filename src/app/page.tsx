"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Professional IT Consulting */}
        <section className="relative overflow-hidden py-24 px-6 text-center theme-hero-bg" style={{color: 'var(--brand-hero-text)'}}>
          {/* Professional geometric elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl" style={{backgroundColor: 'var(--brand-primary-600)'}}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg" style={{backgroundColor: 'var(--brand-primary-500)'}}></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-lg rotate-12 blur-md" style={{backgroundColor: 'var(--brand-primary-300)'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full blur-lg" style={{backgroundColor: 'var(--brand-primary-200)'}}></div>
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
              💼 Enterprise-Grade IT Solutions
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

        {/* Services Section - Everything You Need to Compete */}
        <section id="services" className="py-20 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Everything You Need to Compete in a Digital World
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Comprehensive solutions designed to automate, optimize, and scale your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* App & Web Development */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-2xl" style={{color: 'var(--brand-primary-600)'}}>💻</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                  App & Web Development
                </h3>
                <p className="font-semibold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  Modern experiences, custom built.
                </p>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.
                </p>
              </motion.div>

              {/* AI/ML for Everyday Business */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-2xl" style={{color: 'var(--brand-primary-600)'}}>🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                  AI/ML for Everyday Business
                </h3>
                <p className="font-semibold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  Stay future ready.
                </p>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.
                </p>
              </motion.div>

              {/* Digital Marketing & CRM */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-2xl" style={{color: 'var(--brand-primary-600)'}}>📈</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                  Digital Marketing & CRM
                </h3>
                <p className="font-semibold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  Your brand, amplified.
                </p>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.
                </p>
              </motion.div>

              {/* SMB Utility Suite */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-2xl" style={{color: 'var(--brand-primary-600)'}}>⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                  SMB Utility Suite
                </h3>
                <p className="font-semibold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  Simplify your operations.
                </p>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  An integrated toolkit—booking, invoicing, messaging—set up for you, fully managed, so your team can focus on service, not setup.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DESIGN OPTION 1: Glassmorphism Cards with Floating Elements (2025 Trend) */}
        <section className="py-20 relative overflow-hidden" style={{backgroundColor: 'var(--brand-section-bg)'}}>
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
            <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{backgroundColor: 'var(--brand-primary-600)'}}></div>
            <div className="absolute top-1/2 right-10 w-24 h-24 rounded-full opacity-25 blur-2xl" style={{backgroundColor: 'var(--brand-primary-300)'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-md border" 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'var(--brand-primary-300)',
                  color: 'var(--brand-primary-700)'
                }}
              >
                ✨ Design Option 1: Glassmorphism
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Next-Gen Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Modern solutions with cutting-edge design patterns
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "App & Web Development", subtitle: "Modern experiences, custom built.", desc: "We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.", gradient: "from-blue-400 to-blue-600" },
                { title: "AI for Everyday Business", subtitle: "Stay future ready.", desc: "Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.", gradient: "from-purple-400 to-purple-600" },
                { title: "Growth Marketing", subtitle: "Your brand, amplified.", desc: "Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.", gradient: "from-green-400 to-green-600" },
                { title: "SMB Utility Suite", subtitle: "Simplify your operations.", desc: "An integrated toolkit—booking, invoicing, messaging—set up for you, fully managed, so your team can focus on service, not setup.", gradient: "from-orange-400 to-orange-600" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                  }}
                >
                  {/* Abstract Geometric Shape */}
                  <motion.div 
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-2 rounded-xl bg-white/20"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <motion.div
                      className="absolute top-1 right-1 w-3 h-3 rounded-full bg-white/40"
                      animate={{ 
                        x: [0, 10, 0],
                        y: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                    {service.title}
                  </h3>
                  <p className="font-semibold mb-4 text-lg" style={{color: 'var(--brand-primary-600)'}}>
                    {service.subtitle}
                  </p>
                  <p className="leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                    {service.desc}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                    }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN OPTION 2: Bento Grid Layout with Animated Icons (2025 Trend) */}
        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-4" 
                style={{
                  backgroundColor: 'var(--brand-primary-100)',
                  color: 'var(--brand-primary-700)'
                }}
              >
                🎯 Design Option 2: Bento Grid
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{color: 'var(--brand-section-text)'}}>
                Services That <span className="relative">
                  Scale
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-3 rounded-full"
                    style={{backgroundColor: 'var(--brand-primary-200)'}}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Modular solutions designed for modern businesses
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px]">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-12 md:col-span-6 row-span-4 p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-primary-500), var(--brand-primary-700))',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                }}
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-20"
                  style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
                ></motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="w-16 h-16 mb-6 rounded-2xl bg-white/20 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-2 rounded-xl bg-white/30"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/60"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    App & Web Development
                  </h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'AI/ML', 'Cloud'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/20 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Medium Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-6 row-span-2 p-6 rounded-3xl relative overflow-hidden group"
                style={{backgroundColor: 'var(--brand-section-bg-alt)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-1 rounded-lg bg-white/20"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  AI for Everyday Business
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.
                </p>
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{backgroundColor: 'var(--brand-primary-500)'}}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-6 row-span-2 p-6 rounded-3xl relative overflow-hidden"
                style={{backgroundColor: 'var(--brand-section-bg-alt)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-green-400 to-green-600 relative"
                >
                  <motion.div
                    className="absolute inset-1 rounded bg-white/25"
                    animate={{ 
                      opacity: [0.25, 0.6, 0.25]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Growth Marketing
                </h3>
                <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                  Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-6 row-span-2 p-6 rounded-3xl relative overflow-hidden"
                style={{backgroundColor: 'var(--brand-section-bg-alt)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
              >
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 relative"
                >
                  <motion.div
                    className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/50"
                    animate={{ 
                      x: [0, 6, 0],
                      y: [0, 6, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  SMB Utility Suite
                </h3>
                <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                  An integrated toolkit—booking, invoicing, messaging—set up for you, fully managed, so your team can focus on service, not setup.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DESIGN OPTION 3: Minimalist Cards with Micro-Interactions (2025 Trend) */}
        <section className="py-20" style={{backgroundColor: 'var(--brand-section-bg)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-4" 
                style={{
                  backgroundColor: 'var(--brand-primary-50)',
                  color: 'var(--brand-primary-700)',
                  border: `1px solid var(--brand-primary-200)`
                }}
              >
                🎨 Design Option 3: Minimalist
              </div>
              <h2 className="text-5xl sm:text-6xl font-light mb-6" style={{color: 'var(--brand-section-text)'}}>
                <span className="font-thin">Simple.</span> <span className="font-bold">Everything You Need to Compete in a Digital World
.</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto font-light" style={{color: 'var(--brand-section-subtext)'}}>
                Clean solutions that focus on what matters most
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                { 
                  title: "App & Web Development", 
                  desc: "We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.",
                  color: "#3B82F6"
                },
                { 
                  title: "AI for Everyday Business", 
                  desc: "Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.",
                  color: "#8B5CF6"
                },
                { 
                  title: "Growth Marketing", 
                  desc: "Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.",  
                  color: "#10B981"
                },
                { 
                  title: "SMB Utility Suite", 
                  desc: "An integrated toolkit—booking, invoicing, messaging—set up for you, fully managed, so your team can focus on service, not setup.",
                  color: "#F59E0B"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-8 p-8 rounded-2xl transition-all duration-500 group-hover:shadow-xl"
                    style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
                  >
                    {/* Abstract Shape */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-2xl relative overflow-hidden"
                      style={{backgroundColor: service.color}}
                    >
                      <motion.div
                        className="absolute inset-2 rounded-xl bg-white/20"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                      <motion.div
                        className="absolute inset-4 rounded-lg bg-white/30"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/50"
                        animate={{ 
                          x: [0, 6, 0],
                          y: [0, 4, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-light mb-3" style={{color: 'var(--brand-section-text)'}}>
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Subtle Arrow */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{color: 'var(--brand-primary-500)'}}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute bottom-0 left-8 right-8 h-px"
                    style={{backgroundColor: service.color}}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Industry Expertise — What We Do
              </h2>
              <p className="text-xl max-w-4xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction & Trades */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏗️</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Construction & Trades
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows.
                </p>
              </motion.div>

              {/* Retail & E-commerce */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🛍️</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Retail & E-commerce
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows.
                </p>
              </motion.div>

              {/* Health & Wellness */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚕️</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Health & Wellness
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios.
                </p>
              </motion.div>

              {/* Professional Services */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Professional Services
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants.
                </p>
              </motion.div>

              {/* Real Estate & Property */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏠</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Real Estate & Property
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  IDX compatible CRMs, automated lead nurturing, listing sync, and AI chatbots built to convert more inquiries.
                </p>
              </motion.div>

              {/* Hospitality & Events */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-xl border-2 transition-all hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--brand-section-bg)',
                  borderColor: 'var(--brand-primary-200)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎉</span>
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Hospitality & Events
                  </h3>
                </div>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Reservation engines, guest messaging automation, QR ordering flows, and intuitive dashboards for peak service delivery.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Clyvanta - Stats & Benefits */}
        <section className="py-20 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Why Choose Clyvanta
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                We build industry-aligned automation and smart systems—not generic tools—designed to fit the way you already work.
              </p>
            </motion.div>

            {/* ROI Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-8 rounded-xl"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  20-30%
                </div>
                <div className="text-lg font-semibold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Operating Cost Cuts
                </div>
                <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                  Measurable efficiency gains
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-8 rounded-xl"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  250%
                </div>
                <div className="text-lg font-semibold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  ROI in 6-9 Months
                </div>
                <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                  Fast payback period
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-8 rounded-xl"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-primary-600)'}}>
                  100%
                </div>
                <div className="text-lg font-semibold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Flat Fee Projects
                </div>
                <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                  Clear, predictable pricing
                </p>
              </motion.div>
            </div>

            {/* Key Advantages */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-600)'}}>
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                    Domain First Automation
                  </h3>
                  <p style={{color: 'var(--brand-section-subtext)'}}>
                    Every solution is crafted around vertical workflows—not template-driven replicas.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-600)'}}>
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                    Built-In Efficiency
                  </h3>
                  <p style={{color: 'var(--brand-section-subtext)'}}>
                    CRM, invoicing, and messaging are integrated from the start.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-600)'}}>
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                    Productivity Gains
                  </h3>
                  <p style={{color: 'var(--brand-section-subtext)'}}>
                    Track faster turnaround, team time freed up.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-600)'}}>
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                    Direct Senior Engineer Access
                  </h3>
                  <p style={{color: 'var(--brand-section-subtext)'}}>
                    Clear pricing with direct senior engineer access.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-sm italic" style={{color: 'var(--brand-section-subtext)'}}>
                *Citations and sources available upon request.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Difference - Partnership Message */}
        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: 'var(--brand-section-text)'}}>
                  We're Not Just a Vendor — We're Your Technical Partner
                </h2>
                <p className="text-xl mb-8" style={{color: 'var(--brand-section-subtext)'}}>
                  Tech shouldn't feel like a black box. At Clyvanta, we take ownership of your challenges and deliver practical, people-first solutions built for real-world use.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                      <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>🎯</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                        Full-Service Delivery
                      </h3>
                      <p style={{color: 'var(--brand-section-subtext)'}}>
                        From strategy to implementation, we handle every aspect of your technology transformation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                      <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>🏢</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                        Tailored for SMBs
                      </h3>
                      <p style={{color: 'var(--brand-section-subtext)'}}>
                        Solutions designed specifically for small to medium businesses with real operational constraints.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                      <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>👥</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                        Always Human
                      </h3>
                      <p style={{color: 'var(--brand-section-subtext)'}}>
                        Real people, real conversations, real solutions. No chatbots, no offshore support teams.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <div className="w-full h-96 rounded-xl shadow-2xl flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-50)'}}>
                    <div className="text-center">
                      <div className="text-6xl mb-4" style={{color: 'var(--brand-primary-400)'}}>🤝</div>
                      <p className="text-lg font-semibold" style={{color: 'var(--brand-primary-700)'}}>
                        Partnership Over Transactions
                      </p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-sm" style={{backgroundColor: 'var(--brand-primary-300)'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-lg rotate-45 blur-sm" style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Utility Suite - Feature Showcase */}
        <section className="py-20 theme-section-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Smarter Tools, Built Around Your Business
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-2" style={{color: 'var(--brand-section-subtext)'}}>
                You run the business. We'll handle the tech.
              </p>
              <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                Our Utility Suite gives you modern tools — with AI built in — to automate the busywork and free up your team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart CRM */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>📊</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Smart CRM
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Customer relationship management with AI-powered insights and automated follow-ups.
                </p>
              </motion.div>

              {/* Online Booking */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>📅</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Online Booking
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Seamless scheduling system with automatic confirmations and smart resource management.
                </p>
              </motion.div>

              {/* AI-Powered Invoicing */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>💰</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  AI-Powered Invoicing
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Intelligent billing with automated calculations, payment tracking, and predictive analytics.
                </p>
              </motion.div>

              {/* 24/7 Live Chat Agent */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>💬</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  24/7 Live Chat Agent
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  AI-powered customer support that handles inquiries, books appointments, and qualifies leads.
                </p>
              </motion.div>

              {/* Automated Messaging */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>📱</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Automated Messaging
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Smart communication workflows for reminders, updates, and customer engagement.
                </p>
              </motion.div>

              {/* Business Insights */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--brand-primary-100)'}}>
                  <span className="text-xl" style={{color: 'var(--brand-primary-600)'}}>📈</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-section-text)'}}>
                  Business Insights
                </h3>
                <p style={{color: 'var(--brand-section-subtext)'}}>
                  Real-time analytics and reporting to help you make data-driven business decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real-World AI in Action */}
        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Real-World AI in Action
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                See how AI transforms everyday business operations across different industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction & Trades AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏗️</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Construction & Trades
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>AI-Powered Schedule Optimization:</strong> Fewer idle hours, faster project delivery.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Document Digitization & Voice Logging:</strong> Saves hours per project.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Health & Wellness AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚕️</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Health & Wellness
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>AI Booking & Rescheduling Assistant:</strong> Increases revenue without extra staff.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Smart Treatment Reminders:</strong> Boosts retention and patient trust.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Services AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Professional Services
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Proposal Drafting Assistant:</strong> Cuts prep time by 70%.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Smart Client Insights:</strong> Better meetings. Faster close rates.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Retail & E-commerce AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🛍️</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Retail & E-commerce
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>AI-Driven Product Recommendations:</strong> Increases cart value.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Inventory Forecasting Engine:</strong> Improves cash flow.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Real Estate AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏠</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Real Estate & Property
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Lead Scoring with AI:</strong> Focus on high-intent leads.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Listing Auto-Creation:</strong> Saves hours. Better visibility.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Hospitality AI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-xl shadow-lg"
                style={{backgroundColor: 'var(--brand-section-bg)'}}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎉</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--brand-section-text)'}}>
                    Hospitality & Events
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Smart Menu & Pricing Updates:</strong> Cuts waste, improves margins.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-xs mt-1" style={{color: 'var(--brand-primary-600)'}}>•</span>
                    <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                      <strong>Guest Sentiment AI:</strong> Boosts experience scores.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 theme-hero-bg" style={{color: 'var(--brand-hero-text)'}}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: 'var(--brand-hero-text)'}}>
                Let's Build Something That Works for You
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: 'var(--brand-hero-subtext)'}}>
                Ready to simplify your operations and scale smarter? Let's explore what's possible together.
              </p>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-12 py-4 text-white rounded-xl font-bold text-xl shadow-2xl"
                style={{backgroundColor: 'var(--brand-primary-600)'}}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
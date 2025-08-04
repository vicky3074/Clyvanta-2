"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";

export default function DesignsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-16 px-6 text-center theme-hero-bg" style={{color: 'var(--brand-hero-text)'}}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: 'var(--brand-hero-text)'}}>
              Design Reference Library
            </h1>
            <p className="text-xl leading-relaxed" style={{color: 'var(--brand-hero-subtext)'}}>
              All saved design options and variations for reference and potential future use across different pages of the site.
            </p>
          </div>
        </section>

        {/* SERVICES DESIGN SECTION */}
        <section className="py-16" style={{backgroundColor: 'var(--brand-section-bg)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{color: 'var(--brand-section-text)'}}>
              Services Design Options
            </h2>

            {/* SERVICES DESIGN - OPTION 1: Glassmorphism Cards with Floating Elements */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 1: Glassmorphism Cards
              </h3>
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
            </div>

            {/* SERVICES DESIGN - OPTION 2: Bento Grid Layout with Animated Icons */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 2: Bento Grid Layout
              </h3>
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
            </div>
          </div>
        </section>

        {/* INDUSTRY EXPERTISE SECTION */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{color: 'var(--brand-section-text)'}}>
              Industry Expertise Options
            </h2>

            {/* INDUSTRY EXPERTISE - OPTION 1: Compact Cards with Dot Indicators */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 1: Compact Cards with Dot Indicators
              </h3>
              <section className="py-16 theme-section-bg-alternate">
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                      Industry Expertise — What We Do
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                      We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Construction & Trades", desc: "Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows.", icon: "🏗️" },
                      { title: "Health & Wellness", desc: "Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios.", icon: "⚕️" },
                      { title: "Retail & E-Commerce", desc: "End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows.", icon: "🛍️" },
                      { title: "Transportation & Logistics", desc: "Route optimization, shipment tracking, fleet management, and delivery automation for supply chain efficiency.", icon: "🚛" },
                      { title: "Professional & Outsourced Services", desc: "Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants.", icon: "📊" },
                      { title: "Manufacturing & Industrial Ops", desc: "Production scheduling, quality control systems, inventory management, and maintenance tracking for operational excellence.", icon: "🏭" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative p-5 rounded-lg transition-all duration-300 group hover:scale-105"
                        style={{backgroundColor: 'var(--brand-section-bg)'}}
                      >
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" 
                             style={{backgroundColor: 'var(--brand-primary-500)'}}></div>
                        <div className="flex items-start space-x-3">
                          <span className="text-xl flex-shrink-0 mt-1">{item.icon}</span>
                          <div>
                            <h3 className="font-semibold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
                              {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* INDUSTRY EXPERTISE - OPTION 2: Horizontal Cards with Expanding Accent Bars */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 2: Horizontal Cards with Expanding Accent Bars
              </h3>
              <section className="py-16 theme-section-bg-primary">
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                      Industry Expertise — Alternative Design
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                      We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    {[
                      { title: "Construction & Trades", desc: "Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows.", icon: "🏗️" },
                      { title: "Health & Wellness", desc: "Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios.", icon: "⚕️" },
                      { title: "Retail & E-Commerce", desc: "End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows.", icon: "🛍️" },
                      { title: "Transportation & Logistics", desc: "Route optimization, shipment tracking, fleet management, and delivery automation for supply chain efficiency.", icon: "🚛" },
                      { title: "Professional & Outsourced Services", desc: "Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants.", icon: "📊" },
                      { title: "Manufacturing & Industrial Ops", desc: "Production scheduling, quality control systems, inventory management, and maintenance tracking for operational excellence.", icon: "🏭" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative overflow-hidden rounded-lg p-6 group hover:shadow-lg transition-all duration-300"
                        style={{backgroundColor: 'var(--brand-section-bg-alt)'}}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:via-current transition-all duration-500"
                             style={{color: 'var(--brand-primary-500)'}}></div>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-2" style={{color: 'var(--brand-section-text)'}}>
                              {item.title}
                            </h3>
                            <p className="text-base" style={{color: 'var(--brand-section-subtext)'}}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* INDUSTRY EXPERTISE - OPTION 4: Geometric Cards with Color Gradients */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 4: Geometric Cards with Color Gradients
              </h3>
              <section className="py-16 theme-section-bg-primary">
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                      Industry Expertise — Modern Design
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                      We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Construction & Trades", desc: "Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows.", gradient: "from-blue-500 to-purple-600" },
                      { title: "Health & Wellness", desc: "Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios.", gradient: "from-green-500 to-teal-600" },
                      { title: "Retail & E-Commerce", desc: "End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows.", gradient: "from-orange-500 to-red-600" },
                      { title: "Transportation & Logistics", desc: "Route optimization, shipment tracking, fleet management, and delivery automation for supply chain efficiency.", gradient: "from-yellow-500 to-orange-600" },
                      { title: "Professional & Outsourced Services", desc: "Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants.", gradient: "from-indigo-500 to-blue-600" },
                      { title: "Manufacturing & Industrial Ops", desc: "Production scheduling, quality control systems, inventory management, and maintenance tracking for operational excellence.", gradient: "from-gray-600 to-gray-800" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative p-6 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                        style={{backgroundColor: 'var(--brand-section-bg)'}}
                      >
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45 translate-x-8 -translate-y-8`}></div>
                        <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${item.gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-300 transform -rotate-12 -translate-x-4 translate-y-4`}></div>
                        
                        <div className="relative z-10">
                          <h3 className="font-bold text-xl mb-3" style={{color: 'var(--brand-section-text)'}}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* INDUSTRY EXPERTISE - OPTION 5: Minimalist Lines with Number System */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 5: Minimalist Lines with Number System
              </h3>
              <section className="py-16 theme-section-bg-alternate">
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                      Industry Expertise — Clean Design
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                      We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-12">
                    {[
                      { title: "Construction & Trades", desc: "Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows." },
                      { title: "Health & Wellness", desc: "Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios." },
                      { title: "Retail & E-Commerce", desc: "End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows." },
                      { title: "Transportation & Logistics", desc: "Route optimization, shipment tracking, fleet management, and delivery automation for supply chain efficiency." },
                      { title: "Professional & Outsourced Services", desc: "Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants." },
                      { title: "Manufacturing & Industrial Ops", desc: "Production scheduling, quality control systems, inventory management, and maintenance tracking for operational excellence." }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110"
                               style={{
                                 borderColor: 'var(--brand-primary-400)',
                                 color: 'var(--brand-primary-600)',
                                 backgroundColor: 'var(--brand-section-bg)'
                               }}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="font-bold text-xl mb-3 group-hover:translate-x-2 transition-transform duration-300" style={{color: 'var(--brand-section-text)'}}>
                              {item.title}
                            </h3>
                            <p className="text-base leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-6 top-12 bottom-0 w-px opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                             style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE CLYVANTA SECTION */}
        <section className="py-16" style={{backgroundColor: 'var(--brand-section-bg)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{color: 'var(--brand-section-text)'}}>
              Why Choose Clyvanta Options
            </h2>

            {/* WHY CHOOSE CLYVANTA - OPTION 1: Split Hero Layout */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 1: Split Hero Layout
              </h3>
              <section className="py-16 theme-section-bg-primary">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: 'var(--brand-section-text)'}}>
                        Why Choose Clyvanta
                      </h2>
                      <p className="text-xl mb-4" style={{color: 'var(--brand-section-text)'}}>
                        We solve real business problems with technology that fits.
                      </p>
                      <p className="text-lg" style={{color: 'var(--brand-section-subtext)'}}>
                        No hype. No handoffs. Just solutions that work — fast.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-3" style={{color: 'var(--brand-section-text)'}}>
                          What You Can Expect:
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
                              • Business-first thinking
                            </h4>
                            <p style={{color: 'var(--brand-section-subtext)'}}>
                              We start with your process, not the tech. Every tool we build is shaped by how your team actually works.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
                              • Fast, focused delivery
                            </h4>
                            <p style={{color: 'var(--brand-section-subtext)'}}>
                              No bloated timelines or endless meetings. Most of our projects go live in weeks — not months.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
                              • Built-in value
                            </h4>
                            <p style={{color: 'var(--brand-section-subtext)'}}>
                              From automated workflows to smart reporting, our systems pay for themselves in time saved and revenue gained.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
                              • Straight talk & support
                            </h4>
                            <p style={{color: 'var(--brand-section-subtext)'}}>
                              You'll get answers, not jargon. And support that sticks around after launch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>

            {/* Continue with more Why Choose options... */}
          </div>
        </section>

        {/* REAL-WORLD AI SECTION */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{color: 'var(--brand-section-text)'}}>
              Real-World AI Options
            </h2>

            {/* REAL-WORLD AI - OPTION 2: Timeline Style */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 border-l-4 pl-4" style={{color: 'var(--brand-section-text)', borderColor: 'var(--brand-primary-500)'}}>
                Option 2: Timeline Style
              </h3>
              <section className="py-16 theme-section-bg-alternate">
                <div className="max-w-6xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                      Real-World AI in Action
                    </h2>
                  </motion.div>

                  <div className="space-y-12">
                    {[
                      {
                        category: "Construction & Trades",
                        items: [
                          { name: "AI-Powered Schedule Optimization", benefit: "Fewer idle hours, faster project delivery." },
                          { name: "Document Digitization & Voice Logging", benefit: "Saves hours per project." }
                        ]
                      },
                      {
                        category: "Health & Wellness", 
                        items: [
                          { name: "AI Booking & Rescheduling Assistant", benefit: "Increases revenue without extra staff." },
                          { name: "Smart Treatment Reminders", benefit: "Boosts retention and patient trust." }
                        ]
                      },
                      {
                        category: "Professional Services",
                        items: [
                          { name: "Proposal Drafting Assistant", benefit: "Cuts prep time by 70%." },
                          { name: "Smart Client Insights", benefit: "Better meetings. Faster close rates." }
                        ]
                      }
                    ].map((section, sectionIndex) => (
                      <motion.div 
                        key={sectionIndex}
                        initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                        className={`flex items-start space-x-8 ${sectionIndex % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
                      >
                        <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg"
                             style={{
                               borderColor: 'var(--brand-primary-400)',
                               backgroundColor: 'var(--brand-section-bg)',
                               color: 'var(--brand-primary-600)'
                             }}>
                          {String(sectionIndex + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1 p-6 rounded-lg"
                             style={{backgroundColor: 'var(--brand-section-bg)'}}>
                          <h3 className="font-bold text-xl mb-4" style={{color: 'var(--brand-section-text)'}}>
                            {section.category}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                     style={{backgroundColor: 'var(--brand-primary-500)'}}></div>
                                <div>
                                  <h4 className="font-semibold mb-1" style={{color: 'var(--brand-section-text)'}}>
                                    {item.name}
                                  </h4>
                                  <p className="text-sm" style={{color: 'var(--brand-section-subtext)'}}>
                                    {item.benefit}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
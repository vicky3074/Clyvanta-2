"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO - OPTION 1: Professional IT Consulting */}
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



        {/* SERVICES DESIGN - OPTION 3: Minimalist Cards with Micro-Interactions */}
        <section className="py-20" style={{backgroundColor: 'var(--brand-section-bg)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: 'var(--brand-section-text)'}}>
                Everything You Need to Compete in a Digital World
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                { 
                  title: "App & Web Development", 
                  subtitle: "Modern experiences, custom built.",
                  desc: "We design and deliver digital platforms—websites, portals, apps—that help your business scale with confidence.",
                  color: "#3B82F6"
                },
                { 
                  title: "AI for Everyday Business", 
                  subtitle: "Stay future ready.",
                  desc: "Empower your team with intelligent tools that automate tasks, uncover insights, and adapt as your business grows.",
                  color: "#8B5CF6"
                },
                { 
                  title: "Growth Marketing", 
                  subtitle: "Your brand, amplified.",
                  desc: "Reach your audience with targeted campaigns, automated workflows, and CRM integration that keeps customers engaged.",  
                  color: "#10B981"
                },
                { 
                  title: "SMB Utility Suite", 
                  subtitle: "Simplify your operations.",
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
                    {/* Content-Relevant Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 flex items-center justify-center relative"
                    >
                      {/* App & Web Development - Code Brackets */}
                      {index === 0 && (
                        <motion.svg
                          width="64" 
                          height="64" 
                          viewBox="0 0 64 64" 
                          className="w-16 h-16"
                          animate={{ 
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <path 
                            d="M20 16L8 32L20 48M44 16L56 32L44 48M36 12L28 52" 
                            fill="none" 
                            stroke="var(--brand-primary-500)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                      
                      {/* AI for Everyday Business - Simple AI Chip */}
                      {index === 1 && (
                        <motion.svg
                          width="64" 
                          height="64" 
                          viewBox="0 0 64 64" 
                          className="w-16 h-16"
                          animate={{ 
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                          {/* Main chip body - bigger to match other icons */}
                          <rect x="16" y="16" width="32" height="32" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="4"/>
                          
                          {/* Simple pins - just 4 on each side */}
                          <rect x="8" y="24" width="8" height="3" fill="var(--brand-primary-500)"/>
                          <rect x="8" y="37" width="8" height="3" fill="var(--brand-primary-500)"/>
                          <rect x="48" y="24" width="8" height="3" fill="var(--brand-primary-500)"/>
                          <rect x="48" y="37" width="8" height="3" fill="var(--brand-primary-500)"/>
                          
                          {/* AI text in center */}
                          <text x="32" y="36" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--brand-primary-500)">AI</text>
                        </motion.svg>
                      )}
                      
                      {/* Growth Marketing - Trending Up Chart */}
                      {index === 2 && (
                        <motion.svg
                          width="64" 
                          height="64" 
                          viewBox="0 0 64 64" 
                          className="w-16 h-16"
                          animate={{ 
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                          <path 
                            d="M8 48L20 36L32 40L56 16" 
                            fill="none" 
                            stroke="var(--brand-primary-500)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M48 16L56 16L56 24" 
                            fill="none" 
                            stroke="var(--brand-primary-500)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                      
                      {/* SMB Utility Suite - Building Blocks/Modules */}
                      {index === 3 && (
                        <motion.svg
                          width="64" 
                          height="64" 
                          viewBox="0 0 64 64" 
                          className="w-16 h-16"
                          animate={{ 
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                          {/* Building blocks arranged like Lego/modules */}
                          {/* Bottom row - foundation blocks */}
                          <rect x="8" y="40" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          <rect x="24" y="40" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          <rect x="40" y="40" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          
                          {/* Middle row - offset blocks */}
                          <rect x="16" y="24" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          <rect x="32" y="24" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          
                          {/* Top block - capstone */}
                          <rect x="24" y="8" width="16" height="16" fill="none" stroke="var(--brand-primary-500)" strokeWidth="2" rx="2"/>
                          
                          {/* Connection dots on blocks */}
                          <circle cx="16" cy="32" r="1.5" fill="var(--brand-primary-500)"/>
                          <circle cx="24" cy="32" r="1.5" fill="var(--brand-primary-500)"/>
                          <circle cx="40" cy="32" r="1.5" fill="var(--brand-primary-500)"/>
                          <circle cx="48" cy="32" r="1.5" fill="var(--brand-primary-500)"/>
                          <circle cx="32" cy="16" r="1.5" fill="var(--brand-primary-500)"/>
                          <circle cx="40" cy="16" r="1.5" fill="var(--brand-primary-500)"/>
                        </motion.svg>
                      )}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-light mb-2" style={{color: 'var(--brand-section-text)'}}>
                        {service.title}
                      </h3>
                      <p className="text-lg font-medium mb-3" style={{color: 'var(--brand-primary-600)'}}>
                        {service.subtitle}
                      </p>
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
                    style={{backgroundColor: 'var(--brand-primary-500)'}}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* INDUSTRY EXPERTISE - What We Do */}
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
                We deliver enterprise-grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably, without the burden of in-house IT overhead.
              </p>
            </motion.div>

            {/* Modern Split Layout with Visual Divider */}
            <div className="relative">
              {/* Left Column - First 3 Industries */}
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  {[
                    { 
                      title: "Construction & Trades", 
                      subtitle: "Smarter job sites, smoother workflows.",
                      desc: "We streamline everything from crew dispatch to estimate approvals with mobile-friendly apps, schedule automation, and integrated invoicing—keeping your field and office teams fully in sync.",
                      iconType: "construction"
                    },
                    { 
                      title: "Health & Wellness", 
                      subtitle: "More time for clients, less admin.",
                      desc: "Automate bookings, cancellations, client follow-ups, and reminders. Our systems help clinics and wellness studios reduce no-shows, manage schedules effortlessly, and stay HIPAA/PIPEDA compliant.",
                      iconType: "health"
                    },
                    { 
                      title: "Retail & E-Commerce", 
                      subtitle: "Connect sales, stock, and service.",
                      desc: "Build end-to-end storefronts with real-time inventory sync, personalized marketing flows, and automated fulfillment. Designed to scale with your product lines and your customer base.",
                      iconType: "retail"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      className="group"
                    >
                      <div className="flex items-start gap-6">
                        {/* Floating Icon */}
                        <motion.div 
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className="relative flex-shrink-0"
                        >
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, var(--brand-primary-500), var(--brand-primary-600))`,
                              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                            }}
                          >
                            {/* Construction & Trades - Hard Hat */}
                            {item.iconType === "construction" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <path 
                                  d="M16 40C16 28 24 20 32 20C40 20 48 28 48 40V44H16V40Z" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2.5"
                                />
                                <rect x="12" y="44" width="40" height="6" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2"/>
                              </svg>
                            )}
                            
                            {/* Health & Wellness - Medical Cross */}
                            {item.iconType === "health" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <rect x="28" y="12" width="8" height="40" fill="currentColor" rx="4"/>
                                <rect x="12" y="28" width="40" height="8" fill="currentColor" rx="4"/>
                              </svg>
                            )}
                            
                            {/* Retail & E-Commerce - Shopping Cart */}
                            {item.iconType === "retail" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <path 
                                  d="M12 16H20L24 32H48L52 20H24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2.5" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                                <circle cx="28" cy="44" r="3" fill="currentColor"/>
                                <circle cx="44" cy="44" r="3" fill="currentColor"/>
                              </svg>
                            )}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300" style={{color: 'var(--brand-section-text)'}}>
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold mb-4" style={{color: 'var(--brand-primary-600)'}}>
                            {item.subtitle}
                          </p>
                          <p className="text-base leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Last 3 Industries */}
                <div className="space-y-12">
                  {[
                    { 
                      title: "Transportation & Logistics", 
                      subtitle: "Optimized routes, zero guesswork.",
                      desc: "From dispatch optimization to driver tracking and digital delivery logs, we simplify operations and reduce fuel costs with smart logistics automation tailored for mobility-driven businesses.",
                      iconType: "logistics"
                    },
                    { 
                      title: "Professional & Outsourced Services", 
                      subtitle: "Let tools handle the busywork.",
                      desc: "We help accountants, consultants, and agencies spend more time on clients and less on admin—by automating intake, contracts, billing, scheduling, and communication workflows.",
                      iconType: "professional"
                    },
                    { 
                      title: "Manufacturing & Industrial Ops", 
                      subtitle: "Digitize your operations without disrupting them.",
                      desc: "Modernize job tracking, inventory, maintenance schedules, and vendor coordination—without replacing your existing systems. Our tools layer on visibility and automation where it matters most.",
                      iconType: "manufacturing"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: (index + 1) * 0.2 }}
                      className="group"
                    >
                      <div className="flex items-start gap-6">
                        {/* Floating Icon */}
                        <motion.div 
                          whileHover={{ rotate: -5, scale: 1.1 }}
                          className="relative flex-shrink-0"
                        >
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, var(--brand-primary-600), var(--brand-primary-700))`,
                              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                            }}
                          >
                            {/* Transportation & Logistics - Truck */}
                            {item.iconType === "logistics" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <rect x="8" y="24" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2"/>
                                <rect x="32" y="28" width="20" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2"/>
                                <circle cx="20" cy="48" r="3" fill="currentColor"/>
                                <circle cx="44" cy="48" r="3" fill="currentColor"/>
                              </svg>
                            )}
                            
                            {/* Professional Services - Briefcase */}
                            {item.iconType === "professional" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <rect x="12" y="24" width="40" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" rx="3"/>
                                <path d="M20 24V20C20 18 22 16 24 16H40C42 16 44 18 44 20V24" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                                <rect x="28" y="32" width="8" height="4" fill="currentColor"/>
                              </svg>
                            )}
                            
                            {/* Manufacturing - Gear */}
                            {item.iconType === "manufacturing" && (
                              <svg width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 text-white">
                                <circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                                <path d="M32 12L35 20L32 24L29 20Z" fill="currentColor"/>
                                <path d="M52 32L44 29L40 32L44 35Z" fill="currentColor"/>
                                <path d="M32 52L29 44L32 40L35 44Z" fill="currentColor"/>
                                <path d="M12 32L20 35L24 32L20 29Z" fill="currentColor"/>
                              </svg>
                            )}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300" style={{color: 'var(--brand-section-text)'}}>
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold mb-4" style={{color: 'var(--brand-primary-600)'}}>
                            {item.subtitle}
                          </p>
                          <p className="text-base leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modern Vertical Divider */}
              <motion.div 
                className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
                style={{background: `linear-gradient(to bottom, transparent, var(--brand-primary-300), transparent)`}}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        </section>


        {/* WHY CHOOSE CLYVANTA - OPTION 2: Minimalist Cards */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Why Choose Clyvanta
              </h2>
              <p className="text-xl mb-2" style={{color: 'var(--brand-section-text)'}}>
                We solve real business problems with technology that fits.
              </p>
              <p className="text-lg" style={{color: 'var(--brand-section-subtext)'}}>
                No hype. No handoffs. Just solutions that work — fast.
              </p>
            </motion.div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-8" style={{color: 'var(--brand-section-text)'}}>
                What You Can Expect:
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Business-first thinking", 
                  desc: "We start with your process, not the tech. Every tool we build is shaped by how your team actually works." 
                },
                { 
                  title: "Fast, focused delivery", 
                  desc: "No bloated timelines or endless meetings. Most of our projects go live in weeks — not months." 
                },
                { 
                  title: "Built-in value", 
                  desc: "From automated workflows to smart reporting, our systems pay for themselves in time saved and revenue gained." 
                },
                { 
                  title: "Straight talk & support", 
                  desc: "You'll get answers, not jargon. And support that sticks around after launch." 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: 'var(--brand-section-bg)'}}
                >
                  <h4 className="font-bold text-xl mb-3" style={{color: 'var(--brand-section-text)'}}>
                    {item.title}
                  </h4>
                  <p className="leading-relaxed" style={{color: 'var(--brand-section-subtext)'}}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden" style={{backgroundColor: 'var(--brand-primary-600)'}}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: 'var(--brand-primary-300)'}}></div>
            <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-lg rotate-45 blur-xl" style={{backgroundColor: 'var(--brand-primary-400)'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
            >
              Let's discuss how our enterprise-grade solutions can automate your processes and accelerate your growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl transition-colors hover:bg-blue-50"
              >
                Get Started Today
              </motion.a>
              <motion.a 
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg transition-colors hover:bg-white hover:text-blue-600"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
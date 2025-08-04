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


        {/* INDUSTRY EXPERTISE - OPTION 3: Split Grid with Accent Borders */}
        <section className="py-16 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--brand-section-text)'}}>
                Industry Expertise — Third Design
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--brand-section-subtext)'}}>
                We deliver enterprise grade technology and streamlined automation across six key verticals—helping businesses operate efficiently, engage customers seamlessly, and grow sustainably—all without the burden of in house IT overhead.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {[
                  { title: "Construction & Trades", desc: "Efficient job scheduling, crew coordination, estimate approval, and digital invoicing—built for field to office workflows.", icon: "🏗️" },
                  { title: "Health & Wellness", desc: "Secure booking systems, client record automation, reminder workflows, and CRM support for clinics and studios.", icon: "⚕️" },
                  { title: "Retail & E-Commerce", desc: "End to end storefront platforms with inventory sync, loyalty promotion tools, and seamless checkout flows.", icon: "🛍️" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="border-l-4 pl-6 py-4 transition-all duration-300 hover:pl-8"
                    style={{borderColor: 'var(--brand-primary-400)'}}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-xl flex-shrink-0 mt-1">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
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

              {/* Right Column */}
              <div className="space-y-6">
                {[
                  { title: "Transportation & Logistics", desc: "Route optimization, shipment tracking, fleet management, and delivery automation for supply chain efficiency.", icon: "🚛" },
                  { title: "Professional & Outsourced Services", desc: "Digital intake forms, proposal automation, billing & e-sign portals crafted for consultants, legal firms, agencies, and accountants.", icon: "📊" },
                  { title: "Manufacturing & Industrial Ops", desc: "Production scheduling, quality control systems, inventory management, and maintenance tracking for operational excellence.", icon: "🏭" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="border-l-4 pl-6 py-4 transition-all duration-300 hover:pl-8"
                    style={{borderColor: 'var(--brand-primary-600)'}}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-xl flex-shrink-0 mt-1">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-2" style={{color: 'var(--brand-section-text)'}}>
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

      </main>
      <Footer />
    </div>
  );
}
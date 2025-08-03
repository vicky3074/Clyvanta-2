"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { HeroColorToggle, useHeroTheme } from "../../components/HeroColorToggle";

// Hero section component that changes based on theme
function DynamicHero() {
  const heroTheme = useHeroTheme();

  // Theme configurations
  const themeConfig = {
    'blue-purple': {
      bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900',
      textColor: 'text-white',
      tagBg: 'bg-cyan-500/20',
      tagText: 'text-cyan-300',
      tag: '🚀 Blue-Purple Theme',
      titleGradient: 'bg-gradient-to-r from-white to-cyan-200',
      descColor: 'text-blue-100',
      primaryBtn: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      secondaryBorder: 'border-cyan-400',
      secondaryText: 'text-cyan-400',
      secondaryHover: 'hover:bg-cyan-400/10',
      shapes: [
        { color: 'bg-white', class: 'absolute top-20 left-10 w-32 h-32 rounded-full blur-xl' },
        { color: 'bg-cyan-400', class: 'absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl' },
        { color: 'bg-purple-400', class: 'absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg' },
      ]
    },
    'orange-red': {
      bg: 'bg-gradient-to-br from-orange-900 via-red-800 to-pink-900',
      textColor: 'text-white',
      tagBg: 'bg-orange-500/20',
      tagText: 'text-orange-300',
      tag: '🔥 Orange-Red Theme',
      titleGradient: 'bg-gradient-to-r from-white to-orange-200',
      descColor: 'text-orange-100',
      primaryBtn: 'bg-gradient-to-r from-orange-500 to-red-600',
      secondaryBorder: 'border-orange-400',
      secondaryText: 'text-orange-400',
      secondaryHover: 'hover:bg-orange-400/10',
      shapes: [
        { color: 'bg-white', class: 'absolute top-20 left-10 w-32 h-32 rounded-full blur-xl' },
        { color: 'bg-orange-400', class: 'absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl' },
        { color: 'bg-red-400', class: 'absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg' },
      ]
    },
    'white-blue': {
      bg: 'bg-white',
      textColor: 'text-gray-900',
      tagBg: 'rgba(59, 130, 246, 0.2)',
      tagText: '#1e40af',
      tag: '🔵 Clyvanta Brand White + Blue',
      titleGradient: 'linear-gradient(to right, #1e40af, #2563eb)',
      descColor: '#1e40af',
      primaryBtn: 'linear-gradient(to right, #2563eb, #3b82f6)',
      secondaryBorder: '#2563eb',
      secondaryText: '#2563eb',
      secondaryHover: 'hover:bg-blue-50',
      shapes: [
        { style: { backgroundColor: '#3b82f6' }, class: 'absolute top-20 left-10 w-32 h-32 rounded-full blur-xl' },
        { style: { backgroundColor: '#2563eb' }, class: 'absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl' },
        { style: { backgroundColor: '#60a5fa' }, class: 'absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg' },
      ]
    },
    'dark-gray': {
      bg: 'bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900',
      textColor: 'text-white',
      tagBg: 'bg-gray-500/20',
      tagText: 'text-gray-300',
      tag: '⚡ Dark Gray Theme',
      titleGradient: 'bg-gradient-to-r from-white to-gray-200',
      descColor: 'text-gray-100',
      primaryBtn: 'bg-gradient-to-r from-gray-500 to-slate-600',
      secondaryBorder: 'border-gray-400',
      secondaryText: 'text-gray-400',
      secondaryHover: 'hover:bg-gray-400/10',
      shapes: [
        { color: 'bg-white', class: 'absolute top-20 left-10 w-32 h-32 rounded-full blur-xl' },
        { color: 'bg-gray-400', class: 'absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl' },
        { color: 'bg-slate-400', class: 'absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg' },
      ]
    }
  };

  const config = themeConfig[heroTheme];

  return (
    <section className={`relative overflow-hidden py-24 px-6 text-center ${config.bg} ${config.textColor}`}>
      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        {config.shapes.map((shape, index) => (
          <div
            key={index}
            className={shape.class}
            style={shape.style}
            {...(shape.color && { className: `${shape.class} ${shape.color}` })}
          />
        ))}
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          style={heroTheme === 'white-blue' ? 
            { backgroundColor: config.tagBg, color: config.tagText } : 
            {}
          }
          {...(heroTheme !== 'white-blue' && { className: `inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${config.tagBg} ${config.tagText}` })}
        >
          {config.tag}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl font-extrabold mb-6"
          style={heroTheme === 'white-blue' ? 
            { backgroundImage: config.titleGradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' } :
            {}
          }
          {...(heroTheme !== 'white-blue' && { className: `text-5xl sm:text-7xl font-extrabold mb-6 ${config.titleGradient} bg-clip-text text-transparent` })}
        >
          Technology Solutions That Scale With Your Business
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          style={heroTheme === 'white-blue' ? { color: config.descColor } : {}}
          {...(heroTheme !== 'white-blue' && { className: `text-xl max-w-2xl mx-auto leading-relaxed mb-8 ${config.descColor}` })}
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
            style={heroTheme === 'white-blue' ? { background: config.primaryBtn } : {}}
            {...(heroTheme !== 'white-blue' && { className: `inline-block px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl ${config.primaryBtn}` })}
          >
            View Our Services
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 border-2 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
            style={heroTheme === 'white-blue' ? 
              { borderColor: config.secondaryBorder, color: config.secondaryText } :
              {}
            }
            {...(heroTheme !== 'white-blue' && { 
              className: `inline-block px-8 py-4 border-2 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm ${config.secondaryBorder} ${config.secondaryText} ${config.secondaryHover}` 
            })}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroColorToggle />
      <main>
        <DynamicHero />
        
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
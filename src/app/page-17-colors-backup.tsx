"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* COLOR OPTION 1: Blue-Purple (Original) */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Blue-Purple Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 2: Orange-Red */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🔥 Orange-Red Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-xl font-bold text-lg hover:bg-orange-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 3: Green-Emerald */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🌿 Green-Emerald Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-xl font-bold text-lg hover:bg-emerald-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 4: Dark Gray-Slate */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-slate-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-gray-500/20 rounded-full text-gray-300 text-sm font-medium mb-6 backdrop-blur-sm">
              ⚡ Dark Gray Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-gray-400 text-gray-400 rounded-xl font-bold text-lg hover:bg-gray-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 5: Purple-Violet */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-violet-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
              💜 Purple-Violet Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-violet-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-violet-400 text-violet-400 rounded-xl font-bold text-lg hover:bg-violet-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 6: Pink-Rose */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-pink-900 via-rose-800 to-red-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-rose-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🌸 Pink-Rose Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-xl font-bold text-lg hover:bg-pink-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 7: Yellow-Amber */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-medium mb-6 backdrop-blur-sm">
              ☀️ Yellow-Amber Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-yellow-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-bold text-lg hover:bg-yellow-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 8: Indigo-Blue */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-indigo-900 via-blue-800 to-sky-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-sky-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
              💎 Indigo-Blue Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-xl font-bold text-lg hover:bg-indigo-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 9: Teal-Cyan */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🌊 Teal-Cyan Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-xl font-bold text-lg hover:bg-teal-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COLOR OPTION 10: Deep Black-Gray */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🖤 Deep Black Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-gray-600 to-black text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-gray-400 text-gray-400 rounded-xl font-bold text-lg hover:bg-gray-400/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 11: Light Blue-Sky */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-blue-100 via-sky-200 to-cyan-300 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-sky-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-700 text-sm font-medium mb-6 backdrop-blur-sm">
              ☁️ Light Blue-Sky Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-800 to-sky-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-600/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 12: Light Green-Mint */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-700 text-sm font-medium mb-6 backdrop-blur-sm">
              🌱 Light Green-Mint Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-800 to-teal-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-green-800 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-bold text-lg hover:bg-green-600/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 13: Light Purple-Lavender */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-purple-100 via-violet-200 to-indigo-300 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-violet-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-700 text-sm font-medium mb-6 backdrop-blur-sm">
              🦄 Light Purple-Lavender Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-purple-800 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-bold text-lg hover:bg-purple-600/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 14: Light Orange-Peach */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-300 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-orange-700 text-sm font-medium mb-6 backdrop-blur-sm">
              🍑 Light Orange-Peach Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-800 to-yellow-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-orange-800 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-xl font-bold text-lg hover:bg-orange-600/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 15: Light Pink-Rose */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-pink-100 via-rose-200 to-red-300 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-pink-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-rose-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full text-pink-700 text-sm font-medium mb-6 backdrop-blur-sm">
              🌺 Light Pink-Rose Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-800 to-red-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-pink-800 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-xl font-bold text-lg hover:bg-pink-600/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 16: Pure White-Gray */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-gradient-to-br from-white via-gray-100 to-slate-200 text-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gray-600 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-slate-500 rounded-lg rotate-45 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 bg-gray-500/20 rounded-full text-gray-700 text-sm font-medium mb-6 backdrop-blur-sm">
              🤍 Pure White-Gray Theme
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 to-slate-600 text-white rounded-xl font-bold text-lg shadow-2xl">
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 border-gray-700 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-700/10 transition-colors backdrop-blur-sm">
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* LIGHT COLOR OPTION 17: Clyvanta Brand White + Blue */}
        <section className="relative overflow-hidden py-24 px-6 text-center bg-white text-gray-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl" style={{backgroundColor: '#3b82f6'}}></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-lg rotate-45 blur-xl" style={{backgroundColor: '#2563eb'}}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-lg" style={{backgroundColor: '#60a5fa'}}></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm" style={{backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#1e40af'}}>
              🔵 Clyvanta Brand White + Blue
            </motion.div>
            <motion.h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #1e40af, #2563eb)'}}>
              Technology Solutions That Scale With Your Business
            </motion.h1>
            <motion.p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8" style={{color: '#1e40af'}}>
              We deliver enterprise grade tools that automate, optimize, and scale — built to support your growing business.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#services" className="inline-block px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl" style={{background: 'linear-gradient(to right, #2563eb, #3b82f6)'}}>
                View Our Services
              </motion.a>
              <motion.a href="#contact" className="inline-block px-8 py-4 border-2 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors backdrop-blur-sm" style={{borderColor: '#2563eb', color: '#2563eb'}}>
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
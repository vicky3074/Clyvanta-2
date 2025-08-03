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
      </main>
      <Footer />
    </div>
  );
}
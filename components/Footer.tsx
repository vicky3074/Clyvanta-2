import React from 'react';
import Image from "next/image";
import Link from "next/link";
import type { FooterProps } from "../types/components";
import { SITE_CONFIG } from "@/lib/config";

/**
 * Site footer with company information, navigation links, and comprehensive city coverage
 *
 * Contains logo, company description, navigation links organized by category,
 * complete Ontario city links, contact information, and copyright notice
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the site footer with city navigation
 */
const Footer = React.memo(function Footer({ className = "" }: FooterProps) {
  // City data organized by regions (matching our cities implementation)
  const cityData = {
    gta: [
      { slug: 'toronto', name: 'Toronto' },
      { slug: 'mississauga', name: 'Mississauga' },
      { slug: 'brampton', name: 'Brampton' },
      { slug: 'vaughan', name: 'Vaughan' },
      { slug: 'markham', name: 'Markham' }
    ],
    major: [
      { slug: 'hamilton', name: 'Hamilton' },
      { slug: 'london', name: 'London' },
      { slug: 'windsor', name: 'Windsor' },
      { slug: 'kingston', name: 'Kingston' },
      { slug: 'st-catharines', name: 'St. Catharines' }
    ],
    horseshoe: [
      { slug: 'burlington', name: 'Burlington' },
      { slug: 'oakville', name: 'Oakville' },
      { slug: 'milton', name: 'Milton' },
      { slug: 'barrie', name: 'Barrie' }
    ],
    niagara: [
      { slug: 'niagara-falls', name: 'Niagara Falls' },
      { slug: 'welland', name: 'Welland' },
      { slug: 'thorold', name: 'Thorold' },
      { slug: 'fort-erie', name: 'Fort Erie' }
    ],
    southwest: [
      { slug: 'kitchener', name: 'Kitchener' },
      { slug: 'waterloo', name: 'Waterloo' },
      { slug: 'chatham', name: 'Chatham' },
      { slug: 'sarnia', name: 'Sarnia' }
    ],
    central: [
      { slug: 'peterborough', name: 'Peterborough' },
      { slug: 'belleville', name: 'Belleville' },
      { slug: 'oshawa', name: 'Oshawa' },
      { slug: 'cobourg', name: 'Cobourg' }
    ]
  };

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section: Logo + Description on Left, Contact Info on Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/images/logo.svg"
              alt="CanadaCashHomes Logo"
              width={160}
              height={40}
              className="invert mb-4"
            />
            <p className="text-gray-400 text-lg leading-relaxed">
              Ontario's trusted cash home buyers. Fast, fair, and reliable property purchases across the province - any condition, any situation.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex md:justify-end items-center text-gray-400">
                <span className="mr-2">📞</span>
                <a 
                  href={SITE_CONFIG.contact.phone.href}
                  className="hover:text-white transition-colors font-semibold text-lg"
                >
                  {SITE_CONFIG.contact.phone.display}
                </a>
              </div>
              <div className="flex md:justify-end items-center text-gray-400">
                <span className="mr-2">📧</span>
                <a 
                  href={SITE_CONFIG.contact.email.href}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email.primary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* City Grid: Comprehensive Ontario Coverage */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-2xl font-semibold mb-8 text-center">We Buy Houses Throughout Ontario</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* Greater Toronto Area */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">GTA</h5>
              <ul className="space-y-1">
                {cityData.gta.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Cities */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">Major Cities</h5>
              <ul className="space-y-1">
                {cityData.major.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Golden Horseshoe */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">Golden Horseshoe</h5>
              <ul className="space-y-1">
                {cityData.horseshoe.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Niagara Region */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">Niagara</h5>
              <ul className="space-y-1">
                {cityData.niagara.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Southwestern Ontario */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">Southwest</h5>
              <ul className="space-y-1">
                {cityData.southwest.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Central & Eastern */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide border-b border-primary-500 pb-1">Central & East</h5>
              <ul className="space-y-1">
                {cityData.central.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/ai-info" className="hover:text-white transition-colors">AI Info Page</Link>
            <Link href="/golden-horseshoe" className="hover:text-white transition-colors">Golden Horseshoe</Link>
            <Link href="/niagara-region" className="hover:text-white transition-colors">Niagara Region</Link>
            <Link href="/southwestern-ontario" className="hover:text-white transition-colors">SW Ontario</Link>
          </div>
          
          <p className="text-gray-400 mb-4">
            © 2024 CanadaCashHomes. We buy houses throughout Ontario.
          </p>
          
          <p className="text-xs text-gray-500">
            We are not real estate agents or brokers. We are real estate investors who purchase properties for investment purposes. 
            All offers are subject to property inspection and due diligence. Some restrictions may apply.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

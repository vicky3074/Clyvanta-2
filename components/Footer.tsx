'use client';

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
    <footer 
      className={className}
      style={{ 
        backgroundColor: 'var(--brand-primary-800)', 
        color: 'var(--brand-hero-text)' 
      }}
    >
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
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--brand-hero-subtext)' }}
            >
              Ontario's trusted cash home buyers. Fast, fair, and reliable property purchases across the province - any condition, any situation.
            </p>
          </div>

          <div className="md:text-right">
            <h3 
              className="font-semibold text-xl mb-4"
              style={{ color: 'var(--brand-hero-text)' }}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <div 
                className="flex md:justify-end items-center"
                style={{ color: 'var(--brand-hero-subtext)' }}
              >
                <span className="mr-2">📞</span>
                <a 
                  href={SITE_CONFIG.contact.phone.href}
                  className="transition-colors font-semibold text-lg"
                  style={{ color: 'var(--brand-hero-subtext)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--brand-hero-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                  }}
                >
                  {SITE_CONFIG.contact.phone.display}
                </a>
              </div>
              <div 
                className="flex md:justify-end items-center"
                style={{ color: 'var(--brand-hero-subtext)' }}
              >
                <span className="mr-2">📧</span>
                <a 
                  href={SITE_CONFIG.contact.email.href}
                  className="transition-colors"
                  style={{ color: 'var(--brand-hero-subtext)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--brand-hero-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                  }}
                >
                  {SITE_CONFIG.contact.email.primary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* City Grid: Comprehensive Ontario Coverage */}
        <div 
          className="pt-8 mb-8"
          style={{ borderTop: `1px solid var(--brand-primary-600)` }}
        >
          <h4 
            className="text-2xl font-semibold mb-8 text-center"
            style={{ color: 'var(--brand-hero-text)' }}
          >
            We Buy Houses Throughout Ontario
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* Greater Toronto Area */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >
                GTA
              </h5>
              <ul className="space-y-1">
                {cityData.gta.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Cities */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >Major Cities</h5>
              <ul className="space-y-1">
                {cityData.major.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Golden Horseshoe */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >Golden Horseshoe</h5>
              <ul className="space-y-1">
                {cityData.horseshoe.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Niagara Region */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >Niagara</h5>
              <ul className="space-y-1">
                {cityData.niagara.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Southwestern Ontario */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >Southwest</h5>
              <ul className="space-y-1">
                {cityData.southwest.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Central & Eastern */}
            <div>
              <h5 
                className="font-semibold mb-3 text-sm uppercase tracking-wide pb-1"
                style={{ 
                  color: 'var(--brand-hero-text)',
                  borderBottom: `2px solid var(--brand-primary-500)`
                }}
              >Central & East</h5>
              <ul className="space-y-1">
                {cityData.central.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="transition-colors text-sm"
                      style={{ color: 'var(--brand-hero-subtext)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-primary-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--brand-hero-subtext)';
                      }}
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
        <div 
          className="pt-6 text-center"
          style={{ borderTop: `1px solid var(--brand-primary-600)` }}
        >
          <div 
            className="flex flex-wrap justify-center space-x-4 text-sm mb-4"
            style={{ color: 'var(--brand-hero-subtext)' }}
          >
            <Link 
              href="/privacy" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Terms of Service
            </Link>
            <Link 
              href="/contact" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Contact
            </Link>
            <Link 
              href="/sitemap" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Sitemap
            </Link>
            <Link 
              href="/ai-info" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              AI Info Page
            </Link>
            <Link 
              href="/golden-horseshoe" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Golden Horseshoe
            </Link>
            <Link 
              href="/niagara-region" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Niagara Region
            </Link>
            <Link 
              href="/southwestern-ontario" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              SW Ontario
            </Link>
          </div>
          
          <p 
            className="mb-4"
            style={{ color: 'var(--brand-hero-subtext)' }}
          >
            © 2024 CanadaCashHomes. We buy houses throughout Ontario.
          </p>
          
          <p 
            className="text-xs"
            style={{ color: 'var(--brand-primary-400)' }}
          >
            We are not real estate agents or brokers. We are real estate investors who purchase properties for investment purposes. 
            All offers are subject to property inspection and due diligence. Some restrictions may apply.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

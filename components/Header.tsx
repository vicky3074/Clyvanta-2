"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HeaderProps } from "../types/components";
import { SITE_CONFIG } from "../src/lib/config";

/**
 * Header component with navigation and mobile menu
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the main site header
 */
const Header = React.memo(function Header({ className = "" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-[60]"
      >
        Skip to main content
      </a>
      
      <header className={`bg-white shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt={`${SITE_CONFIG.company.name} Logo`}
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 font-medium text-base transition-colors"
              style={{
                '--hover-color': 'var(--brand-primary-600)'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#111827';
              }}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-900 font-medium text-base transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#111827';
              }}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-gray-900 font-medium text-base transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#111827';
              }}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 font-medium text-base transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#111827';
              }}
            >
              Blog Articles
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-base shadow-md"
              style={{
                background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-400), var(--brand-primary-500))`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`;
              }}
            >
              Get My Offer
            </Link>
            <Link
              href={SITE_CONFIG.contact.phone.href}
              className="border-2 border-slate-600 text-slate-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-base"
            >
              {SITE_CONFIG.contact.phone.display}
            </Link>
          </div>

          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-900 font-medium transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#111827';
                }}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-900 font-medium transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#111827';
                }}
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="text-gray-900 font-medium transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#111827';
                }}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 font-medium transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#111827';
                }}
              >
                Blog Articles
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="/contact"
                  className="text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center shadow-md"
                  style={{
                    background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-400), var(--brand-primary-500))`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`;
                  }}
                >
                  Get My Offer
                </Link>
                <Link
                  href={SITE_CONFIG.contact.phone.href}
                  className="border-2 border-slate-600 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
                >
                  {SITE_CONFIG.contact.phone.display}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
});

export default Header;

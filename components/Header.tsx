'use client';

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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-md z-50 focus:z-[60]"
        style={{
          backgroundColor: 'var(--brand-primary-600)',
          color: 'white'
        }}
      >
        Skip to main content
      </a>
      
      <header 
        className={`shadow-sm sticky top-0 z-50 ${className}`}
        style={{ backgroundColor: 'var(--brand-section-bg-alt)' }}
      >
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
              className="font-medium text-base transition-colors"
              style={{
                color: 'var(--brand-section-text)',
                '--hover-color': 'var(--brand-primary-600)'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-section-text)';
              }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="font-medium text-base transition-colors"
              style={{ color: 'var(--brand-section-text)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-section-text)';
              }}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="font-medium text-base transition-colors"
              style={{ color: 'var(--brand-section-text)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-section-text)';
              }}
            >
              About Us
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
              Get Started
            </Link>
            <Link
              href={SITE_CONFIG.contact.phone.href}
              className="border-2 px-6 py-2.5 rounded-lg font-semibold transition-colors text-base"
              style={{
                borderColor: 'var(--brand-section-text)',
                color: 'var(--brand-section-text)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-section-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
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
                className="font-medium transition-colors"
                style={{ color: 'var(--brand-section-text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--brand-section-text)';
                }}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="font-medium transition-colors"
                style={{ color: 'var(--brand-section-text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--brand-section-text)';
                }}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="font-medium transition-colors"
                style={{ color: 'var(--brand-section-text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary-600)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--brand-section-text)';
                }}
              >
                About Us
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
                  Get Started
                </Link>
                <Link
                  href={SITE_CONFIG.contact.phone.href}
                  className="border-2 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  style={{
                    borderColor: 'var(--brand-section-text)',
                    color: 'var(--brand-section-text)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--brand-section-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
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

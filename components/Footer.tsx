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
              alt="Clyvanta Logo"
              width={160}
              height={40}
              className="invert mb-4"
            />
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--brand-hero-subtext)' }}
            >
              Enterprise-grade IT solutions that automate, optimize, and scale your business operations. Custom development, AI integration, and digital transformation services.
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
              href="/blog" 
              className="transition-colors"
              style={{ color: 'var(--brand-hero-subtext)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-hero-subtext)';
              }}
            >
              Blog
            </Link>
          </div>
          
          <p 
            className="mb-4"
            style={{ color: 'var(--brand-hero-subtext)' }}
          >
            © 2024 Clyvanta. Enterprise IT solutions and digital transformation services.
          </p>
          
          <p 
            className="text-xs"
            style={{ color: 'var(--brand-primary-400)' }}
          >
            Professional IT consulting services. Custom solutions tailored to your business needs. 
            All projects subject to consultation and technical assessment.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

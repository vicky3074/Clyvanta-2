/**
 * Contact Information Components
 * 
 * Reusable components that pull from master config
 * Ensures consistent contact info across the site
 */

import { getFormattedPhone, getPhoneHref, getEmailHref, getPrimaryEmail } from '@/lib/config';

interface ContactLinkProps {
  className?: string;
  children?: React.ReactNode;
}

// Phone Number Components
export function PhoneNumber({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      {getFormattedPhone()}
    </span>
  );
}

export function PhoneLink({ className = "", children }: ContactLinkProps) {
  return (
    <a 
      href={getPhoneHref()} 
      className={className}
      aria-label={`Call ${getFormattedPhone()}`}
    >
      {children || getFormattedPhone()}
    </a>
  );
}

// Email Components
export function EmailAddress({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      {getPrimaryEmail()}
    </span>
  );
}

export function EmailLink({ className = "", children }: ContactLinkProps) {
  return (
    <a 
      href={getEmailHref()} 
      className={className}
      aria-label={`Email ${getPrimaryEmail()}`}
    >
      {children || getPrimaryEmail()}
    </a>
  );
}

// Combined Contact Info
export function ContactBlock({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mb-2">
        <PhoneLink className="text-lg font-semibold text-blue-600 hover:text-blue-700" />
      </div>
      <div>
        <EmailLink className="text-gray-600 hover:text-gray-800" />
      </div>
    </div>
  );
}

// Quick Action Buttons
export function CallButton({ className = "" }: { className?: string }) {
  return (
    <PhoneLink 
      className={`inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors ${className}`}
    >
      📞 Call {getFormattedPhone()}
    </PhoneLink>
  );
}

export function EmailButton({ className = "" }: { className?: string }) {
  return (
    <EmailLink 
      className={`inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors ${className}`}
    >
      ✉️ Email Us
    </EmailLink>
  );
}
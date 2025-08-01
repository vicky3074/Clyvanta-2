'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'orange' ? 'blue' : 'orange');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 z-50 flex items-center justify-center text-white font-bold"
      style={{
        background: theme === 'orange' 
          ? `linear-gradient(135deg, var(--brand-primary-500), var(--brand-primary-600))`
          : `linear-gradient(135deg, var(--brand-primary-500), var(--brand-primary-600))`
      }}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'orange' ? 'blue' : 'orange'} theme`}
    >
      <div className="relative w-6 h-6">
        {/* Toggle Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === 'orange' ? (
            // Orange to Blue icon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
              <circle cx="12" cy="12" r="6" fill="currentColor"/>
            </svg>
          ) : (
            // Blue to Orange icon  
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 6.26L17 4L14.74 8.09L19 9L14.74 9.91L17 14L13.09 11.74L12 16L10.91 11.74L7 14L9.26 9.91L5 9L9.26 8.09L7 4L10.91 6.26L12 2Z" fill="currentColor"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}
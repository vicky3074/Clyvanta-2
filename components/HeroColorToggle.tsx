'use client';

import { useEffect, useState } from 'react';

// Hero theme types
type HeroTheme = 'white-blue' | 'dark-gray' | 'deep-black' | 'white-gray';

export function HeroColorToggle() {
  const [mounted, setMounted] = useState(false);
  const [heroTheme, setHeroTheme] = useState<HeroTheme>('white-blue');

  useEffect(() => {
    setMounted(true);
    // Load saved theme from localStorage
    const saved = localStorage.getItem('heroTheme') as HeroTheme;
    if (saved) {
      setHeroTheme(saved);
    }
  }, []);

  const setTheme = (theme: HeroTheme) => {
    setHeroTheme(theme);
    localStorage.setItem('heroTheme', theme);
    // Dispatch custom event to update hero section
    window.dispatchEvent(new CustomEvent('heroThemeChange', { detail: theme }));
  };

  if (!mounted) return null;

  const themes = [
    { id: 'white-blue', name: 'Clyvanta Blue', emoji: '🔵', colors: ['#ffffff', '#2563eb'] },
    { id: 'dark-gray', name: 'Dark Gray', emoji: '⚡', colors: ['#111827', '#374151'] },
    { id: 'deep-black', name: 'Deep Black', emoji: '🖤', colors: ['#000000', '#374151'] },
    { id: 'white-gray', name: 'White Gray', emoji: '🤍', colors: ['#ffffff', '#6b7280'] },
  ] as const;

  return (
    <div className="fixed top-20 right-6 bg-white rounded-lg shadow-lg p-3 z-50 border">
      <div className="text-xs font-medium text-gray-600 mb-2">Hero Colors</div>
      <div className="flex flex-col gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id as HeroTheme)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              heroTheme === theme.id
                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            title={`Switch to ${theme.name} theme`}
          >
            <span className="text-base">{theme.emoji}</span>
            <span className="text-xs">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Hook to use hero theme in components
export function useHeroTheme() {
  const [heroTheme, setHeroTheme] = useState<HeroTheme>('white-blue');

  useEffect(() => {
    // Load initial theme
    const saved = localStorage.getItem('heroTheme') as HeroTheme;
    if (saved) {
      setHeroTheme(saved);
    }

    // Listen for theme changes
    const handleThemeChange = (event: CustomEvent) => {
      setHeroTheme(event.detail);
    };

    window.addEventListener('heroThemeChange', handleThemeChange as EventListener);
    return () => window.removeEventListener('heroThemeChange', handleThemeChange as EventListener);
  }, []);

  return heroTheme;
}
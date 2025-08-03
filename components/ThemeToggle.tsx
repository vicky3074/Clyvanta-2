'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { id: 'white-blue', emoji: '🔵', name: 'Clyvanta' },
    { id: 'dark-gray', emoji: '⚡', name: 'Dark' },
    { id: 'deep-black', emoji: '🖤', name: 'Black' },
    { id: 'white-gray', emoji: '🤍', name: 'Light' },
  ];

  const currentIndex = themes.findIndex(t => t.id === theme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const currentTheme = themes[currentIndex] || themes[0];
  const nextTheme = themes[nextIndex];

  const cycleTheme = () => {
    setTheme(nextTheme.id);
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 z-50 flex items-center justify-center font-bold"
      style={{
        background: `linear-gradient(135deg, var(--brand-primary-500), var(--brand-primary-600))`,
        color: theme === 'white-blue' || theme === 'white-gray' ? 'var(--brand-section-text)' : '#ffffff',
        border: `2px solid ${theme === 'white-blue' || theme === 'white-gray' ? 'var(--brand-primary-300)' : 'transparent'}`
      }}
      aria-label={`Switch to ${nextTheme.name} theme`}
      title={`Current: ${currentTheme.name} → Click for: ${nextTheme.name}`}
    >
      <div className="text-xl">
        {currentTheme.emoji}
      </div>
    </button>
  );
}
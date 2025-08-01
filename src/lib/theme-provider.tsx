'use client';

import { ThemeProvider } from 'next-themes';

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="orange"
      themes={['blue', 'orange']}
      enableSystem={false}
      storageKey="canadacashhomes-theme"
    >
      {children}
    </ThemeProvider>
  );
}
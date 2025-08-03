'use client';

import { ThemeProvider } from 'next-themes';

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="white-blue"
      themes={['white-blue', 'dark-gray', 'deep-black', 'white-gray']}
      enableSystem={false}
      storageKey="clyvanta-theme"
    >
      {children}
    </ThemeProvider>
  );
}
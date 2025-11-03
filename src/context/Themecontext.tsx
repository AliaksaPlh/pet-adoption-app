'use client';
import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import type { Theme } from '@/types/types';
import { LIGHT, DARK } from '@/constants/consts';

const ThemeContext = createContext<Theme>({
  theme: LIGHT,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<typeof LIGHT | typeof DARK>(LIGHT);

  useEffect(() => {
    const stored =
      typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === LIGHT || stored === DARK) {
      setTheme(stored);
      return;
    }
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? DARK : LIGHT);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove(LIGHT, DARK);
      root.classList.add(theme);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

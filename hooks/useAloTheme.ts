/**
 * Ālo Design System — Theme Hook
 * Manages dark/light mode: localStorage persistence, data-theme attribute sync, toggle.
 */
import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'alo-theme';

export function useAloTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(STORAGE_KEY) as Theme) || 'dark'
  );

  // Keep data-theme attribute and localStorage in sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme } as const;
}

/**
 * Shared theme hook — manages dark/light mode for the homepage shell.
 * Handles localStorage persistence, data-theme attribute sync, and toggle.
 *
 * Replaces the identical useState/useEffect/toggleTheme pattern previously
 * duplicated in HomePage, AppPage, HomeHelpPage, HomePrivacyPage, HomeTermsPage.
 */
import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'wyzr-theme';

export function useWyzrTheme() {
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

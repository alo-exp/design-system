/**
 * Wyzr MUI Theme Factory
 *
 * Creates a Material UI theme for the /app route with Wyzr's design tokens.
 * Used alongside the CSS custom properties in tokens.css (which serves the homepage).
 *
 * Usage:
 *   import { buildMuiTheme } from './muiTheme';
 *   const theme = buildMuiTheme('dark');
 */

import { createTheme } from '@mui/material';

export function buildMuiTheme(mode: 'dark' | 'light') {
  return createTheme({
  palette: {
    mode,
    primary: {
      main: '#4F46E5',
      light: '#6366F1',
      dark: '#3730A3',
    },
    secondary: {
      main: '#0EA5E9',
      light: '#38BDF8',
      dark: '#0284C7',
    },
    background: mode === 'dark'
      ? { default: '#0a0a0f', paper: '#12121a' }
      : { default: '#f8f9fc', paper: '#ffffff' },
    text: mode === 'dark'
      ? { primary: '#e2e8f0', secondary: '#94a3b8' }
      : { primary: '#0f172a', secondary: '#475569' },
    divider: mode === 'dark' ? '#1e293b' : '#e2e8f0',
    success: {
      main: '#10b981',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#0EA5E9',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: { fontWeight: 800, fontSize: '3.5rem',  letterSpacing: '-0.04em', lineHeight: 1.1  },
    h2: { fontWeight: 700, fontSize: '2.25rem', letterSpacing: '-0.03em', lineHeight: 1.2  },
    h3: { fontWeight: 700, fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1.3  },
    h4: { fontWeight: 700, fontSize: '1.5rem',  letterSpacing: '-0.02em', lineHeight: 1.35 },
    h5: { fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.01em', lineHeight: 1.4  },
    h6: { fontWeight: 600, fontSize: '1.125rem',letterSpacing: '-0.01em', lineHeight: 1.4  },
    body1:   { lineHeight: 1.7 },
    body2:   { lineHeight: 1.6 },
    caption: { fontWeight: 500, letterSpacing: '0.02em', lineHeight: 1.5 },
    button:  { textTransform: 'none' as const, fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
    '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
    '0 25px 50px -12px rgb(0 0 0 / 0.15)',
    '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
    '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
    '0 25px 50px -12px rgb(0 0 0 / 0.15)',
    '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
    '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
    '0 25px 50px -12px rgb(0 0 0 / 0.15)',
    '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
    '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
    '0 25px 50px -12px rgb(0 0 0 / 0.15)',
    '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
    '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
  ] as const,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
          },
        },
        outlined: {
          borderColor: mode === 'dark' ? 'rgba(255,255,255,0.12)' : '#E2E8F0',
          '&:hover': {
            borderColor: '#4F46E5',
            color: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: mode === 'dark' ? '0 1px 3px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
          border: `1px solid ${mode === 'dark' ? '#1e293b' : '#e2e8f0'}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          backgroundImage: 'none',
          background: mode === 'dark' ? '#12121a' : '#ffffff',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: mode === 'dark' ? '#1e293b' : '#e2e8f0',
          boxShadow: 'none',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 6,
        },
        bar: {
          borderRadius: 4,
          background: 'linear-gradient(90deg, #4F46E5, #0EA5E9)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  });
}

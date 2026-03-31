# Ālo Design System

A token-based design system with dark/light mode, responsive breakpoints, and dual rendering contexts — CSS custom properties for the homepage, MUI theme for the app.

## Structure

```
design-system/
├── tokens/               Core design tokens
│   ├── tokens.css        CSS custom properties (colors, spacing, typography, shadows)
│   ├── global.css        Base resets and font configuration
│   └── muiTheme.ts       MUI theme factory (React/Material UI)
├── components/           Component-level stylesheets
│   ├── homepage.css      Shared homepage utilities (buttons, containers, fade-in)
│   ├── HomeNav.css       Navigation bar (fixed, backdrop blur, mobile hamburger)
│   ├── HomeHero.css      Hero section (gradient text, decorative blobs, CTA)
│   ├── HomeFeatures.css  Feature cards grid (3→2→1 column responsive)
│   ├── HomeHowItWorks.css  Steps section (numbered badges, 3-column grid)
│   ├── HomeCTA.css       Call-to-action section
│   ├── HomeFooter.css    Footer (links, copyright)
│   └── HomeLegal.css     Legal pages (Terms, Privacy)
├── hooks/
│   └── useAloTheme.ts    React hook for dark/light mode (localStorage-backed)
├── docs/
│   └── DESIGN_SYSTEM.md  Quick-reference developer guide
└── specs/
    └── 2026-03-25-alo-design-system-design.md  Full specification
```

## Brand

| Token | Value |
|-------|-------|
| Primary | Indigo `#4F46E5` |
| Secondary | Violet `#7C3AED` |
| Tertiary | Pink `#DB2777` |
| Font (homepage) | Inter |
| Font (app headings) | Plus Jakarta Sans |
| Default mode | Dark |

## Usage

### CSS Custom Properties (Homepage)

```css
@import '../design-system/tokens.css';

.my-component {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
  transition: var(--transition-default);
}
```

### MUI Theme (App)

```tsx
import { buildMuiTheme } from './design-system/tokens/muiTheme';
import { ThemeProvider } from '@mui/material';

const theme = buildMuiTheme('dark');
<ThemeProvider theme={theme}>...</ThemeProvider>
```

### Dark/Light Mode

```tsx
import { useAloTheme } from './design-system/hooks/useAloTheme';

const { theme, toggleTheme } = useAloTheme();
```

Theme is applied via `data-theme="dark|light"` on `<html>`, persisted to `localStorage('alo-theme')`.

## Responsive Breakpoints

| Breakpoint | Width |
|-----------|-------|
| Mobile | ≤ 768px |
| Tablet | 769–1024px |
| Desktop | ≥ 1025px |

## License

MIT

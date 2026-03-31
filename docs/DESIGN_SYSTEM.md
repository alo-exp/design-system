# Ālo Design System — Developer Reference

> Full spec: `specs/2026-03-25-alo-design-system-design.md`
> Token source: `design-system/tokens.css`

## Scope

| Route | Font | Tokens | Framework |
|---|---|---|---|
| `/` (homepage) | Inter | `tokens.css` | Plain CSS |
| `/app` | Plus Jakarta Sans | MUI theme in `App.tsx` | MUI v7 |

Homepage imports `design-system/tokens.css`. App route does **not**.

## Theme Switching

Default: dark. Set by inline `<script>` in `index.html` before first paint.
Toggle persists to `localStorage` key `alo-theme`.
Attribute on `<html>`: `data-theme="dark"` | `data-theme="light"`.

## Quick Token Reference

### Colors
| Token | Dark | Light |
|---|---|---|
| `--color-bg` | `#0a0a0f` | `#f8f9fc` |
| `--color-surface` | `#12121a` | `#ffffff` |
| `--color-border` | `#1e293b` | `#e2e8f0` |
| `--color-text-primary` | `#e2e8f0` | `#0f172a` |
| `--color-text-secondary` | `#94a3b8` | `#475569` |
| `--color-accent-primary` | `#4f46e5` | same |
| `--color-accent-secondary` | `#7c3aed` | same |
| `--color-accent-tertiary` | `#db2777` | same |

### Gradients
- `--gradient-brand` → `135deg, #4f46e5, #7c3aed, #db2777` (headline text)
- `--gradient-indigo-violet` → `135deg, #4f46e5, #7c3aed` (buttons)

### Gradient text pattern
```css
background: var(--gradient-brand);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Buttons
All: `border-radius: var(--radius-pill)`. Font: Inter 600.

| Variant | Background | Text |
|---|---|---|
| Primary | `var(--gradient-indigo-violet)` | white |
| Secondary | `rgba(99,102,241,0.1)` + border | `#a5b4fc` |
| Ghost | transparent + `var(--color-border)` border | `var(--color-text-secondary)` |

Sizes: sm `8px 18px / 0.78rem / 34px`, md `12px 28px / 0.875rem / 44px`, lg `16px 36px / 1rem / 54px`

### Cards
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: var(--radius-lg);   /* 20px */
padding: 28px 24px;
text-align: left;
position: relative;
overflow: hidden;
```
Hover: `translateY(-4px)` + `var(--shadow-card)` + gradient top bar via `::before`.

### Icons
Library: `lucide-react`. Stroke width: `1.5`.
- Card: `24px` in `40×40` container
- Step: `28px`
- Nav mobile: `20px`
- Inline: `16px`

### Spacing
`--space-1` 8px · `--space-2` 16px · `--space-3` 24px · `--space-4` 32px · `--space-6` 48px · `--space-8` 64px · `--space-12` 96px · `--space-section-y` 80px

### Breakpoints
- Mobile `≤768px`: single column, hamburger nav
- Tablet `769–1024px`: 2-column grid
- Desktop `≥1025px`: 3-column grid, full nav

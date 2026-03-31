# Ālo Design System — Spec

**Date:** 2026-03-25
**Status:** Approved
**Scope:** Homepage (marketing) + App UI reference

---

## 1. Overview

The Ālo Design System establishes visual consistency across the marketing homepage and the app.
It is inspired by the MultAI site (https://multai.alolabs.dev) for the homepage layer, while retaining Ālo's existing font and MUI-based design for the app UI.

### Key principles

- **Two contexts, one codebase:** Homepage uses CSS custom properties + Inter font. App UI uses MUI + Plus Jakarta Sans. These are separate pages — no CSS scope overlap.
- **Dark mode default:** The homepage defaults to dark mode (`[data-theme="dark"]` on `<html>`), with a light mode toggle persisted in `localStorage`.
- **MultAI-inspired homepage:** Indigo → Violet → Pink palette, pill buttons, 20px-radius cards, clamp-based fluid type, gradient headlines.
- **App UI unchanged:** MUI `createTheme()` in `App.tsx` is not modified. Token values are documented here for reference only.

---

## 2. File Structure

```
wyzr/
└── design-system/
    ├── tokens.css          ← All CSS custom properties (homepage only)
    └── DESIGN_SYSTEM.md    ← Condensed developer reference (token tables, component rules)
```

`tokens.css` is imported by the homepage page component only. It is **not** imported by the app route.

> **Note:** This planning spec lives at `docs/superpowers/specs/`. The output `design-system/DESIGN_SYSTEM.md` is a shorter developer-facing reference derived from this spec during implementation — it is not a copy of this file.

---

## 3. Page Structure

| Route | Context | Design |
|---|---|---|
| `/` | Homepage | MultAI-inspired, `tokens.css`, Inter font |
| `/app` (or `/upload`) | App UI | MUI theme, Plus Jakarta Sans, unchanged |

The app UI is a separate page — it does not live below the homepage content.

---

## 4. Homepage Sections

Lean structure (MultAI-style):

1. **Navigation** — fixed, backdrop blur
2. **Hero** — headline + CTA + step pills
3. **How It Works** — 3-step section
4. **Features & Benefits** — card grid
5. **Final CTA** — centered section
6. **Footer** — links + copyright

Content copy (value propositions, feature descriptions, etc.) is defined separately in the next step.

---

## 5. Color System

### 5.1 Brand Accent — shared across both modes (in `:root`)

| Token | Value | Name |
|---|---|---|
| `--color-accent-primary` | `#4f46e5` | Indigo 600 |
| `--color-accent-light` | `#6366f1` | Indigo 500 |
| `--color-accent-secondary` | `#7c3aed` | Violet 600 |
| `--color-accent-mid` | `#a855f7` | Violet 400 |
| `--color-accent-tertiary` | `#db2777` | Pink 600 |
| `--color-accent-pink-light` | `#ec4899` | Pink 400 |
| `--color-accent-green` | `#059669` | Green 600 (badge variant) |
| `--color-accent-amber` | `#d97706` | Amber 600 (badge variant) |

### 5.2 Gradients (in `:root`)

| Token | Value | Usage |
|---|---|---|
| `--gradient-brand` | `linear-gradient(135deg, #4f46e5, #7c3aed, #db2777)` | Headline text, primary accents |
| `--gradient-indigo-violet` | `linear-gradient(135deg, #4f46e5, #7c3aed)` | Buttons |
| `--gradient-violet-pink` | `linear-gradient(135deg, #7c3aed, #db2777)` | Decorative elements |

### 5.3 CSS Cascade Structure

`tokens.css` uses this structure:

```css
/* 1. Theme-agnostic tokens — always available */
:root {
  /* brand accents, gradients, spacing, radii, shadows, transitions */
  --color-bg-rgb: 10, 10, 15;           /* dark mode default */
  --color-bg: #0a0a0f;
  --color-surface: #12121a;
  --color-border: #1e293b;
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #475569;
  /* + all other dark-mode surface tokens */
}

/* 2. Explicit dark mode — same as :root, kept for clarity */
[data-theme="dark"] {
  --color-bg-rgb: 10, 10, 15;
  --color-bg: #0a0a0f;
  /* ... same values as :root ... */
}

/* 3. Light mode overrides */
[data-theme="light"] {
  --color-bg-rgb: 248, 249, 252;
  --color-bg: #f8f9fc;
  --color-surface: #ffffff;
  --color-border: #e2e8f0;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  /* + light-mode shadow overrides */
}
```

The inline `<script>` (Section 13) sets `data-theme` before first paint, so the correct `:root` defaults always load — no flash occurs.

### 5.4 Dark Mode surfaces (default — also in `:root`)

| Token | Value | Usage |
|---|---|---|
| `--color-bg-rgb` | `10, 10, 15` | Used in `rgba()` for translucent nav |
| `--color-bg` | `#0a0a0f` | Page background |
| `--color-surface` | `#12121a` | Cards, nav background |
| `--color-border` | `#1e293b` | Borders, dividers |
| `--color-text-primary` | `#e2e8f0` | Headings, primary text |
| `--color-text-secondary` | `#94a3b8` | Body copy |
| `--color-text-muted` | `#475569` | Captions, hints |

### 5.5 Light Mode

Applied via `[data-theme="light"]` on `<html>`.

| Token | Value | Usage |
|---|---|---|
| `--color-bg-rgb` | `248, 249, 252` | Used in `rgba()` for translucent nav |
| `--color-bg` | `#f8f9fc` | Page background |
| `--color-surface` | `#ffffff` | Cards |
| `--color-border` | `#e2e8f0` | Borders |
| `--color-text-primary` | `#0f172a` | Headings |
| `--color-text-secondary` | `#475569` | Body copy |
| `--color-text-muted` | `#94a3b8` | Captions |

**Light hero background:** `linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf2f8 100%)`

### 5.6 Semantic Colors (in `:root`)

| Token | Value | Usage |
|---|---|---|
| `--color-success` | `#059669` | Success states |
| `--color-warning` | `#d97706` | Warning states |
| `--color-error` | `#dc2626` | Error states |
| `--color-info` | `#0891b2` | Info states |

---

## 6. Typography

### 6.1 Homepage — Inter

All homepage text uses Inter. Loaded via Google Fonts with `font-display: swap` to prevent layout shift:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

```css
--font-family-homepage: 'Inter', system-ui, -apple-system, sans-serif;
```

| Token | Value | Usage |
|---|---|---|
| `--font-size-hero` | `clamp(2.5rem, 5vw, 4.5rem)` | Hero H1 |
| `--font-size-section` | `clamp(1.8rem, 3vw, 2.5rem)` | Section headings (H2) |
| `--font-size-card-title` | `1.1rem` | Card / step headings (H3) |
| `--font-size-body` | `0.9rem` | Body copy |
| `--font-size-caption` | `0.75rem` | Badges, labels, captions |
| `--font-size-small` | `0.8rem` | Secondary/meta text |
| `--font-weight-hero` | `900` | Hero headline |
| `--font-weight-section` | `800` | Section headings |
| `--font-weight-card` | `700` | Card titles |
| `--font-weight-body` | `400` | Body copy |
| `--font-weight-label` | `600` | Badges, buttons, labels |
| `--line-height-body` | `1.7` | Body paragraphs |
| `--line-height-heading` | `1.05` | Display headings |
| `--letter-spacing-hero` | `-0.04em` | Hero H1 |
| `--letter-spacing-section` | `-0.03em` | Section H2 |
| `--letter-spacing-card` | `-0.02em` | Card titles |
| `--letter-spacing-label` | `0.06em` | Uppercase badges/labels |

**Gradient text pattern (hero headline):**
```css
background: var(--gradient-brand);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
`--gradient-brand` (`#4f46e5 → #7c3aed → #db2777`) is intentionally unchanged in light mode. These dark indigo/pink tones have sufficient contrast against the light lavender hero background (`#eef2ff / #f5f3ff`).

### 6.2 App UI — Plus Jakarta Sans (reference only, unchanged)

| Element | Font | Weight | Size |
|---|---|---|---|
| H1 | Plus Jakarta Sans | 800 | 3.5rem desktop |
| H2–H4 | Plus Jakarta Sans | 700 | 2.25rem–1.5rem |
| Buttons | Plus Jakarta Sans | 600 | 0.875rem |
| Body | Inter | 400 | 0.9rem |
| Labels/Captions | Inter | 500 | 0.75rem |

---

## 7. Spacing & Layout

Replace the `--space-section` shorthand with axis-specific tokens for clarity:

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `8px` | Tight gaps |
| `--space-2` | `16px` | Component padding |
| `--space-3` | `24px` | Card padding |
| `--space-4` | `32px` | Section inner padding |
| `--space-6` | `48px` | Between components |
| `--space-8` | `64px` | Between sections |
| `--space-12` | `96px` | Large section gaps |
| `--space-section-y` | `80px` | Section vertical padding (used as `padding: var(--space-section-y) 0`) |
| `--container-max` | `1200px` | Page max-width |
| `--container-pad` | `24px` | Page horizontal padding (used as `padding: 0 var(--container-pad)`) |

---

## 8. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Badges, code blocks |
| `--radius-md` | `12px` | Nav bar, small cards |
| `--radius-lg` | `20px` | Feature cards |
| `--radius-xl` | `28px` | Large callout sections |
| `--radius-pill` | `999px` | Buttons, tags |

---

## 9. Shadows

Shadows are mode-scoped. Dark mode values are in `:root`; light mode overrides are in `[data-theme="light"]`.

| Token | Dark value | Light value | Usage |
|---|---|---|---|
| `--shadow-card` | `0 20px 60px rgba(0,0,0,0.4)` | `0 4px 24px rgba(15,23,42,0.08)` | Cards |
| `--shadow-glow` | `0 0 40px rgba(99,102,241,0.08)` | `0 0 40px rgba(99,102,241,0.12)` | Accent glow |
| `--shadow-btn` | `0 4px 20px rgba(99,102,241,0.3)` | `0 4px 20px rgba(99,102,241,0.25)` | Button rest |
| `--shadow-btn-hover` | `0 8px 30px rgba(99,102,241,0.45)` | `0 8px 30px rgba(99,102,241,0.35)` | Button hover |

---

## 10. Transitions & Animation

Transition values are tokenised in `:root`:

| Token | Value | Usage |
|---|---|---|
| `--transition-default` | `background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s` | All interactive elements |
| `--transition-transform` | `transform 0.2s ease` | Hover lift on cards and buttons |
| `--transition-fade` | `opacity 0.6s ease-out, transform 0.6s ease-out` | Scroll fade-in |

Animation patterns (not tokenised — applied via keyframes):
- **Scroll fade-in:** `opacity 0→1 + translateY(20px→0)` using `--transition-fade`
- **Pulse (decorative):** `opacity 1→0.4→1` over `2s infinite`

---

## 11. Component Patterns

### 11.1 Navigation

- Position: `fixed`, top `0`, full width, `z-index: 100`
- Height: `64px`
- Background: `rgba(var(--color-bg-rgb), 0.85)` with `backdrop-filter: blur(20px)`
- Border-bottom: `1px solid var(--color-border)`
- Contents: Logo (gradient text) | Nav links | "Get Started" pill CTA button
- Mobile: hamburger menu at `≤768px`, collapses to full-width dropdown overlay

### 11.2 Buttons

All buttons use `border-radius: var(--radius-pill)`.

| Variant | Background | Text color | Usage |
|---|---|---|---|
| Primary | `var(--gradient-indigo-violet)` | `#ffffff` | Main CTAs |
| Secondary | `rgba(99,102,241,0.1)` + `1px solid rgba(99,102,241,0.3)` | `#a5b4fc` | Secondary actions |
| Ghost | `transparent` + `1px solid var(--color-border)` | `var(--color-text-secondary)` | Tertiary actions |

**Size variants:**

| Size | Padding | Font size | Min height |
|---|---|---|---|
| `sm` | `8px 18px` | `0.78rem` | `34px` |
| `md` (default) | `12px 28px` | `0.875rem` | `44px` |
| `lg` | `16px 36px` | `1rem` | `54px` |

Hover state: `var(--transition-transform)` → `translateY(-2px)` + `var(--shadow-btn-hover)`

### 11.3 Badges / Pills

```css
border-radius: var(--radius-pill);
padding: 4px 12px;
font-size: var(--font-size-caption);    /* 0.75rem */
font-weight: var(--font-weight-label); /* 600 */
letter-spacing: 0.04em;
```

Color variants — background is 15% opacity of the base color, text is the lighter tint:

| Variant | Base color token | Background | Text |
|---|---|---|---|
| Indigo | `--color-accent-primary` (`#4f46e5`) | `rgba(79,70,229,0.15)` | `#a5b4fc` |
| Violet | `--color-accent-secondary` (`#7c3aed`) | `rgba(124,58,237,0.15)` | `#c084fc` |
| Pink | `--color-accent-tertiary` (`#db2777`) | `rgba(219,39,119,0.15)` | `#f9a8d4` |
| Green | `--color-accent-green` (`#059669`) | `rgba(5,150,105,0.15)` | `#34d399` |
| Amber | `--color-accent-amber` (`#d97706`) | `rgba(217,119,6,0.15)` | `#fbbf24` |

### 11.4 Feature Cards

```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: var(--radius-lg);   /* 20px */
padding: 28px 24px;
text-align: left;
position: relative;
overflow: hidden;
```

Contents (top to bottom, all left-aligned):
1. Icon — 40×40px Lucide icon in `rgba(99,102,241,0.15)` container, `border-radius: var(--radius-sm)`
2. Title — `var(--font-size-card-title)`, `var(--font-weight-card)`, `var(--color-text-primary)`
3. Description — `var(--font-size-body)`, `var(--font-weight-body)`, `var(--color-text-secondary)`

Hover state:
- `var(--transition-transform)` → `translateY(-4px)`
- `var(--shadow-card)`
- `border-color: rgba(99,102,241,0.3)`
- Gradient top bar revealed via `::before` pseudo-element:

```css
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gradient-brand);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  opacity: 0;
  transition: opacity 0.25s;
}
.card:hover::before {
  opacity: 1;
}
```

### 11.5 Hero Section

Layout: centered text column, max-width `600px`, full-width background.
Padding: `140px var(--container-pad) 100px`.

**Dark mode background:** `var(--color-bg)` with two decorative radial blob `<div>`s:
- Blob 1: `300×300px`, `background: #6366f1`, top-right, `opacity: 0.08`, `filter: blur(60px)`
- Blob 2: `200×200px`, `background: #db2777`, bottom-left, `opacity: 0.07`, `filter: blur(60px)`

**Light mode background:** `linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf2f8 100%)`

Contents (center-aligned):
1. Badge pill — uppercase label, indigo variant
2. H1 — gradient text via `--gradient-brand`, `var(--font-size-hero)`, `var(--font-weight-hero)`
3. Subheadline — `var(--font-size-body)`, `var(--color-text-secondary)`, max-width `480px`, `var(--line-height-body)`
4. CTA row — Primary button (lg) + Ghost button (lg), gap `12px`, `justify-content: center`
5. Step pills row — 3 numbered pills, gap `8px`, `justify-content: center`, margin-top `32px`

### 11.6 How It Works Section

Section heading: center-aligned, `var(--font-size-section)`, `var(--font-weight-section)`.
Section padding: `var(--space-section-y) 0`.

**Layout:**
- Desktop (`≥1025px`): 3-column grid, `gap: var(--space-6)` (48px), `grid-template-columns: repeat(3, 1fr)`
- Mobile (`≤768px`): single column, `gap: var(--space-4)` (32px)

**Each step (left-aligned content):**
- Step number badge: `32×32px` circle, `background: rgba(99,102,241,0.15)`, `border: 1px solid rgba(99,102,241,0.3)`, `color: #a5b4fc`, `font-size: 0.8rem`, `font-weight: 700`
- Lucide icon: `28px`, rendered below the step badge, `color: var(--color-accent-light)`
- Title: `var(--font-size-card-title)`, `var(--font-weight-card)`, `var(--color-text-primary)`, left-aligned
- Description: `var(--font-size-body)`, `var(--color-text-secondary)`, left-aligned

No connector lines between steps (keeps the layout clean on mobile).

### 11.7 Final CTA Section

Center-aligned. Padding: `var(--space-section-y) 0`.

**Background:**
- Dark mode: `var(--color-surface)` (`#12121a`) — visually separated from the page bg
- Light mode: `var(--color-surface)` (`#ffffff`) with `border-top: 1px solid var(--color-border)` and `border-bottom: 1px solid var(--color-border)` to maintain section separation against the near-white page background

Contents: Headline (H2) + subtext + single primary CTA button (lg).

### 11.8 Footer

Simple, minimal. `padding: var(--space-6) 0`.
Links: Features · How It Works · Privacy · Terms.
Copyright notice + build version (retained from current app).
Font: `var(--font-size-small)`, `var(--color-text-muted)`.

---

## 12. Icons

**Library:** `lucide-react`

No emoji icons. All icons are Lucide components at consistent sizes:

| Context | Size | Stroke width |
|---|---|---|
| Feature card icons | `24px` in a `40×40` container | `1.5` (default) |
| How It Works step icons | `28px` | `1.5` |
| Navigation (mobile menu toggle) | `20px` | `1.5` |
| Inline / UI icons | `16px` | `1.5` |

Stroke width `1.5` matches Inter's stroke geometry.

---

## 13. Dark / Light Mode

Theme switching uses a `data-theme` attribute on `<html>`:

```html
<html data-theme="dark">   <!-- default -->
<html data-theme="light">  <!-- toggled -->
```

**No flash on load:** Inline `<script>` in `<head>` reads `localStorage` before first paint:

```js
(function() {
  const t = localStorage.getItem('wyzr-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
```

Toggle button in the navigation bar persists selection to `localStorage` key `wyzr-theme`.

---

## 14. Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile | `≤ 768px` | Single column, nav collapses to hamburger, hero stacks |
| Tablet | `769px – 1024px` | 2-column feature grid |
| Desktop | `≥ 1025px` | 3-column feature grid, full nav |

Container: `max-width: var(--container-max)` (1200px), centered with `padding: 0 var(--container-pad)` (24px).

---

## 15. Out of Scope (this spec)

- Homepage copy / content (value propositions, feature descriptions, CTAs) — defined in next step
- App UI changes — none; app page is unchanged
- Pricing section — excluded from lean structure
- Testimonials section — excluded from lean structure
- Analytics / tracking implementation

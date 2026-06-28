---
version: "alpha"
name: "Silver Bullet Site"
description: "Design system contract for the Silver Bullet homepage and Help Center — S3 dark variant, light-first theme, D-Din typography, shared chrome partials, and borderless content surfaces."
colors:
  primary: "#f6f9fc"
  secondary: "#bdcad8"
  tertiary: "#00a82e"
  tertiary-dark: "#007a20"
  neutral: "#02060c"
  accent: "#00a82e"
  accent-light: "#00c834"
  accent-cyan: "#00ccff"
  accent-purple: "#a855f7"
  warning: "#ffaa00"
  danger: "#c44060"
  light-background: "#f6f4f0"
  light-card: "#ffffff"
  light-code: "#ece8e0"
  light-text: "#050f08"
  light-text-secondary: "#0d3a1a"
  light-border: "#8cc4a4"
  dark-background: "#02060c"
  dark-background-deep: "#010409"
  dark-hero: "#060d15"
  dark-section: "#08111c"
  dark-section-strong: "#0a1421"
  dark-card-top: "#0e1a28"
  dark-card-bottom: "#091421"
  dark-code-top: "#060c15"
  dark-code-bottom: "#03070d"
  dark-border: "#2d4158"
  dark-border-hover: "#4d6884"
typography:
  h1:
    fontFamily: D-Din
    fontSize: 6rem
    fontWeight: 700
    lineHeight: 0.95em
    letterSpacing: -0.06em
  page-title:
    fontFamily: D-Din
    fontSize: 2.8rem
    fontWeight: 700
    lineHeight: 1.1em
    letterSpacing: -0.04em
  section-title:
    fontFamily: D-Din
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1em
    letterSpacing: -0.04em
  heading-md:
    fontFamily: D-Din
    fontSize: 1.1rem
    fontWeight: 700
    lineHeight: 1.3em
  body-md:
    fontFamily: D-Din
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7em
  body-sm:
    fontFamily: D-Din
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.7em
  label-caps:
    fontFamily: D-Din
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.2em
    letterSpacing: 0.08em
  mono:
    fontFamily: SB Plex Mono
    fontSize: 1em
    fontWeight: 400
    lineHeight: 1em
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px
  help-hero-top: 120px
  help-anchor-offset: 96px
  site-header-h: 64px
  help-subnav-h: 72px
components:
  light-surface-page:
    backgroundColor: "{colors.light-background}"
    textColor: "{colors.light-text}"
  light-content-card:
    backgroundColor: "{colors.light-card}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.md}"
    padding: 20px
  light-code-block:
    backgroundColor: "{colors.light-code}"
    textColor: "{colors.light-text-secondary}"
    rounded: "{rounded.sm}"
    padding: 20px 24px
  dark-surface-page:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.primary}"
  dark-surface-deep:
    backgroundColor: "{colors.dark-background-deep}"
    textColor: "{colors.primary}"
  dark-hero-surface:
    backgroundColor: "{colors.dark-hero}"
    textColor: "{colors.primary}"
  dark-section-band:
    backgroundColor: "{colors.dark-section}"
    textColor: "{colors.secondary}"
  dark-section-strong:
    backgroundColor: "{colors.dark-section-strong}"
    textColor: "{colors.secondary}"
  homepage-card:
    backgroundColor: "{colors.dark-card-top}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 28px
  homepage-card-hover:
    backgroundColor: "{colors.dark-card-top}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 28px
  help-callout:
    backgroundColor: "linear-gradient(135deg, rgba(17,31,47,.88), color-mix(in srgb, #00a82e 7%, transparent) 52%, rgba(38,52,70,.52))"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 20px 24px
  help-content-card:
    backgroundColor: "{colors.dark-card-bottom}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 20px
  dark-code-block:
    backgroundColor: "{colors.dark-code-top}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 20px 24px
  dark-code-block-deep:
    backgroundColor: "{colors.dark-code-bottom}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 20px 24px
  button-primary:
    backgroundColor: "{colors.tertiary-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  nav-control:
    backgroundColor: "{colors.light-card}"
    textColor: "{colors.light-text-secondary}"
    rounded: "{rounded.sm}"
    height: 40px
    width: 40px
  nav-control-dark:
    backgroundColor: "{colors.dark-card-top}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    height: 40px
    width: 40px
  help-theme-toggle:
    backgroundColor: "{colors.light-card}"
    textColor: "{colors.light-text-secondary}"
    rounded: "{rounded.sm}"
    height: 34px
    width: 34px
  bordered-control:
    backgroundColor: "{colors.light-card}"
    textColor: "{colors.light-text-secondary}"
    rounded: "{rounded.sm}"
    padding: 8px 20px
  bordered-control-dark:
    backgroundColor: "{colors.dark-card-top}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 8px 20px
  light-accent-emphasis:
    backgroundColor: "{colors.light-background}"
    textColor: "{colors.tertiary-dark}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  accent-emphasis:
    backgroundColor: "{colors.dark-section}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  accent-light-emphasis:
    backgroundColor: "{colors.dark-section}"
    textColor: "{colors.accent-light}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  semantic-devops:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  semantic-review:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  semantic-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  semantic-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  accent-badge:
    backgroundColor: "{colors.tertiary-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: 0 6px
  light-border-swatch:
    backgroundColor: "{colors.light-border}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.sm}"
    size: 1px
  dark-border-swatch:
    backgroundColor: "{colors.dark-border}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    size: 1px
  dark-border-swatch-hover:
    backgroundColor: "{colors.dark-border-hover}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    size: 1px
  light-bordered-surface:
    backgroundColor: "{colors.light-card}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.md}"
    padding: 16px
  dark-bordered-surface:
    backgroundColor: "{colors.dark-card-top}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 16px
---

## Overview

Silver Bullet is an agentic process orchestrator for AI-native software engineering and DevOps. The website should feel like an operational control surface: precise, high contrast, and governed — not a decorative marketing splash page. It should feel like a system that composes workflows, enforces gates, and preserves traceability.

**Surfaces:**

- **Homepage** — S3 treatment at `site/index.html` (`data-neutral-variant="s3"`, `site/neutral-variants.css`). Public APO narrative.
- **Help Center** — shared skeleton under `site/help/` using `site/tokens.css`, `site/chrome.css`, `site/help/common.js`, and `site/_chrome/` partials.

**Theme default:** first-time visitors see **light** theme (`<html data-theme="light">`). Dark applies only when `localStorage` (`silver-bullet-theme` or `sb-theme`) is `dark`. A boot script in `<head>` sets `data-theme` before paint.

**Implementation authority** (when code and tokens disagree, reconcile both):

| Priority | File | Role |
|----------|------|------|
| 1 | `site/tokens.css` | CSS custom properties, `@font-face`, themes, borderless policy |
| 2 | `site/chrome.css` | Nav, footer, help subnav, header heights, chrome gradient wordmark |
| 3 | `site/_chrome/` | HTML partials (`nav.html`, `footer.html`, `help-subnav.html`) |
| 4 | `scripts/apply-site-chrome.py` | Regenerates chrome; bumps `CHROME_VER` (`site-chrome-11`) |
| 5 | `design-system/DESIGN.md` | Agent-facing contract (this file) |
| 6 | `tests/scripts/test-site-chrome-regression.sh` | Regression guards |

Regenerate chrome after partial edits: `python3 scripts/apply-site-chrome.py`. Do not hand-edit nav/footer on help pages when partials exist.

Validate this file: `npx -p @google/design.md designmd lint design-system/DESIGN.md`

## Colors

High-contrast navy-black dark theme, warm linen light theme, stable green accent. Do not change green casually.

**Token roles:**

- **Primary (#f6f9fc):** dark-theme headlines and primary text.
- **Secondary (#bdcad8):** captions, help body, metadata on dark surfaces.
- **Tertiary (#00a82e):** primary interaction on dark surfaces.
- **Tertiary-dark (#007a20):** button fills and WCAG-safe green backgrounds in tokens.
- **Neutral (#02060c):** page ink / deep foundation.
- **Accent (#00a82e):** badges and emphasis on dark section bands.
- **Accent-light (#00c834):** light-theme accent and link emphasis.
- **Accent-cyan / accent-purple / warning / danger:** semantic badges only — not brand replacements.

### Dark theme

`[data-theme="dark"]` in `tokens.css`: page `{colors.dark-background}`, cards `{colors.dark-card-top}`, text `{colors.primary}` / `{colors.secondary}`, accent `{colors.tertiary}`, borders `{colors.dark-border}` (mostly **borderless** on content boxes — see Elevation & Depth).

### Light theme (default)

`:root` in `tokens.css`: page `{colors.light-background}`, cards `{colors.light-card}`, code `{colors.light-code}`, text `{colors.light-text}` / `{colors.light-text-secondary}`, borders `{colors.light-border}` (controls and nav chrome only — content boxes stay borderless).

### Chrome gradient

Nav wordmark `.logo.gradient` uses `--chrome-gradient` (theme-specific metallic stops) with `background-clip: text`.

### Help subnav

Dedicated band below header: height `{spacing.help-subnav-h}`, background `--help-subnav-bg` (light `rgba(232,226,216,.97)`, dark `rgba(16,28,44,.97)`), distinct from `--nav-bg`. Site header: `{spacing.site-header-h}`.

## Typography

**Shipped stack:**

| Role | Token | Implementation |
|------|-------|----------------|
| Headings + UI | `{typography.h1}` … `{typography.label-caps}` | D-Din WOFF2 in `site/fonts/` |
| Monospace | `{typography.mono}` | SB Plex Mono (`size-adjust: 93%` IBM Plex Mono in `tokens.css`) |

CSS variables: `--font-heading`, `--font-body`, `--font-sans` → D-Din; `--font-mono` → SB Plex Mono.

`@font-face` in `site/tokens.css` (duplicated inline on homepage). Bold: `font-weight: 700` → `D-DIN-Bold.woff2`.

**Inline mono:** `code`, `kbd`, `samp` at `font-size: 1em` with `line-height: inherit`.

**Dormant assets** (not wired): `Gidole-Regular.ttf`, `alte-din-1451-mittelschrift.*.ttf`.

**Command casing:** `/silver:init` — never `/Silver: Init`.

## Layout

### Homepage

- Variant `data-neutral-variant="s3"`.
- Hero: bullet, title, alpha badge, APO badge, Brooks quote, tagline **THE PROCESS LAYER OF AI-DRIVEN DEV**, CTAs, workflow pills.
- CTA note: **100% Free Forever · No Strings Attached · No Telemetry**.
- Proof: **$0 / Free Forever** — no BUSL on homepage (see `/terms/`).
- Nav: `Problem`, `How It Works`, `Ecosystem`, `Workflows`, `Install`; `Help Center` left of theme toggle.
- Icon-only theme toggle (`#theme-toggle`), not text `Theme`.
- No `Optional` capsules on DevOps Enrichment boxes.
- Full-width section bands; no floating section cards.

### Help Center

- Chrome from `_chrome/` + `chrome.css`; `has-help-subnav` body class.
- `.help-theme-btn` 34×34px; `doc-layout` ~220px sidebar + main.
- Single breadcrumb in chrome — none above `<h1>`. `Help` links → `/help/`.
- TOC/hash offset `{spacing.help-anchor-offset}`; first `h2` optically aligned with first TOC item.
- `<h1>` plain titles — no inline badge spans (e.g. no `APO` in workflow index title).

## Elevation & Depth

Depth from gradients and `--card-shadow-hover`, not content-box borders.

**Unified card hover:** one selector block sets `box-shadow: var(--card-shadow-hover)` on pain cards, callouts, enforcement blocks. No per-card hover overrides. `neutral-variants.css` mirrors for S3. Hover variant token: `homepage-card-hover` (shadow applied in CSS, not YAML).

**Surfaces:** homepage cards use dark card gradient (`homepage-card`); help content may stack `{colors.dark-card-bottom}`; code blocks use `{colors.dark-code-top}` → `{colors.dark-code-bottom}` gradient in CSS (`dark-code-block` / `dark-code-block-deep`).

**Borderless policy:** `tokens.css` sets `border-width: 0 !important` on boxed content. Borders only on controls (`button-primary`, `nav-control`, inputs). Light/dark bordered controls use `{colors.light-border}` / `{colors.dark-border}` only on interactive chrome.

## Shapes

| Token | Value | Use |
|-------|-------|-----|
| `{rounded.sm}` | 8px | Controls, theme buttons |
| `{rounded.md}` | 12px | Standard boxes |
| `{rounded.lg}` | 20px | Homepage cards |
| `{rounded.pill}` | 999px | Buttons, badges |

## Components

YAML `components` entries map to shipped UI. CSS may add gradients and shadows beyond token fields.

| Token key | UI |
|-----------|-----|
| `light-surface-page` / `dark-surface-page` | Theme page backgrounds |
| `light-content-card` / `homepage-card` | Card surfaces |
| `homepage-card-hover` | Hover state (shadow via `--card-shadow-hover` in CSS) |
| `help-callout` / `help-content-card` | Help boxed content |
| `light-code-block` / `dark-code-block` | Code and install blocks |
| `button-primary` / `button-primary-hover` | Green CTA — base `{colors.tertiary-dark}`, hover `{colors.tertiary}`; CSS may use full gradient |
| `nav-control` / `nav-control-dark` | Homepage `#theme-toggle` |
| `help-theme-toggle` | Help `.help-theme-btn` |
| `bordered-control` / `bordered-control-dark` | Outlined secondary controls |
| `semantic-*` | DevOps, review, warning, danger badges |
| `accent-badge` | Nav alpha / version pills |

**Footer:** `site/_chrome/footer.html` — Install, Help Center, GitHub.

**Persistence:** theme choice → `localStorage` `silver-bullet-theme` or `sb-theme`.

## Do's and Don'ts

### Do

- Treat `site/tokens.css` as runtime token owner; update DESIGN.md when tokens change.
- Regenerate chrome from partials after nav/footer edits.
- Default to light theme for first paint.
- Use D-Din + SB Plex Mono sitewide.
- Keep content boxes left-aligned unless the whole box is centered.
- Keep content boxes borderless except controls.
- Use unified `--card-shadow-hover`.
- Run `test-site-chrome-regression.sh` after chrome or card changes.
- Run `designmd lint design-system/DESIGN.md` after editing this file.

### Don't

- Don't wire dormant fonts without updating tokens and this file.
- Don't promote BUSL on homepage proof grid.
- Don't duplicate `Alpha Honesty` callouts without editorial intent.
- Don't embed badges in help `<h1>` titles.
- Don't edit help nav inline when partials exist.
- Don't add per-card hover shadows outside the unified block.
- Don't shrink inline mono below adjacent sans.
- Don't title-case skill names.
- Don't point Help breadcrumbs at `/`.

## Session Change Log

Homepage/help refinement (2026-06): S3 promotion, shared chrome partials, reduced nav, help subnav 72px, light-first theme, D-Din migration, borderless boxes, unified card hover, BUSL removed from homepage, regression test added. Open: dedupe duplicate Alpha Honesty in `#proof`.

---

*Aligned 2026-06-28 · [DESIGN.md spec](https://github.com/google-labs-code/design.md) alpha · `CHROME_VER=site-chrome-11`*

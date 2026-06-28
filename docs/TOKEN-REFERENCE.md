# Token Reference

Canonical values live in [`kit/tokens.css`](../kit/tokens.css). This document lists the token **roles** agents and authors must respect. Do not rename tokens without updating `DESIGN.md` and running `designmd lint`.

## Typography

| Token | Role |
|-------|------|
| `--font-heading` | Headings — D-Din |
| `--font-body` / `--font-sans` | Body copy — D-Din |
| `--font-mono` | Code, CLI, badges — SB Plex Mono (IBM Plex Mono + size-adjust) |
| `--mono-glyph-scale` | Mono sizing correction in mixed lines |

## Surfaces

| Token | Role |
|-------|------|
| `--bg-page` | Page background |
| `--bg-card` | Card / panel fill |
| `--bg-card-hover` | Card hover fill (rare; prefer shadow) |
| `--bg-code` | Inline / block code background |
| `--bg-hero` | Hero gradient |
| `--section-alt` | Alternating section wash |

## Chrome

| Token | Role |
|-------|------|
| `--chrome-gradient` | Nav wordmark gradient text |
| `--nav-bg` | Fixed top nav background |
| `--nav-mobile-bg` | Mobile nav drawer |
| `--help-subnav-bg` | Help breadcrumb bar (distinct from nav) |
| `--card-border-faint` | Unified card border at rest |
| `--card-shadow-hover` | Unified hover elevation |

## Accent & semantic

| Token | Role |
|-------|------|
| `--accent` | Primary brand green — buttons, links, glows |
| `--accent-light` | Darker green for light-mode links |
| `--accent-glow` | Hero / CTA glow |
| `--accent2` | Secondary blue |
| `--accent3` | Purple highlights |
| `--green` / `--amber` / `--red` / `--cyan` | Status semantics |

## Text

| Token | Role |
|-------|------|
| `--text-primary` | Headings, emphasis |
| `--text-secondary` | Body |
| `--text-dim` | Captions, meta |

## Borders & radius

| Token | Role |
|-------|------|
| `--border` | Default borders |
| `--border-hover` | Hover border (cards, inputs) |
| `--radius` / `--radius-lg` / `--radius-sm` | Corner radii |

## Shadows

| Token | Role |
|-------|------|
| `--shadow-lg` | Large elevation |
| `--shadow-glow` | Accent glow |

## Layout (chrome.css)

| Token | Role |
|-------|------|
| `--chrome-stack-h` | Total fixed chrome height (nav + help subnav) |
| `--nav-h` | Top nav height (56px) |
| `--help-subnav-h` | Help subnav height (72px) |

## Alpha / opacity helpers

Tokens ending in `-a10`, `-a25`, etc. are pre-mixed alpha variants for borders and backgrounds — use these instead of raw `rgba()` in component CSS.

## Dark mode

All tokens are redefined under `[data-theme="dark"]` in `tokens.css`. Pages toggle via `data-theme` on `<html>`; never maintain a separate dark stylesheet.

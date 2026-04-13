# Design Tokens

The design system defines **token slots** — named CSS custom properties with fixed semantic roles. Actual color values are supplied by a **theme file**. This means the same component library works with any brand color scheme by swapping themes.

See [`themes/silver-bullet.md`](themes/silver-bullet.md) for the reference implementation (Silver Bullet dark/light).

---

## How Theming Works

Themes use two CSS blocks:

```css
/* Default (light) values */
:root { --bg-page: ...; --accent: ...; /* etc. */ }

/* Dark overrides — applied when data-theme="dark" on <html> */
[data-theme="dark"] { --bg-page: ...; --accent: ...; /* etc. */ }
```

Every page links `tokens.css` which contains the active theme. No page declares its own `:root` or `[data-theme]` blocks — `tokens.css` is the single source of truth.

The default theme is **dark**. Light is opt-in via `localStorage` (see `README.md` for the toggle implementation).

---

## Token Slots — Color

### Backgrounds

| Token | Role | Usage |
|-------|------|-------|
| `--bg-page` | Page canvas | `body` background |
| `--bg-card` | Card surface | All card backgrounds |
| `--bg-card-hover` | Card hover surface | Card `:hover` background |
| `--bg-code` | Code surface | Code blocks, install blocks, search inputs |
| `--bg-hero` | Hero gradient | Hero section background (complex gradient) |
| `--nav-bg` | Frosted nav | Fixed nav, `92%` opacity + `backdrop-filter: blur(20px)` |
| `--nav-mobile-bg` | Mobile nav dropdown | `99%` opacity, no blur |
| `--section-alt` | Alternating section | Every even `<section>` gets this instead of `--bg-page` |

### Brand Accent

The brand accent is the single color that drives all interactive elements: buttons, links, badges, borders, glows. Each theme provides one primary value and pre-computed opacity helpers.

| Token | Role | Usage |
|-------|------|-------|
| `--accent` | Primary brand color | Button fills, card borders, active states |
| `--accent-light` | Interactive text shade | Link text, label text, badge text, icon color |
| `--accent-glow` | Glow shadow | Button hover box-shadow, hero orbs |
| `--green` | Semantic: positive | Success states, go actions, install commands |

#### Accent Opacity Helpers

Pre-computed alpha variants of `--accent`. Naming: `--accent-aNN` where NN is opacity percentage (04 = 4%, 40 = 40%).

```
--accent-a04  --accent-a07  --accent-a08  --accent-a10
--accent-a12  --accent-a14  --accent-a15  --accent-a18
--accent-a25  --accent-a28  --accent-a30  --accent-a35  --accent-a40
```

Usage pattern: `background: var(--accent-a12)` for a light tint; `border: 1px solid var(--accent-a28)` for a subtle border.

#### Soft-Tint Helpers

A softer, slightly desaturated variant of the accent used for hero glows, card top-borders, and hero pills. Naming: `--mint-aNN`.

```
--mint-a07  --mint-a08  --mint-a10  --mint-a12  --mint-a13  --mint-a14
--mint-a18  --mint-a20  --mint-a22  --mint-a26  --mint-a28  --mint-a32
--mint-a35  --mint-a38  --mint-a45  --mint-a55  --mint-a90
```

**When to use accent vs. mint:** `--accent-aNN` for interactive UI chrome (borders, fills); `--mint-aNN` for ambient atmosphere (glows, card highlight lines, backgrounds).

### Semantic Colors

Semantic colors are independent of the brand accent and carry fixed meaning across all themes. Each theme calibrates the exact hue/lightness for its background contrast, but the semantic role never changes.

| Token | Role | Usage |
|-------|------|-------|
| `--amber` | Warning / cost | Warning callouts, cost section, Verify phase badges |
| `--red` | Error / stop | Stop callouts, Required badges, quality gate phase |
| `--cyan` | Info / secondary accent | Info callouts, DevOps phase, Discuss phase, secondary links |
| `--accent2` | Secondary accent alias | Same as `--cyan` — use for secondary interactive elements |
| `--accent3` | Tertiary accent (purple) | Artifact gate phase, tertiary badges, rare decorative use |
| `--slate-text` | Muted label | Neutral labels, timestamps — same value in both themes |

#### Semantic Opacity Helpers

```
--cyan-a06   --cyan-a10   --cyan-a12   --cyan-a25   --cyan-a30
--amber-a12  --amber-a15
--red-a12    --red-a15
--green-a12  --green-a15
--accent3-a12
--slate-a10  --slate-a12
--cyan-discuss-a12   /* discuss phase card background */
--neutral-a10        /* neutral dark overlay */
--neutral-a12        /* neutral light overlay */
```

### Text

| Token | Role | Usage |
|-------|------|-------|
| `--text-primary` | High-contrast text | Headlines, `<strong>`, active states |
| `--text-secondary` | Body text | All `<p>`, list items, card descriptions |
| `--text-dim` | De-emphasized text | Labels, captions, placeholders, meta |
| `--heading-muted` | Softened heading | Major headings in dark theme — slightly below `--text-primary` to reduce harshness |

**Heading rule:** In dark theme, apply `--heading-muted` (not `--text-primary`) to `.section-title`, `.feature-card h3`, `.layer-card h3`, `.doc-content h2/h3`. In light theme, `--heading-muted` resolves to the same value as `--text-primary`.

```css
[data-theme="dark"] .section-title,
[data-theme="dark"] .feature-card h3,
[data-theme="dark"] .layer-card h3 { color: var(--heading-muted); }
```

**Never** use `--accent` or `--green` for body text. Body text is always `--text-secondary`.

### Borders

| Token | Role | Usage |
|-------|------|-------|
| `--border` | Default border | All card borders, dividers, table rules |
| `--border-hover` | Active/hover border | Card hover, input focus, active links |

### Button Gradient Stops

Four named stops used to build button and nav CTA gradients. These let themes control the full gradient by just changing four values.

| Token | Role |
|-------|------|
| `--grad-1` | Darkest stop (start and end of gradient) |
| `--grad-2` | Mid stop |
| `--grad-3` | Lightest stop (used in workflow tab active gradient) |
| `--grad-4` | Bright stop (used in hover gradient) |

### Button Gradients

| Token | Role | Usage |
|-------|------|-------|
| `--btn-gradient` | Primary button background | `.btn-primary`, nav CTA, layer number circles |
| `--btn-gradient-hover` | Primary button hover state | `.btn-primary:hover` |

### Product Name Gradient

| Token | Role | Usage |
|-------|------|-------|
| `--chrome-gradient` | Product name display treatment | Applied **only** to the `<h1>` product name `<span>` via `background-clip: text` |

This gradient is product-specific — each product chooses a finish that evokes its name. For Silver Bullet it is a chrome/steel shimmer. It changes completely between light and dark themes (dark steel in light mode, bright chrome in dark mode).

**Never** apply `--chrome-gradient` to body text, links, or footer elements.

Usage:
```css
.gradient {
  background: var(--chrome-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Shadows

| Token | Role | Usage |
|-------|------|-------|
| `--shadow-lg` | Floating panel shadow | Modals, dropdowns, elevated cards |
| `--shadow-glow` | Accent glow shadow | Card hover state |

Shadow values differ significantly between themes — light themes use subtle drop shadows, dark themes use much heavier ones (dark backgrounds don't naturally create depth). See theme file for values.

### Misc

| Token | Role | Usage |
|-------|------|-------|
| `--table-row-hover` | Table row hover tint | `.workflow-table tr:hover td` |

---

## Typography

Typography is part of the design system, not the theme — all Ālo Labs products use the same typefaces and type scale. Only color tokens (which reference the theme) vary.

### Typefaces

| Role | Family | Source |
|------|--------|--------|
| Sans-serif | Space Grotesk | Google Fonts |
| Monospace | Fira Code | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
--font-sans: 'Space Grotesk', system-ui, sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing | Color token | Notes |
|---------|------|--------|-------------|----------------|-------------|-------|
| Hero h1 | `clamp(2.2rem, 5vw, 4rem)` | 900 | `1.05` | `-.04em` | `--text-primary` (chrome gradient on product name span) | |
| Section title | `clamp(1.8rem, 3vw, 2.5rem)` | 800 | `1.2` | `-.03em` | `--heading-muted` |  |
| Card h3 | `1.1rem` | 700 | `1.3` | — | `--heading-muted` | |
| Doc h1 | `clamp(1.8rem, 3.5vw, 2.8rem)` | 900 | `1.1` | `-.04em` | `--text-primary` | Help page heroes |
| Doc h2 | `1.4rem` | 800 | `1.3` | `-.03em` | `--heading-muted` | Doc section headings |
| Doc h3 | `1rem` | 700 | `1.4` | — | `--heading-muted` | Doc sub-headings |
| Section label | `.75rem` | 700 | — | `.12em` | `--accent-light` | Uppercase eyebrow |
| Body | `1rem` | 400 | `1.7` | — | `--text-secondary` | Default prose |
| Body small | `.875rem` | 400 | `1.6` | — | `--text-secondary` | Card descriptions |
| Caption / dim | `.8rem` | 400 | — | — | `--text-dim` | Metadata, timestamps |
| Code (inline) | `.82rem` | 400 | — | — | `--accent-light` | `font-family: var(--font-mono)`; bg `--bg-code`; padding `2px 6px`; radius `4px` |
| Code (block) | `.82rem` | 400 | `1.9` | — | `--text-secondary` | `font-family: var(--font-mono)` |
| Nav links | `.875rem` | 500 | — | — | `--text-secondary` | |
| Badges / tags | `.7rem`–`.75rem` | 700 | — | `.04em`–`.1em` | varies (see badge palette in components.md) | Uppercase |
| Hero tagline caps | `.82rem` | 700 | — | `.22em` | `--accent-light` | All-caps |
| Step card title | `.95rem` | 700 | `1.4` | — | `--text-primary` | Inside `.step-card` |
| Step card desc | `.84rem` | 400 | `1.6` | — | `--text-secondary` | Inside `.step-card` |
| Step card output | `.78rem` | 400 | — | — | `--text-dim` | `font-family: var(--font-mono)` |
| Phase header | `.8rem` | 700 | — | `.08em` | `#fff` (on colored bg) | Uppercase pill label |
| Sidebar items | `.85rem` | 400–600 | `1.5` | — | `--text-secondary` / `--accent-light` (active) | |
| Plugin name | `.95rem`–`1rem` | 800 | — | `-.02em` | `--text-primary` | Ecosystem card |
| Plugin role label | `.7rem`–`.75rem` | 700 | — | `.08em` | `--accent-light` or `--cyan` | Uppercase |
| Enforcement body | `.82rem` | 400 | `1.9` | — | `--text-secondary` | `font-family: var(--font-mono)` |
| Brooks quote | `.95rem` | 400 | `1.7` | — | `--text-dim` | `font-style: italic` |
| Brooks attribution | `.8rem` | 400 | — | — | `--text-dim` | |
| Version badge | `.75rem` | 600 | — | `.04em` | `--accent-light` | Includes animated live dot |

### Heading Rendering

```css
html { -webkit-font-smoothing: antialiased; }
body { font-family: var(--font-sans); line-height: 1.7; }
```

### Italic Usage

Only one element uses italic: the authority quote block (`.brooks-block` or equivalent). No other element uses `font-style: italic`.

### Responsive Typography Overrides

Font sizes hold from desktop down to 600px. Only spacing and layout change at 768px and 600px. Font sizes only shrink at ≤375px:

```css
@media(max-width:768px) {
  .hero .hero-tagline-caps { letter-spacing: .18em; }  /* from .22em */
}

@media(max-width:375px) {
  .hero-pill    { font-size: .72rem; padding: 6px 14px; }
  .install-code { font-size: .68rem; }
  .workflow-table td,
  .workflow-table th { font-size: .7rem; }
}
```

---

## Spacing

No spacing tokens — spacing uses literal `px` values following this rhythm:

| Context | Values |
|---------|--------|
| Inline gap (flex) | `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `24px`, `28px` |
| Card padding | `24px`–`32px` (compact), `28px`–`40px` (standard) |
| Section vertical | `80px 0` (desktop), `72px 0` (tablet), `60px 0` (mobile) |
| Container horizontal | `24px` padding, `12px` on ≤375px |
| Stack margin | `8px`, `12px`, `14px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `56px` |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Small pills, badges, sidebar items |
| `--radius` | `12px` | Standard cards, inputs, step cards |
| `--radius-lg` | `20px` | Feature cards, ecosystem cards, help cards |
| `999px` (literal) | — | Pills, buttons, nav CTA, badges |
| `50%` (literal) | — | Circular elements (step numbers, avatars) |

---

## Shadows

Shadow token names are fixed; values come from the theme file:

| Token | Role | Usage |
|-------|------|-------|
| `--shadow-lg` | Floating panel | Dropdowns, elevated modals |
| `--shadow-glow` | Accent glow | Card hover — combined with `transform: translateY(-4px)` |

---

## Motion

Timing values are part of the design system — consistent across all themes.

| Role | Duration | Usage |
|------|----------|-------|
| Theme transition | `.25s` | `background`, `border-color`, `color`, `box-shadow` |
| Card hover | `.3s` | All card `transition` properties |
| Button hover | `.25s` | All button `transition` properties |
| Fade-in reveal | `.6s ease-out` | Scroll-triggered `opacity` + `translateY(20px→0)` |
| Live dot pulse | `2s infinite` | Version badge animated dot |
| Comparison bar fill | `.8s ease-out` | Score bar width animation |

### Fade-in Pattern

```css
.fade-in { opacity: 0; transform: translateY(20px); transition: all .6s ease-out; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

### Theme Transition Targets

```css
body, nav, section, .feature-card, .skill-card, .platform-pill,
.install-block, .code-block, .arch-diagram, .callout,
.comparison-table td, .comparison-table th, .enforcement-block {
  transition: background .25s, background-color .25s, border-color .25s,
              color .25s, box-shadow .25s;
}
```

---

## Icons

Lucide icons via CDN. Version pinned — do not float to `latest`.

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
```

```css
svg.lucide {
  display: inline-block; vertical-align: middle;
  width: 1em; height: 1em;
  stroke-width: 1.5; stroke: currentColor;
  fill: none; stroke-linecap: round; stroke-linejoin: round;
}
```

Icons inherit `color` from parent — no hardcoded stroke colors. Call `lucide.createIcons()` once after DOM is ready (last in the `<script>` block).

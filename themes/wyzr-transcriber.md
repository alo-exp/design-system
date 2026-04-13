# Theme: Wyzr Transcriber

The theme for the Wyzr Transcriber web application. Two modes: dark (default) and light. Extracted from the compiled CSS of the Vite/React app at `deploy/localhost/assets/homepage--LlTLMJ6.css` and `index-Bqjt7Cza.css`.

---

## Personality

**Dark mode (default):** Near-black canvas (`#0a0a0f`) with indigo-to-violet-to-pink brand gradient. The Transcriber app shares the same indigo brand family as MultAI and Sidekick, but its token system is product-app-oriented rather than documentation-site-oriented — using `--color-bg`, `--color-surface`, `--color-border` naming rather than `--bg-page`, `--bg-card`. It feels like a focused productivity tool: clean, dark, precise.

**Light mode:** Cool slate (`#f8f9fc`) with the same indigo accent. Bright, clean, professional — appropriate for users who prefer working in light environments during the day.

**Mode support:** Dark default (`:root`) + light override (`[data-theme="light"]`). Note the toggle direction is inverted from Midnight Indigo and Emerald Slate — dark is the primary/default state.

---

## CSS Implementation

```css
/* ── SHARED / BRAND TOKENS (both modes) ───────────────── */
:root {
  /* Brand accent — indigo/violet/pink spectrum */
  --color-accent-primary:       #4f46e5;
  --color-accent-light:         #6366f1;
  --color-accent-secondary:     #7c3aed;
  --color-accent-mid:           #a855f7;
  --color-accent-tertiary:      #db2777;
  --color-accent-pink-light:    #ec4899;

  /* Accent RGB helpers */
  --color-accent-primary-rgb:   79, 70, 229;
  --color-accent-light-rgb:     99, 102, 241;

  /* Extended accent scale */
  --color-accent-indigo-300:    #a5b4fc;

  /* Brand gradients */
  --gradient-brand:             linear-gradient(135deg, #4f46e5, #7c3aed, #db2777);
  --gradient-indigo-violet:     linear-gradient(135deg, #4f46e5, #7c3aed);
  --gradient-violet-pink:       linear-gradient(135deg, #7c3aed, #db2777);

  /* Semantic colors */
  --color-accent-green:         #059669;
  --color-accent-amber:         #d97706;
  --color-success:              #059669;
  --color-warning:              #d97706;
  --color-error:                #dc2626;
  --color-info:                 #0891b2;

  /* Typography scale */
  --font-size-hero:             clamp(2.5rem, 5vw, 4.5rem);
  --font-size-section:          clamp(1.8rem, 3vw, 2.5rem);
  --font-size-card-title:       1.1rem;
  --font-size-body:             .9rem;
  --font-size-caption:          .75rem;
  --font-size-small:            .8rem;

  /* Font weights */
  --font-weight-hero:           900;
  --font-weight-section:        800;
  --font-weight-card:           700;
  --font-weight-body:           400;
  --font-weight-label:          600;

  /* Line heights & letter spacing */
  --line-height-body:           1.7;
  --line-height-heading:        1.05;
  --letter-spacing-hero:        -.04em;
  --letter-spacing-section:     -.03em;
  --letter-spacing-card:        -.02em;
  --letter-spacing-label:       .06em;

  /* Spacing scale */
  --space-1:                    8px;
  --space-2:                    16px;
  --space-3:                    24px;
  --space-4:                    32px;
  --space-6:                    48px;
  --space-8:                    64px;
  --space-12:                   96px;
  --space-section-y:            80px;

  /* Layout */
  --container-max:              1200px;
  --container-pad:              24px;

  /* Radii */
  --radius-sm:                  8px;
  --radius-md:                  12px;
  --radius-lg:                  20px;
  --radius-xl:                  28px;
  --radius-pill:                999px;

  /* Motion */
  --transition-default:         background .25s, border-color .25s, color .25s, box-shadow .25s;
  --transition-transform:       transform .2s ease;
  --transition-fade:            opacity .6s ease-out, transform .6s ease-out;
}

/* ── DARK (default :root mode) ────────────────────────── */
:root {
  /* Backgrounds */
  --color-bg-rgb:               10, 10, 15;
  --color-bg:                   #0a0a0f;
  --color-surface:              #12121a;
  --color-border:               #1e293b;

  /* Text */
  --color-text-primary:         #e2e8f0;
  --color-text-secondary:       #94a3b8;
  --color-text-muted:           #475569;

  /* Shadows */
  --shadow-card:                0 20px 60px rgba(0,0,0,.4);
  --shadow-glow:                0 0 40px rgba(99,102,241,.08);
  --shadow-btn:                 0 4px 20px rgba(99,102,241,.3);
  --shadow-btn-hover:           0 8px 30px rgba(99,102,241,.45);
}

/* ── LIGHT override ────────────────────────────────────── */
[data-theme="light"] {
  /* Backgrounds */
  --color-bg-rgb:               248, 249, 252;
  --color-bg:                   #f8f9fc;
  --color-surface:              #ffffff;
  --color-border:               #e2e8f0;

  /* Text */
  --color-text-primary:         #0f172a;
  --color-text-secondary:       #475569;
  --color-text-muted:           #94a3b8;

  /* Shadows — lighter for bright canvas */
  --shadow-card:                0 4px 24px rgba(15,23,42,.08);
  --shadow-glow:                0 0 40px rgba(99,102,241,.12);
  --shadow-btn:                 0 4px 20px rgba(99,102,241,.25);
  --shadow-btn-hover:           0 8px 30px rgba(99,102,241,.35);
}
```

---

## Design Decisions

### Why is dark the default (`:root`) and light the override?

The Transcriber is a productivity app used for audio transcription and AI processing — tasks users often do in focused, low-distraction environments. Dark mode as default reduces eye strain during long sessions. This is the opposite convention from documentation sites (Midnight Indigo, Emerald Slate) where light-default is appropriate for reading-heavy content.

### Why does this theme use `--color-bg` / `--color-surface` instead of `--bg-page` / `--bg-card`?

The Transcriber is a Vite/React app with its own token naming convention, separate from the documentation site template. The token names reflect app-component thinking: `--color-surface` is any raised surface (cards, modals, panels), not specifically a "card." Mapping: `--color-bg` ≡ `--bg-page`, `--color-surface` ≡ `--bg-card`, `--color-border` ≡ `--border`.

### Why are `--shadow-btn` and `--shadow-btn-hover` explicit tokens here?

The Transcriber's interactive call-to-action buttons use a glowing indigo shadow to communicate affordance — a design pattern more common in product apps than documentation sites. The button shadows (`rgba(99,102,241,.3)` dark, `rgba(99,102,241,.25)` light) are distinct from card shadows and need their own token.

### Why does `--shadow-glow` increase in light mode (`.12` vs `.08`)?

Counter-intuitively, indigo glow needs to be *stronger* in light mode to compete with the bright ambient background. On a dark canvas, even `.08` opacity glow is visible. On the slate-white light canvas, `.12` is the minimum to produce a visible halo around glowing elements.

### Why does the brand share the Midnight Indigo / Cosmic Violet accent palette exactly?

All three products (MultAI, Sidekick, Wyzr Transcriber) are built on the same indigo-to-violet-to-pink brand spectrum — they are sibling products in the same AI product family. The Transcriber reuses the identical accent values because consistency across the ecosystem is intentional. The visual differentiation comes from layout, typography weight, and the app-vs-docs UX pattern, not color.

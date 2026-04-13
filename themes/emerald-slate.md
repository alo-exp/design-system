# Theme: Emerald Slate

The theme for the WOW (WordPress Optimization Wizard) product site. Two modes: light (default) and dark. Supplies actual values for every token slot used in the WOW site.

---

## Personality

**Light mode:** Clean light slate canvas (`#f8f9fc`) — the same cool-professional base as Midnight Indigo, but the accent swaps from indigo to emerald green. The hero gradient shifts toward green-tinted middle tones (`#f0fdf4`), and all glow/hover states carry a green warmth. Fresh, optimistic, and nature-forward — evokes growth, health, and the WordPress ecosystem's own green identity.

**Dark mode:** Near-black canvas with green undertones in the hero gradient (`#0a1a0f`). The emerald accent brightens to mint (`#34d399`) for dark-bg contrast. Feels like a terminal — clean, developer-friendly, productive.

**Mode support:** Light + dark (user toggle via `[data-theme="dark"]`).

---

## CSS Implementation

```css
/* ── LIGHT (default :root) ─────────────────────────────── */
:root {
  /* Backgrounds */
  --bg-page:         #f8f9fc;
  --bg-card:         #ffffff;
  --bg-card-hover:   #f1f5f9;
  --bg-code:         #f1f5f9;
  --bg-hero:         linear-gradient(135deg, #eef2ff 0%, #f0fdf4 50%, #fdf2f8 100%);

  /* Navigation */
  --nav-bg:          rgba(248,249,252,.9);
  --nav-mobile-bg:   rgba(248,249,252,.98);

  /* Section tint */
  --section-alt:     rgba(241,245,249,.6);

  /* Brand accent — emerald green */
  --accent:          #059669;
  --accent-light:    #10b981;
  --accent-glow:     rgba(16,185,129,.1);

  /* Secondary accents */
  --accent2:         #0891b2;
  --accent3:         #7c3aed;

  /* Semantic colors */
  --green:           #059669;
  --amber:           #d97706;
  --red:             #dc2626;
  --cyan:            #0891b2;

  /* Text */
  --text-primary:    #0f172a;
  --text-secondary:  #475569;
  --text-dim:        #94a3b8;

  /* Borders */
  --border:          #e2e8f0;
  --border-hover:    #cbd5e1;

  /* Shadows */
  --shadow-lg:       0 20px 60px rgba(0,0,0,.08);
  --shadow-glow:     0 0 40px rgba(16,185,129,.06);

  /* Table */
  --table-row-hover: rgba(16,185,129,.03);
}

/* ── DARK overrides ────────────────────────────────────── */
[data-theme="dark"] {
  /* Backgrounds */
  --bg-page:         #0a0a0f;
  --bg-card:         #12121a;
  --bg-card-hover:   #181825;
  --bg-code:         #1a1a2e;
  --bg-hero:         linear-gradient(135deg, #0a0a1a 0%, #0a1a0f 40%, #0f1a2e 100%);

  /* Navigation */
  --nav-bg:          rgba(10,10,15,.85);
  --nav-mobile-bg:   rgba(10,10,15,.97);

  /* Section tint */
  --section-alt:     rgba(18,18,26,.4);

  /* Brand accent — mint for dark-bg contrast */
  --accent:          #34d399;
  --accent-light:    #6ee7b7;
  --accent-glow:     rgba(52,211,153,.15);

  /* Secondary accents */
  --accent2:         #22d3ee;
  --accent3:         #a78bfa;

  /* Semantic colors — brighter for dark bg contrast */
  --green:           #34d399;
  --amber:           #fbbf24;
  --red:             #f87171;
  --cyan:            #22d3ee;

  /* Text */
  --text-primary:    #e2e8f0;
  --text-secondary:  #94a3b8;
  --text-dim:        #64748b;

  /* Borders */
  --border:          #1e293b;
  --border-hover:    #334155;

  /* Shadows — heavier: dark bg needs more depth cues */
  --shadow-lg:       0 20px 60px rgba(0,0,0,.4);
  --shadow-glow:     0 0 40px rgba(52,211,153,.08);

  /* Table */
  --table-row-hover: rgba(52,211,153,.03);
}
```

---

## Design Decisions

### Why emerald green and not WordPress blue?

WordPress's official brand is blue, but WOW is an optimization product — the metaphor is growth, health, and performance improvement. Emerald green carries all of those associations (green = go, healthy, thriving) while differentiating the product from WordPress itself. It also avoids confusion with WordPress.com's own brand assets.

### Why does `--accent` shift from deep emerald (`#059669`) in light to mint (`#34d399`) in dark?

The same perceptual-equality principle as Silver Bullet's green: the cool slate background (`#f8f9fc`) in light mode makes saturated colors appear slightly brighter. `#059669` is the correct weight for that canvas. On the near-black dark canvas, `#059669` would disappear — `#34d399` is the luminance-matched counterpart that achieves the same perceived brightness.

### Why does the dark hero gradient pull green (`#0a1a0f`)?

Unlike Midnight Indigo (which pulls indigo into its dark hero) and Cosmic Violet (which stays near-neutral dark), Emerald Slate's dark hero subtly references the product color. The `#0a1a0f` midpoint is extremely dark green — visible only as a hint — but it gives the page a consistent tonal identity across both modes.

### Why is `--accent2` cyan in both modes?

Cyan is the natural neighbor to green on the spectrum — it's used for informational callouts and secondary interactive elements. Keeping it consistent (`#0891b2` light, `#22d3ee` dark) means the green/cyan pairing reads as a coherent double-accent system rather than two arbitrary colors. Together they evoke a "fresh + clear" palette that suits optimization and performance content.

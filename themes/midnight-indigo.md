# Theme: Midnight Indigo

The theme for the MultAI product site. Two modes: light (default) and dark. Supplies actual values for every token slot used in the MultAI docs site.

---

## Personality

**Light mode:** Clean light slate canvas (`#f8f9fc`) — cool and professional. A soft indigo-to-violet-to-pink hero gradient evokes AI intelligence without being loud. Indigo is the primary accent, giving the page a focused, tech-forward authority.

**Dark mode:** Near-black with deep indigo undertones (`#0a0a0f`). The hero gradient descends into a rich indigo-to-violet darkness. The indigo accent brightens just enough to remain vivid against the near-black canvas. Feels like deep space — vast, intelligent, modern.

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
  --bg-hero:         linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf2f8 100%);

  /* Navigation */
  --nav-bg:          rgba(248,249,252,.9);
  --nav-mobile-bg:   rgba(248,249,252,.98);

  /* Section tint */
  --section-alt:     rgba(241,245,249,.6);

  /* Brand accent — indigo */
  --accent:          #4f46e5;
  --accent-light:    #6366f1;
  --accent-glow:     rgba(99,102,241,.1);

  /* Secondary accents */
  --accent2:         #7c3aed;
  --accent3:         #db2777;

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
  --shadow-glow:     0 0 40px rgba(99,102,241,.06);

  /* Table */
  --table-row-hover: rgba(99,102,241,.03);
}

/* ── DARK overrides ────────────────────────────────────── */
[data-theme="dark"] {
  /* Backgrounds */
  --bg-page:         #0a0a0f;
  --bg-card:         #12121a;
  --bg-card-hover:   #181825;
  --bg-code:         #1a1a2e;
  --bg-hero:         linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 40%, #1a0a2e 100%);

  /* Navigation */
  --nav-bg:          rgba(10,10,15,.85);
  --nav-mobile-bg:   rgba(10,10,15,.97);

  /* Section tint */
  --section-alt:     rgba(18,18,26,.4);

  /* Brand accent — brighter indigo for dark contrast */
  --accent:          #6366f1;
  --accent-light:    #818cf8;
  --accent-glow:     rgba(99,102,241,.15);

  /* Secondary accents */
  --accent2:         #a78bfa;
  --accent3:         #f472b6;

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
  --shadow-glow:     0 0 40px rgba(99,102,241,.08);

  /* Table */
  --table-row-hover: rgba(99,102,241,.03);
}
```

---

## Design Decisions

### Why indigo as the primary accent?

Indigo (`#4f46e5`) sits at the intersection of blue (trustworthy, technical) and violet (creative, intelligent). For an AI product, this blend signals both analytical rigor and imaginative capability — more distinctive than plain blue, more grounded than violet alone.

### Why does the hero gradient use three colors (indigo → violet → pink)?

The `#eef2ff → #f5f3ff → #fdf2f8` light gradient traces the brand spectrum from indigo through violet to pink, giving the hero a sense of depth and dimension even on a flat canvas. In dark mode the same logic applies but at much lower luminance — the gradient creates spatial depth without brightness.

### Why are `--accent2` and `--accent3` different in dark mode?

In light mode `--accent2` is violet (`#7c3aed`) and `--accent3` is pink (`#db2777`) — both saturated enough to read against the slate background. In dark mode they shift to softer variants (`#a78bfa`, `#f472b6`) — lighter in luminance so they don't disappear into the dark canvas.

### Why are shadows only 5× heavier in dark mode (`.4` vs `.08`)?

MultAI uses relatively shallow card depth compared to pure-dark-only themes. The `.4` shadow weight provides enough elevation cue on the near-black canvas without overwhelming the content-dense layout.

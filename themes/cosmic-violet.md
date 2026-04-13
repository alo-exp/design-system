# Theme: Cosmic Violet

The theme for the Sidekick product site. Dark-only — no light mode. Supplies actual values for every token slot used in the Sidekick docs site.

---

## Personality

**Dark-only canvas:** Near-black (`#0a0a0f`) with indigo-to-violet-to-pink brand gradient flowing through every gradient surface. More vibrant and multi-dimensional than Midnight Indigo — the gradient is brighter, the accent glow is stronger, and the button gradients animate between indigo and violet. Evokes AI sidekick energy: always active, always glowing, operating at cosmic scale.

The key visual difference from Midnight Indigo: the `--gradient-brand` is explicit and used on buttons, badges, and highlight elements — the gradient is a first-class design element, not just a hero backdrop.

**Mode support:** Dark only (single `:root` ruleset, no `[data-theme]` toggle).

---

## CSS Implementation

```css
/* ── DARK ONLY (:root, single theme) ──────────────────── */
:root {
  /* Backgrounds */
  --bg-page:         #0a0a0f;
  --bg-card:         #12121a;
  --bg-card-hover:   #181825;
  --bg-code:         #0d0d16;
  --bg-hero:         linear-gradient(160deg,
                       #060608 0%, #0a0a14 25%, #0d0d1c 48%,
                       #0f0f22 62%, #0a0a18 80%, #060610 100%);

  /* Navigation */
  --nav-bg:          rgba(10,10,15,.92);
  --nav-mobile-bg:   rgba(10,10,15,.99);

  /* Section tint */
  --section-alt:     rgba(18,18,26,.7);

  /* Brand accent — indigo */
  --accent:          #6366f1;
  --accent-light:    #818cf8;
  --accent-glow:     rgba(99,102,241,.18);

  /* Secondary accents */
  --accent2:         #7c3aed;
  --accent3:         #db2777;

  /* Brand gradients — first-class design elements */
  --gradient-brand:     linear-gradient(135deg, #4f46e5, #7c3aed, #db2777);
  --gradient-btn:       linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
  --gradient-btn-hover: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%);

  /* Semantic colors */
  --green:           #059669;
  --amber:           #d97706;
  --red:             #dc2626;
  --cyan:            #0891b2;

  /* Text */
  --text-primary:    #e8edf5;
  --text-secondary:  #c0cfde;
  --text-dim:        #8099b4;

  /* Borders */
  --border:          #1e293b;
  --border-hover:    #334155;

  /* Shadows */
  --shadow-lg:       0 20px 60px rgba(0,0,0,.7);
  --shadow-glow:     0 0 40px rgba(99,102,241,.08);

  /* Table */
  --table-row-hover: rgba(99,102,241,.03);
}
```

---

## Design Decisions

### Why dark-only?

Sidekick is an AI assistant product — it lives in the user's workflow, always-on, always ambient. A dark-only presentation reinforces this: the interface never "wakes up" into a bright mode, it's always in its natural state of focused darkness. The gradient provides all the visual warmth and energy the design needs.

### Why is `--gradient-brand` an explicit token?

Unlike Midnight Indigo (where the three accent colors are used independently), Cosmic Violet treats the indigo→violet→pink gradient as the primary brand expression. Buttons, badges, borders, and call-to-action elements all reference `--gradient-brand` directly. The gradient IS the logo.

### Why are `--text-secondary` and `--text-dim` warmer/brighter here (`#c0cfde`, `#8099b4`)?

Without a light mode to provide contrast relief, the dark canvas must work harder to create text hierarchy. Brighter secondary text (`#c0cfde` vs `#94a3b8` in Midnight Indigo dark) ensures body content stays legible on the very dark background without needing a brighter primary text.

### Why is `--shadow-lg` at `.7` opacity?

Dark-only themes have no "day mode" to calibrate against. At `.7`, card shadows are heavy enough to create clear elevation on the near-black canvas — but the background is so dark that users rarely notice how heavy the shadow values are.

### Why is `--accent-glow` stronger (`.18` vs `.15`)?

Sidekick's design emphasizes interactive glow states more than MultAI's documentation-first layout. The slightly stronger glow creates a more tactile, responsive feel on hover/focus states.

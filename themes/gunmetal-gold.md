# Theme: Gunmetal Gold

The theme for the TopGun product site. Dark-only — no light mode. Supplies actual values for every token slot used in the TopGun site.

---

## Personality

**Dark-only canvas:** Near-black gunmetal (`#09090e`) with amber/gold as the sole accent color. The `--chrome-gradient` is a multi-stop gold shimmer — not silver, but warm metallic gold — evoking military precision, excellence, and high-stakes performance. Every surface reads as forged metal in low light.

Unlike the indigo/violet themes, this palette is monochromatic-adjacent: everything is dark neutrals with gold as the only warm note. The result is tactical, premium, and authoritative — a "best of the best" feeling.

**Mode support:** Dark only (combined `:root` and `[data-theme="dark"]` ruleset — site ships with a single dark theme).

---

## CSS Implementation

```css
/* ── DARK ONLY (:root + [data-theme="dark"], single theme) */
:root,
[data-theme="dark"] {
  /* Backgrounds */
  --bg-page:         #09090e;
  --bg-card:         #181818;
  --bg-card-hover:   #17171f;
  --bg-code:         #0d0d14;
  --bg-hero:         linear-gradient(160deg,
                       #050507 0%, #09090f 25%, #0d0d18 48%,
                       #0f0f1c 62%, #0a0a14 80%, #060608 100%);

  /* Navigation */
  --nav-bg:          rgba(9,9,14,.92);
  --nav-mobile-bg:   rgba(9,9,14,.99);

  /* Section tint */
  --section-alt:     rgba(17,17,24,.7);

  /* Hero glow */
  --hero-glow:       rgba(245,158,11,.06);

  /* Brand accent — amber/gold */
  --accent:          #f59e0b;
  --accent-light:    #fbbf24;
  --accent-glow:     rgba(245,158,11,.18);

  /* Secondary accents */
  --accent2:         #d97706;
  --accent3:         #b45309;

  /* Chrome/gold shimmer gradient — product name treatment */
  --chrome-gradient: linear-gradient(90deg,
    #f59e0b  0%, #fde68a  9%, #f59e0b 18%, #d97706 27%,
    #fbbf24 36%, #fde68a 43%, #f59e0b 51%, #d97706 59%,
    #fbbf24 68%, #f59e0b 76%, #d97706 86%, #b45309 100%);

  /* Button gradient stops */
  --grad-1:          #92400e;
  --grad-2:          #b45309;
  --grad-3:          #d97706;
  --grad-4:          #f59e0b;

  /* Semantic colors */
  --green:           #059669;
  --amber:           #f59e0b;
  --red:             #dc2626;
  --cyan:            #0891b2;

  /* Text */
  --text-primary:    #f1f5f9;
  --text-secondary:  #c0cfde;
  --text-dim:        #64748b;

  /* Borders */
  --border:          #1e1e2e;
  --border-hover:    #3d3d5e;

  /* Shadows */
  --shadow-lg:       0 20px 60px rgba(0,0,0,.7);
  --shadow-glow:     0 0 40px rgba(245,158,11,.08);
}
```

---

## Design Decisions

### Why amber/gold instead of a cool-toned accent?

TopGun is about excellence and elite performance — both military metaphors and competition. Gold communicates this universally: awards, medals, rank insignia. An indigo or cyan accent would read as "tech product"; gold reads as "earned achievement."

### Why is `--chrome-gradient` warm gold (not silver like Silver Bullet)?

Silver Bullet uses a neutral steel chrome because the product name is literal ("bullet") and the brand is neutral-professional. TopGun's chrome shimmer uses gold tones (`#fde68a`, `#f59e0b`, `#d97706`) to reinforce the military-premium metaphor — it's a gold badge, not a steel tool.

### Why are `--border` and `--border-hover` blue-toned (`#1e1e2e`, `#3d3d5e`) when the accent is gold?

The slight blue-violet undertone in the dark borders (`#1e1e2e` reads as very dark blue-gray) creates a cool/warm tension that makes the gold accent pop even harder. If borders were also warm-tinted, the gold would feel less distinctive. The gunmetal background itself is near-neutral-black — the cool borders are invisible until hover, when the warmer `#3d3d5e` variant reveals depth.

### Why is `--bg-card` (`#181818`) pure gray while `--bg-page` (`#09090e`) has a blue tint?

The page background's subtle blue-violet undertone (`#09090e`) makes the gunmetal canvas feel more premium than flat black. But card surfaces are rendered as pure gray (`#181818`) to appear as "metal plates" — the contrast between the warm gold accent and the cool-neutral card surface creates the tactical, machined aesthetic.

### Why does `--grad-1` start at deep brown-amber (`#92400e`)?

Button gradients need depth to appear three-dimensional on a dark canvas. Starting at a very dark amber-brown (`#92400e`) and stepping up through `#b45309 → #d97706 → #f59e0b` creates a convincing backlit-gold effect — as if light is catching the edge of a metallic surface.

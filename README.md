# Ālo Labs — Product Design System

A complete guide to replicating the visual language, component library, and content structure used across all Ālo Labs product sites. Derived from the Silver Bullet site as the reference implementation.

---

## Documents

| File | Contents |
|------|----------|
| [tokens.md](tokens.md) | Token slot definitions — names, roles, and usage for all color, typography, spacing, radius, shadow, and motion tokens |
| [themes/silver-bullet.md](themes/silver-bullet.md) | **Reference theme** — all actual hex/rgba values for both light and dark modes, plus design rationale and adaptation guide |
| [components.md](components.md) | Every UI component with variants, states, CSS, and vanilla JS patterns (theme toggle, mobile nav, tabs, scroll animations, z-index layers) |
| [layout-patterns.md](layout-patterns.md) | Page skeletons, section patterns, grid systems, responsive design — full per-breakpoint spec for all 6 breakpoints |
| [content-guidelines-homepage.md](content-guidelines-homepage.md) | Homepage narrative structure, copy rules, section playbook |
| [content-guidelines-help-center.md](content-guidelines-help-center.md) | Help center architecture, page types, writing standards |

---

## Design Philosophy

These are fixed principles of the design system — they apply to every product regardless of theme.

**Single brand accent.** Each product has one accent color that drives all interactive elements: buttons, links, badges, borders, glows. One color, not a palette. The accent is perceptually matched across light and dark modes so it reads identically on any canvas.

**Space Grotesk + Fira Code.** The sans and mono pair is non-negotiable — they define the AI-native engineering aesthetic across all Ālo Labs products.

**Cards over prose.** Information is organized into scannable cards with consistent border/radius/hover treatment rather than long text blocks.

**Tokens, not values.** Every color, shadow, radius, and gradient references a CSS custom property. No hardcoded hex values in component CSS. `tokens.css` is the only file that contains values — everything else references tokens.

**Two-mode theming.** Every product ships with two modes: a default mode and an alternate. The default is chosen per product based on its audience and aesthetic. The toggle is always user-controlled and persisted via `localStorage`.

---

## Themes

Color choices — background palette, accent values, shadow weights, text tones — belong to the **theme**, not the design system. The design system defines token names and roles; themes supply the values.

```
design-system/tokens.md        ← token slots (names + roles, no values)
design-system/themes/*.md      ← one file per theme with all actual values
site/tokens.css                ← the active theme implemented in CSS
```

To create a new product theme: see the **Adapting for a New Product** section in [`themes/silver-bullet.md`](themes/silver-bullet.md).

---

## CSS Architecture

```
site/tokens.css          ← active theme (link on every page)
site/index.html <style>  ← homepage component CSS
site/help/**/index.html  ← help-page component CSS (scoped per page)
```

All pages link `tokens.css`. Component CSS lives inline in `<style>` per page. No external CSS framework.

---

## Theme Toggle

Every page implements identical theme toggle logic. The `localStorage` key and default mode are the only product-specific variables.

```html
<!-- In <head> — prevents flash of wrong theme -->
<script>
  document.documentElement.setAttribute(
    'data-theme',
    localStorage.getItem('{product}-theme') === 'light' ? 'light' : 'dark'
  );
</script>
```

```js
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('icon-sun').style.display  = dark ? 'none' : '';
  document.getElementById('icon-moon').style.display = dark ? '' : 'none';
  localStorage.setItem('{product}-theme', dark ? 'dark' : 'light');
}
function toggleTheme() {
  applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
}
(function () {
  const s = localStorage.getItem('{product}-theme');
  applyTheme(s === 'light' ? false : true);  // default: dark
})();
```

Replace `{product}` with the product slug (e.g. `silver-bullet`). To default to light instead, swap the fallback: `applyTheme(s === 'dark' ? true : false)`.

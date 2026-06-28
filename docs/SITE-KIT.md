# Ālo Site Kit — Integration Guide

Use this guide when adding Ālo Labs chrome to a new or existing static site.

## Prerequisites

- Static HTML site (no framework required)
- `python3` for chrome scripts
- `jq` optional (for editing `site.config.json`)
- Node + `npx` optional (for `designmd lint`)

## Directory layout (consumer project)

```
your-project/
├── site.config.json          # product-specific chrome config
├── site/
│   ├── _chrome/              # generated nav/footer/help-subnav (do not hand-edit)
│   ├── tokens.css            # copied from kit
│   ├── chrome.css
│   ├── chrome.js
│   ├── neutral-variants.css
│   ├── fonts/
│   ├── help/
│   │   └── common.js
│   ├── index.html
│   └── help/...
└── scripts/
    ├── render-chrome.py
    ├── apply-site-chrome.py
    └── chrome-templates/     # copied from kit/_chrome
```

## Bootstrap

From a clone of this repo:

```bash
bash scripts/bootstrap-alo-site.sh /path/to/your-project
```

Or manually `rsync kit/` → `site/` (excluding `_chrome`), copy scripts, create `site.config.json`.

## site.config.json

| Field | Purpose |
|-------|---------|
| `product_name` | Nav wordmark + footer brand |
| `logo_path` | Filename under `site/` (e.g. `silver-bullet.png`) |
| `github_url` | Nav CTA + mobile GitHub link |
| `copyright_year` | Footer |
| `theme_storage_key` | Primary `localStorage` key for theme |
| `theme_storage_key_legacy` | Optional second key (migration) |
| `alpha_badge_html` | HTML inside nav wordmark (or empty) |
| `nav_links_html` | `<li>` entries; use `{{ROOT}}` for relative roots |
| `chrome_version` | Cache-bust query on `chrome.css` / `chrome.js` |

After editing config:

```bash
python3 scripts/render-chrome.py --project .
```

## HTML page requirements

### Every page

```html
<html lang="en" data-theme-key="your-theme-key" data-theme-key-legacy="">
<head>
  <script>(function(){try{var t=localStorage.getItem('your-theme-key');
  document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');
  }catch(e){}})();</script>
  <link rel="stylesheet" href="tokens.css">
  <!-- chrome.css injected by apply-site-chrome.py -->
</head>
<body>
  <nav>...</nav>   <!-- placeholder; replaced by apply-site-chrome.py -->
  ...
  <footer>...</footer>
</body>
```

`apply-site-chrome.py` adds `chrome.css`, `chrome.js`, Lucide, and replaces `<nav>` / `<footer>` from `site/_chrome/`.

### Help pages

- Path under `site/help/`
- Body class `has-help-subnav` added by apply script
- Link `neutral-variants.css` on help pages (apply script injects)
- Set `data-neutral-variant="s3"` on `<html>` for home-style icons
- Include `help/common.js` and `search.js` as needed

## Workflow after content edits

```bash
# 1. Edit site.config.json if nav/footer branding changed
python3 scripts/render-chrome.py --project .

# 2. Edit HTML content
# 3. Re-apply chrome fragments
python3 scripts/apply-site-chrome.py --site site

# 4. Validate
bash /path/to/design-system/scripts/validate-kit.sh
```

## Customizing accent / theme

1. Change values in `site/tokens.css` (`:root` and `[data-theme="dark"]`).
2. Keep token **names** aligned with `DESIGN.md` and `docs/TOKEN-REFERENCE.md`.
3. Do not hardcode hex in page `<style>` blocks — use `var(--token)`.
4. Run `designmd lint DESIGN.md` if you update the contract.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Inline nav/footer CSS in pages | Remove — owned by `chrome.css` |
| Per-card `box-shadow` on hover | Use unified card surface selectors |
| Dark default without early head script | Flash of wrong theme; add theme boot script |
| Editing `site/_chrome/*.html` by hand | Edit `site.config.json` + `render-chrome.py` |
| Space Grotesk / Inter fonts | Use D-Din from `kit/fonts/` |

## Reference implementation

[alo-exp/silver-bullet](https://github.com/alo-exp/silver-bullet) `site/` is the production reference. This kit is extracted from that tree and kept in sync via regression tests.

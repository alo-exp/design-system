# Ālo Site Kit

**One-stop source for exact Ālo Labs product-site look-and-feel.** Ship marketing pages and help centers that match Silver Bullet and other Ālo products without reverse-engineering CSS from a live repo.

This repository replaces the old Wyzr-era theme docs (Space Grotesk, dark-default, per-theme markdown files). Everything you need lives in `kit/`, `DESIGN.md`, and `scripts/`.

---

## What's in the box

| Path | Role |
|------|------|
| [`DESIGN.md`](DESIGN.md) | Agent-facing design contract ([design.md](https://github.com/google-labs-code/design.md) spec) — typography, colors, components, layout |
| [`kit/tokens.css`](kit/tokens.css) | All CSS custom properties + D-Din `@font-face` (single source of truth for values) |
| [`kit/chrome.css`](kit/chrome.css) | Shared nav, footer, help subnav, theme toggle, z-index stack |
| [`kit/chrome.js`](kit/chrome.js) | Theme persistence + mobile nav + Lucide init |
| [`kit/neutral-variants.css`](kit/neutral-variants.css) | Help-center neutral palette + s3 home icon variant |
| [`kit/help/common.js`](kit/help/common.js) | Help sidebar / breadcrumb helpers |
| [`kit/_chrome/`](kit/_chrome/) | Parameterized nav/footer/help-subnav HTML templates |
| [`kit/fonts/`](kit/fonts/) | D-Din webfonts (OFL) |
| [`site.config.example.json`](site.config.example.json) | Product name, logo, GitHub URL, nav links, theme localStorage keys |
| [`scripts/`](scripts/) | Bootstrap, render chrome, apply chrome, validate |
| [`docs/SITE-KIT.md`](docs/SITE-KIT.md) | Integration guide for new projects |
| [`docs/TOKEN-REFERENCE.md`](docs/TOKEN-REFERENCE.md) | Token catalog from shipped CSS |
| [`examples/`](examples/) | Starter page + regression fixtures |
| [`cmf/`](cmf/) | **Content Messaging Framework v3.0** — required for content revamps |
| [`skills/alo-site-revamp/`](skills/alo-site-revamp/SKILL.md) | Agent skill: full design + CMF site revamp workflow |

---

## Content revamps (CMF)

Visual standardization alone is not enough. Every homepage narrative overhaul must follow the **Content Messaging Framework (CMF) v3.0** — the same scaffold used for the Silver Bullet site revamp.

| Path | Role |
|------|------|
| [`cmf/CMF-v3.md`](cmf/CMF-v3.md) | 14-component framework (three acts, compression rules) |
| [`cmf/WORKSHEET-TEMPLATE.md`](cmf/WORKSHEET-TEMPLATE.md) | Fill per product before writing copy |
| [`cmf/examples/`](cmf/examples/) | Completed worksheets (Silver Bullet, Sidekick, …) |

**Agent workflow:** invoke skill **`alo-site-revamp`** — researches target repo, fills CMF worksheet, bootstraps kit, rewrites `site/`, applies chrome, validates.

---

## Quick start (new project)

```bash
git clone https://github.com/alo-exp/design-system.git
cd design-system
bash scripts/bootstrap-alo-site.sh /path/to/your-project
```

Then:

1. Edit `/path/to/your-project/site.config.json` — product name, logo, nav links, theme keys.
2. Re-render chrome: `python3 scripts/render-chrome.py --project /path/to/your-project`
3. Add HTML under `site/` (include `<nav>` and `<footer>` placeholder blocks).
4. Apply chrome: `python3 scripts/apply-site-chrome.py --site /path/to/your-project/site`
5. Lint the contract: `npx -p @google/design.md designmd lint DESIGN.md`

Every page must link `tokens.css` and use `data-theme="light"` as default (light-first). See [`docs/SITE-KIT.md`](docs/SITE-KIT.md) for the full checklist.

---

## Design principles (fixed across all Ālo sites)

- **D-Din + SB Plex Mono** — not Space Grotesk / Fira Code
- **Light-first** — `data-theme="light"` default; user toggle persisted in `localStorage`
- **Single green accent** (`--accent`) with perceptually matched light/dark values
- **Tokens, not literals** — component CSS references `var(--*)` only; values live in `tokens.css`
- **Unified card surface** — faint border at rest, `--card-shadow-hover` on hover (no per-card shadow overrides)
- **Shared chrome** — nav height, help subnav (72px), footer, and theme toggle from `chrome.css` / `_chrome/` partials

---

## Validation

```bash
bash scripts/validate-kit.sh
```

Runs chrome regression tests against `kit/` and lints `DESIGN.md`.

---

## For AI agents building Ālo sites

1. Read **`DESIGN.md`** first — it is the authoritative visual contract.
2. Read **`cmf/CMF-v3.md`** — required for any content revamp (not optional).
3. Invoke skill **`alo-site-revamp`** for end-to-end design + content overhaul.
4. Copy or bootstrap **`kit/`** — do not invent parallel token files.
5. Customize via **`site.config.json`** only for product-specific strings (name, links, logo).
6. Run **`apply-site-chrome.py`** after editing HTML so nav/footer/help subnav stay canonical.
7. Run **`tests/test-chrome-regression.sh`** before claiming visual parity.

`DESIGN.md` alone gets ~80–90% parity. Full replication requires the kit assets above.

---

## License

Kit fonts: D-Din (SIL Open Font License) — see [`kit/fonts/D-DIN-OFL.txt`](kit/fonts/D-DIN-OFL.txt).  
Repository: see [`LICENSE`](LICENSE).

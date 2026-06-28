---
name: alo-site-revamp
description: >-
  Revamp a product marketing site to Ālo Labs look-and-feel (design-system kit)
  and CMF v3.0 content architecture. Use when rebuilding homepage/help, applying
  Alo site kit, content messaging framework, or standardizing product sites to
  match sb.alolabs.dev.
---

# Ālo Site Revamp

End-to-end workflow: **research product repo → CMF worksheet → design kit → HTML → chrome → validate**.

## Prerequisites

- Clone or open [alo-exp/design-system](https://github.com/alo-exp/design-system)
- Target project with `site/` (or create via bootstrap)
- `python3`, `bash`, optional `npx` for `designmd lint`

## Phase 0 — Orient

1. Read [`DESIGN.md`](../../DESIGN.md) (visual contract).
2. Read [`cmf/CMF-v3.md`](../../cmf/CMF-v3.md) (content contract).
3. Read [`docs/SITE-KIT.md`](../../docs/SITE-KIT.md) (integration).

## Phase 1 — Product research (mandatory)

In the **target product repo** (not design-system), read at minimum:

| Source | Extract |
|--------|---------|
| `README.md` | Value prop, hosts, version, install |
| `context.md` / `AGENTS.md` / `PRD` / `site/PRD-Overview.md` | Audience, non-goals, verification rules |
| `skills/*/SKILL.md` | Workflows, activation commands |
| `hooks/` | Enforcement behavior (proof for C7) |
| `tests/` | What “done” means (honest claims) |
| Existing `site/index.html` | Salvage accurate facts only — do not keep old design tokens |

**Output:** Bullet list of pains, mechanism, proof artifacts, objections, install path.

## Phase 2 — CMF worksheet

1. Copy [`cmf/WORKSHEET-TEMPLATE.md`](../../cmf/WORKSHEET-TEMPLATE.md) → `cmf/examples/<product>-worksheet.md` in design-system **or** `.planning/cmf-worksheet.md` in target repo.
2. Fill every component using Phase 1 research.
3. Define **Component → section map** with `#anchor` IDs matching nav in `site.config.json`.
4. Reference [`cmf/examples/silver-bullet-worksheet.md`](../../cmf/examples/silver-bullet-worksheet.md) for tone and compression.

**Gate:** Do not write homepage HTML until the worksheet has C1–C7 drafts minimum.

## Phase 3 — Bootstrap Ālo site kit

From design-system repo:

```bash
bash scripts/bootstrap-alo-site.sh /path/to/target-repo
```

Edit `/path/to/target-repo/site.config.json`:

- `product_name`, `logo_path`, `github_url`, `theme_storage_key`
- `nav_links_html` with `{{ROOT}}` anchors matching CMF sections
- `alpha_badge_html` if pre-release

```bash
python3 /path/to/target-repo/scripts/render-chrome.py --project /path/to/target-repo
```

## Phase 4 — Homepage HTML

Build `site/index.html`:

1. Link `tokens.css`, `chrome.css`, `chrome.js` (apply script will ensure versions).
2. `data-theme-key` on `<html>` matching config.
3. Light-first theme boot script in `<head>`.
4. Placeholder `<nav>` and `<footer>` blocks.
5. Sections in **CMF order** with HTML comments: `<!-- CMF C2: PROBLEM -->`.
6. Use **unified card surface** from kit (faint border, `--card-shadow-hover` on hover).
7. **No** Space Grotesk, Inter, or inline token hex — `var(--*)` only.
8. D-Din typography comes from `tokens.css` — do not add Google Fonts.

### Required sections (compress per worksheet)

| CMF | Minimum deliverable |
|-----|---------------------|
| C1 | Hero headline + subtitle + primary/secondary CTA |
| C2 | 6+ pain cards in buyer language |
| C3 | Stakes grid (4 dimensions) |
| C4 | Future-state micro + transformation card |
| C5 | Guide empathy + authority |
| C6 | Mechanism + how-it-works diagram or steps |
| C7 | Proof (hooks, verification loop, open source) |
| C8–C10 | FAQ/objections + install + risk reversal |
| C12 | Install CTA block |

## Phase 5 — Help center (if present)

For each `site/help/**/*.html`:

- Link `tokens.css`, `neutral-variants.css`, `chrome.css`
- `data-neutral-variant="s3"` on help pages
- Run chrome apply script (adds subnav, `has-help-subnav`)

Update copy only where product facts drifted; align help hero with CMF C5/C6.

## Phase 6 — Apply chrome

```bash
python3 scripts/apply-site-chrome.py --site /path/to/target-repo/site
```

Fix any `SKIP` errors (missing nav/footer placeholders).

## Phase 7 — Validate

```bash
bash /path/to/design-system/scripts/validate-kit.sh
```

In target repo, spot-check:

- Theme toggle persists
- Mobile nav closes on link click
- Nav anchors scroll to CMF sections
- No duplicate nav/footer CSS in inline `<style>`

## Phase 8 — Document

- Save completed worksheet under `cmf/examples/<product>-worksheet.md`
- Note version synced in homepage meta/OG tags

## Subagent policy (Cursor)

Delegate HTML/CSS implementation to **Task** subagents with `model: "composer-2.5"` only. Parent orchestrates phases; workers edit `site/**`.

## Anti-patterns

| Do not | Do instead |
|--------|------------|
| Reskin old copy without CMF worksheet | Phase 2 first |
| Invent customer logos or % lifts | C7 honest proof only |
| Keep dark-default / Space Grotesk | Bootstrap kit |
| Hand-edit `site/_chrome/*.html` | `site.config.json` + render-chrome |
| Skip `apply-site-chrome.py` | Always run after HTML edits |

## Reference implementation

- Design + kit: this repo
- Content: [`cmf/examples/silver-bullet-worksheet.md`](../../cmf/examples/silver-bullet-worksheet.md)
- Live site: https://sb.alolabs.dev

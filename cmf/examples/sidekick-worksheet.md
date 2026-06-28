# CMF Worksheet v3.0 — Sidekick Homepage

**Framework:** Content Messaging Framework v3.0  
**Product:** Sidekick — AI coding-agent delegation for Claude Code, Codex, and Cursor  
**Audience:** Host AI users (Claude Code, Codex, Cursor) who delegate implementation but need verification discipline  
**Date:** 2026-06-24  
**Research basis:** `sidekick/repo/README.md`, `context.md`, `site/PRD-Overview.md`, `skills/*-delegate/SKILL.md`, hooks

---

## Component → Homepage Section Map

| CMF # | Component | Homepage section | Nav anchor |
|-------|-----------|------------------|------------|
| 1 | Identity Hook | Hero | (top) |
| 2 | Problem Articulation | `#problem` | Problem |
| 3 | Agitation / Stakes | stakes callout | Problem |
| 4 | Aspirational Future State | `#future` | What If |
| 5 | Guide Introduction | `#guide` | How It Works |
| 6 | Solution / Unique Mechanism | `#mechanism` + `#sidekicks` | How It Works / Sidekicks |
| 7 | Evidence & Proof | `#proof` | How It Works |
| 8 | Objection Handling | `#faq` | (inline) |
| 9–11 | Offer + risk + CTA | `#install` | Install |

---

## Component 1: Identity Hook

**Headline:** *Your host AI plans. Your sidekick ships. You verify before anyone merges.*

**Value proposition:** *Delegated Kay and Codex implementation with hook-enforced host accountability.*

---

## Component 2: Problem — 6 pain cards

1. Host edits files while a sidekick is active — bypassing delegation  
2. Child runtime says “done” but host never re-runs tests  
3. Kay and Codex state collides without session-scoped markers  
4. Progress output floods context — no bounded summaries  
5. No shared pattern across Claude, Codex, and Cursor hosts  
6. Cost thesis: frontier models used for work a sidekick could run  

---

## Component 3: Stakes

Financial · Time · Opportunity · Emotional — rework from unverified sidekick output; mistrust of “agent finished” claims.

---

## Component 4: Future state

Monday PR queue: host reviewed every diff, tests green, sidekick relaunched on failure — same hosts, lower token burn on implementation.

---

## Component 5: Guide

Empathy: delegation without verification is theater. Authority: session-gated hooks, registry-aligned sidekicks, host-owned verification loop. Method: Brain/Hands split with `active-sidekick` marker.

---

## Component 6: Mechanism

Category: Host-aware delegation plugin. Mechanism: PreToolUse blocks host edits when sidekick active; PostToolUse surfaces bounded progress; host verifies before accept.

---

## Component 7: Proof

Open source MIT · v0.8.4 · Kay `kay exec` + Codex `codex exec` · hooks in `hooks/` · tests `run_unit.bash` — no fake testimonials.

---

## Component 8: Objections

| Objection | Response |
|-----------|----------|
| “I can just use Task/subagents” | Sidekick enforces session state across hosts; subagents don’t block host edits |
| “Another plugin” | Install once; works with existing Kay/Codex CLIs |
| “Kay vs Codex?” | One active per session; mutual exclusion by design |

---

## Components 9–10: Install + risk reversal

Primary: Install Sidekick · Secondary: GitHub, Help. Risk: MIT OSS, stop commands, no auto-install of Codex CLI.

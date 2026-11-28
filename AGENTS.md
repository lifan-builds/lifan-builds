# lifan-builds guidance

Standalone public repository (`github.com/lifan-builds/lifan-builds`), nested locally under `self-promoting/lifan-builds/` (ignored by `self-promoting/.gitignore`). Owns two live public surfaces:

1. **GitHub `<user>/<user>` profile (`README.md`, `avatar/`):** Preserve intentional HTML alignment, 2-column build table, Shields badges, and exact `./avatar/` paths and casing. Never add unstable third-party stat-card renderers (`github-readme-stats`) or private repository links.
2. **`clifan.com` GitHub Pages (`docs/`, `docs/CNAME`):** Static vanilla HTML/CSS/JS site featuring:
   - Dual-mode home (`docs/index.html`, `docs/site.js`, `docs/styles.css`): Cover Portal (`#cover-portal`) ↔ Full Workbench (`#full-workbench`).
   - 13 hosted flagship showcase subpages under `docs/<slug>/`: `faster-mac-use`, `poe2brain`, `agent-autofill`, `quotaswitch`, `close-snow`, `perks-reminder`, `clearcut`, `freshpowder`, `foliofen-cli`, `echoframe`, `ai-builder-brief`, `castforge`, and `nitan-podcast`.
   - 3-track Builder Journal (`docs/journal/index.html`): `Quick Thoughts` (bilingual EN/ZH toggles), `Essays`, and `Daily AI Builder Briefs` (`docs/journal/ai-builder-brief/`).

## Per-release asset contract (`docs/<slug>/`)

Every hosted showcase build requires:

- `docs/<slug>/index.html`: `<= 600` visible `<main>` words, `0` `<em>` tags inside `<h1>`, `<= 1` `[role="tablist"]` per `<section>`, valid `<link rel="canonical">`, `og:image`, and `twitter:card="summary_large_image"`, plus synced `clifan-theme` `localStorage` light/dark support and `<kbd>T</kbd>` keyboard toggle.
- Visuals & topology: unique `1500x600` `cover.jpg`, `1200x630` `og.jpg`, custom interactive `BUILD_DATA.<slug>.diagram` SVG in `docs/site.js`, and optional 60fps `yuv420p` B-roll loop (`<= 3.5 MB`) generated via `python3 ../scripts/generate_portfolio_visuals.py` and `python3 ../scripts/render_broll.py` — inspect every generated plate, `5:2` crop, poster, and keyframe strip directly (`read_file`) to confirm zero baked-in/garbled AI text, zero generic AI slop, and unclipped framing.

## Mandatory verification & push gate

- Run `python3 ../scripts/sync_clifan.py` whenever daily briefs, essays, or Quick Thoughts change so `docs/index.html`, `docs/feed.xml`, and `docs/sitemap.xml` stay synchronized.
- Run `python3 ../scripts/audit_clifan.py` before proposing any commit or push; require `0` broken internal links/anchors, `0` public hygiene/404-package leaks, `0` `impeccable` anti-pattern findings, `0px` horizontal overflow across desktop (`1280x920`) and mobile (`390x844`) in both Light and Dark themes, and `0` broken media/OG tags or external GitHub raw image hotlinks.
- Never store secrets, private repo links (e.g., `close-snow` GitHub URL), or unapproved drafts in this public repository.
- Running `git push` to `lifan-builds/lifan-builds` deploys live to GitHub and `clifan.com` and requires explicit action-time user confirmation.

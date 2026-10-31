# ethereus-site

Astro site for [Ethereus](https://github.com/fraserbrownirl/ethereus) — an EVM agent whose guardrails and arithmetic live in its weights.

- Frontend-only: no Python, no weights. Core research lives in `fraserbrownirl/ethereus`.
- Stack: Astro 5 · plain CSS · hand-written themed SVGs · `evidence.json` + `status.json`
- Spec: `docs/website-build-spec.md` in the core repo is the source of truth for every technical claim.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
```

## Editing

- Copy lives in `src/pages/*.astro` (verbatim from the spec on `/`, `/how-it-works`, `/roadmap`).
- Figures: `src/components/Figure*.astro` — inline SVG that inherits `var(--bg/--ink/--accent)`.
- Numbers: `src/data/evidence.json` — every number has `source_url` + `measured_on`; `status: not-yet-measured` renders a badge, never a `[bracket]`.
- Phase chips: `public/status.json` — fetched at runtime so chips change without a redeploy; also backed by build agent (Muse).

## Deploy

Push to `feat/site-v1` → PR → preview deploy → merge to `main` → Cloudflare Pages / Vercel (static).
`main` is protected (no force-push, no delete). Lighthouse target: ≥95 on all four scores on mobile.

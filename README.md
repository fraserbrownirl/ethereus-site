# ethputer-site

Astro site for [Ethputer](https://github.com/fraserbrownirl/ethereus) — EVM logic in the weights.

This repository is **frontend-only**. The research code and measurements live in `fraserbrownirl/ethereus`; numbers on the site are sourced from that repo and from the Qwenputer paper — see `src/data/evidence.json` for provenance.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview
```

Update copy via Markdown/`.astro` in `src/pages/`, figures in `src/figures/`, numbers in `src/data/evidence.json`, and phase chips in `public/status.json`.

See `docs/website-build-spec.md` in the core repo for the canonical spec.

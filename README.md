# Helix Orbital PWA

Phone-friendly PWA wrapper around the Helix Orbital factory / launch game. Same gameplay build, plus on-screen sticks and action buttons for touch devices.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL on your phone (same Wi‑Fi), or use Chrome device mode.

## Install as PWA

1. Deploy or serve over HTTPS (`npm run build && npm run preview`, or Vercel).
2. On iPhone: Safari → Share → **Add to Home Screen**.
3. On Android: Chrome → menu → **Install app** / **Add to Home screen**.

Landscape works best for dual sticks.

## Controls (phone)

| Control | Action |
| --- | --- |
| Left stick | Move (WASD) |
| Right pad | Look |
| E | Interact / sign off |
| Sprint | Hold to sprint |
| Map / View / Speed / Mute / Close | Same as M / Tab / F / V / Q |
| 1–4 | Flight cameras |

Desktop keyboard and mouse still work; the overlay only shows on touch / coarse-pointer / narrow viewports.

## Notes

Game assets were cloned from the published build. Textures and audio are still generated in-browser.

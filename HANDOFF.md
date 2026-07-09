# oche.design - Claude Code Handoff

## Current Project

Personal portfolio for **Oche Ogbole**, Senior UI Developer and Designer in Toronto.

The site is being shaped into a polished, image-led portfolio for senior UI/front-end roles. The current design direction borrows the structure and motion feel of By&Studio while staying honest to Oche's work: real screenshots, strong typography, dark selected-work section, restrained motion, and direct proof paths.

## Project Location

```bash
cd /Users/mjv273/Documents/oche-design-app
```

## Stack

- Next.js 16.2.10 App Router
- React 19.2.4
- Tailwind CSS v4
- TypeScript
- Local font: Neue Haas Grotesk Display Pro
- Hosted/deployed on Vercel, but latest redesign is not pushed/deployed yet

## Important Files

- `src/app/page.tsx` - page composition
- `src/app/globals.css` - design tokens, font, motion, hover styles
- `src/app/layout.tsx` - metadata and global shell
- `src/components/Nav.tsx`
- `src/components/Hero.tsx`
- `src/components/Work.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `PRODUCT.md` - strategic project/design brief
- `BYANDSTUDIO_DNA.md` - extracted reference DNA from By&Studio
- `MISSING_ITEMS.md` - live checklist of unfinished assets and next steps
- `scripts/build_resume_pdf.mjs` - rebuilds the website-matched resume PDF
- `public/resume.pdf` - resume used by nav/contact buttons

## Design System

Current visual language:

- Font: `NHaasGroteskDSPro` loaded from `public/fonts/NHaasGroteskDSPro-55Rg.otf`
- Body background: `--bone #f4f1eb`
- Main text: `--graphite #11110f`
- Muted text: `--graphite-muted #756f65`
- Dark work/contact background: `--graphite`
- Accent color used sparingly: `--signal #b6ff4d`
- Buttons are rectangular, not rounded
- Main nav links have animated underline hover
- CTAs are filled by default and become stroke/outline on hover
- Contact arrow uses `public/arrow-up-right.svg` and moves 4px up/right on hover

Motion notes:

- Motion tokens live in `globals.css`
- Easing: `--ease-brand: cubic-bezier(0.65, 0, 0.17, 0.98)`
- Keep animations restrained and purposeful
- Respect reduced motion

## Current Work Section

Projects currently listed:

| # | Project | Status | Notes |
|---|---|---|---|
| 001 | Gameslayer Challenge App | Concept | Uses 3 uploaded app screens |
| 002 | Mode Law | Live | Uses new renamed asset `mode-law-hero-web.jpg` |
| 003 | CENTRA NL | Live | Needs screenshot still |
| 004 | Fire Fix Business Lead Generator | Planned | Replaced old Money Banking App placeholder |
| 005 | DeFi On-Ramp Platform | Case Study | Needs direct project link/screens |
| 006 | Smart Africa Network | In Progress | Uses uploaded hero screenshot |

Important correction:

- Gameslayer was designed but did not go to production. Keep it as `Concept`, not shipped.
- Future Gameslayer work should include tournament creation, match results, wallet, and profile flows, but that can be a separate session.

## Assets Added

### Fonts

- `public/fonts/NHaasGroteskDSPro-55Rg.otf`

### Icons

- `public/arrow-up-right.svg`

### About

- Original: `public/about/oche-ogbole.jpg`
- Optimized: `public/about/oche-ogbole-web.jpg`
- About image display size requested by user:
  - width: `302.75px`
  - height: `371.555px`
  - centered

### Gameslayer

- `public/work/gameslayer/friends.png`
- `public/work/gameslayer/challenge-friends.png`
- `public/work/gameslayer/challenge-selected-game.png`

### Mode Law

- New source asset:
  - `public/work/modelaw/mode-law-hero-source.png`
- Optimized asset currently used:
  - `public/work/modelaw/mode-law-hero-web.jpg`

Old Mode Law assets still exist but are not currently used:

- `public/work/modelaw/homepage-full.png`
- `public/work/modelaw/homepage-web.jpg`

Do not delete unless the user approves cleanup.

### Smart Africa

- Source:
  - `public/work/smart-africa/hero.png`
- Optimized asset currently used:
  - `public/work/smart-africa/hero-web.jpg`

## Resume

The user provided the source resume DOCX:

```text
/Users/mjv273/Desktop/Oche Ogbole - Resume.docx
```

The resume was rebuilt to match the website typography and direction:

- Site PDF: `public/resume.pdf`
- Download copy: `/Users/mjv273/Downloads/Oche_Ogbole_Resume_Website.pdf`
- Builder script: `scripts/build_resume_pdf.mjs`

The script uses Playwright with local Chrome because the OTF could not be embedded cleanly via ReportLab.

## Recent User Requests Completed

- Switched site typography to Neue Haas Grotesk.
- Added Gameslayer screenshots.
- Added Mode Law screenshot, then replaced it with a newer renamed asset.
- Added Smart Africa screenshot.
- Added About photo.
- Rebuilt resume to match website.
- Removed hero badge: "Toronto / Open to Senior UI Developer roles".
- Removed stats: `5+ years`, `10+ projects`, `3 live apps`.
- About image centered and sized exactly.
- Mode Law and Smart Africa thumbnails use `object-contain` instead of cropped `object-cover`.
- Removed visible phrases like "live website screenshot" and "hero concept screenshot".
- Disabled hover effect on Technologies & Tools chips.
- Replaced Money Banking App with Fire Fix Business Lead Generator.
- Removed em dashes from website source.
- Added animated nav underline for Work/About/Contact.

## Validation Status

Last checks passed:

```bash
npm run lint
npm run build
```

Both passed after the latest nav underline change.

## Dev Server

Use:

```bash
npm run dev -- -p 3001
```

The in-app browser is currently pointed at:

```text
http://localhost:3001/
```

If port 3001 is stale/busy, stop the old Next process or use another port.

## Git State

There are many uncommitted changes. Do not reset or revert user work.

Expected changed/untracked items include:

- Modified components in `src/components`
- Modified `src/app/globals.css`
- Modified `src/app/layout.tsx`
- New documentation files: `PRODUCT.md`, `BYANDSTUDIO_DNA.md`, `MISSING_ITEMS.md`, updated `HANDOFF.md`
- New assets under `public/about`, `public/work`, `public/fonts`
- New `public/resume.pdf`
- New `scripts/build_resume_pdf.mjs`

## Next Best Steps

1. Review visually in browser at desktop and mobile sizes.
2. Capture/add CENTRA NL screenshot.
3. Add screenshots for DeFi On-Ramp Platform.
4. Start Fire Fix Business Lead Generator project or add a placeholder visual only when there is real proof.
5. Consider building case-study pages under `/work/[slug]`.
6. Clean up unused large Mode Law source images only after user approval.
7. Push to GitHub after user approves the visual direction.
8. Buy/connect `oche.design`.

## User Preferences

- Keep language plain and non-technical.
- Be concise and scannable.
- Warm, direct tone.
- User is iterating visually and may upload assets as they go.
- Prefer not to invent fake project proof. If a project does not have screenshots/prototypes yet, mark it honestly as planned or pending.

## Vercel Note

Vercel CLI in this environment was reported as slightly outdated. Before deployment work, recommend upgrading:

```bash
npm i -g vercel@latest
```

or

```bash
pnpm add -g vercel@latest
```

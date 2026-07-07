# oche.design — Portfolio Spec Sheet

## Project Overview
- **Project Name:** oche.design
- **Owner:** Oche Ogbole
- **Goal:** Showcase UI development and design work; support job applications (current target: Senior UI Developer at Citi)
- **Target Audience:** Hiring managers and recruiters at tech and financial companies
- **Domain:** oche.design
- **Tech Stack:** Next.js 14 (App Router) + Tailwind CSS
- **Hosting:** Vercel

## Brand Identity
| Property | Value |
|---|---|
| Vibe | Clean & Minimal — Lots of whitespace, typography-led |
| Font (headings) | Inter (system-ui fallback) |
| Font (body) | Inter |
| Background | #ffffff (primary), #f9fafb (alternating sections) |
| Primary Text | #0f172a (slate-900) |
| Secondary Text | #64748b (slate-500) |
| Accent | #2563eb (blue-600) |
| Monogram | "OO" — geometric, bold, black |
| Design Inspiration | Linear.app, stripe.com/jobs |

## Tagline
> "Senior UI Developer · Designer · Builder"

## Contact & Social
| Channel | Value |
|---|---|
| Email | ogboleoche75@gmail.com |
| GitHub | github.com/ogboleoche75-maker |
| LinkedIn | linkedin.com/in/oche-ogbole-9933a9231 |
| Behance | behance.net/ocheogbole71 |

## Site Sections

### 1. Hero
- Full-viewport opening section
- OO monogram (top-left as nav logo)
- Nav links: Work, About, Contact, Resume (download)
- Large headline: "Oche Ogbole"
- Subheadline: "Senior UI Developer · Designer · Builder"
- Short descriptor: "I build interfaces that feel effortless — from concept to production."
- CTA buttons: "View Work" (scrolls to projects) + "Get in Touch"
- Subtle fade-in animation on load

### 2. Work / Projects (4 cards)
- Grid of project cards (2-col desktop, 1-col mobile)
- Each card: project image/mockup placeholder, name, tags (e.g. "Fintech · UI Design"), short description
- Projects:
  1. **Money Banking App** — Fintech mobile UI, React Native · Figma
  2. **Smart Africa Network** — Web redesign in progress, Next.js · Tailwind
  3. **DeFi On-Ramp Platform** — Crypto/Web3 UI design, Figma · Product Design
  4. **Wailo / Gameslayer App** — Mobile gaming platform, React Native · JavaScript
- "View Case Study" link per card (links to Behance for now)

### 3. About
- Short 3-sentence bio
- Skills displayed as clean tag chips (not a wall of text)
- Key tools: React, Next.js, TypeScript, Figma, Tailwind, React Native

### 4. Contact
- "Let's work together" heading
- Email link + LinkedIn + GitHub icons
- Optional: resume download button

### 5. Footer
- Copyright line
- Minimal — just name + year

## Responsiveness
- Desktop: Full layout, 2-col project grid
- Tablet: Single column, adjusted nav
- Mobile: Hamburger or stacked nav, 1-col grid

## Interactions & Animations
- Fade-in on page load (hero only)
- Smooth scroll between sections
- Project cards: subtle hover lift (box-shadow / scale)
- Nav: sticky, transparent → white on scroll

## Assets Needed
| File | Description | Status |
|---|---|---|
| Project screenshots | Money App, Smart Africa, DeFi, Gameslayer | Pending — use placeholders for now |
| OO monogram | Inline SVG, black | To be generated in code |
| Resume PDF | Oche_Ogbole_Resume_Senior_UI.pdf | ✅ Built |

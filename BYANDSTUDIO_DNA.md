# By&Studio DNA Extraction for oche.design

Reference: https://byandstudio.com/?ref=land-book.com

## What It Is Built With

- WordPress 6.4.8 with a custom `andstudio` theme.
- Foundation grid, Motion UI, Fancybox, Owl Carousel.
- jQuery-driven interactions.
- GSAP 2 / TweenMax, ScrollMagic, anime.js, and a custom `mdSkew` script.
- Custom Neue Haas Grotesk Display Pro font files, with Google Fonts Lora/Open Sans also loaded.
- The site is not React/Framer. Its premium feel comes from art direction, imagery, spacing, and scroll choreography.

## Design DNA

- Giant type as the first impression: sparse words, oversized scale, tight spacing.
- Mostly black/white composition with occasional full-bleed project imagery.
- Alternating rhythm: quiet white intro, dark work section, image-led latest work, link lists, dark/white footer contrast.
- Large margins and asymmetric grids, usually maxing around 1440px with 5-10% side padding.
- Work is treated as visual evidence, not as small cards. Images are large, cropped, and allowed to dominate.
- Links and buttons use line motion instead of filled rounded buttons.
- Navigation changes color over dark sections, so the header feels part of the page rather than a separate bar.

## Motion DNA

- Page-load choreography: header, intro text, line, and scroll cue arrive in timed steps.
- Hero text reveals by sliding upward from masked line wrappers.
- A heavy horizontal line animates width and position as the intro changes.
- Scroll reveals use `opacity + translateY(60px)` into place, usually around `0.7s`.
- Project imagery gets subtle scale/zoom and sometimes parallax.
- Hovering text links can show a floating image preview following the cursor.
- Buttons animate a line span from short to long, usually with a strong custom curve.
- The signature curve is close to `cubic-bezier(0.65, 0, 0.17, 0.98)`.

## What To Borrow For Oche

- Replace the current small editorial work rows with larger image-led project features.
- Keep a dark selected-work band, but make it Oche-specific by using his actual app screenshots/prototype images.
- Use a restrained line-button system for secondary actions, but keep primary actions obvious for recruiters.
- Add hover image previews for project lists only on desktop.
- Use masked text reveals in the hero and section intros.
- Add a real “evidence path” per project: Live Site, Prototype, Case Study, or Image Set.
- Treat uploaded screenshots as first-class assets, even if Figma prototypes are not available yet.

## What Not To Copy

- Do not copy the exact black/white studio identity or Andstudio layout one-for-one.
- Do not make Oche’s site feel like a branding agency if the job goal is Senior UI Developer.
- Do not recreate the long preloader. A hiring reviewer should reach the work quickly.
- Do not use many animation libraries. In this Next.js site, CSS transitions plus small React helpers are enough.
- Do not keep the warm cream palette as the whole idea. It currently risks feeling like a generic editorial portfolio.

## Suggested Structure

1. Hero: oversized name, one crisp positioning line, short proof statement, two CTAs.
2. Featured proof strip: live work count, React/Next/React Native/Figma, Toronto/open-to-roles.
3. Selected work: large alternating project blocks with uploaded images or prototype screenshots.
4. Prototype gallery: image-first section for Figma work that does not have a live prototype yet.
5. About: designer-developer story, tools, selected outcomes.
6. Contact: direct email, LinkedIn, GitHub, resume.

## Motion Recipe For This Portfolio

```css
:root {
  --ease-brand: cubic-bezier(0.65, 0, 0.17, 0.98);
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --motion-fast: 160ms;
  --motion-medium: 320ms;
  --motion-slow: 700ms;
}
```

- Buttons: `transform 160ms var(--ease-out)` with `scale(0.97)` on press.
- Hero text: masked line reveal, `700ms var(--ease-brand)`, staggered by 80-120ms.
- Project images: clip-path or masked reveal once, then subtle scale on hover for desktop only.
- Project rows: hover should shift image/arrow slightly, not lift the whole row.
- Reduced motion: remove translation and parallax; keep simple opacity fades.

## Immediate Design Pivot

The current site is close in spirit but too text-row-heavy. The strongest next move is to upload project images and turn the Work section into a visual proof wall:

- Mode Law and CENTRA NL can show live website screenshots.
- Money Banking App and DeFi can show exported Figma screens.
- Wailo/Gameslayer can show mobile app screens or a Figma prototype later.
- Smart Africa can stay “in progress,” but should still show at least one screenshot or concept image.

# Roster — Creator Storefront Marketplace (Demo)

Home, sign-in, and sign-up pages for "Roster", built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and GSAP (ScrollTrigger) for scroll and load animations.

Same purpose as the reference site (curated affiliate marketplace connecting
creators and shoppers) — different visual direction: warm cream/editorial-red
magazine aesthetic instead of dark/minimal.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Also see /login and /signup.

## Animation approach

- `components/Reveal.tsx` — reusable scroll-reveal wrapper (GSAP ScrollTrigger).
  Wrap any section in `<Reveal>`; pass `stagger` to animate direct children in
  sequence instead of all at once.
- `components/Counter.tsx` — animated count-up number, triggers on scroll into view.
- Hero and both auth pages animate in on **load** (not scroll) since they're
  above the fold — a GSAP timeline staggers eyebrow → heading → subhead → CTAs.
- Respects `prefers-reduced-motion` via `globals.css`.

## Still a demo — not yet dynamic

- Waitlist/signup/login forms are UI-only (local state, `alert()` on submit).
  Wire up real auth (NextAuth.js or Supabase Auth) and a database before launch.
- Product/creator images and copy are placeholder (Unsplash) — swap for real
  assets before going live.
- Colors and copy are easy to swap: all design tokens live in
  `tailwind.config.ts` (`cream`, `paper`, `ink`, `red`, `redDeep`, `clay`, `line`).

## Structure

- `app/page.tsx` — homepage
- `app/login/page.tsx`, `app/signup/page.tsx` — auth pages
- `components/` — Nav, Hero, CategoryStrip, LiveStorefronts, Trending, CreatorCta, Footer, Reveal, Counter

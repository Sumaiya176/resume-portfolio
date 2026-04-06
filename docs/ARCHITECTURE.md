# Architecture Notes

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config in `globals.css` via `@theme inline`)
- **Animation:** Framer Motion
- **Theme:** next-themes (class-based: `dark` / `light` on `html`)

## Folder Structure

```
app/
  layout.tsx      # Root layout, fonts, metadata, ThemeProvider
  page.tsx        # Client page: loading gate, all sections
  globals.css     # Design tokens, theme variables, utilities
components/
  layout/         # Navbar, ScrollProgress
  sections/       # Hero, About, Experience, Projects, TechStack, OpenToHire, Contact
  ui/             # MagneticButton, SectionReveal
  effects/        # CursorSpotlight, LoadingScreen
lib/
  constants.ts    # Content: site, nav, skills, experience, projects, openToHire
  utils.ts        # cn(), theme helpers
docs/
  DESIGN_SYSTEM.md
  DEPLOYMENT.md
  ARCHITECTURE.md
public/
  projects/       # Optional: add project screenshots here
```

## Decisions

1. **Single-page with section IDs** — Simplest for a portfolio; no routing. Navbar links to `#about`, `#projects`, etc. Good for SEO (one page, one URL) and sharing.

2. **Content in `lib/constants.ts`** — One place to edit name, links, experience, projects. No CMS; easy to deploy and version.

3. **Theme:** CSS variables in `:root` (dark) and `.light`. next-themes toggles `html` class and avoids flash with `suppressHydrationWarning` and defaultTheme.

4. **Loading screen** — Shown once per session (`sessionStorage`). Elegant intro without blocking repeat visits.

5. **Section reveals** — Framer Motion `whileInView` with `viewport={{ once: true }}` for performance. Stagger via `variants` and `delayChildren`.

6. **Hero typing** — Client-side state and `setInterval` for rotating phrases. No heavy animation lib for text.

7. **MagneticButton** — Lightweight: track mouse, apply transform to inner span with Framer Motion spring. Used for primary CTAs.

8. **Scroll progress** — `useScroll` + `useSpring` for a smooth top bar. Purely decorative.

9. **Navbar** — Fixed, glass style on scroll. Mobile: AnimatePresence for menu open/close. Theme toggle and nav links.

10. **Projects** — Gradient border via pseudo-element and mask. Image optional; placeholder when `project.image` is empty. Layout alternates (reverse on even index) for visual variety.

11. **Accessibility** — Semantic sections, aria-labels on icon buttons, focusable links and buttons. Copy-to-clipboard in Contact with clear feedback.

12. **Performance** — Lazy loading via Next.js; images only when `project.image` set. Fonts via `next/font`. No heavy GSAP; Framer Motion tree-shaken.

## SEO

- Metadata and viewport in `app/layout.tsx`
- Single page with descriptive title and description
- Semantic HTML (main, section, nav, header, footer)
- Optional: add `sitemap.ts` and `robots.ts` in `app/` if you add more routes

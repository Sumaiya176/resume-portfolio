# Design System — Sumaiya Portfolio

## Philosophy

- **Primary:** Dark mode (midnight/navy base) for a premium, focused feel.
- **Secondary:** Light mode (off-white/matte) for accessibility and preference.
- **Personality:** Elegant, minimal, luxurious, professional. No generic “dev template” look.

## Color Tokens

All tokens are CSS custom properties in `app/globals.css`.

### Base (Primary)
- `--color-midnight`: #0f1419
- `--color-navy`: #1a2332
- `--color-charcoal`: #2d3748
- `--color-slate`, `--color-slate-light`: neutrals

### Accent
- `--color-gold`: #c9a962 (primary CTA, highlights)
- `--color-gold-light`: #e5d4a1
- `--color-violet`, `--color-violet-soft`: optional secondary
- `--color-teal`, `--color-teal-soft`: optional tertiary

### Semantic (theme-aware)
- `--bg-primary`, `--bg-secondary`, `--bg-elevated`, `--bg-glass`, `--bg-glass-border`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--border-subtle`, `--border-accent`
- `--shadow-soft`, `--shadow-glow`

Dark theme is `:root`; light theme is applied when `html` has class `light` (via next-themes).

## Typography

- **Display / Headings:** Cormorant Garamond (serif) — `.font-display`
- **Body / UI:** Outfit (sans) — default body font
- **Hierarchy:** Clear size and weight steps; avoid more than two font families in one block.

Fonts are loaded in `app/layout.tsx` via `next/font/google` and exposed as `--font-outfit`, `--font-cormorant`.

## Motion

- **Easing:** `--ease-out-expo`: cubic-bezier(0.16, 1, 0.3, 1)
- **Durations:** `--duration-fast` (200ms), `--duration-normal` (350ms), `--duration-slow` (500ms)
- **Guidelines:** Prefer subtle, calm motion; section reveals on scroll; hover states smooth and short. Framer Motion used for orchestration.

## Components

- **Glass:** `.glass` — backdrop blur + border for nav/cards.
- **Gradient border:** `.gradient-border` — 1px gradient ring (gold/violet/teal) for project cards.
- **Spotlight:** CursorSpotlight component for hero; use sparingly.

## Layout

- Max content width: `max-w-6xl` (nav), `max-w-4xl`–`max-w-5xl` (sections).
- Section padding: `py-24 px-6`.
- Consistent vertical rhythm between sections.

## Accessibility

- Semantic HTML (section, nav, header, footer).
- Sufficient contrast for `--text-primary` on `--bg-primary` in both themes.
- Focus states and aria labels on interactive elements (theme toggle, mobile menu).
- Reduced motion respected via user preferences where applicable.

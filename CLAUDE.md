# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server on port 3000 (accessible on network via 0.0.0.0)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # TypeScript type-check (no emit)
npm run clean      # Remove dist/
```

No test runner is configured.

## Environment

Copy `.env.example` to `.env` and set:
- `GEMINI_API_KEY` — Google AI (Gemini) API key
- `APP_URL` — deployment URL

Vite exposes the key via `process.env.GEMINI_API_KEY` (configured in `vite.config.ts`). Set `DISABLE_HMR=true` in `.env` if running inside Google AI Studio.

## Architecture

**React 19 SPA** — Vite + TypeScript + Tailwind CSS v4 marketing site for MirandaMedia (digital/AI agency).

### Startup flow

`index.html` → `src/main.tsx` → `src/App.tsx`

`App.tsx` is the root. It:
- Shows a 2.5s `<Loader>` on first mount
- Wraps everything in `BrowserRouter` (React Router v7)
- Renders a persistent `<Header>` and `<Footer>` around route content
- Uses `AnimatePresence` for page transitions

### Routes

| Path | Component |
|------|-----------|
| `/` | `src/pages/Home.tsx` — full landing page composed of section components |
| `/case-study/florbalexpert` | `src/pages/CaseStudyFlorbal.tsx` |

### Component conventions

- Section components (`Hero`, `AIProducts`, `ServicesToProducts`, `Projects`, `Team`, `Contact`, etc.) live in `src/components/` and are assembled inside `Home.tsx`
- `src/components/ui/` holds lower-level animated/reusable components (`container-scroll-animation.tsx`, `stagger-testimonials.tsx`)
- `src/lib/utils.ts` exports `cn()` — the standard Tailwind class merger (clsx + tailwind-merge)

### Styling

Tailwind CSS v4 — **no `tailwind.config.ts`**. Theme customisation lives entirely in `src/index.css` via `@theme` blocks:
- `--color-neon-green: #59DC8E` (primary accent)
- `--color-dark-navy: #020617` (dark background)
- Poppins as base sans font

Custom utility classes defined in `index.css`: `.text-glow`, `.bg-glow`, `.neon-glow`, `.animate-marquee`.

### Animation

Framer Motion (imported as `motion` from `framer-motion`) is used throughout for:
- Scroll-triggered transforms (`useScroll`, `useTransform`)
- Staggered entrance animations
- Mouse-tracking gradients (e.g. `Hero.tsx`)
- Page enter/exit via `AnimatePresence`

### Path aliases

`@/` resolves to `src/` — configured in both `vite.config.ts` and `tsconfig.json`.

### shadcn/ui

Component config in `components.json` (style: `base-nova`, Tailwind v4, Lucide icons). New shadcn components go in `src/components/ui/`.

### Google Gemini integration

`@google/genai` SDK is installed. The API key is wired up through Vite env vars; actual usage is not yet prominent in the visible codebase but the plumbing is in place for AI features.

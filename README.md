# BizBot — AI Chatbot Agency (UAE)

A brand-new, production-ready marketing site for **BizBot**, a UAE-based AI chatbot
agency. Built with a premium **dark glassmorphic** aesthetic.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom premium design tokens)
- **Framer Motion** (page, scroll & micro-interactions)
- **lucide-react** icons

## Design language

- **Dark canvas** with a persistent gradient mesh + spotlight + vignette background.
- **Electric orange** signature color (`brand` → `#FF5B14`).
- **Typography pairing**
  - Headings: **Syne / Space Grotesk** (`font-display`, `font-heading`)
  - Body: **Inter / DM Sans** (`font-sans`, `font-body`)
- **Glassmorphism everywhere**: `backdrop-blur`, `border-white/10`, translucent dark
  fills, top sheen, and brand glow on hover.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # lint
```

## Project structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Logo
│   ├── sections/      # Hero, Features, ButtonShowcase, CallToAction
│   └── ui/            # Button, GlassCard, Container, Section  (design system)
├── lib/cn.js          # clsx + tailwind-merge helper
├── App.jsx
├── main.jsx
└── index.css          # fonts, base layer + glass component primitives
```

## Design system highlights

### `tailwind.config.js`
Custom premium gradients (`bg-gradient-brand`, `bg-gradient-mesh`, `bg-gradient-aurora`,
`bg-gradient-glass`, `bg-gradient-spotlight`, …), the electric-orange `brand` palette,
extended `backdrop-blur` / `backdrop-saturate` variants, glow & glass shadows, and
motion keyframes.

### `<Button>`
Universal frosted-glass button. Variants: `primary` (signature orange glass),
`secondary`, `outline`, `ghost`. Every variant has a subtle white border, translucent
fill, hover text-color shift, and an elegant background glow bloom on hover.

### `<GlassCard>` / `<Section>` / `<Container>`
The primary glassmorphic layout wrappers — responsive gutters, scroll-reveal sections,
and frosted panels with optional interactive lift + brand glow.

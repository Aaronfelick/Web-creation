# Delman Shipping — Website Redesign

A complete, modern, glass-morphism redesign of the [Delman Shipping](https://delmanshipping.com/) website built with plain **HTML, CSS and vanilla JavaScript** — no build step required.

## ✨ Features

- **Glass morphism UI** — frosted-glass floating navbar, cards, buttons and panels.
- **Light & dark mode** — a navbar toggle (☀️/🌙) switches themes; the choice is saved in `localStorage` and applied before paint (no flash). Light is the default.
- **Fully mobile-responsive** — text, images, the globe and the quote/track flows scale down gracefully on phones while keeping the design elegant (breakpoints at 1024 / 860 / 640 / 400 px).
- **Brand color scheme** — strictly **black**, **white**, **green `#6aa744`** and **cyan `#1fbecf`** with smooth green→cyan gradients.
- **Interactive 3D globe** (`network.html`) — built with [globe.gl](https://globe.gl) showing Delman's HQ in Dubai and animated arcs to every destination it ships to, with a graceful fallback if the library can't load.
- **Multi-step "Get a Quote" wizard** (`quote.html`):
  1. Choose shipping mode — **Air / Sea / Land / Personal**
  2. Choose **Export or Import**
  3. Enter shipment details (route, cargo, weight, dimensions, date)
  4. Add contact details, review a live summary, and submit
- **Founder & CEO section** — leadership profile and CEO's message for **Ug Thottappilly Menon**.
- **Fully responsive** with an animated mobile menu, scroll reveal animations and ambient background.

## 📄 Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About Us (+ Founder/CEO) | `about.html` |
| Services | `services.html` |
| Global Network (interactive globe) | `network.html` |
| Career | `career.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |
| Get a Quote (wizard) | `quote.html` |

## 🗂 Structure

```
.
├── index.html, about.html, services.html, network.html,
│   career.html, faq.html, contact.html, quote.html
├── css/style.css          # full design system
├── js/
│   ├── main.js            # nav, footer, reveal, FAQ, forms
│   ├── globe.js           # interactive 3D globe
│   └── quote.js           # multi-step quote wizard
└── assets/ceo.svg         # founder/CEO portrait placeholder
```

## 🚀 Run locally

It's a static site — just open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📝 Notes

- Forms are front-end demos (no backend). Wire them to your email/CRM service for production.
- The hero image loads `assets/img/Picture1.png` if present and otherwise falls back to a bundled photo. Drop your own `Picture1.png` into `assets/img/` to use it on the home page.
- `assets/ceo.svg` is a stylized placeholder portrait — replace it with an official photo of the Founder & CEO when available.
- Globe textures and the globe.gl library load from CDNs, so the globe page needs an internet connection (a styled fallback shows otherwise).

Content adapted from the official Delman Shipping website.

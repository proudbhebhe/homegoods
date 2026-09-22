# HomeGoods 2026 Catalogue Website

Multi-page, mobile-first HTML/CSS/JavaScript implementation based on the supplied 12-page HomeGoods 2026 catalogue.

## Architecture
- `index.html` — Home
- `products.html` — full catalogue with search, filtering and sorting
- `plans.html` — 24-month plan, examples, calculator, FAQ and application flow
- `about.html` — catalogue-backed brand story and trust promises
- `contact.html` — enquiry form, WhatsApp and location
- `styles/main.css` — one shared custom stylesheet
- `scripts/app.js` — one shared ES-module entry point
- `scripts/modules/*.js` — importable feature modules
- `assets/catalog-1.jpg` … `catalog-12.jpg` — rendered catalogue pages used as visual references
- Normalize.css is loaded from jsDelivr before `main.css` on every page.

## Source fidelity
The PDF is image-based, so the product information was transcribed from the visible catalogue pages. No customer testimonials, social accounts, email address, or additional payment tiers were invented where the catalogue did not provide them.

## Before production
Verify all product names, monthly prices, stock/availability, eligibility rules, legal financing language, and contact details with HomeGoods. Replace the demo newsletter behavior with a real endpoint if one is available.

# OMKARA — Bhatia Attachi House

Premium, mobile-first business website for OMKARA (Bhatia Attachi House) — a Wholesale & Retail Bag Store and Bag Repair Service on Pandit Raja Ram Gali, Railway Road, India.

Built with **React 19 + TanStack Start (Vite 7) + Tailwind CSS v4 + TypeScript**.

## Features

- Premium luxury design (Deep Navy + Gold theme)
- Mobile-first responsive layout, smooth animations
- 9 product category pages (School Bags, Trolleys, Office Bags, Purses, etc.)
- Dedicated Repair Services page
- Gallery, About, Contact pages
- WhatsApp inquiry integration (+91 9518880608) — Hero, Product Cards, Contact form, Floating button
- SEO meta tags, sitemap.xml, robots.txt
- File-based routing via TanStack Router

## Project Structure

```
/public              static files (robots.txt)
/src
  /assets            images (hero, categories, gallery, repair)
  /components        SiteHeader, SiteFooter, WhatsAppFloat, InquiryForm, ui/
  /hooks             custom hooks
  /lib               site.ts (site config + WhatsApp link helper)
  /routes            file-based routes (index, about, repairs, gallery, contact, categories.$slug)
  styles.css         Tailwind v4 + design tokens
  router.tsx         router setup
  start.ts           TanStack Start entry
```

## Setup

Requires **Node.js 20+**. Bun or npm both work.

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run start
```

## WhatsApp Integration

All inquiry buttons (Hero, Product Cards, Contact form, Floating button) open WhatsApp at **+91 9518880608** with a pre-filled message. The helper lives in `src/lib/site.ts` (`waLink`).

## Customizing Content

Edit `src/lib/site.ts` to update business info, categories, and product lists. Images live in `src/assets/`.

---

© Bhatia Attachi House — Brand: OMKARA

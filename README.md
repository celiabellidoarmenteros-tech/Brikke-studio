# Brikke Studio

> *Art you build. Walls you transform.*

A premium, minimalist website for **Brikke Studio** — a brand that sells unique, colorful AI-designed art puzzles crafted to hang on Nordic-style walls.

## 🌐 Live Site

Hosted on GitHub Pages: `https://celiabellidoarmenteros-tech.github.io/Brikke-studio`

## ✨ Features

- **6 curated puzzle cards** with colorful CSS gradient placeholders ready to be swapped for real images
- **Scroll-reveal animations** — smooth fade-in as you scroll down the page
- **Fully responsive** — looks great on mobile (key for an Instagram audience)
- **Elegant typography** — Cormorant Garamond (headings) + DM Sans (body)
- **Color palette** — warm white base with terracotta, sage green & dusty blue accents
- **"Shop Now" buttons** — linked to `#` placeholders, ready to point to Etsy / Printful

## 📄 Pages / Sections

1. **Hero** — Brand name, tagline, call-to-action
2. **About** — Concept, AI-generated art, made-to-be-framed story
3. **Collection** — 6 puzzle cards (Solstice, Fjord Dreams, Wild Garden, Golden Ratio, Violet Hour, Boreal)
4. **How It Works** — 3-step process: Choose → Build → Frame & Display
5. **Instagram** — Social proof grid + @brikkestudio handle
6. **Footer** — Links, social icons, contact email

## 🗂 File Structure

```
/
├── index.html          ← main page
├── css/
│   └── styles.css      ← all styles
├── js/
│   └── main.js         ← scroll animations + mobile nav
└── README.md
```

## 🚀 Deploy to GitHub Pages

1. Go to your repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `(root)`
4. Save — your site will be live in a minute at the URL above

## 🎨 Customisation

- **Swap puzzle images**: Replace the `gradient-N` divs inside `.puzzle-card__image` with `<img>` tags pointing to your real puzzle artwork
- **Update shop links**: Find `href="#"` on each `Shop Now` button and replace with your Etsy/Printful product URL
- **Change brand name**: Search & replace `Brikke Studio` in `index.html`
- **Update Instagram handle**: Replace `@brikkestudio` and the Instagram URLs

## 🖋 Tech Stack

Pure **HTML5 + CSS3 + vanilla JS** — no frameworks, no build step, no dependencies.

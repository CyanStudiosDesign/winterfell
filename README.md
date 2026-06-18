# Winterfell Storefront — Local Setup Guide

Welcome! This guide walks you through getting the Winterfell storefront running on your machine and connected to our shared Medusa backend, plus how we work together on the repo.



## 1. Clone the repository

```bash
git clone https://github.com/CyanStudiosDesign/winterfell.git
cd winterfell
```

## 2. Configure environment variables

In terminal run to create local env file:

```bash
cp .env.template .env.local
```

Open `.env.local` and set these two values:

```shellscript
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_06933e4f81336c1f1e3a462569c93118b2374c238ef3059e24d035beac913881
# URL of the Medusa backend API server
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://medusa-production-daef.up.railway.app
```

Leave any other variables already in the file at their defaults unless someone tells you otherwise.

## 3. Install and run

```bash
npm install
npm run dev
```

Once it's running, open the local URL shown in your terminal (Medusa storefronts typically default to `http://localhost:8000`). You should see live products being pulled from the shared backend.

## Working on the repo — branches and pull requests

Never commit or push directly to `main`. For every task:

```bash
git checkout -b yourname/short-task-description
# make your changes
git add .
git status   # double check node_modules, .next, and .env.local are NOT listed
git commit -m "Describe what you changed"
git push -u origin yourname/short-task-description
```

Then open a Pull Request on GitHub against `main` and request a review before it gets merged. If `git status` ever shows `node_modules` or `.env.local` as files about to be committed, stop and check your `.gitignore` before continuing — those should never be tracked.

## 6. Explore the shared backend

The Medusa admin dashboard for our shared backend is at:

```
https://medusa-production-daef.up.railway.app/app
```

Login credentials: seenusenthil210206@gmail.com
password: seenu@123

This is a **shared environment**, so a couple of ground rules:
- Don't delete or edit data that isn't yours.

Once you're in, get familiar with the admin by:
- Creating a few product categories that fit a hoodie brand — e.g. Pullover Hoodies, Zip-Ups, Crewnecks, Limited Drops.
- Adding a few dummy products under those categories with placeholder names, prices, sizes (S–XL), and a couple of color variants.
- Browsing the Orders, Customers, and Regions sections just to see how everything fits together — no need to create anything there.

## 7. Design reference

Use this Figma/FigJam board for layout, theme, and overall design direction before building or styling anything:

```
https://www.figma.com/board/3Zt8jD8RUeT8KHH4vdhFld/Winterfell
```

Check it first so what you build stays consistent with the intended brand direction.

## 8. Component library

Use the existing components from the Cyan UI Library wherever possible instead of building new ones from scratch.

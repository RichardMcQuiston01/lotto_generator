# TECHNOLOGY

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Font**: Open Sans (Google Fonts) with Arial fallback
- **Quality**: ESLint (`eslint-plugin-react`, hooks, refresh)
- **Hosting**: Vercel static/Vite preset

## Project Structure

```
src/
├── App.jsx          # Main application component
├── DonateFloat.jsx  # Floating Stripe donate card + QR
├── main.jsx         # Application entry point
└── index.css        # Global styles, a11y utilities, print rules

public/
├── favicon.svg
├── donate-qr.svg    # Static QR for the Stripe donate URL
├── robots.txt
└── llms.txt

config files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind theme tokens
├── postcss.config.js   # PostCSS configuration
├── vercel.json         # SPA rewrite and security headers
├── .eslintrc.cjs       # ESLint configuration
├── .nvmrc              # Node 20
└── package.json        # Dependencies and scripts
```

## Design Tokens

- Background: `#F8F4E6` (cream)
- Headings / links / focus: `#6D2E5B` (dark purple)
- Accent (balls / generate): `#D1A954` (gold)
- Print / secondary action: `#5EBFB6` (teal)

Gold is not used as body or link text. On cream it fails WCAG AA
(~2:1). Links and focus rings use the purple heading color instead.

## Accessibility

- Semantic landmarks, skip link, and sequential headings
- Programmatic labels and `aria-describedby` help text
- Polite live region for generate / reset status
- Visible `:focus-visible` outline (3px `#6D2E5B`)
- 48px minimum tap targets
- `prefers-reduced-motion` disables hover scale and shortens transitions
- Print uses `window.print()` plus `@media print` (no popup `document.write`)

## Number Ball Styling

- Main numbers: white-to-gray radial gradient
- Powerball: gold radial gradient
- Screen readers hear "Main number" vs "Powerball" before the digit

## Button Gradients

- Generate: gold gradient matching Powerball colors
- Print: teal gradient
- Reset: white-to-gray gradient for a neutral action

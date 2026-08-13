# Powerball Number Generator

A modern, accessible web app for generating Powerball lottery numbers.
Built with React, Vite, and Tailwind CSS.

## Features

- Generate 1–10 sets per ticket in official Powerball format:
  5 unique main numbers (1–69) + 1 Powerball (1–26)
- Print-friendly tickets via the browser print dialog
- Responsive layout for phone, tablet, and desktop
- WCAG 2.2 AA accessibility: labeled controls, landmarks, live regions,
  keyboard focus, contrast, and reduced-motion support

## Getting Started

Requires Node.js 22 or newer (see `.nvmrc`) and npm.

```bash
npm install    # install dependencies
npm run dev    # start the dev server at http://localhost:5173
```

## Commands

- `npm run dev` — start the development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Deployment

Deploys to Vercel as a static Vite build. The included `vercel.json` provides
an SPA rewrite and security headers; no environment variables are required.

## Technology

See [TECHNOLOGY.md](./docs/TECHNOLOGY.md).

## Legal Disclaimer

This application is not affiliated with Powerball or The Multi-State Lottery
Association. For official Powerball information, visit
[www.powerball.com](https://www.powerball.com).

## Support

If you find this useful, consider
[buying me a coffee](https://donate.stripe.com/00w5kD3Gj1Xo9v7gVOcs800).

## License

Open source under the [MIT License](LICENSE).

(c) 2026 Richard McQuiston.

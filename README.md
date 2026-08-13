# Powerball Number Generator

A modern, accessible web application for generating Powerball lottery numbers.
Built with React, Vite, and Tailwind CSS.

## Features

- **Generate 1–10 sets** of Powerball numbers per ticket
- **Official Powerball format**: 5 unique main numbers (1–69) + 1 Powerball (1–26)
- **Print-friendly tickets** using the browser print dialog
- **Responsive layout** that works on phones, tablets, and desktops
- **WCAG 2.2 AA accessibility**: labeled controls, landmarks, live regions,
  keyboard focus, contrast, and reduced-motion support
- **Support / donate** floating card with a QR code linking to
  [Stripe Checkout](https://donate.stripe.com/00w5kD3Gj1Xo9v7gVOcs800)

## Getting Started

### Prerequisites

- Node.js 22 or newer (22 LTS recommended; see `.nvmrc`)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:RichardMcQuiston01/lotto_generator.git
   cd lotto_generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy to Vercel

Vercel detects Vite automatically (`npm run build`, output `dist/`).

### Option A — Git integration (recommended)

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Leave Framework Preset as **Vite**.
4. Confirm Build Command `npm run build` and Output Directory `dist`.
5. Deploy. Production and preview URLs are created on each push.

The included `vercel.json` adds:

- An SPA rewrite so unknown paths serve `index.html`
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy`)

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

No environment variables are required for the current static build.

## Usage

1. **Select number of sets**: choose how many sets to generate (1–10)
2. **Generate numbers**: submit the form or click **Generate numbers**
3. **Print ticket**: use **Print numbers** to open the browser print dialog
4. **Reset**: clear generated numbers and start over

## Development Commands

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Legal Disclaimer

This application is not affiliated with Powerball or The Multi-State Lottery
Association. For official Powerball information, visit
[www.powerball.com](https://www.powerball.com).

## License

This project is open source and available under the [MIT License](LICENSE).

## Technology

See [TECHNOLOGY.md](./docs/TECHNOLOGY.md).

## Support

If this library saved you some reverse-engineering, consider
[buying me a coffee](https://donate.stripe.com/00w5kD3Gj1Xo9v7gVOcs800).

## Copyright

(c) 2026 Richard McQuiston. All rights reserved.

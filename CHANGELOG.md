# Changelog

All notable changes to this project are documented in this file.

## 1.0.0 - 2026-03-25

### Fixed

- Invalid React `style` props on the sets `<select>` (`focusRingColor`,
  `focusBorderColor`) that never applied focus styles
- Print flow that opened a popup and crashed when the browser blocked it
- Unloaded Proxima Nova / Open Sans font stack (only Arial actually loaded)
- Broken favicon path pointing at a missing `/vite.svg`
- Dead, simulated "check for wins" code that could invent false winners
- Missing ESLint config so `npm run lint` could not run
- README MIT license link with no `LICENSE` file

### Accessibility

- Associated the sets control with a programmatic `<label>`
- Added landmarks (`header`, `main`, `footer`), skip link, and heading outline
- Announced generation and reset through a polite live region
- Labeled main numbers vs Powerball for assistive technology
- Replaced `title`-only ball labels and color-only link styling
- Raised text, link, and control-border contrast to WCAG 2.2 AA
- Added visible `:focus-visible` rings and 48px tap targets
- Honored `prefers-reduced-motion` on hover scale and transitions
- Marked decorative emoji and announced external links that open a new tab

### Added

- Vercel deployment config (`vercel.json` SPA rewrite and security headers)
- Node engine hint and `.nvmrc`
- Print stylesheet using the current page instead of `document.write`
- `CHANGELOG.md`, `LICENSE`, favicon, `robots.txt`, and `llms.txt`
- Floating donate card with Stripe link and QR code

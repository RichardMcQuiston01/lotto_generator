# Powerball Number Generator

A modern, responsive web application for generating Powerball lottery numbers. Built with React, Vite, and Tailwind CSS.

## Features

- **Generate 1-10 sets** of Powerball numbers per ticket
- **Correct Powerball format**: 5 main numbers (1-69) + 1 Powerball number (1-26)
- **Print-friendly tickets** with clean, professional layout
- **Responsive design** that works on all devices
- **Accessibility features** including title attributes for screen readers
- **Custom color scheme** with gradient buttons and realistic number balls

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

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

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Usage

1. **Select number of sets**: Choose how many sets of numbers to generate (1-10)
2. **Generate numbers**: Click "Generate Numbers" to create your lottery numbers
3. **Print ticket**: Use "Print Numbers" to create a printer-friendly version
4. **Reset**: Clear all generated numbers to start over

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Font**: Proxima Nova, Open Sans, Arial
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles and Tailwind imports

public/
└── [static assets]

config files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Design Features

- **Custom Color Palette**:
  - Background: `#F8F4E6` (cream)
  - Headings: `#6D2E5B` (dark purple)
  - Accent: `#D1A954` (gold)
  - Tertiary: `#5EBFB6` (teal)

- **Number Ball Styling**:
  - Main numbers: White-to-gray radial gradient
  - Powerball: Gold radial gradient with accent colors
  - Realistic 3D appearance with shadows

- **Button Gradients**:
  - Generate: Gold gradient matching Powerball colors
  - Print: Teal gradient matching main number colors
  - Reset: White-to-gray gradient for neutral action

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Legal Disclaimer

This application is not affiliated with Powerball or The Multi-State Lottery Association. For official Powerball information, visit [www.powerball.com](https://www.powerball.com).

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
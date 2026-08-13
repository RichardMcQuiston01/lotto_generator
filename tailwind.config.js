/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4E6',
        heading: '#6D2E5B',
        gold: '#D1A954',
        teal: '#5EBFB6',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

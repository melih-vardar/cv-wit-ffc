/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      specialBlue: "#4731D3",
      specialWhite: "#BAB2E7",
      specialGray: "#6B7280",
    },
    fontFamily: {
      'Inter': 'Inter'
    },
    extend: {
      filter: {
        'logo-filter-light': 'invert(19%) sepia(87%) saturate(2527%) hue-rotate(238deg) brightness(74%) contrast(96%)',
        'logo-filter-dark': 'invert(77%) sepia(10%) saturate(1027%) hue-rotate(208deg) brightness(94%) contrast(93%)',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
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
    extend: {},
  },
  plugins: [],
}


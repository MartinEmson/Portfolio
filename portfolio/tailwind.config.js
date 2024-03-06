/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customWhite: '#F2F2ED',
        customBlack: '#2D2D2E',
      }
    },
  },
  plugins: [],
}


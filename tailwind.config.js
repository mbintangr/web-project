/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#4C4C6D',
      'secondary': '#1B9C85',
      'tertiary': '#E8F6EF',
      'quaternary': '#FFE194'
    },
  },
  plugins: [require('flowbite/plugin')],
}


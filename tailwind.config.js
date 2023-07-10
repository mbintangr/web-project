/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    /* colors: {
      'primary': '#4C4C6D',
      'secondary': '#1B9C85',
      'tertiary': '#E8F6EF',
      'quaternary': '#FFE194'
    }, */
    /* colors: {
      'primary': '#D2001A',
      'secondary': '#FFDE00',
      'tertiary': '#FFFAE7',
      'quaternary': '#EFEFEF'
    }, */
    colors: {
      'primary': '#1A5D1A',
      'secondary': '#F1C93B',
      'tertiary': '#FBD85D',
      'quaternary': '#FAE392'
    },
  },
  plugins: [require('flowbite/plugin')],
}


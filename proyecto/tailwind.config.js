/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif']
      },
      colors: {
        'mena-sun': '#de9008',
        'mena-ocean': '#283c9b',
        'mena-sky': '#079ef6'
      }
    },
  },
  plugins: [],
}


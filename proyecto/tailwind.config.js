/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,ts,tsx}","node_modules/flowbite-react/lib/esm/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        rubikMonoOne: ['Rubik Mono One', 'monospace']
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '12xl': '9rem',
        '16xl': '12rem',
      },
      lineHeight: {
        '9xl': '7.5rem',
        '10xl': '8.5rem',
        '12xl': '9.5rem',
        '16xl': '12.5rem',
      },
      colors: {
        'mena-sun': '#de9008',
        'mena-ocean': '#283c9b',
        'mena-sky': '#079ef6'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


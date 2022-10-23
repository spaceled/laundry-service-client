/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'first': '#01a0d7',
    //   'second': '#52b969',
    //   'dark': '##f5f5f5'
    // },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ]
}

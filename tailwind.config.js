/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'dark-pattern' : 'url(../src/assets/bg.jpg)',
        'header-background' : 'url(../src/assets/header-bg.jpg)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customDark: '#2c2306',
        cart: '#100e0d',
        modal: '#ded6ca'
      },

      fontFamily: {
        raleway : ['Raleway', 'sans-serif']
      },
      fontFamily: {
        lato : ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}
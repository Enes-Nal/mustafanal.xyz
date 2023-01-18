/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily:{
      }
    },
  },
  plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'trans':'rgba(225,225,225,0.04)'
      }
    },
  },
  plugins: [],
};

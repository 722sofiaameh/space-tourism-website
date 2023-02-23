/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'trans':'rgba(225,225,225,0.04)',
        'fontWhite':'#D0D6F9',
        'white':'#FFFFFF',
        'black':'#0B0D17'
      },
      fontFamily:{
       'Barlow':'Barlow',
       'Bellefair':'Bellefair',
      },
      fontSize:{
        small:''
      }

    },
  },
  plugins: [],
};

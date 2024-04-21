/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        darksidebarbg: '#1F1E2C',
        main: '#181623',
        lightsidebarbg: '#40189D',
        lightmain: '#F2F2F2',
      },
      screens: {
        md: '966px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

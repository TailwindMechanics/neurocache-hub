/** @type {import('tailwindcss').Config} */
const colors = require('./src/app/colors.json');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        'main-column': '100%', // Change this value to adjust the width of the main column
      },
      colors: colors,
      fontSize: {
        'xs': '.5rem',     
        'sm': '.675rem',    
        'base': '.75rem',     
        'lg': '.875rem',   
        'xl': '1rem',    
        '2xl': '1.15rem',    
        '3xl': '1.5rem',  
        '4xl': '2.875rem',   
        '5xl': '3rem',      
        '6xl': '3.5rem',     
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['neuro', colors],
  },
}

/** @type {import('tailwindcss').Config} */
const colors = require('./src/data/colors.json');

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
        'main-column': '0%',
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
        '4xl': '1.75rem',   
        '5xl': '2.875rem',      
        '6xl': '3rem',     
      },
    },
  },
  plugins: [
    require("daisyui"),
    function({ addBase, theme }) {
      addBase({
        '::selection': { 
          backgroundColor: theme('colors.text-select'), 
          color: theme('colors.text') 
        },
        '::-moz-selection': { 
          backgroundColor: theme('colors.text-select'), 
          color: theme('colors.text') 
        },
      });
    },
  ],
  daisyui: {
    themes: ['neuro', colors],
  },
}

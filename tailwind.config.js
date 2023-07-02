/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'root-p-l': '5%',
        'root-p-r': '35%',
      },
      width: {
        'main-column': '50rem',
      },
      colors: {
        'background': '#091017',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['neuro', 
      {
        'neuro': {
          'primary': '#a52865',
          'primary-focus': '#ff3e9c',
          'primary-content': '#ffb4a7',
          'secondary': '#3addfd',
          'secondary-focus': '#ffb4a7',
          'secondary-content': '#ffb4a7',
          'accent': '#3addfd',
          'accent-focus': '#80e8fd',
        },
      },
    ],
  },
}
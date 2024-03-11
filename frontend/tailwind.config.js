/** @type {import('tailwindcss').Config} */

function themeVariants({ addVariant }) {
  addVariant('tall', '@media (min-height: 500px)');
}

module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {}
  },
  plugins: [themeVariants, require('daisyui')],
  daisyui: {
    themes: [
      {
        main: {
          primary: '#5FBFF9',
          secondary: '#20FC8F',
          'primary-content': '#020122',
          'secondary-content': '#FFFFFF',
          accent: '#1B1A38',
          'accent-content': '#FFFFFF',
          neutral: '#1B1A38',
          'neutral-content': '#FFFFFF',
          'base-100': '#020122',
          'base-200': '#010114',
          'base-content': '#FFFFFF',
          info: '#006ee7',
          success: '#00c94f',
          warning: '#ff8900',
          error: '#ff477a'
        }
      }
    ]
  }
};

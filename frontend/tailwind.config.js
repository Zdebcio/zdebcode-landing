/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        main: {
          primary: '#5FBFF9',
          secondary: '#20FC8F',
          'primary-content': '#FFFFFF',
          'secondary-content': '#FFFFFF',
          accent: '#1B1A38',
          'accent-content': '#FFFFFF',
          neutral: '#1B1A38',
          'neutral-content': '#FFFFFF',
          'base-100': '#020122',
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

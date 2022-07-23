/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/styles/**/*.{css,scss,sass}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        site: {
          DEFAULT: '#712bda',
          light: '#a45deb',
        },
      },
      maxWidth: {
        app: '21.25rem',
      },
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
      },
    },
  },
  plugins: [],
};

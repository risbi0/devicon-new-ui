const darkPrimary = '#2A303C';
const darkSecondary = '#A6ADBB';

const lightPrimary = '#F1F1F1';
const lightSecondary = '#1F2937';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          neutral: '#191C24',
          '.hover-color': {
            'background-color': darkSecondary,
            'color': darkPrimary,
          },
          '.theme': {
            'background-color': darkPrimary,
            'color': darkSecondary
          },
          '::placeholder': {
            'color': darkPrimary
          },
          '.btn-active': {
            'background-color': `${darkSecondary} !important`,
            'color': `${darkPrimary} !important`,
            'border': 'none !important'
          },
          '.radio': {
            'background-color': '#252B36',
          },
          '.code-snippet': {
            'background-color': '#191C24'
          },
          '.hover-text-color': {
            'color': '#D0D0D0'
          }
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          neutral: '#D8D8D8',
          "base-100": lightPrimary,
          '.hover-color': {
            'background-color': lightSecondary,
            'color': lightPrimary
          },
          '.theme': {
            'background-color': lightPrimary,
            'color': lightSecondary
          },
          '::placeholder': {
            'color': lightPrimary
          },
          '.btn-active': {
            'background-color': `${lightSecondary} !important`,
            'color': `${lightPrimary} !important`,
            'border': 'none !important'
          },
          '.radio': {
            'background-color': '#FFFFFF'
          },
          '.code-snippet': {
            'background-color': '#D8D8D8'
          },
          '.hover-text-color': {
            'color': '#4B535E'
          },
          'button': {
            'color': lightSecondary
          }
        }
      }
    ]
  }
};

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    // Example content paths...
    './**/*.html',
    './**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      black: '##000000',
      dark: '#312F31',
      'dark-medium': '##4B4B4B',
      'dark-light': '#909090',
      'light-opacity-10': '#00000033',
      light: '##EFEFEE',
      white: '#FFFFFF'
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
};

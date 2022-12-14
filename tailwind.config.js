const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/**.{js,jsx,ts,tsx}'],
  // important: '#root',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      primary: '#F07800',
      secondary: '#FEC906',
      black: '#000000',
      dark: '#312F31',
      'dark-medium': '#4B4B4B',
      'dark-light': '#909090',
      'light-opacity-10': '#00000010',
      'light-opacity-20': '#00000020',
      light: '#EFEFEE',
      white: '#FFFFFF'
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
};

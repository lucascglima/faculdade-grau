import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F07800'
    },
    secondary: {
      main: '#FEC906'
    },

    common: {
      white: '#FFFFFF',
      black: '#312F31'
    }
  },
  typography: {
    fontFamily: 'Rubik, sans-serif'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

export default theme;

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
    info: {
      light: '#ACABA8',
      main: '#4b4b4b',
      dark: '#312F31'
    },
    common: {
      white: '#FFFFFF',
      black: '#312F31'
    }
  },
  typography: {
    fontFamily: 'Rubik'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    // Button
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#F07800',
              ':hover': {
                backgroundColor: '#F07800',
                border: '1px solid #312F31',
                boxShadow: 'none'
              },
              ':focus': {
                color: '#FFFFFF'
              },
              ':disabled': {
                color: '#4b4b4b',
                backgroundColor: '#00000033'
              }
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.className === 'dark' && {
              ':focus': {
                background: '#FFFFFF',
                color: '#F07800'
              },
              ':disabled': {
                background: '#F07800',
                opacity: '0.2',
                color: '#312F31'
              }
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor: '#FEC906',
              ':hover': {
                backgroundColor: '#FEC906',
                border: '1px solid #312F31',
                boxShadow: 'none'
              },
              ':focus': {
                color: '#FFFFFF'
              },
              ':disabled': {
                color: '#4b4b4b',
                backgroundColor: '#00000033'
              }
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' &&
            ownerState.className === 'dark' && {
              backgroundColor: '#FEC906',
              ':focus': {
                background: '#FFFFFF',
                color: '#F07800'
              },
              ':disabled': {
                background: '#FEC906',
                opacity: '0.2',
                color: '#312F31'
              }
            })
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          px: '8px',
          py: '2px',
          borderRadius: '1000px'
        }
      }
    }
  }
});

export default theme;

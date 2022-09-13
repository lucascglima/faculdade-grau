import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#F07800",
    },
    secondary: {
      main: "#FEC906",
    },
    error: {
      main: red.A400,
    },
    common: {
      white: "#FFFFFF",
      black: "#312F31",
    },
  },
});

export default theme;

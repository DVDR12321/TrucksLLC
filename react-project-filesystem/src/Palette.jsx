import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
//import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    red: {
      main: red.A700,
    },
    black: {
      // This is green.A700 as hex.
      main: "#000000",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    white: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export default theme;

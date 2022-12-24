import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const PRIMARY_LIGHT = "#da1e2c";
const PRIMARY_MAIN = red.A700;
const PRIMARY_DARK = red[900];
const WHITE_COLOR = "#ffffff";
const BLACK_COLOR = "#000000";
const SECONDARY_COLOR = "#6d0713";

const theme = createTheme({
  palette: {
    primary: {
      light: PRIMARY_LIGHT,
      main: PRIMARY_MAIN,
      dark: PRIMARY_DARK,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: red.A700,
    },
    common: {
      white: WHITE_COLOR,
      black: BLACK_COLOR,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 1,
  },
});

export default theme;

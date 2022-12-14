import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
//import Button from '@mui/material/Button';
const WHITE_COLOR = "#fffff";
const BLACK_COLOR = "#000000";
const theme = createTheme({
  palette: {
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

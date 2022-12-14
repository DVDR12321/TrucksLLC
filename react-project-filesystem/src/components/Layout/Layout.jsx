import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Palette";
import AppHeader from "../Header/AppHeader";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <>{props.children}</>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

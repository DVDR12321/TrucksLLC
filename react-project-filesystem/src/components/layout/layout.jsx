import * as React from "react";
import Footer from "../Footer/Footer";
import AppHeader from "../Header/AppHeader";
import MainGrid from "../MainGrid/MainGrid";

const Layout = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <MainGrid></MainGrid>
      <Footer></Footer>
    </>
  );
};

export default Layout;

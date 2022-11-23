import * as React from "react";
import Footer from "../Footer/Footer";
import AppHeader from "../Header/AppHeader";
//import MainGrid from "../MainGrid/MainGrid";

const Layout = (props) => {
  return (
    <>
      <AppHeader></AppHeader>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;

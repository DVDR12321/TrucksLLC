import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import OwnerOperators from "./pages/OwnerOperators/OwnerOperators";
import QAPage from "./pages/QAPage/QAPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Apply } from "./pages/DriverApplicationPage/DriverApplicationPage";
import MainGrid from "./components/MainGrid/MainGrid";
import Drivers from "./pages/DriversPage/Drivers";
import CompanyDrivers from "./pages/CompanyDrivers/CompanyDrivers";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/OwnerOperators" element={<OwnerOperators />} />
          <Route path="/CompanyDrivers" element={<CompanyDrivers />} />
          <Route path="/q&a" element={<QAPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/" element={<MainGrid />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;

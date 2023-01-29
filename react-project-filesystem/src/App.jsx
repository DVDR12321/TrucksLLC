import React from "react";
import { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import OwnerOperators from "./Pages/OwnerOperators/OwnerOperators";
import QAPage from "./Pages/QAPage/QAPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Apply } from "./Pages/DriverApplicationPage/DriverApplicationPage";
import MainGrid from "./components/MainGrid/MainGrid";
import Drivers from "./Pages/DriversPage/Drivers";
import CompanyDrivers from "./Pages/CompanyDrivers/CompanyDrivers";
import ContactPage from "./Pages/ContactPage/ContactPage";

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

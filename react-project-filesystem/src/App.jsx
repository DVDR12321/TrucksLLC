import React from "react";
import { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import FleetPage from "./Pages/FleetPage/FleetPage";
import QAPage from "./Pages/QAPage/QAPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Apply } from "./Pages/DriverApplicationPage/DriverApplicationPage";
import MainGrid from "./components/MainGrid/MainGrid";
import Drivers from "./Pages/DriversPage/Drivers";

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Routes>
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/q&a" element={<QAPage />} />
            <Route path="/" element={<MainGrid />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Layout>
    );
  }
}
export default App;

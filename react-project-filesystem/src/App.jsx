import React from "react";
import { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
//Link
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import FinancesPage from "./Pages/FinancesPage/FinancesPage";
import FleetPage from "./Pages/FleetPage/FleetPage";
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import DriverApplicationPage from "./Pages/DriverApplicationPage/DriverApplicationPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/apply" element={<DriverApplicationPage />} />
          <Route path="/finances" element={<FinancesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/q&a" element={<QuestionsPage />} />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

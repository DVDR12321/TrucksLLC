import { Component } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
//Link
import AboutUs from "./Pages/AboutUs/AbouUs";
import Apply from "./Pages/Apply/DriverApplication";
import Finances from "./Pages/Finances/finances";
import OurFleet from "./Pages/OurFleet/OurFleet";
import QandA from "./Pages/QandA/quanda";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}

        <div className="App">
          <Layout></Layout>
        </div>
      </Router>
    );
  }
}
export default App;

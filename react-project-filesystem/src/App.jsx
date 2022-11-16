import { Component } from 'react';
import './App.css';
import Layout from './components/layout/layout';
//Link
import AboutUs from './Pages/AboutUs/AbouUs';
import Apply from './Pages/Apply/DriverApplication';
import Finances from './Pages/Finances/finances';
import OurFleet from './Pages/OurFleet/OurFleet';
import QandA from './Pages/QandA/quanda'
import Error from './Pages/error/error'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
        <Routes>
          <Route  path = "/aboutus" element = {<AboutUs/>}/>
          <Route  path = "/apply" element = {<Apply/>}/>
          <Route  path = "/finances" element = {<Finances/>}/>
          <Route  path = "/fleet" element = {<OurFleet/>}/>
          <Route  path = "/q&a" element = {<QandA/>}/>
          <Route path = "/" element = {<Layout/>}/>
          <Route path ='*' element = {<Error/>}/>
        </Routes>
      </Router>       
    );
  }
}
export default App;

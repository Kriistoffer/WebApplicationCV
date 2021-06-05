import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Work } from './components/Work';
import { Education } from './components/Education';
import { Qualifications } from './components/Qualifications';
import { Projects } from './components/Projects';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="background">
      {/* <Navbar/> */}
      <Navigationbar/>
      <Home/>
      <About/>
      <Work/>
      <Education/>
      <Qualifications/>
      <Projects/>
    </div>
  );
}

export default App;

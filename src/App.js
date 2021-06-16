import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Work } from './pages/Work/Work';
import { Education } from './pages/Education/Education';
import { Projects } from './pages/Projects/Projects';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="background">
      {/* <Navbar/> */}
      <Navigationbar/>
      <Home/>
      <About/>
      {/* <Work/> */}
      {/* <Education/> */}
      {/* <Qualifications/> */}
      <Projects/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Work } from './components/Work';
import { Education } from './components/Education';
import { Qualifications } from './components/Qualifications';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="background">
      <Navbar/>
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

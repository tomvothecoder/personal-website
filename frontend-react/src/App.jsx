import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from "./views/Home"

import '../node_modules/bulma/css/bulma.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;

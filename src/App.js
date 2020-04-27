import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component'
import EgyptianFraction from './components/egyptian-fraction.component.js'

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={EgyptianFraction} />
    </Router>
  );
}

export default App;

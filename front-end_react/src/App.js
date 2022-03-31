import React from 'react';
//import React, { useState } from 'react';
//import FacebookLogin from 'react-facebook-login';
import Login from './Login';
import Test from './Test';
//import axios from 'axios';
//import { Card, Image } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
    </div>

  );
} 

export default App;
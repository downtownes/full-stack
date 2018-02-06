import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Private from './components/Private/Private';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact path="/" component={Home}/>
      <Route path="/private" component={Private} />




        {/* <a href={process.env.REACT_APP_LOGIN}><button>Kenny Logins</button></a> */}
      </div>
    );
  }
}

export default App;

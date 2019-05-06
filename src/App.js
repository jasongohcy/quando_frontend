import React, { Component } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Login from './pages/Login.js'
import './App.css';
import { Route } from "react-router-dom";

import Compound from './pages/Compound.js';
import Home from './pages/Home.js';
import News from './pages/News.js'
import Todo from './pages/List.js'
import Stock from './pages/Stock.js'

import Profile from './containers/Profile'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <>
        <ToastProvider>
          <div align="center">
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/compound-interest" component={Compound}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/stock" component={Stock}/>
            <Route exact path="/todo" component={Todo}/>
          </div>
        </ToastProvider>
      </>
    );
  }
}

export default App;
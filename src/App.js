/* @flow */

import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Bar from './Bar';
import logo from './logo.svg';
import './App.css';

const MyTheme = {
  yellow: 'yellow',
  blue: 'blue',
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MyTheme}>
        <Bar />
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

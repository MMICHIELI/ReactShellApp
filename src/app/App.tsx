import * as React from 'react';
import { Component } from "react";

// Style
// import logo from './logo.svg'
import './App.css'
// Components
import { Hello } from "./components/Hello";

/**
 * Root Component
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to My App</h2>
        </div>
        <div className="App-container">
          <Hello compiler="Webpack 4+" framework="React 16" />
        </div>
      </div>
    )
  }
}

export default App
import * as React from 'react';
import { Component } from "react";

// Components
import { Hello } from "./components/Hello";
import styled from "styled-components";


const AppWrapper = styled.body`
  text-align: center;
`;
const HeaderWrapper = styled.header`
    background-color: #222;
    height: 30px;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;


/**
 * Root Component
 */
class App extends Component {

  render() {
    return (
      <AppWrapper className="App">
        <HeaderWrapper className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <Title>Welcome to My App</Title>
        </HeaderWrapper>
        <div className="App-container">
          <Hello compiler="Webpack 4+" framework="React 16" />
        </div>
      </AppWrapper>
    )
  }
}

export default App
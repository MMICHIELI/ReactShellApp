import * as React from 'react';
import { Component } from "react";
import {Hello} from "./Hello";

/**
 * Root Component
 */
class App extends Component {

    render() {
        return (
            <Hello compiler="Webpack 4+" framework="React 16" />
        )
    }
}

export default App
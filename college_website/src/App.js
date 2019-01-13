import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>Hello!</div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";

import "./App.css";

import Tickets from "./components/Tickets/Tickets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>ico</div>
        <div>Sort controlls</div>
        <div>
          <Tickets />
        </div>
      </div>
    );
  }
}

export default App;

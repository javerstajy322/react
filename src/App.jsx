import React, { Component } from "react";

import "./App.css";

import Tickets from "./components/Tickets/Tickets";
import Ticket from "./components/Tickets/Ticket/Ticket";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>ico</div>
        <div>Sort controlls</div>
        <div>
          {/* Tickets
          <Ticket />
          <br />
          <br />
          <hr /> */}
          <Tickets />
        </div>
      </div>
    );
  }
}

export default App;

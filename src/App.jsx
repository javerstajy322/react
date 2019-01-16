import React, { Component } from "react";

import "./App.css";

import "./components/Tickets/Tickets.css";
import Ticket from "./components/Tickets/Ticket/Ticket";

// import Tickets from "./components/Tickets/Tickets";
// import ticketsObj from "./components/Tickets/Tickets";

import Controls from "./components/Controls/Controls";

class App extends Component {
  state = {
    all: false,
    one: false,
    two: false,
    three: false,
    tickets: [],
    ticketsAll: []
  };

  clickHandler = id => {
    const { tickets } = this.state;

    tickets.forEach((el, index) => {
      if (index === id) {
        el.clickCounter = el.clickCounter + 1;
        console.log(el.stops);
        console.log(el);
      }
    });

    this.setState({
      tickets: tickets
    });
  };

  changeHandler = event => {
    const oldTickets = [...this.state.ticketsAll];
    const newTickets = [...this.state.tickets];
    const newAll = newTickets.filter(ticket => ticket.stops === 0);
    const newOne = newTickets.filter(ticket => ticket.stops === 1);
    const newTwo = newTickets.filter(ticket => ticket.stops === 2);
    const newThree = newTickets.filter(ticket => ticket.stops === 3);

    if (event.currentTarget.name === "all" && this.state.all === false) {
      this.setState({
        all: event.target.checked,
        tickets: newAll
      });
    }
    if (event.currentTarget.name === "all" && this.state.all === true) {
      console.log(oldTickets);
      this.setState({
        all: event.target.checked,
        tickets: oldTickets
      });
    }
    if (event.currentTarget.name === "one" && this.state.one === false) {
      this.setState({
        one: event.target.checked,
        tickets: newOne
      });
    }
    if (event.currentTarget.name === "one" && this.state.one === true) {
      this.setState({
        one: event.target.checked,
        tickets: oldTickets
      });
    }
    if (event.currentTarget.name === "two" && this.state.two === false) {
      this.setState({
        two: event.target.checked,
        tickets: newTwo
      });
    }
    if (event.currentTarget.name === "two" && this.state.two === true) {
      this.setState({
        two: event.target.checked,
        tickets: oldTickets
      });
    }
    if (event.currentTarget.name === "three" && this.state.three === false) {
      this.setState({
        three: event.target.checked,
        tickets: newThree
      });
    }
    if (event.currentTarget.name === "three" && this.state.three === true) {
      this.setState({
        three: event.target.checked,
        tickets: oldTickets
      });
    }
  };

  componentWillMount() {
    fetch("/data/tickets.json")
      .then(response => response.json())
      .then(data => {
        console.log("data", data); // обратите внимание на этот вывод
        this.setState({ tickets: data.tickets, ticketsAll: data.tickets });
      })
      .catch(error => console.log("error", error)); // этот выполнится в случае ошибки
  }

  render() {
    const { tickets } = this.state;

    const ticketsObj = tickets.map((item, index) => (
      <Ticket
        click={() => this.clickHandler(index)}
        clickCounter={item.clickCounter}
        key={index}
        price={item.price}
        departure_time={item.departure_time}
        origin={item.origin}
        origin_name={item.origin_name}
        departure_date={item.departure_date}
        stops={item.stops}
        arrival_time={item.arrival_time}
        destination_name={item.destination_name}
        destination={item.destination}
        arrival_date={item.arrival_date}
      />
    ));

    // const sortTickets = ticketsObj.filter(stops => stops.stops === 0);

    return (
      <div className="App">
        <div>ico</div>
        <div>
          <Controls
            all={this.state.all}
            one={this.state.one}
            two={this.state.two}
            three={this.state.three}
            updateAll={event => this.changeHandler(event)}
            updateOne={event => this.changeHandler(event)}
            updateTwo={event => this.changeHandler(event)}
            updateThree={event => this.changeHandler(event)}
          />
        </div>
        <div>
          {ticketsObj}
          {/* <Tickets/> */}
        </div>
      </div>
    );
  }
}

export default App;

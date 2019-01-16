import React from "react";
import "./Tickets.css";

import Ticket from "./Ticket/Ticket";

class Tickets extends React.Component {
  state = {
    tickets: []
  };

  clickHandler = id => {
    const { tickets } = this.state;

    tickets.forEach((el, index) => {
      if (index === id) {
        el.clickCounter = el.clickCounter + 1;
      }
    });

    this.setState({
      tickets: tickets
    });
  };

  componentWillMount() {
    fetch("/data/tickets.json")
      .then(response => response.json())
      .then(data => {
        console.log("data", data); // обратите внимание на этот вывод
        this.setState({ tickets: data.tickets });
      })
      .catch(error => console.log("error", error)); // этот выполнится в случае ошибки
      
  }

  render() {
    const { tickets, click } = this.state;

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

    return <div>{ticketsObj}</div>;
  }
}

export default Tickets;

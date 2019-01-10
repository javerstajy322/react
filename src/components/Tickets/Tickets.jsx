import React from "react";
import "./Tickets.css";

import Ticket from "./Ticket/Ticket";
import ticketsDate from "../../tickets.json";

class tickets extends React.Component {
  render() {
    const ticket = ticketsDate.tickets;

    const ticketsObj = Object.keys(ticketsDate.tickets).map((item, index) => (
      <Ticket
        key={index}
        price={ticket[item].price}
        departure_time={ticket[item].departure_time}
        origin={ticket[item].origin}
        origin_name={ticket[item].origin_name}
        departure_date={ticket[item].departure_date}
        stops={ticket[item].stops}
        arrival_time={ticket[item].arrival_time}
        destination_name={ticket[item].destination_name}
        destination={ticket[item].destination}
        arrival_date={ticket[item].arrival_date}
      />
    ));

    return <div>{ticketsObj}</div>;
  }
}

export default tickets;

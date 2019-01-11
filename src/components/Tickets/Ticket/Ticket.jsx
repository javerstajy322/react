import React from "react";
import "./Ticket.css";

const ticket = props => (
  <div className="TicketWrapper" key>
    <div className="ActionRow">
      <img src="" alt="" />
      <button onClick={props.click}>Купить за {props.price}</button>
      <div>click {props.clickCounter}</div>
    </div>
    <div className="TicketInfoRow">
      <div className="From">
        <h2>{props.departure_time}</h2>
        <h3>
          {props.origin}, {props.origin_name}
        </h3>
        <p>Посадка: {props.departure_date}</p>
      </div>
      <div className="PLANE">
        <div>пересадки {props.stops}</div>
      </div>
      <div className="Where">
        <h2>{props.arrival_time}</h2>
        <h3>
          {props.destination_name}, {props.destination}
        </h3>
        <p>Высадка: {props.arrival_date}</p>
      </div>
    </div>
  </div>
);

export default ticket;

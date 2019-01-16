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
    // Zero добавил в стейте для нулевого количества остановок, тебе нужно связать это с чекбоксом
    zero: false,
    one: false,
    two: false,
    three: false,
    // В tickets у нас будут тикеты, которые мы показываем
    tickets: [],
    // Тут просто все тикеты
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

  changeHandler = type => {
    // Пусть тут лежат все твои состояния в стейте
    // В другом приложении тебе не нужно будет так делать потому что все твои данные должны быть связаны между собой изначально
    // Иначе ты рискуешь застрять в подобной куче кода и постоянно натыкаться на ошибки
    const allStops = ['zero', 'one', 'two', 'three']
    // Если пришедший тип меньше одного - выбран тип ВСЕ
    // В таком случае мы работаем только с чекбоксом all и делаем ретурн, так что код ниже ретурна не заработает
    if (type === -1) {
      const values = {}
      // Если клик произошел на чекбокс
      allStops.forEach(v => values[v] = false)
      values['all'] = !this.state.all
      this.setState({
        // Если новое значение all = true, то отдаем все тикеты, иначе никаких
        tickets: [...values.all ? this.state.ticketsAll : []],
        ...values
      })
      return
    }
    let tickets = []
    // Изначально в values наш старый стейт и all: false, так как пришедший тип не all
    // В values будут лежать новые значения после кликов на чекбоксы, которые мы потом запишем в стейт
    const values = { ...this.state, all: false }
    allStops.forEach((stops, i) => {
      // Здесь i - это индекс массива allStops, обозначающий количество остановок
      // Если this.state['one'] или другой из массива равен true, мы берем индекс этого элемента в массиве как количество стопов
      // и добавляем к существующему массиву из тикетов все тикеты содержащие количество стопов равное индексу текущего элемента
      // И если индекс текущего элемента равен type, то это клик на чекбокс, так что меняем значение на противоположное
      if (type === i) values[stops] = !this.state[stops]
      if (values[stops]) {
        // Если новое значение чекбокса true, то отдаем в массив с тикетами тикеты с соответствующим количеством стопов
        tickets = tickets.concat(this.state.ticketsAll.filter(t => t.stops === i))
      }
    })
    // Пишем наши новые переписанные значения в стейт и тикеты
    this.setState({ ...values, tickets })
  };

  componentWillMount() {
    fetch("/data/tickets.json")
      .then(response => response.json())
      .then(data => {
        console.log("data", data); // обратите внимание на этот вывод
        // По дефолту показываем 0 тикетов, так что tickets отсюда убираю
        this.setState({ ticketsAll: data.tickets });
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
            zero={this.state.zero}
            one={this.state.one}
            two={this.state.two}
            three={this.state.three}
            // Вместо четырех старых одинаковых методов делаю один общий
            // И в качестве аргумента беру `type`, который отправлю изнутри Controls.jsx
            update={this.changeHandler}
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

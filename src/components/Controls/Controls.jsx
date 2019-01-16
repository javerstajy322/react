import React, { Component } from "react";

class Controls extends Component {


  render() {
    console.log(`This props three`, this.props.three)
    return (
      <div>
        <form action="">
          <input
            type="checkbox"
            name="all"
            id=""
            checked={this.props.all}
            // Каждый новый чекбокс отправляет свой тип
            // В идеале тебе нужно сделать компонент для чекбокса и избавиться от такой кучи кода, ну и проще будет поддерживать
            onChange={() => this.props.update(-1)}
          />{" "}
          all
          <br />
          <input
            type="checkbox"
            name="zero"
            id=""
            checked={this.props.zero}
            onChange={() => this.props.update(0)}
          />{" "}
          0
          <br />
          <input
            type="checkbox"
            name="one"
            id=""
            checked={this.props.one}
            onChange={() => this.props.update(1)}
          />{" "}
          1
          <br />
          <input
            type="checkbox"
            name="two"
            id=""
            checked={this.props.two}
            onChange={() => this.props.update(2)}
          />{" "}
          2
          <br />
          <input
            type="checkbox"
            name="three"
            id=""
            // У тебя тут опечатка, three был с заглавной и чекбокс не работал
            checked={this.props.three}
            onChange={() => this.props.update(3)}
          />{" "}
          3
          <br />
        </form>
      </div>
    );
  }
}

export default Controls;

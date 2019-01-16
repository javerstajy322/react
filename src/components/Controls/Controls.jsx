import React, { Component } from "react";

class Controls extends Component {


  render() {
    return (
      <div>
        <form action="">
          <input
            type="checkbox"
            name="all"
            id=""
            checked={this.props.all}
            onChange={this.props.updateAll}
          />{" "}
          0
          <br />
          <input
            type="checkbox"
            name="one"
            id=""
            checked={this.props.one}
            onChange={this.props.updateOne}
          />{" "}
          1
          <br />
          <input
            type="checkbox"
            name="two"
            id=""
            checked={this.props.two}
            onChange={this.props.updateTwo}
          />{" "}
          2
          <br />
          <input
            type="checkbox"
            name="three"
            id=""
            checked={this.props.Three}
            onChange={this.props.updateThree}
          />{" "}
          3
          <br />
        </form>
      </div>
    );
  }
}

export default Controls;

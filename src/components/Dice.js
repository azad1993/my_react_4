import React, { Component } from "react";
import "./Dice.css";
export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: 0
    };
  }
  
  handleClick = (e) => {
    this.setState({ count: Math.floor(Math.random() * 6), value: e.target.className });
    
  };

  render() {
    return (
      <div>
        <p>{this.state.value == 1 && this.state.count}</p>
        <button className="1" onClick={this.handleClick}>my Dice</button>
        <p>{this.state.value == 2 && this.state.count}</p>
        <button className="2" onClick={this.handleClick}>my Dice</button>
        <p>{this.state.value == 3 && this.state.count}</p>
        <button className="3" onClick={this.handleClick}>my Dice</button>
      </div>
    );
  }
}

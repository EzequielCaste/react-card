import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    const xPos = Math.floor(Math.random() * 15);
    const yPos = Math.floor(Math.random() * 15);
    const angle = Math.floor(Math.random() * 25);
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }

  render() {
    console.log(this._transform);
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.code}
      />
    );
  }
}

export default Card;

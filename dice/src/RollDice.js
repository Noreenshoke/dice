import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 1,
      rolling: false,
    };
    
  }

  roll = () => {
    this.setState({ rolling: true });

    setTimeout(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;

      this.setState({
        dice1: newDice1,
        dice2: newDice2,
        rolling: false,
      });
    }, 1000);
    
  };

  render() {
    const { dice1, dice2, rolling } = this.state;

    return (
      <div className={`random ${rolling ? "rolling" : ""}`}>
        <div className="dice-container">
          <Die dice={dice1} />
          <Die dice={dice2} />
        </div>
        <center>
          <button class="button" onClick={this.roll} disabled={rolling}>
            Roll
          </button>
        </center>
      </div>
    );
  }
}

export default RollDice;

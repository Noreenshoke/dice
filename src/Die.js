//Die - an individual die that takes props and displays the correct face of the die based on props.

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Die(props) {
  const { dice } = props;

  const diceIcons = [
    "fas fa-dice-one",
    "fas fa-dice-two",
    "fas fa-dice-three",
    "fas fa-dice-four",
    "fas fa-dice-five",
    "fas fa-dice-six",
  ];

  return (
    <div className="dice">
      <i className={diceIcons[dice - 1]}></i>
    </div>
  );
}

export default Die;

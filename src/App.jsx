import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedValue, setSelectedvalue] = useState("1d6");
  const [diceRoll, setDiceRoll] = useState(null);

  const handleChange = (event) => {
    setSelectedvalue(event.target.value);
  };

  const handleClick = () => {
    setDiceRoll(Math.floor(Math.random() * parseInt(selectedValue)) + 1);
  };

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="1d2"
            value="2"
            checked={selectedValue === "2"}
            onChange={handleChange}
          />
          1D2
        </label>
        <label>
          <input
            type="radio"
            name="1d4"
            value="4"
            checked={selectedValue === "4"}
            onChange={handleChange}
          />
          1D4
        </label>
        <label>
          <input
            type="radio"
            name="1d6"
            value="6"
            checked={selectedValue === "6"}
            onChange={handleChange}
          />
          1d6
        </label>
        <label>
          <input
            type="radio"
            name="1d8"
            value="8"
            checked={selectedValue === "8"}
            onChange={handleChange}
          />
          1D8
        </label>
        <label>
          <input
            type="radio"
            name="1d10"
            value="10"
            checked={selectedValue === "10"}
            onChange={handleChange}
          />
          1D10
        </label>
        <label>
          <input
            type="radio"
            name="1d20"
            value="20"
            checked={selectedValue === "20"}
            onChange={handleChange}
          />
          1D20
        </label>
      </div>
      <div>
        <button onClick={handleClick}>Roll Dice!</button>
      </div>
      <div>
        <span>{diceRoll}</span>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import {
  DiceTwo,
  DiceFour,
  DiceSix,
  DiceEight,
  DiceTen,
  DiceTwenty,
} from "./components/dice";
import ImportButton from "./components/importButton";
import "./App.css";

function App() {
  const [selectedValue, setSelectedvalue] = useState("6");
  const [diceRoll, setDiceRoll] = useState(null);

  const handleChange = (event) => {
    setSelectedvalue(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = () => {
    setDiceRoll(Math.floor(Math.random() * parseInt(selectedValue)) + 1);
  };

  const handleFile = (file) => {
    console.log("Selected file:", file);
  };

  return (
    <>
      <ImportButton onFileSelect={handleFile} />
      <div>
        <DiceTwo selectedValue={selectedValue} onChange={handleChange} />
        <DiceFour selectedValue={selectedValue} onChange={handleChange} />
        <DiceSix selectedValue={selectedValue} onChange={handleChange} />
        <DiceEight selectedValue={selectedValue} onChange={handleChange} />
        <DiceTen selectedValue={selectedValue} onChange={handleChange} />
        <DiceTwenty selectedValue={selectedValue} onChange={handleChange} />
      </div>
      <div>
        <button onClick={handleClick}>Roll Dice!</button>
      </div>
      <div>
        <span className="roll-result">{diceRoll}</span>
      </div>
    </>
  );
}

export default App;

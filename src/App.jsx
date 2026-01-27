import React, { useState } from "react";
import {
  DiceTwo,
  DiceFour,
  DiceSix,
  DiceEight,
  DiceTen,
  DiceTwenty,
} from "./components/dice";
import CharacterStats from "./components/characterStats";
import "./App.css";

function App() {
  const [selectedValue, setSelectedvalue] = useState("6");
  const [diceRoll, setDiceRoll] = useState(null);
  const [stats, setStats] = useState({
    str: "",
    dex: "",
    con: "",
    int: "",
    wis: "",
    cha: "",
  });

  // setup useEffect to calculate stat modifiers on stats change

  const diceMath = () => {
    return Math.floor(Math.random() * parseInt(selectedValue)) + 1;
  };

  const handleChange = (event) => {
    setSelectedvalue(event.target.value);
  };

  const handleClick = () => {
    setDiceRoll(diceMath);
  };

  const handleStatClick = (statKey) => {
    const stat = stats[statKey] || 0;
    const statModifier = parseInt(stat) == 0 ? 0 : Math.floor((stat - 10) / 2);
    const baseRoll = diceMath();
    console.log("Base Roll:", baseRoll, "Stat Modifier:", statModifier);
    setDiceRoll(baseRoll + parseInt(statModifier));
  };

  return (
    <>
      <div>
        <h1>Character Stats</h1>
        <CharacterStats
          stats={stats}
          onStatChange={setStats}
          handleClick={handleStatClick}
        />
      </div>
      <div>
        <h1>Dice Roller</h1>
        <p>Select a die and roll it!</p>
      </div>
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

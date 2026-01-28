import React, { useEffect, useState } from "react";
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
  const [statModifier, setStatModifier] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  });

  useEffect(() => {
    const newStatModifier = {};
    Object.keys(stats).forEach((statKey) => {
      const statValue = stats[statKey] || 0;
      newStatModifier[statKey] =
        parseInt(statValue) == 0 ? 0 : Math.floor((statValue - 10) / 2);
    });
    Object.keys(newStatModifier).forEach((key) => {
      if (statModifier[key] !== newStatModifier[key]) {
        setStatModifier(newStatModifier);
      }
    });
  }, [stats, statModifier]);

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
    const baseRoll = diceMath();
    console.log("Base Roll: ", baseRoll);
    console.log("Stat Modifier: ", statModifier[statKey]);
    setDiceRoll(baseRoll + parseInt(statModifier[statKey]));
  };

  return (
    <>
      <div>
        <h1>Character Stats</h1>
        <CharacterStats
          stats={stats}
          statModifier={statModifier}
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

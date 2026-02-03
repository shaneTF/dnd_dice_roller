import { useState, useMemo } from "react";
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
  const [statMod, setStatMod] = useState(null);
  const [diceRolled, setDiceRolled] = useState(false);
  const [stats, setStats] = useState({
    str: "",
    dex: "",
    con: "",
    int: "",
    wis: "",
    cha: "",
  });

  const statModifier = useMemo(() => {
    return Object.fromEntries(
      Object.entries(stats).map(([key, value]) => {
        const score = parseInt(value) || 0;
        const mod = score === 0 ? 0 : Math.floor((score - 10) / 2);
        setStatMod(mod);
        return [key, mod];
      }),
    );
  }, [stats]);

  const diceMath = () => {
    setDiceRolled(true);
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
    setStatMod(statModifier[statKey]);
    setDiceRoll(baseRoll + parseInt(statModifier[statKey]));
  };

  return (
    <>
      <div>
        <h1>Enter your characters stats!</h1>
        <p>Click a stat to roll with its modifier.</p>
      </div>
      <div>
        <CharacterStats
          stats={stats}
          statModifier={statModifier}
          onStatChange={setStats}
          handleClick={handleStatClick}
        />
      </div>
      <h1>Dice Roller</h1>
      <p>Select a die and roll it!</p>
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
        {diceRolled && (
          <span>
            {statMod} + {diceRoll}
          </span>
        )}
      </div>
      <div>
        <span className="roll-result">{diceRoll}</span>
      </div>
    </>
  );
}

export default App;

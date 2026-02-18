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
import CharacterLevel from "./components/characterLevel";
import "./App.css";

// Should probably clean this up later
function App() {
  const [selectedValue, setSelectedvalue] = useState("6");
  const [diceSelected, setDiceSelected] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [rollHistory, setRollHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [characterLevel, setCharacterLevel] = useState(1);
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
        console.log("Stat Modifier Calculation: ", key, score, mod);
        return [key, mod];
      }),
    );
  }, [stats]);

  const diceMath = () => {
    return Math.floor(Math.random() * parseInt(selectedValue)) + 1;
  };

  const handleChange = (event) => {
    setDiceSelected(event.target.name);
    setSelectedvalue(event.target.value);
  };

  const handleClick = (statKey) => {
    const baseRoll = diceMath();
    if (statModifier[statKey] !== undefined) {
      setDiceRoll(baseRoll + statModifier[statKey]);
    } else {
      setDiceRoll(baseRoll);
    }
    console.log(
      "Rolled: ",
      baseRoll,
      " with modifier: ",
      statModifier[statKey],
    );
    setRollHistory((prevHistory) => [
      {
        dice: diceSelected,
        roll: baseRoll,
        modifier: statModifier[statKey],
        total: baseRoll + (statModifier[statKey] || 0),
      },
      ...prevHistory.slice(0, 9),
    ]);
  };

  return (
    <>
      <div className="layout">
        <div className="left-panel">
          <div>
            <h1>Enter your characters stats!</h1>
            <p>Click a stat to roll with its modifier.</p>
          </div>
          <div className="character-level">
            <CharacterLevel
              characterLevel={characterLevel}
              characterLevelChange={setCharacterLevel}
            />
          </div>

          <div>
            <CharacterStats
              stats={stats}
              statModifier={statModifier}
              onStatChange={setStats}
              handleClick={handleClick}
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
            {diceRoll ? (
              <span className="roll-result">{diceRoll}</span>
            ) : (
              <span className="roll-result" style={{ opacity: 0 }}>
                0
              </span>
            )}
          </div>
        </div>

        <div className="right-panel">
          <div
            className="accordion-toggle"
            onClick={() => setShowHistory((prev) => !prev)}
          >
            <h2>History</h2>
            <span className={`accordion-arrow ${showHistory ? "open" : ""}`}>
              {">"}
            </span>
          </div>
          <div className={`accordion-wrapper ${showHistory ? "open" : ""}`}>
            {rollHistory.length === 0 && <p>No rolls yet.</p>}

            {rollHistory.length > 0 && (
              <div className="roll-history">
                <ul>
                  {rollHistory.slice(-10).map((entry, index) => (
                    <li key={index}>
                      <strong>{entry.dice}</strong> | Roll: {entry.roll} |
                      Modifier:{" "}
                      {entry.modifier !== undefined ? entry.modifier : 0} |
                      Total: {entry.total}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

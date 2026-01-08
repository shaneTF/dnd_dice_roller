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
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorder from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "./App.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorder;

function App() {
  const [selectedValue, setSelectedvalue] = useState("6");
  const [diceRoll, setDiceRoll] = useState(null);
  const [parsedText, setParsedText] = useState("");

  const handleChange = (event) => {
    setSelectedvalue(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = () => {
    setDiceRoll(Math.floor(Math.random() * parseInt(selectedValue)) + 1);
  };

  const handleFile = async (file) => {
    console.log("Selected file:", file);
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    console.log(pdf);

    let extractedText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      extractedText += strings.join(" ") + "\n";
    }
    console.log("Extracted Text:", extractedText);

    const statsText = extractCharacterStats(extractedText);
    console.log("Extracted Character Stats:", statsText);
    setParsedText(statsText);
  };

  function extractCharacterStats(text) {
    const get = (regex) => text.match(regex)?.[1]?.trim() || null;
    const stat = (name) => {
      const regex = new RegExp(name + "[^0-9]{0,40}(\\d{1,2})", "i");
      return text.match(regex)?.[1] || null;
    };
    return {
      class: get(
        /(Cleric|Fighter|Wizard|Rogue|Barbarian|Paladin|Druid|Monk|Ranger|Warlock|Sorcerer)/i
      ),
      level: get(/(\d+)(?:st|nd|rd|th)\s*LEVEL/i),
      strength: stat("Strength"),
    };
  }

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

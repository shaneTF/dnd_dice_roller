import "./dice.css";

export const DiceTwo = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d2"
        value="2"
        checked={selectedValue === "2"}
        onChange={onChange}
      />
      1D2
    </label>
  );
};

export const DiceFour = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d4"
        value="4"
        checked={selectedValue === "4"}
        onChange={onChange}
      />
      1D4
    </label>
  );
};

export const DiceSix = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d6"
        value="6"
        checked={selectedValue === "6"}
        onChange={onChange}
      />
      1d6
    </label>
  );
};

export const DiceEight = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d8"
        value="8"
        checked={selectedValue === "8"}
        onChange={onChange}
      />
      1D8
    </label>
  );
};

export const DiceTen = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d10"
        value="10"
        checked={selectedValue === "10"}
        onChange={onChange}
      />
      1D10
    </label>
  );
};

export const DiceTwenty = ({ selectedValue, onChange }) => {
  return (
    <label className="dice-select-label">
      <input
        className="hidden-radio"
        type="radio"
        name="1d20"
        value="20"
        checked={selectedValue === "20"}
        onChange={onChange}
      />
      1D20
    </label>
  );
};

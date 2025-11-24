import "./App.css";

function App() {
  return (
    <>
      <form>
        <label>
          <input type="radio" name="diceType" value="red" id="six" /> Red
        </label>
        <label>
          <input type="radio" name="diceType" value="blue" id="eight" /> Blue
        </label>
        <label>
          <input type="radio" name="diceType" value="green" id="twenty" /> Green
        </label>
      </form>
    </>
  );
}

export default App;

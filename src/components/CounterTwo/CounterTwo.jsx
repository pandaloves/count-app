import { useState } from "react";
import "./CounterTwo.css";

const CounterTwo = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    const newNumber = parseFloat(inputValue);

    if (!isNaN(newNumber)) {
      setNumbers([...numbers, newNumber]);
      setInputValue("");
    } else {
      alert("Ange ett giltigt tal.");
    }
  };

  const handleCalculate = () => {
    const sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
    alert(`Summan av alla tal är ${sumNumbers}`);
  };

  return (
    <div className="container">
      <p>
        *Ange ett tal i textboxen, klicka på "Submit" knappen för att skicka in
        talet och dessa kan göras flera gånger. Sedan klicka på "Calculate"
        knappen för att beräkna summan av alla tal som har skickats in.
      </p>
      <input
        type="text"
        placeholder="Ange ett tal"
        className="input"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="buttons">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="button" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;

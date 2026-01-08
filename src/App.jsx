import { useState } from "react";
import "./App.css";

function App() {
  const [greetings, setGreetings] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setGreetings([...greetings, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = () => {
    if (inputValue.trim() !== "") {
      const newGreetings = [...greetings];
      if (newGreetings.length === 0) {
        setGreetings([inputValue]);
      } else {
        newGreetings[newGreetings.length - 1] = inputValue;
        setGreetings(newGreetings);
      }
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        {greetings.length === 0 ? (
          <h2>ผลลัพธ์จะมาแทนที่ข้อความนี้</h2>
        ) : (
          greetings.map((greeting, index) => <h2 key={index}>{greeting}</h2>)
        )}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="buttons">
          <button onClick={handleChange}>Change</button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;

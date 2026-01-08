import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("ผลลัพธ์จะมาแทนที่ข้อความนี้");

  const handleHi = () => {
    setGreeting("Hi");
  };

  const handleSawasdee = () => {
    setGreeting("สวัสดี");
  };

  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{greeting}</h2>
        <div className="buttons">
          <button onClick={handleHi}>Hi</button>
          <button onClick={handleSawasdee}>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;

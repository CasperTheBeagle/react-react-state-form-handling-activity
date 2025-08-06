import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>ผลลัพธ์จะมาแทนที่ข้อความนี้</h2>
        <input type="text" />
        <div className="buttons">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;

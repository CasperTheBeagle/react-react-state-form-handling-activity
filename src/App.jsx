import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>ผลลัพธ์จะมาแทนที่ข้อความนี้</h2>
        <div className="buttons">
          <button>Hi</button>
          <button>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;

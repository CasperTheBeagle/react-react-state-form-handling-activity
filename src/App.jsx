import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container">
        <h2 style={{ color: "red" }}>ผลลัพธ์จะมาแทนที่ตรงนี้</h2>
        <input type="text" placeholder="Enter your email" />
        <div className="buttons">
          <button type="submit">Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;

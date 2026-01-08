import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage(`✓ ${email} is valid`);
      setMessageColor("green");
    } else {
      setMessage(`✗ ${email} is not valid`);
      setMessageColor("red");
    }
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container" onSubmit={validateEmail}>
        <h2 style={{ color: messageColor }}>
          {message}
        </h2>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="buttons">
          <button type="submit">Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;

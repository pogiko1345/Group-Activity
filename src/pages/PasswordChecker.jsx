import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState("0%");

  function handleCheck(event) {
    event.preventDefault();

    if (password.length === 0) {
      setStatus("");
      setMessage("Please enter a password.");
      setStrength("0%");
    } else if (password.length < 6) {
      setStatus("Weak Password");
      setMessage("Status: Weak – Create a stronger password.");
      setStrength("33%");
    } else if (password.length <= 9) {
      setStatus("Medium Password");
      setMessage("Status: Weak – Create a stronger password.");
      setStrength("66%");
    } else {
      setStatus("Strong Password");
      setMessage("Status: Strong – You can use this password.");
      setStrength("100%");
    }
  }

  function handleClear() {
    setPassword("");
    setStatus("");
    setMessage("");
    setStrength("0%");
  }

  return (
    <section className="activity-page">
      <div className="mini-card">
        <div className="mini-card-header">
          <p>Activity 3</p>
          <h2>Password Strength Checker</h2>
        </div>

        <div className="mini-card-body">
          <form onSubmit={handleCheck} className="form-grid">
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter a password"
              />
            </label>

            <div className="button-row">
              <button type="submit">Check Password</button>
              <button
                type="button"
                className="secondary"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>

          {(status || message) && (
            <div className="result-panel">
              {status && <p>Password Status: {status}</p>}
              <p>{message}</p>

              <div className="strength-bar">
                <span style={{ width: strength }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PasswordChecker;
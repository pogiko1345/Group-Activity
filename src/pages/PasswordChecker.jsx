import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  function handleCheck(event) {
    event.preventDefault();

    // TODO: Check password.length.
    // TODO: Set Weak, Medium, or Strong.
    // TODO: Set the correct status message.
    setStatus("TODO");
    setMessage("TODO: Add password strength logic.");
  }

  function handleClear() {
    // TODO: Clear password, status, and message.
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
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter a password" />
            </label>

            <div className="button-row">
              <button type="submit">Check Password</button>
              <button type="button" className="secondary" onClick={handleClear}>Clear</button>
            </div>
          </form>

          {status && (
            <div className="result-panel">
              <p>Password Status: {status}</p>
              <p>{message}</p>
              <div className="strength-bar">
                <span style={{ width: "33%" }} />
              </div>
            </div>
          )}
          </div>
      </div>
    </section>
  );
}

export default PasswordChecker;

import { useState } from "react";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleEvaluate(event) {
    event.preventDefault();

    const trimmedName = studentName.trim();
    const numericScore = Number(score);

    if (trimmedName === "" || score === "") {
      setResult(null);
      setError("Please enter the student name and score.");
      return;
    } else if (Number.isNaN(numericScore)) {
      setResult(null);
      setError("Please enter a valid score.");
      return;
    } else if (numericScore < 0 || numericScore > 100) {
      setResult(null);
      setError("Invalid score");
      return;
    }

    let remarks = "";

    if (numericScore >= 90 && numericScore <= 100) {
      remarks = "Excellent";
    } else if (numericScore >= 85 && numericScore <= 89) {
      remarks = "Very Good";
    } else if (numericScore >= 80 && numericScore <= 84) {
      remarks = "Good";
    } else if (numericScore >= 75 && numericScore <= 79) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    setResult({
      studentName: trimmedName,
      score: numericScore,
      remarks
    });
    setError("");
  }

  function handleClear() {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  }

  return (
    <section className="card">
      <p className="eyebrow">Activity 2</p>
      <h2>Student Grade Evaluation</h2>

      <form onSubmit={handleEvaluate} className="form-grid">
        <label>
          Student Name
          <input value={studentName} onChange={(event) => setStudentName(event.target.value)} placeholder="Enter student name" />
        </label>

        <label>
          Score
          <input type="number" min="0" max="100" value={score} onChange={(event) => setScore(event.target.value)} placeholder="0 - 100" />
        </label>

        <div className="button-row">
          <button type="submit">Evaluate</button>
          <button type="button" className="secondary" onClick={handleClear}>Clear</button>
        </div>
      </form>

      {error && <p className="feedback">{error}</p>}

      {result && (
        <div className="result-panel">
          <p>Name: {result.studentName}</p>
          <p>Score: {result.score}</p>
          <p>Remarks: {result.remarks}</p>
        </div>
      )}
    </section>
  );
}

export default GradeEvaluation;

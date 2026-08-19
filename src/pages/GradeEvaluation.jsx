import { useState } from "react";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function getRemarkClass(remarks) {
    if (remarks === "Excellent") {
      return "grade-excellent";
    } else if (remarks === "Very Good") {
      return "grade-very-good";
    } else if (remarks === "Good") {
      return "grade-good";
    } else if (remarks === "Passed") {
      return "grade-passed";
    }

    return "grade-failed";
  }

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
    <section className="activity-page">
      <div className="mini-card">
        <div className="mini-card-header">
          <p>Activity 2</p>
          <h2>Student Grade Evaluation</h2>
        </div>

        <div className="mini-card-body">
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

          {error && <p className="feedback error-feedback">{error}</p>}

          {result && (
          <div className="grade-result-card">
              <p>Student Name</p>
              <strong>{result.studentName}</strong>

              <p>Score</p>
              <strong>{result.score}</strong>

              <p>Remarks</p>
            <strong className={`grade-remark ${getRemarkClass(result.remarks)}`}>{result.remarks}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GradeEvaluation;

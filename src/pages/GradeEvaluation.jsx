import { useState } from "react";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function getRemarkClass(remarks) {
    if (remarks === "Excellent") {
      return "remark-excellent";
    } else if (remarks === "Very Good") {
      return "remark-very-good";
    } else if (remarks === "Good") {
      return "remark-good";
    } else if (remarks === "Passed") {
      return "remark-passed";
    }

    return "remark-failed";
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
    <section className="activity-detail">
      <div className="activity-heading">
        <span className="large-activity-number">2</span>
        <div>
          <p className="eyebrow">Activity 2</p>
          <h2>Student Grade Evaluation</h2>
        </div>
      </div>

      <p className="activity-description">
        Evaluate a score into Excellent to Failed, with range validation.
      </p>

      <div className="activity-info-grid">
        <div className="info-panel tinted-panel">
          <h3>Inputs & Buttons</h3>
          <ul>
            <li>Student Name input</li>
            <li>Score input</li>
            <li>Evaluate button</li>
            <li>Clear button</li>
          </ul>
        </div>

        <div className="info-panel">
          <h3>Conditions</h3>
          <ul className="condition-list">
            <li><strong>90 - 100</strong> Excellent</li>
            <li><strong>85 - 89</strong> Very Good</li>
            <li><strong>80 - 84</strong> Good</li>
            <li><strong>75 - 79</strong> Passed</li>
            <li><strong>Below 75</strong> Failed</li>
            <li><strong>&lt; 0 or &gt; 100</strong> Invalid score</li>
          </ul>
        </div>

        <div className="info-panel result-preview-panel">
          <h3>Result Panel Shows</h3>
          <p>Student Name</p>
          <p>Score</p>
          <p>Remarks</p>
        </div>
      </div>

      <div className="card grade-card">
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
          <div className="result-panel grade-result">
            <p><span>Student Name</span><strong>{result.studentName}</strong></p>
            <p><span>Score</span><strong>{result.score}</strong></p>
            <p>
              <span>Remarks</span>
              <strong className={`remark-badge ${getRemarkClass(result.remarks)}`}>{result.remarks}</strong>
            </p>
          </div>
        )}
      </div>

      <div className="demonstrates-panel">
        <strong>Demonstrates</strong>
        <span>useState</span>
        <span>onChange</span>
        <span>onClick / onSubmit</span>
        <span>Input validation</span>
        <span>if / else if / else</span>
        <span>Conditional rendering</span>
      </div>
    </section>
  );
}

export default GradeEvaluation;

import React, { useState } from "react";
import { calculateGrade } from "./Formulas";

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [score, setScore] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleAddGrade = () => {
    if (score && weight) {
      setGrades([
        ...grades,
        { score: parseFloat(score), weight: parseFloat(weight) }
      ]);
      setScore("");
      setWeight("");
    }
  };

  const handleCalculate = () => {
    const grade = calculateGrade(grades);
    setResult(grade);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br /><br />
        <button onClick={handleAddGrade}>Add Grade</button>
      </div>

      <h2>Grades:</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            Score: {grade.score}, Weight: {grade.weight}
          </li>
        ))}
      </ul>

      <button onClick={handleCalculate}>Calculate Grade</button>
      {result !== null && <h2>Weighted Grade: {result}</h2>}
    </div>
  );
};

export default Grades;

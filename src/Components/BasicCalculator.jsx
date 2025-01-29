import React, { useState } from "react";
import { basicCalculator } from "./Formulas";

function BasicCalculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+')
    const [result, setResult] = useState(null);


    const handleCalculateResult = () => {
        const calculatedResult = basicCalculator(num1,num2,operator);
        setResult(calculatedResult);

    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>
                    Number 1:
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="Enter Number 1"
                    />
                </label>
            </div>
            <div style={{ marginTop: "10px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                >
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='/'>/</option>
                    <option value='*'>*</option>
                </select>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>
                    Number 2:
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Enter Number 2"
                    />
                </label>
            </div>
            <br></br>
            <button
                onClick={handleCalculateResult}
            >
                Calculate Result
            </button>

            {result && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Result: {result}</h2>

                </div>
            )}
        </div>
    );
}

export default BasicCalculator;

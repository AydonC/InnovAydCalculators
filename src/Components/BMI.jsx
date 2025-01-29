import React, { useState } from "react";
import { calculateBMI } from "./Formulas";

function BMI() {
    const [weight, setWeight] = useState("");
    const [weightUnit, setWeightUnit] = useState("kg");
    const [height, setHeight] = useState("");
    const [heightUnit, setHeightUnit] = useState("m");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");


    const handleCalculateBMI = () => {
        const calculatedBMI = calculateBMI(weight, height, weightUnit, heightUnit);
        setBmi(calculatedBMI.toFixed(2));

        if (calculatedBMI < 18.5) {
            setCategory("Underweight");
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            setCategory("Normal weight");
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>
                    Weight:
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight"
                    />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="lbs">lbs</option>
                </select>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>
                    Height:
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter height"
                    />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select
                    value={heightUnit}
                    onChange={(e) => setHeightUnit(e.target.value)}
                >
                    <option value="m">meters</option>
                    <option value="cm">centimeters</option>
                    <option value="ft">feet</option>
                </select>
            </div>
            <br />
            <button
                onClick={handleCalculateBMI}
            >
                Calculate BMI
            </button>

            {bmi && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Your BMI: {bmi}</h2>
                    <p>Category: {category}</p>
                </div>
            )}
        </div>
    );
}

export default BMI;

import React, { useState } from "react";
import { calculateBMR } from "./Formulas";

function BMR() {
    const [weight, setWeight] = useState("");
    const [weightUnit, setWeightUnit] = useState("kg");
    const [height, setHeight] = useState("");
    const [heightUnit, setHeightUnit] = useState("cm");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [bmr, setBmr] = useState(null)
    

    const handleCalculateBMR = () => {
        const calculatedBMR = calculateBMR(weight,height,age,gender,weightUnit,heightUnit);
        setBmr(calculatedBMR.toFixed(2));
    };

    return (
        <div style={{ padding: "20px" }}>
        <div>
            <label>
                Weight:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

        <div style={{ marginTop: "10px" }}>
            <label>
                Age:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter Age"
                />
            </label>
        </div>

        <div style={{ marginTop: "10px" }}>
            <label>
                Gender:
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <br />
        <button
            onClick={handleCalculateBMR}

        >
            Calculate BMR
        </button>

        {bmr && (
            <div style={{ marginTop: "20px" }}>
                <h2>Your BMR is {bmr} calories/day.</h2>
            </div>
        )}
    </div>
    );
}

export default BMR;

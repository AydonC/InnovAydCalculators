import React, { useState } from "react";
import { calculateUnit } from "./Formulas";

function Unit() {
    const [value, setValue] = useState(null)
    const [inputValue, setInput] = useState("meters");
    const [output, setOutput] = useState("kilometers");
    const [unit, setUnit] = useState(null);


    const conversionRates = {
        meters: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
        kilometers: { meters: 1000, kilometers: 1, miles: 0.621371, feet: 3280.84 },
        miles: { meters: 1609.34, kilometers: 1.60934, miles: 1, feet: 5280 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, feet: 1 },
    };

    const handleCalculateUnit = () => {
        const calculatedUnit = calculateUnit(value, inputValue, output, conversionRates);
        setUnit(calculatedUnit)
    };

    return (
        <div>
            <div className="container">
                <div>
                    <label>Value: </label>
                    <input
                        style={{ marginLeft: '15px' }}
                        type="number"
                        placeholder="Enter value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <br />
                    <br />
                    <label>From:</label>
                    <select
                        style={{ marginLeft: '20px' }}
                        value={inputValue}
                        onChange={(e) => setInput(e.target.value)}
                    >
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="miles">Miles</option>
                        <option value="feet">Feet</option>
                    </select>
                </div>
                <br />
                <div className="output-section">
                    <label>To:</label>
                    <select
                        style={{ marginLeft: '40px' }}
                        value={output}
                        onChange={(e) => setOutput(e.target.value)}
                    >
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="miles">Miles</option>
                        <option value="feet">Feet</option>
                    </select>
                </div>
            </div>
            <br />
            <button
                onClick={handleCalculateUnit}
            >
                Calculate Result
            </button>

            {
                unit && (
                    <div style={{ marginTop: "20px" }}>
                        <h2>Unit: {unit}</h2>

                    </div>
                )
            }
        </div >
    );
}

export default Unit;

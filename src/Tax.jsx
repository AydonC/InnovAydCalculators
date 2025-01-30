import React, { useState } from "react";
import { calculateTax } from "./Formulas";

function Tax() {
    const [income, setIncome] = useState("");
    const [taxRate, setTaxRate] = useState("");
    const [tax, setTax] = useState(null);
    

    const handleCalculateTax = () => {
        const calculatedtax = calculateTax(income,taxRate)
        setTax(calculatedtax.toFixed(2))
    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>
                    Income: R
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="Enter Income"
                    />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div style={{ marginTop: "10px" }}>
                <label>
                    Tax Rate:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                        placeholder="Enter Tax Rate"
                    />
                    %
                </label>
                
            </div>
            <br />
            <button
                onClick={handleCalculateTax}
            >
                Calculate Tax
            </button>

            {tax && (
                <div style={{ marginTop: "20px" }}>
                    <h2>The calculated tax is R{tax}.</h2>
                </div>
            )}
        </div>
    );
}

export default Tax;

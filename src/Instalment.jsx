import React, { useState } from "react";
import { calculateInstalment } from "./Formulas";

function Instalment() {
    const [loanAmount, setLoanAmount] = useState("");
    const [annualRate, setAnnualRate] = useState("");
    const [months, setMonths] = useState("");
    const [instalment, setInstalment] = useState(null)


    const handleCalculateInstalment = () => {
        const calculatedInstalment = calculateInstalment(loanAmount, annualRate, months);
        setInstalment(calculatedInstalment.toFixed(2));
    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>
                    Loan Amount:  R
                    <input
                        style={{ width: '130px', marginLeft: '23px' }}
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        placeholder="Enter loan amount"
                    />
                </label>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>
                    Annual Rate:

                    <input
                        style={{ width: '130px', marginLeft: '45px' }}
                        type="number"
                        value={annualRate}
                        onChange={(e) => setAnnualRate(e.target.value)}
                        placeholder="Enter Annual Rate"
                    />
                    %
                </label>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>
                    Months:
                    <input
                        style={{ marginLeft: '80px' }}
                        type="number"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                        placeholder="Enter Months"
                    />
                </label>
            </div>
            <br />
            <button
                onClick={handleCalculateInstalment}
            >
                Calculate Instalment
            </button>

            {instalment && (
                <div style={{ marginTop: "20px" }}>
                    <h2>The monthly instalment for a loan amount is R{instalment}.</h2>
                </div>
            )}
        </div>
    );
}

export default Instalment;

import React, { useState } from "react";
import { calculateBudget } from "./Formulas";

function Budget() {
    const [income, setIncome] = useState("");
    const [expenses, setExpenses] = useState("");
    const [budget, setbudget] = useState(null);


    const handleCalculateBudget = () => {
        const calculatedBudget = calculateBudget(income, expenses)
        setbudget(calculatedBudget.toFixed(2))
    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>
                    Income:  R
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    Expenses:  R
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(e.target.value)}
                        placeholder="Enter Expenses"
                    />
                    
                </label>

            </div>
            <br />
            <button
                onClick={handleCalculateBudget}
            >
                Calculate Budget
            </button>

            {budget && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Your remaining balance to budget is R{budget}.</h2>
                </div>
            )}
        </div>
    );
}

export default Budget;

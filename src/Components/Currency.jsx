import React, { useState } from "react";
import { calculateCurrency } from "./Formulas";

function Currency() {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, ZAR: 18.12, GBP: 0.75 },
        EUR: { USD: 1.18, EUR: 1, ZAR: 21.35, GBP: 0.88 },
        ZAR: { USD: 0.055, EUR: 0.047, ZAR: 1, GBP: 0.041 },
        GBP: { USD: 1.34, EUR: 1.14, ZAR: 24.31, GBP: 1 },
    };

    const handleCalculateCurrency = () => {
        const calculatedCurrency = calculateCurrency(amount, fromCurrency, toCurrency, exchangeRates);
        setResult(calculatedCurrency);
    }

    return (
        <div className="container">
            <div className="input-section">
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <br />
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="ZAR">ZAR</option>
                    <option value="GBP">GBP</option>
                </select>
                <br /><br />
                <span>to</span>
                <br /><br />
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="ZAR">ZAR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <br />
            <br />
            <button
                onClick={handleCalculateCurrency}
            >
                Calculate Currency
            </button>

            {result && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Currency: {result}</h2>
                </div>
            )}
        </div>
    );
};

export default Currency;

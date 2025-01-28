import React from 'react';

const calculators = [
  { id: 1, name: 'Basic Calculator', icon: '🧮', description: 'Use this to perform simple arithmetic calculations such as addition, subtraction, multiplication, and division.' },
  { id: 2, name: 'BMI Calculator', icon: '⚖️', description: 'Enter your weight and height to calculate your Body Mass Index (BMI) and assess whether you\'re in a healthy weight range.' },
  { id: 3, name: 'BMR Calculator', icon: '⚖️', description: 'Input your age, gender, weight, and height to estimate the number of calories your body needs to maintain basic functions at rest.' },
  { id: 4, name: 'Tax Calculator', icon: '💸', description: 'Use this to calculate your tax liability based on your income and the applicable tax rates.' },
  { id: 5, name: 'Budget Calculator', icon: '💸', description: 'Track your expenses and income to create a balanced budget that ensures financial stability.' },
  { id: 6, name: 'Installment Calculator', icon: '💸', description: 'Calculate the monthly payments for a loan based on the loan amount, interest rate, and repayment period.' },
  { id: 7, name: 'Unit Conversion Calculator', icon: '⚖️', description: 'Convert between different units of measurement such as length, weight, temperature, and more.' },
  { id: 8, name: 'Currency Conversion Calculator', icon: '💸', description: 'Convert one currency to another using the current exchange rate.' },
  { id: 9, name: 'Grade Calculator', icon: '💯', description: 'Calculate your overall grade by entering your grades and their respective weights.' },
];

const CalculatorGuide = () => {
  return (
    <div>
        <h1>WELCOME TO INNOVAYD CALCULATORS!</h1>
      <h1>Calculator Guide</h1>
      <ul>
        {calculators.map(calculator => (
          <li key={calculator.id}>
            <div >{calculator.icon}</div>
            <div>
              <h3 >{calculator.name}</h3>
              <p>{calculator.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorGuide
// Basic Calculator
export const basicCalculator = (num1, num2, operator) => {
    switch (operator) {
      case '+': return Number(num1) + Number(num2);
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      default: throw new Error('Invalid operator');
    }
  };
  
  // BMI Calculator
  export const calculateBMI = (weight, height,weightUnit,heightUnit) => {
    
    let weightInKg = parseFloat(weight);
    if (weightUnit === "g") {
        weightInKg = weightInKg / 1000;
    } else if (weightUnit === "lbs") {
        weightInKg = weightInKg * 0.453592;
    }

    let heightInMeters = parseFloat(height);
    if (heightUnit === "cm") {
        heightInMeters = heightInMeters / 100;
    } else if (heightUnit === "ft") {
        const feet = Math.floor(heightInMeters);
        const inches = (heightInMeters - feet) * 12;
        heightInMeters = (feet * 12 + inches) * 0.0254;
    }

    return weightInKg / (heightInMeters*heightInMeters)
  };
  
  // BMR Calculator
  export const calculateBMR = (weight, height, age, gender,weightUnit,heightUnit) => {

    let weightInKg = parseFloat(weight);
    if (weightUnit === "g") {
        weightInKg = weightInKg / 1000;
    } else if (weightUnit === "lbs") {
        weightInKg = weightInKg * 0.453592;
    }

    let heightInMeters = parseFloat(height);
    if (heightUnit === "cm") {
        heightInMeters = heightInMeters / 100;
    } else if (heightUnit === "ft") {
        const feet = Math.floor(heightInMeters);
        const inches = (heightInMeters - feet) * 12;
        heightInMeters = (feet * 12 + inches) * 0.0254;
    }

    if (gender === 'Male') {
      return 88.36 + (13.4 * weightInKg) + (4.8 * heightInMeters) - (5.7 * age);
    } else {
      return 447.6 + (9.2 * weightInKg) + (3.1 * heightInMeters) - (4.3 * age);
    }
  };
  
  // Tax Calculator
  export const calculateTax = (income, taxRate) => {
    return income * (taxRate / 100);
  };
  
  // Budget Calculator
  export const calculateBudget = (income, expenses) => {
    return income - expenses;
  };
  
  // Installment Calculator
  export const calculateInstalment = (loanAmount, annualRate, months) => {
    const r = annualRate / 12 / 100;
    return (loanAmount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };
  
  export const calculateUnit = (input, inputUnit, outputUnit,conversionRates) => {
    // Validate the input value
    if (isNaN(input) || input === "") {
      throw new Error("Invalid input value. Please enter a valid number.");
    }
  
    // Get the conversion rate
    const conversionRate = conversionRates[inputUnit][outputUnit];
    
    if (!conversionRate) {
      throw new Error("Invalid units for conversion.");
    }
  
    // Apply the formula
    const result = input * conversionRate;
  
    return result.toFixed(4); // Return the result rounded to 4 decimal places
  }
  
  // Currency Conversion Calculator
  export const calculateCurrency = (amount, fromCurrency, toCurrency, exchangeRates) => {
    if (!amount || isNaN(amount)) {
        throw new Error("Invalid amount");
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
        throw new Error("Invalid currency selected");
    }

    const convertedAmount = amount * rate;
    return convertedAmount.toFixed(2); // returns the converted amount rounded to 2 decimal places
};

  
  // Grade Calculator
  export const calculateGrade = (grades) => {
    const totalWeight = grades.reduce((sum, grade) => sum + grade.weight, 0);
    const weightedSum = grades.reduce((sum, grade) => sum + grade.score * grade.weight, 0);
    return totalWeight > 0 ? (weightedSum / totalWeight).toFixed(2) : 0;
  };
  
  
  // Reaction Time Calculator
  export const calculateReactionTime = (startTime, endTime) => {
    return endTime - startTime; // in milliseconds
  };
  
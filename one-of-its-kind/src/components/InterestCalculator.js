import React, { useState } from "react";
import "./InterestCalculator.css";

// Main component for the Interest Calculator
const InterestCalculator = () => {
  // State for the total shopping amount input by the user
  const [totalAmount, setTotalAmount] = useState("");
  // State for the number of months input by the user
  const [months, setMonths] = useState("");
  // State to store the calculated monthly payment amount
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  // State to store the total amount paid with interest
  const [totalPaid, setTotalPaid] = useState(0);

  // Function to calculate interest and monthly payments
  const calculateInterest = (e) => {
    e.preventDefault();
    const principal = parseFloat(totalAmount); // Convert total amount to a number
    const monthsInt = parseInt(months); // Convert months to an integer
    const interestRate = 0.2; // 20% interest rate

    // Validate input values
    if (
      isNaN(principal) ||
      isNaN(monthsInt) ||
      principal <= 0 ||
      monthsInt <= 0
    ) {
      alert("Please enter valid positive numbers for total and months.");
      return;
    }

    // Calculate total interest and the total amount including interest
    const totalInterest = principal * interestRate;
    const totalAmountWithInterest = principal + totalInterest;

    // Calculate the monthly payment amount
    const monthlyPaymentAmount = totalAmountWithInterest / monthsInt;
    setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
    setTotalPaid(totalAmountWithInterest.toFixed(2));
  };

  return (
    // Main container for the interest calculator
    <div className="interest-calculator-container">
      {/* Heading for the calculator */}
      <h2>Interest Calculator</h2>
      {/* Form to input values and calculate interest */}
      <form onSubmit={calculateInterest}>
        {/* Input group for the total shopping amount */}
        <div className="form-group">
          <label>Shopping Total (R):</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter total amount"
          />
        </div>
        {/* Input group for the number of months */}
        <div className="form-group">
          <label>Number of Months:</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Enter number of months"
          />
        </div>
        {/* Button to trigger the interest calculation */}
        <button type="submit">Calculate</button>
      </form>
      {/* Display the results after calculation */}
      {monthlyPayment > 0 && (
        <div className="results">
          <p>Monthly Payment: R{monthlyPayment}</p>
          <p>Total Paid: R{totalPaid}</p>
        </div>
      )}
    </div>
  );
};

export default InterestCalculator;

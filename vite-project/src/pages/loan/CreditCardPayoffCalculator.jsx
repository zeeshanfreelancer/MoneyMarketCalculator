import React, { useState } from "react";
import "./loanCalculator.css";

export default function CreditCardPayoffCalculator() {
  const [currency, setCurrency] = useState("$");
  const [balance, setBalance] = useState(0);
  const [interestRate, setInterestRate] = useState(18); // Default APR
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [monthsToPayoff, setMonthsToPayoff] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculatePayoff = () => {
    let monthlyRate = interestRate / 100 / 12;
    let currentBalance = parseFloat(balance);
    let payment = parseFloat(monthlyPayment);

    if (payment <= currentBalance * monthlyRate) {
      alert("Monthly payment is too low to cover interest. Increase the amount.");
      return;
    }

    let months = 0;
    let totalPaidInterest = 0;

    while (currentBalance > 0) {
      let interest = currentBalance * monthlyRate;
      let principal = payment - interest;
      currentBalance -= principal;
      totalPaidInterest += interest;
      months++;

      if (months > 600) break; // Safety: prevent infinite loop
    }

    setMonthsToPayoff(months);
    setTotalInterest(totalPaidInterest.toFixed(2));
  };

  return (
    <div className="calculator-card">
      <h2>Credit Card Payoff Calculator</h2>

      {/* Currency Selector */}
      <div className="currencyBg">
        {["$", "€", "£", "₹", "¥"].map((cur) => (
          <button
            key={cur}
            className={`currencybtns ${currency === cur ? "active" : ""}`}
            onClick={() => setCurrency(cur)}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="input-group">
        <label>Credit Card Balance:</label>
        <input
          className="inputdata"
          type="number"
          value={balance}
          onChange={(e) => setBalance(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (APR %):</label>
        <input
          className="inputdata"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Monthly Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(parseFloat(e.target.value))}
        />
      </div>

      <button className="calc-btn" onClick={calculatePayoff}>
        Calculate
      </button>

      {monthsToPayoff !== null && (
        <div className="allresults">
          <h1>Results</h1>
          <h6>
            Time to Payoff: <b>{monthsToPayoff} months</b> ({(monthsToPayoff / 12).toFixed(1)} years)
          </h6>
          <h6>
            Total Interest Paid: <b>{currency + totalInterest}</b>
          </h6>
        </div>
      )}
    </div>
  );
}

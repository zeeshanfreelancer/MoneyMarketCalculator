import React, { useState } from "react";

const SavingsGoalCalculator = () => {
  const [goalAmount, setGoalAmount] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [monthsNeeded, setMonthsNeeded] = useState(null);

  const calculateSavingsTime = () => {
    const goal = parseFloat(goalAmount);
    const monthly = parseFloat(monthlySavings);
    const annualRate = parseFloat(annualInterestRate) / 100;
    const monthlyRate = annualRate / 12;

    if (goal <= 0 || monthly <= 0) {
      setMonthsNeeded("Please enter valid values.");
      return;
    }

    let total = 0;
    let months = 0;

    while (total < goal) {
      total += monthly; // Add monthly savings
      total += total * monthlyRate; // Add interest
      months++;
      if (months > 1000) break; // Safety break
    }

    setMonthsNeeded(months);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Savings Goal Calculator</h2>

      <label>Goal Amount ($):</label>
      <input
        type="number"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Monthly Savings ($):</label>
      <input
        type="number"
        value={monthlySavings}
        onChange={(e) => setMonthlySavings(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Annual Interest Rate (%):</label>
      <input
        type="number"
        value={annualInterestRate}
        onChange={(e) => setAnnualInterestRate(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button onClick={calculateSavingsTime} style={{ padding: "10px 15px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Calculate
      </button>

      {monthsNeeded !== null && (
        <div style={{ marginTop: "15px" }}>
          {typeof monthsNeeded === "string" ? (
            <p style={{ color: "red" }}>{monthsNeeded}</p>
          ) : (
            <h4>It will take approximately {monthsNeeded} months ({(monthsNeeded / 12).toFixed(1)} years) to reach your goal.</h4>
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsGoalCalculator;

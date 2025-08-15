import React, { useState } from 'react';


const SavingsGoalCalculator = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [goalAmount, setGoalAmount] = useState(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(200);
  const [rate, setRate] = useState(5); // Annual interest rate
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let balance = parseFloat(currentBalance);
    let goal = parseFloat(goalAmount);
    let deposit = parseFloat(monthlyDeposit);
    let annualRate = parseFloat(rate) / 100;

    if (isNaN(balance) || isNaN(goal) || isNaN(deposit) || isNaN(annualRate) || goal <= balance) {
      alert('Please enter valid numbers and ensure goal is greater than current balance!');
      return;
    }

    let monthlyRate = annualRate / 12;
    let months = 0;

    // Loop until balance >= goal
    while (balance < goal) {
      balance += deposit;
      balance += balance * monthlyRate;
      months++;
      if (months > 1000 * 12) break; // Prevent infinite loop
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    setResult({
      totalMonths: months,
      years,
      months: remMonths,
      finalAmount: balance.toFixed(2)
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>How Long Will It Take to Reach My Savings Goal?</h1>

      {/* Currency Selector */}
      <label>Currency:</label>
      <div className='currencyBg1'>
        {['$', '€', '£', '₹', '¥'].map(curr => (
          <button
            key={curr}
            className={`currencybtns ${activeCurrency === curr ? 'active' : ''}`}
            onClick={() => setActiveCurrency(curr)}
          >
            {curr}
          </button>
        ))}
      </div>

      <div className="calculator-card">
        <label>Current balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} />
        </div>

        <label>Your savings goal:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} />
        </div>

        <label>Deposits being made (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
        </div>

        <label>Annual interest rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Goal Projection</h1>
          <h6>Time to reach your goal:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {result.years} years and {result.months} months
          </h1>
          <h6>Final balance at goal:</h6>
          <h1 style={{ color: "blue", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.finalAmount).toLocaleString()}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SavingsGoalCalculator;

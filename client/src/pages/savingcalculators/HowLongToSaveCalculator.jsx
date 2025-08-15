import React, { useState } from 'react';
import './SavingsCalculator.css';

const HowLongToSaveCalculator = () => {
  const [balance, setBalance] = useState(5000);
  const [goal, setGoal] = useState(20000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(500);
  const [rate, setRate] = useState(5);
  const [compounding, setCompounding] = useState(12); // monthly default
  const [result, setResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculate = () => {
    let P = parseFloat(balance);
    let G = parseFloat(goal);
    let contrib = parseFloat(monthlyDeposit);
    let r = parseFloat(rate) / 100 / compounding; 

    if (isNaN(P) || isNaN(G) || isNaN(contrib) || isNaN(r) || contrib <= 0) {
      alert('Please enter valid numbers!');
      return;
    }
    if (G <= P) {
      setResult({ monthsNeeded: 0, years: 0, months: 0 });
      return;
    }

    let months = 0;
    let futureValue = P;

    while (futureValue < G && months < 1000 * 12) { // prevent infinite loop
      futureValue *= 1 + r;
      futureValue += contrib;
      months++;
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    setResult({
      monthsNeeded: months,
      years,
      months: remMonths,
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>How Long Will It Take to Save?</h1>

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
          <input className='inputdata' type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </div>

        <label>Your savings goal:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </div>

        <label>Deposits being made (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
        </div>

        <label>Annual interest rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label>Interest compounded:</label>
        <select className='inputdata' value={compounding} onChange={(e) => setCompounding(e.target.value)}>
          <option value={1}>Yearly</option>
          <option value={4}>Quarterly</option>
          <option value={12}>Monthly</option>
        </select>

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 28 }}>Time to Reach Your Goal</h1>
          <h6>You will reach your goal of {activeCurrency}{Number(goal).toLocaleString()} in:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {result.years} years and {result.months} months
          </h1>
          <p style={{ marginTop: 10, color: "gray" }}>
            (Approx. {result.monthsNeeded} months)
          </p>
        </div>
      )}
    </div>
  );
};

export default HowLongToSaveCalculator;

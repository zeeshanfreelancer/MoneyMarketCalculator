import React, { useState } from 'react';
import './SavingsCalculator.css';

const IRRCalculator = () => {
  const [calcType, setCalcType] = useState('General');
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [endingBalance, setEndingBalance] = useState(15000);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [contribType, setContribType] = useState('Withdraw'); // Withdraw / Deposit
  const [years, setYears] = useState(2);
  const [months, setMonths] = useState(0);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [irrResult, setIrrResult] = useState(null);

  const calculateIRR = () => {
    let P = parseFloat(initialInvestment);
    let F = parseFloat(endingBalance);
    let C = parseFloat(monthlyContribution);
    let t = parseFloat(years) + parseFloat(months) / 12;

    if (isNaN(P) || isNaN(F) || isNaN(C) || isNaN(t) || t <= 0) {
      alert('Please enter valid numbers!');
      return;
    }

    // Adjust for withdrawals vs deposits
    if (contribType === 'Withdraw') C = -Math.abs(C);

    // IRR uses trial-and-error (Newton-Raphson or binary search)
    let guess = 0.1; // initial guess (10%)
    let low = -0.99;
    let high = 1.0;
    let maxIter = 1000;
    let tol = 1e-7;

    const totalMonths = Math.round(t * 12);

    function npv(rate) {
      let value = -P;
      for (let i = 1; i <= totalMonths; i++) {
        value += C / Math.pow(1 + rate, i / 12);
      }
      value += F / Math.pow(1 + rate, t);
      return value;
    }

    // Binary search for IRR
    for (let i = 0; i < maxIter; i++) {
      let mid = (low + high) / 2;
      let val = npv(mid);
      if (Math.abs(val) < tol) {
        guess = mid;
        break;
      }
      if (val > 0) {
        low = mid;
      } else {
        high = mid;
      }
      guess = mid;
    }

    setIrrResult((guess * 100).toFixed(2)); // IRR in %
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>IRR Calculator</h1>

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


      {/* Calculation type */}
      <label style={{marginTop: 20}}>Calculation type:</label>
      <br />
      <select style={{ marginTop: "20px", width: "400px"}}  value={calcType} onChange={(e) => setCalcType(e.target.value)}>
        <option>General</option>
        <option>Cash flows</option>
        <option>Multiple</option>
      </select>

      <div className="calculator-card">
        <label>Initial investment:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} />
        </div>

        <label>Ending balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={endingBalance} onChange={(e) => setEndingBalance(e.target.value)} />
        </div>

        <label>Regular contributions or withdrawals:</label>
        <select className="inputdata" value={contribType} onChange={(e) => setContribType(e.target.value)}>
          <option>Withdraw</option>
          <option>Deposit</option>
        </select>

        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} />
        </div>

        <label>Years:</label>
        <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

        <label>Months:</label>
        <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

        <button className="calc-btn" onClick={calculateIRR}>Calculate</button>
      </div>

      {irrResult !== null && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 28 }}>Your IRR</h1>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {irrResult}% per year
          </h1>
        </div>
      )}
    </div>
  );
};

export default IRRCalculator;

import React, { useState } from 'react';
import './SavingsCalculator.css';

const HowLongWillMoneyLast = () => {
  const [balance, setBalance] = useState(100000);
  const [rate, setRate] = useState(5);
  const [rateType, setRateType] = useState('Nominal'); // Nominal or APY
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(2000);
  const [increaseWithdrawal, setIncreaseWithdrawal] = useState(0); // % increase per year
  const [compounding, setCompounding] = useState(12); // monthly default
  const [result, setResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculate = () => {
    let P = parseFloat(balance);
    let r = parseFloat(rate) / 100;
    let w = parseFloat(monthlyWithdrawal);
    let inc = parseFloat(increaseWithdrawal) / 100;
    let n = parseFloat(compounding);

    if (isNaN(P) || isNaN(r) || isNaN(w) || w <= 0) {
      alert('Please enter valid numbers!');
      return;
    }

    // Convert to nominal per period if APY
    if (rateType === 'APY') {
      r = Math.pow(1 + r, 1 / n) - 1;
    } else {
      r = r / n;
    }

    let months = 0;
    let remaining = P;
    let yearlyCounter = 0;

    while (remaining > 0 && months < 1000 * 12) {
      remaining *= 1 + r;
      remaining -= w;
      months++;
      yearlyCounter++;

      // Increase withdrawals yearly
      if (inc > 0 && yearlyCounter >= 12) {
        w *= 1 + inc;
        yearlyCounter = 0;
      }
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    setResult({
      totalMonths: months,
      years,
      months: remMonths,
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>How Long Will My Money Last?</h1>

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
        <label>Current savings balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </div>

        <label>Annual interest rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        <div>
          <label>
            <input type="radio" value="Nominal" checked={rateType === 'Nominal'} onChange={(e) => setRateType(e.target.value)} /> Nominal
          </label>
          <label style={{ marginLeft: 10 }}>
            <input type="radio" value="APY" checked={rateType === 'APY'} onChange={(e) => setRateType(e.target.value)} /> APY
          </label>
        </div>

        <label>Regular withdrawals (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyWithdrawal} onChange={(e) => setMonthlyWithdrawal(e.target.value)} />
        </div>

        <label>Increase withdrawals yearly by (%):</label>
        <input className='inputdata' type="number" value={increaseWithdrawal} onChange={(e) => setIncreaseWithdrawal(e.target.value)} />

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
          <h1 style={{ color: "orangered", fontSize: 28 }}>Your Money Will Last</h1>
          <h6>Approximate duration:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {result.years} years and {result.months} months
          </h1>
          <p style={{ marginTop: 10, color: "gray" }}>
            (Approx. {result.totalMonths} months)
          </p>
        </div>
      )}
    </div>
  );
};

export default HowLongWillMoneyLast;

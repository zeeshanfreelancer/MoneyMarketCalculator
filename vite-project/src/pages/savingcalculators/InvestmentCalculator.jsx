import React, { useState } from 'react';
import './SavingsCalculator.css';

const InvestmentCalculator = () => {
  const [balance, setBalance] = useState(20000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);
  const [compounding, setCompounding] = useState(12); // Monthly default
  const [contributionType, setContributionType] = useState('None'); // None / Deposits / Withdrawals / Both
  const [monthlyDeposit, setMonthlyDeposit] = useState(100);
  const [result, setResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculate = () => {
    let P = parseFloat(balance);
    let r = parseFloat(rate) / 100 / compounding; 
    let t = parseFloat(years) + parseFloat(months) / 12;
    let contrib = parseFloat(monthlyDeposit);
    const totalMonths = Math.round(t * 12);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(compounding)) {
      alert('Please enter valid numbers!');
      return;
    }

    let futureValue = P;
    let totalContributions = 0;

    for (let i = 1; i <= totalMonths; i++) {
      futureValue *= 1 + r;
      if (contributionType !== 'None' && contrib > 0) {
        futureValue += contrib;
        totalContributions += contrib;
      }
    }

    const totalInterest = futureValue - P - totalContributions;

    setResult({
      finalAmount: futureValue.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalContributions: totalContributions.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Investment Calculator</h1>

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
        <label>Starting balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </div>

        <label>Annual rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label>Compound frequency:</label>
        <select className='inputdata' value={compounding} onChange={(e) => setCompounding(e.target.value)}>
          <option value={1}>Yearly</option>
          <option value={4}>Quarterly</option>
          <option value={12}>Monthly</option>
        </select>

        <label>Years:</label>
        <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

        <label>Months:</label>
        <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

        <label>Regular contributions:</label>
        <select className='inputdata' value={contributionType} onChange={(e) => setContributionType(e.target.value)}>
          <option>None</option>
          <option>Deposits</option>
          <option>Withdrawals</option>
          <option>Both</option>
        </select>

        <label>Deposit amount (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
        </div>

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Investment Projection</h1>
          <h6>Future value:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.finalAmount).toLocaleString()}
          </h1>
          <h6>Total contributions:</h6>
          <h1 style={{ color: "blue", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.totalContributions).toLocaleString()}
          </h1>
          <h6>Total interest earned:</h6>
          <h1 style={{ color: "orange", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.totalInterest).toLocaleString()}
          </h1>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;

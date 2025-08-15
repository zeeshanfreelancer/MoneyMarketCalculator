import React, { useState } from 'react';
import './SavingsCalculator.css';

const SavingsCalculator = () => {
  const [balance, setBalance] = useState(5000);
  const [rate, setRate] = useState(5);
  const [rateType, setRateType] = useState('Nominal'); // Nominal or APY
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [contributionType, setContributionType] = useState('Deposits'); // Deposits / Withdrawals / Both
  const [monthlyDeposit, setMonthlyDeposit] = useState(0);
  const [increaseWithInflation, setIncreaseWithInflation] = useState(false);
  const [compounding, setCompounding] = useState(12); // monthly default
  const [result, setResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculate = () => {
    let P = parseFloat(balance);
    let r = parseFloat(rate) / 100;
    let t = parseFloat(years) + parseFloat(months) / 12;
    let n = parseFloat(compounding);
    let contrib = parseFloat(monthlyDeposit);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n)) {
      alert('Please enter valid numbers!');
      return;
    }

    // Adjust for APY if selected
    if (rateType === 'APY') {
      r = Math.pow(1 + r, 1 / n) - 1; // Convert APY to nominal per period
    } else {
      r = r / n; // nominal rate per period
    }

    const totalMonths = Math.round(t * 12);
    let futureValue = P;
    let totalContributions = 0;

    for (let i = 1; i <= totalMonths; i++) {
      futureValue = futureValue * (1 + r);
      if (contrib > 0) {
        futureValue += contrib;
        totalContributions += contrib;
        if (increaseWithInflation && i % 12 === 0) {
          contrib *= 1.02; // Assume 2% inflation per year
        }
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
      <h1 style={{ marginBottom: 30 }}>Savings Calculator</h1>

      {/* Currency Selector */}
      <label>Currency:</label>
      <div className='currencyBg'>
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
        <label>Initial savings balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </div>

        <label>Interest rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        <div>
          <label>
            <input type="radio" value="Nominal" checked={rateType === 'Nominal'} onChange={(e) => setRateType(e.target.value)} /> Nominal
          </label>
          <label style={{ marginLeft: 10 }}>
            <input type="radio" value="APY" checked={rateType === 'APY'} onChange={(e) => setRateType(e.target.value)} /> APY
          </label>
        </div>

        <label>Years:</label>
        <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

        <label>Months:</label>
        <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

        <label>Regular contributions:</label>
        <select className='inputdata' value={contributionType} onChange={(e) => setContributionType(e.target.value)}>
          <option>Deposits</option>
          <option>Withdrawals</option>
          <option>Both</option>
        </select>

        <label>Monthly deposit/withdrawal amount:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
        </div>

        <label>
          <input type="checkbox" checked={increaseWithInflation} onChange={() => setIncreaseWithInflation(!increaseWithInflation)} />
          Increase deposits yearly with inflation?
        </label>

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
          <h1 style={{ color: "orangered", fontSize: 32 }}>Savings Projection</h1>
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

export default SavingsCalculator;


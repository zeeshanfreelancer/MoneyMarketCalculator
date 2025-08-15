import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const SIPCalculator = () => {
  const [initialBalance, setInitialBalance] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [rate, setRate] = useState(12); // Annual return %
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);
  const [increasePercent, setIncreasePercent] = useState(0);
  const [investmentTiming, setInvestmentTiming] = useState('Beginning'); // Beginning / End
  const [activeCurrency, setActiveCurrency] = useState('₹');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let P = parseFloat(initialBalance);
    let contrib = parseFloat(monthlyInvestment);
    let r = parseFloat(rate) / 100 / 12; // monthly rate
    let t = parseFloat(years) * 12 + parseFloat(months);
    let yearlyIncrease = parseFloat(increasePercent) / 100;

    if (isNaN(P) || isNaN(contrib) || isNaN(r) || isNaN(t)) {
      alert('Please enter valid inputs!');
      return;
    }

    let balance = P;
    let totalContributions = P;

    for (let i = 1; i <= t; i++) {
      // If investing at beginning of the month, add contribution before interest
      if (investmentTiming === 'Beginning') {
        balance += contrib;
        totalContributions += contrib;
      }

      // Apply interest
      balance *= (1 + r);

      // If investing at end of the month, add after interest
      if (investmentTiming === 'End') {
        balance += contrib;
        totalContributions += contrib;
      }

      // Increase monthly contribution every 12 months
      if (yearlyIncrease > 0 && i % 12 === 0) {
        contrib *= (1 + yearlyIncrease);
      }
    }

    const totalInterest = balance - totalContributions;

    setResult({
      finalAmount: balance.toFixed(2),
      totalInvested: totalContributions.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>SIP Calculator</h1>

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
        <label>Initial balance:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} />
        </div>

        <label>Regular investment (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} />
        </div>

        <label>Expected annual return rate (%):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label>Years:</label>
        <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

        <label>Months:</label>
        <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

        <label>Investments made when during month?</label>
        <select className='inputdata' value={investmentTiming} onChange={(e) => setInvestmentTiming(e.target.value)}>
          <option value="Beginning">Beginning</option>
          <option value="End">End</option>
        </select>

        <label>Increase regular investment by % yearly?</label>
        <input className='inputdata' type="number" value={increasePercent} onChange={(e) => setIncreasePercent(e.target.value)} />

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
          <h6>Total invested:</h6>
          <h1 style={{ color: "blue", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.totalInvested).toLocaleString()}
          </h1>
          <h6>Total returns (profit):</h6>
          <h1 style={{ color: "orange", fontWeight: "bold" }}>
            {activeCurrency} {Number(result.totalInterest).toLocaleString()}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;

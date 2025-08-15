import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const MoneyMarketCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState(5000);
  const [rate, setRate] = useState(4); // APY in %
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let P = parseFloat(initialDeposit);
    let r = parseFloat(rate) / 100;
    let t = parseFloat(years) + parseFloat(months) / 12;
    let contrib = parseFloat(monthlyContribution);
    let n = 12; // Monthly compounding

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(contrib)) {
      alert('Please enter valid numbers!');
      return;
    }

    const totalMonths = Math.round(t * 12);
    let futureValue = P;
    let totalContributions = 0;

    // Convert APY to monthly nominal rate
    let monthlyRate = Math.pow(1 + r, 1 / 12) - 1;

    for (let i = 1; i <= totalMonths; i++) {
      futureValue = futureValue * (1 + monthlyRate);
      if (contrib > 0) {
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
      <h1 style={{ marginBottom: 30 }}>Money Market Account Calculator</h1>

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
        <label>Initial deposit:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(e.target.value)} />
        </div>

        <label>Interest rate (APY %):</label>
        <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label>Years:</label>
        <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

        <label>Months:</label>
        <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

        <label>Regular contributions (monthly):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input className='inputdata' type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} />
        </div>

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Account Projection</h1>
          <h6>Future balance:</h6>
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

export default MoneyMarketCalculator;

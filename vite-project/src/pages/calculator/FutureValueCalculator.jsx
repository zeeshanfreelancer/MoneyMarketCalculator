import React, { useState } from 'react';
import '../../CompoundInterestCalculator.css';

const FutureValueCalculator = () => {
  const [presentValue, setPresentValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [compounding, setCompounding] = useState('12'); // Monthly by default
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [result, setResult] = useState(null);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [activeBtn, setActiveBtn] = useState('btn7');

  const calculateFutureValue = () => {
    const P = parseFloat(presentValue);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(years) + parseFloat(months) / 12;
    const n = parseInt(compounding);
    const PMT = parseFloat(monthlyDeposit);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(PMT)) {
      alert('Please enter valid inputs!');
      return;
    }

    // Future Value formula:
    // FV = P * (1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
    const FV_lump_sum = P * Math.pow(1 + r / n, n * t);
    const FV_contributions = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    const totalFV = FV_lump_sum + FV_contributions;

    setResult({
      futureValue: totalFV.toFixed(2),
      FV_lump_sum: FV_lump_sum.toFixed(2),
      FV_contributions: FV_contributions.toFixed(2),
      timePeriod: t.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Future Value Calculator</h1>

      <div className='calbtnback'>
        <a href='/FutureValueCalculator'>
          <button className={`calbtns ${activeBtn === 'btn7' ? 'active' : ''}`} onClick={() => setActiveBtn('btn7')}>
            FV Calculator
          </button>
        </a>
      </div>

      <div className="calculator-card">
        <label>Currency:</label>
        <div className='currencyBg'>
          {['$', '€', '£', '₹', '¥'].map((currency) => (
            <button
              key={currency}
              className={`currencybtns ${activeCurrency === currency ? 'active' : ''}`}
              onClick={() => setActiveCurrency(currency)}
            >
              {currency}
            </button>
          ))}
        </div>

        <div className="input-group">
          <label>Present Value:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input className='inputdata' type="number" value={presentValue} onChange={(e) => setPresentValue(e.target.value)} />
          </div>

          <label>Annual Interest Rate (%):</label>
          <input className='inputdata' type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

          <label>Years:</label>
          <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

          <label>Months:</label>
          <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

          <label>Monthly Deposit:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input className='inputdata' type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
          </div>

          <label>Compounded:</label>
          <select className='inputdata' value={compounding} onChange={(e) => setCompounding(e.target.value)}>
            <option value="1">Yearly</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>

        <button className="calc-btn" onClick={calculateFutureValue}>
          Calculate
        </button>
      </div>

      {result && (
        <div className='allresults'>
          <div className="result">
            <div>
              <h6>Total Future Value:</h6>
              <h1 style={{ color: "green", fontWeight: "bold" }}>{activeCurrency} {Number(result.futureValue).toLocaleString()}</h1>
              <h6>Time Period:</h6>
              <h2>{result.timePeriod} years</h2>
            </div>
            <div>
              <h6>From Present Value:</h6>
              <h2>{activeCurrency} {Number(result.FV_lump_sum).toLocaleString()}</h2>
              <h6>From Monthly Deposits:</h6>
              <h2>{activeCurrency} {Number(result.FV_contributions).toLocaleString()}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FutureValueCalculator;

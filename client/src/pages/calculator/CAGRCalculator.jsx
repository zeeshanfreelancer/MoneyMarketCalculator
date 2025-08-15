import React, { useState } from 'react';
import '../../CompoundInterestCalculator.css';

const CAGRCalculator = () => {
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [result, setResult] = useState(null);
  const [activeBtn, setActiveBtn] = useState('btn6');
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculateCAGR = () => {
    const start = parseFloat(startValue);
    const end = parseFloat(endValue);
    const t = parseFloat(years) + parseFloat(months) / 12 + parseFloat(days) / 365;

    if (isNaN(start) || isNaN(end) || isNaN(t) || start <= 0 || end <= 0 || t <= 0) {
      alert('Please enter valid positive numbers!');
      return;
    }

    const cagr = (Math.pow(end / start, 1 / t) - 1) * 100;

    setResult({
      cagr: cagr.toFixed(2),
      timePeriod: t.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>CAGR (Compound Annual Growth Rate) Calculator</h1>

      <div style={{ display: 'flex', flexDirection: "1 column" }}>
        <div className='calbtnback'>
          <a href='/CompoundInterestCalculator'>
            <button className={`calbtns ${activeBtn === 'btn1' ? 'active' : ''}`} onClick={() => setActiveBtn('btn1')}>
              Compound Interest
            </button>
          </a>
        </div>
       
        <div className='calbtnback'>
          <a href='/CAGRCalculator'>
            <button className={`calbtns ${activeBtn === 'btn6' ? 'active' : ''}`} onClick={() => setActiveBtn('btn6')}>
              CAGR Calculator
            </button>
          </a>
        </div>
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
          <label>Starting Value:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input className='inputdata' type="number" value={startValue} onChange={(e) => setStartValue(e.target.value)} />
          </div>

          <label>Ending Value:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input className='inputdata' type="number" value={endValue} onChange={(e) => setEndValue(e.target.value)} />
          </div>

          <label>Years:</label>
          <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />

          <label>Months:</label>
          <input className='inputdata' type="number" value={months} onChange={(e) => setMonths(e.target.value)} />

          <label>Days:</label>
          <input className='inputdata' type="number" value={days} onChange={(e) => setDays(e.target.value)} />
        </div>

        <button className="calc-btn" onClick={calculateCAGR}>
          Calculate
        </button>
      </div>

      {result && (
        <div className='allresults'>
          <div className="result">
            <div>
              <h6>Compound Annual Growth Rate (CAGR):</h6>
              <h1 style={{ color: "green", fontWeight: "bold" }}>{result.cagr}%</h1>
              <h6>Time Period:</h6>
              <h2>{result.timePeriod} years</h2>
            </div>
            <div>
              <h6>Initial Value:</h6>
              <h2>{activeCurrency} {Number(startValue).toLocaleString()}</h2>
              <h6>Final Value:</h6>
              <h2>{activeCurrency} {Number(endValue).toLocaleString()}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CAGRCalculator;

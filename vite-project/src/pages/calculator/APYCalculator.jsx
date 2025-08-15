import React, { useState } from 'react';
import '../../CompoundInterestCalculator.css';

const APYCalculator = () => {
  const [rate, setRate] = useState(5);
  const [compoundsPerYear, setCompoundsPerYear] = useState(12);
  const [result, setResult] = useState(null);
  const [activeBtn, setActiveBtn] = useState('btn5');
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculateAPY = () => {
    const R = parseFloat(rate) / 100;
    const N = parseFloat(compoundsPerYear);

    if (isNaN(R) || isNaN(N)) {
      alert('Please enter valid numbers!');
      return;
    }

    const apy = (Math.pow(1 + R / N, N) - 1) * 100;

    setResult({
      apy: apy.toFixed(2)
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>APY Calculator</h1>

      <div style={{ display: 'flex', flexDirection: "1 column" }}>
        <div className='calbtnback'>
          <a href='/CompoundInterestCalculator'>
            <button className={`calbtns ${activeBtn === 'btn1' ? 'active' : ''}`} onClick={() => setActiveBtn('btn1')}>
              Compound Interest
            </button>
          </a>
        </div>
        <div className='calbtnback'>
          <a href='/SimpleInterestCalculator'>
            <button className={`calbtns ${activeBtn === 'btn2' ? 'active' : ''}`} onClick={() => setActiveBtn('btn2')}>
              Simple Interest
            </button>
          </a>
        </div>
        <div className='calbtnback'>
          <a href='/DailyCompoundCalculator'>
            <button className={`calbtns ${activeBtn === 'btn3' ? 'active' : ''}`} onClick={() => setActiveBtn('btn3')}>
              Daily Compound
            </button>
          </a>
        </div>
        <div className='calbtnback'>
          <a href='/ForexCompoundCalculator'>
            <button className={`calbtns ${activeBtn === 'btn4' ? 'active' : ''}`} onClick={() => setActiveBtn('btn4')}>
              Forex Compound
            </button>
          </a>
        </div>
        <div className='calbtnback'>
          <a href='/APYCalculator'>
            <button className={`calbtns ${activeBtn === 'btn5' ? 'active' : ''}`} onClick={() => setActiveBtn('btn5')}>
              APY Calculator
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
          <label>Annual Interest Rate (%)</label>
          <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

          <label>Compounds Per Year</label>
          <input className='inputdata' type="number" value={compoundsPerYear} onChange={(e) => setCompoundsPerYear(e.target.value)} />
        </div>

        <button className="calc-btn" onClick={calculateAPY}>
          Calculate APY
        </button>
      </div>

      {result && (
        <div className='allresults'>
          <div className="result">
            <div>
              <h6>Annual Percentage Yield (APY):</h6>
              <h1 style={{ color: "green", fontWeight: "bold" }}>{result.apy}%</h1>
            </div>
            <div>
              <h6>Rate Entered:</h6>
              <p style={{ fontSize: 50, color: "orangered", fontWeight: "bold" }}>{rate}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APYCalculator;

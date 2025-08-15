import React, { useState } from 'react';
import '../../CompoundInterestCalculator.css'; // Reuse the same styles

const DailyCompoundCalculator = () => {
  const [principal, setPrincipal] = useState(5000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(8);
  const [result, setResult] = useState(null);
  const [activeBtn, setActiveBtn] = useState('btn3');
  const [activeCurrency, setActiveCurrency] = useState('$');

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = 365;

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      alert('Please enter valid numbers!');
      return;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    setResult({
      finalAmount: A.toFixed(2),
      totalInterest: interest.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Daily Compound Interest Calculator</h1>

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
          <label>Initial investment:</label>
          <div className='inputdiv'>
            <button className='activebtnCurrency'>{activeCurrency}</button>
            <input className='inputdata' type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
          </div>

          <label>Annual Interest Rate (%)</label>
          <input className='inputdata' type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

          <label>Years</label>
          <input className='inputdata' type="number" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>

        <button className="calc-btn" onClick={calculate}>
          Calculate
        </button>
      </div>

      <div className='allresults'>
        <div style={{ borderBottom: '1px solid rgb(216, 213, 213)', paddingBottom: 20 }}>
          <h1 style={{ color: "orangered", fontSize: 32 }}>
            Calculation for {years} year{years > 1 ? 's' : ''}
          </h1>
        </div>

        {result && (
          <div className="result">
            <div>
              <h6>Future investment value:</h6>
              <h1 style={{ color: "green", fontWeight: "bold" }}>{activeCurrency} {Number(result.finalAmount).toLocaleString()}</h1>

              <h6>Total interest earned:</h6>
              <h1 style={{ color: "orange", fontWeight: "bold" }}>{activeCurrency} {Number(result.totalInterest).toLocaleString()}</h1>

              <h6>Initial balance</h6>
              <h1 style={{ color: "rgb(108, 125, 221)", fontWeight: "bold" }}>{activeCurrency} {principal}</h1>
            </div>

            <div>
              <h6>Compounding Frequency</h6>
              <p style={{ fontSize: 30, color: "gray", fontWeight: "bold" }}>Daily (365x/year)</p>
              <h6>Annual Rate Used</h6>
              <p style={{ fontSize: 50, color: "orangered", fontWeight: "bold" }}>{rate}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyCompoundCalculator;

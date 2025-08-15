import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const TimeAndHalfCalculator = () => {
  const [payType, setPayType] = useState('Hourly');
  const [payRate, setPayRate] = useState(15);
  const [standardHours, setStandardHours] = useState(40);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let hourlyRate = parseFloat(payRate);

    // Convert other pay types to hourly
    switch (payType) {
      case 'Daily':
        hourlyRate = hourlyRate / 8; // assume 8-hour workday
        break;
      case 'Weekly':
        hourlyRate = hourlyRate / 40; // assume 40-hour workweek
        break;
      case 'Monthly':
        hourlyRate = hourlyRate / (40 * 4.33); // avg weeks in a month
        break;
      case 'Annual':
        hourlyRate = hourlyRate / (40 * 52); // annual to hourly
        break;
      default:
        break;
    }

    const standardPay = hourlyRate * standardHours;
    const overtimePay = hourlyRate * 1.5 * overtimeHours;
    const totalPay = standardPay + overtimePay;

    setResult({
      hourlyRate: hourlyRate.toFixed(2),
      standardPay: standardPay.toFixed(2),
      overtimePay: overtimePay.toFixed(2),
      totalPay: totalPay.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Time and a Half Calculator</h1>

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
        <label>Pay rate type:</label>
        <select className='inputdata' value={payType} onChange={(e) => setPayType(e.target.value)}>
          <option>Hourly</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Annual</option>
        </select>

        <label>Pay rate:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input
            className='inputdata'
            type="number"
            value={payRate}
            onChange={(e) => setPayRate(e.target.value)}
          />
        </div>

        <label>Standard hours worked:</label>
        <input
          className='inputdata'
          type="number"
          value={standardHours}
          onChange={(e) => setStandardHours(e.target.value)}
        />

        <label>Hours worked at time and a half:</label>
        <input
          className='inputdata'
          type="number"
          value={overtimeHours}
          onChange={(e) => setOvertimeHours(e.target.value)}
        />

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Pay Breakdown</h1>
          <h6>Hourly Rate (calculated):</h6>
          <h2>{activeCurrency} {Number(result.hourlyRate).toLocaleString()}</h2>
          <h6>Standard Pay:</h6>
          <h2 style={{ color: "blue" }}>{activeCurrency} {Number(result.standardPay).toLocaleString()}</h2>
          <h6>Overtime Pay (1.5x):</h6>
          <h2 style={{ color: "orange" }}>{activeCurrency} {Number(result.overtimePay).toLocaleString()}</h2>
          <h6>Total Pay:</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>{activeCurrency} {Number(result.totalPay).toLocaleString()}</h1>
        </div>
      )}
    </div>
  );
};

export default TimeAndHalfCalculator;

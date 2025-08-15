import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const OvertimeCalculator = () => {
  const [payRate, setPayRate] = useState(15);
  const [weeklyHours, setWeeklyHours] = useState(40);
  const [tier1Overtime, setTier1Overtime] = useState(0);
  const [tier2Overtime, setTier2Overtime] = useState(0);
  const [payFrequency, setPayFrequency] = useState('Weekly');
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);
  const calculate = () => {
    const rate = parseFloat(payRate);
    const hours = parseFloat(weeklyHours);
    const t1 = parseFloat(tier1Overtime);
    const t2 = parseFloat(tier2Overtime);

    if (isNaN(rate) || isNaN(hours) || isNaN(t1) || isNaN(t2)) {
      alert('Please enter valid numbers!');
      return;
    }

    // Standard weekly pay
    const standardPay = rate * hours;

    // Overtime pay
    const overtimeTier1Pay = rate * 1.5 * t1;
    const overtimeTier2Pay = rate * 2 * t2;

    // Weekly total
    const weeklyTotal = standardPay + overtimeTier1Pay + overtimeTier2Pay;

    // Adjust for pay frequency
    let payPeriods = 1;
    switch (payFrequency) {
      case 'Bi-weekly':
        payPeriods = 2;
        break;
      case 'Semi-monthly':
        payPeriods = 4.33 / 2; // about 2.165 pay periods in 2 weeks
        break;
      case 'Monthly':
        payPeriods = 4.33; // avg weeks per month
        break;
      default:
        payPeriods = 1;
    }

    const totalPay = weeklyTotal * payPeriods;

    setResult({
      standardPay: standardPay.toFixed(2),
      overtimeTier1Pay: overtimeTier1Pay.toFixed(2),
      overtimeTier2Pay: overtimeTier2Pay.toFixed(2),
      weeklyTotal: weeklyTotal.toFixed(2),
      totalPay: totalPay.toFixed(2),
    });
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Overtime Calculator</h1>

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
        <label>Standard pay rate (per hour):</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input
            className='inputdata'
            type="number"
            value={payRate}
            onChange={(e) => setPayRate(e.target.value)}
          />
        </div>

        <label>How many hours do you usually work (per week)?</label>
        <input
          className='inputdata'
          type="number"
          value={weeklyHours}
          onChange={(e) => setWeeklyHours(e.target.value)}
        />

        <label>How often are you paid?</label>
        <select className='inputdata' value={payFrequency} onChange={(e) => setPayFrequency(e.target.value)}>
          <option>Weekly</option>
          <option>Bi-weekly</option>
          <option>Semi-monthly</option>
          <option>Monthly</option>
        </select>

        <label>Tier 1 Overtime Hours (1.5×):</label>
        <input
          className='inputdata'
          type="number"
          value={tier1Overtime}
          onChange={(e) => setTier1Overtime(e.target.value)}
        />

        <label>Tier 2 Overtime Hours (2×):</label>
        <input
          className='inputdata'
          type="number"
          value={tier2Overtime}
          onChange={(e) => setTier2Overtime(e.target.value)}
        />

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Pay Breakdown</h1>
          <h6>Standard Weekly Pay:</h6>
          <h2>{activeCurrency} {Number(result.standardPay).toLocaleString()}</h2>
          <h6>Overtime Tier 1 (1.5×):</h6>
          <h2 style={{ color: "orange" }}>{activeCurrency} {Number(result.overtimeTier1Pay).toLocaleString()}</h2>
          <h6>Overtime Tier 2 (2×):</h6>
          <h2 style={{ color: "red" }}>{activeCurrency} {Number(result.overtimeTier2Pay).toLocaleString()}</h2>
          <h6>Total Weekly Pay:</h6>
          <h2 style={{ color: "blue" }}>{activeCurrency} {Number(result.weeklyTotal).toLocaleString()}</h2>
          <h6>Total Pay ({payFrequency}):</h6>
          <h1 style={{ color: "green", fontWeight: "bold" }}>{activeCurrency} {Number(result.totalPay).toLocaleString()}</h1>
        </div>
      )}
    </div>
  );
};

export default OvertimeCalculator;

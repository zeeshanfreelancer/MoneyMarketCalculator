import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const HourlyToSalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(15);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const rate = parseFloat(hourlyRate);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);

    if (isNaN(rate) || isNaN(hours) || isNaN(weeks)) {
      alert('Please enter valid numbers!');
      return;
    }

    const annualSalary = rate * hours * weeks;
    setResult(annualSalary.toFixed(2));
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Hourly to Salary Calculator</h1>

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
        <label>Hourly pay:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input
            className='inputdata'
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </div>

        <label>Work hours per week:</label>
        <input
          className='inputdata'
          type="number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
        />

        <label>Work weeks per year:</label>
        <input
          className='inputdata'
          type="number"
          value={weeksPerYear}
          onChange={(e) => setWeeksPerYear(e.target.value)}
        />

        <button className="calc-btn" onClick={calculate}>Calculate</button>
      </div>

      {/* Results */}
      {result && (
        <div className='allresults'>
          <h1 style={{ color: "orangered", fontSize: 32 }}>Annual Salary</h1>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {activeCurrency} {Number(result).toLocaleString()}
          </h1>
        </div>
      )}
    </div>
  );
};

export default HourlyToSalaryCalculator;

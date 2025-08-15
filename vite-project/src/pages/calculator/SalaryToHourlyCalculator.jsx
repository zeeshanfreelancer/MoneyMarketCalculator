import React, { useState } from 'react';
import '../savingcalculators/SavingsCalculator.css';

const SalaryToHourlyCalculator = () => {
  const [salary, setSalary] = useState(30000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  const [activeCurrency, setActiveCurrency] = useState('$');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const annual = parseFloat(salary);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);

    if (isNaN(annual) || isNaN(hours) || isNaN(weeks) || hours === 0 || weeks === 0) {
      alert('Please enter valid numbers!');
      return;
    }

    const hourlyRate = annual / (hours * weeks);
    setResult(hourlyRate.toFixed(2));
  };

  return (
    <div style={{ margin: "50px 50px" }}>
      <h1 style={{ marginBottom: 30 }}>Salary to Hourly Calculator</h1>

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
        <label>Annual Salary:</label>
        <div className='inputdiv'>
          <button className='activebtnCurrency'>{activeCurrency}</button>
          <input
            className='inputdata'
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <label>Hours worked per week:</label>
        <input
          className='inputdata'
          type="number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
        />

        <label>Weeks worked per year:</label>
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
          <h1 style={{ color: "orangered", fontSize: 32 }}>Hourly Rate</h1>
          <h1 style={{ color: "green", fontWeight: "bold" }}>
            {activeCurrency} {Number(result).toLocaleString()}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SalaryToHourlyCalculator;

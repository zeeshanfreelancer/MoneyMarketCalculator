import React, { useState } from "react";
import "./loanCalculator.css";

export default function LoanCalculator() {
  const [currency, setCurrency] = useState("$");
  const [loanAmount, setLoanAmount] = useState(20000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [startDate, setStartDate] = useState("2025-08-01");
  const [monthlyExtra, setMonthlyExtra] = useState(0);
  const [oneTimeExtra, setOneTimeExtra] = useState(0);
  const [balloonPayment, setBalloonPayment] = useState(0);
  const [fees, setFees] = useState(0);
  const [addFeesToLoan, setAddFeesToLoan] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
    const [activeBtn, setActiveBtn] = useState('btn1');

  const calculateLoan = () => {
    let principal = addFeesToLoan
      ? parseFloat(loanAmount) + parseFloat(fees)
      : parseFloat(loanAmount);
    let totalMonths = parseInt(years) * 12 + parseInt(months);
    let monthlyInterest = interestRate / 100 / 12;

    let baseMonthlyPayment =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -totalMonths));

    let payment = baseMonthlyPayment + parseFloat(monthlyExtra);
    let balance = principal;
    let currentDate = new Date(startDate);
    let table = [];
    let totalPaidInterest = 0;

    for (let i = 1; i <= totalMonths; i++) {
      let interestPayment = balance * monthlyInterest;
      let principalPayment = payment - interestPayment;

      if (i === 1 && oneTimeExtra > 0) {
        principalPayment += parseFloat(oneTimeExtra);
      }

      balance -= principalPayment;
      if (balance <= balloonPayment) break;

      table.push({
        month: i,
        date: currentDate.toLocaleDateString(),
        payment: payment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance.toFixed(2),
      });

      totalPaidInterest += interestPayment;
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    setMonthlyPayment(baseMonthlyPayment.toFixed(2));
    setTotalInterest(totalPaidInterest.toFixed(2));
    setSchedule(table);
  };

  return (
    <div className="calculator-card">
      <h2>Loan Calculator</h2>

       <div style={{display: 'flex', flexDirection: "1 column"}}>
        <div className='calbtnback'>
          <a href='/LoanCalculator'>
          <button
            className={`calbtns ${activeBtn === 'btn1' ? 'active' : ''}`}
            onClick={() => setActiveBtn('btn1')}
          >
          Loan Calculator
          </button></a>
          </div>
           <div className='calbtnback'>
            <a href='/LoanPayOff'>
          <button
            className={`calbtns ${activeBtn === 'btn2' ? 'active' : ''}`}
            onClick={() => setActiveBtn('btn2')}
          >
          Loan Payoff
          </button></a>
          </div>
           <div className='calbtnback'>
            <a href='/AmortizationCalculator'>
          <button
            className={`calbtns ${activeBtn === 'btn3' ? 'active' : ''}`}
            onClick={() => setActiveBtn('btn3')}
          >
          Amoritization Calc
          </button></a>
          </div>
          
</div>

      {/* Currency Selector */}
      <div className="currencyBg">
        {["$", "€", "£", "₹", "¥"].map((cur) => (
          <button
            key={cur}
            className={`currencybtns ${currency === cur ? "active" : ""}`}
            onClick={() => setCurrency(cur)}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="input-group">
        <label>Loan Amount:</label>
        <input
          className="inputdata"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Annual Interest Rate (%):</label>
        <input
          className="inputdata"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Loan Term:</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            className="inputdata"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Years"
          />
          <input
            className="inputdata"
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Months"
          />
        </div>
      </div>
      <div className="input-group">
        <label>Loan Start Date:</label>
        <input
          className="inputdata"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Additional Monthly Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={monthlyExtra}
          onChange={(e) => setMonthlyExtra(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>One-Time Extra Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={oneTimeExtra}
          onChange={(e) => setOneTimeExtra(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Balloon Payment:</label>
        <input
          className="inputdata"
          type="number"
          value={balloonPayment}
          onChange={(e) => setBalloonPayment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Extra Fees:</label>
        <input
          className="inputdata"
          type="number"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={addFeesToLoan}
            onChange={() => setAddFeesToLoan(!addFeesToLoan)}
          />
          Add to loan
        </label>
      </div>

      <button className="calc-btn" onClick={calculateLoan}>
        Calculate
      </button>

      {monthlyPayment > 0 && (
        <div className="allresults">
          <h1>Results</h1>
          <h6>
            Monthly Payment: <b>{currency + monthlyPayment}</b>
          </h6>
          <h6>
            Total Interest Paid: <b>{currency + totalInterest}</b>
          </h6>
        </div>
      )}
    </div>
  );
}
